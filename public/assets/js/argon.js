/*!

=========================================================
* Argon Dashboard PRO - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/



//
// Layout
//


! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ImageResize = e() : t.ImageResize = e() }(this, function() {
    return function(t) {
        function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) { return t }, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 41)
    }([function(t, e) {
        function n(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) }
        t.exports = n
    }, function(t, e, n) {
        var r = n(23),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = r || o || Function("return this")();
        t.exports = i
    }, function(t, e) {
        function n(t) { return null != t && "object" == typeof t }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        var o = n(82),
            i = n(83),
            l = n(84),
            a = n(85),
            s = n(86);
        r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = l, r.prototype.has = a, r.prototype.set = s, t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            for (var n = t.length; n--;)
                if (o(t[n][0], e)) return n;
            return -1
        }
        var o = n(8);
        t.exports = r
    }, function(t, e, n) {
        function r(t) { return null == t ? void 0 === t ? s : a : u && u in Object(t) ? i(t) : l(t) }
        var o = n(17),
            i = n(71),
            l = n(94),
            a = "[object Null]",
            s = "[object Undefined]",
            u = o ? o.toStringTag : void 0;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) { var n = t.__data__; return o(e) ? n["string" == typeof e ? "string" : "hash"] : n.map }
        var o = n(80);
        t.exports = r
    }, function(t, e, n) {
        var r = n(11),
            o = r(Object, "create");
        t.exports = o
    }, function(t, e) {
        function n(t, e) { return t === e || t !== t && e !== e }
        t.exports = n
    }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        n.d(e, "a", function() { return o });
        var o = function t(e) { r(this, t), this.onCreate = function() {}, this.onDestroy = function() {}, this.onUpdate = function() {}, this.overlay = e.overlay, this.img = e.img, this.options = e.options, this.requestUpdate = e.onUpdate }
    }, function(t, e, n) {
        function r(t, e, n) { "__proto__" == e && o ? o(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : t[e] = n }
        var o = n(22);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) { var n = i(t, e); return o(n) ? n : void 0 }
        var o = n(55),
            i = n(72);
        t.exports = r
    }, function(t, e, n) {
        function r(t) { return null != t && i(t.length) && !o(t) }
        var o = n(13),
            i = n(32);
        t.exports = r
    }, function(t, e, n) {
        function r(t) { if (!i(t)) return !1; var e = o(t); return e == a || e == s || e == l || e == u }
        var o = n(5),
            i = n(0),
            l = "[object AsyncFunction]",
            a = "[object Function]",
            s = "[object GeneratorFunction]",
            u = "[object Proxy]";
        t.exports = r
    }, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, function(t, e, n) {
        (function(e) {
            /*!
             * Quill Editor v1.3.6
             * https://quilljs.com/
             * Copyright (c) 2014, Jason Chen
             * Copyright (c) 2013, salesforce.com
             */
            ! function(e, n) { t.exports = n() }("undefined" != typeof self && self, function() {
                return function(t) {
                    function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports }
                    var n = {};
                    return e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: r }) }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 109)
                }([function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var r = n(17),
                        o = n(18),
                        i = n(19),
                        l = n(45),
                        a = n(46),
                        s = n(47),
                        u = n(48),
                        c = n(49),
                        f = n(12),
                        h = n(32),
                        p = n(33),
                        d = n(31),
                        y = n(1),
                        v = { Scope: y.Scope, create: y.create, find: y.find, query: y.query, register: y.register, Container: r.default, Format: o.default, Leaf: i.default, Embed: u.default, Scroll: l.default, Block: s.default, Inline: a.default, Text: c.default, Attributor: { Attribute: f.default, Class: h.default, Style: p.default, Store: d.default } };
                    e.default = v
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { var n = i(t); if (null == n) throw new s("Unable to create " + t + " blot"); var r = n; return new r(t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : r.create(e), e) }

                    function o(t, n) { return void 0 === n && (n = !1), null == t ? null : null != t[e.DATA_KEY] ? t[e.DATA_KEY].blot : n ? o(t.parentNode, n) : null }

                    function i(t, e) {
                        void 0 === e && (e = p.ANY);
                        var n;
                        if ("string" == typeof t) n = h[t] || u[t];
                        else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) n = h.text;
                        else if ("number" == typeof t) t & p.LEVEL & p.BLOCK ? n = h.block : t & p.LEVEL & p.INLINE && (n = h.inline);
                        else if (t instanceof HTMLElement) {
                            var r = (t.getAttribute("class") || "").split(/\s+/);
                            for (var o in r)
                                if (n = c[r[o]]) break;
                            n = n || f[t.tagName]
                        }
                        return null == n ? null : e & p.LEVEL & n.scope && e & p.TYPE & n.scope ? n : null
                    }

                    function l() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        if (t.length > 1) return t.map(function(t) { return l(t) });
                        var n = t[0];
                        if ("string" != typeof n.blotName && "string" != typeof n.attrName) throw new s("Invalid definition");
                        if ("abstract" === n.blotName) throw new s("Cannot register abstract class");
                        if (h[n.blotName || n.attrName] = n, "string" == typeof n.keyName) u[n.keyName] = n;
                        else if (null != n.className && (c[n.className] = n), null != n.tagName) {
                            Array.isArray(n.tagName) ? n.tagName = n.tagName.map(function(t) { return t.toUpperCase() }) : n.tagName = n.tagName.toUpperCase();
                            var r = Array.isArray(n.tagName) ? n.tagName : [n.tagName];
                            r.forEach(function(t) { null != f[t] && null != n.className || (f[t] = n) })
                        }
                        return n
                    }
                    var a = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var s = function(t) {
                        function e(e) { var n = this; return e = "[Parchment] " + e, n = t.call(this, e) || this, n.message = e, n.name = n.constructor.name, n }
                        return a(e, t), e
                    }(Error);
                    e.ParchmentError = s;
                    var u = {},
                        c = {},
                        f = {},
                        h = {};
                    e.DATA_KEY = "__blot";
                    var p;
                    ! function(t) { t[t.TYPE = 3] = "TYPE", t[t.LEVEL = 12] = "LEVEL", t[t.ATTRIBUTE = 13] = "ATTRIBUTE", t[t.BLOT = 14] = "BLOT", t[t.INLINE = 7] = "INLINE", t[t.BLOCK = 11] = "BLOCK", t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT", t[t.INLINE_BLOT = 6] = "INLINE_BLOT", t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t[t.ANY = 15] = "ANY" }(p = e.Scope || (e.Scope = {})), e.create = r, e.find = o, e.query = i, e.register = l
                }, function(t, e, n) {
                    var r = n(51),
                        o = n(11),
                        i = n(3),
                        l = n(20),
                        a = String.fromCharCode(0),
                        s = function(t) { Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = [] };
                    s.prototype.insert = function(t, e) { var n = {}; return 0 === t.length ? this : (n.insert = t, null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n)) }, s.prototype.delete = function(t) { return t <= 0 ? this : this.push({ delete: t }) }, s.prototype.retain = function(t, e) { if (t <= 0) return this; var n = { retain: t }; return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e), this.push(n) }, s.prototype.push = function(t) {
                        var e = this.ops.length,
                            n = this.ops[e - 1];
                        if (t = i(!0, {}, t), "object" == typeof n) { if ("number" == typeof t.delete && "number" == typeof n.delete) return this.ops[e - 1] = { delete: n.delete + t.delete }, this; if ("number" == typeof n.delete && null != t.insert && (e -= 1, "object" != typeof(n = this.ops[e - 1]))) return this.ops.unshift(t), this; if (o(t.attributes, n.attributes)) { if ("string" == typeof t.insert && "string" == typeof n.insert) return this.ops[e - 1] = { insert: n.insert + t.insert }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this; if ("number" == typeof t.retain && "number" == typeof n.retain) return this.ops[e - 1] = { retain: n.retain + t.retain }, "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this } }
                        return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this
                    }, s.prototype.chop = function() { var t = this.ops[this.ops.length - 1]; return t && t.retain && !t.attributes && this.ops.pop(), this }, s.prototype.filter = function(t) { return this.ops.filter(t) }, s.prototype.forEach = function(t) { this.ops.forEach(t) }, s.prototype.map = function(t) { return this.ops.map(t) }, s.prototype.partition = function(t) {
                        var e = [],
                            n = [];
                        return this.forEach(function(r) {
                            (t(r) ? e : n).push(r)
                        }), [e, n]
                    }, s.prototype.reduce = function(t, e) { return this.ops.reduce(t, e) }, s.prototype.changeLength = function() { return this.reduce(function(t, e) { return e.insert ? t + l.length(e) : e.delete ? t - e.delete : t }, 0) }, s.prototype.length = function() { return this.reduce(function(t, e) { return t + l.length(e) }, 0) }, s.prototype.slice = function(t, e) {
                        t = t || 0, "number" != typeof e && (e = 1 / 0);
                        for (var n = [], r = l.iterator(this.ops), o = 0; o < e && r.hasNext();) {
                            var i;
                            o < t ? i = r.next(t - o) : (i = r.next(e - o), n.push(i)), o += l.length(i)
                        }
                        return new s(n)
                    }, s.prototype.compose = function(t) {
                        for (var e = l.iterator(this.ops), n = l.iterator(t.ops), r = new s; e.hasNext() || n.hasNext();)
                            if ("insert" === n.peekType()) r.push(n.next());
                            else if ("delete" === e.peekType()) r.push(e.next());
                        else {
                            var o = Math.min(e.peekLength(), n.peekLength()),
                                i = e.next(o),
                                a = n.next(o);
                            if ("number" == typeof a.retain) {
                                var u = {};
                                "number" == typeof i.retain ? u.retain = o : u.insert = i.insert;
                                var c = l.attributes.compose(i.attributes, a.attributes, "number" == typeof i.retain);
                                c && (u.attributes = c), r.push(u)
                            } else "number" == typeof a.delete && "number" == typeof i.retain && r.push(a)
                        }
                        return r.chop()
                    }, s.prototype.concat = function(t) { var e = new s(this.ops.slice()); return t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1))), e }, s.prototype.diff = function(t, e) {
                        if (this.ops === t.ops) return new s;
                        var n = [this, t].map(function(e) { return e.map(function(n) { if (null != n.insert) return "string" == typeof n.insert ? n.insert : a; var r = e === t ? "on" : "with"; throw new Error("diff() called " + r + " non-document") }).join("") }),
                            i = new s,
                            u = r(n[0], n[1], e),
                            c = l.iterator(this.ops),
                            f = l.iterator(t.ops);
                        return u.forEach(function(t) {
                            for (var e = t[1].length; e > 0;) {
                                var n = 0;
                                switch (t[0]) {
                                    case r.INSERT:
                                        n = Math.min(f.peekLength(), e), i.push(f.next(n));
                                        break;
                                    case r.DELETE:
                                        n = Math.min(e, c.peekLength()), c.next(n), i.delete(n);
                                        break;
                                    case r.EQUAL:
                                        n = Math.min(c.peekLength(), f.peekLength(), e);
                                        var a = c.next(n),
                                            s = f.next(n);
                                        o(a.insert, s.insert) ? i.retain(n, l.attributes.diff(a.attributes, s.attributes)) : i.push(s).delete(n)
                                }
                                e -= n
                            }
                        }), i.chop()
                    }, s.prototype.eachLine = function(t, e) {
                        e = e || "\n";
                        for (var n = l.iterator(this.ops), r = new s, o = 0; n.hasNext();) {
                            if ("insert" !== n.peekType()) return;
                            var i = n.peek(),
                                a = l.length(i) - n.peekLength(),
                                u = "string" == typeof i.insert ? i.insert.indexOf(e, a) - a : -1;
                            if (u < 0) r.push(n.next());
                            else if (u > 0) r.push(n.next(u));
                            else {
                                if (!1 === t(r, n.next(1).attributes || {}, o)) return;
                                o += 1, r = new s
                            }
                        }
                        r.length() > 0 && t(r, {}, o)
                    }, s.prototype.transform = function(t, e) {
                        if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);
                        for (var n = l.iterator(this.ops), r = l.iterator(t.ops), o = new s; n.hasNext() || r.hasNext();)
                            if ("insert" !== n.peekType() || !e && "insert" === r.peekType())
                                if ("insert" === r.peekType()) o.push(r.next());
                                else {
                                    var i = Math.min(n.peekLength(), r.peekLength()),
                                        a = n.next(i),
                                        u = r.next(i);
                                    if (a.delete) continue;
                                    u.delete ? o.push(u) : o.retain(i, l.attributes.transform(a.attributes, u.attributes, e))
                                }
                        else o.retain(l.length(n.next()));
                        return o.chop()
                    }, s.prototype.transformPosition = function(t, e) {
                        e = !!e;
                        for (var n = l.iterator(this.ops), r = 0; n.hasNext() && r <= t;) {
                            var o = n.peekLength(),
                                i = n.peekType();
                            n.next(), "delete" !== i ? ("insert" === i && (r < t || !e) && (t += o), r += o) : t -= Math.min(o, t - r)
                        }
                        return t
                    }, t.exports = s
                }, function(t, e) {
                    "use strict";
                    var n = Object.prototype.hasOwnProperty,
                        r = Object.prototype.toString,
                        o = function(t) { return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === r.call(t) },
                        i = function(t) {
                            if (!t || "[object Object]" !== r.call(t)) return !1;
                            var e = n.call(t, "constructor"),
                                o = t.constructor && t.constructor.prototype && n.call(t.constructor.prototype, "isPrototypeOf");
                            if (t.constructor && !e && !o) return !1;
                            var i;
                            for (i in t);
                            return void 0 === i || n.call(t, i)
                        };
                    t.exports = function t() {
                        var e, n, r, l, a, s, u = arguments[0],
                            c = 1,
                            f = arguments.length,
                            h = !1;
                        for ("boolean" == typeof u && (h = u, u = arguments[1] || {}, c = 2), (null == u || "object" != typeof u && "function" != typeof u) && (u = {}); c < f; ++c)
                            if (null != (e = arguments[c]))
                                for (n in e) r = u[n], l = e[n], u !== l && (h && l && (i(l) || (a = o(l))) ? (a ? (a = !1, s = r && o(r) ? r : []) : s = r && i(r) ? r : {}, u[n] = t(h, s, l)) : void 0 !== l && (u[n] = l));
                        return u
                    }
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function a(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return null == t ? e : ("function" == typeof t.formats && (e = (0, f.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : a(t.parent, e)) }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.BlockEmbed = e.bubbleFormats = void 0;
                    var s = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        u = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        c = n(3),
                        f = r(c),
                        h = n(2),
                        p = r(h),
                        d = n(0),
                        y = r(d),
                        v = n(16),
                        b = r(v),
                        g = n(6),
                        m = r(g),
                        _ = n(7),
                        O = r(_),
                        w = function(t) {
                            function e() { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return l(e, t), s(e, [{ key: "attach", value: function() { u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "attach", this).call(this), this.attributes = new y.default.Attributor.Store(this.domNode) } }, { key: "delta", value: function() { return (new p.default).insert(this.value(), (0, f.default)(this.formats(), this.attributes.values())) } }, {
                                key: "format",
                                value: function(t, e) {
                                    var n = y.default.query(t, y.default.Scope.BLOCK_ATTRIBUTE);
                                    null != n && this.attributes.attribute(n, e)
                                }
                            }, { key: "formatAt", value: function(t, e, n, r) { this.format(n, r) } }, {
                                key: "insertAt",
                                value: function(t, n, r) {
                                    if ("string" == typeof n && n.endsWith("\n")) {
                                        var o = y.default.create(x.blotName);
                                        this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, n.slice(0, -1))
                                    } else u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r)
                                }
                            }]), e
                        }(y.default.Embed);
                    w.scope = y.default.Scope.BLOCK_BLOT;
                    var x = function(t) {
                        function e(t) { o(this, e); var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return n.cache = {}, n }
                        return l(e, t), s(e, [{ key: "delta", value: function() { return null == this.cache.delta && (this.cache.delta = this.descendants(y.default.Leaf).reduce(function(t, e) { return 0 === e.length() ? t : t.insert(e.value(), a(e)) }, new p.default).insert("\n", a(this))), this.cache.delta } }, { key: "deleteAt", value: function(t, n) { u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), this.cache = {} } }, { key: "formatAt", value: function(t, n, r, o) { n <= 0 || (y.default.query(r, y.default.Scope.BLOCK) ? t + n === this.length() && this.format(r, o) : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, Math.min(n, this.length() - t - 1), r, o), this.cache = {}) } }, {
                            key: "insertAt",
                            value: function(t, n, r) {
                                if (null != r) return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                                if (0 !== n.length) {
                                    var o = n.split("\n"),
                                        i = o.shift();
                                    i.length > 0 && (t < this.length() - 1 || null == this.children.tail ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), i) : this.children.tail.insertAt(this.children.tail.length(), i), this.cache = {});
                                    var l = this;
                                    o.reduce(function(t, e) { return l = l.split(t, !0), l.insertAt(0, e), e.length }, t + i.length)
                                }
                            }
                        }, {
                            key: "insertBefore",
                            value: function(t, n) {
                                var r = this.children.head;
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n), r instanceof b.default && r.remove(), this.cache = {}
                            }
                        }, { key: "length", value: function() { return null == this.cache.length && (this.cache.length = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "length", this).call(this) + 1), this.cache.length } }, { key: "moveChildren", value: function(t, n) { u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "moveChildren", this).call(this, t, n), this.cache = {} } }, { key: "optimize", value: function(t) { u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.cache = {} } }, { key: "path", value: function(t) { return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t, !0) } }, { key: "removeChild", value: function(t) { u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeChild", this).call(this, t), this.cache = {} } }, { key: "split", value: function(t) { var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; if (n && (0 === t || t >= this.length() - 1)) { var r = this.clone(); return 0 === t ? (this.parent.insertBefore(r, this), this) : (this.parent.insertBefore(r, this.next), r) } var o = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "split", this).call(this, t, n); return this.cache = {}, o } }]), e
                    }(y.default.Block);
                    x.blotName = "block", x.tagName = "P", x.defaultChild = "break", x.allowedChildren = [m.default, y.default.Embed, O.default], e.bubbleFormats = a, e.BlockEmbed = w, e.default = x
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function l(t, e) {
                        if (e = (0, A.default)(!0, { container: t, modules: { clipboard: !0, keyboard: !0, history: !0 } }, e), e.theme && e.theme !== q.DEFAULTS.theme) { if (e.theme = q.import("themes/" + e.theme), null == e.theme) throw new Error("Invalid theme " + e.theme + ". Did you register it?") } else e.theme = S.default;
                        var n = (0, A.default)(!0, {}, e.theme.DEFAULTS);
                        [n, e].forEach(function(t) { t.modules = t.modules || {}, Object.keys(t.modules).forEach(function(e) {!0 === t.modules[e] && (t.modules[e] = {}) }) });
                        var r = Object.keys(n.modules).concat(Object.keys(e.modules)),
                            o = r.reduce(function(t, e) { var n = q.import("modules/" + e); return null == n ? P.error("Cannot load " + e + " module. Are you sure you registered it?") : t[e] = n.DEFAULTS || {}, t }, {});
                        return null != e.modules && e.modules.toolbar && e.modules.toolbar.constructor !== Object && (e.modules.toolbar = { container: e.modules.toolbar }), e = (0, A.default)(!0, {}, q.DEFAULTS, { modules: o }, n, e), ["bounds", "container", "scrollingContainer"].forEach(function(t) { "string" == typeof e[t] && (e[t] = document.querySelector(e[t])) }), e.modules = Object.keys(e.modules).reduce(function(t, n) { return e.modules[n] && (t[n] = e.modules[n]), t }, {}), e
                    }

                    function a(t, e, n, r) {
                        if (this.options.strict && !this.isEnabled() && e === g.default.sources.USER) return new d.default;
                        var o = null == n ? null : this.getSelection(),
                            i = this.editor.delta,
                            l = t();
                        if (null != o && (!0 === n && (n = o.index), null == r ? o = u(o, l, e) : 0 !== r && (o = u(o, n, r, e)), this.setSelection(o, g.default.sources.SILENT)), l.length() > 0) {
                            var a, s = [g.default.events.TEXT_CHANGE, l, i, e];
                            if ((a = this.emitter).emit.apply(a, [g.default.events.EDITOR_CHANGE].concat(s)), e !== g.default.sources.SILENT) {
                                var c;
                                (c = this.emitter).emit.apply(c, s)
                            }
                        }
                        return l
                    }

                    function s(t, e, n, r, o) { var i = {}; return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (o = r, r = n, n = e, e = t.length, t = t.index) : (e = t.length, t = t.index) : "number" != typeof e && (o = r, r = n, n = e, e = 0), "object" === (void 0 === n ? "undefined" : c(n)) ? (i = n, o = r) : "string" == typeof n && (null != r ? i[n] = r : o = n), o = o || g.default.sources.API, [t, e, i, o] }

                    function u(t, e, n, r) {
                        if (null == t) return null;
                        var o = void 0,
                            i = void 0;
                        if (e instanceof d.default) {
                            var l = [t.index, t.index + t.length].map(function(t) { return e.transformPosition(t, r !== g.default.sources.USER) }),
                                a = f(l, 2);
                            o = a[0], i = a[1]
                        } else {
                            var s = [t.index, t.index + t.length].map(function(t) { return t < e || t === e && r === g.default.sources.USER ? t : n >= 0 ? t + n : Math.max(e, t + n) }),
                                u = f(s, 2);
                            o = u[0], i = u[1]
                        }
                        return new x.Range(o, i - o)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.overload = e.expandConfig = void 0;
                    var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                        f = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        h = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }();
                    n(50);
                    var p = n(2),
                        d = r(p),
                        y = n(14),
                        v = r(y),
                        b = n(8),
                        g = r(b),
                        m = n(9),
                        _ = r(m),
                        O = n(0),
                        w = r(O),
                        x = n(15),
                        E = r(x),
                        k = n(3),
                        A = r(k),
                        j = n(10),
                        N = r(j),
                        T = n(34),
                        S = r(T),
                        P = (0, N.default)("quill"),
                        q = function() {
                            function t(e) {
                                var n = this,
                                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (i(this, t), this.options = l(e, r), this.container = this.options.container, null == this.container) return P.error("Invalid Quill container", e);
                                this.options.debug && t.debug(this.options.debug);
                                var o = this.container.innerHTML.trim();
                                this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", !1), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new g.default, this.scroll = w.default.create(this.root, { emitter: this.emitter, whitelist: this.options.formats }), this.editor = new v.default(this.scroll), this.selection = new E.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(g.default.events.EDITOR_CHANGE, function(t) { t === g.default.events.TEXT_CHANGE && n.root.classList.toggle("ql-blank", n.editor.isBlank()) }), this.emitter.on(g.default.events.SCROLL_UPDATE, function(t, e) {
                                    var r = n.selection.lastRange,
                                        o = r && 0 === r.length ? r.index : void 0;
                                    a.call(n, function() { return n.editor.update(null, e, o) }, t)
                                });
                                var s = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + o + "<p><br></p></div>");
                                this.setContents(s), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable()
                            }
                            return h(t, null, [{ key: "debug", value: function(t) {!0 === t && (t = "log"), N.default.level(t) } }, { key: "find", value: function(t) { return t.__quill || w.default.find(t) } }, { key: "import", value: function(t) { return null == this.imports[t] && P.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t] } }, {
                                key: "register",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    if ("string" != typeof t) { var o = t.attrName || t.blotName; "string" == typeof o ? this.register("formats/" + o, t, e) : Object.keys(t).forEach(function(r) { n.register(r, t[r], e) }) } else null == this.imports[t] || r || P.warn("Overwriting " + t + " with", e), this.imports[t] = e, (t.startsWith("blots/") || t.startsWith("formats/")) && "abstract" !== e.blotName ? w.default.register(e) : t.startsWith("modules") && "function" == typeof e.register && e.register()
                                }
                            }]), h(t, [{
                                key: "addContainer",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                    if ("string" == typeof t) {
                                        var n = t;
                                        t = document.createElement("div"), t.classList.add(n)
                                    }
                                    return this.container.insertBefore(t, e), t
                                }
                            }, { key: "blur", value: function() { this.selection.setRange(null) } }, {
                                key: "deleteText",
                                value: function(t, e, n) {
                                    var r = this,
                                        o = s(t, e, n),
                                        i = f(o, 4);
                                    return t = i[0], e = i[1], n = i[3], a.call(this, function() { return r.editor.deleteText(t, e) }, n, t, -1 * e)
                                }
                            }, { key: "disable", value: function() { this.enable(!1) } }, {
                                key: "enable",
                                value: function() {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                    this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t)
                                }
                            }, {
                                key: "focus",
                                value: function() {
                                    var t = this.scrollingContainer.scrollTop;
                                    this.selection.focus(), this.scrollingContainer.scrollTop = t, this.scrollIntoView()
                                }
                            }, {
                                key: "format",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.default.sources.API;
                                    return a.call(this, function() {
                                        var r = n.getSelection(!0),
                                            i = new d.default;
                                        if (null == r) return i;
                                        if (w.default.query(t, w.default.Scope.BLOCK)) i = n.editor.formatLine(r.index, r.length, o({}, t, e));
                                        else {
                                            if (0 === r.length) return n.selection.format(t, e), i;
                                            i = n.editor.formatText(r.index, r.length, o({}, t, e))
                                        }
                                        return n.setSelection(r, g.default.sources.SILENT), i
                                    }, r)
                                }
                            }, {
                                key: "formatLine",
                                value: function(t, e, n, r, o) {
                                    var i = this,
                                        l = void 0,
                                        u = s(t, e, n, r, o),
                                        c = f(u, 4);
                                    return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function() { return i.editor.formatLine(t, e, l) }, o, t, 0)
                                }
                            }, {
                                key: "formatText",
                                value: function(t, e, n, r, o) {
                                    var i = this,
                                        l = void 0,
                                        u = s(t, e, n, r, o),
                                        c = f(u, 4);
                                    return t = c[0], e = c[1], l = c[2], o = c[3], a.call(this, function() { return i.editor.formatText(t, e, l) }, o, t, 0)
                                }
                            }, {
                                key: "getBounds",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        n = void 0;
                                    n = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length);
                                    var r = this.container.getBoundingClientRect();
                                    return { bottom: n.bottom - r.top, height: n.height, left: n.left - r.left, right: n.right - r.left, top: n.top - r.top, width: n.width }
                                }
                            }, {
                                key: "getContents",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                        n = s(t, e),
                                        r = f(n, 2);
                                    return t = r[0], e = r[1], this.editor.getContents(t, e)
                                }
                            }, {
                                key: "getFormat",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                    return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
                                }
                            }, { key: "getIndex", value: function(t) { return t.offset(this.scroll) } }, { key: "getLength", value: function() { return this.scroll.length() } }, { key: "getLeaf", value: function(t) { return this.scroll.leaf(t) } }, { key: "getLine", value: function(t) { return this.scroll.line(t) } }, {
                                key: "getLines",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                    return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
                                }
                            }, { key: "getModule", value: function(t) { return this.theme.modules[t] } }, { key: "getSelection", value: function() { return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0] } }, {
                                key: "getText",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t,
                                        n = s(t, e),
                                        r = f(n, 2);
                                    return t = r[0], e = r[1], this.editor.getText(t, e)
                                }
                            }, { key: "hasFocus", value: function() { return this.selection.hasFocus() } }, {
                                key: "insertEmbed",
                                value: function(e, n, r) {
                                    var o = this,
                                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.sources.API;
                                    return a.call(this, function() { return o.editor.insertEmbed(e, n, r) }, i, e)
                                }
                            }, {
                                key: "insertText",
                                value: function(t, e, n, r, o) {
                                    var i = this,
                                        l = void 0,
                                        u = s(t, 0, n, r, o),
                                        c = f(u, 4);
                                    return t = c[0], l = c[2], o = c[3], a.call(this, function() { return i.editor.insertText(t, e, l) }, o, t, e.length)
                                }
                            }, { key: "isEnabled", value: function() { return !this.container.classList.contains("ql-disabled") } }, { key: "off", value: function() { return this.emitter.off.apply(this.emitter, arguments) } }, { key: "on", value: function() { return this.emitter.on.apply(this.emitter, arguments) } }, { key: "once", value: function() { return this.emitter.once.apply(this.emitter, arguments) } }, { key: "pasteHTML", value: function(t, e, n) { this.clipboard.dangerouslyPasteHTML(t, e, n) } }, {
                                key: "removeFormat",
                                value: function(t, e, n) {
                                    var r = this,
                                        o = s(t, e, n),
                                        i = f(o, 4);
                                    return t = i[0], e = i[1], n = i[3], a.call(this, function() { return r.editor.removeFormat(t, e) }, n, t)
                                }
                            }, { key: "scrollIntoView", value: function() { this.selection.scrollIntoView(this.scrollingContainer) } }, {
                                key: "setContents",
                                value: function(t) {
                                    var e = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;
                                    return a.call(this, function() {
                                        t = new d.default(t);
                                        var n = e.getLength(),
                                            r = e.editor.deleteText(0, n),
                                            o = e.editor.applyDelta(t),
                                            i = o.ops[o.ops.length - 1];
                                        return null != i && "string" == typeof i.insert && "\n" === i.insert[i.insert.length - 1] && (e.editor.deleteText(e.getLength() - 1, 1), o.delete(1)), r.compose(o)
                                    }, n)
                                }
                            }, {
                                key: "setSelection",
                                value: function(e, n, r) {
                                    if (null == e) this.selection.setRange(null, n || t.sources.API);
                                    else {
                                        var o = s(e, n, r),
                                            i = f(o, 4);
                                        e = i[0], n = i[1], r = i[3], this.selection.setRange(new x.Range(e, n), r), r !== g.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer)
                                    }
                                }
                            }, {
                                key: "setText",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API,
                                        n = (new d.default).insert(t);
                                    return this.setContents(n, e)
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.default.sources.USER,
                                        e = this.scroll.update(t);
                                    return this.selection.update(t), e
                                }
                            }, {
                                key: "updateContents",
                                value: function(t) {
                                    var e = this,
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.default.sources.API;
                                    return a.call(this, function() { return t = new d.default(t), e.editor.applyDelta(t, n) }, n, !0)
                                }
                            }]), t
                        }();
                    q.DEFAULTS = { bounds: null, formats: null, modules: {}, placeholder: "", readOnly: !1, scrollingContainer: null, strict: !0, theme: "default" }, q.events = g.default.events, q.sources = g.default.sources, q.version = "1.3.6", q.imports = { delta: d.default, parchment: w.default, "core/module": _.default, "core/theme": S.default }, e.expandConfig = l, e.overload = s, e.default = q
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        s = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        u = n(7),
                        c = r(u),
                        f = n(0),
                        h = r(f),
                        p = function(t) {
                            function e() { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return l(e, t), a(e, [{
                                key: "formatAt",
                                value: function(t, n, r, o) {
                                    if (e.compare(this.statics.blotName, r) < 0 && h.default.query(r, h.default.Scope.BLOT)) {
                                        var i = this.isolate(t, n);
                                        o && i.wrap(r, o)
                                    } else s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o)
                                }
                            }, {
                                key: "optimize",
                                value: function(t) {
                                    if (s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.parent instanceof e && e.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                                        var n = this.parent.isolate(this.offset(), this.length());
                                        this.moveChildren(n), n.wrap(this)
                                    }
                                }
                            }], [{
                                key: "compare",
                                value: function(t, n) {
                                    var r = e.order.indexOf(t),
                                        o = e.order.indexOf(n);
                                    return r >= 0 || o >= 0 ? r - o : t === n ? 0 : t < n ? -1 : 1
                                }
                            }]), e
                        }(h.default.Inline);
                    p.allowedChildren = [p, h.default.Embed, c.default], p.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"], e.default = p
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = n(0),
                        a = function(t) { return t && t.__esModule ? t : { default: t } }(l),
                        s = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), e
                        }(a.default.Text);
                    e.default = s
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        s = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        u = n(54),
                        c = r(u),
                        f = n(10),
                        h = r(f),
                        p = (0, h.default)("quill:events");
                    ["selectionchange", "mousedown", "mouseup", "click"].forEach(function(t) {
                        document.addEventListener(t, function() {
                            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t) {
                                if (t.__quill && t.__quill.emitter) {
                                    var n;
                                    (n = t.__quill.emitter).handleDOM.apply(n, e)
                                }
                            })
                        })
                    });
                    var d = function(t) {
                        function e() { o(this, e); var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)); return t.listeners = {}, t.on("error", p.error), t }
                        return l(e, t), a(e, [{ key: "emit", value: function() { p.log.apply(p, arguments), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "emit", this).apply(this, arguments) } }, {
                            key: "handleDOM",
                            value: function(t) {
                                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                                (this.listeners[t.type] || []).forEach(function(e) {
                                    var r = e.node,
                                        o = e.handler;
                                    (t.target === r || r.contains(t.target)) && o.apply(void 0, [t].concat(n))
                                })
                            }
                        }, { key: "listenDOM", value: function(t, e, n) { this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({ node: e, handler: n }) } }]), e
                    }(c.default);
                    d.events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change" }, d.sources = { API: "api", SILENT: "silent", USER: "user" }, e.default = d
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        r(this, t), this.quill = e, this.options = n
                    };
                    o.DEFAULTS = {}, e.default = o
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        if (i.indexOf(t) <= i.indexOf(l)) {
                            for (var e, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            (e = console)[t].apply(e, r)
                        }
                    }

                    function o(t) { return i.reduce(function(e, n) { return e[n] = r.bind(console, n, t), e }, {}) }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var i = ["error", "warn", "log", "info"],
                        l = "warn";
                    r.level = o.level = function(t) { l = t }, e.default = o
                }, function(t, e, n) {
                    function r(t) { return null === t || void 0 === t }

                    function o(t) { return !(!t || "object" != typeof t || "number" != typeof t.length) && ("function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0])) }

                    function i(t, e, n) {
                        var i, c;
                        if (r(t) || r(e)) return !1;
                        if (t.prototype !== e.prototype) return !1;
                        if (s(t)) return !!s(e) && (t = l.call(t), e = l.call(e), u(t, e, n));
                        if (o(t)) {
                            if (!o(e)) return !1;
                            if (t.length !== e.length) return !1;
                            for (i = 0; i < t.length; i++)
                                if (t[i] !== e[i]) return !1;
                            return !0
                        }
                        try {
                            var f = a(t),
                                h = a(e)
                        } catch (t) { return !1 }
                        if (f.length != h.length) return !1;
                        for (f.sort(), h.sort(), i = f.length - 1; i >= 0; i--)
                            if (f[i] != h[i]) return !1;
                        for (i = f.length - 1; i >= 0; i--)
                            if (c = f[i], !u(t[c], e[c], n)) return !1;
                        return typeof t == typeof e
                    }
                    var l = Array.prototype.slice,
                        a = n(52),
                        s = n(53),
                        u = t.exports = function(t, e, n) { return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : !t || !e || "object" != typeof t && "object" != typeof e ? n.strict ? t === e : t == e : i(t, e, n)) }
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var r = n(1),
                        o = function() {
                            function t(t, e, n) {
                                void 0 === n && (n = {}), this.attrName = t, this.keyName = e;
                                var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
                                null != n.scope ? this.scope = n.scope & r.Scope.LEVEL | o : this.scope = r.Scope.ATTRIBUTE, null != n.whitelist && (this.whitelist = n.whitelist)
                            }
                            return t.keys = function(t) { return [].map.call(t.attributes, function(t) { return t.name }) }, t.prototype.add = function(t, e) { return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0) }, t.prototype.canAdd = function(t, e) { return null != r.query(t, r.Scope.BLOT & (this.scope | r.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1)) }, t.prototype.remove = function(t) { t.removeAttribute(this.keyName) }, t.prototype.value = function(t) { var e = t.getAttribute(this.keyName); return this.canAdd(t, e) && e ? e : "" }, t
                        }();
                    e.default = o
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.Code = void 0;
                    var a = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        s = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        u = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        c = n(2),
                        f = r(c),
                        h = n(0),
                        p = r(h),
                        d = n(4),
                        y = r(d),
                        v = n(6),
                        b = r(v),
                        g = n(7),
                        m = r(g),
                        _ = function(t) {
                            function e() { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return l(e, t), e
                        }(b.default);
                    _.blotName = "code", _.tagName = "CODE";
                    var O = function(t) {
                        function e() { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                        return l(e, t), s(e, [{
                            key: "delta",
                            value: function() {
                                var t = this,
                                    e = this.domNode.textContent;
                                return e.endsWith("\n") && (e = e.slice(0, -1)), e.split("\n").reduce(function(e, n) { return e.insert(n).insert("\n", t.formats()) }, new f.default)
                            }
                        }, {
                            key: "format",
                            value: function(t, n) {
                                if (t !== this.statics.blotName || !n) {
                                    var r = this.descendant(m.default, this.length() - 1),
                                        o = a(r, 1),
                                        i = o[0];
                                    null != i && i.deleteAt(i.length() - 1, 1), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n)
                                }
                            }
                        }, {
                            key: "formatAt",
                            value: function(t, n, r, o) {
                                if (0 !== n && null != p.default.query(r, p.default.Scope.BLOCK) && (r !== this.statics.blotName || o !== this.statics.formats(this.domNode))) {
                                    var i = this.newlineIndex(t);
                                    if (!(i < 0 || i >= t + n)) {
                                        var l = this.newlineIndex(t, !0) + 1,
                                            a = i - l + 1,
                                            s = this.isolate(l, a),
                                            u = s.next;
                                        s.format(r, o), u instanceof e && u.formatAt(0, t - l + n - a, r, o)
                                    }
                                }
                            }
                        }, {
                            key: "insertAt",
                            value: function(t, e, n) {
                                if (null == n) {
                                    var r = this.descendant(m.default, t),
                                        o = a(r, 2),
                                        i = o[0],
                                        l = o[1];
                                    i.insertAt(l, e)
                                }
                            }
                        }, { key: "length", value: function() { var t = this.domNode.textContent.length; return this.domNode.textContent.endsWith("\n") ? t : t + 1 } }, { key: "newlineIndex", value: function(t) { if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent.slice(0, t).lastIndexOf("\n"); var e = this.domNode.textContent.slice(t).indexOf("\n"); return e > -1 ? t + e : -1 } }, {
                            key: "optimize",
                            value: function(t) {
                                this.domNode.textContent.endsWith("\n") || this.appendChild(p.default.create("text", "\n")), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                                var n = this.next;
                                null != n && n.prev === this && n.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n.statics.formats(n.domNode) && (n.optimize(t), n.moveChildren(this), n.remove())
                            }
                        }, {
                            key: "replace",
                            value: function(t) {
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t) {
                                    var e = p.default.find(t);
                                    null == e ? t.parentNode.removeChild(t) : e instanceof p.default.Embed ? e.remove() : e.unwrap()
                                })
                            }
                        }], [{ key: "create", value: function(t) { var n = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t); return n.setAttribute("spellcheck", !1), n } }, { key: "formats", value: function() { return !0 } }]), e
                    }(y.default);
                    O.blotName = "code-block", O.tagName = "PRE", O.TAB = "  ", e.Code = _, e.default = O
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function l(t, e) { return Object.keys(e).reduce(function(n, r) { return null == t[r] ? n : (e[r] === t[r] ? n[r] = e[r] : Array.isArray(e[r]) ? e[r].indexOf(t[r]) < 0 && (n[r] = e[r].concat([t[r]])) : n[r] = [e[r], t[r]], n) }, {}) }

                    function a(t) { return t.reduce(function(t, e) { if (1 === e.insert) { var n = (0, A.default)(e.attributes); return delete n.image, t.insert({ image: e.attributes.image }, n) } if (null == e.attributes || !0 !== e.attributes.list && !0 !== e.attributes.bullet || (e = (0, A.default)(e), e.attributes.list ? e.attributes.list = "ordered" : (e.attributes.list = "bullet", delete e.attributes.bullet)), "string" == typeof e.insert) { var r = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n"); return t.insert(r, e.attributes) } return t.push(e) }, new h.default) }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                        u = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        c = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        f = n(2),
                        h = r(f),
                        p = n(20),
                        d = r(p),
                        y = n(0),
                        v = r(y),
                        b = n(13),
                        g = r(b),
                        m = n(24),
                        _ = r(m),
                        O = n(4),
                        w = r(O),
                        x = n(16),
                        E = r(x),
                        k = n(21),
                        A = r(k),
                        j = n(11),
                        N = r(j),
                        T = n(3),
                        S = r(T),
                        P = /^[ -~]*$/,
                        q = function() {
                            function t(e) { i(this, t), this.scroll = e, this.delta = this.getDelta() }
                            return c(t, [{
                                key: "applyDelta",
                                value: function(t) {
                                    var e = this,
                                        n = !1;
                                    this.scroll.update();
                                    var r = this.scroll.length();
                                    return this.scroll.batchStart(), t = a(t), t.reduce(function(t, o) {
                                        var i = o.retain || o.delete || o.insert.length || 1,
                                            l = o.attributes || {};
                                        if (null != o.insert) {
                                            if ("string" == typeof o.insert) {
                                                var a = o.insert;
                                                a.endsWith("\n") && n && (n = !1, a = a.slice(0, -1)), t >= r && !a.endsWith("\n") && (n = !0), e.scroll.insertAt(t, a);
                                                var c = e.scroll.line(t),
                                                    f = u(c, 2),
                                                    h = f[0],
                                                    p = f[1],
                                                    y = (0, S.default)({}, (0, O.bubbleFormats)(h));
                                                if (h instanceof w.default) {
                                                    var b = h.descendant(v.default.Leaf, p),
                                                        g = u(b, 1),
                                                        m = g[0];
                                                    y = (0, S.default)(y, (0, O.bubbleFormats)(m))
                                                }
                                                l = d.default.attributes.diff(y, l) || {}
                                            } else if ("object" === s(o.insert)) {
                                                var _ = Object.keys(o.insert)[0];
                                                if (null == _) return t;
                                                e.scroll.insertAt(t, _, o.insert[_])
                                            }
                                            r += i
                                        }
                                        return Object.keys(l).forEach(function(n) { e.scroll.formatAt(t, i, n, l[n]) }), t + i
                                    }, 0), t.reduce(function(t, n) { return "number" == typeof n.delete ? (e.scroll.deleteAt(t, n.delete), t) : t + (n.retain || n.insert.length || 1) }, 0), this.scroll.batchEnd(), this.update(t)
                                }
                            }, { key: "deleteText", value: function(t, e) { return this.scroll.deleteAt(t, e), this.update((new h.default).retain(t).delete(e)) } }, {
                                key: "formatLine",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return this.scroll.update(), Object.keys(r).forEach(function(o) {
                                        if (null == n.scroll.whitelist || n.scroll.whitelist[o]) {
                                            var i = n.scroll.lines(t, Math.max(e, 1)),
                                                l = e;
                                            i.forEach(function(e) {
                                                var i = e.length();
                                                if (e instanceof g.default) {
                                                    var a = t - e.offset(n.scroll),
                                                        s = e.newlineIndex(a + l) - a + 1;
                                                    e.formatAt(a, s, o, r[o])
                                                } else e.format(o, r[o]);
                                                l -= i
                                            })
                                        }
                                    }), this.scroll.optimize(), this.update((new h.default).retain(t).retain(e, (0, A.default)(r)))
                                }
                            }, {
                                key: "formatText",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return Object.keys(r).forEach(function(o) { n.scroll.formatAt(t, e, o, r[o]) }), this.update((new h.default).retain(t).retain(e, (0, A.default)(r)))
                                }
                            }, { key: "getContents", value: function(t, e) { return this.delta.slice(t, t + e) } }, { key: "getDelta", value: function() { return this.scroll.lines().reduce(function(t, e) { return t.concat(e.delta()) }, new h.default) } }, {
                                key: "getFormat",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        n = [],
                                        r = [];
                                    0 === e ? this.scroll.path(t).forEach(function(t) {
                                        var e = u(t, 1),
                                            o = e[0];
                                        o instanceof w.default ? n.push(o) : o instanceof v.default.Leaf && r.push(o)
                                    }) : (n = this.scroll.lines(t, e), r = this.scroll.descendants(v.default.Leaf, t, e));
                                    var o = [n, r].map(function(t) {
                                        if (0 === t.length) return {};
                                        for (var e = (0, O.bubbleFormats)(t.shift()); Object.keys(e).length > 0;) {
                                            var n = t.shift();
                                            if (null == n) return e;
                                            e = l((0, O.bubbleFormats)(n), e)
                                        }
                                        return e
                                    });
                                    return S.default.apply(S.default, o)
                                }
                            }, { key: "getText", value: function(t, e) { return this.getContents(t, e).filter(function(t) { return "string" == typeof t.insert }).map(function(t) { return t.insert }).join("") } }, { key: "insertEmbed", value: function(t, e, n) { return this.scroll.insertAt(t, e, n), this.update((new h.default).retain(t).insert(o({}, e, n))) } }, {
                                key: "insertText",
                                value: function(t, e) {
                                    var n = this,
                                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t, e), Object.keys(r).forEach(function(o) { n.scroll.formatAt(t, e.length, o, r[o]) }), this.update((new h.default).retain(t).insert(e, (0, A.default)(r)))
                                }
                            }, { key: "isBlank", value: function() { if (0 == this.scroll.children.length) return !0; if (this.scroll.children.length > 1) return !1; var t = this.scroll.children.head; return t.statics.blotName === w.default.blotName && (!(t.children.length > 1) && t.children.head instanceof E.default) } }, {
                                key: "removeFormat",
                                value: function(t, e) {
                                    var n = this.getText(t, e),
                                        r = this.scroll.line(t + e),
                                        o = u(r, 2),
                                        i = o[0],
                                        l = o[1],
                                        a = 0,
                                        s = new h.default;
                                    null != i && (a = i instanceof g.default ? i.newlineIndex(l) - l + 1 : i.length() - l, s = i.delta().slice(l, l + a - 1).insert("\n"));
                                    var c = this.getContents(t, e + a),
                                        f = c.diff((new h.default).insert(n).concat(s)),
                                        p = (new h.default).retain(t).concat(f);
                                    return this.applyDelta(p)
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                                        r = this.delta;
                                    if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(P) && v.default.find(e[0].target)) {
                                        var o = v.default.find(e[0].target),
                                            i = (0, O.bubbleFormats)(o),
                                            l = o.offset(this.scroll),
                                            a = e[0].oldValue.replace(_.default.CONTENTS, ""),
                                            s = (new h.default).insert(a),
                                            u = (new h.default).insert(o.value());
                                        t = (new h.default).retain(l).concat(s.diff(u, n)).reduce(function(t, e) { return e.insert ? t.insert(e.insert, i) : t.push(e) }, new h.default), this.delta = r.compose(t)
                                    } else this.delta = this.getDelta(), t && (0, N.default)(r.compose(t), this.delta) || (t = r.diff(this.delta, n));
                                    return t
                                }
                            }]), t
                        }();
                    e.default = q
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t) { if (Array.isArray(t)) { for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e]; return n } return Array.from(t) }

                    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function l(t, e) { try { e.parentNode } catch (t) { return !1 } return e instanceof Text && (e = e.parentNode), t.contains(e) }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.Range = void 0;
                    var a = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        s = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        u = n(0),
                        c = r(u),
                        f = n(21),
                        h = r(f),
                        p = n(11),
                        d = r(p),
                        y = n(8),
                        v = r(y),
                        b = n(10),
                        g = r(b),
                        m = (0, g.default)("quill:selection"),
                        _ = function t(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            i(this, t), this.index = e, this.length = n
                        },
                        O = function() {
                            function t(e, n) {
                                var r = this;
                                i(this, t), this.emitter = n, this.scroll = e, this.composing = !1, this.mouseDown = !1, this.root = this.scroll.domNode, this.cursor = c.default.create("cursor", this), this.lastRange = this.savedRange = new _(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() { r.mouseDown || setTimeout(r.update.bind(r, v.default.sources.USER), 1) }), this.emitter.on(v.default.events.EDITOR_CHANGE, function(t, e) { t === v.default.events.TEXT_CHANGE && e.length() > 0 && r.update(v.default.sources.SILENT) }), this.emitter.on(v.default.events.SCROLL_BEFORE_UPDATE, function() {
                                    if (r.hasFocus()) {
                                        var t = r.getNativeRange();
                                        null != t && t.start.node !== r.cursor.textNode && r.emitter.once(v.default.events.SCROLL_UPDATE, function() { try { r.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset) } catch (t) {} })
                                    }
                                }), this.emitter.on(v.default.events.SCROLL_OPTIMIZE, function(t, e) {
                                    if (e.range) {
                                        var n = e.range,
                                            o = n.startNode,
                                            i = n.startOffset,
                                            l = n.endNode,
                                            a = n.endOffset;
                                        r.setNativeRange(o, i, l, a)
                                    }
                                }), this.update(v.default.sources.SILENT)
                            }
                            return s(t, [{
                                key: "handleComposition",
                                value: function() {
                                    var t = this;
                                    this.root.addEventListener("compositionstart", function() { t.composing = !0 }), this.root.addEventListener("compositionend", function() {
                                        if (t.composing = !1, t.cursor.parent) {
                                            var e = t.cursor.restore();
                                            if (!e) return;
                                            setTimeout(function() { t.setNativeRange(e.startNode, e.startOffset, e.endNode, e.endOffset) }, 1)
                                        }
                                    })
                                }
                            }, {
                                key: "handleDragging",
                                value: function() {
                                    var t = this;
                                    this.emitter.listenDOM("mousedown", document.body, function() { t.mouseDown = !0 }), this.emitter.listenDOM("mouseup", document.body, function() { t.mouseDown = !1, t.update(v.default.sources.USER) })
                                }
                            }, { key: "focus", value: function() { this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange)) } }, {
                                key: "format",
                                value: function(t, e) {
                                    if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
                                        this.scroll.update();
                                        var n = this.getNativeRange();
                                        if (null != n && n.native.collapsed && !c.default.query(t, c.default.Scope.BLOCK)) {
                                            if (n.start.node !== this.cursor.textNode) {
                                                var r = c.default.find(n.start.node, !1);
                                                if (null == r) return;
                                                if (r instanceof c.default.Leaf) {
                                                    var o = r.split(n.start.offset);
                                                    r.parent.insertBefore(this.cursor, o)
                                                } else r.insertBefore(this.cursor, n.start.node);
                                                this.cursor.attach()
                                            }
                                            this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update()
                                        }
                                    }
                                }
                            }, {
                                key: "getBounds",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        n = this.scroll.length();
                                    t = Math.min(t, n - 1), e = Math.min(t + e, n - 1) - t;
                                    var r = void 0,
                                        o = this.scroll.leaf(t),
                                        i = a(o, 2),
                                        l = i[0],
                                        s = i[1];
                                    if (null == l) return null;
                                    var u = l.position(s, !0),
                                        c = a(u, 2);
                                    r = c[0], s = c[1];
                                    var f = document.createRange();
                                    if (e > 0) {
                                        f.setStart(r, s);
                                        var h = this.scroll.leaf(t + e),
                                            p = a(h, 2);
                                        if (l = p[0], s = p[1], null == l) return null;
                                        var d = l.position(s, !0),
                                            y = a(d, 2);
                                        return r = y[0], s = y[1], f.setEnd(r, s), f.getBoundingClientRect()
                                    }
                                    var v = "left",
                                        b = void 0;
                                    return r instanceof Text ? (s < r.data.length ? (f.setStart(r, s), f.setEnd(r, s + 1)) : (f.setStart(r, s - 1), f.setEnd(r, s), v = "right"), b = f.getBoundingClientRect()) : (b = l.domNode.getBoundingClientRect(), s > 0 && (v = "right")), { bottom: b.top + b.height, height: b.height, left: b[v], right: b[v], top: b.top, width: 0 }
                                }
                            }, { key: "getNativeRange", value: function() { var t = document.getSelection(); if (null == t || t.rangeCount <= 0) return null; var e = t.getRangeAt(0); if (null == e) return null; var n = this.normalizeNative(e); return m.info("getNativeRange", n), n } }, { key: "getRange", value: function() { var t = this.getNativeRange(); return null == t ? [null, null] : [this.normalizedToRange(t), t] } }, { key: "hasFocus", value: function() { return document.activeElement === this.root } }, {
                                key: "normalizedToRange",
                                value: function(t) {
                                    var e = this,
                                        n = [
                                            [t.start.node, t.start.offset]
                                        ];
                                    t.native.collapsed || n.push([t.end.node, t.end.offset]);
                                    var r = n.map(function(t) {
                                            var n = a(t, 2),
                                                r = n[0],
                                                o = n[1],
                                                i = c.default.find(r, !0),
                                                l = i.offset(e.scroll);
                                            return 0 === o ? l : i instanceof c.default.Container ? l + i.length() : l + i.index(r, o)
                                        }),
                                        i = Math.min(Math.max.apply(Math, o(r)), this.scroll.length() - 1),
                                        l = Math.min.apply(Math, [i].concat(o(r)));
                                    return new _(l, i - l)
                                }
                            }, {
                                key: "normalizeNative",
                                value: function(t) {
                                    if (!l(this.root, t.startContainer) || !t.collapsed && !l(this.root, t.endContainer)) return null;
                                    var e = { start: { node: t.startContainer, offset: t.startOffset }, end: { node: t.endContainer, offset: t.endOffset }, native: t };
                                    return [e.start, e.end].forEach(function(t) {
                                        for (var e = t.node, n = t.offset; !(e instanceof Text) && e.childNodes.length > 0;)
                                            if (e.childNodes.length > n) e = e.childNodes[n], n = 0;
                                            else {
                                                if (e.childNodes.length !== n) break;
                                                e = e.lastChild, n = e instanceof Text ? e.data.length : e.childNodes.length + 1
                                            }
                                        t.node = e, t.offset = n
                                    }), e
                                }
                            }, {
                                key: "rangeToNative",
                                value: function(t) {
                                    var e = this,
                                        n = t.collapsed ? [t.index] : [t.index, t.index + t.length],
                                        r = [],
                                        o = this.scroll.length();
                                    return n.forEach(function(t, n) {
                                        t = Math.min(o - 1, t);
                                        var i = void 0,
                                            l = e.scroll.leaf(t),
                                            s = a(l, 2),
                                            u = s[0],
                                            c = s[1],
                                            f = u.position(c, 0 !== n),
                                            h = a(f, 2);
                                        i = h[0], c = h[1], r.push(i, c)
                                    }), r.length < 2 && (r = r.concat(r)), r
                                }
                            }, {
                                key: "scrollIntoView",
                                value: function(t) {
                                    var e = this.lastRange;
                                    if (null != e) {
                                        var n = this.getBounds(e.index, e.length);
                                        if (null != n) {
                                            var r = this.scroll.length() - 1,
                                                o = this.scroll.line(Math.min(e.index, r)),
                                                i = a(o, 1),
                                                l = i[0],
                                                s = l;
                                            if (e.length > 0) {
                                                var u = this.scroll.line(Math.min(e.index + e.length, r));
                                                s = a(u, 1)[0]
                                            }
                                            if (null != l && null != s) {
                                                var c = t.getBoundingClientRect();
                                                n.top < c.top ? t.scrollTop -= c.top - n.top : n.bottom > c.bottom && (t.scrollTop += n.bottom - c.bottom)
                                            }
                                        }
                                    }
                                }
                            }, {
                                key: "setNativeRange",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e,
                                        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                                    if (m.info("setNativeRange", t, e, n, r), null == t || null != this.root.parentNode && null != t.parentNode && null != n.parentNode) {
                                        var i = document.getSelection();
                                        if (null != i)
                                            if (null != t) {
                                                this.hasFocus() || this.root.focus();
                                                var l = (this.getNativeRange() || {}).native;
                                                if (null == l || o || t !== l.startContainer || e !== l.startOffset || n !== l.endContainer || r !== l.endOffset) {
                                                    "BR" == t.tagName && (e = [].indexOf.call(t.parentNode.childNodes, t), t = t.parentNode), "BR" == n.tagName && (r = [].indexOf.call(n.parentNode.childNodes, n), n = n.parentNode);
                                                    var a = document.createRange();
                                                    a.setStart(t, e), a.setEnd(n, r), i.removeAllRanges(), i.addRange(a)
                                                }
                                            } else i.removeAllRanges(), this.root.blur(), document.body.focus()
                                    }
                                }
                            }, {
                                key: "setRange",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.default.sources.API;
                                    if ("string" == typeof e && (n = e, e = !1), m.info("setRange", t), null != t) {
                                        var r = this.rangeToNative(t);
                                        this.setNativeRange.apply(this, o(r).concat([e]))
                                    } else this.setNativeRange(null);
                                    this.update(n)
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.default.sources.USER,
                                        e = this.lastRange,
                                        n = this.getRange(),
                                        r = a(n, 2),
                                        o = r[0],
                                        i = r[1];
                                    if (this.lastRange = o, null != this.lastRange && (this.savedRange = this.lastRange), !(0, d.default)(e, this.lastRange)) {
                                        var l;
                                        !this.composing && null != i && i.native.collapsed && i.start.node !== this.cursor.textNode && this.cursor.restore();
                                        var s = [v.default.events.SELECTION_CHANGE, (0, h.default)(this.lastRange), (0, h.default)(e), t];
                                        if ((l = this.emitter).emit.apply(l, [v.default.events.EDITOR_CHANGE].concat(s)), t !== v.default.sources.SILENT) {
                                            var u;
                                            (u = this.emitter).emit.apply(u, s)
                                        }
                                    }
                                }
                            }]), t
                        }();
                    e.Range = _, e.default = O
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(0),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, [{ key: "insertInto", value: function(t, n) { 0 === t.children.length ? a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertInto", this).call(this, t, n) : this.remove() } }, { key: "length", value: function() { return 0 } }, { key: "value", value: function() { return "" } }], [{ key: "value", value: function() {} }]), e
                        }(u.default.Embed);
                    c.blotName = "break", c.tagName = "BR", e.default = c
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        var e = a.find(t);
                        if (null == e) try { e = a.create(t) } catch (n) { e = a.create(a.Scope.INLINE), [].slice.call(t.childNodes).forEach(function(t) { e.domNode.appendChild(t) }), t.parentNode && t.parentNode.replaceChild(e.domNode, t), e.attach() }
                        return e
                    }
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var i = n(44),
                        l = n(30),
                        a = n(1),
                        s = function(t) {
                            function e(e) { var n = t.call(this, e) || this; return n.build(), n }
                            return o(e, t), e.prototype.appendChild = function(t) { this.insertBefore(t) }, e.prototype.attach = function() { t.prototype.attach.call(this), this.children.forEach(function(t) { t.attach() }) }, e.prototype.build = function() {
                                var t = this;
                                this.children = new i.default, [].slice.call(this.domNode.childNodes).reverse().forEach(function(e) {
                                    try {
                                        var n = r(e);
                                        t.insertBefore(n, t.children.head || void 0)
                                    } catch (t) { if (t instanceof a.ParchmentError) return; throw t }
                                })
                            }, e.prototype.deleteAt = function(t, e) {
                                if (0 === t && e === this.length()) return this.remove();
                                this.children.forEachAt(t, e, function(t, e, n) { t.deleteAt(e, n) })
                            }, e.prototype.descendant = function(t, n) {
                                var r = this.children.find(n),
                                    o = r[0],
                                    i = r[1];
                                return null == t.blotName && t(o) || null != t.blotName && o instanceof t ? [o, i] : o instanceof e ? o.descendant(t, i) : [null, -1]
                            }, e.prototype.descendants = function(t, n, r) {
                                void 0 === n && (n = 0), void 0 === r && (r = Number.MAX_VALUE);
                                var o = [],
                                    i = r;
                                return this.children.forEachAt(n, r, function(n, r, l) {
                                    (null == t.blotName && t(n) || null != t.blotName && n instanceof t) && o.push(n), n instanceof e && (o = o.concat(n.descendants(t, r, i))), i -= l
                                }), o
                            }, e.prototype.detach = function() { this.children.forEach(function(t) { t.detach() }), t.prototype.detach.call(this) }, e.prototype.formatAt = function(t, e, n, r) { this.children.forEachAt(t, e, function(t, e, o) { t.formatAt(e, o, n, r) }) }, e.prototype.insertAt = function(t, e, n) {
                                var r = this.children.find(t),
                                    o = r[0],
                                    i = r[1];
                                if (o) o.insertAt(i, e, n);
                                else {
                                    var l = null == n ? a.create("text", e) : a.create(e, n);
                                    this.appendChild(l)
                                }
                            }, e.prototype.insertBefore = function(t, e) {
                                if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(e) { return t instanceof e })) throw new a.ParchmentError("Cannot insert " + t.statics.blotName + " into " + this.statics.blotName);
                                t.insertInto(this, e)
                            }, e.prototype.length = function() { return this.children.reduce(function(t, e) { return t + e.length() }, 0) }, e.prototype.moveChildren = function(t, e) { this.children.forEach(function(n) { t.insertBefore(n, e) }) }, e.prototype.optimize = function(e) {
                                if (t.prototype.optimize.call(this, e), 0 === this.children.length)
                                    if (null != this.statics.defaultChild) {
                                        var n = a.create(this.statics.defaultChild);
                                        this.appendChild(n), n.optimize(e)
                                    } else this.remove()
                            }, e.prototype.path = function(t, n) {
                                void 0 === n && (n = !1);
                                var r = this.children.find(t, n),
                                    o = r[0],
                                    i = r[1],
                                    l = [
                                        [this, t]
                                    ];
                                return o instanceof e ? l.concat(o.path(i, n)) : (null != o && l.push([o, i]), l)
                            }, e.prototype.removeChild = function(t) { this.children.remove(t) }, e.prototype.replace = function(n) { n instanceof e && n.moveChildren(this), t.prototype.replace.call(this, n) }, e.prototype.split = function(t, e) { if (void 0 === e && (e = !1), !e) { if (0 === t) return this; if (t === this.length()) return this.next } var n = this.clone(); return this.parent.insertBefore(n, this.next), this.children.forEachAt(t, this.length(), function(t, r, o) { t = t.split(r, e), n.appendChild(t) }), n }, e.prototype.unwrap = function() { this.moveChildren(this.parent, this.next), this.remove() }, e.prototype.update = function(t, e) {
                                var n = this,
                                    o = [],
                                    i = [];
                                t.forEach(function(t) { t.target === n.domNode && "childList" === t.type && (o.push.apply(o, t.addedNodes), i.push.apply(i, t.removedNodes)) }), i.forEach(function(t) {
                                    if (!(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                                        var e = a.find(t);
                                        null != e && (null != e.domNode.parentNode && e.domNode.parentNode !== n.domNode || e.detach())
                                    }
                                }), o.filter(function(t) { return t.parentNode == n.domNode }).sort(function(t, e) { return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1 }).forEach(function(t) {
                                    var e = null;
                                    null != t.nextSibling && (e = a.find(t.nextSibling));
                                    var o = r(t);
                                    o.next == e && null != o.next || (null != o.parent && o.parent.removeChild(n), n.insertBefore(o, e || void 0))
                                })
                            }, e
                        }(l.default);
                    e.default = s
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = n(12),
                        i = n(31),
                        l = n(17),
                        a = n(1),
                        s = function(t) {
                            function e(e) { var n = t.call(this, e) || this; return n.attributes = new i.default(n.domNode), n }
                            return r(e, t), e.formats = function(t) { return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0) }, e.prototype.format = function(t, e) {
                                var n = a.query(t);
                                n instanceof o.default ? this.attributes.attribute(n, e) : e && (null == n || t === this.statics.blotName && this.formats()[t] === e || this.replaceWith(t, e))
                            }, e.prototype.formats = function() {
                                var t = this.attributes.values(),
                                    e = this.statics.formats(this.domNode);
                                return null != e && (t[this.statics.blotName] = e), t
                            }, e.prototype.replaceWith = function(e, n) { var r = t.prototype.replaceWith.call(this, e, n); return this.attributes.copy(r), r }, e.prototype.update = function(e, n) {
                                var r = this;
                                t.prototype.update.call(this, e, n), e.some(function(t) { return t.target === r.domNode && "attributes" === t.type }) && this.attributes.build()
                            }, e.prototype.wrap = function(n, r) { var o = t.prototype.wrap.call(this, n, r); return o instanceof e && o.statics.scope === this.statics.scope && this.attributes.move(o), o }, e
                        }(l.default);
                    e.default = s
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = n(30),
                        i = n(1),
                        l = function(t) {
                            function e() { return null !== t && t.apply(this, arguments) || this }
                            return r(e, t), e.value = function(t) { return !0 }, e.prototype.index = function(t, e) { return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1 }, e.prototype.position = function(t, e) { var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode); return t > 0 && (n += 1), [this.parent.domNode, n] }, e.prototype.value = function() { return t = {}, t[this.statics.blotName] = this.statics.value(this.domNode) || !0, t; var t }, e.scope = i.Scope.INLINE_BLOT, e
                        }(o.default);
                    e.default = l
                }, function(t, e, n) {
                    function r(t) { this.ops = t, this.index = 0, this.offset = 0 }
                    var o = n(11),
                        i = n(3),
                        l = {
                            attributes: {
                                compose: function(t, e, n) {
                                    "object" != typeof t && (t = {}), "object" != typeof e && (e = {});
                                    var r = i(!0, {}, e);
                                    n || (r = Object.keys(r).reduce(function(t, e) { return null != r[e] && (t[e] = r[e]), t }, {}));
                                    for (var o in t) void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
                                    return Object.keys(r).length > 0 ? r : void 0
                                },
                                diff: function(t, e) { "object" != typeof t && (t = {}), "object" != typeof e && (e = {}); var n = Object.keys(t).concat(Object.keys(e)).reduce(function(n, r) { return o(t[r], e[r]) || (n[r] = void 0 === e[r] ? null : e[r]), n }, {}); return Object.keys(n).length > 0 ? n : void 0 },
                                transform: function(t, e, n) { if ("object" != typeof t) return e; if ("object" == typeof e) { if (!n) return e; var r = Object.keys(e).reduce(function(n, r) { return void 0 === t[r] && (n[r] = e[r]), n }, {}); return Object.keys(r).length > 0 ? r : void 0 } }
                            },
                            iterator: function(t) { return new r(t) },
                            length: function(t) { return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1 }
                        };
                    r.prototype.hasNext = function() { return this.peekLength() < 1 / 0 }, r.prototype.next = function(t) {
                        t || (t = 1 / 0);
                        var e = this.ops[this.index];
                        if (e) {
                            var n = this.offset,
                                r = l.length(e);
                            if (t >= r - n ? (t = r - n, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.delete) return { delete: t };
                            var o = {};
                            return e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? o.retain = t : "string" == typeof e.insert ? o.insert = e.insert.substr(n, t) : o.insert = e.insert, o
                        }
                        return { retain: 1 / 0 }
                    }, r.prototype.peek = function() { return this.ops[this.index] }, r.prototype.peekLength = function() { return this.ops[this.index] ? l.length(this.ops[this.index]) - this.offset : 1 / 0 }, r.prototype.peekType = function() { return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain" }, t.exports = l
                }, function(t, n) {
                    var r = function() {
                        "use strict";

                        function t(t, e) { return null != e && t instanceof e }

                        function n(r, o, i, l, f) {
                            function h(r, i) {
                                if (null === r) return null;
                                if (0 === i) return r;
                                var v, b;
                                if ("object" != typeof r) return r;
                                if (t(r, s)) v = new s;
                                else if (t(r, u)) v = new u;
                                else if (t(r, c)) v = new c(function(t, e) { r.then(function(e) { t(h(e, i - 1)) }, function(t) { e(h(t, i - 1)) }) });
                                else if (n.__isArray(r)) v = [];
                                else if (n.__isRegExp(r)) v = new RegExp(r.source, a(r)), r.lastIndex && (v.lastIndex = r.lastIndex);
                                else if (n.__isDate(r)) v = new Date(r.getTime());
                                else {
                                    if (y && e.isBuffer(r)) return v = new e(r.length), r.copy(v), v;
                                    t(r, Error) ? v = Object.create(r) : void 0 === l ? (b = Object.getPrototypeOf(r), v = Object.create(b)) : (v = Object.create(l), b = l)
                                }
                                if (o) {
                                    var g = p.indexOf(r);
                                    if (-1 != g) return d[g];
                                    p.push(r), d.push(v)
                                }
                                t(r, s) && r.forEach(function(t, e) {
                                    var n = h(e, i - 1),
                                        r = h(t, i - 1);
                                    v.set(n, r)
                                }), t(r, u) && r.forEach(function(t) {
                                    var e = h(t, i - 1);
                                    v.add(e)
                                });
                                for (var m in r) {
                                    var _;
                                    b && (_ = Object.getOwnPropertyDescriptor(b, m)), _ && null == _.set || (v[m] = h(r[m], i - 1))
                                }
                                if (Object.getOwnPropertySymbols)
                                    for (var O = Object.getOwnPropertySymbols(r), m = 0; m < O.length; m++) {
                                        var w = O[m],
                                            x = Object.getOwnPropertyDescriptor(r, w);
                                        (!x || x.enumerable || f) && (v[w] = h(r[w], i - 1), x.enumerable || Object.defineProperty(v, w, { enumerable: !1 }))
                                    }
                                if (f)
                                    for (var E = Object.getOwnPropertyNames(r), m = 0; m < E.length; m++) {
                                        var k = E[m],
                                            x = Object.getOwnPropertyDescriptor(r, k);
                                        x && x.enumerable || (v[k] = h(r[k], i - 1), Object.defineProperty(v, k, { enumerable: !1 }))
                                    }
                                return v
                            }
                            "object" == typeof o && (i = o.depth, l = o.prototype, f = o.includeNonEnumerable, o = o.circular);
                            var p = [],
                                d = [],
                                y = void 0 !== e;
                            return void 0 === o && (o = !0), void 0 === i && (i = 1 / 0), h(r, i)
                        }

                        function r(t) { return Object.prototype.toString.call(t) }

                        function o(t) { return "object" == typeof t && "[object Date]" === r(t) }

                        function i(t) { return "object" == typeof t && "[object Array]" === r(t) }

                        function l(t) { return "object" == typeof t && "[object RegExp]" === r(t) }

                        function a(t) { var e = ""; return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e }
                        var s;
                        try { s = Map } catch (t) { s = function() {} }
                        var u;
                        try { u = Set } catch (t) { u = function() {} }
                        var c;
                        try { c = Promise } catch (t) { c = function() {} }
                        return n.clonePrototype = function(t) { if (null === t) return null; var e = function() {}; return e.prototype = t, new e }, n.__objToStr = r, n.__isDate = o, n.__isArray = i, n.__isRegExp = l, n.__getRegExpFlags = a, n
                    }();
                    "object" == typeof t && t.exports && (t.exports = r)
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function a(t) { return t instanceof v.default || t instanceof y.BlockEmbed }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var s = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        u = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        c = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        f = n(0),
                        h = r(f),
                        p = n(8),
                        d = r(p),
                        y = n(4),
                        v = r(y),
                        b = n(16),
                        g = r(b),
                        m = n(13),
                        _ = r(m),
                        O = n(25),
                        w = r(O),
                        x = function(t) {
                            function e(t, n) { o(this, e); var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return r.emitter = n.emitter, Array.isArray(n.whitelist) && (r.whitelist = n.whitelist.reduce(function(t, e) { return t[e] = !0, t }, {})), r.domNode.addEventListener("DOMNodeInserted", function() {}), r.optimize(), r.enable(), r }
                            return l(e, t), u(e, [{ key: "batchStart", value: function() { this.batch = !0 } }, { key: "batchEnd", value: function() { this.batch = !1, this.optimize() } }, {
                                key: "deleteAt",
                                value: function(t, n) {
                                    var r = this.line(t),
                                        o = s(r, 2),
                                        i = o[0],
                                        l = o[1],
                                        a = this.line(t + n),
                                        u = s(a, 1),
                                        f = u[0];
                                    if (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "deleteAt", this).call(this, t, n), null != f && i !== f && l > 0) {
                                        if (i instanceof y.BlockEmbed || f instanceof y.BlockEmbed) return void this.optimize();
                                        if (i instanceof _.default) { var h = i.newlineIndex(i.length(), !0); if (h > -1 && (i = i.split(h + 1)) === f) return void this.optimize() } else if (f instanceof _.default) {
                                            var p = f.newlineIndex(0);
                                            p > -1 && f.split(p + 1)
                                        }
                                        var d = f.children.head instanceof g.default ? null : f.children.head;
                                        i.moveChildren(f, d), i.remove()
                                    }
                                    this.optimize()
                                }
                            }, {
                                key: "enable",
                                value: function() {
                                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                    this.domNode.setAttribute("contenteditable", t)
                                }
                            }, {
                                key: "formatAt",
                                value: function(t, n, r, o) {
                                    (null == this.whitelist || this.whitelist[r]) && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, n, r, o), this.optimize())
                                }
                            }, {
                                key: "insertAt",
                                value: function(t, n, r) {
                                    if (null == r || null == this.whitelist || this.whitelist[n]) {
                                        if (t >= this.length())
                                            if (null == r || null == h.default.query(n, h.default.Scope.BLOCK)) {
                                                var o = h.default.create(this.statics.defaultChild);
                                                this.appendChild(o), null == r && n.endsWith("\n") && (n = n.slice(0, -1)), o.insertAt(0, n, r)
                                            } else {
                                                var i = h.default.create(n, r);
                                                this.appendChild(i)
                                            }
                                        else c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertAt", this).call(this, t, n, r);
                                        this.optimize()
                                    }
                                }
                            }, {
                                key: "insertBefore",
                                value: function(t, n) {
                                    if (t.statics.scope === h.default.Scope.INLINE_BLOT) {
                                        var r = h.default.create(this.statics.defaultChild);
                                        r.appendChild(t), t = r
                                    }
                                    c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n)
                                }
                            }, { key: "leaf", value: function(t) { return this.path(t).pop() || [null, -1] } }, { key: "line", value: function(t) { return t === this.length() ? this.line(t - 1) : this.descendant(a, t) } }, {
                                key: "lines",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                                    return function t(e, n, r) {
                                        var o = [],
                                            i = r;
                                        return e.children.forEachAt(n, r, function(e, n, r) { a(e) ? o.push(e) : e instanceof h.default.Container && (o = o.concat(t(e, n, i))), i -= r }), o
                                    }(this, t, e)
                                }
                            }, {
                                key: "optimize",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    !0 !== this.batch && (c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t, n), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_OPTIMIZE, t, n))
                                }
                            }, { key: "path", value: function(t) { return c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "path", this).call(this, t).slice(1) } }, { key: "update", value: function(t) { if (!0 !== this.batch) { var n = d.default.sources.USER; "string" == typeof t && (n = t), Array.isArray(t) || (t = this.observer.takeRecords()), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_BEFORE_UPDATE, n, t), c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t.concat([])), t.length > 0 && this.emitter.emit(d.default.events.SCROLL_UPDATE, n, t) } } }]), e
                        }(h.default.Scroll);
                    x.blotName = "scroll", x.className = "ql-editor", x.tagName = "DIV", x.defaultChild = "block", x.allowedChildren = [v.default, y.BlockEmbed, w.default], e.default = x
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function l(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function s(t, e) {
                        var n, r = t === D.keys.LEFT ? "prefix" : "suffix";
                        return n = { key: t, shiftKey: e, altKey: null }, o(n, r, /^$/), o(n, "handler", function(n) {
                            var r = n.index;
                            t === D.keys.RIGHT && (r += n.length + 1);
                            var o = this.quill.getLeaf(r);
                            return !(b(o, 1)[0] instanceof S.default.Embed) || (t === D.keys.LEFT ? e ? this.quill.setSelection(n.index - 1, n.length + 1, q.default.sources.USER) : this.quill.setSelection(n.index - 1, q.default.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, q.default.sources.USER) : this.quill.setSelection(n.index + n.length + 1, q.default.sources.USER), !1)
                        }), n
                    }

                    function u(t, e) {
                        if (!(0 === t.index || this.quill.getLength() <= 1)) {
                            var n = this.quill.getLine(t.index),
                                r = b(n, 1),
                                o = r[0],
                                i = {};
                            if (0 === e.offset) {
                                var l = this.quill.getLine(t.index - 1),
                                    a = b(l, 1),
                                    s = a[0];
                                if (null != s && s.length() > 1) {
                                    var u = o.formats(),
                                        c = this.quill.getFormat(t.index - 1, 1);
                                    i = N.default.attributes.diff(u, c) || {}
                                }
                            }
                            var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
                            this.quill.deleteText(t.index - f, f, q.default.sources.USER), Object.keys(i).length > 0 && this.quill.formatLine(t.index - f, f, i, q.default.sources.USER), this.quill.focus()
                        }
                    }

                    function c(t, e) {
                        var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
                        if (!(t.index >= this.quill.getLength() - n)) {
                            var r = {},
                                o = 0,
                                i = this.quill.getLine(t.index),
                                l = b(i, 1),
                                a = l[0];
                            if (e.offset >= a.length() - 1) {
                                var s = this.quill.getLine(t.index + 1),
                                    u = b(s, 1),
                                    c = u[0];
                                if (c) {
                                    var f = a.formats(),
                                        h = this.quill.getFormat(t.index, 1);
                                    r = N.default.attributes.diff(f, h) || {}, o = c.length()
                                }
                            }
                            this.quill.deleteText(t.index, n, q.default.sources.USER), Object.keys(r).length > 0 && this.quill.formatLine(t.index + o - 1, n, r, q.default.sources.USER)
                        }
                    }

                    function f(t) {
                        var e = this.quill.getLines(t),
                            n = {};
                        if (e.length > 1) {
                            var r = e[0].formats(),
                                o = e[e.length - 1].formats();
                            n = N.default.attributes.diff(o, r) || {}
                        }
                        this.quill.deleteText(t, q.default.sources.USER), Object.keys(n).length > 0 && this.quill.formatLine(t.index, 1, n, q.default.sources.USER), this.quill.setSelection(t.index, q.default.sources.SILENT), this.quill.focus()
                    }

                    function h(t, e) {
                        var n = this;
                        t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
                        var r = Object.keys(e.format).reduce(function(t, n) { return S.default.query(n, S.default.Scope.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]), t }, {});
                        this.quill.insertText(t.index, "\n", r, q.default.sources.USER), this.quill.setSelection(t.index + 1, q.default.sources.SILENT), this.quill.focus(), Object.keys(e.format).forEach(function(t) { null == r[t] && (Array.isArray(e.format[t]) || "link" !== t && n.quill.format(t, e.format[t], q.default.sources.USER)) })
                    }

                    function p(t) {
                        return {
                            key: D.keys.TAB,
                            shiftKey: !t,
                            format: { "code-block": !0 },
                            handler: function(e) {
                                var n = S.default.query("code-block"),
                                    r = e.index,
                                    o = e.length,
                                    i = this.quill.scroll.descendant(n, r),
                                    l = b(i, 2),
                                    a = l[0],
                                    s = l[1];
                                if (null != a) {
                                    var u = this.quill.getIndex(a),
                                        c = a.newlineIndex(s, !0) + 1,
                                        f = a.newlineIndex(u + s + o),
                                        h = a.domNode.textContent.slice(c, f).split("\n");
                                    s = 0, h.forEach(function(e, i) { t ? (a.insertAt(c + s, n.TAB), s += n.TAB.length, 0 === i ? r += n.TAB.length : o += n.TAB.length) : e.startsWith(n.TAB) && (a.deleteAt(c + s, n.TAB.length), s -= n.TAB.length, 0 === i ? r -= n.TAB.length : o -= n.TAB.length), s += e.length + 1 }), this.quill.update(q.default.sources.USER), this.quill.setSelection(r, o, q.default.sources.SILENT)
                                }
                            }
                        }
                    }

                    function d(t) { return { key: t[0].toUpperCase(), shortKey: !0, handler: function(e, n) { this.quill.format(t, !n.format[t], q.default.sources.USER) } } }

                    function y(t) {
                        if ("string" == typeof t || "number" == typeof t) return y({ key: t });
                        if ("object" === (void 0 === t ? "undefined" : v(t)) && (t = (0, _.default)(t, !1)), "string" == typeof t.key)
                            if (null != D.keys[t.key.toUpperCase()]) t.key = D.keys[t.key.toUpperCase()];
                            else {
                                if (1 !== t.key.length) return null;
                                t.key = t.key.toUpperCase().charCodeAt(0)
                            }
                        return t.shortKey && (t[I] = t.shortKey, delete t.shortKey), t
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.SHORTKEY = e.default = void 0;
                    var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                        b = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        g = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        m = n(21),
                        _ = r(m),
                        O = n(11),
                        w = r(O),
                        x = n(3),
                        E = r(x),
                        k = n(2),
                        A = r(k),
                        j = n(20),
                        N = r(j),
                        T = n(0),
                        S = r(T),
                        P = n(5),
                        q = r(P),
                        C = n(10),
                        L = r(C),
                        R = n(9),
                        M = r(R),
                        B = (0, L.default)("quill:keyboard"),
                        I = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
                        D = function(t) {
                            function e(t, n) {
                                i(this, e);
                                var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.bindings = {}, Object.keys(r.options.bindings).forEach(function(e) {
                                    ("list autofill" !== e || null == t.scroll.whitelist || t.scroll.whitelist.list) && r.options.bindings[e] && r.addBinding(r.options.bindings[e])
                                }), r.addBinding({ key: e.keys.ENTER, shiftKey: null }, h), r.addBinding({ key: e.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {}), /Firefox/i.test(navigator.userAgent) ? (r.addBinding({ key: e.keys.BACKSPACE }, { collapsed: !0 }, u), r.addBinding({ key: e.keys.DELETE }, { collapsed: !0 }, c)) : (r.addBinding({ key: e.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, u), r.addBinding({ key: e.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, c)), r.addBinding({ key: e.keys.BACKSPACE }, { collapsed: !1 }, f), r.addBinding({ key: e.keys.DELETE }, { collapsed: !1 }, f), r.addBinding({ key: e.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, u), r.listen(), r
                            }
                            return a(e, t), g(e, null, [{ key: "match", value: function(t, e) { return e = y(e), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(n) { return !!e[n] !== t[n] && null !== e[n] }) && e.key === (t.which || t.keyCode) } }]), g(e, [{
                                key: "addBinding",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        r = y(t);
                                    if (null == r || null == r.key) return B.warn("Attempted to add invalid keyboard binding", r);
                                    "function" == typeof e && (e = { handler: e }), "function" == typeof n && (n = { handler: n }), r = (0, E.default)(r, e, n), this.bindings[r.key] = this.bindings[r.key] || [], this.bindings[r.key].push(r)
                                }
                            }, {
                                key: "listen",
                                value: function() {
                                    var t = this;
                                    this.quill.root.addEventListener("keydown", function(n) {
                                        if (!n.defaultPrevented) {
                                            var r = n.which || n.keyCode,
                                                o = (t.bindings[r] || []).filter(function(t) { return e.match(n, t) });
                                            if (0 !== o.length) {
                                                var i = t.quill.getSelection();
                                                if (null != i && t.quill.hasFocus()) {
                                                    var l = t.quill.getLine(i.index),
                                                        a = b(l, 2),
                                                        s = a[0],
                                                        u = a[1],
                                                        c = t.quill.getLeaf(i.index),
                                                        f = b(c, 2),
                                                        h = f[0],
                                                        p = f[1],
                                                        d = 0 === i.length ? [h, p] : t.quill.getLeaf(i.index + i.length),
                                                        y = b(d, 2),
                                                        g = y[0],
                                                        m = y[1],
                                                        _ = h instanceof S.default.Text ? h.value().slice(0, p) : "",
                                                        O = g instanceof S.default.Text ? g.value().slice(m) : "",
                                                        x = { collapsed: 0 === i.length, empty: 0 === i.length && s.length() <= 1, format: t.quill.getFormat(i), offset: u, prefix: _, suffix: O };
                                                    o.some(function(e) { if (null != e.collapsed && e.collapsed !== x.collapsed) return !1; if (null != e.empty && e.empty !== x.empty) return !1; if (null != e.offset && e.offset !== x.offset) return !1; if (Array.isArray(e.format)) { if (e.format.every(function(t) { return null == x.format[t] })) return !1 } else if ("object" === v(e.format) && !Object.keys(e.format).every(function(t) { return !0 === e.format[t] ? null != x.format[t] : !1 === e.format[t] ? null == x.format[t] : (0, w.default)(e.format[t], x.format[t]) })) return !1; return !(null != e.prefix && !e.prefix.test(x.prefix)) && (!(null != e.suffix && !e.suffix.test(x.suffix)) && !0 !== e.handler.call(t, i, x)) }) && n.preventDefault()
                                                }
                                            }
                                        }
                                    })
                                }
                            }]), e
                        }(M.default);
                    D.keys = { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }, D.DEFAULTS = {
                        bindings: {
                            bold: d("bold"),
                            italic: d("italic"),
                            underline: d("underline"),
                            indent: {
                                key: D.keys.TAB,
                                format: ["blockquote", "indent", "list"],
                                handler: function(t, e) {
                                    if (e.collapsed && 0 !== e.offset) return !0;
                                    this.quill.format("indent", "+1", q.default.sources.USER)
                                }
                            },
                            outdent: {
                                key: D.keys.TAB,
                                shiftKey: !0,
                                format: ["blockquote", "indent", "list"],
                                handler: function(t, e) {
                                    if (e.collapsed && 0 !== e.offset) return !0;
                                    this.quill.format("indent", "-1", q.default.sources.USER)
                                }
                            },
                            "outdent backspace": { key: D.keys.BACKSPACE, collapsed: !0, shiftKey: null, metaKey: null, ctrlKey: null, altKey: null, format: ["indent", "list"], offset: 0, handler: function(t, e) { null != e.format.indent ? this.quill.format("indent", "-1", q.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, q.default.sources.USER) } },
                            "indent code-block": p(!0),
                            "outdent code-block": p(!1),
                            "remove tab": { key: D.keys.TAB, shiftKey: !0, collapsed: !0, prefix: /\t$/, handler: function(t) { this.quill.deleteText(t.index - 1, 1, q.default.sources.USER) } },
                            tab: {
                                key: D.keys.TAB,
                                handler: function(t) {
                                    this.quill.history.cutoff();
                                    var e = (new A.default).retain(t.index).delete(t.length).insert("\t");
                                    this.quill.updateContents(e, q.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, q.default.sources.SILENT)
                                }
                            },
                            "list empty enter": { key: D.keys.ENTER, collapsed: !0, format: ["list"], empty: !0, handler: function(t, e) { this.quill.format("list", !1, q.default.sources.USER), e.format.indent && this.quill.format("indent", !1, q.default.sources.USER) } },
                            "checklist enter": {
                                key: D.keys.ENTER,
                                collapsed: !0,
                                format: { list: "checked" },
                                handler: function(t) {
                                    var e = this.quill.getLine(t.index),
                                        n = b(e, 2),
                                        r = n[0],
                                        o = n[1],
                                        i = (0, E.default)({}, r.formats(), { list: "checked" }),
                                        l = (new A.default).retain(t.index).insert("\n", i).retain(r.length() - o - 1).retain(1, { list: "unchecked" });
                                    this.quill.updateContents(l, q.default.sources.USER), this.quill.setSelection(t.index + 1, q.default.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "header enter": {
                                key: D.keys.ENTER,
                                collapsed: !0,
                                format: ["header"],
                                suffix: /^$/,
                                handler: function(t, e) {
                                    var n = this.quill.getLine(t.index),
                                        r = b(n, 2),
                                        o = r[0],
                                        i = r[1],
                                        l = (new A.default).retain(t.index).insert("\n", e.format).retain(o.length() - i - 1).retain(1, { header: null });
                                    this.quill.updateContents(l, q.default.sources.USER), this.quill.setSelection(t.index + 1, q.default.sources.SILENT), this.quill.scrollIntoView()
                                }
                            },
                            "list autofill": {
                                key: " ",
                                collapsed: !0,
                                format: { list: !1 },
                                prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                                handler: function(t, e) {
                                    var n = e.prefix.length,
                                        r = this.quill.getLine(t.index),
                                        o = b(r, 2),
                                        i = o[0],
                                        l = o[1];
                                    if (l > n) return !0;
                                    var a = void 0;
                                    switch (e.prefix.trim()) {
                                        case "[]":
                                        case "[ ]":
                                            a = "unchecked";
                                            break;
                                        case "[x]":
                                            a = "checked";
                                            break;
                                        case "-":
                                        case "*":
                                            a = "bullet";
                                            break;
                                        default:
                                            a = "ordered"
                                    }
                                    this.quill.insertText(t.index, " ", q.default.sources.USER), this.quill.history.cutoff();
                                    var s = (new A.default).retain(t.index - l).delete(n + 1).retain(i.length() - 2 - l).retain(1, { list: a });
                                    this.quill.updateContents(s, q.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index - n, q.default.sources.SILENT)
                                }
                            },
                            "code exit": {
                                key: D.keys.ENTER,
                                collapsed: !0,
                                format: ["code-block"],
                                prefix: /\n\n$/,
                                suffix: /^\s+$/,
                                handler: function(t) {
                                    var e = this.quill.getLine(t.index),
                                        n = b(e, 2),
                                        r = n[0],
                                        o = n[1],
                                        i = (new A.default).retain(t.index + r.length() - o - 2).retain(1, { "code-block": null }).delete(1);
                                    this.quill.updateContents(i, q.default.sources.USER)
                                }
                            },
                            "embed left": s(D.keys.LEFT, !1),
                            "embed left shift": s(D.keys.LEFT, !0),
                            "embed right": s(D.keys.RIGHT, !1),
                            "embed right shift": s(D.keys.RIGHT, !0)
                        }
                    }, e.default = D, e.SHORTKEY = I
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var a = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        s = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        u = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        c = n(0),
                        f = r(c),
                        h = n(7),
                        p = r(h),
                        d = function(t) {
                            function e(t, n) { o(this, e); var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return r.selection = n, r.textNode = document.createTextNode(e.CONTENTS), r.domNode.appendChild(r.textNode), r._length = 0, r }
                            return l(e, t), u(e, null, [{ key: "value", value: function() {} }]), u(e, [{ key: "detach", value: function() { null != this.parent && this.parent.removeChild(this) } }, {
                                key: "format",
                                value: function(t, n) {
                                    if (0 !== this._length) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                                    for (var r = this, o = 0; null != r && r.statics.scope !== f.default.Scope.BLOCK_BLOT;) o += r.offset(r.parent), r = r.parent;
                                    null != r && (this._length = e.CONTENTS.length, r.optimize(), r.formatAt(o, e.CONTENTS.length, t, n), this._length = 0)
                                }
                            }, { key: "index", value: function(t, n) { return t === this.textNode ? 0 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n) } }, { key: "length", value: function() { return this._length } }, { key: "position", value: function() { return [this.textNode, this.textNode.data.length] } }, { key: "remove", value: function() { s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this), this.parent = null } }, {
                                key: "restore",
                                value: function() {
                                    if (!this.selection.composing && null != this.parent) {
                                        var t = this.textNode,
                                            n = this.selection.getNativeRange(),
                                            r = void 0,
                                            o = void 0,
                                            i = void 0;
                                        if (null != n && n.start.node === t && n.end.node === t) {
                                            var l = [t, n.start.offset, n.end.offset];
                                            r = l[0], o = l[1], i = l[2]
                                        }
                                        for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                                        if (this.textNode.data !== e.CONTENTS) {
                                            var s = this.textNode.data.split(e.CONTENTS).join("");
                                            this.next instanceof p.default ? (r = this.next.domNode, this.next.insertAt(0, s), this.textNode.data = e.CONTENTS) : (this.textNode.data = s, this.parent.insertBefore(f.default.create(this.textNode), this), this.textNode = document.createTextNode(e.CONTENTS), this.domNode.appendChild(this.textNode))
                                        }
                                        if (this.remove(), null != o) {
                                            var u = [o, i].map(function(t) { return Math.max(0, Math.min(r.data.length, t - 1)) }),
                                                c = a(u, 2);
                                            return o = c[0], i = c[1], { startNode: r, startOffset: o, endNode: r, endOffset: i }
                                        }
                                    }
                                }
                            }, {
                                key: "update",
                                value: function(t, e) {
                                    var n = this;
                                    if (t.some(function(t) { return "characterData" === t.type && t.target === n.textNode })) {
                                        var r = this.restore();
                                        r && (e.range = r)
                                    }
                                }
                            }, { key: "value", value: function() { return "" } }]), e
                        }(f.default.Embed);
                    d.blotName = "cursor", d.className = "ql-cursor", d.tagName = "span", d.CONTENTS = "\ufeff", e.default = d
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var a = n(0),
                        s = r(a),
                        u = n(4),
                        c = r(u),
                        f = function(t) {
                            function e() { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return l(e, t), e
                        }(s.default.Container);
                    f.allowedChildren = [c.default, u.BlockEmbed, f], e.default = f
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0;
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(0),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, [{ key: "value", value: function(t) { var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t); return n.startsWith("rgb(") ? (n = n.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n.split(",").map(function(t) { return ("00" + parseInt(t).toString(16)).slice(-2) }).join("")) : n } }]), e
                        }(u.default.Attributor.Style),
                        f = new u.default.Attributor.Class("color", "ql-color", { scope: u.default.Scope.INLINE }),
                        h = new c("color", "color", { scope: u.default.Scope.INLINE });
                    e.ColorAttributor = c, e.ColorClass = f, e.ColorStyle = h
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function l(t, e) {
                        var n = document.createElement("a");
                        n.href = t;
                        var r = n.href.slice(0, n.href.indexOf(":"));
                        return e.indexOf(r) > -1
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.sanitize = e.default = void 0;
                    var a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        s = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        u = n(6),
                        c = function(t) { return t && t.__esModule ? t : { default: t } }(u),
                        f = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), a(e, [{
                                key: "format",
                                value: function(t, n) {
                                    if (t !== this.statics.blotName || !n) return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n);
                                    n = this.constructor.sanitize(n), this.domNode.setAttribute("href", n)
                                }
                            }], [{ key: "create", value: function(t) { var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t); return t = this.sanitize(t), n.setAttribute("href", t), n.setAttribute("target", "_blank"), n } }, { key: "formats", value: function(t) { return t.getAttribute("href") } }, { key: "sanitize", value: function(t) { return l(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL } }]), e
                        }(c.default);
                    f.blotName = "link", f.tagName = "A", f.SANITIZED_URL = "about:blank", f.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e.default = f, e.sanitize = l
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { t.setAttribute(e, !("true" === t.getAttribute(e))) }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                        a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        s = n(23),
                        u = r(s),
                        c = n(107),
                        f = r(c),
                        h = 0,
                        p = function() {
                            function t(e) {
                                var n = this;
                                o(this, t), this.select = e, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() { n.togglePicker() }), this.label.addEventListener("keydown", function(t) {
                                    switch (t.keyCode) {
                                        case u.default.keys.ENTER:
                                            n.togglePicker();
                                            break;
                                        case u.default.keys.ESCAPE:
                                            n.escape(), t.preventDefault()
                                    }
                                }), this.select.addEventListener("change", this.update.bind(this))
                            }
                            return a(t, [{ key: "togglePicker", value: function() { this.container.classList.toggle("ql-expanded"), i(this.label, "aria-expanded"), i(this.options, "aria-hidden") } }, {
                                key: "buildItem",
                                value: function(t) {
                                    var e = this,
                                        n = document.createElement("span");
                                    return n.tabIndex = "0", n.setAttribute("role", "button"), n.classList.add("ql-picker-item"), t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")), t.textContent && n.setAttribute("data-label", t.textContent), n.addEventListener("click", function() { e.selectItem(n, !0) }), n.addEventListener("keydown", function(t) {
                                        switch (t.keyCode) {
                                            case u.default.keys.ENTER:
                                                e.selectItem(n, !0), t.preventDefault();
                                                break;
                                            case u.default.keys.ESCAPE:
                                                e.escape(), t.preventDefault()
                                        }
                                    }), n
                                }
                            }, { key: "buildLabel", value: function() { var t = document.createElement("span"); return t.classList.add("ql-picker-label"), t.innerHTML = f.default, t.tabIndex = "0", t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t } }, {
                                key: "buildOptions",
                                value: function() {
                                    var t = this,
                                        e = document.createElement("span");
                                    e.classList.add("ql-picker-options"), e.setAttribute("aria-hidden", "true"), e.tabIndex = "-1", e.id = "ql-picker-options-" + h, h += 1, this.label.setAttribute("aria-controls", e.id), this.options = e, [].slice.call(this.select.options).forEach(function(n) {
                                        var r = t.buildItem(n);
                                        e.appendChild(r), !0 === n.selected && t.selectItem(r)
                                    }), this.container.appendChild(e)
                                }
                            }, {
                                key: "buildPicker",
                                value: function() {
                                    var t = this;
                                    [].slice.call(this.select.attributes).forEach(function(e) { t.container.setAttribute(e.name, e.value) }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions()
                                }
                            }, {
                                key: "escape",
                                value: function() {
                                    var t = this;
                                    this.close(), setTimeout(function() { return t.label.focus() }, 1)
                                }
                            }, { key: "close", value: function() { this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true") } }, {
                                key: "selectItem",
                                value: function(t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                        n = this.container.querySelector(".ql-selected");
                                    if (t !== n && (null != n && n.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e))) {
                                        if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));
                                        else if ("object" === ("undefined" == typeof Event ? "undefined" : l(Event))) {
                                            var r = document.createEvent("Event");
                                            r.initEvent("change", !0, !0), this.select.dispatchEvent(r)
                                        }
                                        this.close()
                                    }
                                }
                            }, {
                                key: "update",
                                value: function() {
                                    var t = void 0;
                                    if (this.select.selectedIndex > -1) {
                                        var e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                                        t = this.select.options[this.select.selectedIndex], this.selectItem(e)
                                    } else this.selectItem(null);
                                    var n = null != t && t !== this.select.querySelector("option[selected]");
                                    this.label.classList.toggle("ql-active", n)
                                }
                            }]), t
                        }();
                    e.default = p
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = n(0),
                        i = r(o),
                        l = n(5),
                        a = r(l),
                        s = n(4),
                        u = r(s),
                        c = n(16),
                        f = r(c),
                        h = n(25),
                        p = r(h),
                        d = n(24),
                        y = r(d),
                        v = n(35),
                        b = r(v),
                        g = n(6),
                        m = r(g),
                        _ = n(22),
                        O = r(_),
                        w = n(7),
                        x = r(w),
                        E = n(55),
                        k = r(E),
                        A = n(42),
                        j = r(A),
                        N = n(23),
                        T = r(N);
                    a.default.register({ "blots/block": u.default, "blots/block/embed": s.BlockEmbed, "blots/break": f.default, "blots/container": p.default, "blots/cursor": y.default, "blots/embed": b.default, "blots/inline": m.default, "blots/scroll": O.default, "blots/text": x.default, "modules/clipboard": k.default, "modules/history": j.default, "modules/keyboard": T.default }), i.default.register(u.default, f.default, y.default, m.default, O.default, x.default), e.default = a.default
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var r = n(1),
                        o = function() {
                            function t(t) { this.domNode = t, this.domNode[r.DATA_KEY] = { blot: this } }
                            return Object.defineProperty(t.prototype, "statics", { get: function() { return this.constructor }, enumerable: !0, configurable: !0 }), t.create = function(t) { if (null == this.tagName) throw new r.ParchmentError("Blot definition missing tagName"); var e; return Array.isArray(this.tagName) ? ("string" == typeof t && (t = t.toUpperCase(), parseInt(t).toString() === t && (t = parseInt(t))), e = "number" == typeof t ? document.createElement(this.tagName[t - 1]) : this.tagName.indexOf(t) > -1 ? document.createElement(t) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName), this.className && e.classList.add(this.className), e }, t.prototype.attach = function() { null != this.parent && (this.scroll = this.parent.scroll) }, t.prototype.clone = function() { var t = this.domNode.cloneNode(!1); return r.create(t) }, t.prototype.detach = function() { null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY] }, t.prototype.deleteAt = function(t, e) { this.isolate(t, e).remove() }, t.prototype.formatAt = function(t, e, n, o) {
                                var i = this.isolate(t, e);
                                if (null != r.query(n, r.Scope.BLOT) && o) i.wrap(n, o);
                                else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
                                    var l = r.create(this.statics.scope);
                                    i.wrap(l), l.format(n, o)
                                }
                            }, t.prototype.insertAt = function(t, e, n) {
                                var o = null == n ? r.create("text", e) : r.create(e, n),
                                    i = this.split(t);
                                this.parent.insertBefore(o, i)
                            }, t.prototype.insertInto = function(t, e) {
                                void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);
                                var n = null;
                                t.children.insertBefore(this, e), null != e && (n = e.domNode), this.domNode.parentNode == t.domNode && this.domNode.nextSibling == n || t.domNode.insertBefore(this.domNode, n), this.parent = t, this.attach()
                            }, t.prototype.isolate = function(t, e) { var n = this.split(t); return n.split(e), n }, t.prototype.length = function() { return 1 }, t.prototype.offset = function(t) { return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t) }, t.prototype.optimize = function(t) { null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations }, t.prototype.remove = function() { null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach() }, t.prototype.replace = function(t) { null != t.parent && (t.parent.insertBefore(this, t.next), t.remove()) }, t.prototype.replaceWith = function(t, e) { var n = "string" == typeof t ? r.create(t, e) : t; return n.replace(this), n }, t.prototype.split = function(t, e) { return 0 === t ? this : this.next }, t.prototype.update = function(t, e) {}, t.prototype.wrap = function(t, e) { var n = "string" == typeof t ? r.create(t, e) : t; return null != this.parent && this.parent.insertBefore(n, this.next), n.appendChild(this), n }, t.blotName = "abstract", t
                        }();
                    e.default = o
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var r = n(12),
                        o = n(32),
                        i = n(33),
                        l = n(1),
                        a = function() {
                            function t(t) { this.attributes = {}, this.domNode = t, this.build() }
                            return t.prototype.attribute = function(t, e) { e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]) }, t.prototype.build = function() {
                                var t = this;
                                this.attributes = {};
                                var e = r.default.keys(this.domNode),
                                    n = o.default.keys(this.domNode),
                                    a = i.default.keys(this.domNode);
                                e.concat(n).concat(a).forEach(function(e) {
                                    var n = l.query(e, l.Scope.ATTRIBUTE);
                                    n instanceof r.default && (t.attributes[n.attrName] = n)
                                })
                            }, t.prototype.copy = function(t) {
                                var e = this;
                                Object.keys(this.attributes).forEach(function(n) {
                                    var r = e.attributes[n].value(e.domNode);
                                    t.format(n, r)
                                })
                            }, t.prototype.move = function(t) {
                                var e = this;
                                this.copy(t), Object.keys(this.attributes).forEach(function(t) { e.attributes[t].remove(e.domNode) }), this.attributes = {}
                            }, t.prototype.values = function() { var t = this; return Object.keys(this.attributes).reduce(function(e, n) { return e[n] = t.attributes[n].value(t.domNode), e }, {}) }, t
                        }();
                    e.default = a
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { return (t.getAttribute("class") || "").split(/\s+/).filter(function(t) { return 0 === t.indexOf(e + "-") }) }
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var i = n(12),
                        l = function(t) {
                            function e() { return null !== t && t.apply(this, arguments) || this }
                            return o(e, t), e.keys = function(t) { return (t.getAttribute("class") || "").split(/\s+/).map(function(t) { return t.split("-").slice(0, -1).join("-") }) }, e.prototype.add = function(t, e) { return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0) }, e.prototype.remove = function(t) { r(t, this.keyName).forEach(function(e) { t.classList.remove(e) }), 0 === t.classList.length && t.removeAttribute("class") }, e.prototype.value = function(t) {
                                var e = r(t, this.keyName)[0] || "",
                                    n = e.slice(this.keyName.length + 1);
                                return this.canAdd(t, n) ? n : ""
                            }, e
                        }(i.default);
                    e.default = l
                }, function(t, e, n) {
                    "use strict";

                    function r(t) {
                        var e = t.split("-"),
                            n = e.slice(1).map(function(t) { return t[0].toUpperCase() + t.slice(1) }).join("");
                        return e[0] + n
                    }
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var i = n(12),
                        l = function(t) {
                            function e() { return null !== t && t.apply(this, arguments) || this }
                            return o(e, t), e.keys = function(t) { return (t.getAttribute("style") || "").split(";").map(function(t) { return t.split(":")[0].trim() }) }, e.prototype.add = function(t, e) { return !!this.canAdd(t, e) && (t.style[r(this.keyName)] = e, !0) }, e.prototype.remove = function(t) { t.style[r(this.keyName)] = "", t.getAttribute("style") || t.removeAttribute("style") }, e.prototype.value = function(t) { var e = t.style[r(this.keyName)]; return this.canAdd(t, e) ? e : "" }, e
                        }(i.default);
                    e.default = l
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        i = function() {
                            function t(e, n) { r(this, t), this.quill = e, this.options = n, this.modules = {} }
                            return o(t, [{
                                key: "init",
                                value: function() {
                                    var t = this;
                                    Object.keys(this.options.modules).forEach(function(e) { null == t.modules[e] && t.addModule(e) })
                                }
                            }, { key: "addModule", value: function(t) { var e = this.quill.constructor.import("modules/" + t); return this.modules[t] = new e(this.quill, this.options.modules[t] || {}), this.modules[t] } }]), t
                        }();
                    i.DEFAULTS = { modules: {} }, i.themes = { default: i }, e.default = i
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        s = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        u = n(0),
                        c = r(u),
                        f = n(7),
                        h = r(f),
                        p = "\ufeff",
                        d = function(t) {
                            function e(t) { o(this, e); var n = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return n.contentNode = document.createElement("span"), n.contentNode.setAttribute("contenteditable", !1), [].slice.call(n.domNode.childNodes).forEach(function(t) { n.contentNode.appendChild(t) }), n.leftGuard = document.createTextNode(p), n.rightGuard = document.createTextNode(p), n.domNode.appendChild(n.leftGuard), n.domNode.appendChild(n.contentNode), n.domNode.appendChild(n.rightGuard), n }
                            return l(e, t), a(e, [{ key: "index", value: function(t, n) { return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "index", this).call(this, t, n) } }, {
                                key: "restore",
                                value: function(t) {
                                    var e = void 0,
                                        n = void 0,
                                        r = t.data.split(p).join("");
                                    if (t === this.leftGuard)
                                        if (this.prev instanceof h.default) {
                                            var o = this.prev.length();
                                            this.prev.insertAt(o, r), e = { startNode: this.prev.domNode, startOffset: o + r.length }
                                        } else n = document.createTextNode(r), this.parent.insertBefore(c.default.create(n), this), e = { startNode: n, startOffset: r.length };
                                    else t === this.rightGuard && (this.next instanceof h.default ? (this.next.insertAt(0, r), e = { startNode: this.next.domNode, startOffset: r.length }) : (n = document.createTextNode(r), this.parent.insertBefore(c.default.create(n), this.next), e = { startNode: n, startOffset: r.length }));
                                    return t.data = p, e
                                }
                            }, {
                                key: "update",
                                value: function(t, e) {
                                    var n = this;
                                    t.forEach(function(t) {
                                        if ("characterData" === t.type && (t.target === n.leftGuard || t.target === n.rightGuard)) {
                                            var r = n.restore(t.target);
                                            r && (e.range = r)
                                        }
                                    })
                                }
                            }]), e
                        }(c.default.Embed);
                    e.default = d
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0;
                    var r = n(0),
                        o = function(t) { return t && t.__esModule ? t : { default: t } }(r),
                        i = { scope: o.default.Scope.BLOCK, whitelist: ["right", "center", "justify"] },
                        l = new o.default.Attributor.Attribute("align", "align", i),
                        a = new o.default.Attributor.Class("align", "ql-align", i),
                        s = new o.default.Attributor.Style("align", "text-align", i);
                    e.AlignAttribute = l, e.AlignClass = a, e.AlignStyle = s
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.BackgroundStyle = e.BackgroundClass = void 0;
                    var r = n(0),
                        o = function(t) { return t && t.__esModule ? t : { default: t } }(r),
                        i = n(26),
                        l = new o.default.Attributor.Class("background", "ql-bg", { scope: o.default.Scope.INLINE }),
                        a = new i.ColorAttributor("background", "background-color", { scope: o.default.Scope.INLINE });
                    e.BackgroundClass = l, e.BackgroundStyle = a
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0;
                    var r = n(0),
                        o = function(t) { return t && t.__esModule ? t : { default: t } }(r),
                        i = { scope: o.default.Scope.BLOCK, whitelist: ["rtl"] },
                        l = new o.default.Attributor.Attribute("direction", "dir", i),
                        a = new o.default.Attributor.Class("direction", "ql-direction", i),
                        s = new o.default.Attributor.Style("direction", "direction", i);
                    e.DirectionAttribute = l, e.DirectionClass = a, e.DirectionStyle = s
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.FontClass = e.FontStyle = void 0;
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(0),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = { scope: u.default.Scope.INLINE, whitelist: ["serif", "monospace"] },
                        f = new u.default.Attributor.Class("font", "ql-font", c),
                        h = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, [{ key: "value", value: function(t) { return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t).replace(/["']/g, "") } }]), e
                        }(u.default.Attributor.Style),
                        p = new h("font", "font-family", c);
                    e.FontStyle = p, e.FontClass = f
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.SizeStyle = e.SizeClass = void 0;
                    var r = n(0),
                        o = function(t) { return t && t.__esModule ? t : { default: t } }(r),
                        i = new o.default.Attributor.Class("size", "ql-size", { scope: o.default.Scope.INLINE, whitelist: ["small", "large", "huge"] }),
                        l = new o.default.Attributor.Style("size", "font-size", { scope: o.default.Scope.INLINE, whitelist: ["10px", "18px", "32px"] });
                    e.SizeClass = i, e.SizeStyle = l
                }, function(t, e, n) {
                    "use strict";
                    t.exports = { align: { "": n(76), center: n(77), right: n(78), justify: n(79) }, background: n(80), blockquote: n(81), bold: n(82), clean: n(83), code: n(58), "code-block": n(58), color: n(84), direction: { "": n(85), rtl: n(86) }, float: { center: n(87), full: n(88), left: n(89), right: n(90) }, formula: n(91), header: { 1: n(92), 2: n(93) }, italic: n(94), image: n(95), indent: { "+1": n(96), "-1": n(97) }, link: n(98), list: { ordered: n(99), bullet: n(100), check: n(101) }, script: { sub: n(102), super: n(103) }, strike: n(104), underline: n(105), video: n(106) }
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function a(t) { var e = t.ops[t.ops.length - 1]; return null != e && (null != e.insert ? "string" == typeof e.insert && e.insert.endsWith("\n") : null != e.attributes && Object.keys(e.attributes).some(function(t) { return null != f.default.query(t, f.default.Scope.BLOCK) })) }

                    function s(t) {
                        var e = t.reduce(function(t, e) { return t += e.delete || 0 }, 0),
                            n = t.length() - e;
                        return a(t) && (n -= 1), n
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.getLastChangeIndex = e.default = void 0;
                    var u = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        c = n(0),
                        f = r(c),
                        h = n(5),
                        p = r(h),
                        d = n(9),
                        y = r(d),
                        v = function(t) {
                            function e(t, n) { o(this, e); var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)); return r.lastRecorded = 0, r.ignoreChange = !1, r.clear(), r.quill.on(p.default.events.EDITOR_CHANGE, function(t, e, n, o) { t !== p.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== p.default.sources.USER ? r.transform(e) : r.record(e, n)) }), r.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, r.undo.bind(r)), r.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, r.redo.bind(r)), /Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, r.redo.bind(r)), r }
                            return l(e, t), u(e, [{
                                key: "change",
                                value: function(t, e) {
                                    if (0 !== this.stack[t].length) {
                                        var n = this.stack[t].pop();
                                        this.stack[e].push(n), this.lastRecorded = 0, this.ignoreChange = !0, this.quill.updateContents(n[t], p.default.sources.USER), this.ignoreChange = !1;
                                        var r = s(n[t]);
                                        this.quill.setSelection(r)
                                    }
                                }
                            }, { key: "clear", value: function() { this.stack = { undo: [], redo: [] } } }, { key: "cutoff", value: function() { this.lastRecorded = 0 } }, {
                                key: "record",
                                value: function(t, e) {
                                    if (0 !== t.ops.length) {
                                        this.stack.redo = [];
                                        var n = this.quill.getContents().diff(e),
                                            r = Date.now();
                                        if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                                            var o = this.stack.undo.pop();
                                            n = n.compose(o.undo), t = o.redo.compose(t)
                                        } else this.lastRecorded = r;
                                        this.stack.undo.push({ redo: t, undo: n }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift()
                                    }
                                }
                            }, { key: "redo", value: function() { this.change("redo", "undo") } }, { key: "transform", value: function(t) { this.stack.undo.forEach(function(e) { e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0) }), this.stack.redo.forEach(function(e) { e.undo = t.transform(e.undo, !0), e.redo = t.transform(e.redo, !0) }) } }, { key: "undo", value: function() { this.change("undo", "redo") } }]), e
                        }(y.default);
                    v.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 }, e.default = v, e.getLastChangeIndex = s
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function a(t) { var e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/); return e ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : t }

                    function s(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e.forEach(function(e) {
                            var r = document.createElement("option");
                            e === n ? r.setAttribute("selected", "selected") : r.setAttribute("value", e), t.appendChild(r)
                        })
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.BaseTooltip = void 0;
                    var u = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        c = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        f = n(3),
                        h = r(f),
                        p = n(2),
                        d = r(p),
                        y = n(8),
                        v = r(y),
                        b = n(23),
                        g = r(b),
                        m = n(34),
                        _ = r(m),
                        O = n(59),
                        w = r(O),
                        x = n(60),
                        E = r(x),
                        k = n(28),
                        A = r(k),
                        j = n(61),
                        N = r(j),
                        T = [!1, "center", "right", "justify"],
                        S = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
                        P = [!1, "serif", "monospace"],
                        q = ["1", "2", "3", !1],
                        C = ["small", !1, "large", "huge"],
                        L = function(t) {
                            function e(t, n) {
                                o(this, e);
                                var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)),
                                    l = function e(n) {
                                        if (!document.body.contains(t.root)) return document.body.removeEventListener("click", e);
                                        null == r.tooltip || r.tooltip.root.contains(n.target) || document.activeElement === r.tooltip.textbox || r.quill.hasFocus() || r.tooltip.hide(), null != r.pickers && r.pickers.forEach(function(t) { t.container.contains(n.target) || t.close() })
                                    };
                                return t.emitter.listenDOM("click", document.body, l), r
                            }
                            return l(e, t), u(e, [{ key: "addModule", value: function(t) { var n = c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addModule", this).call(this, t); return "toolbar" === t && this.extendToolbar(n), n } }, {
                                key: "buildButtons",
                                value: function(t, e) {
                                    t.forEach(function(t) {
                                        (t.getAttribute("class") || "").split(/\s+/).forEach(function(n) {
                                            if (n.startsWith("ql-") && (n = n.slice("ql-".length), null != e[n]))
                                                if ("direction" === n) t.innerHTML = e[n][""] + e[n].rtl;
                                                else if ("string" == typeof e[n]) t.innerHTML = e[n];
                                            else {
                                                var r = t.value || "";
                                                null != r && e[n][r] && (t.innerHTML = e[n][r])
                                            }
                                        })
                                    })
                                }
                            }, {
                                key: "buildPickers",
                                value: function(t, e) {
                                    var n = this;
                                    this.pickers = t.map(function(t) { if (t.classList.contains("ql-align")) return null == t.querySelector("option") && s(t, T), new E.default(t, e.align); if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) { var n = t.classList.contains("ql-background") ? "background" : "color"; return null == t.querySelector("option") && s(t, S, "background" === n ? "#ffffff" : "#000000"), new w.default(t, e[n]) } return null == t.querySelector("option") && (t.classList.contains("ql-font") ? s(t, P) : t.classList.contains("ql-header") ? s(t, q) : t.classList.contains("ql-size") && s(t, C)), new A.default(t) });
                                    var r = function() { n.pickers.forEach(function(t) { t.update() }) };
                                    this.quill.on(v.default.events.EDITOR_CHANGE, r)
                                }
                            }]), e
                        }(_.default);
                    L.DEFAULTS = (0, h.default)(!0, {}, _.default.DEFAULTS, {
                        modules: {
                            toolbar: {
                                handlers: {
                                    formula: function() { this.quill.theme.tooltip.edit("formula") },
                                    image: function() {
                                        var t = this,
                                            e = this.container.querySelector("input.ql-image[type=file]");
                                        null == e && (e = document.createElement("input"), e.setAttribute("type", "file"), e.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e.classList.add("ql-image"), e.addEventListener("change", function() {
                                            if (null != e.files && null != e.files[0]) {
                                                var n = new FileReader;
                                                n.onload = function(n) {
                                                    var r = t.quill.getSelection(!0);
                                                    t.quill.updateContents((new d.default).retain(r.index).delete(r.length).insert({ image: n.target.result }), v.default.sources.USER), t.quill.setSelection(r.index + 1, v.default.sources.SILENT), e.value = ""
                                                }, n.readAsDataURL(e.files[0])
                                            }
                                        }), this.container.appendChild(e)), e.click()
                                    },
                                    video: function() { this.quill.theme.tooltip.edit("video") }
                                }
                            }
                        }
                    });
                    var R = function(t) {
                        function e(t, n) { o(this, e); var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)); return r.textbox = r.root.querySelector('input[type="text"]'), r.listen(), r }
                        return l(e, t), u(e, [{
                            key: "listen",
                            value: function() {
                                var t = this;
                                this.textbox.addEventListener("keydown", function(e) { g.default.match(e, "enter") ? (t.save(), e.preventDefault()) : g.default.match(e, "escape") && (t.cancel(), e.preventDefault()) })
                            }
                        }, { key: "cancel", value: function() { this.hide() } }, {
                            key: "edit",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link",
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t)
                            }
                        }, {
                            key: "restoreFocus",
                            value: function() {
                                var t = this.quill.scrollingContainer.scrollTop;
                                this.quill.focus(), this.quill.scrollingContainer.scrollTop = t
                            }
                        }, {
                            key: "save",
                            value: function() {
                                var t = this.textbox.value;
                                switch (this.root.getAttribute("data-mode")) {
                                    case "link":
                                        var e = this.quill.root.scrollTop;
                                        this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, v.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, v.default.sources.USER)), this.quill.root.scrollTop = e;
                                        break;
                                    case "video":
                                        t = a(t);
                                    case "formula":
                                        if (!t) break;
                                        var n = this.quill.getSelection(!0);
                                        if (null != n) {
                                            var r = n.index + n.length;
                                            this.quill.insertEmbed(r, this.root.getAttribute("data-mode"), t, v.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(r + 1, " ", v.default.sources.USER), this.quill.setSelection(r + 2, v.default.sources.USER)
                                        }
                                }
                                this.textbox.value = "", this.hide()
                            }
                        }]), e
                    }(N.default);
                    e.BaseTooltip = R, e.default = L
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var r = function() {
                        function t() { this.head = this.tail = null, this.length = 0 }
                        return t.prototype.append = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            this.insertBefore(t[0], null), t.length > 1 && this.append.apply(this, t.slice(1))
                        }, t.prototype.contains = function(t) {
                            for (var e, n = this.iterator(); e = n();)
                                if (e === t) return !0;
                            return !1
                        }, t.prototype.insertBefore = function(t, e) { t && (t.next = e, null != e ? (t.prev = e.prev, null != e.prev && (e.prev.next = t), e.prev = t, e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : (t.prev = null, this.head = this.tail = t), this.length += 1) }, t.prototype.offset = function(t) {
                            for (var e = 0, n = this.head; null != n;) {
                                if (n === t) return e;
                                e += n.length(), n = n.next
                            }
                            return -1
                        }, t.prototype.remove = function(t) { this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), this.length -= 1) }, t.prototype.iterator = function(t) {
                            return void 0 === t && (t = this.head),
                                function() { var e = t; return null != t && (t = t.next), e }
                        }, t.prototype.find = function(t, e) {
                            void 0 === e && (e = !1);
                            for (var n, r = this.iterator(); n = r();) {
                                var o = n.length();
                                if (t < o || e && t === o && (null == n.next || 0 !== n.next.length())) return [n, t];
                                t -= o
                            }
                            return [null, 0]
                        }, t.prototype.forEach = function(t) { for (var e, n = this.iterator(); e = n();) t(e) }, t.prototype.forEachAt = function(t, e, n) {
                            if (!(e <= 0))
                                for (var r, o = this.find(t), i = o[0], l = o[1], a = t - l, s = this.iterator(i);
                                    (r = s()) && a < t + e;) {
                                    var u = r.length();
                                    t > a ? n(r, t - a, Math.min(e, a + u - t)) : n(r, 0, Math.min(u, t + e - a)), a += u
                                }
                        }, t.prototype.map = function(t) { return this.reduce(function(e, n) { return e.push(t(n)), e }, []) }, t.prototype.reduce = function(t, e) { for (var n, r = this.iterator(); n = r();) e = t(e, n); return e }, t
                    }();
                    e.default = r
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = n(17),
                        i = n(1),
                        l = { attributes: !0, characterData: !0, characterDataOldValue: !0, childList: !0, subtree: !0 },
                        a = function(t) {
                            function e(e) { var n = t.call(this, e) || this; return n.scroll = n, n.observer = new MutationObserver(function(t) { n.update(t) }), n.observer.observe(n.domNode, l), n.attach(), n }
                            return r(e, t), e.prototype.detach = function() { t.prototype.detach.call(this), this.observer.disconnect() }, e.prototype.deleteAt = function(e, n) { this.update(), 0 === e && n === this.length() ? this.children.forEach(function(t) { t.remove() }) : t.prototype.deleteAt.call(this, e, n) }, e.prototype.formatAt = function(e, n, r, o) { this.update(), t.prototype.formatAt.call(this, e, n, r, o) }, e.prototype.insertAt = function(e, n, r) { this.update(), t.prototype.insertAt.call(this, e, n, r) }, e.prototype.optimize = function(e, n) {
                                var r = this;
                                void 0 === e && (e = []), void 0 === n && (n = {}), t.prototype.optimize.call(this, n);
                                for (var l = [].slice.call(this.observer.takeRecords()); l.length > 0;) e.push(l.pop());
                                for (var a = function(t, e) { void 0 === e && (e = !0), null != t && t !== r && null != t.domNode.parentNode && (null == t.domNode[i.DATA_KEY].mutations && (t.domNode[i.DATA_KEY].mutations = []), e && a(t.parent)) }, s = function(t) { null != t.domNode[i.DATA_KEY] && null != t.domNode[i.DATA_KEY].mutations && (t instanceof o.default && t.children.forEach(s), t.optimize(n)) }, u = e, c = 0; u.length > 0; c += 1) {
                                    if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
                                    for (u.forEach(function(t) {
                                            var e = i.find(t.target, !0);
                                            null != e && (e.domNode === t.target && ("childList" === t.type ? (a(i.find(t.previousSibling, !1)), [].forEach.call(t.addedNodes, function(t) {
                                                var e = i.find(t, !1);
                                                a(e, !1), e instanceof o.default && e.children.forEach(function(t) { a(t, !1) })
                                            })) : "attributes" === t.type && a(e.prev)), a(e))
                                        }), this.children.forEach(s), u = [].slice.call(this.observer.takeRecords()), l = u.slice(); l.length > 0;) e.push(l.pop())
                                }
                            }, e.prototype.update = function(e, n) {
                                var r = this;
                                void 0 === n && (n = {}), e = e || this.observer.takeRecords(), e.map(function(t) { var e = i.find(t.target, !0); return null == e ? null : null == e.domNode[i.DATA_KEY].mutations ? (e.domNode[i.DATA_KEY].mutations = [t], e) : (e.domNode[i.DATA_KEY].mutations.push(t), null) }).forEach(function(t) { null != t && t !== r && null != t.domNode[i.DATA_KEY] && t.update(t.domNode[i.DATA_KEY].mutations || [], n) }), null != this.domNode[i.DATA_KEY].mutations && t.prototype.update.call(this, this.domNode[i.DATA_KEY].mutations, n), this.optimize(e, n)
                            }, e.blotName = "scroll", e.defaultChild = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "DIV", e
                        }(o.default);
                    e.default = a
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) {
                        if (Object.keys(t).length !== Object.keys(e).length) return !1;
                        for (var n in t)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    }
                    var o = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var i = n(18),
                        l = n(1),
                        a = function(t) {
                            function e() { return null !== t && t.apply(this, arguments) || this }
                            return o(e, t), e.formats = function(n) { if (n.tagName !== e.tagName) return t.formats.call(this, n) }, e.prototype.format = function(n, r) {
                                var o = this;
                                n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : (this.children.forEach(function(t) { t instanceof i.default || (t = t.wrap(e.blotName, !0)), o.attributes.copy(t) }), this.unwrap())
                            }, e.prototype.formatAt = function(e, n, r, o) { if (null != this.formats()[r] || l.query(r, l.Scope.ATTRIBUTE)) { this.isolate(e, n).format(r, o) } else t.prototype.formatAt.call(this, e, n, r, o) }, e.prototype.optimize = function(n) {
                                t.prototype.optimize.call(this, n);
                                var o = this.formats();
                                if (0 === Object.keys(o).length) return this.unwrap();
                                var i = this.next;
                                i instanceof e && i.prev === this && r(o, i.formats()) && (i.moveChildren(this), i.remove())
                            }, e.blotName = "inline", e.scope = l.Scope.INLINE_BLOT, e.tagName = "SPAN", e
                        }(i.default);
                    e.default = a
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = n(18),
                        i = n(1),
                        l = function(t) {
                            function e() { return null !== t && t.apply(this, arguments) || this }
                            return r(e, t), e.formats = function(n) { var r = i.query(e.blotName).tagName; if (n.tagName !== r) return t.formats.call(this, n) }, e.prototype.format = function(n, r) { null != i.query(n, i.Scope.BLOCK) && (n !== this.statics.blotName || r ? t.prototype.format.call(this, n, r) : this.replaceWith(e.blotName)) }, e.prototype.formatAt = function(e, n, r, o) { null != i.query(r, i.Scope.BLOCK) ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o) }, e.prototype.insertAt = function(e, n, r) {
                                if (null == r || null != i.query(n, i.Scope.INLINE)) t.prototype.insertAt.call(this, e, n, r);
                                else {
                                    var o = this.split(e),
                                        l = i.create(n, r);
                                    o.parent.insertBefore(l, o)
                                }
                            }, e.prototype.update = function(e, n) { navigator.userAgent.match(/Trident/) ? this.build() : t.prototype.update.call(this, e, n) }, e.blotName = "block", e.scope = i.Scope.BLOCK_BLOT, e.tagName = "P", e
                        }(o.default);
                    e.default = l
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = n(19),
                        i = function(t) {
                            function e() { return null !== t && t.apply(this, arguments) || this }
                            return r(e, t), e.formats = function(t) {}, e.prototype.format = function(e, n) { t.prototype.formatAt.call(this, 0, this.length(), e, n) }, e.prototype.formatAt = function(e, n, r, o) { 0 === e && n === this.length() ? this.format(r, o) : t.prototype.formatAt.call(this, e, n, r, o) }, e.prototype.formats = function() { return this.statics.formats(this.domNode) }, e
                        }(o.default);
                    e.default = i
                }, function(t, e, n) {
                    "use strict";
                    var r = this && this.__extends || function() {
                        var t = Object.setPrototypeOf || { __proto__: [] }
                        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) };
                        return function(e, n) {
                            function r() { this.constructor = e }
                            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                        }
                    }();
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = n(19),
                        i = n(1),
                        l = function(t) {
                            function e(e) { var n = t.call(this, e) || this; return n.text = n.statics.value(n.domNode), n }
                            return r(e, t), e.create = function(t) { return document.createTextNode(t) }, e.value = function(t) { var e = t.data; return e.normalize && (e = e.normalize()), e }, e.prototype.deleteAt = function(t, e) { this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e) }, e.prototype.index = function(t, e) { return this.domNode === t ? e : -1 }, e.prototype.insertAt = function(e, n, r) { null == r ? (this.text = this.text.slice(0, e) + n + this.text.slice(e), this.domNode.data = this.text) : t.prototype.insertAt.call(this, e, n, r) }, e.prototype.length = function() { return this.text.length }, e.prototype.optimize = function(n) { t.prototype.optimize.call(this, n), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove()) }, e.prototype.position = function(t, e) { return void 0 === e && (e = !1), [this.domNode, t] }, e.prototype.split = function(t, e) { if (void 0 === e && (e = !1), !e) { if (0 === t) return this; if (t === this.length()) return this.next } var n = i.create(this.domNode.splitText(t)); return this.parent.insertBefore(n, this.next), this.text = this.statics.value(this.domNode), n }, e.prototype.update = function(t, e) {
                                var n = this;
                                t.some(function(t) { return "characterData" === t.type && t.target === n.domNode }) && (this.text = this.statics.value(this.domNode))
                            }, e.prototype.value = function() { return this.text }, e.blotName = "text", e.scope = i.Scope.INLINE_BLOT, e
                        }(o.default);
                    e.default = l
                }, function(t, e, n) {
                    "use strict";
                    var r = document.createElement("div");
                    if (r.classList.toggle("test-class", !1), r.classList.contains("test-class")) {
                        var o = DOMTokenList.prototype.toggle;
                        DOMTokenList.prototype.toggle = function(t, e) { return arguments.length > 1 && !this.contains(t) == !e ? e : o.call(this, t) }
                    }
                    String.prototype.startsWith || (String.prototype.startsWith = function(t, e) { return e = e || 0, this.substr(e, t.length) === t }), String.prototype.endsWith || (String.prototype.endsWith = function(t, e) {
                        var n = this.toString();
                        ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), e -= t.length;
                        var r = n.indexOf(t, e);
                        return -1 !== r && r === e
                    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                        value: function(t) {
                            if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                            if ("function" != typeof t) throw new TypeError("predicate must be a function");
                            for (var e, n = Object(this), r = n.length >>> 0, o = arguments[1], i = 0; i < r; i++)
                                if (e = n[i], t.call(o, e, i, n)) return e
                        }
                    }), document.addEventListener("DOMContentLoaded", function() { document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1) })
                }, function(t, e) {
                    function n(t, e, n) {
                        if (t == e) return t ? [
                            [v, t]
                        ] : [];
                        (n < 0 || t.length < n) && (n = null);
                        var o = l(t, e),
                            i = t.substring(0, o);
                        t = t.substring(o), e = e.substring(o), o = a(t, e);
                        var s = t.substring(t.length - o);
                        t = t.substring(0, t.length - o), e = e.substring(0, e.length - o);
                        var c = r(t, e);
                        return i && c.unshift([v, i]), s && c.push([v, s]), u(c), null != n && (c = f(c, n)), c = h(c)
                    }

                    function r(t, e) {
                        var r;
                        if (!t) return [
                            [y, e]
                        ];
                        if (!e) return [
                            [d, t]
                        ];
                        var i = t.length > e.length ? t : e,
                            l = t.length > e.length ? e : t,
                            a = i.indexOf(l);
                        if (-1 != a) return r = [
                            [y, i.substring(0, a)],
                            [v, l],
                            [y, i.substring(a + l.length)]
                        ], t.length > e.length && (r[0][0] = r[2][0] = d), r;
                        if (1 == l.length) return [
                            [d, t],
                            [y, e]
                        ];
                        var u = s(t, e);
                        if (u) {
                            var c = u[0],
                                f = u[1],
                                h = u[2],
                                p = u[3],
                                b = u[4],
                                g = n(c, h),
                                m = n(f, p);
                            return g.concat([
                                [v, b]
                            ], m)
                        }
                        return o(t, e)
                    }

                    function o(t, e) {
                        for (var n = t.length, r = e.length, o = Math.ceil((n + r) / 2), l = o, a = 2 * o, s = new Array(a), u = new Array(a), c = 0; c < a; c++) s[c] = -1, u[c] = -1;
                        s[l + 1] = 0, u[l + 1] = 0;
                        for (var f = n - r, h = f % 2 != 0, p = 0, v = 0, b = 0, g = 0, m = 0; m < o; m++) {
                            for (var _ = -m + p; _ <= m - v; _ += 2) {
                                var O, w = l + _;
                                O = _ == -m || _ != m && s[w - 1] < s[w + 1] ? s[w + 1] : s[w - 1] + 1;
                                for (var x = O - _; O < n && x < r && t.charAt(O) == e.charAt(x);) O++, x++;
                                if (s[w] = O, O > n) v += 2;
                                else if (x > r) p += 2;
                                else if (h) { var E = l + f - _; if (E >= 0 && E < a && -1 != u[E]) { var k = n - u[E]; if (O >= k) return i(t, e, O, x) } }
                            }
                            for (var A = -m + b; A <= m - g; A += 2) {
                                var k, E = l + A;
                                k = A == -m || A != m && u[E - 1] < u[E + 1] ? u[E + 1] : u[E - 1] + 1;
                                for (var j = k - A; k < n && j < r && t.charAt(n - k - 1) == e.charAt(r - j - 1);) k++, j++;
                                if (u[E] = k, k > n) g += 2;
                                else if (j > r) b += 2;
                                else if (!h) {
                                    var w = l + f - A;
                                    if (w >= 0 && w < a && -1 != s[w]) {
                                        var O = s[w],
                                            x = l + O - w;
                                        if (k = n - k, O >= k) return i(t, e, O, x)
                                    }
                                }
                            }
                        }
                        return [
                            [d, t],
                            [y, e]
                        ]
                    }

                    function i(t, e, r, o) {
                        var i = t.substring(0, r),
                            l = e.substring(0, o),
                            a = t.substring(r),
                            s = e.substring(o),
                            u = n(i, l),
                            c = n(a, s);
                        return u.concat(c)
                    }

                    function l(t, e) { if (!t || !e || t.charAt(0) != e.charAt(0)) return 0; for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(i, o) == e.substring(i, o) ? (n = o, i = n) : r = o, o = Math.floor((r - n) / 2 + n); return o }

                    function a(t, e) { if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0; for (var n = 0, r = Math.min(t.length, e.length), o = r, i = 0; n < o;) t.substring(t.length - o, t.length - i) == e.substring(e.length - o, e.length - i) ? (n = o, i = n) : r = o, o = Math.floor((r - n) / 2 + n); return o }

                    function s(t, e) {
                        function n(t, e, n) {
                            for (var r, o, i, s, u = t.substring(n, n + Math.floor(t.length / 4)), c = -1, f = ""; - 1 != (c = e.indexOf(u, c + 1));) {
                                var h = l(t.substring(n), e.substring(c)),
                                    p = a(t.substring(0, n), e.substring(0, c));
                                f.length < p + h && (f = e.substring(c - p, c) + e.substring(c, c + h), r = t.substring(0, n - p), o = t.substring(n + h), i = e.substring(0, c - p), s = e.substring(c + h))
                            }
                            return 2 * f.length >= t.length ? [r, o, i, s, f] : null
                        }
                        var r = t.length > e.length ? t : e,
                            o = t.length > e.length ? e : t;
                        if (r.length < 4 || 2 * o.length < r.length) return null;
                        var i, s = n(r, o, Math.ceil(r.length / 4)),
                            u = n(r, o, Math.ceil(r.length / 2));
                        if (!s && !u) return null;
                        i = u ? s && s[4].length > u[4].length ? s : u : s;
                        var c, f, h, p;
                        return t.length > e.length ? (c = i[0], f = i[1], h = i[2], p = i[3]) : (h = i[0], p = i[1], c = i[2], f = i[3]), [c, f, h, p, i[4]]
                    }

                    function u(t) {
                        t.push([v, ""]);
                        for (var e, n = 0, r = 0, o = 0, i = "", s = ""; n < t.length;) switch (t[n][0]) {
                            case y:
                                o++, s += t[n][1], n++;
                                break;
                            case d:
                                r++, i += t[n][1], n++;
                                break;
                            case v:
                                r + o > 1 ? (0 !== r && 0 !== o && (e = l(s, i), 0 !== e && (n - r - o > 0 && t[n - r - o - 1][0] == v ? t[n - r - o - 1][1] += s.substring(0, e) : (t.splice(0, 0, [v, s.substring(0, e)]), n++), s = s.substring(e), i = i.substring(e)), 0 !== (e = a(s, i)) && (t[n][1] = s.substring(s.length - e) + t[n][1], s = s.substring(0, s.length - e), i = i.substring(0, i.length - e))), 0 === r ? t.splice(n - o, r + o, [y, s]) : 0 === o ? t.splice(n - r, r + o, [d, i]) : t.splice(n - r - o, r + o, [d, i], [y, s]), n = n - r - o + (r ? 1 : 0) + (o ? 1 : 0) + 1) : 0 !== n && t[n - 1][0] == v ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, o = 0, r = 0, i = "", s = ""
                        }
                        "" === t[t.length - 1][1] && t.pop();
                        var c = !1;
                        for (n = 1; n < t.length - 1;) t[n - 1][0] == v && t[n + 1][0] == v && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), c = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), c = !0)), n++;
                        c && u(t)
                    }

                    function c(t, e) {
                        if (0 === e) return [v, t];
                        for (var n = 0, r = 0; r < t.length; r++) {
                            var o = t[r];
                            if (o[0] === d || o[0] === v) {
                                var i = n + o[1].length;
                                if (e === i) return [r + 1, t];
                                if (e < i) {
                                    t = t.slice();
                                    var l = e - n,
                                        a = [o[0], o[1].slice(0, l)],
                                        s = [o[0], o[1].slice(l)];
                                    return t.splice(r, 1, a, s), [r + 1, t]
                                }
                                n = i
                            }
                        }
                        throw new Error("cursor_pos is out of bounds!")
                    }

                    function f(t, e) {
                        var n = c(t, e),
                            r = n[1],
                            o = n[0],
                            i = r[o],
                            l = r[o + 1];
                        if (null == i) return t;
                        if (i[0] !== v) return t;
                        if (null != l && i[1] + l[1] === l[1] + i[1]) return r.splice(o, 2, l, i), p(r, o, 2);
                        if (null != l && 0 === l[1].indexOf(i[1])) { r.splice(o, 2, [l[0], i[1]], [0, i[1]]); var a = l[1].slice(i[1].length); return a.length > 0 && r.splice(o + 2, 0, [l[0], a]), p(r, o, 3) }
                        return t
                    }

                    function h(t) { for (var e = !1, n = function(t) { return t.charCodeAt(0) >= 56320 && t.charCodeAt(0) <= 57343 }, r = 2; r < t.length; r += 1) t[r - 2][0] === v && function(t) { return t.charCodeAt(t.length - 1) >= 55296 && t.charCodeAt(t.length - 1) <= 56319 }(t[r - 2][1]) && t[r - 1][0] === d && n(t[r - 1][1]) && t[r][0] === y && n(t[r][1]) && (e = !0, t[r - 1][1] = t[r - 2][1].slice(-1) + t[r - 1][1], t[r][1] = t[r - 2][1].slice(-1) + t[r][1], t[r - 2][1] = t[r - 2][1].slice(0, -1)); if (!e) return t; for (var o = [], r = 0; r < t.length; r += 1) t[r][1].length > 0 && o.push(t[r]); return o }

                    function p(t, e, n) {
                        for (var r = e + n - 1; r >= 0 && r >= e - 1; r--)
                            if (r + 1 < t.length) {
                                var o = t[r],
                                    i = t[r + 1];
                                o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]])
                            }
                        return t
                    }
                    var d = -1,
                        y = 1,
                        v = 0,
                        b = n;
                    b.INSERT = y, b.DELETE = d, b.EQUAL = v, t.exports = b
                }, function(t, e) {
                    function n(t) { var e = []; for (var n in t) e.push(n); return e }
                    e = t.exports = "function" == typeof Object.keys ? Object.keys : n, e.shim = n
                }, function(t, e) {
                    function n(t) { return "[object Arguments]" == Object.prototype.toString.call(t) }

                    function r(t) { return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1 }
                    var o = "[object Arguments]" == function() { return Object.prototype.toString.call(arguments) }();
                    e = t.exports = o ? n : r, e.supported = n, e.unsupported = r
                }, function(t, e) {
                    "use strict";

                    function n() {}

                    function r(t, e, n) { this.fn = t, this.context = e, this.once = n || !1 }

                    function o() { this._events = new n, this._eventsCount = 0 }
                    var i = Object.prototype.hasOwnProperty,
                        l = "~";
                    Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (l = !1)), o.prototype.eventNames = function() { var t, e, n = []; if (0 === this._eventsCount) return n; for (e in t = this._events) i.call(t, e) && n.push(l ? e.slice(1) : e); return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n }, o.prototype.listeners = function(t, e) {
                        var n = l ? l + t : t,
                            r = this._events[n];
                        if (e) return !!r;
                        if (!r) return [];
                        if (r.fn) return [r.fn];
                        for (var o = 0, i = r.length, a = new Array(i); o < i; o++) a[o] = r[o].fn;
                        return a
                    }, o.prototype.emit = function(t, e, n, r, o, i) {
                        var a = l ? l + t : t;
                        if (!this._events[a]) return !1;
                        var s, u, c = this._events[a],
                            f = arguments.length;
                        if (c.fn) {
                            switch (c.once && this.removeListener(t, c.fn, void 0, !0), f) {
                                case 1:
                                    return c.fn.call(c.context), !0;
                                case 2:
                                    return c.fn.call(c.context, e), !0;
                                case 3:
                                    return c.fn.call(c.context, e, n), !0;
                                case 4:
                                    return c.fn.call(c.context, e, n, r), !0;
                                case 5:
                                    return c.fn.call(c.context, e, n, r, o), !0;
                                case 6:
                                    return c.fn.call(c.context, e, n, r, o, i), !0
                            }
                            for (u = 1, s = new Array(f - 1); u < f; u++) s[u - 1] = arguments[u];
                            c.fn.apply(c.context, s)
                        } else {
                            var h, p = c.length;
                            for (u = 0; u < p; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), f) {
                                case 1:
                                    c[u].fn.call(c[u].context);
                                    break;
                                case 2:
                                    c[u].fn.call(c[u].context, e);
                                    break;
                                case 3:
                                    c[u].fn.call(c[u].context, e, n);
                                    break;
                                case 4:
                                    c[u].fn.call(c[u].context, e, n, r);
                                    break;
                                default:
                                    if (!s)
                                        for (h = 1, s = new Array(f - 1); h < f; h++) s[h - 1] = arguments[h];
                                    c[u].fn.apply(c[u].context, s)
                            }
                        }
                        return !0
                    }, o.prototype.on = function(t, e, n) {
                        var o = new r(e, n || this),
                            i = l ? l + t : t;
                        return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this
                    }, o.prototype.once = function(t, e, n) {
                        var o = new r(e, n || this, !0),
                            i = l ? l + t : t;
                        return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], o] : this._events[i].push(o) : (this._events[i] = o, this._eventsCount++), this
                    }, o.prototype.removeListener = function(t, e, r, o) {
                        var i = l ? l + t : t;
                        if (!this._events[i]) return this;
                        if (!e) return 0 == --this._eventsCount ? this._events = new n : delete this._events[i], this;
                        var a = this._events[i];
                        if (a.fn) a.fn !== e || o && !a.once || r && a.context !== r || (0 == --this._eventsCount ? this._events = new n : delete this._events[i]);
                        else {
                            for (var s = 0, u = [], c = a.length; s < c; s++)(a[s].fn !== e || o && !a[s].once || r && a[s].context !== r) && u.push(a[s]);
                            u.length ? this._events[i] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new n : delete this._events[i]
                        }
                        return this
                    }, o.prototype.removeAllListeners = function(t) { var e; return t ? (e = l ? l + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new n : delete this._events[e])) : (this._events = new n, this._eventsCount = 0), this }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() { return this }, o.prefixed = l, o.EventEmitter = o, void 0 !== t && (t.exports = o)
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function l(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function s(t, e, n) { return "object" === (void 0 === e ? "undefined" : x(e)) ? Object.keys(e).reduce(function(t, n) { return s(t, n, e[n]) }, t) : t.reduce(function(t, r) { return r.attributes && r.attributes[e] ? t.push(r) : t.insert(r.insert, (0, j.default)({}, o({}, e, n), r.attributes)) }, new T.default) }

                    function u(t) { if (t.nodeType !== Node.ELEMENT_NODE) return {}; return t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t)) }

                    function c(t, e) {
                        for (var n = "", r = t.ops.length - 1; r >= 0 && n.length < e.length; --r) {
                            var o = t.ops[r];
                            if ("string" != typeof o.insert) break;
                            n = o.insert + n
                        }
                        return n.slice(-1 * e.length) === e
                    }

                    function f(t) { return 0 !== t.childNodes.length && ["block", "list-item"].indexOf(u(t).display) > -1 }

                    function h(t, e, n) { return t.nodeType === t.TEXT_NODE ? n.reduce(function(e, n) { return n(t, e) }, new T.default) : t.nodeType === t.ELEMENT_NODE ? [].reduce.call(t.childNodes || [], function(r, o) { var i = h(o, e, n); return o.nodeType === t.ELEMENT_NODE && (i = e.reduce(function(t, e) { return e(o, t) }, i), i = (o[W] || []).reduce(function(t, e) { return e(o, t) }, i)), r.concat(i) }, new T.default) : new T.default }

                    function p(t, e, n) { return s(n, t, !0) }

                    function d(t, e) {
                        var n = P.default.Attributor.Attribute.keys(t),
                            r = P.default.Attributor.Class.keys(t),
                            o = P.default.Attributor.Style.keys(t),
                            i = {};
                        return n.concat(r).concat(o).forEach(function(e) {
                            var n = P.default.query(e, P.default.Scope.ATTRIBUTE);
                            null != n && (i[n.attrName] = n.value(t), i[n.attrName]) || (n = G[e], null == n || n.attrName !== e && n.keyName !== e || (i[n.attrName] = n.value(t) || void 0), null == (n = X[e]) || n.attrName !== e && n.keyName !== e || (n = X[e], i[n.attrName] = n.value(t) || void 0))
                        }), Object.keys(i).length > 0 && (e = s(e, i)), e
                    }

                    function y(t, e) {
                        var n = P.default.query(t);
                        if (null == n) return e;
                        if (n.prototype instanceof P.default.Embed) {
                            var r = {},
                                o = n.value(t);
                            null != o && (r[n.blotName] = o, e = (new T.default).insert(r, n.formats(t)))
                        } else "function" == typeof n.formats && (e = s(e, n.blotName, n.formats(t)));
                        return e
                    }

                    function v(t, e) { return c(e, "\n") || e.insert("\n"), e }

                    function b() { return new T.default }

                    function g(t, e) { var n = P.default.query(t); if (null == n || "list-item" !== n.blotName || !c(e, "\n")) return e; for (var r = -1, o = t.parentNode; !o.classList.contains("ql-clipboard");) "list" === (P.default.query(o) || {}).blotName && (r += 1), o = o.parentNode; return r <= 0 ? e : e.compose((new T.default).retain(e.length() - 1).retain(1, { indent: r })) }

                    function m(t, e) { return c(e, "\n") || (f(t) || e.length() > 0 && t.nextSibling && f(t.nextSibling)) && e.insert("\n"), e }

                    function _(t, e) {
                        if (f(t) && null != t.nextElementSibling && !c(e, "\n\n")) {
                            var n = t.offsetHeight + parseFloat(u(t).marginTop) + parseFloat(u(t).marginBottom);
                            t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n")
                        }
                        return e
                    }

                    function O(t, e) {
                        var n = {},
                            r = t.style || {};
                        return r.fontStyle && "italic" === u(t).fontStyle && (n.italic = !0), r.fontWeight && (u(t).fontWeight.startsWith("bold") || parseInt(u(t).fontWeight) >= 700) && (n.bold = !0), Object.keys(n).length > 0 && (e = s(e, n)), parseFloat(r.textIndent || 0) > 0 && (e = (new T.default).insert("\t").concat(e)), e
                    }

                    function w(t, e) {
                        var n = t.data;
                        if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
                        if (0 === n.trim().length && t.parentNode.classList.contains("ql-clipboard")) return e;
                        if (!u(t.parentNode).whiteSpace.startsWith("pre")) {
                            var r = function(t, e) { return e = e.replace(/[^\u00a0]/g, ""), e.length < 1 && t ? " " : e };
                            n = n.replace(/\r\n/g, " ").replace(/\n/g, " "), n = n.replace(/\s\s+/g, r.bind(r, !0)), (null == t.previousSibling && f(t.parentNode) || null != t.previousSibling && f(t.previousSibling)) && (n = n.replace(/^\s+/, r.bind(r, !1))), (null == t.nextSibling && f(t.parentNode) || null != t.nextSibling && f(t.nextSibling)) && (n = n.replace(/\s+$/, r.bind(r, !1)))
                        }
                        return e.insert(n)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0;
                    var x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                        E = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        k = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        A = n(3),
                        j = r(A),
                        N = n(2),
                        T = r(N),
                        S = n(0),
                        P = r(S),
                        q = n(5),
                        C = r(q),
                        L = n(10),
                        R = r(L),
                        M = n(9),
                        B = r(M),
                        I = n(36),
                        D = n(37),
                        U = n(13),
                        F = r(U),
                        z = n(26),
                        H = n(38),
                        K = n(39),
                        Y = n(40),
                        V = (0, R.default)("quill:clipboard"),
                        W = "__ql-matcher",
                        Z = [
                            [Node.TEXT_NODE, w],
                            [Node.TEXT_NODE, m],
                            ["br", v],
                            [Node.ELEMENT_NODE, m],
                            [Node.ELEMENT_NODE, y],
                            [Node.ELEMENT_NODE, _],
                            [Node.ELEMENT_NODE, d],
                            [Node.ELEMENT_NODE, O],
                            ["li", g],
                            ["b", p.bind(p, "bold")],
                            ["i", p.bind(p, "italic")],
                            ["style", b]
                        ],
                        G = [I.AlignAttribute, H.DirectionAttribute].reduce(function(t, e) { return t[e.keyName] = e, t }, {}),
                        X = [I.AlignStyle, D.BackgroundStyle, z.ColorStyle, H.DirectionStyle, K.FontStyle, Y.SizeStyle].reduce(function(t, e) { return t[e.keyName] = e, t }, {}),
                        $ = function(t) {
                            function e(t, n) {
                                i(this, e);
                                var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                return r.quill.root.addEventListener("paste", r.onPaste.bind(r)), r.container = r.quill.addContainer("ql-clipboard"), r.container.setAttribute("contenteditable", !0), r.container.setAttribute("tabindex", -1), r.matchers = [], Z.concat(r.options.matchers).forEach(function(t) {
                                    var e = E(t, 2),
                                        o = e[0],
                                        i = e[1];
                                    (n.matchVisual || i !== _) && r.addMatcher(o, i)
                                }), r
                            }
                            return a(e, t), k(e, [{ key: "addMatcher", value: function(t, e) { this.matchers.push([t, e]) } }, {
                                key: "convert",
                                value: function(t) {
                                    if ("string" == typeof t) return this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><"), this.convert();
                                    var e = this.quill.getFormat(this.quill.selection.savedRange.index);
                                    if (e[F.default.blotName]) { var n = this.container.innerText; return this.container.innerHTML = "", (new T.default).insert(n, o({}, F.default.blotName, e[F.default.blotName])) }
                                    var r = this.prepareMatching(),
                                        i = E(r, 2),
                                        l = i[0],
                                        a = i[1],
                                        s = h(this.container, l, a);
                                    return c(s, "\n") && null == s.ops[s.ops.length - 1].attributes && (s = s.compose((new T.default).retain(s.length() - 1).delete(1))), V.log("convert", this.container.innerHTML, s), this.container.innerHTML = "", s
                                }
                            }, {
                                key: "dangerouslyPasteHTML",
                                value: function(t, e) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C.default.sources.API;
                                    if ("string" == typeof t) this.quill.setContents(this.convert(t), e), this.quill.setSelection(0, C.default.sources.SILENT);
                                    else {
                                        var r = this.convert(e);
                                        this.quill.updateContents((new T.default).retain(t).concat(r), n), this.quill.setSelection(t + r.length(), C.default.sources.SILENT)
                                    }
                                }
                            }, {
                                key: "onPaste",
                                value: function(t) {
                                    var e = this;
                                    if (!t.defaultPrevented && this.quill.isEnabled()) {
                                        var n = this.quill.getSelection(),
                                            r = (new T.default).retain(n.index),
                                            o = this.quill.scrollingContainer.scrollTop;
                                        this.container.focus(), this.quill.selection.update(C.default.sources.SILENT), setTimeout(function() { r = r.concat(e.convert()).delete(n.length), e.quill.updateContents(r, C.default.sources.USER), e.quill.setSelection(r.length() - n.length, C.default.sources.SILENT), e.quill.scrollingContainer.scrollTop = o, e.quill.focus() }, 1)
                                    }
                                }
                            }, {
                                key: "prepareMatching",
                                value: function() {
                                    var t = this,
                                        e = [],
                                        n = [];
                                    return this.matchers.forEach(function(r) {
                                        var o = E(r, 2),
                                            i = o[0],
                                            l = o[1];
                                        switch (i) {
                                            case Node.TEXT_NODE:
                                                n.push(l);
                                                break;
                                            case Node.ELEMENT_NODE:
                                                e.push(l);
                                                break;
                                            default:
                                                [].forEach.call(t.container.querySelectorAll(i), function(t) { t[W] = t[W] || [], t[W].push(l) })
                                        }
                                    }), [e, n]
                                }
                            }]), e
                        }(B.default);
                    $.DEFAULTS = { matchers: [], matchVisual: !0 }, e.default = $, e.matchAttributor = d, e.matchBlot = y, e.matchNewline = m, e.matchSpacing = _, e.matchText = w
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(6),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, [{ key: "optimize", value: function(t) { a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName) } }], [{ key: "create", value: function() { return a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this) } }, { key: "formats", value: function() { return !0 } }]), e
                        }(u.default);
                    c.blotName = "bold", c.tagName = ["STRONG", "B"], e.default = c
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function l(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }

                    function s(t, e, n) {
                        var r = document.createElement("button");
                        r.setAttribute("type", "button"), r.classList.add("ql-" + e), null != n && (r.value = n), t.appendChild(r)
                    }

                    function u(t, e) {
                        Array.isArray(e[0]) || (e = [e]), e.forEach(function(e) {
                            var n = document.createElement("span");
                            n.classList.add("ql-formats"), e.forEach(function(t) {
                                if ("string" == typeof t) s(n, t);
                                else {
                                    var e = Object.keys(t)[0],
                                        r = t[e];
                                    Array.isArray(r) ? c(n, e, r) : s(n, e, r)
                                }
                            }), t.appendChild(n)
                        })
                    }

                    function c(t, e, n) {
                        var r = document.createElement("select");
                        r.classList.add("ql-" + e), n.forEach(function(t) { var e = document.createElement("option");!1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), r.appendChild(e) }), t.appendChild(r)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.addControls = e.default = void 0;
                    var f = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        h = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        p = n(2),
                        d = r(p),
                        y = n(0),
                        v = r(y),
                        b = n(5),
                        g = r(b),
                        m = n(10),
                        _ = r(m),
                        O = n(9),
                        w = r(O),
                        x = (0, _.default)("quill:toolbar"),
                        E = function(t) {
                            function e(t, n) {
                                i(this, e);
                                var r = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                                if (Array.isArray(r.options.container)) {
                                    var o = document.createElement("div");
                                    u(o, r.options.container), t.container.parentNode.insertBefore(o, t.container), r.container = o
                                } else "string" == typeof r.options.container ? r.container = document.querySelector(r.options.container) : r.container = r.options.container;
                                if (!(r.container instanceof HTMLElement)) { var a; return a = x.error("Container required for toolbar", r.options), l(r, a) }
                                return r.container.classList.add("ql-toolbar"), r.controls = [], r.handlers = {}, Object.keys(r.options.handlers).forEach(function(t) { r.addHandler(t, r.options.handlers[t]) }), [].forEach.call(r.container.querySelectorAll("button, select"), function(t) { r.attach(t) }), r.quill.on(g.default.events.EDITOR_CHANGE, function(t, e) { t === g.default.events.SELECTION_CHANGE && r.update(e) }), r.quill.on(g.default.events.SCROLL_OPTIMIZE, function() {
                                    var t = r.quill.selection.getRange(),
                                        e = f(t, 1),
                                        n = e[0];
                                    r.update(n)
                                }), r
                            }
                            return a(e, t), h(e, [{ key: "addHandler", value: function(t, e) { this.handlers[t] = e } }, {
                                key: "attach",
                                value: function(t) {
                                    var e = this,
                                        n = [].find.call(t.classList, function(t) { return 0 === t.indexOf("ql-") });
                                    if (n) {
                                        if (n = n.slice("ql-".length), "BUTTON" === t.tagName && t.setAttribute("type", "button"), null == this.handlers[n]) { if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n]) return void x.warn("ignoring attaching to disabled format", n, t); if (null == v.default.query(n)) return void x.warn("ignoring attaching to nonexistent format", n, t) }
                                        var r = "SELECT" === t.tagName ? "change" : "click";
                                        t.addEventListener(r, function(r) {
                                            var i = void 0;
                                            if ("SELECT" === t.tagName) {
                                                if (t.selectedIndex < 0) return;
                                                var l = t.options[t.selectedIndex];
                                                i = !l.hasAttribute("selected") && (l.value || !1)
                                            } else i = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")), r.preventDefault();
                                            e.quill.focus();
                                            var a = e.quill.selection.getRange(),
                                                s = f(a, 1),
                                                u = s[0];
                                            if (null != e.handlers[n]) e.handlers[n].call(e, i);
                                            else if (v.default.query(n).prototype instanceof v.default.Embed) {
                                                if (!(i = prompt("Enter " + n))) return;
                                                e.quill.updateContents((new d.default).retain(u.index).delete(u.length).insert(o({}, n, i)), g.default.sources.USER)
                                            } else e.quill.format(n, i, g.default.sources.USER);
                                            e.update(u)
                                        }), this.controls.push([n, t])
                                    }
                                }
                            }, {
                                key: "update",
                                value: function(t) {
                                    var e = null == t ? {} : this.quill.getFormat(t);
                                    this.controls.forEach(function(n) {
                                        var r = f(n, 2),
                                            o = r[0],
                                            i = r[1];
                                        if ("SELECT" === i.tagName) {
                                            var l = void 0;
                                            if (null == t) l = null;
                                            else if (null == e[o]) l = i.querySelector("option[selected]");
                                            else if (!Array.isArray(e[o])) { var a = e[o]; "string" == typeof a && (a = a.replace(/\"/g, '\\"')), l = i.querySelector('option[value="' + a + '"]') }
                                            null == l ? (i.value = "", i.selectedIndex = -1) : l.selected = !0
                                        } else if (null == t) i.classList.remove("ql-active");
                                        else if (i.hasAttribute("value")) {
                                            var s = e[o] === i.getAttribute("value") || null != e[o] && e[o].toString() === i.getAttribute("value") || null == e[o] && !i.getAttribute("value");
                                            i.classList.toggle("ql-active", s)
                                        } else i.classList.toggle("ql-active", null != e[o])
                                    })
                                }
                            }]), e
                        }(w.default);
                    E.DEFAULTS = {}, E.DEFAULTS = {
                        container: null,
                        handlers: {
                            clean: function() {
                                var t = this,
                                    e = this.quill.getSelection();
                                if (null != e)
                                    if (0 == e.length) {
                                        var n = this.quill.getFormat();
                                        Object.keys(n).forEach(function(e) { null != v.default.query(e, v.default.Scope.INLINE) && t.quill.format(e, !1) })
                                    } else this.quill.removeFormat(e, g.default.sources.USER)
                            },
                            direction: function(t) { var e = this.quill.getFormat().align; "rtl" === t && null == e ? this.quill.format("align", "right", g.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, g.default.sources.USER), this.quill.format("direction", t, g.default.sources.USER) },
                            indent: function(t) {
                                var e = this.quill.getSelection(),
                                    n = this.quill.getFormat(e),
                                    r = parseInt(n.indent || 0);
                                if ("+1" === t || "-1" === t) { var o = "+1" === t ? 1 : -1; "rtl" === n.direction && (o *= -1), this.quill.format("indent", r + o, g.default.sources.USER) }
                            },
                            link: function(t) {!0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, g.default.sources.USER) },
                            list: function(t) {
                                var e = this.quill.getSelection(),
                                    n = this.quill.getFormat(e);
                                "check" === t ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, g.default.sources.USER) : this.quill.format("list", "unchecked", g.default.sources.USER) : this.quill.format("list", t, g.default.sources.USER)
                            }
                        }
                    }, e.default = E, e.addControls = u
                }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>' }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(28),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = function(t) {
                            function e(t, n) { r(this, e); var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return i.label.innerHTML = n, i.container.classList.add("ql-color-picker"), [].slice.call(i.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(t) { t.classList.add("ql-primary") }), i }
                            return i(e, t), l(e, [{ key: "buildItem", value: function(t) { var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "buildItem", this).call(this, t); return n.style.backgroundColor = t.getAttribute("value") || "", n } }, {
                                key: "selectItem",
                                value: function(t, n) {
                                    a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n);
                                    var r = this.label.querySelector(".ql-color-label"),
                                        o = t ? t.getAttribute("data-value") || "" : "";
                                    r && ("line" === r.tagName ? r.style.stroke = o : r.style.fill = o)
                                }
                            }]), e
                        }(u.default);
                    e.default = c
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(28),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = function(t) {
                            function e(t, n) { r(this, e); var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)); return i.container.classList.add("ql-icon-picker"), [].forEach.call(i.container.querySelectorAll(".ql-picker-item"), function(t) { t.innerHTML = n[t.getAttribute("data-value") || ""] }), i.defaultItem = i.container.querySelector(".ql-selected"), i.selectItem(i.defaultItem), i }
                            return i(e, t), l(e, [{ key: "selectItem", value: function(t, n) { a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "selectItem", this).call(this, t, n), t = t || this.defaultItem, this.label.innerHTML = t.innerHTML } }]), e
                        }(u.default);
                    e.default = c
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        i = function() {
                            function t(e, n) {
                                var o = this;
                                r(this, t), this.quill = e, this.boundsContainer = n || document.body, this.root = e.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() { o.root.style.marginTop = -1 * o.quill.root.scrollTop + "px" }), this.hide()
                            }
                            return o(t, [{ key: "hide", value: function() { this.root.classList.add("ql-hidden") } }, {
                                key: "position",
                                value: function(t) {
                                    var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
                                        n = t.bottom + this.quill.root.scrollTop;
                                    this.root.style.left = e + "px", this.root.style.top = n + "px", this.root.classList.remove("ql-flip");
                                    var r = this.boundsContainer.getBoundingClientRect(),
                                        o = this.root.getBoundingClientRect(),
                                        i = 0;
                                    if (o.right > r.right && (i = r.right - o.right, this.root.style.left = e + i + "px"), o.left < r.left && (i = r.left - o.left, this.root.style.left = e + i + "px"), o.bottom > r.bottom) {
                                        var l = o.bottom - o.top,
                                            a = t.bottom - t.top + l;
                                        this.root.style.top = n - a + "px", this.root.classList.add("ql-flip")
                                    }
                                    return i
                                }
                            }, { key: "show", value: function() { this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden") } }]), t
                        }();
                    e.default = i
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var a = function() {
                            function t(t, e) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try { for (var l, a = t[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); r = !0); } catch (t) { o = !0, i = t } finally { try {!r && a.return && a.return() } finally { if (o) throw i } }
                                return n
                            }
                            return function(e, n) { if (Array.isArray(e)) return e; if (Symbol.iterator in Object(e)) return t(e, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
                        }(),
                        s = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        u = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        c = n(3),
                        f = r(c),
                        h = n(8),
                        p = r(h),
                        d = n(43),
                        y = r(d),
                        v = n(27),
                        b = r(v),
                        g = n(15),
                        m = n(41),
                        _ = r(m),
                        O = [
                            [{ header: ["1", "2", "3", !1] }],
                            ["bold", "italic", "underline", "link"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["clean"]
                        ],
                        w = function(t) {
                            function e(t, n) { o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = O); var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)); return r.quill.container.classList.add("ql-snow"), r }
                            return l(e, t), u(e, [{ key: "extendToolbar", value: function(t) { t.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), _.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), _.default), this.tooltip = new x(this.quill, this.options.bounds), t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function(e, n) { t.handlers.link.call(t, !n.format.link) }) } }]), e
                        }(y.default);
                    w.DEFAULTS = (0, f.default)(!0, {}, y.default.DEFAULTS, {
                        modules: {
                            toolbar: {
                                handlers: {
                                    link: function(t) {
                                        if (t) {
                                            var e = this.quill.getSelection();
                                            if (null == e || 0 == e.length) return;
                                            var n = this.quill.getText(e);
                                            /^\S+@\S+\.\S+$/.test(n) && 0 !== n.indexOf("mailto:") && (n = "mailto:" + n);
                                            this.quill.theme.tooltip.edit("link", n)
                                        } else this.quill.format("link", !1)
                                    }
                                }
                            }
                        }
                    });
                    var x = function(t) {
                        function e(t, n) { o(this, e); var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)); return r.preview = r.root.querySelector("a.ql-preview"), r }
                        return l(e, t), u(e, [{
                            key: "listen",
                            value: function() {
                                var t = this;
                                s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(e) { t.root.classList.contains("ql-editing") ? t.save() : t.edit("link", t.preview.textContent), e.preventDefault() }), this.root.querySelector("a.ql-remove").addEventListener("click", function(e) {
                                    if (null != t.linkRange) {
                                        var n = t.linkRange;
                                        t.restoreFocus(), t.quill.formatText(n, "link", !1, p.default.sources.USER), delete t.linkRange
                                    }
                                    e.preventDefault(), t.hide()
                                }), this.quill.on(p.default.events.SELECTION_CHANGE, function(e, n, r) {
                                    if (null != e) {
                                        if (0 === e.length && r === p.default.sources.USER) {
                                            var o = t.quill.scroll.descendant(b.default, e.index),
                                                i = a(o, 2),
                                                l = i[0],
                                                s = i[1];
                                            if (null != l) { t.linkRange = new g.Range(e.index - s, l.length()); var u = b.default.formats(l.domNode); return t.preview.textContent = u, t.preview.setAttribute("href", u), t.show(), void t.position(t.quill.getBounds(t.linkRange)) }
                                        } else delete t.linkRange;
                                        t.hide()
                                    }
                                })
                            }
                        }, { key: "show", value: function() { s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "show", this).call(this), this.root.removeAttribute("data-mode") } }]), e
                    }(d.BaseTooltip);
                    x.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e.default = w
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var o = n(29),
                        i = r(o),
                        l = n(36),
                        a = n(38),
                        s = n(64),
                        u = n(65),
                        c = r(u),
                        f = n(66),
                        h = r(f),
                        p = n(67),
                        d = r(p),
                        y = n(37),
                        v = n(26),
                        b = n(39),
                        g = n(40),
                        m = n(56),
                        _ = r(m),
                        O = n(68),
                        w = r(O),
                        x = n(27),
                        E = r(x),
                        k = n(69),
                        A = r(k),
                        j = n(70),
                        N = r(j),
                        T = n(71),
                        S = r(T),
                        P = n(72),
                        q = r(P),
                        C = n(73),
                        L = r(C),
                        R = n(13),
                        M = r(R),
                        B = n(74),
                        I = r(B),
                        D = n(75),
                        U = r(D),
                        F = n(57),
                        z = r(F),
                        H = n(41),
                        K = r(H),
                        Y = n(28),
                        V = r(Y),
                        W = n(59),
                        Z = r(W),
                        G = n(60),
                        X = r(G),
                        $ = n(61),
                        Q = r($),
                        J = n(108),
                        tt = r(J),
                        et = n(62),
                        nt = r(et);
                    i.default.register({ "attributors/attribute/direction": a.DirectionAttribute, "attributors/class/align": l.AlignClass, "attributors/class/background": y.BackgroundClass, "attributors/class/color": v.ColorClass, "attributors/class/direction": a.DirectionClass, "attributors/class/font": b.FontClass, "attributors/class/size": g.SizeClass, "attributors/style/align": l.AlignStyle, "attributors/style/background": y.BackgroundStyle, "attributors/style/color": v.ColorStyle, "attributors/style/direction": a.DirectionStyle, "attributors/style/font": b.FontStyle, "attributors/style/size": g.SizeStyle }, !0), i.default.register({ "formats/align": l.AlignClass, "formats/direction": a.DirectionClass, "formats/indent": s.IndentClass, "formats/background": y.BackgroundStyle, "formats/color": v.ColorStyle, "formats/font": b.FontClass, "formats/size": g.SizeClass, "formats/blockquote": c.default, "formats/code-block": M.default, "formats/header": h.default, "formats/list": d.default, "formats/bold": _.default, "formats/code": R.Code, "formats/italic": w.default, "formats/link": E.default, "formats/script": A.default, "formats/strike": N.default, "formats/underline": S.default, "formats/image": q.default, "formats/video": L.default, "formats/list/item": p.ListItem, "modules/formula": I.default, "modules/syntax": U.default, "modules/toolbar": z.default, "themes/bubble": tt.default, "themes/snow": nt.default, "ui/icons": K.default, "ui/picker": V.default, "ui/icon-picker": X.default, "ui/color-picker": Z.default, "ui/tooltip": Q.default }, !0), e.default = i.default
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.IndentClass = void 0;
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(0),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, [{
                                key: "add",
                                value: function(t, n) {
                                    if ("+1" === n || "-1" === n) {
                                        var r = this.value(t) || 0;
                                        n = "+1" === n ? r + 1 : r - 1
                                    }
                                    return 0 === n ? (this.remove(t), !0) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t, n)
                                }
                            }, { key: "canAdd", value: function(t, n) { return a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, n) || a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "canAdd", this).call(this, t, parseInt(n)) } }, { key: "value", value: function(t) { return parseInt(a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this).call(this, t)) || void 0 } }]), e
                        }(u.default.Attributor.Class),
                        f = new c("indent", "ql-indent", { scope: u.default.Scope.BLOCK, whitelist: [1, 2, 3, 4, 5, 6, 7, 8] });
                    e.IndentClass = f
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = n(4),
                        a = function(t) { return t && t.__esModule ? t : { default: t } }(l),
                        s = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), e
                        }(a.default);
                    s.blotName = "blockquote", s.tagName = "blockquote", e.default = s
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = n(4),
                        s = function(t) { return t && t.__esModule ? t : { default: t } }(a),
                        u = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, null, [{ key: "formats", value: function(t) { return this.tagName.indexOf(t.tagName) + 1 } }]), e
                        }(s.default);
                    u.blotName = "header", u.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e.default = u
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e, n) { return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t }

                    function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function l(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function a(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.ListItem = void 0;
                    var s = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        u = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        c = n(0),
                        f = r(c),
                        h = n(4),
                        p = r(h),
                        d = n(25),
                        y = r(d),
                        v = function(t) {
                            function e() { return i(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return a(e, t), s(e, [{ key: "format", value: function(t, n) { t !== b.blotName || n ? u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) : this.replaceWith(f.default.create(this.statics.scope)) } }, { key: "remove", value: function() { null == this.prev && null == this.next ? this.parent.remove() : u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "remove", this).call(this) } }, { key: "replaceWith", value: function(t, n) { return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, n), this) : (this.parent.unwrap(), u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t, n)) } }], [{ key: "formats", value: function(t) { return t.tagName === this.tagName ? void 0 : u(e.__proto__ || Object.getPrototypeOf(e), "formats", this).call(this, t) } }]), e
                        }(p.default);
                    v.blotName = "list-item", v.tagName = "LI";
                    var b = function(t) {
                        function e(t) {
                            i(this, e);
                            var n = l(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)),
                                r = function(e) {
                                    if (e.target.parentNode === t) {
                                        var r = n.statics.formats(t),
                                            o = f.default.find(e.target);
                                        "checked" === r ? o.format("list", "unchecked") : "unchecked" === r && o.format("list", "checked")
                                    }
                                };
                            return t.addEventListener("touchstart", r), t.addEventListener("mousedown", r), n
                        }
                        return a(e, t), s(e, null, [{
                            key: "create",
                            value: function(t) {
                                var n = "ordered" === t ? "OL" : "UL",
                                    r = u(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, n);
                                return "checked" !== t && "unchecked" !== t || r.setAttribute("data-checked", "checked" === t), r
                            }
                        }, { key: "formats", value: function(t) { return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? t.hasAttribute("data-checked") ? "true" === t.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0 } }]), s(e, [{ key: "format", value: function(t, e) { this.children.length > 0 && this.children.tail.format(t, e) } }, { key: "formats", value: function() { return o({}, this.statics.blotName, this.statics.formats(this.domNode)) } }, {
                            key: "insertBefore",
                            value: function(t, n) {
                                if (t instanceof v) u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "insertBefore", this).call(this, t, n);
                                else {
                                    var r = null == n ? this.length() : n.offset(this),
                                        o = this.split(r);
                                    o.parent.insertBefore(t, o)
                                }
                            }
                        }, {
                            key: "optimize",
                            value: function(t) {
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "optimize", this).call(this, t);
                                var n = this.next;
                                null != n && n.prev === this && n.statics.blotName === this.statics.blotName && n.domNode.tagName === this.domNode.tagName && n.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n.moveChildren(this), n.remove())
                            }
                        }, {
                            key: "replace",
                            value: function(t) {
                                if (t.statics.blotName !== this.statics.blotName) {
                                    var n = f.default.create(this.statics.defaultChild);
                                    t.moveChildren(n), this.appendChild(n)
                                }
                                u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replace", this).call(this, t)
                            }
                        }]), e
                    }(y.default);
                    b.blotName = "list", b.scope = f.default.Scope.BLOCK_BLOT, b.tagName = ["OL", "UL"], b.defaultChild = "list-item", b.allowedChildren = [v], e.ListItem = v, e.default = b
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = n(56),
                        a = function(t) { return t && t.__esModule ? t : { default: t } }(l),
                        s = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), e
                        }(a.default);
                    s.blotName = "italic", s.tagName = ["EM", "I"], e.default = s
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(6),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, null, [{ key: "create", value: function(t) { return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t) } }, { key: "formats", value: function(t) { return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0 } }]), e
                        }(u.default);
                    c.blotName = "script", c.tagName = ["SUB", "SUP"], e.default = c
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = n(6),
                        a = function(t) { return t && t.__esModule ? t : { default: t } }(l),
                        s = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), e
                        }(a.default);
                    s.blotName = "strike", s.tagName = "S", e.default = s
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = n(6),
                        a = function(t) { return t && t.__esModule ? t : { default: t } }(l),
                        s = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), e
                        }(a.default);
                    s.blotName = "underline", s.tagName = "U", e.default = s
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(0),
                        u = function(t) { return t && t.__esModule ? t : { default: t } }(s),
                        c = n(27),
                        f = ["alt", "height", "width"],
                        h = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, [{ key: "format", value: function(t, n) { f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) } }], [{ key: "create", value: function(t) { var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t); return "string" == typeof t && n.setAttribute("src", this.sanitize(t)), n } }, { key: "formats", value: function(t) { return f.reduce(function(e, n) { return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e }, {}) } }, { key: "match", value: function(t) { return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t) } }, { key: "sanitize", value: function(t) { return (0, c.sanitize)(t, ["http", "https", "data"]) ? t : "//:0" } }, { key: "value", value: function(t) { return t.getAttribute("src") } }]), e
                        }(u.default.Embed);
                    h.blotName = "image", h.tagName = "IMG", e.default = h
                }, function(t, e, n) {
                    "use strict";

                    function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function i(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 });
                    var l = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = n(4),
                        u = n(27),
                        c = function(t) { return t && t.__esModule ? t : { default: t } }(u),
                        f = ["height", "width"],
                        h = function(t) {
                            function e() { return r(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return i(e, t), l(e, [{ key: "format", value: function(t, n) { f.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) } }], [{ key: "create", value: function(t) { var n = a(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t); return n.setAttribute("frameborder", "0"), n.setAttribute("allowfullscreen", !0), n.setAttribute("src", this.sanitize(t)), n } }, { key: "formats", value: function(t) { return f.reduce(function(e, n) { return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e }, {}) } }, { key: "sanitize", value: function(t) { return c.default.sanitize(t) } }, { key: "value", value: function(t) { return t.getAttribute("src") } }]), e
                        }(s.BlockEmbed);
                    h.blotName = "video", h.className = "ql-video", h.tagName = "IFRAME", e.default = h
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.FormulaBlot = void 0;
                    var a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        s = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        u = n(35),
                        c = r(u),
                        f = n(5),
                        h = r(f),
                        p = n(9),
                        d = r(p),
                        y = function(t) {
                            function e() { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return l(e, t), a(e, null, [{ key: "create", value: function(t) { var n = s(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t); return "string" == typeof t && (window.katex.render(t, n, { throwOnError: !1, errorColor: "#f00" }), n.setAttribute("data-value", t)), n } }, { key: "value", value: function(t) { return t.getAttribute("data-value") } }]), e
                        }(c.default);
                    y.blotName = "formula", y.className = "ql-formula", y.tagName = "SPAN";
                    var v = function(t) {
                        function e() { o(this, e); var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)); if (null == window.katex) throw new Error("Formula module requires KaTeX."); return t }
                        return l(e, t), a(e, null, [{ key: "register", value: function() { h.default.register(y, !0) } }]), e
                    }(d.default);
                    e.FormulaBlot = y, e.default = v
                }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.CodeToken = e.CodeBlock = void 0;
                    var a = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        s = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        u = n(0),
                        c = r(u),
                        f = n(5),
                        h = r(f),
                        p = n(9),
                        d = r(p),
                        y = n(13),
                        v = r(y),
                        b = function(t) {
                            function e() { return o(this, e), i(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                            return l(e, t), a(e, [{ key: "replaceWith", value: function(t) { this.domNode.textContent = this.domNode.textContent, this.attach(), s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "replaceWith", this).call(this, t) } }, {
                                key: "highlight",
                                value: function(t) {
                                    var e = this.domNode.textContent;
                                    this.cachedText !== e && ((e.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t(e), this.domNode.normalize(), this.attach()), this.cachedText = e)
                                }
                            }]), e
                        }(v.default);
                    b.className = "ql-syntax";
                    var g = new c.default.Attributor.Class("token", "hljs", { scope: c.default.Scope.INLINE }),
                        m = function(t) {
                            function e(t, n) { o(this, e); var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)); if ("function" != typeof r.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill."); var l = null; return r.quill.on(h.default.events.SCROLL_OPTIMIZE, function() { clearTimeout(l), l = setTimeout(function() { r.highlight(), l = null }, r.options.interval) }), r.highlight(), r }
                            return l(e, t), a(e, null, [{ key: "register", value: function() { h.default.register(g, !0), h.default.register(b, !0) } }]), a(e, [{
                                key: "highlight",
                                value: function() {
                                    var t = this;
                                    if (!this.quill.selection.composing) {
                                        this.quill.update(h.default.sources.USER);
                                        var e = this.quill.getSelection();
                                        this.quill.scroll.descendants(b).forEach(function(e) { e.highlight(t.options.highlight) }), this.quill.update(h.default.sources.SILENT), null != e && this.quill.setSelection(e, h.default.sources.SILENT)
                                    }
                                }
                            }]), e
                        }(d.default);
                    m.DEFAULTS = { highlight: function() { return null == window.hljs ? null : function(t) { return window.hljs.highlightAuto(t).value } }(), interval: 1e3 }, e.CodeBlock = b, e.CodeToken = g, e.default = m
                }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>' }, function(t, e) { t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>' }, function(t, e) { t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>' }, function(t, e) { t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>' }, function(t, e) { t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>' }, function(t, e, n) {
                    "use strict";

                    function r(t) { return t && t.__esModule ? t : { default: t } }

                    function o(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

                    function i(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

                    function l(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.BubbleTooltip = void 0;
                    var a = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
                        s = function() {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                                }
                            }
                            return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
                        }(),
                        u = n(3),
                        c = r(u),
                        f = n(8),
                        h = r(f),
                        p = n(43),
                        d = r(p),
                        y = n(15),
                        v = n(41),
                        b = r(v),
                        g = [
                            ["bold", "italic", "link"],
                            [{ header: 1 }, { header: 2 }, "blockquote"]
                        ],
                        m = function(t) {
                            function e(t, n) { o(this, e), null != n.modules.toolbar && null == n.modules.toolbar.container && (n.modules.toolbar.container = g); var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)); return r.quill.container.classList.add("ql-bubble"), r }
                            return l(e, t), s(e, [{ key: "extendToolbar", value: function(t) { this.tooltip = new _(this.quill, this.options.bounds), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), b.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), b.default) } }]), e
                        }(d.default);
                    m.DEFAULTS = (0, c.default)(!0, {}, d.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function(t) { t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1) } } } } });
                    var _ = function(t) {
                        function e(t, n) {
                            o(this, e);
                            var r = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                            return r.quill.on(h.default.events.EDITOR_CHANGE, function(t, e, n, o) {
                                if (t === h.default.events.SELECTION_CHANGE)
                                    if (null != e && e.length > 0 && o === h.default.sources.USER) {
                                        r.show(), r.root.style.left = "0px", r.root.style.width = "", r.root.style.width = r.root.offsetWidth + "px";
                                        var i = r.quill.getLines(e.index, e.length);
                                        if (1 === i.length) r.position(r.quill.getBounds(e));
                                        else {
                                            var l = i[i.length - 1],
                                                a = r.quill.getIndex(l),
                                                s = Math.min(l.length() - 1, e.index + e.length - a),
                                                u = r.quill.getBounds(new y.Range(a, s));
                                            r.position(u)
                                        }
                                    } else document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide()
                            }), r
                        }
                        return l(e, t), s(e, [{
                            key: "listen",
                            value: function() {
                                var t = this;
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() { t.root.classList.remove("ql-editing") }), this.quill.on(h.default.events.SCROLL_OPTIMIZE, function() {
                                    setTimeout(function() {
                                        if (!t.root.classList.contains("ql-hidden")) {
                                            var e = t.quill.getSelection();
                                            null != e && t.position(t.quill.getBounds(e))
                                        }
                                    }, 1)
                                })
                            }
                        }, { key: "cancel", value: function() { this.show() } }, {
                            key: "position",
                            value: function(t) {
                                var n = a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "position", this).call(this, t),
                                    r = this.root.querySelector(".ql-tooltip-arrow");
                                if (r.style.marginLeft = "", 0 === n) return n;
                                r.style.marginLeft = -1 * n - r.offsetWidth / 2 + "px"
                            }
                        }]), e
                    }(p.BaseTooltip);
                    _.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e.BubbleTooltip = _, e.default = m
                }, function(t, e, n) { t.exports = n(63) }]).default
            })
        }).call(e, n(43).Buffer)
    }, function(t, e, n) {
        var r = n(11),
            o = n(1),
            i = r(o, "Map");
        t.exports = i
    }, function(t, e, n) {
        var r = n(1),
            o = r.Symbol;
        t.exports = o
    }, function(t, e) {
        function n(t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n) {
            (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || o(t, e, n)
        }
        var o = n(10),
            i = n(8);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n, f, h) {
            t !== e && l(e, function(l, u) {
                if (s(l)) h || (h = new o), a(t, e, u, n, r, f, h);
                else {
                    var p = f ? f(c(t, u), l, u + "", t, e, h) : void 0;
                    void 0 === p && (p = l), i(t, u, p)
                }
            }, u)
        }
        var o = n(48),
            i = n(19),
            l = n(53),
            a = n(58),
            s = n(0),
            u = n(34),
            c = n(27);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) { return l(i(t, e, o), t + "") }
        var o = n(28),
            i = n(96),
            l = n(97);
        t.exports = r
    }, function(t, e, n) {
        var r = n(11),
            o = function() { try { var t = r(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }();
        t.exports = o
    }, function(t, e, n) {
        (function(e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n
        }).call(e, n(35))
    }, function(t, e, n) {
        var r = n(95),
            o = r(Object.getPrototypeOf, Object);
        t.exports = o
    }, function(t, e) {
        function n(t, e) { var n = typeof t; return !!(e = null == e ? r : e) && ("number" == n || "symbol" != n && o.test(t)) && t > -1 && t % 1 == 0 && t < e }
        var r = 9007199254740991,
            o = /^(?:0|[1-9]\d*)$/;
        t.exports = n
    }, function(t, e) {
        function n(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || r) }
        var r = Object.prototype;
        t.exports = n
    }, function(t, e) {
        function n(t, e) { return "__proto__" == e ? void 0 : t[e] }
        t.exports = n
    }, function(t, e) {
        function n(t) { return t }
        t.exports = n
    }, function(t, e, n) {
        var r = n(54),
            o = n(2),
            i = Object.prototype,
            l = i.hasOwnProperty,
            a = i.propertyIsEnumerable,
            s = r(function() { return arguments }()) ? r : function(t) { return o(t) && l.call(t, "callee") && !a.call(t, "callee") };
        t.exports = s
    }, function(t, e) {
        var n = Array.isArray;
        t.exports = n
    }, function(t, e, n) {
        (function(t) {
            var r = n(1),
                o = n(109),
                i = "object" == typeof e && e && !e.nodeType && e,
                l = i && "object" == typeof t && t && !t.nodeType && t,
                a = l && l.exports === i,
                s = a ? r.Buffer : void 0,
                u = s ? s.isBuffer : void 0,
                c = u || o;
            t.exports = c
        }).call(e, n(14)(t))
    }, function(t, e) {
        function n(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r }
        var r = 9007199254740991;
        t.exports = n
    }, function(t, e, n) {
        var r = n(56),
            o = n(61),
            i = n(93),
            l = i && i.isTypedArray,
            a = l ? o(l) : r;
        t.exports = a
    }, function(t, e, n) {
        function r(t) { return l(t) ? o(t, !0) : i(t) }
        var o = n(50),
            i = n(57),
            l = n(12);
        t.exports = r
    }, function(t, e) {
        var n;
        n = function() { return this }();
        try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) }
        t.exports = n
    }, function(t, e, n) {
        "use strict";
        e.a = { modules: ["DisplaySize", "Toolbar", "Resize"], overlayStyles: { position: "absolute", boxSizing: "border-box", border: "1px dashed #444" }, handleStyles: { position: "absolute", height: "12px", width: "12px", backgroundColor: "white", border: "1px solid #777", boxSizing: "border-box", opacity: "0.80" }, displayStyles: { position: "absolute", font: "12px/1.0 Arial, Helvetica, sans-serif", padding: "4px 8px", textAlign: "center", backgroundColor: "white", color: "#333", border: "1px solid #777", boxSizing: "border-box", opacity: "0.80", cursor: "default" }, toolbarStyles: { position: "absolute", top: "-12px", right: "0", left: "0", height: "0", minWidth: "100px", font: "12px/1.0 Arial, Helvetica, sans-serif", textAlign: "center", color: "#333", boxSizing: "border-box", cursor: "default" }, toolbarButtonStyles: { display: "inline-block", width: "24px", height: "24px", background: "white", border: "1px solid #999", verticalAlign: "middle" }, toolbarButtonSvgStyles: { fill: "#444", stroke: "#444", strokeWidth: "2" } }
    }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        n.d(e, "a", function() { return a });
        var l = n(9),
            a = function(t) {
                function e() {
                    var t, n, i, l;
                    r(this, e);
                    for (var a = arguments.length, s = Array(a), u = 0; u < a; u++) s[u] = arguments[u];
                    return n = i = o(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(s))), i.onCreate = function() { i.display = document.createElement("div"), Object.assign(i.display.style, i.options.displayStyles), i.overlay.appendChild(i.display) }, i.onDestroy = function() {}, i.onUpdate = function() {
                        if (i.display && i.img) {
                            var t = i.getCurrentSize();
                            if (i.display.innerHTML = t.join(" &times; "), t[0] > 120 && t[1] > 30) Object.assign(i.display.style, { right: "4px", bottom: "4px", left: "auto" });
                            else if ("right" == i.img.style.float) {
                                var e = i.display.getBoundingClientRect();
                                Object.assign(i.display.style, { right: "auto", bottom: "-" + (e.height + 4) + "px", left: "-" + (e.width + 4) + "px" })
                            } else {
                                var n = i.display.getBoundingClientRect();
                                Object.assign(i.display.style, { right: "-" + (n.width + 4) + "px", bottom: "-" + (n.height + 4) + "px", left: "auto" })
                            }
                        }
                    }, i.getCurrentSize = function() { return [i.img.width, Math.round(i.img.width / i.img.naturalWidth * i.img.naturalHeight)] }, l = n, o(i, l)
                }
                return i(e, t), e
            }(l.a)
    }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        n.d(e, "a", function() { return a });
        var l = n(9),
            a = function(t) {
                function e() {
                    var t, n, i, l;
                    r(this, e);
                    for (var a = arguments.length, s = Array(a), u = 0; u < a; u++) s[u] = arguments[u];
                    return n = i = o(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(s))), i.onCreate = function() { i.boxes = [], i.addBox("nwse-resize"), i.addBox("nesw-resize"), i.addBox("nwse-resize"), i.addBox("nesw-resize"), i.positionBoxes() }, i.onDestroy = function() { i.setCursor("") }, i.positionBoxes = function() {
                        var t = -parseFloat(i.options.handleStyles.width) / 2 + "px",
                            e = -parseFloat(i.options.handleStyles.height) / 2 + "px";
                        [{ left: t, top: e }, { right: t, top: e }, { right: t, bottom: e }, { left: t, bottom: e }].forEach(function(t, e) { Object.assign(i.boxes[e].style, t) })
                    }, i.addBox = function(t) {
                        var e = document.createElement("div");
                        Object.assign(e.style, i.options.handleStyles), e.style.cursor = t, e.style.width = i.options.handleStyles.width + "px", e.style.height = i.options.handleStyles.height + "px", e.addEventListener("mousedown", i.handleMousedown, !1), i.overlay.appendChild(e), i.boxes.push(e)
                    }, i.handleMousedown = function(t) { i.dragBox = t.target, i.dragStartX = t.clientX, i.preDragWidth = i.img.width || i.img.naturalWidth, i.setCursor(i.dragBox.style.cursor), document.addEventListener("mousemove", i.handleDrag, !1), document.addEventListener("mouseup", i.handleMouseup, !1) }, i.handleMouseup = function() { i.setCursor(""), document.removeEventListener("mousemove", i.handleDrag), document.removeEventListener("mouseup", i.handleMouseup) }, i.handleDrag = function(t) {
                        if (i.img) {
                            var e = t.clientX - i.dragStartX;
                            i.dragBox === i.boxes[0] || i.dragBox === i.boxes[3] ? i.img.width = Math.round(i.preDragWidth - e) : i.img.width = Math.round(i.preDragWidth + e), i.requestUpdate()
                        }
                    }, i.setCursor = function(t) {
                        [document.body, i.img].forEach(function(e) { e.style.cursor = t })
                    }, l = n, o(i, l)
                }
                return i(e, t), e
            }(l.a)
    }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function o(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        n.d(e, "a", function() { return _ });
        var l = n(15),
            a = n.n(l),
            s = n(112),
            u = n.n(s),
            c = n(111),
            f = n.n(c),
            h = n(113),
            p = n.n(h),
            d = n(9),
            y = a.a.imports.parchment,
            v = new y.Attributor.Style("float", "float"),
            b = new y.Attributor.Style("margin", "margin"),
            g = new y.Attributor.Style("display", "display"),
            m = new y.Attributor.Attribute("nameClass", "class", { scope: y.Scope.INLINE });
        a.a.register(m);
        var _ = function(t) {
            function e() {
                var t, n, i, l;
                r(this, e);
                for (var a = arguments.length, s = Array(a), c = 0; c < a; c++) s[c] = arguments[c];
                return n = i = o(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(s))), i.onCreate = function() { i.toolbar = document.createElement("div"), Object.assign(i.toolbar.style, i.options.toolbarStyles), i.overlay.appendChild(i.toolbar), i._defineAlignments(), i._addToolbarButtons() }, i.onDestroy = function() {}, i.onUpdate = function() {}, i._defineAlignments = function() { i.alignments = [{ icon: u.a, apply: function() { g.add(i.img, "inline"), v.add(i.img, "left"), b.add(i.img, "0 1em 1em 0"), i.img.align = "left" }, isApplied: function() { return "left" == v.value(i.img) } }, { icon: f.a, apply: function() { g.add(i.img, "block"), v.remove(i.img), b.add(i.img, "auto"), i.img.align = "center" }, isApplied: function() { return "auto" == b.value(i.img) } }, { icon: p.a, apply: function() { g.add(i.img, "inline"), v.add(i.img, "right"), b.add(i.img, "0 0 1em 1em"), i.img.align = "right" }, isApplied: function() { return "right" == v.value(i.img) } }] }, i._addToolbarButtons = function() {
                    var t = [];
                    i.alignments.forEach(function(e, n) {
                        var r = document.createElement("span");
                        t.push(r), r.innerHTML = e.icon, r.addEventListener("click", function() { t.forEach(function(t) { return t.style.filter = "" }), e.isApplied() ? (v.remove(i.img), b.remove(i.img), g.remove(i.img)) : (i._selectButton(r), e.apply()), i.requestUpdate() }), Object.assign(r.style, i.options.toolbarButtonStyles), n > 0 && (r.style.borderLeftWidth = "0"), Object.assign(r.children[0].style, i.options.toolbarButtonSvgStyles), e.isApplied() && i._selectButton(r), i.toolbar.appendChild(r)
                    })
                }, i._selectButton = function(t) { t.style.filter = "invert(20%)" }, l = n, o(i, l)
            }
            return i(e, t), e
        }(d.a)
    }, function(t, e, n) {
        var r = n(18),
            o = n(21),
            i = n(70),
            l = n(108),
            a = o(function(t) { return t.push(void 0, i), r(l, void 0, t) });
        t.exports = a
    }, function(t, e, n) {
        "use strict";

        function r(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }

        function i(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var l = n(15),
            a = n.n(l),
            s = n(40),
            u = n.n(s),
            c = n(36),
            f = n(37),
            h = n(39),
            p = n(38),
            d = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }
            }(),
            y = function t(e, n, r) { null === e && (e = Function.prototype); var o = Object.getOwnPropertyDescriptor(e, n); if (void 0 === o) { var i = Object.getPrototypeOf(e); return null === i ? void 0 : t(i, n, r) } if ("value" in o) return o.value; var l = o.get; if (void 0 !== l) return l.call(r) },
            v = { DisplaySize: f.a, Toolbar: h.a, Resize: p.a },
            b = function t(e) {
                var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                i(this, t), this.initializeModules = function() { n.removeModules(), n.modules = n.moduleClasses.map(function(t) { return new(v[t] || t)(n) }), n.modules.forEach(function(t) { t.onCreate() }), n.onUpdate() }, this.onUpdate = function() { n.repositionElements(), n.modules.forEach(function(t) { t.onUpdate() }) }, this.removeModules = function() { n.modules.forEach(function(t) { t.onDestroy() }), n.modules = [] }, this.handleClick = function(t) {
                    if (t.target && t.target.tagName && "IMG" === t.target.tagName.toUpperCase()) {
                        if (n.img === t.target) return;
                        n.img && n.hide(), n.show(t.target), t.preventDefault()
                    } else n.img && n.hide()
                }, this.handleScroll = function(t) { n.hide() }, this.show = function(t) { n.img = t, n.showOverlay(), n.initializeModules() }, this.showOverlay = function() { n.overlay && n.hideOverlay(), n.quill.setSelection(null), n.setUserSelect("none"), document.addEventListener("keyup", n.checkImage, !0), n.quill.root.addEventListener("input", n.checkImage, !0), n.overlay = document.createElement("div"), Object.assign(n.overlay.style, n.options.overlayStyles), n.quill.root.parentNode.appendChild(n.overlay), n.repositionElements() }, this.hideOverlay = function() { n.overlay && (n.quill.root.parentNode.removeChild(n.overlay), n.overlay = void 0, document.removeEventListener("keyup", n.checkImage), n.quill.root.removeEventListener("input", n.checkImage), n.setUserSelect("")) }, this.repositionElements = function() {
                    if (n.overlay && n.img) {
                        var t = n.quill.root.parentNode,
                            e = n.img.getBoundingClientRect(),
                            r = t.getBoundingClientRect();
                        Object.assign(n.overlay.style, { left: e.left - r.left - 1 + t.scrollLeft + "px", top: e.top - r.top + t.scrollTop + "px", width: e.width + "px", height: e.height + "px" })
                    }
                }, this.hide = function() { n.hideOverlay(), n.removeModules(), n.img = void 0 }, this.setUserSelect = function(t) {
                    ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"].forEach(function(e) { n.quill.root.style[e] = t, document.documentElement.style[e] = t })
                }, this.checkImage = function(t) { n.img && (46 != t.keyCode && 8 != t.keyCode || (window.Quill || a.a).find(n.img).deleteAt(0), n.hide()) }, this.quill = e;
                var o = !1;
                r.modules && (o = r.modules.slice()), this.options = u()({}, r, c.a), !1 !== o && (this.options.modules = o), document.execCommand("enableObjectResizing", !1, "false"), this.quill.root.addEventListener("click", this.handleClick, !1), this.quill.root.addEventListener("mscontrolselect", this.handleClick, !1), this.quill.root.addEventListener("scroll", this.handleScroll, !1), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.moduleClasses = this.options.modules, this.modules = []
            };
        if (e.default = b, window.Quill) {
            var g = ["alt", "height", "width", "style"],
                m = window.Quill.import("formats/image"),
                _ = function(t) {
                    function e() { return i(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) }
                    return o(e, t), d(e, [{ key: "format", value: function(t, n) { g.indexOf(t) > -1 ? n ? this.domNode.setAttribute(t, n) : this.domNode.removeAttribute(t) : y(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, n) } }], [{ key: "formats", value: function(t) { return g.reduce(function(e, n) { return t.hasAttribute(n) && (e[n] = t.getAttribute(n)), e }, {}) } }]), e
                }(m);
            window.Quill.register(_, !0), "function" != typeof Object.assign && (Object.assign = function(t) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                t = Object(t);
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    if (null != n)
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }), window.Quill.register("modules/imageResize", b)
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) { var e = t.length; if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var n = t.indexOf("="); return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4] }

        function o(t) {
            var e = r(t),
                n = e[0],
                o = e[1];
            return 3 * (n + o) / 4 - o
        }

        function i(t, e, n) { return 3 * (e + n) / 4 - n }

        function l(t) { for (var e, n = r(t), o = n[0], l = n[1], a = new h(i(t, o, l)), s = 0, u = l > 0 ? o - 4 : o, c = 0; c < u; c += 4) e = f[t.charCodeAt(c)] << 18 | f[t.charCodeAt(c + 1)] << 12 | f[t.charCodeAt(c + 2)] << 6 | f[t.charCodeAt(c + 3)], a[s++] = e >> 16 & 255, a[s++] = e >> 8 & 255, a[s++] = 255 & e; return 2 === l && (e = f[t.charCodeAt(c)] << 2 | f[t.charCodeAt(c + 1)] >> 4, a[s++] = 255 & e), 1 === l && (e = f[t.charCodeAt(c)] << 10 | f[t.charCodeAt(c + 1)] << 4 | f[t.charCodeAt(c + 2)] >> 2, a[s++] = e >> 8 & 255, a[s++] = 255 & e), a }

        function a(t) { return c[t >> 18 & 63] + c[t >> 12 & 63] + c[t >> 6 & 63] + c[63 & t] }

        function s(t, e, n) { for (var r, o = [], i = e; i < n; i += 3) r = (t[i] << 16 & 16711680) + (t[i + 1] << 8 & 65280) + (255 & t[i + 2]), o.push(a(r)); return o.join("") }

        function u(t) { for (var e, n = t.length, r = n % 3, o = [], i = 0, l = n - r; i < l; i += 16383) o.push(s(t, i, i + 16383 > l ? l : i + 16383)); return 1 === r ? (e = t[n - 1], o.push(c[e >> 2] + c[e << 4 & 63] + "==")) : 2 === r && (e = (t[n - 2] << 8) + t[n - 1], o.push(c[e >> 10] + c[e >> 4 & 63] + c[e << 2 & 63] + "=")), o.join("") }
        e.byteLength = o, e.toByteArray = l, e.fromByteArray = u;
        for (var c = [], f = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, y = p.length; d < y; ++d) c[d] = p[d], f[p.charCodeAt(d)] = d;
        f["-".charCodeAt(0)] = 62, f["_".charCodeAt(0)] = 63
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            function r() { return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823 }

            function o(t, e) { if (r() < e) throw new RangeError("Invalid typed array length"); return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e), t.__proto__ = i.prototype) : (null === t && (t = new i(e)), t.length = e), t }

            function i(t, e, n) { if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i)) return new i(t, e, n); if ("number" == typeof t) { if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string"); return u(this, t) } return l(this, t, e, n) }

            function l(t, e, n, r) { if ("number" == typeof e) throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? h(t, e, n, r) : "string" == typeof e ? c(t, e, n) : p(t, e) }

            function a(t) { if ("number" != typeof t) throw new TypeError('"size" argument must be a number'); if (t < 0) throw new RangeError('"size" argument must not be negative') }

            function s(t, e, n, r) { return a(e), e <= 0 ? o(t, e) : void 0 !== n ? "string" == typeof r ? o(t, e).fill(n, r) : o(t, e).fill(n) : o(t, e) }

            function u(t, e) {
                if (a(e), t = o(t, e < 0 ? 0 : 0 | d(e)), !i.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < e; ++n) t[n] = 0;
                return t
            }

            function c(t, e, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !i.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | v(e, n);
                t = o(t, r);
                var l = t.write(e, n);
                return l !== r && (t = t.slice(0, l)), t
            }

            function f(t, e) {
                var n = e.length < 0 ? 0 : 0 | d(e.length);
                t = o(t, n);
                for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                return t
            }

            function h(t, e, n, r) { if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds"); if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds"); return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), i.TYPED_ARRAY_SUPPORT ? (t = e, t.__proto__ = i.prototype) : t = f(t, e), t }

            function p(t, e) { if (i.isBuffer(e)) { var n = 0 | d(e.length); return t = o(t, n), 0 === t.length ? t : (e.copy(t, 0, 0, n), t) } if (e) { if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || G(e.length) ? o(t, 0) : f(t, e); if ("Buffer" === e.type && Q(e.data)) return f(t, e.data) } throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.") }

            function d(t) { if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes"); return 0 | t }

            function y(t) { return +t != t && (t = 0), i.alloc(+t) }

            function v(t, e) {
                if (i.isBuffer(t)) return t.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                "string" != typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return K(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return W(t).length;
                    default:
                        if (r) return K(t).length;
                        e = ("" + e).toLowerCase(), r = !0
                }
            }

            function b(t, e, n) {
                var r = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if (n >>>= 0, e >>>= 0, n <= e) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return q(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return N(this, e, n);
                    case "ascii":
                        return S(this, e, n);
                    case "latin1":
                    case "binary":
                        return P(this, e, n);
                    case "base64":
                        return j(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return C(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }

            function g(t, e, n) {
                var r = t[e];
                t[e] = t[n], t[n] = r
            }

            function m(t, e, n, r, o) {
                if (0 === t.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                    if (o) return -1;
                    n = t.length - 1
                } else if (n < 0) {
                    if (!o) return -1;
                    n = 0
                }
                if ("string" == typeof e && (e = i.from(e, r)), i.isBuffer(e)) return 0 === e.length ? -1 : _(t, e, n, r, o);
                if ("number" == typeof e) return e &= 255, i.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : _(t, [e], n, r, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function _(t, e, n, r, o) {
                function i(t, e) { return 1 === l ? t[e] : t.readUInt16BE(e * l) }
                var l = 1,
                    a = t.length,
                    s = e.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    l = 2, a /= 2, s /= 2, n /= 2
                }
                var u;
                if (o) {
                    var c = -1;
                    for (u = n; u < a; u++)
                        if (i(t, u) === i(e, -1 === c ? 0 : u - c)) { if (-1 === c && (c = u), u - c + 1 === s) return c * l } else -1 !== c && (u -= u - c), c = -1
                } else
                    for (n + s > a && (n = a - s), u = n; u >= 0; u--) {
                        for (var f = !0, h = 0; h < s; h++)
                            if (i(t, u + h) !== i(e, h)) { f = !1; break }
                        if (f) return u
                    }
                return -1
            }

            function O(t, e, n, r) {
                n = Number(n) || 0;
                var o = t.length - n;
                r ? (r = Number(r)) > o && (r = o) : r = o;
                var i = e.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2);
                for (var l = 0; l < r; ++l) {
                    var a = parseInt(e.substr(2 * l, 2), 16);
                    if (isNaN(a)) return l;
                    t[n + l] = a
                }
                return l
            }

            function w(t, e, n, r) { return Z(K(e, t.length - n), t, n, r) }

            function x(t, e, n, r) { return Z(Y(e), t, n, r) }

            function E(t, e, n, r) { return x(t, e, n, r) }

            function k(t, e, n, r) { return Z(W(e), t, n, r) }

            function A(t, e, n, r) { return Z(V(e, t.length - n), t, n, r) }

            function j(t, e, n) { return 0 === e && n === t.length ? X.fromByteArray(t) : X.fromByteArray(t.slice(e, n)) }

            function N(t, e, n) {
                n = Math.min(t.length, n);
                for (var r = [], o = e; o < n;) {
                    var i = t[o],
                        l = null,
                        a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (o + a <= n) {
                        var s, u, c, f;
                        switch (a) {
                            case 1:
                                i < 128 && (l = i);
                                break;
                            case 2:
                                s = t[o + 1], 128 == (192 & s) && (f = (31 & i) << 6 | 63 & s) > 127 && (l = f);
                                break;
                            case 3:
                                s = t[o + 1], u = t[o + 2], 128 == (192 & s) && 128 == (192 & u) && (f = (15 & i) << 12 | (63 & s) << 6 | 63 & u) > 2047 && (f < 55296 || f > 57343) && (l = f);
                                break;
                            case 4:
                                s = t[o + 1], u = t[o + 2], c = t[o + 3], 128 == (192 & s) && 128 == (192 & u) && 128 == (192 & c) && (f = (15 & i) << 18 | (63 & s) << 12 | (63 & u) << 6 | 63 & c) > 65535 && f < 1114112 && (l = f)
                        }
                    }
                    null === l ? (l = 65533, a = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += a
                }
                return T(r)
            }

            function T(t) { var e = t.length; if (e <= J) return String.fromCharCode.apply(String, t); for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += J)); return n }

            function S(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                return r
            }

            function P(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                return r
            }

            function q(t, e, n) {
                var r = t.length;
                (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                for (var o = "", i = e; i < n; ++i) o += H(t[i]);
                return o
            }

            function C(t, e, n) { for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o }

            function L(t, e, n) { if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint"); if (t + e > n) throw new RangeError("Trying to access beyond buffer length") }

            function R(t, e, n, r, o, l) { if (!i.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < l) throw new RangeError('"value" argument is out of bounds'); if (n + r > t.length) throw new RangeError("Index out of range") }

            function M(t, e, n, r) { e < 0 && (e = 65535 + e + 1); for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o) }

            function B(t, e, n, r) { e < 0 && (e = 4294967295 + e + 1); for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255 }

            function I(t, e, n, r, o, i) { if (n + r > t.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

            function D(t, e, n, r, o) { return o || I(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), $.write(t, e, n, r, 23, 4), n + 4 }

            function U(t, e, n, r, o) { return o || I(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), $.write(t, e, n, r, 52, 8), n + 8 }

            function F(t) { if (t = z(t).replace(tt, ""), t.length < 2) return ""; for (; t.length % 4 != 0;) t += "="; return t }

            function z(t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") }

            function H(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16) }

            function K(t, e) {
                e = e || 1 / 0;
                for (var n, r = t.length, o = null, i = [], l = 0; l < r; ++l) {
                    if ((n = t.charCodeAt(l)) > 55295 && n < 57344) {
                        if (!o) {
                            if (n > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (l + 1 === r) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = n;
                            continue
                        }
                        if (n < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                            continue
                        }
                        n = 65536 + (o - 55296 << 10 | n - 56320)
                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, n < 128) {
                        if ((e -= 1) < 0) break;
                        i.push(n)
                    } else if (n < 2048) {
                        if ((e -= 2) < 0) break;
                        i.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((e -= 3) < 0) break;
                        i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return i
            }

            function Y(t) { for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n)); return e }

            function V(t, e) { for (var n, r, o, i = [], l = 0; l < t.length && !((e -= 2) < 0); ++l) n = t.charCodeAt(l), r = n >> 8, o = n % 256, i.push(o), i.push(r); return i }

            function W(t) { return X.toByteArray(F(t)) }

            function Z(t, e, n, r) { for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o]; return o }

            function G(t) { return t !== t }
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            var X = n(42),
                $ = n(44),
                Q = n(45);
            e.Buffer = i, e.SlowBuffer = y, e.INSPECT_MAX_BYTES = 50, i.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() { try { var t = new Uint8Array(1); return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength } catch (t) { return !1 } }(), e.kMaxLength = r(), i.poolSize = 8192, i._augment = function(t) { return t.__proto__ = i.prototype, t }, i.from = function(t, e, n) { return l(null, t, e, n) }, i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, { value: null, configurable: !0 })), i.alloc = function(t, e, n) { return s(null, t, e, n) }, i.allocUnsafe = function(t) { return u(null, t) }, i.allocUnsafeSlow = function(t) { return u(null, t) }, i.isBuffer = function(t) { return !(null == t || !t._isBuffer) }, i.compare = function(t, e) {
                if (!i.isBuffer(t) || !i.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var n = t.length, r = e.length, o = 0, l = Math.min(n, r); o < l; ++o)
                    if (t[o] !== e[o]) { n = t[o], r = e[o]; break }
                return n < r ? -1 : r < n ? 1 : 0
            }, i.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, i.concat = function(t, e) {
                if (!Q(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return i.alloc(0);
                var n;
                if (void 0 === e)
                    for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                var r = i.allocUnsafe(e),
                    o = 0;
                for (n = 0; n < t.length; ++n) {
                    var l = t[n];
                    if (!i.isBuffer(l)) throw new TypeError('"list" argument must be an Array of Buffers');
                    l.copy(r, o), o += l.length
                }
                return r
            }, i.byteLength = v, i.prototype._isBuffer = !0, i.prototype.swap16 = function() { var t = this.length; if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var e = 0; e < t; e += 2) g(this, e, e + 1); return this }, i.prototype.swap32 = function() { var t = this.length; if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var e = 0; e < t; e += 4) g(this, e, e + 3), g(this, e + 1, e + 2); return this }, i.prototype.swap64 = function() { var t = this.length; if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var e = 0; e < t; e += 8) g(this, e, e + 7), g(this, e + 1, e + 6), g(this, e + 2, e + 5), g(this, e + 3, e + 4); return this }, i.prototype.toString = function() { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? N(this, 0, t) : b.apply(this, arguments) }, i.prototype.equals = function(t) { if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer"); return this === t || 0 === i.compare(this, t) }, i.prototype.inspect = function() {
                var t = "",
                    n = e.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
            }, i.prototype.compare = function(t, e, n, r, o) {
                if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                if (r >= o && e >= n) return 0;
                if (r >= o) return -1;
                if (e >= n) return 1;
                if (e >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === t) return 0;
                for (var l = o - r, a = n - e, s = Math.min(l, a), u = this.slice(r, o), c = t.slice(e, n), f = 0; f < s; ++f)
                    if (u[f] !== c[f]) { l = u[f], a = c[f]; break }
                return l < a ? -1 : a < l ? 1 : 0
            }, i.prototype.includes = function(t, e, n) { return -1 !== this.indexOf(t, e, n) }, i.prototype.indexOf = function(t, e, n) { return m(this, t, e, n, !0) }, i.prototype.lastIndexOf = function(t, e, n) { return m(this, t, e, n, !1) }, i.prototype.write = function(t, e, n, r) {
                if (void 0 === e) r = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var o = this.length - e;
                if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var i = !1;;) switch (r) {
                    case "hex":
                        return O(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return w(this, t, e, n);
                    case "ascii":
                        return x(this, t, e, n);
                    case "latin1":
                    case "binary":
                        return E(this, t, e, n);
                    case "base64":
                        return k(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, t, e, n);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), i = !0
                }
            }, i.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } };
            var J = 4096;
            i.prototype.slice = function(t, e) {
                var n = this.length;
                t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t);
                var r;
                if (i.TYPED_ARRAY_SUPPORT) r = this.subarray(t, e), r.__proto__ = i.prototype;
                else {
                    var o = e - t;
                    r = new i(o, void 0);
                    for (var l = 0; l < o; ++l) r[l] = this[l + t]
                }
                return r
            }, i.prototype.readUIntLE = function(t, e, n) { t |= 0, e |= 0, n || L(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return r }, i.prototype.readUIntBE = function(t, e, n) { t |= 0, e |= 0, n || L(t, e, this.length); for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o; return r }, i.prototype.readUInt8 = function(t, e) { return e || L(t, 1, this.length), this[t] }, i.prototype.readUInt16LE = function(t, e) { return e || L(t, 2, this.length), this[t] | this[t + 1] << 8 }, i.prototype.readUInt16BE = function(t, e) { return e || L(t, 2, this.length), this[t] << 8 | this[t + 1] }, i.prototype.readUInt32LE = function(t, e) { return e || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3] }, i.prototype.readUInt32BE = function(t, e) { return e || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]) }, i.prototype.readIntLE = function(t, e, n) { t |= 0, e |= 0, n || L(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o; return o *= 128, r >= o && (r -= Math.pow(2, 8 * e)), r }, i.prototype.readIntBE = function(t, e, n) { t |= 0, e |= 0, n || L(t, e, this.length); for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o; return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i }, i.prototype.readInt8 = function(t, e) { return e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t] }, i.prototype.readInt16LE = function(t, e) { e || L(t, 2, this.length); var n = this[t] | this[t + 1] << 8; return 32768 & n ? 4294901760 | n : n }, i.prototype.readInt16BE = function(t, e) { e || L(t, 2, this.length); var n = this[t + 1] | this[t] << 8; return 32768 & n ? 4294901760 | n : n }, i.prototype.readInt32LE = function(t, e) { return e || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24 }, i.prototype.readInt32BE = function(t, e) { return e || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3] }, i.prototype.readFloatLE = function(t, e) { return e || L(t, 4, this.length), $.read(this, t, !0, 23, 4) }, i.prototype.readFloatBE = function(t, e) { return e || L(t, 4, this.length), $.read(this, t, !1, 23, 4) }, i.prototype.readDoubleLE = function(t, e) { return e || L(t, 8, this.length), $.read(this, t, !0, 52, 8) }, i.prototype.readDoubleBE = function(t, e) { return e || L(t, 8, this.length), $.read(this, t, !1, 52, 8) }, i.prototype.writeUIntLE = function(t, e, n, r) {
                if (t = +t, e |= 0, n |= 0, !r) { R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0) }
                var o = 1,
                    i = 0;
                for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
                return e + n
            }, i.prototype.writeUIntBE = function(t, e, n, r) {
                if (t = +t, e |= 0, n |= 0, !r) { R(this, t, e, n, Math.pow(2, 8 * n) - 1, 0) }
                var o = n - 1,
                    i = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
                return e + n
            }, i.prototype.writeUInt8 = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1 }, i.prototype.writeUInt16LE = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2 }, i.prototype.writeUInt16BE = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2 }, i.prototype.writeUInt32LE = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4 }, i.prototype.writeUInt32BE = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4 }, i.prototype.writeIntLE = function(t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    R(this, t, e, n, o - 1, -o)
                }
                var i = 0,
                    l = 1,
                    a = 0;
                for (this[e] = 255 & t; ++i < n && (l *= 256);) t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / l >> 0) - a & 255;
                return e + n
            }, i.prototype.writeIntBE = function(t, e, n, r) {
                if (t = +t, e |= 0, !r) {
                    var o = Math.pow(2, 8 * n - 1);
                    R(this, t, e, n, o - 1, -o)
                }
                var i = n - 1,
                    l = 1,
                    a = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (l *= 256);) t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / l >> 0) - a & 255;
                return e + n
            }, i.prototype.writeInt8 = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1 }, i.prototype.writeInt16LE = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2 }, i.prototype.writeInt16BE = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2 }, i.prototype.writeInt32LE = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4 }, i.prototype.writeInt32BE = function(t, e, n) { return t = +t, e |= 0, n || R(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4 }, i.prototype.writeFloatLE = function(t, e, n) { return D(this, t, e, !0, n) }, i.prototype.writeFloatBE = function(t, e, n) { return D(this, t, e, !1, n) }, i.prototype.writeDoubleLE = function(t, e, n) { return U(this, t, e, !0, n) }, i.prototype.writeDoubleBE = function(t, e, n) { return U(this, t, e, !1, n) }, i.prototype.copy = function(t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var o, l = r - n;
                if (this === t && n < e && e < r)
                    for (o = l - 1; o >= 0; --o) t[o + e] = this[o + n];
                else if (l < 1e3 || !i.TYPED_ARRAY_SUPPORT)
                    for (o = 0; o < l; ++o) t[o + e] = this[o + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, n + l), e);
                return l
            }, i.prototype.fill = function(t, e, n, r) {
                if ("string" == typeof t) {
                    if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                        var o = t.charCodeAt(0);
                        o < 256 && (t = o)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !i.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof t && (t &= 255);
                if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                if (n <= e) return this;
                e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0);
                var l;
                if ("number" == typeof t)
                    for (l = e; l < n; ++l) this[l] = t;
                else {
                    var a = i.isBuffer(t) ? t : K(new i(t, r).toString()),
                        s = a.length;
                    for (l = 0; l < n - e; ++l) this[l + e] = a[l % s]
                }
                return this
            };
            var tt = /[^+\/0-9A-Za-z-_]/g
        }).call(e, n(35))
    }, function(t, e) {
        e.read = function(t, e, n, r, o) {
            var i, l, a = 8 * o - r - 1,
                s = (1 << a) - 1,
                u = s >> 1,
                c = -7,
                f = n ? o - 1 : 0,
                h = n ? -1 : 1,
                p = t[e + f];
            for (f += h, i = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; i = 256 * i + t[e + f], f += h, c -= 8);
            for (l = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; l = 256 * l + t[e + f], f += h, c -= 8);
            if (0 === i) i = 1 - u;
            else {
                if (i === s) return l ? NaN : 1 / 0 * (p ? -1 : 1);
                l += Math.pow(2, r), i -= u
            }
            return (p ? -1 : 1) * l * Math.pow(2, i - r)
        }, e.write = function(t, e, n, r, o, i) {
            var l, a, s, u = 8 * i - o - 1,
                c = (1 << u) - 1,
                f = c >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : i - 1,
                d = r ? 1 : -1,
                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, l = c) : (l = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -l)) < 1 && (l--, s *= 2), e += l + f >= 1 ? h / s : h * Math.pow(2, 1 - f), e * s >= 2 && (l++, s /= 2), l + f >= c ? (a = 0, l = c) : l + f >= 1 ? (a = (e * s - 1) * Math.pow(2, o), l += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, o), l = 0)); o >= 8; t[n + p] = 255 & a, p += d, a /= 256, o -= 8);
            for (l = l << o | a, u += o; u > 0; t[n + p] = 255 & l, p += d, l /= 256, u -= 8);
            t[n + p - d] |= 128 * y
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function(t) { return "[object Array]" == n.call(t) }
    }, function(t, e, n) {
        function r(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        var o = n(73),
            i = n(74),
            l = n(75),
            a = n(76),
            s = n(77);
        r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = l, r.prototype.has = a, r.prototype.set = s, t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        var o = n(87),
            i = n(88),
            l = n(89),
            a = n(90),
            s = n(91);
        r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = l, r.prototype.has = a, r.prototype.set = s, t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = this.__data__ = new o(t);
            this.size = e.size
        }
        var o = n(3),
            i = n(99),
            l = n(100),
            a = n(101),
            s = n(102),
            u = n(103);
        r.prototype.clear = i, r.prototype.delete = l, r.prototype.get = a, r.prototype.has = s, r.prototype.set = u, t.exports = r
    }, function(t, e, n) {
        var r = n(1),
            o = r.Uint8Array;
        t.exports = o
    }, function(t, e, n) {
        function r(t, e) {
            var n = l(t),
                r = !n && i(t),
                c = !n && !r && a(t),
                h = !n && !r && !c && u(t),
                p = n || r || c || h,
                d = p ? o(t.length, String) : [],
                y = d.length;
            for (var v in t) !e && !f.call(t, v) || p && ("length" == v || c && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || s(v, y)) || d.push(v);
            return d
        }
        var o = n(60),
            i = n(29),
            l = n(30),
            a = n(31),
            s = n(25),
            u = n(33),
            c = Object.prototype,
            f = c.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) {
            var r = t[e];
            a.call(t, e) && i(r, n) && (void 0 !== n || e in t) || o(t, e, n)
        }
        var o = n(10),
            i = n(8),
            l = Object.prototype,
            a = l.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        var r = n(0),
            o = Object.create,
            i = function() {
                function t() {}
                return function(e) {
                    if (!r(e)) return {};
                    if (o) return o(e);
                    t.prototype = e;
                    var n = new t;
                    return t.prototype = void 0, n
                }
            }();
        t.exports = i
    }, function(t, e, n) {
        var r = n(69),
            o = r();
        t.exports = o
    }, function(t, e, n) {
        function r(t) { return i(t) && o(t) == l }
        var o = n(5),
            i = n(2),
            l = "[object Arguments]";
        t.exports = r
    }, function(t, e, n) {
        function r(t) { return !(!l(t) || i(t)) && (o(t) ? d : u).test(a(t)) }
        var o = n(13),
            i = n(81),
            l = n(0),
            a = n(104),
            s = /[\\^$.*+?()[\]{}|]/g,
            u = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            f = Object.prototype,
            h = c.toString,
            p = f.hasOwnProperty,
            d = RegExp("^" + h.call(p).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = r
    }, function(t, e, n) {
        function r(t) { return l(t) && i(t.length) && !!a[o(t)] }
        var o = n(5),
            i = n(32),
            l = n(2),
            a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = r
    }, function(t, e, n) {
        function r(t) {
            if (!o(t)) return l(t);
            var e = i(t),
                n = [];
            for (var r in t)("constructor" != r || !e && s.call(t, r)) && n.push(r);
            return n
        }
        var o = n(0),
            i = n(26),
            l = n(92),
            a = Object.prototype,
            s = a.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n, r, m, _, O) {
            var w = b(t, n),
                x = b(e, n),
                E = O.get(x);
            if (E) return void o(t, n, E);
            var k = _ ? _(w, x, n + "", t, e, O) : void 0,
                A = void 0 === k;
            if (A) {
                var j = c(x),
                    N = !j && h(x),
                    T = !j && !N && v(x);
                k = x, j || N || T ? c(w) ? k = w : f(w) ? k = a(w) : N ? (A = !1, k = i(x, !0)) : T ? (A = !1, k = l(x, !0)) : k = [] : y(x) || u(x) ? (k = w, u(w) ? k = g(w) : (!d(w) || r && p(w)) && (k = s(x))) : A = !1
            }
            A && (O.set(x, k), m(k, x, r, _, O), O.delete(x)), o(t, n, k)
        }
        var o = n(19),
            i = n(63),
            l = n(64),
            a = n(65),
            s = n(78),
            u = n(29),
            c = n(30),
            f = n(106),
            h = n(31),
            p = n(13),
            d = n(0),
            y = n(107),
            v = n(33),
            b = n(27),
            g = n(110);
        t.exports = r
    }, function(t, e, n) {
        var r = n(105),
            o = n(22),
            i = n(28),
            l = o ? function(t, e) { return o(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 }) } : i;
        t.exports = l
    }, function(t, e) {
        function n(t, e) { for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n); return r }
        t.exports = n
    }, function(t, e) {
        function n(t) { return function(e) { return t(e) } }
        t.exports = n
    }, function(t, e, n) {
        function r(t) { var e = new t.constructor(t.byteLength); return new o(e).set(new o(t)), e }
        var o = n(49);
        t.exports = r
    }, function(t, e, n) {
        (function(t) {
            function r(t, e) {
                if (e) return t.slice();
                var n = t.length,
                    r = u ? u(n) : new t.constructor(n);
                return t.copy(r), r
            }
            var o = n(1),
                i = "object" == typeof e && e && !e.nodeType && e,
                l = i && "object" == typeof t && t && !t.nodeType && t,
                a = l && l.exports === i,
                s = a ? o.Buffer : void 0,
                u = s ? s.allocUnsafe : void 0;
            t.exports = r
        }).call(e, n(14)(t))
    }, function(t, e, n) {
        function r(t, e) { var n = e ? o(t.buffer) : t.buffer; return new t.constructor(n, t.byteOffset, t.length) }
        var o = n(62);
        t.exports = r
    }, function(t, e) {
        function n(t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
            return e
        }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n, r) {
            var l = !n;
            n || (n = {});
            for (var a = -1, s = e.length; ++a < s;) {
                var u = e[a],
                    c = r ? r(n[u], t[u], u, n, t) : void 0;
                void 0 === c && (c = t[u]), l ? i(n, u, c) : o(n, u, c)
            }
            return n
        }
        var o = n(51),
            i = n(10);
        t.exports = r
    }, function(t, e, n) {
        var r = n(1),
            o = r["__core-js_shared__"];
        t.exports = o
    }, function(t, e, n) {
        function r(t) {
            return o(function(e, n) {
                var r = -1,
                    o = n.length,
                    l = o > 1 ? n[o - 1] : void 0,
                    a = o > 2 ? n[2] : void 0;
                for (l = t.length > 3 && "function" == typeof l ? (o--, l) : void 0, a && i(n[0], n[1], a) && (l = o < 3 ? void 0 : l, o = 1), e = Object(e); ++r < o;) {
                    var s = n[r];
                    s && t(e, s, r, l)
                }
                return e
            })
        }
        var o = n(21),
            i = n(79);
        t.exports = r
    }, function(t, e) {
        function n(t) { return function(e, n, r) { for (var o = -1, i = Object(e), l = r(e), a = l.length; a--;) { var s = l[t ? a : ++o]; if (!1 === n(i[s], s, i)) break } return e } }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n, l, a, s) { return i(t) && i(e) && (s.set(e, t), o(t, e, void 0, r, s), s.delete(e)), t }
        var o = n(20),
            i = n(0);
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = l.call(t, s),
                n = t[s];
            try { t[s] = void 0; var r = !0 } catch (t) {}
            var o = a.call(t);
            return r && (e ? t[s] = n : delete t[s]), o
        }
        var o = n(17),
            i = Object.prototype,
            l = i.hasOwnProperty,
            a = i.toString,
            s = o ? o.toStringTag : void 0;
        t.exports = r
    }, function(t, e) {
        function n(t, e) { return null == t ? void 0 : t[e] }
        t.exports = n
    }, function(t, e, n) {
        function r() { this.__data__ = o ? o(null) : {}, this.size = 0 }
        var o = n(7);
        t.exports = r
    }, function(t, e) {
        function n(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e }
        t.exports = n
    }, function(t, e, n) {
        function r(t) { var e = this.__data__; if (o) { var n = e[t]; return n === i ? void 0 : n } return a.call(e, t) ? e[t] : void 0 }
        var o = n(7),
            i = "__lodash_hash_undefined__",
            l = Object.prototype,
            a = l.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        function r(t) { var e = this.__data__; return o ? void 0 !== e[t] : l.call(e, t) }
        var o = n(7),
            i = Object.prototype,
            l = i.hasOwnProperty;
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) { var n = this.__data__; return this.size += this.has(t) ? 0 : 1, n[t] = o && void 0 === e ? i : e, this }
        var o = n(7),
            i = "__lodash_hash_undefined__";
        t.exports = r
    }, function(t, e, n) {
        function r(t) { return "function" != typeof t.constructor || l(t) ? {} : o(i(t)) }
        var o = n(52),
            i = n(24),
            l = n(26);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e, n) { if (!a(n)) return !1; var r = typeof e; return !!("number" == r ? i(n) && l(e, n.length) : "string" == r && e in n) && o(n[e], t) }
        var o = n(8),
            i = n(12),
            l = n(25),
            a = n(0);
        t.exports = r
    }, function(t, e) {
        function n(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t }
        t.exports = n
    }, function(t, e, n) {
        function r(t) { return !!i && i in t }
        var o = n(67),
            i = function() { var t = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || ""); return t ? "Symbol(src)_1." + t : "" }();
        t.exports = r
    }, function(t, e) {
        function n() { this.__data__ = [], this.size = 0 }
        t.exports = n
    }, function(t, e, n) {
        function r(t) {
            var e = this.__data__,
                n = o(e, t);
            return !(n < 0) && (n == e.length - 1 ? e.pop() : l.call(e, n, 1), --this.size, !0)
        }
        var o = n(4),
            i = Array.prototype,
            l = i.splice;
        t.exports = r
    }, function(t, e, n) {
        function r(t) {
            var e = this.__data__,
                n = o(e, t);
            return n < 0 ? void 0 : e[n][1]
        }
        var o = n(4);
        t.exports = r
    }, function(t, e, n) {
        function r(t) { return o(this.__data__, t) > -1 }
        var o = n(4);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = this.__data__,
                r = o(n, t);
            return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
        }
        var o = n(4);
        t.exports = r
    }, function(t, e, n) {
        function r() { this.size = 0, this.__data__ = { hash: new o, map: new(l || i), string: new o } }
        var o = n(46),
            i = n(3),
            l = n(16);
        t.exports = r
    }, function(t, e, n) {
        function r(t) { var e = o(this, t).delete(t); return this.size -= e ? 1 : 0, e }
        var o = n(6);
        t.exports = r
    }, function(t, e, n) {
        function r(t) { return o(this, t).get(t) }
        var o = n(6);
        t.exports = r
    }, function(t, e, n) {
        function r(t) { return o(this, t).has(t) }
        var o = n(6);
        t.exports = r
    }, function(t, e, n) {
        function r(t, e) {
            var n = o(this, t),
                r = n.size;
            return n.set(t, e), this.size += n.size == r ? 0 : 1, this
        }
        var o = n(6);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e = [];
            if (null != t)
                for (var n in Object(t)) e.push(n);
            return e
        }
        t.exports = n
    }, function(t, e, n) {
        (function(t) {
            var r = n(23),
                o = "object" == typeof e && e && !e.nodeType && e,
                i = o && "object" == typeof t && t && !t.nodeType && t,
                l = i && i.exports === o,
                a = l && r.process,
                s = function() { try { var t = i && i.require && i.require("util").types; return t || a && a.binding && a.binding("util") } catch (t) {} }();
            t.exports = s
        }).call(e, n(14)(t))
    }, function(t, e) {
        function n(t) { return o.call(t) }
        var r = Object.prototype,
            o = r.toString;
        t.exports = n
    }, function(t, e) {
        function n(t, e) { return function(n) { return t(e(n)) } }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e, n) {
            return e = i(void 0 === e ? t.length - 1 : e, 0),
                function() {
                    for (var r = arguments, l = -1, a = i(r.length - e, 0), s = Array(a); ++l < a;) s[l] = r[e + l];
                    l = -1;
                    for (var u = Array(e + 1); ++l < e;) u[l] = r[l];
                    return u[e] = n(s), o(t, this, u)
                }
        }
        var o = n(18),
            i = Math.max;
        t.exports = r
    }, function(t, e, n) {
        var r = n(59),
            o = n(98),
            i = o(r);
        t.exports = i
    }, function(t, e) {
        function n(t) {
            var e = 0,
                n = 0;
            return function() {
                var l = i(),
                    a = o - (l - n);
                if (n = l, a > 0) { if (++e >= r) return arguments[0] } else e = 0;
                return t.apply(void 0, arguments)
            }
        }
        var r = 800,
            o = 16,
            i = Date.now;
        t.exports = n
    }, function(t, e, n) {
        function r() { this.__data__ = new o, this.size = 0 }
        var o = n(3);
        t.exports = r
    }, function(t, e) {
        function n(t) {
            var e = this.__data__,
                n = e.delete(t);
            return this.size = e.size, n
        }
        t.exports = n
    }, function(t, e) {
        function n(t) { return this.__data__.get(t) }
        t.exports = n
    }, function(t, e) {
        function n(t) { return this.__data__.has(t) }
        t.exports = n
    }, function(t, e, n) {
        function r(t, e) {
            var n = this.__data__;
            if (n instanceof o) {
                var r = n.__data__;
                if (!i || r.length < a - 1) return r.push([t, e]), this.size = ++n.size, this;
                n = this.__data__ = new l(r)
            }
            return n.set(t, e), this.size = n.size, this
        }
        var o = n(3),
            i = n(16),
            l = n(47),
            a = 200;
        t.exports = r
    }, function(t, e) {
        function n(t) { if (null != t) { try { return o.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" }
        var r = Function.prototype,
            o = r.toString;
        t.exports = n
    }, function(t, e) {
        function n(t) { return function() { return t } }
        t.exports = n
    }, function(t, e, n) {
        function r(t) { return i(t) && o(t) }
        var o = n(12),
            i = n(2);
        t.exports = r
    }, function(t, e, n) {
        function r(t) { if (!l(t) || o(t) != a) return !1; var e = i(t); if (null === e) return !0; var n = f.call(e, "constructor") && e.constructor; return "function" == typeof n && n instanceof n && c.call(n) == h }
        var o = n(5),
            i = n(24),
            l = n(2),
            a = "[object Object]",
            s = Function.prototype,
            u = Object.prototype,
            c = s.toString,
            f = u.hasOwnProperty,
            h = c.call(Object);
        t.exports = r
    }, function(t, e, n) {
        var r = n(20),
            o = n(68),
            i = o(function(t, e, n, o) { r(t, e, n, o) });
        t.exports = i
    }, function(t, e) {
        function n() { return !1 }
        t.exports = n
    }, function(t, e, n) {
        function r(t) { return o(t, i(t)) }
        var o = n(66),
            i = n(34);
        t.exports = r
    }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>' }, function(t, e) { t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>' }])
});


