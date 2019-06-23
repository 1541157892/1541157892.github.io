(function(e) {
    function t(t) {
        for (var s, r, o = t[0], l = t[1], c = t[2], u = 0, f = []; u < o.length; u++) r = o[u], n[r] && f.push(n[r][0]), n[r] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
        p && p(t);
        while (f.length) f.shift()();
        return i.push.apply(i, c || []), a()
    }

    function a() {
        for (var e, t = 0; t < i.length; t++) {
            for (var a = i[t], s = !0, o = 1; o < a.length; o++) {
                var l = a[o];
                0 !== n[l] && (s = !1)
            }
            s && (i.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }
    var s = {},
        n = { app: 0 },
        i = [];

    function r(t) { if (s[t]) return s[t].exports; var a = s[t] = { i: t, l: !1, exports: {} }; return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports }
    r.m = e, r.c = s, r.d = function(e, t, a) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, r.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var s in e) r.d(a, s, function(t) { return e[t] }.bind(null, s));
        return a
    }, r.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var c = 0; c < o.length; c++) t(o[c]);
    var p = l;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) { e.exports = a("56d7") },
    "2eb7": function(e, t, a) {
        "use strict";
        var s = a("fc57"),
            n = a.n(s);
        n.a
    },
    "32a8": function(e, t, a) {
        "use strict";
        var s = a("bdd9"),
            n = a.n(s);
        n.a
    },
    "4e2c": function(e, t, a) {},
    5682: function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("cadf"), a("551c"), a("f751"), a("097d");
        var s = a("2b0e"),
            n = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { attrs: { id: "app" } }, [a("div", { staticClass: "app__phone" }, [a("div", { staticClass: "phone__header" }, [2 == e.step || 3 == e.step ? a("div", { staticClass: "cancel__cta", on: { click: e.toHome } }, [e._v("Cancel")]) : e._e(), a("img", { attrs: { src: "/vuegram/dist/img/vue_gram_logo_cp.6eb5553c.png", alt: "" } }), 2 == e.step ? a("div", { staticClass: "next__cta", on: { click: e.next } }, [e._v("Next")]) : e._e(), 3 == e.step ? a("div", { staticClass: "next__cta", on: { click: e.share } }, [e._v("\n        Share\n      ")]) : e._e()]), a("app-phone-body", { attrs: { posts: e.postData, step: e.step, baseImg: e.result, filterName: e.filterName, filters: e.filters }, model: { value: e.caption, callback: function(t) { e.caption = t }, expression: "caption" } }), a("div", { staticClass: "phone__footer" }, [a("div", { staticClass: "home__cta", on: { click: e.toHome } }, [a("i", { staticClass: "fas fa-home fa-lg" })]), a("div", { staticClass: "upload__cta" }, [a("input", { attrs: { type: "file", id: "file", name: "file", disabled: 2 == e.step || 3 == e.step }, on: { change: e.upload } }), e._m(0)])])], 1)])
            },
            i = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("label", { attrs: { for: "file" } }, [a("i", { staticClass: "far fa-plus-square fa-lg" })])
            }],
            r = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "phone__body" }, [a("div", { directives: [{ name: "dragscroll", rawName: "v-dragscroll" }], staticClass: "feed" }, [a("transition-group", { attrs: { name: "fade", tag: "div" } }, [1 == e.step ? a("div", { key: e.step }, e._l(e.posts, function(e, t) { return a("app-vuegram-post", { key: t, attrs: { posts: e } }) }), 1) : 2 == e.step ? a("div", { key: e.step }, [a("app-filter", { attrs: { filters: e.filters, baseImg: e.baseImg, filterName: e.filterName } })], 1) : a("div", { key: e.step }, [a("div", { staticClass: "selected__image", class: e.filterName, style: { backgroundImage: "url(" + e.baseImg + ")" } }), a("div", { staticClass: "caption__container" }, [a("textarea", { attrs: { placeholder: "Write a caption" }, domProps: { value: e.value }, on: { input: e.changeCaption } })])])])], 1)])
            },
            o = [],
            l = (a("c5f6"), function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "vuegram__post" }, [a("div", { staticClass: "header level" }, [a("div", { staticClass: "level-left" }, [a("figure", { staticClass: "image is-32x32" }, [a("img", { attrs: { src: e.postData.userImage } })]), a("span", { staticClass: "username" }, [e._v(e._s(e.postData.username))])])]), a("div", { staticClass: "image__container", class: e.postData.filter, style: { backgroundImage: "url(" + e.postData.postImage + ")" }, on: { dblclick: e.watchLike } }), a("div", { staticClass: "content" }, [a("div", { staticClass: "heart" }, [a("i", { staticClass: "far fa-heart", class: { fas: this.postData.hasBeenLiked }, on: { click: e.watchLike } })]), a("p", { staticClass: "likes" }, [e._v(e._s(e.postData.likes))]), a("p", { staticClass: "caption" }, [a("span", [e._v(e._s(e.postData.username))]), e._v("\n      " + e._s(e.postData.caption) + "\n    ")])])])
            }),
            c = [],
            p = { props: { posts: { type: Object } }, data: function() { return { postData: this.posts } }, methods: { watchLike: function() { this.postData.hasBeenLiked ? --this.postData.likes : ++this.postData.likes, this.postData.hasBeenLiked = !this.postData.hasBeenLiked } } },
            u = p,
            f = (a("a2a1"), a("2877")),
            m = Object(f["a"])(u, l, c, !1, null, null, null),
            d = m.exports,
            h = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("div", { staticClass: "selected__image", class: e.filterName, style: { backgroundImage: "url(" + e.baseImg + ")" } }), a("div", { directives: [{ name: "dragscroll", rawName: "v-dragscroll" }], staticClass: "filter__container" }, e._l(e.filters, function(t, s) { return a("div", { key: t.name, staticClass: "filter__type" }, [a("p", [e._v(e._s(t.name))]), a("div", { staticClass: "img", class: t.name, style: { backgroundImage: "url(" + e.baseImg + ")" }, on: { click: function(t) { return e.selectFilter(s) } } })]) }), 0)])
            },
            g = [],
            v = (a("7f7f"), new s["a"]),
            _ = { props: { filterName: { type: String }, filters: { type: Array }, baseImg: { type: String } }, methods: { selectFilter: function(e) { v.$emit("changeFilter", this.filters[e].name) } } },
            b = _,
            y = Object(f["a"])(b, h, g, !1, null, null, null),
            k = y.exports,
            w = { data: function() { return { ftName: this.filterName } }, props: { value: { type: String }, filterName: { type: String }, filters: { type: Array }, baseImg: { type: String }, step: { type: Number }, posts: { type: Array } }, methods: { changeCaption: function(e) { this.$emit("input", e.target.value) } }, components: { appVuegramPost: d, appFilter: k } },
            C = w,
            I = (a("2eb7"), a("83b8"), a("7ecc"), Object(f["a"])(C, r, o, !1, null, null, null)),
            x = I.exports,
            j = [{ username: "liuluwei", userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg", postImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg", likes: 36, hasBeenLiked: !1, caption: "When you're ready for summer '18 ☀️", filter: "perpetua" }, { username: "cc", userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png", postImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg", likes: 20, hasBeenLiked: !1, caption: "Views from the six...", filter: "clarendon" }, { username: "ice", userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg", postImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg", likes: 49, hasBeenLiked: !1, caption: "Current mood 🐶", filter: "lofi" }],
            D = [{ name: "normal" }, { name: "clarendon" }, { name: "gingham" }, { name: "moon" }, { name: "lark" }, { name: "reyes" }, { name: "juno" }, { name: "slumber" }, { name: "aden" }, { name: "perpetua" }, { name: "mayfair" }, { name: "rise" }, { name: "hudson" }, { name: "valencia" }, { name: "xpro2" }, { name: "willow" }, { name: "lofi" }, { name: "inkwell" }, { name: "nashville" }],
            N = {
                data: function() { return { postData: j, filters: D, step: 1, filterName: "", result: "", caption: "" } },
                created: function() {
                    var e = this;
                    v.$on("changeFilter", function(t) { e.filterName = t })
                },
                methods: {
                    upload: function(e) {
                        var t = this,
                            a = e.target.files;
                        if (a.length && -1 != a[0].type.indexOf("image")) {
                            this.step = 2;
                            var s = new FileReader;
                            s.readAsDataURL(a[0]), s.onload = function(e) { t.result = e.target.result }
                        }
                    },
                    next: function() { this.step = 3 },
                    share: function() {
                        var e = { username: "Shifeifei", userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png", postImage: this.result, likes: 0, hasBeenLiked: !1, caption: this.caption, filter: this.filterName };
                        this.postData.unshift(e), this.toHome()
                    },
                    toHome: function() { this.step = 1, this.filterName = "", this.caption = "", this.result = "" }
                },
                components: { appPhoneBody: x }
            },
            O = N,
            L = (a("32a8"), Object(f["a"])(O, n, i, !1, null, null, null)),
            S = L.exports,
            B = a("5b6c"),
            P = a.n(B);
        console.log(P.a), s["a"].use(P.a), s["a"].config.productionTip = !1, new s["a"]({ render: function(e) { return e(S) } }).$mount("#app")
    },
    "5d0a": function(e, t, a) {},
    "7ecc": function(e, t, a) {
        "use strict";
        var s = a("4e2c"),
            n = a.n(s);
        n.a
    },
    "83b8": function(e, t, a) {
        "use strict";
        var s = a("5682"),
            n = a.n(s);
        n.a
    },
    a2a1: function(e, t, a) {
        "use strict";
        var s = a("5d0a"),
            n = a.n(s);
        n.a
    },
    bdd9: function(e, t, a) {},
    fc57: function(e, t, a) {}
});
//# sourceMappingURL=app.c2d44664.js.map