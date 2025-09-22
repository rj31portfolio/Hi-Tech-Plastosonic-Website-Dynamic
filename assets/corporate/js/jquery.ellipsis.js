/*!
 * jQuery.ellipsis
 * http://github.com/jjenzz/jquery.ellipsis
 * --------------------------------------------------------------------------
 * Copyright (c) 2013 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * adds a class to the last 'allowed' line of text so you can apply
 * text-overflow: ellipsis;
 */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    "use strict";
    var e = "ellipsis",
        n = '<span style="white-space: nowrap;">',
        s = {
            lines: "auto",
            ellipClass: "ellip",
            responsive: !1
        };

    function i(i, l) {
        var o, p, a, r, u, c, f, h, m = this,
            x = 0,
            v = [];

        function _() {
            if ("number" == typeof m.opts.lines && m.opts.lines < 2) {
                m.$el.addClass(m.opts.ellipLineClass);
                return
            }
            if (c = m.$cont.height(), !("auto" === m.opts.lines && m.$el.prop("scrollHeight") <= c) && o) {
                var e;
                f = t.trim(d(m.text)).split(/\s+/), m.$el.html(n + f.join("</span> " + n) + "</span>"), m.$el.find("span").each(o), null != p && (f[e = p] = '<span class="' + m.opts.ellipLineClass + '">' + f[e], f.push("</span>"), m.$el.html(f.join(" ")))
            }
        }

        function d(t) {
            return String(t).replace(/[&<>"'\/]/g, function(t) {
                return h[t]
            })
        }
        if (h = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, m.$cont = t(i), m.opts = t.extend({}, s, l), "auto" === m.opts.lines && (o = function(e, n) {
                var s = t(n),
                    i = s.position().top;
                if (u = u || s.height(), i === r ? v[x].push(s) : (r = i, v[x += 1] = [s]), i + u > c) return p = e - v[x - 1].length, !1
            }), "number" == typeof m.opts.lines && m.opts.lines > 1 && (o = function(e, n) {
                var s = t(n).position().top;
                if (s !== r && (r = s, x += 1), x === m.opts.lines) return p = e, !1
            }), m.opts.responsive) {
            var y = function() {
                v = [], x = 0, r = null, p = null, m.$el.html(d(m.text)), clearTimeout(a), a = setTimeout(_, 100)
            };
            t(window).on("resize." + e, y)
        }
        m.text = m.$cont.text(), m.opts.ellipLineClass = m.opts.ellipClass + "-line", m.$el = t('<span class="' + m.opts.ellipClass + '" />'), m.$el.text(m.text), m.$cont.empty().append(m.$el), _()
    }
    t.fn[e] = function(n) {
        return this.each(function() {
            try {
                t(this).data(e, new i(this, n))
            } catch (s) {
                window.console && console.error(e + ": " + s)
            }
        })
    }
});