'use strict';

var Layout = (function() {

    function pinSidenav() {
        $('.sidenav-toggler').addClass('active');
        $('.sidenav-toggler').data('action', 'sidenav-unpin');
        $('body').removeClass('g-sidenav-hidden').addClass('g-sidenav-show g-sidenav-pinned');
        $('body').append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target=' + $('#sidenav-main').data('target') + ' />');

        // Store the sidenav state in a cookie session
        Cookies.set('sidenav-state', 'pinned');
    }

    function unpinSidenav() {
        $('.sidenav-toggler').removeClass('active');
        $('.sidenav-toggler').data('action', 'sidenav-pin');
        $('body').removeClass('g-sidenav-pinned').addClass('g-sidenav-hidden');
        $('body').find('.backdrop').remove();

        // Store the sidenav state in a cookie session
        Cookies.set('sidenav-state', 'unpinned');
    }

    // Set sidenav state from cookie

    var $sidenavState = Cookies.get('sidenav-state') ? Cookies.get('sidenav-state') : 'pinned';

    if ($(window).width() > 1200) {
        if ($sidenavState == 'pinned') {
            pinSidenav()
        }

        if (Cookies.get('sidenav-state') == 'unpinned') {
            unpinSidenav()
        }
    }

    $("body").on("click", "[data-action]", function(e) {

        e.preventDefault();

        var $this = $(this);
        var action = $this.data('action');
        var target = $this.data('target');


        // Manage actions

        switch (action) {
            case 'sidenav-pin':
                pinSidenav();
                break;

            case 'sidenav-unpin':
                unpinSidenav();
                break;

            case 'search-show':
                target = $this.data('target');
                $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-showing');

                setTimeout(function() {
                    $('body').removeClass('g-navbar-search-showing').addClass('g-navbar-search-show');
                }, 150);

                setTimeout(function() {
                    $('body').addClass('g-navbar-search-shown');
                }, 300)
                break;

            case 'search-close':
                target = $this.data('target');
                $('body').removeClass('g-navbar-search-shown');

                setTimeout(function() {
                    $('body').removeClass('g-navbar-search-show').addClass('g-navbar-search-hiding');
                }, 150);

                setTimeout(function() {
                    $('body').removeClass('g-navbar-search-hiding').addClass('g-navbar-search-hidden');
                }, 300);

                setTimeout(function() {
                    $('body').removeClass('g-navbar-search-hidden');
                }, 500);
                break;
        }
    })


    // Add sidenav modifier classes on mouse events

    $('.sidenav').on('mouseenter', function() {
        if (!$('body').hasClass('g-sidenav-pinned')) {
            $('body').removeClass('g-sidenav-hide').removeClass('g-sidenav-hidden').addClass('g-sidenav-show');
        }
    })

    $('.sidenav').on('mouseleave', function() {
        if (!$('body').hasClass('g-sidenav-pinned')) {
            $('body').removeClass('g-sidenav-show').addClass('g-sidenav-hide');

            setTimeout(function() {
                $('body').removeClass('g-sidenav-hide').addClass('g-sidenav-hidden');
            }, 300);
        }
    })


    // Make the body full screen size if it has not enough content inside
    $(window).on('load resize', function() {
        if ($('body').height() < 800) {
            $('body').css('min-height', '100vh');
            $('#footer-main').addClass('footer-auto-bottom')
        }
    })

})();

