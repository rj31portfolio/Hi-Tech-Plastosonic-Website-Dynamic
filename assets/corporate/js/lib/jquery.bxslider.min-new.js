(function(t) {
    var e = {},
        n = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            touchEnabled: !0,
            swipeThreshold: 30,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            video: !1,
            useCSS: !0,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !1,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function() {},
            onSlideBefore: function() {},
            onSlideAfter: function() {},
            onSlideNext: function() {},
            onSlidePrev: function() {}
        };
    t.fn.bxSlider = function(s) {
        if (0 != this.length) {
            if (this.length > 1) return this.each(function() {
                t(this).bxSlider(s)
            }), this;
            var o = {},
                r = this;
            e.el = this;
            var a = function() {
                    var e = 0,
                        n = t();
                    if ("vertical" == o.settings.mode || o.settings.adaptiveHeight) {
                        if (o.carousel) {
                            var s = 1 == o.settings.moveSlides ? o.active.index : o.active.index * g();
                            for (n = o.children.eq(s), i = 1; o.settings.maxSlides - 1 >= i; i++) n = s + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(s + i))
                        } else n = o.children.eq(o.active.index)
                    } else n = o.children;
                    return "vertical" == o.settings.mode ? (n.each(function() {
                        e += t(this).outerHeight()
                    }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), e
                },
                l = function() {
                    var t = o.settings.slideWidth,
                        e = o.viewport.width();
                    return 0 == o.settings.slideWidth ? t = e : e > o.maxThreshold ? t = (e - o.settings.slideMargin * (o.settings.maxSlides - 1)) / o.settings.maxSlides : o.minThreshold > e && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides), t
                },
                d = function() {
                    var t = 1;
                    if ("horizontal" == o.settings.mode) {
                        if (o.minThreshold > o.viewport.width()) t = o.settings.minSlides;
                        else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
                        else {
                            var e = o.children.first().width();
                            t = Math.floor(o.viewport.width() / e)
                        }
                    } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
                    return t
                },
                c = function() {
                    var t = 0;
                    if (o.settings.moveSlides > 0) {
                        if (o.settings.infiniteLoop) t = o.children.length / g();
                        else
                            for (var e = 0, n = 0; o.children.length > e;) ++t, e = n + d(), n += d() >= o.settings.moveSlides ? o.settings.moveSlides : d()
                    } else t = Math.ceil(o.children.length / d());
                    return t
                },
                g = function() {
                    return o.settings.moveSlides > 0 && d() >= o.settings.moveSlides ? o.settings.moveSlides : d()
                },
                u = function() {
                    if (o.active.last) {
                        if ("horizontal" == o.settings.mode) {
                            var t = o.children.last(),
                                e = t.position();
                            h(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                        } else if ("vertical" == o.settings.mode) {
                            var n = o.children.length - o.settings.minSlides,
                                e = o.children.eq(n).position();
                            h(-e.top, "reset", 0)
                        }
                    } else {
                        var e = o.children.eq(o.active.index * g()).position();
                        o.active.index == c() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? h(-e.left, "reset", 0) : "vertical" == o.settings.mode && h(-e.top, "reset", 0))
                    }
                },
                h = function(t, e, n, s) {
                    if (o.usingCSS) {
                        var a = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                        r.css("-" + o.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, a), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), C()
                        })) : "reset" == e ? r.css(o.animProp, a) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, a), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), h(s.resetValue, "reset", 0), z()
                        }))
                    } else {
                        var l = {};
                        l[o.animProp] = t, "slide" == e ? r.animate(l, n, o.settings.easing, function() {
                            C()
                        }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(l, speed, "linear", function() {
                            h(s.resetValue, "reset", 0), z()
                        })
                    }
                },
                v = function() {
                    var e = "";
                    pagerQty = c();
                    for (var n = 0; pagerQty > n; n++) {
                        var s = "";
                        o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (s = o.settings.buildPager(n), o.pagerEl.addClass("bx-custom-pager")) : (s = n + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + n + '" class="bx-pager-link">' + s + "</a></div>"
                    }
                    o.pagerEl.html(e)
                },
                p = function() {
                    o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), v()), o.pagerEl.delegate("a", "click", _)
                },
                f = function() {
                    o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", S), o.controls.prev.bind("click", $), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
                },
                x = function() {
                    o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", b), o.controls.autoEl.delegate(".bx-stop", "click", w), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), E(o.settings.autoStart ? "stop" : "start")
                },
                m = function() {
                    o.children.each(function() {
                        var e = t(this).find("img:first").attr("title");
                        void 0 != e && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                    })
                },
                S = function(t) {
                    o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
                },
                $ = function(t) {
                    o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
                },
                b = function(t) {
                    r.startAuto(), t.preventDefault()
                },
                w = function(t) {
                    r.stopAuto(), t.preventDefault()
                },
                _ = function(e) {
                    o.settings.auto && r.stopAuto();
                    var n = t(e.currentTarget),
                        s = parseInt(n.attr("data-slide-index"));
                    s != o.active.index && r.goToSlide(s), e.preventDefault()
                },
                T = function(t) {
                    return "short" == o.settings.pagerType ? void o.pagerEl.html(t + 1 + o.settings.pagerShortSeparator + o.children.length) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.find("a").eq(t).addClass("active"))
                },
                C = function() {
                    if (o.settings.infiniteLoop) {
                        var t = "";
                        0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == c() - 1 && o.carousel ? t = o.children.eq((c() - 1) * g()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), "horizontal" == o.settings.mode ? h(-t.left, "reset", 0) : "vertical" == o.settings.mode && h(-t.top, "reset", 0)
                    }
                    o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
                },
                E = function(t) {
                    o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                P = function() {
                    !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == c() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
                },
                A = function() {
                    o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function() {
                        o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                    }, function() {
                        o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                    })
                },
                k = function() {
                    var e = 0;
                    if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
                    else {
                        r.prepend(o.children.clone().addClass("bx-clone"));
                        var n = o.children.first().position();
                        e = "horizontal" == o.settings.mode ? -n.left : -n.top
                    }
                    h(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function() {
                        r.stop()
                    }, function() {
                        var e = 0;
                        o.children.each(function() {
                            e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        });
                        var n = o.settings.speed / e,
                            s = "horizontal" == o.settings.mode ? "left" : "top",
                            a = n * (e - Math.abs(parseInt(r.css(s))));
                        z(a)
                    }), z()
                },
                z = function(t) {
                    speed = t || o.settings.speed;
                    var e = {
                            left: 0,
                            top: 0
                        },
                        n = {
                            left: 0,
                            top: 0
                        };
                    "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : n = o.children.first().position(), h("horizontal" == o.settings.mode ? -e.left : -e.top, "ticker", speed, {
                        resetValue: "horizontal" == o.settings.mode ? -n.left : -n.top
                    })
                },
                y = function() {
                    o.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, o.viewport.bind("touchstart", q)
                },
                q = function(t) {
                    if (o.working) t.preventDefault();
                    else {
                        o.touch.originalPos = r.position();
                        var e = t.originalEvent;
                        o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", D), o.viewport.bind("touchend", L)
                    }
                },
                D = function(t) {
                    if (t.preventDefault(), "fade" != o.settings.mode) {
                        var e = t.originalEvent,
                            n = 0;
                        if ("horizontal" == o.settings.mode) {
                            var s = e.changedTouches[0].pageX - o.touch.start.x;
                            n = o.touch.originalPos.left + s
                        } else {
                            var s = e.changedTouches[0].pageY - o.touch.start.y;
                            n = o.touch.originalPos.top + s
                        }
                        h(n, "reset", 0)
                    }
                },
                L = function(t) {
                    o.viewport.unbind("touchmove", D);
                    var e = t.originalEvent,
                        n = 0;
                    if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
                        var s = Math.abs(o.touch.start.x - o.touch.end.x);
                        s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
                    } else {
                        var s = 0;
                        "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, n = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, n = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? h(n, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : h(n, "reset", 200)
                    }
                    o.viewport.unbind("touchend", L)
                };
            r.goToSlide = function(e, n) {
                if (!o.working && o.active.index != e) {
                    if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? c() - 1 : e >= c() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == n ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == n && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= c() - 1, o.settings.pager && T(o.active.index), o.settings.controls && P(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != a() && o.viewport.animate({
                        height: a()
                    }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function() {
                        t(this).css("zIndex", 50), C()
                    });
                    else {
                        o.settings.adaptiveHeight && o.viewport.height() != a() && o.viewport.animate({
                            height: a()
                        }, o.settings.adaptiveHeightSpeed);
                        var s = 0,
                            l = {
                                left: 0,
                                top: 0
                            };
                        if (!o.settings.infiniteLoop && o.carousel && o.active.last) {
                            if ("horizontal" == o.settings.mode) {
                                var d = o.children.eq(o.children.length - 1);
                                l = d.position(), s = o.viewport.width() - d.width()
                            } else {
                                var u = o.children.length - o.settings.minSlides;
                                l = o.children.eq(u).position()
                            }
                        } else if (o.carousel && o.active.last && "prev" == n) {
                            var v = 1 == o.settings.moveSlides ? o.settings.maxSlides - g() : (c() - 1) * g() - (o.children.length - o.settings.maxSlides),
                                d = r.children(".bx-clone").eq(v);
                            l = d.position()
                        } else if ("next" == n && 0 == o.active.index) l = r.find(".bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                        else if (e >= 0) {
                            var p = e * g();
                            l = o.children.eq(p).position()
                        }
                        h("horizontal" == o.settings.mode ? -(l.left - s) : -l.top, "slide", o.settings.speed)
                    }
                }
            }, r.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var t = o.active.index + 1;
                    r.goToSlide(t, "next")
                }
            }, r.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || 0 != o.active.index) {
                    var t = o.active.index - 1;
                    r.goToSlide(t, "prev")
                }
            }, r.startAuto = function(t) {
                o.interval || (o.interval = setInterval(function() {
                    "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
                }, o.settings.pause), o.settings.autoControls && 1 != t && E("stop"))
            }, r.stopAuto = function(t) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && E("start"))
            }, r.getCurrentSlide = function() {
                return o.active.index
            }, r.getSlideCount = function() {
                return o.children.length
            };
            var H = t(window).width(),
                M = t(window).height();
            return t(window).resize(function() {
                    var e = t(window).width(),
                        n = t(window).height();
                    (H != e || M != n) && (H = e, M = n, o.children.add(r.find(".bx-clone")).width(l()), o.viewport.css("height", a()), o.active.last && (o.active.index = c() - 1), o.active.index >= c() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (v(), T(o.active.index)), o.settings.ticker || u())
                }), o.settings = t.extend({}, n, s), o.children = r.children(o.settings.slideSelector), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                    index: o.settings.startSlide
                }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function() {
                    var t = document.createElement("div"),
                        e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in e)
                        if (void 0 !== t.style[e[n]]) return o.cssPrefix = e[n].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                    return !1
                }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides),
                function() {
                    if (r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                            width: "horizontal" == o.settings.mode ? 215 * o.children.length + "%" : "auto",
                            position: "relative"
                        }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), o.viewport.css({
                            width: "100%",
                            overflow: "hidden",
                            position: "relative"
                        }), o.children.css({
                            float: "horizontal" == o.settings.mode ? "left" : "none",
                            listStyle: "none"
                        }), o.children.width(l()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                            position: "absolute",
                            zIndex: 0,
                            display: "none"
                        }), o.children.eq(o.settings.startSlide).css({
                            zIndex: 50,
                            display: "block"
                        })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && m(), o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                        var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
                            n = o.children.slice(0, e).clone().addClass("bx-clone"),
                            s = o.children.slice(-e).clone().addClass("bx-clone");
                        r.append(n).prepend(s)
                    }
                    o.active.last = o.settings.startSlide == c() - 1, o.settings.video && r.fitVids(), o.settings.ticker || (o.settings.pager && p(), o.settings.controls && f(), o.settings.auto && o.settings.autoControls && x(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), r.children().imagesLoaded(function() {
                        o.loader.remove(), u(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(a()), o.settings.onSliderLoad(o, o.active.index), o.settings.auto && o.settings.autoStart && A(), o.settings.ticker && k(), o.settings.pager && T(o.settings.startSlide), o.settings.controls && P(), o.settings.touchEnabled && !o.settings.ticker && y()
                    })
                }(), this
        }
    }
})(jQuery),
function(t, e) {
    var n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    t.fn.imagesLoaded = function(e) {
        function s() {
            var n = t(g),
                s = t(u);
            a && (u.length ? a.reject(d, n, s) : a.resolve(d)), t.isFunction(e) && e.call(r, d, n, s)
        }

        function o(e, o) {
            e.src === n || -1 !== t.inArray(e, c) || (c.push(e), o ? u.push(e) : g.push(e), t.data(e, "imagesLoaded", {
                isBroken: o,
                src: e.src
            }), l && a.notifyWith(t(e), [o, d, t(g), t(u)]), d.length === c.length && (setTimeout(s), d.unbind(".imagesLoaded")))
        }
        var r = this,
            a = t.isFunction(t.Deferred) ? t.Deferred() : 0,
            l = t.isFunction(a.notify),
            d = r.find("img").add(r.filter("img")),
            c = [],
            g = [],
            u = [];
        return t.isPlainObject(e) && t.each(e, function(t, n) {
            "callback" === t ? e = n : a && a[t](n)
        }), d.length ? d.bind("load.imagesLoaded error.imagesLoaded", function(t) {
            o(t.target, "error" === t.type)
        }).each(function(e, s) {
            var r = s.src,
                a = t.data(s, "imagesLoaded");
            a && a.src === r ? o(s, a.isBroken) : s.complete && void 0 !== s.naturalWidth ? o(s, 0 === s.naturalWidth || 0 === s.naturalHeight) : (s.readyState || s.complete) && (s.src = n, s.src = r)
        }) : s(), a ? a.promise(r) : r
    }
}(jQuery);