window.Modernizr = function(e, t, n) {
    var r, o, a, i = {},
        c = t.documentElement,
        s = "modernizr",
        u = t.createElement(s),
        l = u.style,
        d = t.createElement("input"),
        f = {}.toString,
        m = " -webkit- -moz- -o- -ms- ".split(" "),
        p = "Webkit Moz O ms",
        h = p.split(" "),
        g = p.toLowerCase().split(" "),
        v = {
            svg: "http://www.w3.org/2000/svg"
        },
        y = {},
        b = {},
        E = {},
        x = [],
        w = x.slice,
        $ = function(e, n, r, o) {
            var a, i, u, l, d = t.createElement("div"),
                f = t.body,
                m = f || t.createElement("body");
            if (parseInt(r, 10))
                for (; r--;)(u = t.createElement("div")).id = o ? o[r] : s + (r + 1), d.appendChild(u);
            return a = ["&#173;", '<style id="s', s, '">', e, "</style>"].join(""), d.id = s, (f ? d : m).innerHTML += a, m.appendChild(d), f || (m.style.background = "", m.style.overflow = "hidden", l = c.style.overflow, c.style.overflow = "hidden", c.appendChild(m)), i = n(d, e), f ? d.parentNode.removeChild(d) : (m.parentNode.removeChild(m), c.style.overflow = l), !!i
        },
        C = function(t) {
            var n, r = e.matchMedia || e.msMatchMedia;
            return r ? r(t).matches : ($("@media " + t + " { #" + s + " { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), n)
        },
        k = (r = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        }, function e(o, a) {
            a = a || t.createElement(r[o] || "div");
            var i = (o = "on" + o) in a;
            return !i && (a.setAttribute || (a = t.createElement("div")), a.setAttribute && a.removeAttribute && (a.setAttribute(o, ""), i = T(a[o], "function"), T(a[o], "undefined") || (a[o] = n), a.removeAttribute(o))), a = null, i
        }),
        S = {}.hasOwnProperty;

    function _(e) {
        l.cssText = e
    }

    function T(e, t) {
        return typeof e === t
    }

    function N(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function M(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!N(o, "-") && n !== l[o]) return "pfx" != t || o
        }
        return !1
    }

    function P(e, t, r) {
        var o = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + h.join(o + " ") + o).split(" ");
        return T(t, "string") || T(t, "undefined") ? M(a, t) : function e(t, r, o) {
            for (var a in t) {
                var i = r[t[a]];
                if (i !== n) {
                    if (!1 === o) return t[a];
                    if (T(i, "function")) return i.bind(o || r);
                    return i
                }
            }
            return !1
        }(a = (e + " " + g.join(o + " ") + o).split(" "), t, r)
    }
    for (var j in a = T(S, "undefined") || T(S.call, "undefined") ? function(e, t) {
            return t in e && T(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return S.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function e(t) {
            var n = this;
            if ("function" != typeof n) throw TypeError();
            var r = w.call(arguments, 1),
                o = function() {
                    if (!(this instanceof o)) return n.apply(t, r.concat(w.call(arguments)));
                    var e = function() {};
                    e.prototype = n.prototype;
                    var a = new e,
                        i = n.apply(a, r.concat(w.call(arguments)));
                    return Object(i) === i ? i : a
                };
            return o
        }), y.flexbox = function() {
            return P("flexWrap")
        }, y.flexboxlegacy = function() {
            return P("boxDirection")
        }, y.canvas = function() {
            var e = t.createElement("canvas");
            return !!(e.getContext && e.getContext("2d"))
        }, y.canvastext = function() {
            return !!(i.canvas && T(t.createElement("canvas").getContext("2d").fillText, "function"))
        }, y.webgl = function() {
            return !!e.WebGLRenderingContext
        }, y.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : $(["@media (", m.join("touch-enabled),("), s, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        }, y.geolocation = function() {
            return "geolocation" in navigator
        }, y.postmessage = function() {
            return !!e.postMessage
        }, y.websqldatabase = function() {
            return !!e.openDatabase
        }, y.indexedDB = function() {
            return !!P("indexedDB", e)
        }, y.hashchange = function() {
            return k("hashchange", e) && (n === t.documentMode || t.documentMode > 7)
        }, y.history = function() {
            return !!(e.history && history.pushState)
        }, y.draganddrop = function() {
            var e = t.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, y.websockets = function() {
            return "WebSocket" in e || "MozWebSocket" in e
        }, y.rgba = function() {
            return _("background-color:rgba(150,255,150,.5)"), N(l.backgroundColor, "rgba")
        }, y.hsla = function() {
            return _("background-color:hsla(120,40%,100%,.5)"), N(l.backgroundColor, "rgba") || N(l.backgroundColor, "hsla")
        }, y.multiplebgs = function() {
            return _("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(l.background)
        }, y.backgroundsize = function() {
            return P("backgroundSize")
        }, y.borderimage = function() {
            return P("borderImage")
        }, y.borderradius = function() {
            return P("borderRadius")
        }, y.boxshadow = function() {
            return P("boxShadow")
        }, y.textshadow = function() {
            return "" === t.createElement("div").style.textShadow
        }, y.opacity = function() {
            return _(m.join("opacity:.55;") + ""), /^0.55$/.test(l.opacity)
        }, y.cssanimations = function() {
            return P("animationName")
        }, y.csscolumns = function() {
            return P("columnCount")
        }, y.cssgradients = function() {
            var e = "background-image:";
            return _((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + m.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), N(l.backgroundImage, "gradient")
        }, y.cssreflections = function() {
            return P("boxReflect")
        }, y.csstransforms = function() {
            return !!P("transform")
        }, y.csstransforms3d = function() {
            var e = !!P("perspective");
            return e && "webkitPerspective" in c.style && $("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), e
        }, y.csstransitions = function() {
            return P("transition")
        }, y.fontface = function() {
            var e;
            return $('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
                var o = t.getElementById("smodernizr"),
                    a = o.sheet || o.styleSheet,
                    i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
                e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0])
            }), e
        }, y.generatedcontent = function() {
            var e;
            return $(["#", s, "{font:0/0 a}#", s, ':after{content:"', ":)", '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                e = t.offsetHeight >= 3
            }), e
        }, y.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, y.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, y.localstorage = function() {
            try {
                return localStorage.setItem(s, s), localStorage.removeItem(s), !0
            } catch (e) {
                return !1
            }
        }, y.sessionstorage = function() {
            try {
                return sessionStorage.setItem(s, s), sessionStorage.removeItem(s), !0
            } catch (e) {
                return !1
            }
        }, y.webworkers = function() {
            return !!e.Worker
        }, y.applicationcache = function() {
            return !!e.applicationCache
        }, y.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(v.svg, "svg").createSVGRect
        }, y.inlinesvg = function() {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == v.svg
        }, y.smil = function() {
            return !!t.createElementNS && /SVGAnimate/.test(f.call(t.createElementNS(v.svg, "animate")))
        }, y.svgclippaths = function() {
            return !!t.createElementNS && /SVGClipPath/.test(f.call(t.createElementNS(v.svg, "clipPath")))
        }, y) a(y, j) && (i[o = j.toLowerCase()] = y[j](), x.push((i[o] ? "" : "no-") + o));
    return i.input || (i.input = function(n) {
        for (var r = 0, o = n.length; r < o; r++) E[n[r]] = n[r] in d;
        return E.list && (E.list = !!(t.createElement("datalist") && e.HTMLDataListElement)), E
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), i.inputtypes = function(e) {
        for (var r, o, a, i = 0, s = e.length; i < s; i++) d.setAttribute("type", o = e[i]), (r = "text" !== d.type) && (d.value = ":)", d.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && n !== d.style.WebkitAppearance ? (c.appendChild(d), r = (a = t.defaultView).getComputedStyle && "textfield" !== a.getComputedStyle(d, null).WebkitAppearance && 0 !== d.offsetHeight, c.removeChild(d)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? d.checkValidity && !1 === d.checkValidity() : ":)" != d.value)), b[e[i]] = !!r;
        return b
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))), i.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var r in e) a(e, r) && i.addTest(r, e[r]);
        else {
            if (n !== i[e = e.toLowerCase()]) return i;
            t = "function" == typeof t ? t() : t, c.className += " " + (t ? "" : "no-") + e, i[e] = t
        }
        return i
    }, _(""), u = d = null, ! function(e, t) {
        var n, r, o = e.html5 || {},
            a = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            i = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            c = "_html5shiv",
            s = 0,
            u = {};

        function l() {
            var e = p.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function d(e) {
            var t = u[e[c]];
            return t || (t = {}, s++, e[c] = s, u[s] = t), t
        }

        function f(e, n, o) {
            var c;
            return (n || (n = t), r) ? n.createElement(e) : (o || (o = d(n)), !(c = o.cache[e] ? o.cache[e].cloneNode() : i.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e)).canHaveChildren || a.test(e) || c.tagUrn ? c : o.frag.appendChild(c))
        }

        function m(e) {
            e || (e = t);
            var o, a, i, c, s, u = d(e);
            return !p.shivCSS || n || u.hasCSS || (u.hasCSS = (a = (o = e).createElement("p"), i = o.getElementsByTagName("head")[0] || o.documentElement, a.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", !!i.insertBefore(a.lastChild, i.firstChild))), r || (c = e, (s = u).cache || (s.cache = {}, s.createElem = c.createElement, s.createFrag = c.createDocumentFragment, s.frag = s.createFrag()), c.createElement = function(e) {
                return p.shivMethods ? f(e, c, s) : s.createElem(e)
            }, c.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/[\w\-]+/g, function(e) {
                return s.createElem(e), s.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(p, s.frag)), e
        }! function() {
            try {
                var e, o = t.createElement("a");
                o.innerHTML = "<xyz></xyz>", n = "hidden" in o, r = 1 == o.childNodes.length || (t.createElement("a"), e = t.createDocumentFragment(), void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement)
            } catch (a) {
                n = !0, r = !0
            }
        }();
        var p = {
            elements: o.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== o.shivCSS,
            supportsUnknownElements: r,
            shivMethods: !1 !== o.shivMethods,
            type: "default",
            shivDocument: m,
            createElement: f,
            createDocumentFragment: function e(n, o) {
                if (n || (n = t), r) return n.createDocumentFragment();
                for (var a = (o = o || d(n)).frag.cloneNode(), i = 0, c = l(), s = c.length; i < s; i++) a.createElement(c[i]);
                return a
            }
        };
        e.html5 = p, m(t)
    }(this, t), i._version = "2.7.1", i._prefixes = m, i._domPrefixes = g, i._cssomPrefixes = h, i.mq = C, i.hasEvent = k, i.testProp = function(e) {
        return M([e])
    }, i.testAllProps = P, i.testStyles = $, i.prefixed = function(e, t, n) {
        return t ? P(e, t, n) : P(e, "pfx")
    }, c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + x.join(" "), i
}(this, this.document);