//
// Charts
//

'use strict';

var Charts = (function() {

    // Variable

    var $toggle = $('[data-toggle="chart"]');
    var mode = 'light'; //(themeMode) ? themeMode : 'light';
    var fonts = {
        base: 'Open Sans'
    }

    // Colors
    var colors = {
        gray: {
            100: '#f6f9fc',
            200: '#e9ecef',
            300: '#dee2e6',
            400: '#ced4da',
            500: '#adb5bd',
            600: '#8898aa',
            700: '#525f7f',
            800: '#32325d',
            900: '#212529'
        },
        theme: {
            'default': '#172b4d',
            'primary': '#5e72e4',
            'secondary': '#f4f5f7',
            'info': '#11cdef',
            'success': '#2dce89',
            'danger': '#f5365c',
            'warning': '#fb6340'
        },
        black: '#12263F',
        white: '#FFFFFF',
        transparent: 'transparent',
    };


    // Methods

    // Chart.js global options
    function chartOptions() {

        // Options
        var options = {
            defaults: {
                global: {
                    responsive: true,
                    maintainAspectRatio: false,
                    defaultColor: (mode == 'dark') ? colors.gray[700] : colors.gray[600],
                    defaultFontColor: (mode == 'dark') ? colors.gray[700] : colors.gray[600],
                    defaultFontFamily: fonts.base,
                    defaultFontSize: 13,
                    layout: {
                        padding: 0
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 16
                        }
                    },
                    elements: {
                        point: {
                            radius: 0,
                            backgroundColor: colors.theme['primary']
                        },
                        line: {
                            tension: .4,
                            borderWidth: 4,
                            borderColor: colors.theme['primary'],
                            backgroundColor: colors.transparent,
                            borderCapStyle: 'rounded'
                        },
                        rectangle: {
                            backgroundColor: colors.theme['warning']
                        },
                        arc: {
                            backgroundColor: colors.theme['primary'],
                            borderColor: (mode == 'dark') ? colors.gray[800] : colors.white,
                            borderWidth: 4
                        }
                    },
                    tooltips: {
                        enabled: true,
                        mode: 'index',
                        intersect: false,
                    }
                },
                doughnut: {
                    cutoutPercentage: 83,
                    legendCallback: function(chart) {
                        var data = chart.data;
                        var content = '';

                        data.labels.forEach(function(label, index) {
                            var bgColor = data.datasets[0].backgroundColor[index];

                            content += '<span class="chart-legend-item">';
                            content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
                            content += label;
                            content += '</span>';
                        });

                        return content;
                    }
                }
            }
        }

        // yAxes
        Chart.scaleService.updateScaleDefaults('linear', {
            gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: (mode == 'dark') ? colors.gray[900] : colors.gray[300],
                drawBorder: false,
                drawTicks: false,
                drawOnChartArea: true,
                zeroLineWidth: 0,
                zeroLineColor: 'rgba(0,0,0,0)',
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2]
            },
            ticks: {
                beginAtZero: true,
                padding: 10,
                callback: function(value) {
                    if (!(value % 10)) {
                        return value
                    }
                }
            }
        });

        // xAxes
        Chart.scaleService.updateScaleDefaults('category', {
            gridLines: {
                drawBorder: false,
                drawOnChartArea: false,
                drawTicks: false
            },
            ticks: {
                padding: 20
            },
            maxBarThickness: 10
        });

        return options;

    }

    // Parse global options
    function parseOptions(parent, options) {
        for (var item in options) {
            if (typeof options[item] !== 'object') {
                parent[item] = options[item];
            } else {
                parseOptions(parent[item], options[item]);
            }
        }
    }

    // Push options
    function pushOptions(parent, options) {
        for (var item in options) {
            if (Array.isArray(options[item])) {
                options[item].forEach(function(data) {
                    parent[item].push(data);
                });
            } else {
                pushOptions(parent[item], options[item]);
            }
        }
    }

    // Pop options
    function popOptions(parent, options) {
        for (var item in options) {
            if (Array.isArray(options[item])) {
                options[item].forEach(function(data) {
                    parent[item].pop();
                });
            } else {
                popOptions(parent[item], options[item]);
            }
        }
    }

    // Toggle options
    function toggleOptions(elem) {
        var options = elem.data('add');
        var $target = $(elem.data('target'));
        var $chart = $target.data('chart');

        if (elem.is(':checked')) {

            // Add options
            pushOptions($chart, options);

            // Update chart
            $chart.update();
        } else {

            // Remove options
            popOptions($chart, options);

            // Update chart
            $chart.update();
        }
    }

    // Update options
    function updateOptions(elem) {
        var options = elem.data('update');
        var $target = $(elem.data('target'));
        var $chart = $target.data('chart');

        // Parse options
        parseOptions($chart, options);

        // Toggle ticks
        toggleTicks(elem, $chart);

        // Update chart
        $chart.update();
    }

    // Toggle ticks
    function toggleTicks(elem, $chart) {

        if (elem.data('prefix') !== undefined || elem.data('prefix') !== undefined) {
            var prefix = elem.data('prefix') ? elem.data('prefix') : '';
            var suffix = elem.data('suffix') ? elem.data('suffix') : '';

            // Update ticks
            $chart.options.scales.yAxes[0].ticks.callback = function(value) {
                if (!(value % 10)) {
                    return prefix + value + suffix;
                }
            }

            // Update tooltips
            $chart.options.tooltips.callbacks.label = function(item, data) {
                var label = data.datasets[item.datasetIndex].label || '';
                var yLabel = item.yLabel;
                var content = '';

                if (data.datasets.length > 1) {
                    content += '<span class="popover-body-label mr-auto">' + label + '</span>';
                }

                content += '<span class="popover-body-value">' + prefix + yLabel + suffix + '</span>';
                return content;
            }

        }
    }


    // Events

    // Parse global options
    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    // Toggle options
    $toggle.on({
        'change': function() {
            var $this = $(this);

            if ($this.is('[data-add]')) {
                toggleOptions($this);
            }
        },
        'click': function() {
            var $this = $(this);

            if ($this.is('[data-update]')) {
                updateOptions($this);
            }
        }
    });


    // Return

    return {
        colors: colors,
        fonts: fonts,
        mode: mode
    };

})();

