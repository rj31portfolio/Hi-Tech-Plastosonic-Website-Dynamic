! function(t) {
    var e = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: "",
            responsiveWidth: !1
        },
        i = t(window),
        s = t(document),
        r = [],
        n = i.height(),
        o = function() {
            for (var e = i.scrollTop(), o = s.height(), a = o - n, c = e > a ? a - e : 0, p = 0; p < r.length; p++) {
                var l = r[p];
                if (e <= l.stickyWrapper.offset().top - l.topSpacing - c) null !== l.currentTop && (l.stickyElement.css("position", "").css("top", ""), l.stickyElement.trigger("sticky-end", [l]).parent().removeClass(l.className), l.currentTop = null);
                else {
                    var h = o - l.stickyElement.outerHeight() - l.topSpacing - l.bottomSpacing - e - c;
                    h < 0 ? h += l.topSpacing : h = l.topSpacing, l.currentTop != h && (l.stickyElement.css("position", "fixed").css("top", h), void 0 !== l.getWidthFrom && l.stickyElement.css("width", t(l.getWidthFrom).width()), l.stickyElement.trigger("sticky-start", [l]).parent().addClass(l.className), l.currentTop = h)
                }
            }
        },
        a = function() {
            n = i.height();
            for (var e = 0; e < r.length; e++) {
                var s = r[e];
                void 0 !== s.getWidthFrom && !0 === s.responsiveWidth && s.stickyElement.css("width", t(s.getWidthFrom).width())
            }
        },
        c = {
            init: function(i) {
                var s = t.extend({}, e, i);
                return this.each(function() {
                    var i = t(this),
                        n = i.attr("id");
                    e.wrapperClassName;
                    var o = t("<div></div>").attr("id", n + "-sticky-wrapper").addClass(s.wrapperClassName);
                    i.wrapAll(o), s.center && i.parent().css({
                        width: i.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), "right" == i.css("float") && i.css({
                        float: "none"
                    }).parent().css({
                        float: "right"
                    });
                    var a = i.parent();
                    a.css("height", i.outerHeight()), r.push({
                        topSpacing: s.topSpacing,
                        bottomSpacing: s.bottomSpacing,
                        stickyElement: i,
                        currentTop: null,
                        stickyWrapper: a,
                        className: s.className,
                        getWidthFrom: s.getWidthFrom,
                        responsiveWidth: s.responsiveWidth
                    })
                })
            },
            update: o,
            unstick: function(e) {
                return this.each(function() {
                    for (var e = t(this), i = -1, s = 0; s < r.length; s++) r[s].stickyElement.get(0) == e.get(0) && (i = s); - 1 != i && (r.splice(i, 1), e.unwrap(), e.removeAttr("style"))
                })
            }
        };
    window.addEventListener ? (window.addEventListener("scroll", o, !1), window.addEventListener("resize", a, !1)) : window.attachEvent && (window.attachEvent("onscroll", o), window.attachEvent("onresize", a)), t.fn.sticky = function(e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : c.init.apply(this, arguments)
    }, t.fn.unstick = function(e) {
        return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.sticky") : c.unstick.apply(this, arguments)
    }, t(function() {
        setTimeout(o, 0)
    })
}(jQuery);