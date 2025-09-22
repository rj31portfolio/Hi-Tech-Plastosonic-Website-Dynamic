! function(e) {
    e.cookie = function(t, r, i) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(r)) || null == r)) {
            if (i = e.extend({}, i), null == r && (i.expires = -1), "number" == typeof i.expires) {
                var n = i.expires,
                    o = i.expires = new Date;
                o.setDate(o.getDate() + n)
            }
            return r = String(r), document.cookie = [encodeURIComponent(t), "=", i.raw ? r : encodeURIComponent(r), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
        }
        for (var p, a = (i = r || {}).raw ? function(e) {
                return e
            } : decodeURIComponent, s = document.cookie.split("; "), u = 0; p = s[u] && s[u].split("="); u++)
            if (a(p[0]) === t) return a(p[1] || "");
        return null
    }
}(jQuery);