//
// Icon code copy/paste
//

'use strict';

var CopyIcon = (function() {

    // Variables

    var $element = '.btn-icon-clipboard',
        $btn = $($element);


    // Methods

    function init($this) {
        $this.tooltip().on('mouseleave', function() {
            // Explicitly hide tooltip, since after clicking it remains
            // focused (as it's a button), so tooltip would otherwise
            // remain visible until focus is moved away
            $this.tooltip('hide');
        });

        var clipboard = new ClipboardJS($element);

        clipboard.on('success', function(e) {
            $(e.trigger)
                .attr('title', 'Copied!')
                .tooltip('_fixTitle')
                .tooltip('show')
                .attr('title', 'Copy to clipboard')
                .tooltip('_fixTitle')

            e.clearSelection()
        });
    }


    // Events
    if ($btn.length) {
        init($btn);
    }

})();

//
// Navbar
//

'use strict';

var Navbar = (function() {

    // Variables

    var $nav = $('.navbar-nav, .navbar-nav .nav');
    var $collapse = $('.navbar .collapse');
    var $dropdown = $('.navbar .dropdown');

    // Methods

    function accordion($this) {
        $this.closest($nav).find($collapse).not($this).collapse('hide');
    }

    function closeDropdown($this) {
        var $dropdownMenu = $this.find('.dropdown-menu');

        $dropdownMenu.addClass('close');

        setTimeout(function() {
            $dropdownMenu.removeClass('close');
        }, 200);
    }


    // Events

    $collapse.on({
        'show.bs.collapse': function() {
            accordion($(this));
        }
    })

    $dropdown.on({
        'hide.bs.dropdown': function() {
            closeDropdown($(this));
        }
    })

})();


//
// Navbar collapse
//


var NavbarCollapse = (function() {

    // Variables

    var $nav = $('.navbar-nav'),
        $collapse = $('.navbar .navbar-custom-collapse');


    // Methods

    function hideNavbarCollapse($this) {
        $this.addClass('collapsing-out');
    }

    function hiddenNavbarCollapse($this) {
        $this.removeClass('collapsing-out');
    }


    // Events

    if ($collapse.length) {
        $collapse.on({
            'hide.bs.collapse': function() {
                hideNavbarCollapse($collapse);
            }
        })

        $collapse.on({
            'hidden.bs.collapse': function() {
                hiddenNavbarCollapse($collapse);
            }
        })
    }

})();

//
// Popover
//

'use strict';

var Popover = (function() {

    // Variables

    var $popover = $('[data-toggle="popover"]'),
        $popoverClass = '';


    // Methods

    function init($this) {
        if ($this.data('color')) {
            $popoverClass = 'popover-' + $this.data('color');
        }

        var options = {
            trigger: 'focus',
            template: '<div class="popover ' + $popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        };

        $this.popover(options);
    }


    // Events

    if ($popover.length) {
        $popover.each(function() {
            init($(this));
        });
    }

})();

//
// Scroll to (anchor links)
//

'use strict';

var ScrollTo = (function() {

    //
    // Variables
    //

    var $scrollTo = $('.scroll-me, [data-scroll-to], .toc-entry a');


    //
    // Methods
    //

    function scrollTo($this) {
        var $el = $this.attr('href');
        var offset = $this.data('scroll-to-offset') ? $this.data('scroll-to-offset') : 0;
        var options = {
            scrollTop: $($el).offset().top - offset
        };

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate(options, 600);

        event.preventDefault();
    }


    //
    // Events
    //

    if ($scrollTo.length) {
        $scrollTo.on('click', function(event) {
            scrollTo($(this));
        });
    }

})();

//
// Tooltip
//

'use strict';

var Tooltip = (function() {

    // Variables

    var $tooltip = $('[data-toggle="tooltip"]');


    // Methods

    function init() {
        $tooltip.tooltip();
    }


    // Events

    if ($tooltip.length) {
        init();
    }

})();

//
// Checklist
//

'use strict';

var Checklist = (function() {

    //
    // Variables
    //

    var $list = $('[data-toggle="checklist"]')


    //
    // Methods
    //

    // Init
    function init($this) {
        var $checkboxes = $this.find('.checklist-entry input[type="checkbox"]');

        $checkboxes.each(function() {
            checkEntry($(this));
        });

    }

    function checkEntry($checkbox) {
        if ($checkbox.is(':checked')) {
            $checkbox.closest('.checklist-item').addClass('checklist-item-checked');
        } else {
            $checkbox.closest('.checklist-item').removeClass('checklist-item-checked');
        }
    }


    //
    // Events
    //

    // Init
    if ($list.length) {
        $list.each(function() {
            init($(this));
        });

        $list.find('input[type="checkbox"]').on('change', function() {
            checkEntry($(this));
        });
    }

})();

//
// Form control
//

'use strict';

var FormControl = (function() {

    // Variables

    var $input = $('.form-control');


    // Methods

    function init($this) {
        $this.on('focus blur', function(e) {
            $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus'));
        }).trigger('blur');
    }


    // Events

    if ($input.length) {
        init($input);
    }

})();

//
// Google maps
//

var $map = $('#map-default'),
    map,
    lat,
    lng,
    color = "#5e72e4";

function initMap() {

    map = document.getElementById('map-default');
    lat = map.getAttribute('data-lat');
    lng = map.getAttribute('data-lng');

    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 12,
        scrollwheel: false,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }

    map = new google.maps.Map(map, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });

    var contentString = '<div class="info-window-content"><h2>Argon Dashboard PRO</h2>' +
        '<p>A beautiful premium dashboard for Bootstrap 4.</p></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

if ($map.length) {
    google.maps.event.addDomListener(window, 'load', initMap);
}

//
// Google maps
//

var $map = $('#map-custom'),
    map,
    lat,
    lng,
    color = "#5e72e4";

function initMap() {

    map = document.getElementById('map-custom');
    lat = map.getAttribute('data-lat');
    lng = map.getAttribute('data-lng');

    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        zoom: 12,
        scrollwheel: false,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": color }, { "visibility": "on" }] }]
    }

    map = new google.maps.Map(map, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Hello World!'
    });

    var contentString = '<div class="info-window-content"><h2>Argon Dashboard PRO</h2>' +
        '<p>A beautiful premium dashboard for Bootstrap 4.</p></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

if ($map.length) {
    google.maps.event.addDomListener(window, 'load', initMap);
}

//
// Charts
//

'use strict';

//
// Doughnut chart
//

var BarStackedChart = (function() {

    // Variables

    var $chart = $('#chart-bar-stacked');


    // Methods

    function init($this) {

        // Only for demo purposes - return a random number to generate datasets
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };


        // Chart data

        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: Charts.colors.theme['danger'],
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: 'Dataset 2',
                backgroundColor: Charts.colors.theme['primary'],
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }, {
                label: 'Dataset 3',
                backgroundColor: Charts.colors.theme['success'],
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }]

        };


        // Options

        var options = {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }


        // Init chart

        var barStackedChart = new Chart($this, {
            type: 'bar',
            data: data,
            options: options
        });

        // Save to jQuery object

        $this.data('chart', barStackedChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

//
// Charts
//

'use strict';

//
// Doughnut chart
//

var DoughnutChart = (function() {

    // Variables

    var $chart = $('#chart-doughnut');


    // Methods

    function init($this) {
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var doughnutChart = new Chart($this, {
            type: 'doughnut',
            data: {
                labels: [
                    'Danger',
                    'Warning',
                    'Success',
                    'Primary',
                    'Info'
                ],
                datasets: [{
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    backgroundColor: [
                        Charts.colors.theme['danger'],
                        Charts.colors.theme['warning'],
                        Charts.colors.theme['success'],
                        Charts.colors.theme['primary'],
                        Charts.colors.theme['info'],
                    ],
                    label: 'Dataset 1'
                }],
            },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });

        // Save to jQuery object

        $this.data('chart', doughnutChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

//
// Charts
//

'use strict';

//
// Doughnut chart
//

var PieChart = (function() {

    // Variables

    var $chart = $('#chart-pie');


    // Methods

    function init($this) {
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100);
        };

        var pieChart = new Chart($this, {
            type: 'pie',
            data: {
                labels: [
                    'Danger',
                    'Warning',
                    'Success',
                    'Primary',
                    'Info'
                ],
                datasets: [{
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    backgroundColor: [
                        Charts.colors.theme['danger'],
                        Charts.colors.theme['warning'],
                        Charts.colors.theme['success'],
                        Charts.colors.theme['primary'],
                        Charts.colors.theme['info'],
                    ],
                    label: 'Dataset 1'
                }],
            },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });

        // Save to jQuery object

        $this.data('chart', pieChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

//
// Charts
//

'use strict';

//
// Points chart
//

var PointsChart = (function() {

    // Variables

    var $chart = $('#chart-points');


    // Methods

    function init($this) {
        var salesChart = new Chart($this, {
            type: 'line',
            options: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: Charts.colors.gray[200],
                            zeroLineColor: Charts.colors.gray[200]
                        },
                        ticks: {

                        }
                    }]
                }
            },
            data: {
                labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Performance',
                    data: [10, 18, 28, 23, 28, 40, 36, 46, 52],
                    pointRadius: 10,
                    pointHoverRadius: 15,
                    showLine: false
                }]
            }
        });

        // Save to jQuery object

        $this.data('chart', salesChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

//
// Charts
//

'use strict';

//
// Sales chart
//

var SalesChart = (function() {

    // Variables

    var $chart = $('#chart-sales-dark');


    // Methods

    function init($this) {
        var salesChart = new Chart($this, {
            type: 'line',
            options: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: Charts.colors.gray[700],
                            zeroLineColor: Charts.colors.gray[700]
                        },
                        ticks: {

                        }
                    }]
                }
            },
            data: {
                labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Performance',
                    data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
                }]
            }
        });

        // Save to jQuery object

        $this.data('chart', salesChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

//
// Charts
//

'use strict';

//
// Sales chart
//

var SalesChart = (function() {

    // Variables

    var $chart = $('#chart-sales');


    // Methods

    function init($this) {
        var salesChart = new Chart($this, {
            type: 'line',
            options: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: Charts.colors.gray[200],
                            zeroLineColor: Charts.colors.gray[200]
                        },
                        ticks: {

                        }
                    }]
                }
            },
            data: {
                labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Performance',
                    data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
                }]
            }
        });

        // Save to jQuery object

        $this.data('chart', salesChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

//
// Bars chart
//

var BarsChart = (function() {

    //
    // Variables
    //

    var $chart = $('#chart-bars');


    //
    // Methods
    //

    // Init chart
    function initChart($chart) {

        // Create chart
        var ordersChart = new Chart($chart, {
            type: 'bar',
            data: {
                labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Sales',
                    data: [25, 20, 30, 22, 17, 29]
                }]
            }
        });

        // Save to jQuery object
        $chart.data('chart', ordersChart);
    }


    // Init chart
    if ($chart.length) {
        initChart($chart);
    }

})();

//
// Charts
//

'use strict';

//
// Sales chart
//

var LineChart = (function() {

    // Variables

    var $chart = $('#chart-line');


    // Methods

    function init($this) {
        var salesChart = new Chart($this, {
            type: 'line',
            options: {
                scales: {
                    yAxes: [{
                        gridLines: {
                            color: Charts.colors.gray[200],
                            zeroLineColor: Charts.colors.gray[200]
                        },
                        ticks: {

                        }
                    }]
                }
            },
            data: {
                labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Performance',
                    data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
                }]
            }
        });

        // Save to jQuery object

        $this.data('chart', salesChart);

    };


    // Events

    if ($chart.length) {
        init($chart);
    }

})();

//
// Widget Calendar
//


if ($('[data-toggle="widget-calendar"]')[0]) {
    $('[data-toggle="widget-calendar"]').fullCalendar({
        contentHeight: 'auto',
        theme: false,
        buttonIcons: {
            prev: ' ni ni-bold-left',
            next: ' ni ni-bold-right'
        },
        header: {
            right: 'next',
            center: 'title, ',
            left: 'prev'
        },
        defaultDate: '2018-12-01',
        editable: true,
        events: [

            {
                title: 'Call with Dave',
                start: '2018-11-18',
                end: '2018-11-18',
                className: 'bg-red'
            },

            {
                title: 'Lunch meeting',
                start: '2018-11-21',
                end: '2018-11-22',
                className: 'bg-orange'
            },

            {
                title: 'All day conference',
                start: '2018-11-29',
                end: '2018-11-29',
                className: 'bg-green'
            },

            {
                title: 'Meeting with Mary',
                start: '2018-12-01',
                end: '2018-12-01',
                className: 'bg-blue'
            },

            {
                title: 'Winter Hackaton',
                start: '2018-12-03',
                end: '2018-12-03',
                className: 'bg-red'
            },

            {
                title: 'Digital event',
                start: '2018-12-07',
                end: '2018-12-09',
                className: 'bg-warning'
            },

            {
                title: 'Marketing event',
                start: '2018-12-10',
                end: '2018-12-10',
                className: 'bg-purple'
            },

            {
                title: 'Dinner with Family',
                start: '2018-12-19',
                end: '2018-12-19',
                className: 'bg-red'
            },

            {
                title: 'Black Friday',
                start: '2018-12-23',
                end: '2018-12-23',
                className: 'bg-blue'
            },

            {
                title: 'Cyber Week',
                start: '2018-12-02',
                end: '2018-12-02',
                className: 'bg-yellow'
            },

        ]
    });

    //Display Current Date as Calendar widget header
    var mYear = moment().format('YYYY');
    var mDay = moment().format('dddd, MMM D');
    $('.widget-calendar-year').html(mYear);
    $('.widget-calendar-day').html(mDay);
}

//
// Datatable
//

'use strict';

var DatatableBasic = (function() {

    // Variables

    var $dtBasic = $('#datatable-basic');


    // Methods

    function init($this) {

        // Basic options. For more options check out the Datatables Docs:
        // https://datatables.net/manual/options

        var options = {
            keys: !0,
            select: {
                style: "multi"
            },
            language: {
                paginate: {
                    previous: "<i class='fas fa-angle-left'>",
                    next: "<i class='fas fa-angle-right'>"
                }
            },
        };

        // Init the datatable

        var table = $this.on('init.dt', function() {
            $('div.dataTables_length select').removeClass('custom-select custom-select-sm');

        }).DataTable(options);
    }


    // Events

    if ($dtBasic.length) {
        init($dtBasic);
    }

})();

//
// Buttons Datatable
//

var DatatableButtons = (function() {

    // Variables

    var $dtButtons = $('#datatable-buttons');


    // Methods

    function init($this) {

        // For more options check out the Datatables Docs:
        // https://datatables.net/extensions/buttons/

        var buttons = ["copy", "print"];

        // Basic options. For more options check out the Datatables Docs:
        // https://datatables.net/manual/options

        var options = {

            lengthChange: !1,
            dom: 'Bfrtip',
            buttons: buttons,
            // select: {
            // 	style: "multi"
            // },
            language: {
                paginate: {
                    previous: "<i class='fas fa-angle-left'>",
                    next: "<i class='fas fa-angle-right'>"
                }
            }
        };

        // Init the datatable

        var table = $this.on('init.dt', function() {
            $('.dt-buttons .btn').removeClass('btn-secondary').addClass('btn-sm btn-default');
        }).DataTable(options);
    }


    // Events

    if ($dtButtons.length) {
        init($dtButtons);
    }

})();

//
// Dropzone
//

'use strict';
// var Dropzones = (function() {

// 	//
// 	// Variables
// 	//

// 	var $dropzone = $('[data-toggle="dropzone"]');
// 	var $dropzonePreview = $('.dz-preview');

// 	//
// 	// Methods
// 	//

// 	function init($this) {
// 		var multiple = ($this.data('dropzone-multiple') !== undefined) ? true : false;
// 		var preview = $('.dz-preview');
// 		var currentFile = undefined;

// 		// Init options
// 		var options = {
// 			headers: {
// 					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
// 				},
// 			url: $this.data('dropzone-url'),
// 			autoProcessQueue: false,
// 			thumbnailWidth: null,
// 			thumbnailHeight: null,
// 			previewsContainer: preview.get(0),
// 			previewTemplate: preview.html(),
// 			maxFiles: (!multiple) ? 1 : null,
// 			maxFilesize: 200,
// 			parallelUploads:10,
//             renameFile: function(file) {
//                 var dt = new Date();
//                 var time = dt.getTime();
//                return time+file.name;
//             },
//             acceptedFiles: ".jpeg,.jpg,.png,.gif",
//             timeout: 50000,
//             removedfile: function(file)
//             {

//                 var name = file.upload.filename;
//                 $.ajax({
//                     headers: {
//                                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//                             },
//                     type: 'POST',
//                     url: $this.data('dropzone-url-remove'),
//                     data: {filename: name},
//                     success: function (data){
//                         console.log("File has been successfully removed!!");
//                     },
//                     error: function(e) {
//                         console.log(e);
//                     }});
//                     var fileRef;
//                     return (fileRef = file.previewElement) != null ?
//                     fileRef.parentNode.removeChild(file.previewElement) : void 0;
//             },
//        init: function() {
// 		   this.on("sending", function(file, xhr, formData){
//                         formData.append("filesize", "aa	");
//                 });
// 		   var submitButton = document.querySelector("#btn1")
// 			Dropzone = this;
// 			submitButton.addEventListener("click", function() {
// 				Dropzone.processQueue();
// 			});
// 	   },
//             success: function(file, response)
//             {
//                 // console.log(response);
//             },
//             error: function(file, response)
//             {
//                return false;
//             }
// 		}

// 		// Clear preview html
// 		preview.html('');

// 		// Init dropzone
// 		$this.dropzone(options)
// 	}

// 	function globalOptions() {
// 		Dropzone.autoDiscover = false;
// 	}


// 	//
// 	// Events
// 	//

// 	if ($dropzone.length) {

// 		// Set global options
// 		globalOptions();

// 		// Init dropzones
// 		$dropzone.each(function() {
// 			init($(this));
// 		});
// 	}

// })();

//
// Bootstrap Datepicker
//

'use strict';

var Datepicker = (function() {

    // Variables

    var $datepicker = $('.datepicker');


    // Methods

    function init($this) {
        var options = {
            disableTouchKeyboard: true,
            autoclose: false
        };

        $this.datepicker(options);
    }


    // Events

    if ($datepicker.length) {
        $datepicker.each(function() {
            init($(this));
        });
    }

})();

//
// Form control
//

'use strict';

var noUiSlider = (function() {

    // Variables

    // var $sliderContainer = $('.input-slider-container'),
    // 		$slider = $('.input-slider'),
    // 		$sliderId = $slider.attr('id'),
    // 		$sliderMinValue = $slider.data('range-value-min');
    // 		$sliderMaxValue = $slider.data('range-value-max');;


    // // Methods
    //
    // function init($this) {
    // 	$this.on('focus blur', function(e) {
    //       $this.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    //   }).trigger('blur');
    // }
    //
    //
    // // Events
    //
    // if ($input.length) {
    // 	init($input);
    // }



    if ($(".input-slider-container")[0]) {
        $('.input-slider-container').each(function() {

            var slider = $(this).find('.input-slider');
            var sliderId = slider.attr('id');
            var minValue = slider.data('range-value-min');
            var maxValue = slider.data('range-value-max');

            var sliderValue = $(this).find('.range-slider-value');
            var sliderValueId = sliderValue.attr('id');
            var startValue = sliderValue.data('range-value-low');

            var c = document.getElementById(sliderId),
                d = document.getElementById(sliderValueId);

            noUiSlider.create(c, {
                start: [parseInt(startValue)],
                connect: [true, false],
                //step: 1000,
                range: {
                    'min': [parseInt(minValue)],
                    'max': [parseInt(maxValue)]
                }
            });

            c.noUiSlider.on('update', function(a, b) {
                d.textContent = a[b];
            });
        })
    }

    if ($("#input-slider-range")[0]) {
        var c = document.getElementById("input-slider-range"),
            d = document.getElementById("input-slider-range-value-low"),
            e = document.getElementById("input-slider-range-value-high"),
            f = [d, e];

        noUiSlider.create(c, {
            start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
            connect: !0,
            range: {
                min: parseInt(c.getAttribute('data-range-value-min')),
                max: parseInt(c.getAttribute('data-range-value-max'))
            }
        }), c.noUiSlider.on("update", function(a, b) {
            f[b].textContent = a[b]
        })
    }

})();

//
// Scrollbar
//

'use strict';

var Scrollbar = (function() {

    // Variables

    var $scrollbar = $('.scrollbar-inner');


    // Methods

    function init() {
        $scrollbar.scrollbar().scrollLock()
    }


    // Events

    if ($scrollbar.length) {
        init();
    }

})();

//
// Fullcalendar
//

'use strict';

var Fullcalendar = (function() {

    // Variables

    var $calendar = $('[data-toggle="calendar"]');

    //
    // Methods
    //

    // Init
    function init($this) {

        // Calendar events

        var events = [

                {
                    id: 1,
                    title: 'Call with Dave',
                    start: '2018-11-18',
                    allDay: true,
                    className: 'bg-red',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 2,
                    title: 'Lunch meeting',
                    start: '2018-11-21',
                    allDay: true,
                    className: 'bg-orange',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 3,
                    title: 'All day conference',
                    start: '2018-11-29',
                    allDay: true,
                    className: 'bg-green',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 4,
                    title: 'Meeting with Mary',
                    start: '2018-12-01',
                    allDay: true,
                    className: 'bg-blue',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 5,
                    title: 'Winter Hackaton',
                    start: '2018-12-03',
                    allDay: true,
                    className: 'bg-red',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 6,
                    title: 'Digital event',
                    start: '2018-12-07',
                    allDay: true,
                    className: 'bg-warning',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 7,
                    title: 'Marketing event',
                    start: '2018-12-10',
                    allDay: true,
                    className: 'bg-purple',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 8,
                    title: 'Dinner with Family',
                    start: '2018-12-19',
                    allDay: true,
                    className: 'bg-red',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 9,
                    title: 'Black Friday',
                    start: '2018-12-23',
                    allDay: true,
                    className: 'bg-blue',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

                {
                    id: 10,
                    title: 'Cyber Week',
                    start: '2018-12-02',
                    allDay: true,
                    className: 'bg-yellow',
                    description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
                },

            ],


            // Full calendar options
            // For more options read the official docs: https://fullcalendar.io/docs

            options = {
                header: {
                    right: '',
                    center: '',
                    left: ''
                },
                buttonIcons: {
                    prev: 'calendar--prev',
                    next: 'calendar--next'
                },
                theme: false,
                selectable: true,
                selectHelper: true,
                editable: true,
                events: events,

                dayClick: function(date) {
                    var isoDate = moment(date).toISOString();
                    $('#new-event').modal('show');
                    $('.new-event--title').val('');
                    $('.new-event--start').val(isoDate);
                    $('.new-event--end').val(isoDate);
                },

                viewRender: function(view) {
                    var calendarDate = $this.fullCalendar('getDate');
                    var calendarMonth = calendarDate.month();

                    //Set data attribute for header. This is used to switch header images using css
                    // $this.find('.fc-toolbar').attr('data-calendar-month', calendarMonth);

                    //Set title in page header
                    $('.fullcalendar-title').html(view.title);
                },

                // Edit calendar event action

                eventClick: function(event, element) {
                    $('#edit-event input[value=' + event.className + ']').prop('checked', true);
                    $('#edit-event').modal('show');
                    $('.edit-event--id').val(event.id);
                    $('.edit-event--title').val(event.title);
                    $('.edit-event--description').val(event.description);
                }
            };

        // Initalize the calendar plugin
        $this.fullCalendar(options);


        //
        // Calendar actions
        //


        //Add new Event

        $('body').on('click', '.new-event--add', function() {
            var eventTitle = $('.new-event--title').val();

            // Generate ID
            var GenRandom = {
                Stored: [],
                Job: function() {
                    var newId = Date.now().toString().substr(6); // or use any method that you want to achieve this string

                    if (!this.Check(newId)) {
                        this.Stored.push(newId);
                        return newId;
                    }
                    return this.Job();
                },
                Check: function(id) {
                    for (var i = 0; i < this.Stored.length; i++) {
                        if (this.Stored[i] == id) return true;
                    }
                    return false;
                }
            };

            if (eventTitle != '') {
                $this.fullCalendar('renderEvent', {
                    id: GenRandom.Job(),
                    title: eventTitle,
                    start: $('.new-event--start').val(),
                    end: $('.new-event--end').val(),
                    allDay: true,
                    className: $('.event-tag input:checked').val()
                }, true);

                $('.new-event--form')[0].reset();
                $('.new-event--title').closest('.form-group').removeClass('has-danger');
                $('#new-event').modal('hide');
            } else {
                $('.new-event--title').closest('.form-group').addClass('has-danger');
                $('.new-event--title').focus();
            }
        });


        //Update/Delete an Event
        $('body').on('click', '[data-calendar]', function() {
            var calendarAction = $(this).data('calendar');
            var currentId = $('.edit-event--id').val();
            var currentTitle = $('.edit-event--title').val();
            var currentDesc = $('.edit-event--description').val();
            var currentClass = $('#edit-event .event-tag input:checked').val();
            var currentEvent = $this.fullCalendar('clientEvents', currentId);

            //Update
            if (calendarAction === 'update') {
                if (currentTitle != '') {
                    currentEvent[0].title = currentTitle;
                    currentEvent[0].description = currentDesc;
                    currentEvent[0].className = [currentClass];

                    console.log(currentClass);
                    $this.fullCalendar('updateEvent', currentEvent[0]);
                    $('#edit-event').modal('hide');
                } else {
                    $('.edit-event--title').closest('.form-group').addClass('has-error');
                    $('.edit-event--title').focus();
                }
            }

            //Delete
            if (calendarAction === 'delete') {
                $('#edit-event').modal('hide');

                // Show confirm dialog
                setTimeout(function() {
                    swal({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        type: 'warning',
                        showCancelButton: true,
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-danger',
                        confirmButtonText: 'Yes, delete it!',
                        cancelButtonClass: 'btn btn-secondary'
                    }).then((result) => {
                        if (result.value) {
                            // Delete event
                            $this.fullCalendar('removeEvents', currentId);

                            // Show confirmation
                            swal({
                                title: 'Deleted!',
                                text: 'The event has been deleted.',
                                type: 'success',
                                buttonsStyling: false,
                                confirmButtonClass: 'btn btn-primary'
                            });
                        }
                    })
                }, 200);
            }
        });


        //Calendar views switch
        $('body').on('click', '[data-calendar-view]', function(e) {
            e.preventDefault();

            $('[data-calendar-view]').removeClass('active');
            $(this).addClass('active');

            var calendarView = $(this).attr('data-calendar-view');
            $this.fullCalendar('changeView', calendarView);
        });


        //Calendar Next
        $('body').on('click', '.fullcalendar-btn-next', function(e) {
            e.preventDefault();
            $this.fullCalendar('next');
        });


        //Calendar Prev
        $('body').on('click', '.fullcalendar-btn-prev', function(e) {
            e.preventDefault();
            $this.fullCalendar('prev');
        });
    }


    //
    // Events
    //

    // Init
    if ($calendar.length) {
        init($calendar);
    }

})();

//
// Quill.js
//

'use strict';

var VectorMap = (function() {

    // Variables

    var $vectormap = $('[data-toggle="vectormap"]'),
        colors = {
            gray: {
                100: '#f6f9fc',
                200: '#e9ecef',
                300: '#dee2e6',
                400: '#ced4da',
                500: '#adb5bd',
                600: '#8898aa',
                700: '#525f7f',
                800: '#32325d',
                900: '#212529'
            },
            theme: {
                'default': '#172b4d',
                'primary': '#5e72e4',
                'secondary': '#f4f5f7',
                'info': '#11cdef',
                'success': '#2dce89',
                'danger': '#f5365c',
                'warning': '#fb6340'
            },
            black: '#12263F',
            white: '#FFFFFF',
            transparent: 'transparent',
        };

    // Methods

    function init($this) {

        // Get placeholder
        var map = $this.data('map'),

            series = {
                "AU": 760,
                "BR": 550,
                "CA": 120,
                "DE": 1300,
                "FR": 540,
                "GB": 690,
                "GE": 200,
                "IN": 200,
                "RO": 600,
                "RU": 300,
                "US": 2920,
            },

            options = {
                map: map,
                zoomOnScroll: false,
                scaleColors: ['#f00', '#0071A4'],
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                backgroundColor: colors.transparent,
                regionStyle: {
                    initial: {
                        fill: colors.gray[200],
                        "fill-opacity": .8,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    },
                    hover: {
                        fill: colors.gray[300],
                        "fill-opacity": .8,
                        cursor: 'pointer'
                    },
                    selected: {
                        fill: 'yellow'
                    },
                    selectedHover: {}
                },
                markerStyle: {
                    initial: {
                        fill: colors.theme.warning,
                        "stroke-width": 0
                    },
                    hover: {
                        fill: colors.theme.info,
                        "stroke-width": 0
                    },
                },
                markers: [{
                        latLng: [41.90, 12.45],
                        name: 'Vatican City'
                    },
                    {
                        latLng: [43.73, 7.41],
                        name: 'Monaco'
                    },
                    {
                        latLng: [35.88, 14.5],
                        name: 'Malta'
                    },
                    {
                        latLng: [1.3, 103.8],
                        name: 'Singapore'
                    },
                    {
                        latLng: [1.46, 173.03],
                        name: 'Kiribati'
                    },
                    {
                        latLng: [-21.13, -175.2],
                        name: 'Tonga'
                    },
                    {
                        latLng: [15.3, -61.38],
                        name: 'Dominica'
                    },
                    {
                        latLng: [-20.2, 57.5],
                        name: 'Mauritius'
                    },
                    {
                        latLng: [26.02, 50.55],
                        name: 'Bahrain'
                    }
                ],
                series: {
                    regions: [{
                        values: series,
                        scale: [colors.gray[400], colors.gray[500]],
                        normalizeFunction: 'polynomial'
                    }]
                },
            };

        // Init map
        $this.vectorMap(options);

        // Customize controls
        $this.find('.jvectormap-zoomin').addClass('btn btn-sm btn-primary');
        $this.find('.jvectormap-zoomout').addClass('btn btn-sm btn-primary');

    }

    // Events

    if ($vectormap.length) {
        $vectormap.each(function() {
            init($(this));
        });
    }

})();

//
// Lavalamp
//

'use strict';

var Lavalamp = (function() {

    // Variables

    var $nav = $('[data-toggle="lavalamp"]');


    // Methods

    function init($this) {
        var options = {
            setOnClick: false,
            enableHover: true,
            margins: true,
            autoUpdate: true,
            duration: 200
        };

        $this.lavalamp(options);
    }


    // Events

    if ($nav.length) {
        $nav.each(function() {
            init($(this));
        });
    }

})();

//
// List.js
//

'use strict';

var SortList = (function() {

    //  //
    // Variables
    //  //

    var $lists = $('[data-toggle="list"]');
    var $listsSort = $('[data-sort]');


    //
    // Methods
    //

    // Init
    function init($list) {
        new List($list.get(0), getOptions($list));
    }

    // Get options
    function getOptions($list) {
        var options = {
            valueNames: $list.data('list-values'),
            listClass: $list.data('list-class') ? $list.data('list-class') : 'list'
        }

        return options;
    }


    //
    // Events
    //

    // Init
    if ($lists.length) {
        $lists.each(function() {
            init($(this));
        });
    }

    // Sort
    $listsSort.on('click', function() {
        return false;
    });

})();

//
// Notify
// init of the bootstrap-notify plugin
//

'use strict';

var Notify = (function() {

    // Variables

    var $notifyBtn = $('[data-toggle="notify"]');


    // Methods

    function notify(placement, align, icon, type, animIn, animOut) {
        $.notify({
            icon: icon,
            title: ' Bootstrap Notify',
            message: 'Turning standard Bootstrap alerts into awesome notifications',
            url: ''
        }, {
            element: 'body',
            type: type,
            allow_dismiss: true,
            placement: {
                from: placement,
                align: align
            },
            offset: {
                x: 15, // Keep this as default
                y: 15 // Unless there'll be alignment issues as this value is targeted in CSS
            },
            spacing: 10,
            z_index: 1080,
            delay: 2500,
            timer: 25000,
            url_target: '_blank',
            mouse_over: false,
            animate: {
                // enter: animIn,
                // exit: animOut
                enter: animIn,
                exit: animOut
            },
            template: '<div data-notify="container" class="alert alert-dismissible alert-{0} alert-notify" role="alert">' +
                '<span class="alert-icon" data-notify="icon"></span> ' +
                '<div class="alert-text"</div> ' +
                '<span class="alert-title" data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '</div>' +
                // '<div class="progress" data-notify="progressbar">' +
                // '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                // '</div>' +
                // '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '<button type="button" class="close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '</div>'
        });
    }

    // Events

    if ($notifyBtn.length) {
        $notifyBtn.on('click', function(e) {
            e.preventDefault();

            var placement = $(this).attr('data-placement');
            var align = $(this).attr('data-align');
            var icon = $(this).attr('data-icon');
            var type = $(this).attr('data-type');
            var animIn = $(this).attr('data-animation-in');
            var animOut = $(this).attr('data-animation-out');

            notify(placement, align, icon, type, animIn, animOut);
        })
    }

})();

//
// Onscreen - viewport checker
//

'use strict';

var OnScreen = (function() {

    // Variables

    var $onscreen = $('[data-toggle="on-screen"]');


    // Methods

    function init($this) {
        var options = {
            container: window,
            direction: 'vertical',
            doIn: function() {
                //alert();
            },
            doOut: function() {
                // Do something to the matched elements as they get off scren
            },
            tolerance: 200,
            throttle: 50,
            toggleClass: 'on-screen',
            debug: false
        };

        $this.onScreen(options);
    }


    // Events

    if ($onscreen.length) {
        init($onscreen);
    }

})();

//
// Quill.js
//

'use strict';

// var QuillEditor = (function() {

// 	// Variables

// 	var $quill = $('[data-toggle="quill"]');


// 	// Methods

// 	function init($this) {

// 		// Get placeholder
// 		var placeholder = $this.data('quill-placeholder');

// 		// Init editor
// 		var quill = new Quill($this.get(0), {
// 			modules: {

// 				toolbar: [
// 					['bold', 'italic'],
// 					['link', 'blockquote', 'code','video'],
// 					[{
// 						'list': 'ordered'
// 					}, {
// 						'list': 'bullet'
// 					}]
// 				],imageResize: {
//           displaySize: true
//         },
// 			},
// 			placeholder: placeholder,
// 			theme: 'snow'
// 		});

// 	}

// 	// Events

// 	if ($quill.length) {
// 		$quill.each(function() {
// 			init($(this));
// 		});
// 	}

// })();

//
// Select2.js
//

'use strict';

var Select2 = (function() {

    //
    // Variables
    //

    var $select = $('[data-toggle="select"]');


    //
    // Methods
    //

    function init($this) {
        var options = {
            // dropdownParent: $this.closest('.modal').length ? $this.closest('.modal') : $(document.body),
            // minimumResultsForSearch: $this.data('minimum-results-for-search'),
            // templateResult: formatAvatar
        };

        $this.select2(options);
    }


    //
    // Events
    //

    if ($select.length) {

        // Init selects
        $select.each(function() {
            init($(this));
        });
    }

})();

//
// Tags input
//

'use strict';

var Tags = (function() {

    //
    // Variables
    //

    var $tags = $('[data-toggle="tags"]');


    //
    // Methods
    //

    function init($this) {

        var options = {
            tagClass: 'badge badge-primary'
        };

        $this.tagsinput(options);
    }


    //
    // Events
    //

    if ($tags.length) {

        // Init selects
        $tags.each(function() {
            init($(this));
        });
    }

})();