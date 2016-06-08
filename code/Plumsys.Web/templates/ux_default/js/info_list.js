function loginMemue(e) {
    $("#au_login").show(),
    $("#un_login").hide(),
    -1 != e.indexOf("userOrderList") || -1 != e.indexOf("userInfo") || -1 != e.indexOf("userOrderDetail") || -1 != e.indexOf("userPassword") || -1 != e.indexOf("userCoupons") || -1 != e.indexOf("userTravel") ? $("#U_ROLE_USER").addClass("topbar_hover") : $("#U_ROLE_USER").addClass("widthB")
}
function getClientLanguage() {
    var e = navigator.userLanguage || navigator.language;
    switch (e.toLowerCase()) {
        case "zh-cn":
            return !1;
        case "zh-tw":
            return !0;
        default:
            return null
    }
}
function translate(e, t) {
    e = e.childNodes;
    for (var n, i = 0,
    s = e.length; s > i; i++) if (n = e.item(i), !("||BR|HR|TEXTAREA|".indexOf("|" + n.tagName + "|") > 0)) if (n.title && (n.title = t(n.title)), n.alt && (n.alt = t(n.alt)), "INPUT" == n.tagName) {
        if (n.getAttribute("api") && "1" == n.getAttribute("api")) continue;
        "INPUT" == n.tagName && "" != n.value && "text" != n.type && "hidden" != n.type && (n.value = t(n.value)),
        n.placeholder && (n.placeholder = t(n.placeholder)),
        n.getAttribute("cn") && n.setAttribute("cn", t(n.getAttribute("cn"))),
        n.getAttribute("data-name") && n.setAttribute("data-name", t(n.getAttribute("data-name")))
    } else if ("SELECT" == n.tagName) {
        if (n.getAttribute("api") && "1" == n.getAttribute("api")) continue;
        arguments.callee(n, t)
    } else 3 == n.nodeType ? "简体中文" != n.data && (n.data = t(n.data)) : arguments.callee(n, t)
}
function translateText(e, t) {
    if (null != e) {
        for (var n, i, s, r = [], o = 0, a = e.length; a > o; o++) n = e.charAt(o),
        i = t ? simplified.indexOf(n) : traditional.indexOf(n),
        s = t ? traditional.charAt(i) : simplified.charAt(i),
        r.push(-1 != i ? s : n);
        return r.join("")
    }
}
function initCurreny() {
    var e = Cookie.get("CurrencyType");
    null != e && "0" != e || $(".currenyTag").text("人民币"),
    "1" == e && $(".currenyTag").text("美元"),
    "2" == e && $(".currenyTag").text("欧元"),
    "3" == e && $(".currenyTag").text("英镑"),
    "9" == e && $(".currenyTag").text("港币"),
    "10" == e && $(".currenyTag").text("新元"),
    "12" == e && $(".currenyTag").text("台币")
}
function initLanguage() {
    var e = Cookie.get(cookieName);
    null == e && getClientLanguage() || "tw" == e ? ($(".languageTag").text("繁體中文"), document.title = traditionalized(document.title), translate(document.body, traditionalized)) : (null == e && !getClientLanguage() || "cn" == e) && $(".languageTag").text("简体中文")
}
function commom_dealString(e) {
    return e.replace(",", "")
}
function common_validateInput(e) {
    return "" == e ? !1 : "null" == e ? !1 : !(e.length > 200)
}
function common_number(e, t) {
    if (parseFloat(e) < 0) return 0;
    var n = "";
    if (-1 != e.indexOf(".")) {
        var i = e.split(".");
        i[1].length > 3 && (e = parseFloat(e).toFixed(2))
    }
    if (-1 != e.indexOf(".")) {
        var i = e.split(".");
        e = i[0],
        t && (n = i[1])
    }
    for (var s = e.length,
    r = "",
    o = 0; s / 3 + 1 > o; o++) 0 >= s - 3 * (o + 1) ? r = e.substring(0, s - 3 * o) + r : r += "," + e.substring(s - 3 * (o + 1), s - 3 * o);
    return t && "" != n ? n.length > 3 ? parseFloat(r + "." + n).toFixed(2) : r + "." + n : r
}
function common_ancho(e, t) {
    var n = $(e).offset().top;
    $("html,body").animate({
        scrollTop: n
    },
    t)
}
function common_isLetterOrNum(e) {
    var t = /^[a-zA-Z0-9]+$/;
    return !t.test(e)
}
function common_checkEmail(e) {
    return -1 != e.search(/^([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
}
function common_isChinese(e) {
    var t = /u4e00-u9fa5/;
    return !t.test(e)
}
function common_isEnglish(e) {
    var t = /^[A-Za-z]+$/;
    return !t.test(e)
}
function common_isTelphone(e) {
    return !! /^1[3|4|5|6|7|8|9][0-9]{1}[0-9]{8}$/.test(e)
}
function common_isPhone(e) {
    return !! /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(e)
}
function common_getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
    n = t.exec(location.search);
    return null == n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
}
function common_post(e, t) {
    var n = document.createElement("form");
    n.action = e,
    n.method = "post",
    n.style.display = "none";
    for (var i in t) {
        var s = document.createElement("textarea");
        s.name = i,
        s.value = t[i],
        n.appendChild(s)
    }
    return document.body.appendChild(n),
    n.submit(),
    n
}
function common_getAllCityJson() {
    var e;
    return $.ajax({
        type: "post",
        url: "/isThemeName",
        data: {},
        dataType: "json",
        async: !0,
        success: function (t) {
            e = t.data
        }
    }),
    e
}
function common_isnan(e) {
    return isNaN(e) ? 0 : e
}
function common_validatePostCode(e) {
    return !! /^[0-9]{6}$/.test(e)
}
function common_checkEndTime(e, t, n) {
    var i = new Date(e.replace("-", "/").replace("-", "/")),
    s = new Date(t.replace("-", "/").replace("-", "/")),
    r = new Date(n.replace("-", "/").replace("-", "/"));
    return i >= r && r > s ? 1 : 0
}
function common_checkPersonType(e, t) {
    return common_checkEndTime(t[8], t[9], e) ? ".visitor" : common_checkEndTime(t[0], t[1], e) ? ".adult" : common_checkEndTime(t[2], t[3], e) ? ".child" : common_checkEndTime(t[4], t[5], e) ? ".baby" : common_checkEndTime(t[6], t[7], e) ? ".old" : "none"
}
function common_checkPersonNum(e, t) {
    for (var n in e) if (e.hasOwnProperty(n) && common_checkEndTime(e[n].beginDate, e[n].endDate, t)) return e[n].personType;
    return !1
}
function common_returnZh(e) {
    return ".adult" == e ? "成人" : ".child" == e ? "儿童" : ".baby" == e ? "婴儿" : ".old" == e ? "老人" : ".visitor" == e ? "" : void 0
}
function common_returnInt(e) {
    return ".adult" == e ? 1 : ".child" == e ? 2 : ".baby" == e ? 3 : ".old" == e ? 4 : ".visitor" == e ? 5 : void 0
}
function common_compare(e, t) {
    var n = [];
    if (void 0 != e.adult_range && n.push(e.adult_range.split("-")[t]), void 0 != e.child_range && n.push(e.child_range.split("-")[t]), void 0 != e.baby_range && n.push(e.baby_range.split("-")[t]), void 0 != e.older_range && n.push(e.older_range.split("-")[t]), void 0 != e.visitor_range && n.push(e.visitor_range.split("-")[t]), 0 == t) {
        for (var i = parseInt(n[0]), s = 0; s < n.length; s++) i > parseInt(n[s]) && (i = parseInt(n[s]));
        return i
    }
    if (1 == t) {
        for (var r = parseInt(n[0]), s = 0; s < n.length; s++) r < parseInt(n[s]) && (r = parseInt(n[s]));
        return r
    }
}
function common_compare_array(e, t) {
    if (0 == t) {
        for (var n = parseInt(e[0]), i = 0; i < e.length; i++) n > parseInt(e[i]) && (n = parseInt(e[i]));
        return n
    }
    if (1 == t) {
        for (var s = parseInt(e[0]), i = 0; i < e.length; i++) s < parseInt(e[i]) && (s = parseInt(e[i]));
        return s
    }
}
function common_checkbrowse() {
    var e = navigator.userAgent.toLowerCase(),
    t = (e.match(/\b(chrome|opera|safari|msie|firefox)\b/) || ["", "mozilla"])[1],
    n = "(?:" + t + "|version)[\\/: ]([\\d.]+)",
    i = (e.match(new RegExp(n)) || [])[1];
    return {
        is: n,
        ver: i
    }
}
function common_timegap(e, t) {
    var n = new Date(e),
    i = new Date(t),
    s = i.getTime() - n.getTime();
    return Math.floor(s / 864e5)
}
function InitSearch(e) {
    this.resLoc = e.resLoc,
    this.resThe = e.resThe
}
function search_beginSearchWithOut() {
    var e = $("#themeEname").val(),
    t = $("#labelName").val(),
    n = $("#isFreeSale").val(),
    i = $("#timeRange").val(),
    s = "/search/" + $("#cityName").val() + "_" + ("" == e ? "AllThemes" : e) + ".html?&keyword=" + $("#search_keyword").val();
    null != t && "AllLabel" != t && (s += "&labelname=" + $("#labelName").val()),
    null != n && "allIsFreeSale" != n && (s += "&isFreeSale=" + n),
    null != i && "allTimeRange" != i && (s += "&timeRange=" + i);
    var r = $("#search_applicableCrowd").val();
    null != r && "AllApplicableCrowd" != r && (s += "&applicableCrowd=" + r),
    "alllocations" != $("#cityName").val() && null != $("#countryName").val() && (s += "&countryName=" + $("#countryName").val()),
    $.blockUI({
        message: $("#load_img"),
        css: {
            top: "36%",
            left: "45%",
            width: "auto"
        }
    }),
    window.location.href = s
}
function search_beginSearch(e, t) {
    var n = $("#themeEname").val(),
    i = $("#labelName").val(),
    s = $("#isFreeSale").val(),
    r = $("#timeRange").val(),
    o = "/search/" + $("#cityName").val() + "_" + ("" == n ? "AllThemes" : n) + ".html?&keyword=" + $("#search_keyword").val();
    null != i && "AllLabel" != i && (o += "&labelname=" + $("#labelName").val()),
    null != s && "allIsFreeSale" != s && (o += "&isFreeSale=" + s),
    null != r && "allTimeRange" != r && (o += "&timeRange=" + r);
    var a = $("#search_applicableCrowd").val();
    null != a && "AllApplicableCrowd" != a && (o += "&applicableCrowd=" + a),
    "sort_default" != e && (o = o + "&orderByType=" + e),
    null != t && (o = o + "&orderValue=" + t),
    "alllocations" != $("#cityName").val() && null != $("#countryName").val() && (o += "&countryName=" + $("#countryName").val()),
    $.blockUI({
        message: $("#load_img"),
        css: {
            top: "36%",
            left: "45%",
            width: "auto"
        }
    }),
    window.location.href = o
}
function GetUrlRelativePath() {
    var e = document.location.toString(),
    t = e.split("//"),
    n = t[1].indexOf("/"),
    i = t[1].substring(n);
    if (-1 != i.indexOf("?")) {
        var s = encodeURIComponent(encodeURIComponent(i.substr(i.indexOf("?"))));
        i = i.substr(0, i.indexOf("?")) + s
    }
    return i
}
function header_search(e) {
    var t = e;
    "" == t && (t = $("#defaultSearch").val());
    var n = searchLocationCountryUrl($.trim(t));
    return "" != n ? (window.location.href = n, !1) : void (-1 != AllLocationJson.indexOf('"' + t + '"') ? window.location.href = "/search/" + t + "_AllThemes.html" : -1 != AllThemesInJson.indexOf('"' + t + '"') ? window.location.href = "/search/AllCitys_" + t + ".html" : window.location.href = "/search/AllCitys_AllThemes.html?keyword=" + t)
}
function locationCountryUrl() { }
function searchLocationCountryUrl(e) {
    return ""
} !
function (e) {
    var t = "0.9.3",
    n = {
        isMsie: function () {
            var e = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
            return e ? parseInt(e[2], 10) : !1
        },
        isBlankString: function (e) {
            return !e || /^\s*$/.test(e)
        },
        escapeRegExChars: function (e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        isString: function (e) {
            return "string" == typeof e
        },
        isNumber: function (e) {
            return "number" == typeof e
        },
        isArray: e.isArray,
        isFunction: e.isFunction,
        isObject: e.isPlainObject,
        isUndefined: function (e) {
            return "undefined" == typeof e
        },
        bind: e.proxy,
        bindAll: function (t) {
            var n;
            for (var i in t) e.isFunction(n = t[i]) && (t[i] = e.proxy(n, t))
        },
        indexOf: function (e, t) {
            for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
            return -1
        },
        each: e.each,
        map: e.map,
        filter: e.grep,
        every: function (t, n) {
            var i = !0;
            return t ? (e.each(t,
            function (e, s) {
                return (i = n.call(null, s, e, t)) ? void 0 : !1
            }), !!i) : i
        },
        some: function (t, n) {
            var i = !1;
            return t ? (e.each(t,
            function (e, s) {
                return (i = n.call(null, s, e, t)) ? !1 : void 0
            }), !!i) : i
        },
        mixin: e.extend,
        getUniqueId: function () {
            var e = 0;
            return function () {
                return e++
            }
        }(),
        defer: function (e) {
            setTimeout(e, 0)
        },
        debounce: function (e, t, n) {
            var i, s;
            return function () {
                var r, o, a = this,
                l = arguments;
                return r = function () {
                    i = null,
                    n || (s = e.apply(a, l))
                },
                o = n && !i,
                clearTimeout(i),
                i = setTimeout(r, t),
                o && (s = e.apply(a, l)),
                s
            }
        },
        throttle: function (e, t) {
            var n, i, s, r, o, a;
            return o = 0,
            a = function () {
                o = new Date,
                s = null,
                r = e.apply(n, i)
            },
            function () {
                var l = new Date,
                c = t - (l - o);
                return n = this,
                i = arguments,
                0 >= c ? (clearTimeout(s), s = null, o = l, r = e.apply(n, i)) : s || (s = setTimeout(a, c)),
                r
            }
        },
        tokenizeQuery: function (t) {
            return e.trim(t).toLowerCase().split(/[\s]+/)
        },
        tokenizeText: function (t) {
            return e.trim(t).toLowerCase().split(/[\s\-_]+/)
        },
        getProtocol: function () {
            return location.protocol
        },
        noop: function () { }
    },
    i = function () {
        var e = /\s+/;
        return {
            on: function (t, n) {
                var i;
                if (!n) return this;
                for (this._callbacks = this._callbacks || {},
                t = t.split(e) ; i = t.shift() ;) this._callbacks[i] = this._callbacks[i] || [],
                this._callbacks[i].push(n);
                return this
            },
            trigger: function (t, n) {
                var i, s;
                if (!this._callbacks) return this;
                for (t = t.split(e) ; i = t.shift() ;) if (s = this._callbacks[i]) for (var r = 0; r < s.length; r += 1) s[r].call(this, {
                    type: i,
                    data: n
                });
                return this
            }
        }
    }(),
    s = function () {
        function t(t) {
            t && t.el || e.error("EventBus initialized without el"),
            this.$el = e(t.el)
        }
        var i = "typeahead:";
        return n.mixin(t.prototype, {
            trigger: function (e) {
                var t = [].slice.call(arguments, 1);
                this.$el.trigger(i + e, t)
            }
        }),
        t
    }(),
    r = function () {
        function e(e) {
            this.prefix = ["__", e, "__"].join(""),
            this.ttlKey = "__ttl__",
            this.keyMatcher = new RegExp("^" + this.prefix)
        }
        function t() {
            return (new Date).getTime()
        }
        function i(e) {
            return JSON.stringify(n.isUndefined(e) ? null : e)
        }
        function s(e) {
            return JSON.parse(e)
        }
        var r, o;
        try {
            r = window.localStorage,
            r.setItem("~~~", "!"),
            r.removeItem("~~~")
        } catch (a) {
            r = null
        }
        return o = r && window.JSON ? {
            _prefix: function (e) {
                return this.prefix + e
            },
            _ttlKey: function (e) {
                return this._prefix(e) + this.ttlKey
            },
            get: function (e) {
                return this.isExpired(e) && this.remove(e),
                s(r.getItem(this._prefix(e)))
            },
            set: function (e, s, o) {
                return n.isNumber(o) ? r.setItem(this._ttlKey(e), i(t() + o)) : r.removeItem(this._ttlKey(e)),
                r.setItem(this._prefix(e), i(s))
            },
            remove: function (e) {
                return r.removeItem(this._ttlKey(e)),
                r.removeItem(this._prefix(e)),
                this
            },
            clear: function () {
                var e, t, n = [],
                i = r.length;
                for (e = 0; i > e; e++) (t = r.key(e)).match(this.keyMatcher) && n.push(t.replace(this.keyMatcher, ""));
                for (e = n.length; e--;) this.remove(n[e]);
                return this
            },
            isExpired: function (e) {
                var i = s(r.getItem(this._ttlKey(e)));
                return !!(n.isNumber(i) && t() > i)
            }
        } : {
            get: n.noop,
            set: n.noop,
            remove: n.noop,
            clear: n.noop,
            isExpired: n.noop
        },
        n.mixin(e.prototype, o),
        e
    }(),
    o = function () {
        function e(e) {
            n.bindAll(this),
            e = e || {},
            this.sizeLimit = e.sizeLimit || 10,
            this.cache = {},
            this.cachedKeysByAge = []
        }
        return n.mixin(e.prototype, {
            get: function (e) {
                return this.cache[e]
            },
            set: function (e, t) {
                var n;
                this.cachedKeysByAge.length === this.sizeLimit && (n = this.cachedKeysByAge.shift(), delete this.cache[n]),
                this.cache[e] = t,
                this.cachedKeysByAge.push(e)
            }
        }),
        e
    }(),
    a = function () {
        function t(e) {
            n.bindAll(this),
            e = n.isString(e) ? {
                url: e
            } : e,
            l = l || new o,
            a = n.isNumber(e.maxParallelRequests) ? e.maxParallelRequests : a || 6,
            this.url = e.url,
            this.wildcard = e.wildcard || "%QUERY",
            this.filter = e.filter,
            this.replace = e.replace,
            this.ajaxSettings = {
                type: "get",
                cache: e.cache,
                timeout: e.timeout,
                dataType: e.dataType || "json",
                beforeSend: e.beforeSend
            },
            this._get = (/^throttle$/i.test(e.rateLimitFn) ? n.throttle : n.debounce)(this._get, e.rateLimitWait || 300)
        }
        function i() {
            c++
        }
        function s() {
            c--
        }
        function r() {
            return a > c
        }
        var a, l, c = 0,
        d = {};
        return n.mixin(t.prototype, {
            _get: function (e, t) {
                function n(n) {
                    var s = i.filter ? i.filter(n) : n;
                    t && t(s),
                    l.set(e, n)
                }
                var i = this;
                r() ? this._sendRequest(e).done(n) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
            },
            _sendRequest: function (t) {
                function n() {
                    s(),
                    d[t] = null,
                    r.onDeckRequestArgs && (r._get.apply(r, r.onDeckRequestArgs), r.onDeckRequestArgs = null)
                }
                var r = this,
                o = d[t];
                return o || (i(), o = d[t] = e.ajax(t, this.ajaxSettings).always(n)),
                o
            },
            get: function (e, t) {
                var i, s, r = this,
                o = encodeURIComponent(e || "");
                return t = t || n.noop,
                i = this.replace ? this.replace(this.url, o) : this.url.replace(this.wildcard, o),
                (s = l.get(i)) ? n.defer(function () {
                    t(r.filter ? r.filter(s) : s)
                }) : this._get(i, t),
                !!s
            }
        }),
        t
    }(),
    l = function () {
        function i(t) {
            n.bindAll(this),
            n.isString(t.template) && !t.engine && e.error("no template engine specified"),
            t.local || t.prefetch || t.remote || e.error("one of local, prefetch, or remote is required"),
            this.name = t.name || n.getUniqueId(),
            this.limit = t.limit || 5,
            this.minLength = t.minLength || 1,
            this.header = t.header,
            this.footer = t.footer,
            this.valueKey = t.valueKey || "value",
            this.template = s(t.template, t.engine, this.valueKey),
            this.local = t.local,
            this.prefetch = t.prefetch,
            this.remote = t.remote,
            this.itemHash = {},
            this.adjacencyList = {},
            this.storage = t.name ? new r(t.name) : null
        }
        function s(e, t, i) {
            var s, r;
            return n.isFunction(e) ? s = e : n.isString(e) ? (r = t.compile(e), s = n.bind(r.render, r)) : s = function (e) {
                return "<p>" + e[i] + "</p>"
            },
            s
        }
        var o = {
            thumbprint: "thumbprint",
            protocol: "protocol",
            itemHash: "itemHash",
            adjacencyList: "adjacencyList"
        };
        return n.mixin(i.prototype, {
            _processLocalData: function (e) {
                this._mergeProcessedData(this._processData(e))
            },
            _loadPrefetchData: function (i) {
                function s(e) {
                    var t = i.filter ? i.filter(e) : e,
                    s = h._processData(t),
                    r = s.itemHash,
                    a = s.adjacencyList;
                    h.storage && (h.storage.set(o.itemHash, r, i.ttl), h.storage.set(o.adjacencyList, a, i.ttl), h.storage.set(o.thumbprint, f, i.ttl), h.storage.set(o.protocol, n.getProtocol(), i.ttl)),
                    h._mergeProcessedData(s)
                }
                var r, a, l, c, d, u, h = this,
                f = t + (i.thumbprint || "");
                return this.storage && (r = this.storage.get(o.thumbprint), a = this.storage.get(o.protocol), l = this.storage.get(o.itemHash), c = this.storage.get(o.adjacencyList)),
                d = r !== f || a !== n.getProtocol(),
                i = n.isString(i) ? {
                    url: i
                } : i,
                i.ttl = n.isNumber(i.ttl) ? i.ttl : 864e5,
                l && c && !d ? (this._mergeProcessedData({
                    itemHash: l,
                    adjacencyList: c
                }), u = e.Deferred().resolve()) : u = e.getJSON(i.url).done(s),
                u
            },
            _transformDatum: function (e) {
                var t = n.isString(e) ? e : e[this.valueKey],
                i = e.tokens || n.tokenizeText(t),
                s = {
                    value: t,
                    tokens: i
                };
                return n.isString(e) ? (s.datum = {},
                s.datum[this.valueKey] = e) : s.datum = e,
                s.tokens = n.filter(s.tokens,
                function (e) {
                    return !n.isBlankString(e)
                }),
                s.tokens = n.map(s.tokens,
                function (e) {
                    return e.toLowerCase()
                }),
                s
            },
            _processData: function (e) {
                var t = this,
                i = {},
                s = {};
                return n.each(e,
                function (e, r) {
                    var o = t._transformDatum(r),
                    a = n.getUniqueId(o.value);
                    i[a] = o,
                    n.each(o.tokens,
                    function (e, t) {
                        var i = t.charAt(0),
                        r = s[i] || (s[i] = [a]); ! ~n.indexOf(r, a) && r.push(a)
                    })
                }),
                {
                    itemHash: i,
                    adjacencyList: s
                }
            },
            _mergeProcessedData: function (e) {
                var t = this;
                n.mixin(this.itemHash, e.itemHash),
                n.each(e.adjacencyList,
                function (e, n) {
                    var i = t.adjacencyList[e];
                    t.adjacencyList[e] = i ? i.concat(n) : n
                })
            },
            _getLocalSuggestions: function (e) {
                var t, i = this,
                s = [],
                r = [],
                o = [];
                return n.each(e,
                function (e, t) {
                    var i = t.charAt(0); ! ~n.indexOf(s, i) && s.push(i)
                }),
                n.each(s,
                function (e, n) {
                    var s = i.adjacencyList[n];
                    return s ? (r.push(s), void ((!t || s.length < t.length) && (t = s))) : !1
                }),
                r.length < s.length ? [] : (n.each(t,
                function (t, s) {
                    var a, l, c = i.itemHash[s];
                    a = n.every(r,
                    function (e) {
                        return ~n.indexOf(e, s)
                    }),
                    l = a && n.every(e,
                    function (e) {
                        return n.some(c.tokens,
                        function (t) {
                            return 0 === t.indexOf(e)
                        })
                    }),
                    l && o.push(c)
                }), o)
            },
            initialize: function () {
                var t;
                return this.local && this._processLocalData(this.local),
                this.transport = this.remote ? new a(this.remote) : null,
                t = this.prefetch ? this._loadPrefetchData(this.prefetch) : e.Deferred().resolve(),
                this.local = this.prefetch = this.remote = null,
                this.initialize = function () {
                    return t
                },
                t
            },
            getSuggestions: function (e, t) {
                function i(e) {
                    r = r.slice(0),
                    n.each(e,
                    function (e, t) {
                        var i, s = o._transformDatum(t);
                        return i = n.some(r,
                        function (e) {
                            return s.value === e.value
                        }),
                        !i && r.push(s),
                        r.length < o.limit
                    }),
                    t && t(r)
                }
                var s, r, o = this,
                a = !1;
                e.length < this.minLength || (s = n.tokenizeQuery(e), r = this._getLocalSuggestions(s).slice(0, this.limit), r.length < this.limit && this.transport && (a = this.transport.get(e, i)), !a && t && t(r))
            }
        }),
        i
    }(),
    c = function () {
        function t(t) {
            var i = this;
            n.bindAll(this),
            this.specialKeyCodeMap = {
                9: "tab",
                27: "esc",
                37: "left",
                39: "right",
                13: "enter",
                38: "up",
                40: "down"
            },
            this.$hint = e(t.hint),
            this.$input = e(t.input).on("blur.tt", this._handleBlur).on("focus.tt", this._handleFocus).on("keydown.tt", this._handleSpecialKeyEvent),
            n.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",
            function (e) {
                i.specialKeyCodeMap[e.which || e.keyCode] || n.defer(i._compareQueryToInputValue)
            }) : this.$input.on("input.tt", this._compareQueryToInputValue),
            this.query = this.$input.val(),
            this.$overflowHelper = s(this.$input)
        }
        function s(t) {
            return e("<span></span>").css({
                position: "absolute",
                left: "-9999px",
                visibility: "hidden",
                whiteSpace: "nowrap",
                fontFamily: t.css("font-family"),
                fontSize: t.css("font-size"),
                fontStyle: t.css("font-style"),
                fontVariant: t.css("font-variant"),
                fontWeight: t.css("font-weight"),
                wordSpacing: t.css("word-spacing"),
                letterSpacing: t.css("letter-spacing"),
                textIndent: t.css("text-indent"),
                textRendering: t.css("text-rendering"),
                textTransform: t.css("text-transform")
            }).insertAfter(t)
        }
        function r(e, t) {
            return e = (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "),
            t = (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "),
            e === t
        }
        return n.mixin(t.prototype, i, {
            _handleFocus: function () {
                this.trigger("focused")
            },
            _handleBlur: function () {
                this.trigger("blured")
            },
            _handleSpecialKeyEvent: function (e) {
                var t = this.specialKeyCodeMap[e.which || e.keyCode];
                t && this.trigger(t + "Keyed", e)
            },
            _compareQueryToInputValue: function () {
                var e = this.getInputValue(),
                t = r(this.query, e),
                n = t ? this.query.length !== e.length : !1;
                n ? this.trigger("whitespaceChanged", {
                    value: this.query
                }) : t || this.trigger("queryChanged", {
                    value: this.query = e
                })
            },
            destroy: function () {
                this.$hint.off(".tt"),
                this.$input.off(".tt"),
                this.$hint = this.$input = this.$overflowHelper = null
            },
            focus: function () {
                this.$input.focus()
            },
            blur: function () {
                this.$input.blur()
            },
            getQuery: function () {
                return this.query
            },
            setQuery: function (e) {
                this.query = e
            },
            getInputValue: function () {
                return this.$input.val()
            },
            setInputValue: function (e, t) {
                this.$input.val(e),
                !t && this._compareQueryToInputValue()
            },
            getHintValue: function () {
                return this.$hint.val()
            },
            setHintValue: function (e) {
                this.$hint.val(e)
            },
            getLanguageDirection: function () {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            },
            isOverflow: function () {
                return this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() > this.$input.width()
            },
            isCursorAtEnd: function () {
                var e, t = this.$input.val().length,
                i = this.$input[0].selectionStart;
                return n.isNumber(i) ? i === t : document.selection ? (e = document.selection.createRange(), e.moveStart("character", -t), t === e.text.length) : !0
            }
        }),
        t
    }(),
    d = function () {
        function t(t) {
            n.bindAll(this),
            this.isOpen = !1,
            this.isEmpty = !0,
            this.isMouseOverDropdown = !1,
            this.$menu = e(t.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("click.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover)
        }
        function s(e) {
            return e.data("suggestion")
        }
        var r = {
            suggestionsList: '<span class="tt-suggestions"></span>'
        },
        o = {
            suggestionsList: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            }
        };
        return n.mixin(t.prototype, i, {
            _handleMouseenter: function () {
                this.isMouseOverDropdown = !0
            },
            _handleMouseleave: function () {
                this.isMouseOverDropdown = !1
            },
            _handleMouseover: function (t) {
                var n = e(t.currentTarget);
                this._getSuggestions().removeClass("tt-is-under-cursor"),
                n.addClass("tt-is-under-cursor")
            },
            _handleSelection: function (t) {
                var n = e(t.currentTarget);
                this.trigger("suggestionSelected", s(n))
            },
            _show: function () {
                this.$menu.css("display", "block")
            },
            _hide: function () {
                this.$menu.hide()
            },
            _moveCursor: function (e) {
                var t, n, i, r;
                if (this.isVisible()) {
                    if (t = this._getSuggestions(), n = t.filter(".tt-is-under-cursor"), n.removeClass("tt-is-under-cursor"), i = t.index(n) + e, i = (i + 1) % (t.length + 1) - 1, -1 === i) return void this.trigger("cursorRemoved"); -1 > i && (i = t.length - 1),
                    r = t.eq(i).addClass("tt-is-under-cursor"),
                    this._ensureVisibility(r),
                    this.trigger("cursorMoved", s(r))
                }
            },
            _getSuggestions: function () {
                return this.$menu.find(".tt-suggestions > .tt-suggestion")
            },
            _ensureVisibility: function (e) {
                var t = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                n = this.$menu.scrollTop(),
                i = e.position().top,
                s = i + e.outerHeight(!0);
                0 > i ? this.$menu.scrollTop(n + i) : s > t && this.$menu.scrollTop(n + (s - t))
            },
            destroy: function () {
                this.$menu.off(".tt"),
                this.$menu = null
            },
            isVisible: function () {
                return this.isOpen && !this.isEmpty
            },
            closeUnlessMouseIsOverDropdown: function () {
                this.isMouseOverDropdown || this.close()
            },
            close: function () {
                this.isOpen && (this.isOpen = !1, this.isMouseOverDropdown = !1, this._hide(), this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"), this.trigger("closed"))
            },
            open: function () {
                this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
            },
            setLanguageDirection: function (e) { },
            moveCursorUp: function () {
                this._moveCursor(-1)
            },
            moveCursorDown: function () {
                this._moveCursor(1)
            },
            getSuggestionUnderCursor: function () {
                var e = this._getSuggestions().filter(".tt-is-under-cursor").first();
                return e.length > 0 ? s(e) : null
            },
            getFirstSuggestion: function () {
                var e = this._getSuggestions().first();
                return e.length > 0 ? s(e) : null
            },
            renderSuggestions: function (t, i) {
                var s, a, l, c, d, u = "tt-dataset-" + t.name,
                h = '<div class="tt-suggestion">%body</div>',
                f = this.$menu.find("." + u);
                0 === f.length && (a = e(r.suggestionsList).css(o.suggestionsList), f = e("<div></div>").addClass(u).append(t.header).append(a).append(t.footer).appendTo(this.$menu)),
                i.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), l = document.createElement("div"), c = document.createDocumentFragment(), n.each(i,
                function (n, i) {
                    i.dataset = t.name,
                    s = t.template(i.datum),
                    l.innerHTML = h.replace("%body", s),
                    d = e(l.firstChild).css(o.suggestion).data("suggestion", i),
                    d.children().each(function () {
                        e(this).css(o.suggestionChild)
                    }),
                    c.appendChild(d[0])
                }), f.show().find(".tt-suggestions").html(c)) : this.clearSuggestions(t.name),
                this.trigger("suggestionsRendered")
            },
            clearSuggestions: function (e) {
                var t = e ? this.$menu.find(".tt-dataset-" + e) : this.$menu.find('[class^="tt-dataset-"]'),
                n = t.find(".tt-suggestions");
                t.hide(),
                n.empty(),
                0 === this._getSuggestions().length && (this.isEmpty = !0, this._hide())
            }
        }),
        t
    }(),
    u = function () {
        function t(e) {
            var t, i, r;
            n.bindAll(this),
            this.$node = s(e.input),
            this.datasets = e.datasets,
            this.dir = null,
            this.eventBus = e.eventBus,
            t = this.$node.find(".tt-dropdown-menu"),
            i = this.$node.find(".tt-query"),
            r = this.$node.find(".tt-hint"),
            this.dropdownView = new d({
                menu: t
            }).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed", this._propagateEvent),
            this.inputView = new c({
                input: i,
                hint: r
            }).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed tabKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", this._autocomplete)
        }
        function s(t) {
            var n = e(o.wrapper),
            i = e(o.dropdown),
            s = e(t),
            r = e(o.hint);
            n = n.css(a.wrapper),
            i = i.css(a.dropdown),
            r.css(a.hint).css({
                backgroundAttachment: s.css("background-attachment"),
                backgroundClip: s.css("background-clip"),
                backgroundColor: s.css("background-color"),
                backgroundImage: s.css("background-image"),
                backgroundOrigin: s.css("background-origin"),
                backgroundPosition: s.css("background-position"),
                backgroundRepeat: s.css("background-repeat"),
                backgroundSize: s.css("background-size")
            }),
            s.data("ttAttrs", {
                dir: s.attr("dir"),
                autocomplete: s.attr("autocomplete"),
                spellcheck: s.attr("spellcheck"),
                style: s.attr("style")
            }),
            s.addClass("tt-query").attr({
                autocomplete: "off",
                spellcheck: !1
            }).css(a.query);
            try {
                !s.attr("dir") && s.attr("dir", "auto")
            } catch (l) { }
            return s.wrap(n).parent().prepend(r).append(i)
        }
        function r(e) {
            var t = e.find(".tt-query");
            n.each(t.data("ttAttrs"),
            function (e, i) {
                n.isUndefined(i) ? t.removeAttr(e) : t.attr(e, i)
            }),
            t.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(e),
            e.remove()
        }
        var o = {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>'
        },
        a = {
            wrapper: {
                position: "relative"
            },
            hint: {
                position: "absolute",
                top: "0",
                borderColor: "transparent",
                boxShadow: "none"
            },
            query: {
                position: "relative",
                backgroundColor: "transparent"
            },
            dropdown: {
                display: "none"
            }
        };
        return n.isMsie() && n.mixin(a.query, {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
        }),
        n.isMsie() && n.isMsie() <= 7 && (n.mixin(a.wrapper, {
            display: "inline",
            zoom: "1"
        }), n.mixin(a.query, {
            marginTop: "-1px"
        })),
        n.mixin(t.prototype, i, {
            _managePreventDefault: function (e) {
                var t, n, i = e.data,
                s = !1;
                switch (e.type) {
                    case "tabKeyed":
                        t = this.inputView.getHintValue(),
                        n = this.inputView.getInputValue(),
                        s = t && t !== n;
                        break;
                    case "upKeyed":
                    case "downKeyed":
                        s = !i.shiftKey && !i.ctrlKey && !i.metaKey
                }
                s && i.preventDefault()
            },
            _setLanguageDirection: function () {
                var e = this.inputView.getLanguageDirection();
                e !== this.dir && (this.dir = e, this.$node.css("direction", e), this.dropdownView.setLanguageDirection(e))
            },
            _updateHint: function () {
                var e, t, i, s, r, o = this.dropdownView.getFirstSuggestion(),
                a = o ? o.value : null,
                l = this.dropdownView.isVisible(),
                c = this.inputView.isOverflow();
                a && l && !c && (e = this.inputView.getInputValue(), t = e.replace(/\s{2,}/g, " ").replace(/^\s+/g, ""), i = n.escapeRegExChars(t), s = new RegExp("^(?:" + i + ")(.*$)", "i"), r = s.exec(a), this.inputView.setHintValue(e + (r ? r[1] : "")))
            },
            _clearHint: function () {
                this.inputView.setHintValue("")
            },
            _clearSuggestions: function () {
                this.dropdownView.clearSuggestions()
            },
            _setInputValueToQuery: function () {
                this.inputView.setInputValue(this.inputView.getQuery())
            },
            _setInputValueToSuggestionUnderCursor: function (e) {
                var t = e.data;
                this.inputView.setInputValue(t.value, !0)
            },
            _openDropdown: function () {
                this.dropdownView.open()
            },
            _closeDropdown: function (e) {
                this.dropdownView["blured" === e.type ? "closeUnlessMouseIsOverDropdown" : "close"]()
            },
            _moveDropdownCursor: function (e) {
                var t = e.data;
                t.shiftKey || t.ctrlKey || t.metaKey || this.dropdownView["upKeyed" === e.type ? "moveCursorUp" : "moveCursorDown"]()
            },
            _handleSelection: function (e) {
                var t = "suggestionSelected" === e.type,
                i = t ? e.data : this.dropdownView.getSuggestionUnderCursor();
                i && (this.inputView.setInputValue(i.value), t ? this.inputView.focus() : e.data.preventDefault(), t && n.isMsie() ? n.defer(this.dropdownView.close) : this.dropdownView.close(), this.eventBus.trigger("selected", i.datum, i.dataset))
            },
            _getSuggestions: function () {
                var e = this,
                t = this.inputView.getQuery();
                t = t.replace(/(^\s*)|(\s*$)/g, ""),
                n.isBlankString(t) || n.each(this.datasets,
                function (n, i) {
                    i.getSuggestions(t,
                    function (n) {
                        t === e.inputView.getQuery() && e.dropdownView.renderSuggestions(i, n)
                    })
                })
            },
            _autocomplete: function (e) {
                var t, n, i, s, r; ("rightKeyed" !== e.type && "leftKeyed" !== e.type || (t = this.inputView.isCursorAtEnd(), n = "ltr" === this.inputView.getLanguageDirection() ? "leftKeyed" === e.type : "rightKeyed" === e.type, t && !n)) && (i = this.inputView.getQuery(), s = this.inputView.getHintValue(), "" !== s && i !== s && (r = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(r.value), this.eventBus.trigger("autocompleted", r.datum, r.dataset)))
            },
            _propagateEvent: function (e) {
                this.eventBus.trigger(e.type)
            },
            destroy: function () {
                this.inputView.destroy(),
                this.dropdownView.destroy(),
                r(this.$node),
                this.$node = null
            },
            setQuery: function (e) {
                this.inputView.setQuery(e),
                this.inputView.setInputValue(e),
                this._clearHint(),
                this._clearSuggestions(),
                this._getSuggestions()
            }
        }),
        t
    }(); !
    function () {
        var t, i = {},
        r = "ttView";
        t = {
            initialize: function (t) {
                function o() {
                    var t, i = e(this),
                    o = new s({
                        el: i
                    });
                    t = n.map(a,
                    function (e) {
                        return e.initialize()
                    }),
                    i.data(r, new u({
                        input: i,
                        eventBus: o = new s({
                            el: i
                        }),
                        datasets: a
                    })),
                    e.when.apply(e, t).always(function () {
                        n.defer(function () {
                            o.trigger("initialized")
                        })
                    })
                }
                var a;
                return t = n.isArray(t) ? t : [t],
                0 === t.length && e.error("no datasets provided"),
                a = n.map(t,
                function (e) {
                    var t = i[e.name] ? i[e.name] : new l(e);
                    return e.name && (i[e.name] = t),
                    t
                }),
                this.each(o)
            },
            destroy: function () {
                function t() {
                    var t = e(this),
                    n = t.data(r);
                    n && (n.destroy(), t.removeData(r))
                }
                return this.each(t)
            },
            setQuery: function (t) {
                function n() {
                    var n = e(this).data(r);
                    n && n.setQuery(t)
                }
                return this.each(n)
            }
        },
        jQuery.fn.typeahead = function (e) {
            return t[e] ? t[e].apply(this, [].slice.call(arguments, 1)) : t.initialize.apply(this, arguments)
        }
    }()
}(window.jQuery);
var Hogan = {}; !
function (e, t) {
    function n(e) {
        return String(null === e || void 0 === e ? "" : e)
    }
    function i(e) {
        return e = n(e),
        c.test(e) ? e.replace(s, "&amp;").replace(r, "&lt;").replace(o, "&gt;").replace(a, "&#39;").replace(l, "&quot;") : e
    }
    e.Template = function (e, n, i, s) {
        this.r = e || this.r,
        this.c = i,
        this.options = s,
        this.text = n || "",
        this.buf = t ? [] : ""
    },
    e.Template.prototype = {
        r: function (e, t, n) {
            return ""
        },
        v: i,
        t: n,
        render: function (e, t, n) {
            return this.ri([e], t || {},
            n)
        },
        ri: function (e, t, n) {
            return this.r(e, t, n)
        },
        rp: function (e, t, n, i) {
            var s = n[e];
            return s ? (this.c && "string" == typeof s && (s = this.c.compile(s, this.options)), s.ri(t, n, i)) : ""
        },
        rs: function (e, t, n) {
            var i = e[e.length - 1];
            if (!d(i)) return void n(e, t, this);
            for (var s = 0; s < i.length; s++) e.push(i[s]),
            n(e, t, this),
            e.pop()
        },
        s: function (e, t, n, i, s, r, o) {
            var a;
            return d(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ls(e, t, n, i, s, r, o)), a = "" === e || !!e, !i && a && t && t.push("object" == typeof e ? e : t[t.length - 1]), a)
        },
        d: function (e, t, n, i) {
            var s = e.split("."),
            r = this.f(s[0], t, n, i),
            o = null;
            if ("." === e && d(t[t.length - 2])) return t[t.length - 1];
            for (var a = 1; a < s.length; a++) r && "object" == typeof r && s[a] in r ? (o = r, r = r[s[a]]) : r = "";
            return i && !r ? !1 : (i || "function" != typeof r || (t.push(o), r = this.lv(r, t, n), t.pop()), r)
        },
        f: function (e, t, n, i) {
            for (var s = !1,
            r = null,
            o = !1,
            a = t.length - 1; a >= 0; a--) if (r = t[a], r && "object" == typeof r && e in r) {
                s = r[e],
                o = !0;
                break
            }
            return o ? (i || "function" != typeof s || (s = this.lv(s, t, n)), s) : i ? !1 : ""
        },
        ho: function (e, t, n, i, s) {
            var r = this.c,
            o = this.options;
            o.delimiters = s;
            var i = e.call(t, i);
            return i = null == i ? String(i) : i.toString(),
            this.b(r.compile(i, o).render(t, n)),
            !1
        },
        b: t ?
        function (e) {
            this.buf.push(e)
        } : function (e) {
            this.buf += e
        },
        fl: t ?
        function () {
            var e = this.buf.join("");
            return this.buf = [],
            e
        } : function () {
            var e = this.buf;
            return this.buf = "",
            e
        },
        ls: function (e, t, n, i, s, r, o) {
            var a = t[t.length - 1],
            l = null;
            if (!i && this.c && e.length > 0) return this.ho(e, a, n, this.text.substring(s, r), o);
            if (l = e.call(a), "function" == typeof l) {
                if (i) return !0;
                if (this.c) return this.ho(l, a, n, this.text.substring(s, r), o)
            }
            return l
        },
        lv: function (e, t, i) {
            var s = t[t.length - 1],
            r = e.call(s);
            return "function" == typeof r && (r = n(r.call(s)), this.c && ~r.indexOf("{{")) ? this.c.compile(r, this.options).render(s, i) : n(r)
        }
    };
    var s = /&/g,
    r = /</g,
    o = />/g,
    a = /\'/g,
    l = /\"/g,
    c = /[&<>\"\']/,
    d = Array.isArray ||
    function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
}("undefined" != typeof exports ? exports : Hogan),
function (e) {
    function t(e) {
        "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
    }
    function n(e) {
        return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
    }
    function i(e, t, n) {
        if (t.charAt(n) != e.charAt(0)) return !1;
        for (var i = 1,
        s = e.length; s > i; i++) if (t.charAt(n + i) != e.charAt(i)) return !1;
        return !0
    }
    function s(e, t, n, i) {
        for (var a = [], l = null, c = null; e.length > 0;) if (c = e.shift(), "#" == c.tag || "^" == c.tag || r(c, i)) n.push(c),
        c.nodes = s(e, c.tag, n, i),
        a.push(c);
        else {
            if ("/" == c.tag) {
                if (0 === n.length) throw new Error("Closing tag without opener: /" + c.n);
                if (l = n.pop(), c.n != l.n && !o(c.n, l.n, i)) throw new Error("Nesting error: " + l.n + " vs. " + c.n);
                return l.end = c.i,
                a
            }
            a.push(c)
        }
        if (n.length > 0) throw new Error("missing closing tag: " + n.pop().n);
        return a
    }
    function r(e, t) {
        for (var n = 0,
        i = t.length; i > n; n++) if (t[n].o == e.n) return e.tag = "#",
        !0
    }
    function o(e, t, n) {
        for (var i = 0,
        s = n.length; s > i; i++) if (n[i].c == e && n[i].o == t) return !0
    }
    function a(e) {
        return e.replace(b, "\\\\").replace(v, '\\"').replace(y, "\\n").replace(_, "\\r")
    }
    function l(e) {
        return ~e.indexOf(".") ? "d" : "f"
    }
    function c(e) {
        for (var t = "",
        n = 0,
        i = e.length; i > n; n++) {
            var s = e[n].tag;
            "#" == s ? t += d(e[n].nodes, e[n].n, l(e[n].n), e[n].i, e[n].end, e[n].otag + " " + e[n].ctag) : "^" == s ? t += u(e[n].nodes, e[n].n, l(e[n].n)) : "<" == s || ">" == s ? t += h(e[n]) : "{" == s || "&" == s ? t += f(e[n].n, l(e[n].n)) : "\n" == s ? t += g('"\\n"' + (e.length - 1 == n ? "" : " + i")) : "_v" == s ? t += p(e[n].n, l(e[n].n)) : void 0 === s && (t += g('"' + a(e[n]) + '"'))
        }
        return t
    }
    function d(e, t, n, i, s, r) {
        return "if(_.s(_." + n + '("' + a(t) + '",c,p,1),c,p,0,' + i + "," + s + ',"' + r + '")){_.rs(c,p,function(c,p,_){' + c(e) + "});c.pop();}"
    }
    function u(e, t, n) {
        return "if(!_.s(_." + n + '("' + a(t) + '",c,p,1),c,p,1,0,0,"")){' + c(e) + "};"
    }
    function h(e) {
        return '_.b(_.rp("' + a(e.n) + '",c,p,"' + (e.indent || "") + '"));'
    }
    function f(e, t) {
        return "_.b(_.t(_." + t + '("' + a(e) + '",c,p,0)));'
    }
    function p(e, t) {
        return "_.b(_.v(_." + t + '("' + a(e) + '",c,p,0)));'
    }
    function g(e) {
        return "_.b(" + e + ");"
    }
    var m = /\S/,
    v = /\"/g,
    y = /\n/g,
    _ = /\r/g,
    b = /\\/g,
    w = {
        "#": 1,
        "^": 2,
        "/": 3,
        "!": 4,
        ">": 5,
        "<": 6,
        "=": 7,
        _v: 8,
        "{": 9,
        "&": 10
    };
    e.scan = function (e, s) {
        function r() {
            v.length > 0 && (y.push(new String(v)), v = "")
        }
        function o() {
            for (var e = !0,
            t = x; t < y.length; t++) if (e = y[t].tag && w[y[t].tag] < w._v || !y[t].tag && null === y[t].match(m), !e) return !1;
            return e
        }
        function a(e, t) {
            if (r(), e && o()) for (var n, i = x; i < y.length; i++) y[i].tag || ((n = y[i + 1]) && ">" == n.tag && (n.indent = y[i].toString()), y.splice(i, 1));
            else t || y.push({
                tag: "\n"
            });
            _ = !1,
            x = y.length
        }
        function l(e, t) {
            var i = "=" + $,
            s = e.indexOf(i, t),
            r = n(e.substring(e.indexOf("=", t) + 1, s)).split(" ");
            return k = r[0],
            $ = r[1],
            s + i.length - 1
        }
        var c = e.length,
        d = 0,
        u = 1,
        h = 2,
        f = d,
        p = null,
        g = null,
        v = "",
        y = [],
        _ = !1,
        b = 0,
        x = 0,
        k = "{{",
        $ = "}}";
        for (s && (s = s.split(" "), k = s[0], $ = s[1]), b = 0; c > b; b++) f == d ? i(k, e, b) ? (--b, r(), f = u) : "\n" == e.charAt(b) ? a(_) : v += e.charAt(b) : f == u ? (b += k.length - 1, g = w[e.charAt(b + 1)], p = g ? e.charAt(b + 1) : "_v", "=" == p ? (b = l(e, b), f = d) : (g && b++, f = h), _ = b) : i($, e, b) ? (y.push({
            tag: p,
            n: n(v),
            otag: k,
            ctag: $,
            i: "/" == p ? _ - $.length : b + k.length
        }), v = "", b += $.length - 1, f = d, "{" == p && ("}}" == $ ? b++ : t(y[y.length - 1]))) : v += e.charAt(b);
        return a(_, !0),
        y
    },
    e.generate = function (t, n, i) {
        var s = 'var _=this;_.b(i=i||"");' + c(t) + "return _.fl();";
        return i.asString ? "function(c,p,i){" + s + ";}" : new e.Template(new Function("c", "p", "i", s), n, e, i)
    },
    e.parse = function (e, t, n) {
        return n = n || {},
        s(e, "", [], n.sectionTags || [])
    },
    e.cache = {},
    e.compile = function (e, t) {
        t = t || {};
        var n = e + "||" + !!t.asString,
        i = this.cache[n];
        return i ? i : (i = this.generate(this.parse(this.scan(e, t.delimiters), e, t), e, t), this.cache[n] = i)
    }
}("undefined" != typeof exports ? exports : Hogan),
jQuery.cookie = function (e, t, n) {
    if ("undefined" == typeof t) {
        var i = null;
        if (document.cookie && "" != document.cookie) for (var s = document.cookie.split(";"), r = 0; r < s.length; r++) {
            var o = jQuery.trim(s[r]);
            if (o.substring(0, e.length + 1) == e + "=") {
                i = decodeURIComponent(o.substring(e.length + 1));
                break
            }
        }
        return i
    }
    n = n || {},
    null === t && (t = "", n.expires = -1);
    var a = "";
    if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
        var l;
        "number" == typeof n.expires ? (l = new Date, l.setTime(l.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : l = n.expires,
        a = "; expires=" + l.toUTCString()
    }
    var c = n.path ? "; path=" + n.path : "",
    d = n.domain ? "; domain=" + n.domain : "",
    u = n.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), a, c, d, u].join("")
},
function (e, t, n, i) {
    var s = e(t);
    e.fn.lazyload = function (r) {
        function o() {
            var t = 0;
            l.each(function () {
                var n = e(this);
                if (!c.skip_invisible || n.is(":visible")) if (e.abovethetop(this, c) || e.leftofbegin(this, c));
                else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
                    if (++t > c.failure_limit) return !1
                } else n.trigger("appear"),
                t = 0
            })
        }
        var a, l = this,
        c = {
            threshold: 0,
            failure_limit: 12,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return r && (i !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), i !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(c, r)),
        a = c.container === i || c.container === t ? s : e(c.container),
        0 === c.event.indexOf("scroll") && a.bind(c.event,
        function () {
            return o()
        }),
        this.each(function () {
            var t = this,
            n = e(t);
            t.loaded = !1,
            n.attr("src") !== i && n.attr("src") !== !1 || n.is("img") && n.attr("src", c.placeholder),
            n.one("appear",
            function () {
                if (!this.loaded) {
                    if (c.appear) {
                        var i = l.length;
                        c.appear.call(t, i, c)
                    }
                    e("<img />").bind("load",
                    function () {
                        var i = n.attr("data-" + c.data_attribute);
                        n.hide(),
                        n.is("img") ? n.attr("src", i) : n.css("background-image", "url('" + i + "')"),
                        n[c.effect](c.effect_speed),
                        t.loaded = !0;
                        var s = e.grep(l,
                        function (e) {
                            return !e.loaded
                        });
                        if (l = e(s), c.load) {
                            var r = l.length;
                            c.load.call(t, r, c)
                        }
                    }).attr("src", n.attr("data-" + c.data_attribute))
                }
            }),
            0 !== c.event.indexOf("scroll") && n.bind(c.event,
            function () {
                t.loaded || n.trigger("appear")
            })
        }),
        s.bind("resize",
        function () {
            o()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && s.bind("pageshow",
        function (t) {
            t.originalEvent && t.originalEvent.persisted && l.each(function () {
                e(this).trigger("appear")
            })
        }),
        e(n).ready(function () {
            o()
        }),
        this
    },
    e.belowthefold = function (n, r) {
        var o;
        return o = r.container === i || r.container === t ? (t.innerHeight ? t.innerHeight : s.height()) + s.scrollTop() : e(r.container).offset().top + e(r.container).height(),
        o <= e(n).offset().top - r.threshold
    },
    e.rightoffold = function (n, r) {
        var o;
        return o = r.container === i || r.container === t ? s.width() + s.scrollLeft() : e(r.container).offset().left + e(r.container).width(),
        o <= e(n).offset().left - r.threshold
    },
    e.abovethetop = function (n, r) {
        var o;
        return o = r.container === i || r.container === t ? s.scrollTop() : e(r.container).offset().top,
        o >= e(n).offset().top + r.threshold + e(n).height()
    },
    e.leftofbegin = function (n, r) {
        var o;
        return o = r.container === i || r.container === t ? s.scrollLeft() : e(r.container).offset().left,
        o >= e(n).offset().left + r.threshold + e(n).width()
    },
    e.inviewport = function (t, n) {
        return !(e.rightoffold(t, n) || e.leftofbegin(t, n) || e.belowthefold(t, n) || e.abovethetop(t, n))
    },
    e.extend(e.expr[":"], {
        "below-the-fold": function (t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function (t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function (t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function (t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function (t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function (t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function (t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function (t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document),
window.onerror = function (e, t, n, i, s) { },
$("#uloginout").click(function () {
    $.cookie("uloginflag", null, {
        path: "/"
    })
});
var thisPageUrl = window.location.href;
"true" == $.cookie("uloginflag") ? loginMemue(thisPageUrl) : $.ajax({
    type: "post",
    url: "/getLoginUserInfo?v=" + Math.random(),
    dataType: "json",
    async: !0,
    success: function (e) {
        200 == e.code ? ($.cookie("uloginflag", "true", {
            path: "/"
        }), loginMemue(thisPageUrl)) : ($("#au_login").hide(), $("#un_login").show())
    }
}),
1 == $.cookie("closeAppAd") ? $("#footer-app-download-div").hide() : $("#footer-app-download-div").show(),
$("#footer_app_phone_del").click(function () {
    var e = new Date;
    e.setTime(e.getTime() + 12096e5),
    $.cookie("closeAppAd", 1, {
        path: "/",
        expires: e
    }),
    $("#footer-app-download-div").hide()
}),
function (e) {
    e.fn.hoverIntent = function (t, n, i) {
        var s = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        s = "object" == typeof t ? e.extend(s, t) : e.isFunction(n) ? e.extend(s, {
            over: t,
            out: n,
            selector: i
        }) : e.extend(s, {
            over: t,
            out: t,
            selector: n
        });
        var r, o, a, l, c = function (e) {
            r = e.pageX,
            o = e.pageY
        },
        d = function (t, n) {
            return n.hoverIntent_t = clearTimeout(n.hoverIntent_t),
            Math.abs(a - r) + Math.abs(l - o) < s.sensitivity ? (e(n).off("mousemove.hoverIntent", c), n.hoverIntent_s = 1, s.over.apply(n, [t])) : (a = r, l = o, n.hoverIntent_t = setTimeout(function () {
                d(t, n)
            },
            s.interval), void 0)
        },
        u = function (e, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t),
            t.hoverIntent_s = 0,
            s.out.apply(t, [e])
        },
        h = function (t) {
            var n = jQuery.extend({},
            t),
            i = this;
            i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)),
            "mouseenter" == t.type ? (a = n.pageX, l = n.pageY, e(i).on("mousemove.hoverIntent", c), 1 != i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function () {
                d(n, i)
            },
            s.interval))) : (e(i).off("mousemove.hoverIntent", c), 1 == i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function () {
                u(n, i)
            },
            s.timeout)))
        };
        return this.on({
            "mouseenter.hoverIntent": h,
            "mouseleave.hoverIntent": h
        },
        s.selector)
    }
}(jQuery),
function (e) {
    "use strict";
    var t = function () {
        var t = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        },
        n = function () {
            var t = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            return t && e(window).load(function () {
                e("body").children().on("click", e.noop)
            }),
            t
        }(),
        i = function () {
            var e = document.documentElement.style;
            return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
        }(),
        s = function (e, n) {
            var i = t.menuClass;
            n.cssArrows && (i += " " + t.menuArrowClass),
            e.toggleClass(i)
        },
        r = function (n, i) {
            return n.find("li." + i.pathClass).slice(0, i.pathLevels).addClass(i.hoverClass + " " + t.bcClass).filter(function () {
                return e(this).children(i.popUpSelector).hide().show().length
            }).removeClass(i.pathClass)
        },
        o = function (e) {
            e.children("a").toggleClass(t.anchorClass)
        },
        a = function (e) {
            var t = e.css("ms-touch-action");
            t = "pan-y" === t ? "auto" : "pan-y",
            e.css("ms-touch-action", t)
        },
        l = function (t, s) {
            var r = "li:has(" + s.popUpSelector + ")";
            e.fn.hoverIntent && !s.disableHI ? t.hoverIntent(d, u, r) : t.on("mouseenter.superfish", r, d).on("mouseleave.superfish", r, u);
            var o = "MSPointerDown.superfish";
            n || (o += " touchend.superfish"),
            i && (o += " mousedown.superfish"),
            t.on("focusin.superfish", "li", d).on("focusout.superfish", "li", u).on(o, "a", s, c)
        },
        c = function (t) {
            var n = e(this),
            i = n.siblings(t.data.popUpSelector);
            i.length > 0 && i.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === t.type ? n.trigger("focus") : e.proxy(d, n.parent("li"))())
        },
        d = function () {
            var t = e(this),
            n = p(t);
            clearTimeout(n.sfTimer),
            t.siblings().superfish("hide").end().superfish("show")
        },
        u = function () {
            var t = e(this),
            i = p(t);
            n ? e.proxy(h, t, i)() : (clearTimeout(i.sfTimer), i.sfTimer = setTimeout(e.proxy(h, t, i), i.delay))
        },
        h = function (t) {
            t.retainPath = e.inArray(this[0], t.$path) > -1,
            this.superfish("hide"),
            this.parents("." + t.hoverClass).length || (t.onIdle.call(f(this)), t.$path.length && e.proxy(d, t.$path)())
        },
        f = function (e) {
            return e.closest("." + t.menuClass)
        },
        p = function (e) {
            return f(e).data("sf-options")
        };
        return {
            hide: function (e) {
                if (this.length) {
                    var t = this,
                    n = p(t);
                    if (!n) return this;
                    var i = n.retainPath === !0 ? n.$path : "",
                    s = t.find("li." + n.hoverClass).add(this).not(i).removeClass(n.hoverClass).children(n.popUpSelector),
                    r = n.speedOut;
                    e && (s.show(), r = 0),
                    n.retainPath = !1,
                    n.onBeforeHide.call(s),
                    s.hide(0)
                }
                return this
            },
            show: function () {
                var e = p(this);
                if (!e) return this;
                if (e.hoverStyle) {
                    var t = this.parent().parent(),
                    n = this.children("ul"),
                    i = t.height(),
                    s = n.height();
                    if (s > i) {
                        var r = this.innerHeight(),
                        o = t.children().children().index(this),
                        a = r * o;
                        e.toTopMargin && (a += e.toTopMargin),
                        n.css({})
                    } else this.children("ul").css(e.hoverStyle)
                }
                var l = this.addClass(e.hoverClass),
                c = l.children(e.popUpSelector);
                return e.onBeforeShow.call(c),
                c.show(0),
                this
            },
            destroy: function () {
                return this.each(function () {
                    var n, i = e(this),
                    r = i.data("sf-options");
                    return r ? (n = i.find(r.popUpSelector).parent("li"), clearTimeout(r.sfTimer), s(i, r), o(n), a(i), i.off(".superfish").off(".hoverIntent"), n.children(r.popUpSelector).attr("style",
                    function (e, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }), r.$path.removeClass(r.hoverClass + " " + t.bcClass).addClass(r.pathClass), i.find("." + r.hoverClass).removeClass(r.hoverClass), r.onDestroy.call(i), void i.removeData("sf-options")) : !1
                })
            },
            init: function (n) {
                return this.each(function () {
                    var i = e(this);
                    if (i.data("sf-options")) return !1;
                    var c = e.extend({},
                    e.fn.superfish.defaults, n),
                    d = i.find(c.popUpSelector).parent("li");
                    c.$path = r(i, c),
                    i.data("sf-options", c),
                    s(i, c),
                    o(d),
                    a(i),
                    l(i, c),
                    d.not("." + t.bcClass).superfish("hide", !0),
                    c.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function (n, i) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? e.error("Method " + n + " does not exist on jQuery.fn.superfish") : t.init.apply(this, arguments)
    },
    e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "NavDefault",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "normal",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        toTopMargin: 16
    },
    e.fn.extend({
        hideSuperfishUl: t.hide,
        showSuperfishUl: t.show
    })
}(jQuery),
$("#dropdown_menu").superfish({
    speed: "fast",
    speedOut: "fast",
    delay: "100",
    disableHI: !0
}),
$("li #weixin_down").mouseenter(function () {
    $(this).parent().css("border-bottom", "none"),
    $(this).next().show(),
    $(this).addClass("wx-hover")
}),
$("#weixin_block").mouseleave(function () {
    $("#weixin_appear").hide(),
    $("#weixin_down").removeClass("wx-hover")
}),
$("#phone_down").mouseenter(function () {
    $(this).parent().css("border-bottom", "none"),
    $(this).next().show(),
    $(this).addClass("wx-hover")
}),
$("#phone_block").mouseleave(function () {
    $("#phone_appear").hide(),
    $("#phone_down").removeClass("wx-hover")
});
var moreSelected = !0,
$themeChildren = $(".header_themlist").children();
if ($themeChildren.each(function () {
        var e = $(this).find("a").attr("rel"),
        t = $("#themeEname").val();
        t && t === e && (moreSelected = !1, $themeChildren.removeClass("selected"), $(this).addClass("selected"))
}), moreSelected && $("#themeEname").length > 0 && ($themeChildren.removeClass("selected"), $(".moreitems").find(".more").addClass("selected")), $("#isHomeBander").val()) $themeChildren.eq(0).addClass("selected");
else {
    var $categorys = $(".categorys");
    $categorys.css("cursor", "pointer"),
    $categorys.addClass("down"),
    $categorys.mouseenter(function () {
        $(this).removeClass("down"),
        $(this).addClass("up"),
        $(this).find(".continents").show()
    }),
    $categorys.mouseleave(function () {
        $(this).addClass("down"),
        $(this).removeClass("up"),
        $(this).find(".continents").hide()
    })
} -1 != window.location.pathname.indexOf("sales.html") && ($themeChildren.removeClass("selected"), $themeChildren.removeClass("hover"), $(".header_themlist").find(".flashsales_hot").addClass("selected")),
$(".header_tel_top").mouseenter(function () {
    $(this).children().eq(0).addClass("tel-hover"),
    $(this).children().eq(1).show()
}),
$(".header_tel_top").mouseleave(function () {
    $(this).children().eq(0).removeClass("tel-hover"),
    $(this).children().eq(1).hide()
}),
$(".moreitems").mouseenter(function () {
    var e = $(this).children();
    e.eq(1).show(),
    e.eq(0).addClass("up")
}),
$(".moreitems").mouseleave(function () {
    var e = $(this).children();
    e.eq(1).hide(),
    e.eq(0).removeClass("up")
}),
$(".header_themlist").children().each(function () {
    var e = $(this).find(".navitems_content");
    $(this).on("mouseenter",
    function () {
        $(this).addClass("hover"),
        e.show()
    }),
    $(this).on("mouseleave",
    function () {
        e.hide(),
        $(this).removeClass("hover")
    })
}),
Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    var t = this.length >>> 0,
    n = Number(arguments[1]) || 0;
    for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += t) ; t > n; n++) if (n in this && this[n] === e) return n;
    return -1
}),
$("#weixin").mouseover(function () {
    $(".footer_wxin").fadeIn("slow")
}),
$("#weixin").mouseout(function () {
    $(".footer_wxin").fadeOut("slow")
}),
$("#KeFuBtn").mouseenter(function () {
    $(this).removeClass("KeFuBox"),
    $(this).addClass("KeFuBoxAct")
}),
$("#KeFuBtn").mouseleave(function () {
    $(this).removeClass("KeFuBoxAct"),
    $(this).addClass("KeFuBox")
}),
$(".BackToTop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    },
    800)
}),
$(window).scroll(function () {
    $(window).scrollTop() < 300 ? $(".RightBox").hide() : $(".RightBox").show()
}),
$(".ACloseBtn").click(function () {
    $(".AdviseDone").hide(),
    $(".AdviseDoneThird").hide(),
    $(".AdviseDoneSecond").hide(),
    $(".AdviseUp").show(),
    $(".AdviseGroup").hide()
}),
$("#aSubmitBtn").click(function () {
    var e = $(".AdviseText").val().trim();
    return "" == e || void 0 == e ? ($(".VoidLimit").fadeIn(100), setTimeout(function () {
        $(".VoidLimit").hide()
    },
    1e3), !1) : e.length > 500 ? ($(".WordLimit").fadeIn(100), setTimeout(function () {
        $(".WordLimit").hide()
    },
    1e3), !1) : void $.ajax({
        url: "/user/addsuggestion?content=" + e,
        success: function (e) {
            var e = $.parseJSON(e),
            t = e.code;
            200 == t ? ($(".AdviseUp").hide(), $(".AdviseDone").show()) : 600 == t ? ($(".AdviseUp").hide(), $(".AdviseDoneThird").show()) : ($(".AdviseUp").hide(), $(".AdviseDoneSecond").show())
        }
    })
}),
$(".Advise").click(function () {
    $(".AdviseGroup").fadeIn(100)
}),
Function.prototype.delegate = function () {
    var e = this,
    t = this.scope,
    n = arguments,
    i = arguments.length,
    s = "function";
    return function () {
        for (var r = arguments.length,
        o = i > r ? i : r, a = 0; o > a; a++) arguments[a] && (n[a] = arguments[a]);
        n.length = o;
        for (var a = 0,
        l = n.length; l > a; a++) {
            var c = n[a];
            c && typeof c == s && 1 == c.late && (n[a] = c.apply(t || this, n))
        }
        return e.apply(t || this, n)
    }
};
var simplified = "啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座",
traditional = "啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鼈憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟産闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充衝沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕凋刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦複傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘杆柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鈎勾溝苟狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡挂褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴彙諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑迹激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際妓繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競淨炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫琅榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬狸離漓理李裏鯉禮莉荔吏栗麗厲勵礫曆利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟眯醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪呐鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬你匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽齧鑷鎳涅您檸獰凝甯擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖抛咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啓契砌器氣迄棄汽泣訖掐洽牽扡釺鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌牆薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺刹沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陝擅贍膳善汕扇繕墒傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡台泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探歎炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔縧萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟爲濰維葦萎委偉僞尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄凶胸匈洶雄熊休修羞朽嗅鏽秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勳熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒岩延言顔閻炎沿奄掩眼衍演豔堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液一壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤于盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓髒葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟真甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀症鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙志摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鍾衷終種腫重仲衆舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住注祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄准捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鑽纂嘴醉最罪尊遵昨左佐柞做作坐座",
traditionalized = translateText.delegate(null, !0),
simplized = translateText.delegate(null, !1),
cookieName = "language";
window.toChinese = function () {
    Cookie.set(cookieName, "tw"),
    window.location.reload()
},
window.toSimpleChinese = function () {
    Cookie.set(cookieName, "cn"),
    window.location.reload()
};
var Cookie = {
    set: function (e, t) {
        var n = new Date;
        n.setDate(n.getDate() + 6e5),
        document.cookie = e + "=" + escape(t) + ";path=/;expires=" + n.toGMTString()
    },
    del: function (e) {
        document.cookie = e + "=;path=/;expires=" + new Date(0).toGMTString()
    },
    get: function (e) {
        var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
        return null != t ? unescape(t[2]) : null
    }
};
initCurreny(),
initLanguage(),
$(function () {
    initLanguage()
}),
$("#zh_cn").click(function () {
    window.toSimpleChinese()
}),
$("#zh_tw").click(function () {
    window.toChinese()
}),
$("#currency li a").each(function () {
    $(this).click(function () {
        var e = $(this).attr("data-val");
        $.cookie("CurrencyType", null, {
            path: "/"
        }),
        $.cookie("CurrencyType", e, {
            path: "/",
            expires: 365
        }),
        window.location.reload()
    })
}),
function (e) {
    e.Zebra_DatePicker = function (t, n) {
        var i, s, r, o, a, l, c, d, u, h, f, p, g, m, v, y, _, b, w, x, k, $, C, A, I, S, T, D, E, O, M, U, L, V, j, H, z = {
            always_visible: !1,
            days: ["日", "一", "二", "三", "四", "五", "六"],
            days_abbr: !1,
            direction: 0,
            disabled_dates: !1,
            enabled_dates: !1,
            first_day_of_week: 1,
            format: "Y-m-d",
            header_navigation: ["&lt;", "&gt;"],
            inside: !0,
            lang_clear_date: "清除",
            months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            months_abbr: !1,
            offset: [5, -5],
            pair: !1,
            readonly_element: !0,
            select_other_months: !1,
            show_clear_date: 0,
            show_icon: !1,
            show_other_months: !0,
            show_select_today: "今日",
            show_week_number: !1,
            start_date: !1,
            strict: !0,
            view: "days",
            weekend_days: [0, 6],
            zero_pad: !1,
            onChange: null,
            onClear: null,
            onSelect: null
        },
        B = this;
        B.settings = {};
        var F = e(t),
        N = function (t) {
            if (!t) {
                B.settings = e.extend({},
                z, n);
                for (var $ in F.data()) 0 === $.indexOf("zdp_") && ($ = $.replace(/^zdp\_/, ""), void 0 !== z[$] && (B.settings[$] = F.data("zdp_" + $)))
            }
            B.settings.readonly_element && F.attr("readonly", "readonly");
            var D = {
                days: ["d", "j", "D"],
                months: ["F", "m", "M", "n", "t"],
                years: ["o", "Y", "y"]
            },
            E = !1,
            O = !1,
            H = !1,
            N = null;
            for (N in D) e.each(D[N],
            function (e, t) {
                B.settings.format.indexOf(t) > -1 && ("days" == N ? E = !0 : "months" == N ? O = !0 : "years" == N && (H = !0))
            });
            M = E && O && H ? ["years", "months", "days"] : !E && O && H ? ["years", "months"] : E || O || !H ? E || !O || H ? ["years", "months", "days"] : ["months"] : ["years"],
            -1 == e.inArray(B.settings.view, M) && (B.settings.view = M[M.length - 1]),
            k = [],
            x = [];
            for (var K, W = 0; 2 > W; W++) K = 0 === W ? B.settings.disabled_dates : B.settings.enabled_dates,
            e.isArray(K) && K.length > 0 && e.each(K,
            function () {
                for (var t = this.split(" "), n = 0; 4 > n; n++) {
                    t[n] || (t[n] = "*"),
                    t[n] = t[n].indexOf(",") > -1 ? t[n].split(",") : new Array(t[n]);
                    for (var i = 0; i < t[n].length; i++) if (t[n][i].indexOf("-") > -1) {
                        var s = t[n][i].match(/^([0-9]+)\-([0-9]+)/);
                        if (null !== s) {
                            for (var r = se(s[1]) ; r <= se(s[2]) ; r++) -1 == e.inArray(r, t[n]) && t[n].push(r + "");
                            t[n].splice(i, 1)
                        }
                    }
                    for (i = 0; i < t[n].length; i++) t[n][i] = isNaN(se(t[n][i])) ? t[n][i] : se(t[n][i])
                }
                0 === W ? k.push(t) : x.push(t)
            });
            var q, Y, Q = new Date,
            Z = B.settings.reference_date ? B.settings.reference_date : F.data("zdp_reference_date") && void 0 !== F.data("zdp_reference_date") ? F.data("zdp_reference_date") : Q;
            if (C = void 0, A = void 0, p = Z.getMonth(), u = Q.getMonth(), g = Z.getFullYear(), h = Q.getFullYear(), m = Z.getDate(), f = Q.getDate(), B.settings.direction === !0) C = Z;
            else if (B.settings.direction === !1) A = Z,
            T = A.getMonth(),
            S = A.getFullYear(),
            I = A.getDate();
            else if (!e.isArray(B.settings.direction) && G(B.settings.direction) && se(B.settings.direction) > 0 || e.isArray(B.settings.direction) && ((q = P(B.settings.direction[0])) || B.settings.direction[0] === !0 || G(B.settings.direction[0]) && B.settings.direction[0] > 0) && ((Y = P(B.settings.direction[1])) || B.settings.direction[1] === !1 || G(B.settings.direction[1]) && B.settings.direction[1] >= 0)) C = q ? q : new Date(g, p, m + se(e.isArray(B.settings.direction) ? B.settings.direction[0] === !0 ? 0 : B.settings.direction[0] : B.settings.direction)),
            p = C.getMonth(),
            g = C.getFullYear(),
            m = C.getDate(),
            Y && +Y >= +C ? A = Y : !Y && B.settings.direction[1] !== !1 && e.isArray(B.settings.direction) && (A = new Date(g, p, m + se(B.settings.direction[1]))),
            A && (T = A.getMonth(), S = A.getFullYear(), I = A.getDate());
            else if (!e.isArray(B.settings.direction) && G(B.settings.direction) && se(B.settings.direction) < 0 || e.isArray(B.settings.direction) && (B.settings.direction[0] === !1 || G(B.settings.direction[0]) && B.settings.direction[0] < 0) && ((q = P(B.settings.direction[1])) || G(B.settings.direction[1]) && B.settings.direction[1] >= 0)) A = new Date(g, p, m + se(e.isArray(B.settings.direction) ? B.settings.direction[0] === !1 ? 0 : B.settings.direction[0] : B.settings.direction)),
            T = A.getMonth(),
            S = A.getFullYear(),
            I = A.getDate(),
            q && +A > +q ? C = q : !q && e.isArray(B.settings.direction) && (C = new Date(S, T, I - se(B.settings.direction[1]))),
            C && (p = C.getMonth(), g = C.getFullYear(), m = C.getDate());
            else if (e.isArray(B.settings.disabled_dates) && B.settings.disabled_dates.length > 0) for (var X in k) if ("*" == k[X][0] && "*" == k[X][1] && "*" == k[X][2] && "*" == k[X][3]) {
                var ne = [];
                if (e.each(x,
                function () {
                        var e = this;
                        "*" != e[2][0] && ne.push(parseInt(e[2][0] + ("*" == e[1][0] ? "12" : ie(e[1][0], 2)) + ("*" == e[0][0] ? "*" == e[1][0] ? "31" : new Date(e[2][0], e[1][0], 0).getDate() : ie(e[0][0], 2)), 10))
                }), ne.sort(), ne.length > 0) {
                    var oe = (ne[0] + "").match(/([0-9]{4})([0-9]{2})([0-9]{2})/);
                    g = parseInt(oe[1], 10),
                    p = parseInt(oe[2], 10) - 1,
                    m = parseInt(oe[3], 10)
                }
                break
            }
            if (J(g, p, m)) {
                for (; J(g) ;) C ? (g++, p = 0) : (g--, p = 11);
                for (; J(g, p) ;) C ? (p++, m = 1) : (p--, m = new Date(g, p + 1, 0).getDate()),
                p > 11 ? (g++, p = 0, m = 1) : 0 > p && (g--, p = 11, m = new Date(g, p + 1, 0).getDate());
                for (; J(g, p, m) ;) C ? m++ : m--,
                Q = new Date(g, p, m),
                g = Q.getFullYear(),
                p = Q.getMonth(),
                m = Q.getDate();
                Q = new Date(g, p, m),
                g = Q.getFullYear(),
                p = Q.getMonth(),
                m = Q.getDate()
            }
            var ue = P(F.val() || (B.settings.start_date ? B.settings.start_date : ""));
            if (ue && B.settings.strict && J(ue.getFullYear(), ue.getMonth(), ue.getDate()) && F.val(""), re(ue), !B.settings.always_visible) {
                if (!t) {
                    if (B.settings.show_icon) {
                        "firefox" == de.name && F.is('input[type="text"]') && "inline" == F.css("display") && F.css("display", "inline-block");
                        var he = jQuery('<span class="Zebra_DatePicker_Icon_Wrapper"></span>').css({
                            display: F.css("display"),
                            position: "static" == F.css("position") ? "relative" : F.css("position"),
                            "float": F.css("float"),
                            top: F.css("top"),
                            right: F.css("right"),
                            bottom: F.css("bottom"),
                            left: F.css("left")
                        });
                        F.wrap(he).css({
                            position: "relative",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto"
                        }),
                        r = jQuery('<button type="button" class="Zebra_DatePicker_Icon' + ("disabled" == F.attr("disabled") ? " Zebra_DatePicker_Icon_Disabled" : "") + '">Pick a date</button>'),
                        B.icon = r,
                        U = r.add(F)
                    } else U = F;
                    U.bind("click",
                    function (e) {
                        e.preventDefault(),
                        F.attr("disabled") || ("none" != s.css("display") ? B.hide() : B.show())
                    }),
                    void 0 !== r && r.insertAfter(F)
                }
                if (void 0 !== r) {
                    r.attr("style", ""),
                    B.settings.inside && r.addClass("Zebra_DatePicker_Icon_Inside");
                    var fe = F.outerWidth(),
                    pe = F.outerHeight(),
                    ge = parseInt(F.css("marginLeft"), 10) || 0,
                    me = parseInt(F.css("marginTop"), 10) || 0,
                    ve = r.outerWidth(),
                    ye = r.outerHeight(),
                    _e = parseInt(r.css("marginLeft"), 10) || 0,
                    be = parseInt(r.css("marginRight"), 10) || 0;
                    B.settings.inside ? r.css({
                        top: me + (pe - ye) / 2,
                        left: ge + (fe - ve - be)
                    }) : r.css({
                        top: me + (pe - ye) / 2,
                        left: ge + fe + _e
                    })
                }
            }
            if (j = B.settings.show_select_today !== !1 && e.inArray("days", M) > -1 && !J(h, u, f) ? B.settings.show_select_today : !1, !t) {
                e(window).bind("resize", ce);
                var we = '<div class="Zebra_DatePicker"><table class="dp_header"><tr><td class="dp_previous">' + B.settings.header_navigation[0] + '</td><td class="dp_caption">&#032;</td><td class="dp_next">' + B.settings.header_navigation[1] + '</td></tr></table><table class="dp_daypicker"></table><table class="dp_monthpicker"></table><table class="dp_yearpicker"></table><table class="dp_footer"><tr><td class="dp_today"' + (B.settings.show_clear_date !== !1 ? ' style="width:50%"' : "") + ">" + j + '</td><td class="dp_clear"' + (j !== !1 ? ' style="width:50%"' : "") + ">" + B.settings.lang_clear_date + "</td></tr></table></div>";
                s = e(we),
                B.datepicker = s,
                o = e("table.dp_header", s),
                a = e("table.dp_daypicker", s),
                l = e("table.dp_monthpicker", s),
                c = e("table.dp_yearpicker", s),
                V = e("table.dp_footer", s),
                L = e("td.dp_today", V),
                d = e("td.dp_clear", V),
                B.settings.always_visible ? F.attr("disabled") || (B.settings.always_visible.append(s), B.show()) : e("body").append(s),
                s.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)", "mouseover",
                function () {
                    e(this).addClass("dp_hover")
                }).delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)", "mouseout",
                function () {
                    e(this).removeClass("dp_hover")
                }),
                R(e("td", o)),
                e(".dp_previous", o).bind("click",
                function () {
                    e(this).hasClass("dp_blocked") || ("months" == i ? y-- : "years" == i ? y -= 12 : --v < 0 && (v = 11, y--), ee())
                }),
                e(".dp_caption", o).bind("click",
                function () {
                    i = "days" == i ? e.inArray("months", M) > -1 ? "months" : e.inArray("years", M) > -1 ? "years" : "days" : "months" == i ? e.inArray("years", M) > -1 ? "years" : e.inArray("days", M) > -1 ? "days" : "months" : e.inArray("days", M) > -1 ? "days" : e.inArray("months", M) > -1 ? "months" : "years",
                    ee()
                }),
                e(".dp_caption", o).unbind(),
                e(".dp_next", o).bind("click",
                function () {
                    e(this).hasClass("dp_blocked") || ("months" == i ? y++ : "years" == i ? y += 12 : 12 == ++v && (v = 0, y++), ee())
                }),
                a.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)", "click",
                function () {
                    B.settings.select_other_months && null !== (oe = e(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/)) ? te(oe[1], oe[2] - 1, oe[3], "days", e(this)) : te(y, v, se(e(this).html()), "days", e(this))
                }),
                l.delegate("td:not(.dp_disabled)", "click",
                function () {
                    var t = e(this).attr("class").match(/dp\_month\_([0-9]+)/);
                    v = se(t[1]),
                    -1 == e.inArray("days", M) ? te(y, v, 1, "months", e(this)) : (i = "days", B.settings.always_visible && F.val(""), ee())
                }),
                c.delegate("td:not(.dp_disabled)", "click",
                function () {
                    y = se(e(this).html()),
                    -1 == e.inArray("months", M) ? te(y, 1, 1, "years", e(this)) : (i = "months", B.settings.always_visible && F.val(""), ee())
                }),
                e(L).bind("click",
                function (t) {
                    t.preventDefault(),
                    te(h, u, f, "days", e(".dp_current", a)),
                    B.settings.always_visible && B.show(),
                    B.hide()
                }),
                e(d).bind("click",
                function (t) {
                    t.preventDefault(),
                    F.val(""),
                    B.settings.always_visible ? (_ = null, b = null, w = null, e("td.dp_selected", s).removeClass("dp_selected")) : (_ = null, b = null, w = null, v = null, y = null),
                    B.hide(),
                    B.settings.onClear && "function" == typeof B.settings.onClear && B.settings.onClear(F)
                }),
                B.settings.always_visible || e(document).bind({
                    mousedown: le,
                    keyup: ae
                }),
                ee()
            }
        };
        B.destroy = function () {
            void 0 !== B.icon && B.icon.remove(),
            B.datepicker.remove(),
            e(document).unbind("keyup", ae),
            e(document).unbind("mousedown", le),
            e(window).unbind("resize", ce),
            F.removeData("Zebra_DatePicker"),
            delete B
        },
        B.hide = function () {
            B.settings.always_visible || (Z("hide"), s.hide())
        },
        B.show = function () {
            i = B.settings.view;
            var t = P(F.val() || (B.settings.start_date ? B.settings.start_date : ""));
            if (t ? (b = t.getMonth(), v = t.getMonth(), w = t.getFullYear(), y = t.getFullYear(), _ = t.getDate(), J(w, b, _) && (B.settings.strict && F.val(""), v = p, y = g)) : (v = p, y = g), ee(), B.settings.always_visible) s.show();
            else {
                var n = s.outerWidth(),
                o = s.outerHeight(),
                a = void 0 !== r ? r.offset().left + r.outerWidth(!0) : F.offset().left,
                l = void 0 !== r ? r.offset().top : F.offset().top + F.outerHeight(!0),
                c = e(window).width(),
                d = e(window).height(),
                u = e(window).scrollTop(),
                h = e(window).scrollLeft();
                a + n > h + c && (a = h + c - n),
                h > a && (a = h),
                l + o > u + d && (l = u + d - o),
                u > l && (l = u),
                s.css({
                    left: a,
                    top: l
                }),
                s.fadeIn("explorer" == de.name && de.version < 9 ? 0 : 150, "linear"),
                Z()
            }
        },
        B.update = function (t) {
            B.original_direction && (B.original_direction = B.direction),
            B.settings = e.extend(B.settings, t),
            N(!0)
        };
        var P = function (t) {
            if (t += "", "" !== e.trim(t)) {
                for (var n = K(B.settings.format), i = ["d", "D", "j", "l", "N", "S", "w", "F", "m", "M", "n", "Y", "y"], s = [], r = [], o = null, a = null, l = 0; l < i.length; l++) (o = n.indexOf(i[l])) > -1 && s.push({
                    character: i[l],
                    position: o
                });
                if (s.sort(function (e, t) {
                        return e.position - t.position
                }), e.each(s,
                function (e, t) {
                        switch (t.character) {
                        case "d":
                                r.push("0[1-9]|[12][0-9]|3[01]");
                                break;
                        case "D":
                                r.push("[a-z]{3}");
                                break;
                        case "j":
                                r.push("[1-9]|[12][0-9]|3[01]");
                                break;
                        case "l":
                                r.push("[a-z]+");
                                break;
                        case "N":
                                r.push("[1-7]");
                                break;
                        case "S":
                                r.push("st|nd|rd|th");
                                break;
                        case "w":
                                r.push("[0-6]");
                                break;
                        case "F":
                                r.push("[a-z]+");
                                break;
                        case "m":
                                r.push("0[1-9]|1[012]+");
                                break;
                        case "M":
                                r.push("[a-z]{3}");
                                break;
                        case "n":
                                r.push("[1-9]|1[012]");
                                break;
                        case "Y":
                                r.push("[0-9]{4}");
                                break;
                        case "y":
                                r.push("[0-9]{2}")
                }
                }), r.length && (s.reverse(), e.each(s,
                function (e, t) {
                        n = n.replace(t.character, "(" + r[r.length - e - 1] + ")")
                }), r = new RegExp("^" + n + "$", "ig"), a = r.exec(t))) {
                    var c, d = new Date,
                    u = d.getDate(),
                    h = d.getMonth() + 1,
                    f = d.getFullYear(),
                    p = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    g = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    m = !0;
                    if (s.reverse(), e.each(s,
                    function (t, n) {
                            if (!m) return !0;
                            switch (n.character) {
                            case "m":
                            case "n":
                                    h = se(a[t + 1]);
                                    break;
                            case "d":
                            case "j":
                                    u = se(a[t + 1]);
                                    break;
                            case "D":
                            case "l":
                            case "F":
                            case "M":
                                    c = "D" == n.character || "l" == n.character ? B.settings.days : B.settings.months,
                                    m = !1,
                                    e.each(c,
                                    function (e, i) {
                                            if (m) return !0;
                                            if (a[t + 1].toLowerCase() == i.substring(0, "D" == n.character || "M" == n.character ? 3 : i.length).toLowerCase()) {
                                                    switch (n.character) {
                                                    case "D":
                                                            a[t + 1] = p[e].substring(0, 3);
                                                            break;
                                                    case "l":
                                                            a[t + 1] = p[e];
                                                            break;
                                                    case "F":
                                                            a[t + 1] = g[e],
                                                            h = e + 1;
                                                            break;
                                                    case "M":
                                                            a[t + 1] = g[e].substring(0, 3),
                                                            h = e + 1
                    }
                                                    m = !0
                    }
                    });
                                    break;
                            case "Y":
                                    f = se(a[t + 1]);
                                    break;
                            case "y":
                                    f = "19" + se(a[t + 1])
                    }
                    }), m) {
                        var v = new Date(f, (h || 1) - 1, u || 1);
                        if (v.getFullYear() == f && v.getDate() == (u || 1) && v.getMonth() == (h || 1) - 1) return v
                    }
                }
                return !1
            }
        },
        R = function (e) {
            "firefox" == de.name ? e.css("MozUserSelect", "none") : "explorer" == de.name ? e.bind("selectstart",
            function () {
                return !1
            }) : e.mousedown(function () {
                return !1
            })
        },
        K = function (e) {
            return e.replace(/([-.,*+?^${}()|[\]\/\\])/g, "\\$1")
        },
        W = function (t) {
            for (var n = "",
            i = t.getDate(), s = t.getDay(), r = B.settings.days[s], o = t.getMonth() + 1, a = B.settings.months[o - 1], l = t.getFullYear() + "", c = 0; c < B.settings.format.length; c++) {
                var d = B.settings.format.charAt(c);
                switch (d) {
                    case "y":
                        l = l.substr(2);
                    case "Y":
                        n += l;
                        break;
                    case "m":
                        o = ie(o, 2);
                    case "n":
                        n += o;
                        break;
                    case "M":
                        a = e.isArray(B.settings.months_abbr) && void 0 !== B.settings.months_abbr[o - 1] ? B.settings.months_abbr[o - 1] : B.settings.months[o - 1].substr(0, 3);
                    case "F":
                        n += a;
                        break;
                    case "d":
                        i = ie(i, 2);
                    case "j":
                        n += i;
                        break;
                    case "D":
                        r = e.isArray(B.settings.days_abbr) && void 0 !== B.settings.days_abbr[s] ? B.settings.days_abbr[s] : B.settings.days[s].substr(0, 3);
                    case "l":
                        n += r;
                        break;
                    case "N":
                        s++;
                    case "w":
                        n += s;
                        break;
                    case "S":
                        n += i % 10 == 1 && "11" != i ? "st" : i % 10 == 2 && "12" != i ? "nd" : i % 10 == 3 && "13" != i ? "rd" : "th";
                        break;
                    default:
                        n += d
                }
            }
            return n
        },
        q = function () {
            var t = new Date(y, v + 1, 0).getDate(),
            n = new Date(y, v, 1).getDay(),
            i = new Date(y, v, 0).getDate(),
            s = n - B.settings.first_day_of_week;
            s = 0 > s ? 7 + s : s,
            X(y + "年 " + B.settings.months[v]);
            var r = "<tr>";
            B.settings.show_week_number && (r += "<th>" + B.settings.show_week_number + "</th>");
            for (var o = 0; 7 > o; o++) r += "<th>" + (e.isArray(B.settings.days_abbr) && void 0 !== B.settings.days_abbr[(B.settings.first_day_of_week + o) % 7] ? B.settings.days_abbr[(B.settings.first_day_of_week + o) % 7] : B.settings.days[(B.settings.first_day_of_week + o) % 7].substr(0, 2)) + "</th>";
            for (r += "</tr><tr>", o = 0; 42 > o; o++) {
                o > 0 && o % 7 === 0 && (r += "</tr><tr>"),
                o % 7 === 0 && B.settings.show_week_number && (r += '<td class="dp_week_number">' + oe(new Date(y, v, o - s + 1)) + "</td>");
                var l = o - s + 1;
                if (B.settings.select_other_months && (s > o || l > t)) {
                    var c = new Date(y, v, l),
                    d = c.getFullYear(),
                    p = c.getMonth(),
                    g = c.getDate();
                    c = d + ie(p + 1, 2) + ie(g, 2)
                }
                if (s > o) r += '<td class="' + (B.settings.select_other_months && !J(d, p, g) ? "dp_not_in_month_selectable date_" + c : "dp_not_in_month") + '">' + (B.settings.select_other_months || B.settings.show_other_months ? ie(i - s + o + 1, B.settings.zero_pad ? 2 : 0) : "&nbsp;") + "</td>";
                else if (l > t) r += '<td class="' + (B.settings.select_other_months && !J(d, p, g) ? "dp_not_in_month_selectable date_" + c : "dp_not_in_month") + '">' + (B.settings.select_other_months || B.settings.show_other_months ? ie(l - t, B.settings.zero_pad ? 2 : 0) : "&nbsp;") + "</td>";
                else {
                    var m = (B.settings.first_day_of_week + o) % 7,
                    x = "";
                    J(y, v, l) ? (e.inArray(m, B.settings.weekend_days) > -1 ? x = "dp_weekend_disabled" : x += " dp_disabled", v == u && y == h && f == l && (x += " dp_disabled_current")) : (e.inArray(m, B.settings.weekend_days) > -1 && (x = "dp_weekend"), v == b && y == w && _ == l && (x += " dp_selected"), v == u && y == h && f == l && (x += " dp_current")),
                    r += "<td" + ("" !== x ? ' class="' + e.trim(x) + '"' : "") + ">" + (B.settings.zero_pad ? ie(l, 2) : l) + "</td>"
                }
            }
            r += "</tr>",
            a.html(e(r)),
            B.settings.always_visible && (D = e("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)", a)),
            a.show()
        },
        Y = function () {
            X(y);
            for (var t = "<tr>",
            n = 0; 12 > n; n++) {
                n > 0 && n % 3 === 0 && (t += "</tr><tr>");
                var i = "dp_month_" + n;
                J(y, n) ? i += " dp_disabled" : b !== !1 && b == n ? i += " dp_selected" : u == n && h == y && (i += " dp_current"),
                t += '<td class="' + e.trim(i) + '">' + (e.isArray(B.settings.months_abbr) && void 0 !== B.settings.months_abbr[n] ? B.settings.months_abbr[n] : B.settings.months[n].substr(0, 3)) + "</td>"
            }
            t += "</tr>",
            l.html(e(t)),
            B.settings.always_visible && (E = e("td:not(.dp_disabled)", l)),
            l.show()
        },
        Q = function () {
            X(y - 7 + " - " + (y + 4));
            for (var t = "<tr>",
            n = 0; 12 > n; n++) {
                n > 0 && n % 3 === 0 && (t += "</tr><tr>");
                var i = "";
                J(y - 7 + n) ? i += " dp_disabled" : w && w == y - 7 + n ? i += " dp_selected" : h == y - 7 + n && (i += " dp_current"),
                t += "<td" + ("" !== e.trim(i) ? ' class="' + e.trim(i) + '"' : "") + ">" + (y - 7 + n) + "</td>"
            }
            t += "</tr>",
            c.html(e(t)),
            B.settings.always_visible && (O = e("td:not(.dp_disabled)", c)),
            c.show()
        },
        Z = function (t) {
            if ("explorer" == de.name && 6 == de.version) {
                if (!$) {
                    var n = se(s.css("zIndex")) - 1;
                    $ = jQuery("<iframe>", {
                        src: 'javascript:document.write("")',
                        scrolling: "no",
                        frameborder: 0,
                        allowtransparency: "true",
                        css: {
                            zIndex: n,
                            position: "absolute",
                            top: -1e3,
                            left: -1e3,
                            width: s.outerWidth(),
                            height: s.outerHeight(),
                            filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)",
                            display: "none"
                        }
                    }),
                    e("body").append($)
                }
                switch (t) {
                    case "hide":
                        $.hide();
                        break;
                    default:
                        var i = s.offset();
                        $.css({
                            top: i.top,
                            left: i.left,
                            display: "block"
                        })
                }
            }
        },
        J = function (t, n, i) {
            if ((void 0 === t || isNaN(t)) && (void 0 === n || isNaN(n)) && (void 0 === i || isNaN(i))) return !1;
            if (e.isArray(B.settings.direction) || 0 !== se(B.settings.direction)) {
                var s = se(ne(t, "undefined" != typeof n ? ie(n, 2) : "", "undefined" != typeof i ? ie(i, 2) : "")),
                r = (s + "").length;
                if (8 == r && ("undefined" != typeof C && s < se(ne(g, ie(p, 2), ie(m, 2))) || "undefined" != typeof A && s > se(ne(S, ie(T, 2), ie(I, 2))))) return !0;
                if (6 == r && ("undefined" != typeof C && s < se(ne(g, ie(p, 2))) || "undefined" != typeof A && s > se(ne(S, ie(T, 2))))) return !0;
                if (4 == r && ("undefined" != typeof C && g > s || "undefined" != typeof A && s > S)) return !0
            }
            "undefined" != typeof n && (n += 1);
            var o = !1,
            a = !1;
            return k && e.each(k,
            function () {
                if (!o) {
                    var s = this;
                    if ((e.inArray(t, s[2]) > -1 || e.inArray("*", s[2]) > -1) && ("undefined" != typeof n && e.inArray(n, s[1]) > -1 || e.inArray("*", s[1]) > -1) && ("undefined" != typeof i && e.inArray(i, s[0]) > -1 || e.inArray("*", s[0]) > -1)) {
                        if ("*" == s[3]) return o = !0;
                        var r = new Date(t, n - 1, i).getDay();
                        if (e.inArray(r, s[3]) > -1) return o = !0
                    }
                }
            }),
            x && e.each(x,
            function () {
                if (!a) {
                    var s = this;
                    if ((e.inArray(t, s[2]) > -1 || e.inArray("*", s[2]) > -1) && (a = !0, "undefined" != typeof n)) if (a = !0, e.inArray(n, s[1]) > -1 || e.inArray("*", s[1]) > -1) {
                        if ("undefined" != typeof i) if (a = !0, e.inArray(i, s[0]) > -1 || e.inArray("*", s[0]) > -1) {
                            if ("*" == s[3]) return a = !0;
                            var r = new Date(t, n - 1, i).getDay();
                            if (e.inArray(r, s[3]) > -1) return a = !0;
                            a = !1
                        } else a = !1
                    } else a = !1
                }
            }),
            x && a ? !1 : !(!k || !o)
        },
        G = function (e) {
            return !!(e + "").match(/^\-?[0-9]+$/)
        },
        X = function (t) {
            if (e(".dp_caption", o).html(t), e.isArray(B.settings.direction) || 0 !== se(B.settings.direction) || 1 == M.length && "months" == M[0]) {
                var n, s, r = y,
                a = v;
                "days" == i ? (s = !J(0 > a - 1 ? ne(r - 1, "11") : ne(r, ie(a - 1, 2))), n = !J(a + 1 > 11 ? ne(r + 1, "00") : ne(r, ie(a + 1, 2)))) : "months" == i ? ((!C || C.getFullYear() <= r - 1) && (s = !0), (!A || A.getFullYear() >= r + 1) && (n = !0)) : "years" == i && ((!C || C.getFullYear() < r - 7) && (s = !0), (!A || A.getFullYear() > r + 4) && (n = !0)),
                s ? e(".dp_previous", o).removeClass("dp_blocked") : (e(".dp_previous", o).addClass("dp_blocked"), e(".dp_previous", o).removeClass("dp_hover")),
                n ? e(".dp_next", o).removeClass("dp_blocked") : (e(".dp_next", o).addClass("dp_blocked"), e(".dp_next", o).removeClass("dp_hover"))
            }
        },
        ee = function () {
            if ("" === a.text() || "days" == i) {
                if ("" === a.text()) {
                    B.settings.always_visible || s.css("left", -1e3),
                    s.show(),
                    q();
                    var t = a.outerWidth(),
                    n = a.outerHeight();
                    l.css({
                        width: t,
                        height: n
                    }),
                    c.css({
                        width: t,
                        height: n
                    }),
                    o.css("width", t),
                    V.css("width", t),
                    s.hide()
                } else q();
                l.hide(),
                c.hide()
            } else "months" == i ? (Y(), a.hide(), c.hide()) : "years" == i && (Q(), a.hide(), l.hide());
            if (B.settings.onChange && "function" == typeof B.settings.onChange && void 0 !== i) {
                var r = "days" == i ? a.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)") : "months" == i ? l.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)") : c.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)");
                r.each(function () {
                    if ("days" == i) if (e(this).hasClass("dp_not_in_month_selectable")) {
                        var t = e(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/);
                        e(this).data("date", t[1] + "-" + t[2] + "-" + t[3])
                    } else e(this).data("date", y + "-" + ie(v + 1, 2) + "-" + ie(se(e(this).text()), 2));
                    else if ("months" == i) {
                        var t = e(this).attr("class").match(/dp\_month\_([0-9]+)/);
                        e(this).data("date", y + "-" + ie(se(t[1]) + 1, 2))
                    } else e(this).data("date", se(e(this).text()))
                }),
                B.settings.onChange(i, r, F)
            }
            B.settings.show_clear_date === !0 || 0 === B.settings.show_clear_date && "" !== F.val() || B.settings.always_visible && B.settings.show_clear_date !== !1 ? (d.show(), j ? (L.css("width", "50%"), d.css("width", "50%")) : (L.hide(), d.css("width", "100%"))) : (d.hide(), j ? L.show().css("width", "100%") : V.hide())
        },
        te = function (e, t, n, i, s) {
            var r = new Date(e, t, n, 12, 0, 0),
            o = "days" == i ? D : "months" == i ? E : O,
            a = W(r);
            F.val(a),
            B.settings.always_visible && (b = r.getMonth(), v = r.getMonth(), w = r.getFullYear(), y = r.getFullYear(), _ = r.getDate(), o.removeClass("dp_selected"), s.addClass("dp_selected"), "days" == i && s.hasClass("dp_not_in_month_selectable") && B.show()),
            B.hide(),
            re(r),
            B.settings.onSelect && "function" == typeof B.settings.onSelect && B.settings.onSelect(a, e + "-" + ie(t + 1, 2) + "-" + ie(n, 2), r, F),
            F.focus()
        },
        ne = function () {
            for (var e = "",
            t = 0; t < arguments.length; t++) e += arguments[t] + "";
            return e
        },
        ie = function (e, t) {
            for (e += ""; e.length < t;) e = "0" + e;
            return e
        },
        se = function (e) {
            return parseInt(e, 10)
        },
        re = function (t) {
            B.settings.pair && e.each(B.settings.pair,
            function () {
                var n = e(this);
                if (n.data && n.data("Zebra_DatePicker")) {
                    var i = n.data("Zebra_DatePicker");
                    i.update({
                        reference_date: t,
                        direction: 0 === i.settings.direction ? 1 : i.settings.direction
                    }),
                    i.settings.always_visible && i.show()
                } else n.data("zdp_reference_date", t)
            })
        },
        oe = function (e) {
            var t, n, i, s, r, o, a, l, c, d = e.getFullYear(),
            u = e.getMonth() + 1,
            h = e.getDate();
            return 3 > u ? (t = d - 1, n = (t / 4 | 0) - (t / 100 | 0) + (t / 400 | 0), i = ((t - 1) / 4 | 0) - ((t - 1) / 100 | 0) + ((t - 1) / 400 | 0), s = n - i, r = 0, o = h - 1 + 31 * (u - 1)) : (t = d, n = (t / 4 | 0) - (t / 100 | 0) + (t / 400 | 0), i = ((t - 1) / 4 | 0) - ((t - 1) / 100 | 0) + ((t - 1) / 400 | 0), s = n - i, r = s + 1, o = h + ((153 * (u - 3) + 2) / 5 | 0) + 58 + s),
            a = (t + n) % 7,
            h = (o + a - r) % 7,
            l = o + 3 - h,
            c = 0 > l ? 53 - ((a - s) / 5 | 0) : l > 364 + s ? 1 : (l / 7 | 0) + 1
        },
        ae = function (e) {
            "block" != s.css("display") && 27 != e.which || B.hide()
        },
        le = function (t) {
            if ("block" == s.css("display")) {
                if (B.settings.show_icon && e(t.target).get(0) === r.get(0)) return !0;
                0 === e(t.target).parents().filter(".Zebra_DatePicker").length && B.hide()
            }
        },
        ce = function () {
            B.hide(),
            void 0 !== r && (clearTimeout(H), H = setTimeout(function () {
                B.update()
            },
            100))
        },
        de = {
            init: function () {
                this.name = this.searchString(this.dataBrowser) || "",
                this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || ""
            },
            searchString: function (e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t].string,
                    i = e[t].prop;
                    if (this.versionSearchString = e[t].versionSearch || e[t].identity, n) {
                        if (-1 != n.indexOf(e[t].subString)) return e[t].identity
                    } else if (i) return e[t].identity
                }
            },
            searchVersion: function (e) {
                var t = e.indexOf(this.versionSearchString);
                if (-1 != t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
            },
            dataBrowser: [{
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "firefox"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "explorer",
                versionSearch: "MSIE"
            }]
        };
        B.getCurrentDate = function () {
            return new Date(h, u, f)
        },
        B.getFirstableDate = function () {
            return new Date(g, p, m)
        },
        de.init(),
        N()
    },
    e.fn.Zebra_DatePicker = function (t, n) {
        return this.each(function () {
            void 0 !== e(this).data("Zebra_DatePicker") && e(this).data("Zebra_DatePicker").destroy();
            var i = new e.Zebra_DatePicker(this, t);
            e(this).data("Zebra_DatePicker", i),
            "function" == typeof n && n(i.getCurrentDate(), i.getFirstableDate())
        })
    }
}(jQuery),
String.prototype.startWith = function (e) {
    var t = new RegExp("^" + e);
    return t.test(this)
},
String.prototype.replaceWith = function (e, t) {
    var n = new RegExp(e, "g"),
    i = this.replace(n, t);
    return i
},
String.prototype.Contain = function (e) {
    if (e) if (e.constructor == Array) for (var t = 0; t < e.length; t++) for (var n = 0; n < this.length; n++) {
        var i, s = e[t];
        if (s && (i = s.length > 1 ? this.substr(n, s.length) : this.substr(n, 1), s == i)) return !0
    } else if (e.constructor == String) {
        for (var t = 0; t < this.length; t++) if (this.length - t >= e.length && this.substr(t, e.length) == e) return !0
    } else layer.msg("参数有误！", 1, 8, "");
    return !1
},
String.prototype.endWith = function (e) {
    var t = new RegExp(e + "$");
    return t.test(this)
},
"function" != typeof String.prototype.trim && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
}),
!
function (e, t) {
    "use strict";
    var n, i, s = !1,
    r = "res/js/layer/",
    o = {
        hosts: function () {
            var e = location.href.match(/\:\d+/);
            return e = e ? e[0] : "",
            "//" + document.domain + e + "/"
        }(),
        getPath: function () {
            var e = document.scripts || n("script"),
            t = e[e.length - 1].src;
            return s ? t.substring(0, t.lastIndexOf("/") + 1) : this.hosts + r
        }
    };
    e.layer = {
        v: "1.7.0",
        ie6: !-[1] && !e.XMLHttpRequest,
        index: 0,
        path: o.getPath(),
        use: function (e, t) {
            var i = n("head")[0],
            e = e.replace(/\s/g, ""),
            s = /\.css$/.test(e),
            r = document.createElement(s ? "link" : "script"),
            o = e.replace(/\.|\//g, "");
            s && (r.setAttribute("type", "text/css"), r.setAttribute("rel", "stylesheet")),
            r.setAttribute(s ? "href" : "src", layer.path + e),
            r.setAttribute("id", o),
            n("#" + o)[0] || i.appendChild(r),
            n(r).ready(function () {
                t && t()
            })
        },
        ready: function (e) {
            return layer.use("skin/layer.css", e)
        },
        alert: function (e, t, i, s) {
            return n.layer({
                dialog: {
                    msg: e,
                    type: t,
                    yes: s
                },
                title: i,
                area: ["auto", "auto"]
            })
        },
        confirm: function (e, t, i, s) {
            return n.layer({
                dialog: {
                    msg: e,
                    type: 4,
                    btns: 2,
                    yes: t,
                    no: s
                },
                title: i
            })
        },
        msg: function (e, i, s, r) {
            var o, a = {
                title: !1,
                closeBtn: !1
            };
            return ("" == e || e == t) && (e = "&nbsp;"),
            i === t && (i = 2),
            "number" == typeof s ? o = s : (s = s || {},
            o = s.type, a.success = function () {
                layer.shift(s.rate)
            },
            a.shade = s.shade),
            a.time = i,
            a.dialog = {
                msg: e,
                type: o
            },
            a.end = "function" == typeof s ? s : r,
            n.layer(a)
        },
        load: function (e, t) {
            return "string" == typeof e ? this.msg(e, 0, 16) : n.layer({
                time: e,
                loading: {
                    type: t
                },
                bgcolor: t ? "#fff" : "",
                shade: [.1, "#000", !!t],
                border: [7, .3, "#000", !(3 === t || !t)],
                type: 3,
                title: ["", !1],
                closeBtn: [0, !1]
            })
        },
        tips: function (e, t, i, s, r, o) {
            var a = {
                type: 4,
                shade: !1,
                success: function (e) {
                    this.closeBtn || e.find(".xubox_tips").css({
                        "padding-right": 10
                    })
                },
                bgcolor: "",
                tips: {
                    msg: e,
                    follow: t
                }
            };
            return i = i || {},
            a.time = i.time || i,
            a.closeBtn = i.closeBtn || !1,
            a.maxWidth = i.maxWidth || s,
            a.tips.guide = i.guide || r,
            a.tips.style = i.style || o,
            n.layer(a)
        }
    };
    var a = function (e) {
        var t = this.config;
        layer.index++,
        this.index = layer.index,
        this.config = n.extend({},
        t, e),
        this.config.dialog = n.extend({},
        t.dialog, e.dialog),
        this.config.page = n.extend({},
        t.page, e.page),
        this.config.iframe = n.extend({},
        t.iframe, e.iframe),
        this.config.loading = n.extend({},
        t.loading, e.loading),
        this.config.tips = n.extend({},
        t.tips, e.tips),
        this.creat()
    };
    a.pt = a.prototype,
    a.pt.config = {
        type: 0,
        shade: [.3, "#000", !0],
        shadeClose: !1,
        fix: !0,
        move: [".xubox_title", !0],
        moveOut: !1,
        title: ["信息", !0],
        offset: ["200px", "50%"],
        area: ["310px", "auto"],
        closeBtn: [0, !0],
        time: 0,
        bgcolor: "#fff",
        border: [8, .3, "#000", !0],
        zIndex: 19891014,
        maxWidth: 400,
        dialog: {
            btns: 1,
            btn: ["确定", "取消"],
            type: 3,
            msg: "",
            yes: function (e) {
                layer.close(e)
            },
            no: function (e) {
                layer.close(e)
            }
        },
        page: {
            dom: "#xulayer",
            html: "",
            url: ""
        },
        iframe: {
            src: "http://sentsin.com"
        },
        loading: {
            type: 0
        },
        tips: {
            msg: "",
            follow: "",
            guide: 0,
            isGuide: !0,
            style: ["background-color:#FF9900; color:#fff;", "#FF9900"]
        },
        success: function (e) { },
        close: function (e) {
            layer.close(e)
        },
        end: function () { }
    },
    a.pt.type = ["dialog", "page", "iframe", "loading", "tips"],
    a.pt.space = function (e) {
        var e = e || "",
        t = this.index,
        n = this.config,
        i = n.dialog,
        s = this.dom,
        r = -1 === i.type ? "" : '<span class="xubox_msg xulayer_png32 xubox_msgico xubox_msgtype' + i.type + '"></span>',
        o = ['<div class="xubox_dialog">' + r + '<span class="xubox_msg xubox_text" style="' + (r ? "" : "padding-left:20px") + '">' + i.msg + "</span></div>", '<div class="xubox_page">' + e + "</div>", '<iframe allowtransparency="true" id="' + s.ifr + t + '" name="' + s.ifr + t + '" onload="$(this).removeClass(\'xubox_load\');" class="' + s.ifr + '" frameborder="0" src="' + n.iframe.src + '"></iframe>', '<span class="xubox_loading xubox_loading_' + n.loading.type + '"></span>', '<div class="xubox_tips" style="' + n.tips.style[0] + '"><div class="xubox_tipsMsg">' + n.tips.msg + '</div><i class="layerTipsG"></i></div>'],
        a = "",
        l = "",
        c = n.zIndex + t,
        d = "z-index:" + c + "; background-color:" + n.shade[1] + "; opacity:" + n.shade[0] + "; filter:alpha(opacity=" + 100 * n.shade[0] + ");";
        n.shade[2] && (a = '<div times="' + t + '" id="xubox_shade' + t + '" class="xubox_shade" style="' + d + '"></div>'),
        n.zIndex = c;
        var u = "",
        h = "",
        f = "z-index:" + (c - 1) + ";  background-color: " + n.border[2] + "; opacity:" + n.border[1] + "; filter:alpha(opacity=" + 100 * n.border[1] + "); top:-" + n.border[0] + "px; left:-" + n.border[0] + "px;";
        n.border[3] && (l = '<div id="xubox_border' + t + '" class="xubox_border" style="' + f + '"></div>'),
        n.closeBtn[1] && (h = '<a class="xubox_close xulayer_png32 xubox_close' + n.closeBtn[0] + '" href="javascript:;"></a>'),
        n.title[1] && (u = '<h2 class="xubox_title"><em>' + n.title[0] + "</em></h2>");
        var p = '<div times="' + t + '" showtime="' + n.time + '" style="z-index:' + c + '" id="' + s.lay + t + '" class="' + s.lay + '"><div style="background-color:' + n.bgcolor + "; z-index:" + c + '" class="xubox_main">' + o[n.type] + u + h + '<span class="xubox_botton"></span></div>' + l + "</div>";
        return [a, p]
    },
    a.pt.dom = {
        lay: "xubox_layer",
        ifr: "xubox_iframe"
    },
    a.pt.creat = function () {
        var e = this,
        t = "",
        s = this.config,
        r = s.dialog,
        o = e.config.title,
        a = e.dom,
        l = e.index;
        o.constructor === Array || (e.config.title = [o, !0]),
        o === !1 && (e.config.title = [o, !1]);
        var c = s.page,
        d = n("body"),
        u = function (n) {
            var n = n || "";
            t = e.space(n),
            d.append(t[0])
        };
        switch (s.type) {
            case 1:
                if ("" !== c.html) u('<div class="xuboxPageHtml">' + c.html + "</div>"),
                d.append(t[1]);
                else if ("" !== c.url) u('<div class="xuboxPageHtml" id="xuboxPageHtml' + l + '">' + c.html + "</div>"),
                d.append(t[1]),
                n.get(c.url,
                function (e) {
                    n("#xuboxPageHtml" + l).html(e),
                    c.ok && c.ok(e)
                });
                else {
                    if (0 != n(c.dom).parents(".xubox_page").length) return;
                    u(),
                    n(c.dom).show().wrap(t[1])
                }
                break;
            case 2:
                u(),
                d.append(t[1]);
                break;
            case 3:
                s.title = ["", !1],
                s.area = ["auto", "auto"],
                s.closeBtn = ["", !1],
                n(".xubox_loading")[0] && layer.close(n(".xubox_loading").parents("." + a.lay).attr("times")),
                u(),
                d.append(t[1]);
                break;
            case 4:
                s.title = ["", !1],
                s.area = ["auto", "auto"],
                s.fix = !1,
                s.border = !1,
                n(".xubox_tips")[0] && layer.close(n(".xubox_tips").parents("." + a.lay).attr("times")),
                u(),
                d.append(t[1]),
                n("#" + a.lay + l).find(".xubox_close").css({
                    top: 6,
                    right: 7
                });
                break;
            default:
                s.title[1] || (s.area = ["auto", "auto"]),
                n(".xubox_dialog")[0] && layer.close(n(".xubox_dialog").parents("." + a.lay).attr("times")),
                u(),
                d.append(t[1])
        }
        this.layerS = n("#xubox_shade" + l),
        this.layerB = n("#xubox_border" + l),
        this.layerE = n("#" + a.lay + l);
        var h = this.layerE;
        if (this.layerMian = h.find(".xubox_main"), this.layerTitle = h.find(".xubox_title"), this.layerText = h.find(".xubox_text"), this.layerPage = h.find(".xubox_page"), this.layerBtn = h.find(".xubox_botton"), -1 != s.offset[1].indexOf("px")) var f = parseInt(s.offset[1]);
        else if ("50%" == s.offset[1]) var f = s.offset[1];
        else var f = parseInt(s.offset[1]) / 100 * i.width();
        if (h.css({
            left: f + s.border[0],
            width: s.area[0],
            height: s.area[1]
        }), s.fix ? h.css({
            top: parseInt(s.offset[0]) + s.border[0]
        }) : h.css({
            top: parseInt(s.offset[0]) + i.scrollTop() + s.border[0],
            position: "absolute"
        }), 0 == s.type && s.title[1]) switch (r.btns) {
            case 0:
                e.layerBtn.html("").hide();
                break;
            case 2:
                e.layerBtn.html('<a href="javascript:;" class="xubox_yes xubox_botton2">' + r.btn[0] + '</a><a href="javascript:;" class="xubox_no xubox_botton3">' + r.btn[1] + "</a>");
                break;
            default:
                e.layerBtn.html('<a href="javascript:;" class="xubox_yes xubox_botton1">' + r.btn[0] + "</a>")
        }
        "auto" === h.css("left") ? (h.hide(), setTimeout(function () {
            h.show(),
            e.set(l)
        },
        500)) : e.set(l),
        s.time <= 0 || e.autoclose(),
        this.callback()
    },
    a.pt.set = function (e) {
        var t = this,
        s = t.layerE,
        r = t.config,
        o = (r.dialog, r.page),
        a = (r.loading, t.dom);
        switch (t.autoArea(e), r.title[1] ? layer.ie6 && t.layerTitle.css({
            width: s.outerWidth()
        }) : 4 != r.type && s.find(".xubox_close").addClass("xubox_close1"), s.attr({
            type: t.type[r.type]
        }), r.type) {
            case 1:
                s.find(o.dom).addClass("layer_pageContent"),
                r.shade[2] && s.css({
                    zIndex: r.zIndex + 1
                }),
                r.title[1] && t.layerPage.css({
                    top: t.layerTitle.outerHeight()
                });
                break;
            case 2:
                var l = s.find("." + a.ifr),
                c = s.height();
                l.addClass("xubox_load").css({
                    width: s.width()
                }),
                r.title[1] ? l.css({
                    top: t.layerTitle.height(),
                    height: c - t.layerTitle.height()
                }) : l.css({
                    top: 0,
                    height: c
                }),
                layer.ie6 && l.attr("src", r.iframe.src);
                break;
            case 3:
                break;
            case 4:
                var d = [0, s.outerHeight()],
                u = n(r.tips.follow),
                h = {
                    width: u.outerWidth(),
                    height: u.outerHeight(),
                    top: u.offset().top,
                    left: u.offset().left
                },
                f = s.find(".layerTipsG");
                r.tips.isGuide || f.remove(),
                s.outerWidth() > r.maxWidth && s.width(r.maxWidth),
                h.tipColor = r.tips.style[1],
                d[0] = s.outerWidth(),
                h.where = [function () {
                    h.tipLeft = h.left,
                    h.tipTop = h.top - d[1] - 10,
                    f.removeClass("layerTipsB").addClass("layerTipsT").css({
                        "border-right-color": h.tipColor
                    })
                },
                function () {
                    h.tipLeft = h.left + h.width + 10,
                    h.tipTop = h.top,
                    f.removeClass("layerTipsL").addClass("layerTipsR").css({
                        "border-bottom-color": h.tipColor
                    })
                },
                function () {
                    h.tipLeft = h.left,
                    h.tipTop = h.top + h.height + 10,
                    f.removeClass("layerTipsT").addClass("layerTipsB").css({
                        "border-right-color": h.tipColor
                    })
                },
                function () {
                    h.tipLeft = h.left - d[0] + 10,
                    h.tipTop = h.top,
                    f.removeClass("layerTipsR").addClass("layerTipsL").css({
                        "border-bottom-color": h.tipColor
                    })
                }],
                h.where[r.tips.guide](),
                0 === r.tips.guide ? h.top - (i.scrollTop() + d[1] + 16) < 0 && h.where[2]() : 1 === r.tips.guide ? i.width() - (h.left + h.width + d[0] + 16) > 0 || h.where[3]() : 2 === r.tips.guide ? h.top - i.scrollTop() + h.height + d[1] + 16 - i.height() > 0 && h.where[0]() : 3 === r.tips.guide && d[0] + 16 - h.left > 0 && h.where[1](),
                s.css({
                    left: h.tipLeft,
                    top: h.tipTop
                });
                break;
            default:
                t.layerMian.css({
                    "background-color":
                    "#fff"
                }),
                r.title[1] ? t.layerText.css({
                    paddingTop: 18 + t.layerTitle.outerHeight()
                }) : (s.find(".xubox_msgico").css({
                    top: 8
                }), t.layerText.css({
                    marginTop: 11
                }))
        }
        r.fadeIn && s.css({
            opacity: 0
        }).animate({
            opacity: 1
        },
        r.fadeIn),
        t.move()
    },
    a.pt.autoArea = function (e) {
        var t, i, s = this,
        r = s.layerE,
        o = s.config,
        a = o.page,
        l = s.layerMian,
        c = s.layerBtn,
        d = s.layerText,
        u = s.layerPage,
        h = s.layerB,
        f = 0,
        p = n(".xubox_loading");
        switch ("auto" === o.area[0] && l.outerWidth() >= o.maxWidth && r.css({
            width: o.maxWidth
        }), t = o.title[1] ? s.layerTitle.innerHeight() : 0, o.type) {
            case 0:
                var g = c.find("a");
                i = d.outerHeight() + 20,
                g.length > 0 && (f = g.outerHeight() + 20);
                break;
            case 1:
                i = n(a.dom).outerHeight(),
                "auto" === o.area[0] && r.css({
                    width: u.outerWidth()
                }),
                "" === a.html && "" === a.url || (i = u.outerHeight());
                break;
            case 3:
                i = p.outerHeight(),
                l.css({
                    width: p.width()
                })
        }
        "auto" === o.area[1] && l.css({
            height: t + i + f
        }),
        h.css({
            width: r.outerWidth() + 2 * o.border[0],
            height: r.outerHeight() + 2 * o.border[0]
        }),
        layer.ie6 && "auto" != o.area[0] && l.css({
            width: r.outerWidth()
        }),
        "50%" !== o.offset[1] && "" != o.offset[1] || 4 === o.type ? r.css({
            marginLeft: 0
        }) : r.css({
            marginLeft: -r.outerWidth() / 2
        })
    },
    a.pt.move = function () {
        var e = this,
        t = this.config,
        s = e.dom,
        r = {
            setY: 0,
            moveLayer: function () {
                if (0 == parseInt(r.layerE.css("margin-left"))) var e = parseInt(r.move.css("left"));
                else var e = parseInt(r.move.css("left")) + -parseInt(r.layerE.css("margin-left"));
                "fixed" !== r.layerE.css("position") && (e -= r.layerE.parent().offset().left, r.setY = 0),
                r.layerE.css({
                    left: e,
                    top: parseInt(r.move.css("top")) - r.setY
                })
            }
        };
        t.move[1] && e.layerE.find(t.move[0]).attr("move", "ok"),
        t.move[1] ? e.layerE.find(t.move[0]).css({
            cursor: "move"
        }) : e.layerE.find(t.move[0]).css({
            cursor: "auto"
        }),
        n(t.move[0]).on("mousedown",
        function (e) {
            if (e.preventDefault(), "ok" === n(this).attr("move")) {
                r.ismove = !0,
                r.layerE = n(this).parents("." + s.lay);
                var o = r.layerE.offset().left,
                a = r.layerE.offset().top,
                l = r.layerE.width() - 6,
                c = r.layerE.height() - 6;
                n("#xubox_moves")[0] || n("body").append('<div id="xubox_moves" class="xubox_moves" style="left:' + o + "px; top:" + a + "px; width:" + l + "px; height:" + c + 'px; z-index:2147483584"></div>'),
                r.move = n("#xubox_moves"),
                t.moveType && r.move.css({
                    opacity: 0
                }),
                r.moveX = e.pageX - r.move.position().left,
                r.moveY = e.pageY - r.move.position().top,
                "fixed" !== r.layerE.css("position") || (r.setY = i.scrollTop())
            }
        }),
        n(document).mousemove(function (e) {
            if (r.ismove) {
                var n = e.pageX - r.moveX,
                s = e.pageY - r.moveY;
                if (e.preventDefault(), !t.moveOut) {
                    r.setY = i.scrollTop();
                    var o = i.width() - r.move.outerWidth() - t.border[0],
                    a = t.border[0] + r.setY;
                    n < t.border[0] && (n = t.border[0]),
                    n > o && (n = o),
                    a > s && (s = a),
                    s > i.height() - r.move.outerHeight() - t.border[0] + r.setY && (s = i.height() - r.move.outerHeight() - t.border[0] + r.setY)
                }
                r.move.css({
                    left: n,
                    top: s
                }),
                t.moveType && r.moveLayer(),
                n = null,
                s = null,
                o = null,
                a = null
            }
        }).mouseup(function () {
            try {
                r.ismove && (r.moveLayer(), r.move.remove()),
                r.ismove = !1
            } catch (e) {
                r.ismove = !1
            }
            t.moveEnd && t.moveEnd()
        })
    },
    a.pt.autoclose = function () {
        var e = this,
        t = this.config.time,
        n = function () {
            t--,
            0 === t && (layer.close(e.index), clearInterval(e.autotime))
        };
        this.autotime = setInterval(n, 1e3)
    },
    o.config = {
        end: {}
    },
    a.pt.callback = function () {
        var e = this,
        t = e.layerE,
        n = e.config,
        i = n.dialog;
        e.openLayer(),
        e.config.success(t),
        layer.ie6 && e.IE6(),
        t.find(".xubox_close").off("click").on("click",
        function (t) {
            t.preventDefault(),
            n.close(e.index)
        }),
        t.find(".xubox_yes").off("click").on("click",
        function (t) {
            t.preventDefault(),
            i.yes(e.index)
        }),
        t.find(".xubox_no").off("click").on("click",
        function (t) {
            t.preventDefault(),
            i.no(e.index)
        }),
        this.layerS.off("click").on("click",
        function (t) {
            t.preventDefault(),
            e.config.shadeClose && layer.close(e.index)
        }),
        o.config.end[e.index] = n.end
    },
    a.pt.IE6 = function () {
        var e = this,
        t = e.layerE,
        s = n("select"),
        r = e.dom,
        o = t.offset().top;
        if (e.config.fix) var a = function () {
            t.css({
                top: n(document).scrollTop() + o
            })
        };
        else var a = function () {
            t.css({
                top: o
            })
        };
        a(),
        i.scroll(a),
        n.each(s,
        function (e, t) {
            var i = n(this);
            i.parents("." + r.lay)[0] || "none" == i.css("display") || i.attr({
                layer: "1"
            }).hide(),
            i = null
        }),
        e.reselect = function () {
            n.each(s,
            function (e, t) {
                var i = n(this);
                i.parents("." + r.lay)[0] || 1 == i.attr("layer") && n("." + r.lay).length < 1 && i.removeAttr("layer").show(),
                i = null
            })
        }
    },
    a.pt.openLayer = function () {
        var e = this,
        t = e.dom;
        layer.autoArea = function (t) {
            return e.autoArea(t)
        },
        layer.getIndex = function (e) {
            return n(e).parents("." + t.lay).attr("times")
        },
        layer.getChildFrame = function (e, i) {
            return i = i || n("." + t.ifr).parents("." + t.lay).attr("times"),
            n("#" + t.lay + i).find("." + t.ifr).contents().find(e)
        },
        layer.getFrameIndex = function (e) {
            return n(e ? "#" + e : "." + t.ifr).parents("." + t.lay).attr("times")
        },
        layer.iframeAuto = function (e) {
            e = e || n("." + t.ifr).parents("." + t.lay).attr("times");
            var i = this.getChildFrame("body", e).outerHeight(),
            s = n("#" + t.lay + e),
            r = s.find(".xubox_title"),
            o = 0; !r || (o = r.height()),
            s.css({
                height: i + o
            });
            var a = -parseInt(n("#xubox_border" + e).css("top"));
            n("#xubox_border" + e).css({
                height: i + 2 * a + o
            }),
            n("#" + t.ifr + e).css({
                height: i
            })
        },
        layer.close = function (i) {
            var s = n("#" + t.lay + i),
            r = n("#xubox_moves, #xubox_shade" + i);
            if (s.attr("type") == e.type[1]) if (s.find(".xuboxPageHtml")[0]) s.remove();
            else {
                s.find(".xubox_close,.xubox_botton,.xubox_title,.xubox_border").remove();
                for (var a = 0; 3 > a; a++) s.find(".layer_pageContent").unwrap().hide()
            } else document.all && s.find("#" + t.ifr + i).remove(),
            s.remove();
            r.remove(),
            layer.ie6 && e.reselect(),
            "function" == typeof o.config.end[i] && o.config.end[i](),
            delete o.config.end[i]
        },
        layer.loadClose = function () {
            var e = n(".xubox_loading").parents("." + t.lay),
            i = e.attr("times");
            layer.close(i)
        },
        layer.shift = function (t, n) {
            var s = e.config,
            r = layer.ie6,
            o = e.layerE,
            a = 0,
            l = i.width(),
            c = i.height();
            a = "50%" == s.offset[1] || "" == s.offset[1] ? o.outerWidth() / 2 : o.outerWidth();
            var d = {
                t: {
                    top: s.border[0]
                },
                b: {
                    top: c - o.outerHeight() - s.border[0]
                },
                cl: a + s.border[0],
                ct: -o.outerHeight(),
                cr: l - a - s.border[0],
                fn: function () {
                    r && e.IE6()
                }
            };
            switch (t) {
                case "left-top":
                    o.css({
                        left:
                        d.cl,
                        top: d.ct
                    }).animate(d.t, n, d.fn);
                    break;
                case "top":
                    o.css({
                        top:
                        d.ct
                    }).animate(d.t, n, d.fn);
                    break;
                case "right-top":
                    o.css({
                        left:
                        d.cr,
                        top: d.ct
                    }).animate(d.t, n, d.fn);
                    break;
                case "right-bottom":
                    o.css({
                        left:
                        d.cr,
                        top: c
                    }).animate(d.b, n, d.fn);
                    break;
                case "bottom":
                    o.css({
                        top:
                        c
                    }).animate(d.b, n, d.fn);
                    break;
                case "left-bottom":
                    o.css({
                        left:
                        d.cl,
                        top: c
                    }).animate(d.b, n, d.fn);
                    break;
                case "left":
                    o.css({
                        left:
                        -o.outerWidth(),
                        marginLeft: 0
                    }).animate({
                        left: d.t.top
                    },
                    n, d.fn)
            }
        },
        layer.setMove = function () {
            return e.move()
        },
        layer.area = function (i, s) {
            var r = [n("#" + t.lay + i), n("#xubox_border" + i)],
            o = r[0].attr("type"),
            a = r[0].find(".xubox_main"),
            l = r[0].find(".xubox_title");
            if (o === e.type[1] || o === e.type[2]) {
                if (r[0].css(s), r[1][0] && r[1].css({
                    width: s.width - 2 * parseInt(r[1].css("left")),
                    height: s.height - 2 * parseInt(r[1].css("top"))
                }), a.css({
                    height: s.height
                }), o === e.type[2]) {
                    var c = r[0].find("iframe");
                    c.css({
                        width: s.width,
                        height: l ? s.height - l.outerHeight() : s.height
                    })
                }
                "0px" !== r[0].css("margin-left") && (s.hasOwnProperty("top") && r[0].css({
                    top: s.top - (r[1][0] && parseInt(r[1].css("top")))
                }), s.hasOwnProperty("left") && r[0].css({
                    left: s.left + r[0].outerWidth() / 2 - (r[1][0] && parseInt(r[1].css("left")))
                }), r[0].css({
                    marginLeft: -r[0].outerWidth() / 2
                }))
            }
        },
        layer.closeAll = function () {
            var e = n("." + t.lay);
            n.each(e,
            function () {
                var e = n(this).attr("times");
                layer.close(e)
            })
        },
        layer.zIndex = e.config.zIndex,
        layer.setTop = function (e) {
            var t = function () {
                layer.zIndex++,
                e.css("z-index", layer.zIndex + 1)
            };
            return layer.zIndex = parseInt(e[0].style.zIndex),
            e.on("mousedown", t),
            layer.zIndex
        }
    },
    o.run = function () {
        n = jQuery,
        i = n(e),
        layer.use("skin/layer.css"),
        n.layer = function (e) {
            var t = new a(e);
            return t.index
        }
    };
    var l = "../../init/jquery";
    e.seajs ? define([l],
    function (t, n, i) {
        o.run(),
        n.layer = [e.layer, e.$.layer]
    }) : o.run()
}(window),
$(function () {
    $(".products").hover(function () {
        $(this).addClass("hover"),
        $(this).find(".model1").attr("class", "model2"),
        $(this).find(".infos").show()
    }),
    $(".products").mouseleave(function () {
        $(this).removeClass("hover"),
        $(this).find(".model1").attr("class", "model1"),
        $(this).find(".infos").hide()
    });
    var e = common_checkbrowse(),
    t = "";
    t = "msie" == e.is && e.ver < 8 ? "show" : "fadeIn",
    $("img.lazy_img").lazyload({
        event: "scroll",
        effect: t,
        skip_invisible: !1,
        failure_limit: 12
    })
}),
InitSearch.prototype = {
    init: function () {
        this.cancelCur(),
        this.modelingLoc(),
        this.modelingThe(),
        this.searchClick(),
        this.searchSort(),
        this.clickChangeColor(),
        this.chickAll(),
        this.clearSearch()
    },
    cancelCur: function () {
        $(".search_cancel").on("click",
        function (e) {
            e.preventDefault();
            var t = $(this).parent().attr("rel");
            "ptheme" == t && $("#themeEname").val("AllThemes"),
            "theme" == t && $("#themeEname").val($("#search_ptheme_en").attr("rel")),
            "continent" == t && $("#cityName").val("alllocations"),
            "country" == t && ($("#cityName").val($("#search_continent_en").attr("rel")), $("#countryName").val("")),
            "city" == t && $("#cityName").val($("#search_country_en").attr("rel")),
            "label" == t && $("#labelName").val("AllLabel"),
            "applicableCrowd" == t && $("#search_applicableCrowd").val("allapplicableCrowd"),
            "contype" == t && $("#isFreeSale").val("allIsFreeSale"),
            "timerangetype" == t && $("#timeRange").val("allTimeRange"),
            search_beginSearchWithOut()
        })
    },
    searchClick: function () {
        $(".search_continent_click").length > 0 && $(".search_continent_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#cityName").val($(this).attr("rel")),
            search_beginSearchWithOut()
        }),
        $(".search_country_click").length > 0 && $(".search_country_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#cityName").val($(this).attr("rel")),
            search_beginSearchWithOut()
        }),
        $(".search_city_click").length > 0 && $(".search_city_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#cityName").val($(this).attr("rel")),
            search_beginSearchWithOut()
        }),
        $(".search_ftheme_click").length > 0 && $(".search_ftheme_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#themeEname").val($(this).attr("rel")),
            search_beginSearchWithOut()
        }),
        $(".search_ltheme_click").length > 0 && $(".search_ltheme_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#themeEname").val($(this).attr("rel")),
            search_beginSearchWithOut()
        }),
        $(".querydate").on("click",
        function (e) {
            e.preventDefault();
            var t = $("#StartDate").val();
            "" == t && (t = (new Date).Format("yyyy-MM-dd"));
            var n = $("#EndDate").val(),
            i = (new Date).Format("yyyy-MM-dd");
            if (t > n) layer.tips("起始日期不能大于截止日期", this, 2, 280, 1, ["background-color:#fe5098; color:#fff", "#fe5098"]);
            else if (i > n) layer.tips("截止日期不能大于当前日期", this, 2, 280, 1, ["background-color:#fe5098; color:#fff", "#fe5098"]);
            else {
                var s = t + "~" + n;
                $("#timeRange").val(s),
                search_beginSearchWithOut()
            }
        }),
        $(".fromtodate").on("click",
        function (e) {
            e.preventDefault();
            var t = $("#FromDate").val(),
            n = $("#ToDate").val(),
            i = (new Date).Format("yyyy-MM-dd");
            if (t > n) layer.tips("起始日期不能大于截止日期", this, 2, 280, 1, ["background-color:#fe5098; color:#fff", "#fe5098"]);
            else if (i > n) layer.tips("截止日期不能大于当前日期", this, 2, 280, 1, ["background-color:#fe5098; color:#fff", "#fe5098"]);
            else {
                var s = t + "~" + n;
                $("#timeRange").val(s),
                search_beginSearchWithOut()
            }
        }),
        $(".date_range_click").length > 0 && $(".date_range_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#timeRange").val($(this).attr("rel")),
            search_beginSearchWithOut()
        }),
        $(".search_confirm_click").length > 0 && $(".search_confirm_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#isFreeSale").val($(this).attr("rel")),
            search_beginSearchWithOut()
        })
    },
    modelingLoc: function () {
        var e = this.resLoc,
        t = "";
        if (e.length > 1) {
            e.length > 11 && $("#ShowMore").show();
            for (var n = 0; n < e.length; n++) t += '<a href="javascript:void(0)" class="search_continent_click loc" rel="' + e[n].english_name + '">' + e[n].chinese_name + "</a>"
        } else if (0 != e.length) {
            var i = e[0].countryList;
            if (i.length > 1) {
                i.length > 11 && $("#ShowMore").show();
                for (var n = 0; n < i.length; n++) t += '<a href="javascript:void(0)" class="search_country_click loc" rel="' + i[n].english_name + '">' + i[n].chinese_name + "</a>"
            } else {
                var s = i[0].cityList;
                s.length > 11 && $("#ShowMore").show();
                for (var n = 0; n < s.length; n++) t += '<a href="javascript:void(0)" class="search_city_click loc city_list" rel="' + s[n].english_name + '">' + s[n].chinese_name + "</a>"
            }
        }
        $(t).appendTo("#mdd")
    },
    modelingThe: function () {
        var e = this.resThe,
        t = "";
        if (e.length > 1) for (var n = 0; n < e.length; n++) "签证" != e[n].theme_name && (t += '<a href="javascript:void(0)" class="search_ftheme_click the" rel="' + e[n].theme_en_name + '">' + e[n].theme_name + "</a>");
        else if (1 == e.length) for (var i = e[0].last_theme, n = 0; n < i.length; n++) t += '<a href="javascript:void(0)" class="search_ltheme_click the theme_list" rel="' + i[n].englise_name + '">' + i[n].name + "</a>";
        $(t).appendTo("#leixing")
    },
    chickAll: function () {
        $(".search_allLoc_click").length > 0 && $(".search_allLoc_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#cityName").val($(this).attr("rel")),
            search_beginSearchWithOut()
        }),
        $(".search_allThe_click").length > 0 && $(".search_allThe_click").on("click",
        function (e) {
            e.preventDefault(),
            $("#themeEname").val($(this).attr("rel")),
            search_beginSearchWithOut()
        })
    },
    searchSort: function () {
        $(".sort_click").length > 0 && $(".sort_click").on("click",
        function (e) {
            if (e.preventDefault(), "sort_default" == $(this).attr("id") && ($("#sort_type").val($(this).attr("id")), search_beginSearch("sort_default", "1")), "soldprice_yuan" == $(this).attr("id")) {
                $("#sort_type").val($(this).attr("id"));
                var t = $("#orderType").val();
                search_beginSearch("soldpriceyuan", t)
            }
            "sale_amount" == $(this).attr("id") && ($("#sort_type").val($(this).attr("id")), search_beginSearch("sale_amount", "1")),
            "discount" == $(this).attr("id") && ($("#sort_type").val($(this).attr("id")), search_beginSearch("discount", "1"))
        })
    },
    clickChangeColor: function () {
        "discount" == ("" == $("#sort_type").val() ? "sort_default" : $("#sort_type").val()) && $("#discount").parent().addClass("hover"),
        "soldpriceyuan" == ("" == $("#sort_type").val() ? "sort_default" : $("#sort_type").val()) && $("#soldprice_yuan").parent().addClass("hover"),
        "sale_amount" == ("" == $("#sort_type").val() ? "sort_default" : $("#sort_type").val()) && $("#sale_amount").parent().addClass("hover"),
        "allOrderByConditions" == ("" == $("#sort_type").val() ? "allOrderByConditions" : $("#sort_type").val()) && $("#sort_default").parent().addClass("hover")
    },
    clearSearch: function () {
        0 == $(".search_cancel").length && $(".yxz").attr("style", "display:none "),
        ($(".loc").length < 1 || 1 == $(".loc").length && $("#check_city").html() == $(".city_list").html()) && $(".mdd").attr("style", "display:none "),
        ($(".the").length < 1 || 1 == $(".the").length && $("#check_theme").html() == $(".theme_list").html()) && $(".leixing").attr("style", "display:none "),
        $(".lab").length < 1 && $(".biaoqian").attr("style", "display:none "),
        $(".crowd").length < 1 && $(".renqun").attr("style", "display:none ")
    }
},
Date.prototype.Format = function (e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
    return e
},
$("#img_pattern").click(function () {
    $.cookie("viewType", "1", {
        expires: 1
    });
    var e = $("#img_pattern").attr("keyword"),
    t = !1; -1 != e.indexOf("orderValue=1") && (t = !0, e = e.replace("orderValue=1", "orderValue=2")),
    -1 != e.indexOf("orderValue=2") && 0 == t && (e = e.replace("orderValue=2", "orderValue=1")),
    -1 == e.indexOf("orderByType=soldpriceyuan") && -1 != e.indexOf("orderValue=2") && (e = e.replace("orderValue=2", "orderValue=1"));
    var n = e;
    $.blockUI({
        message: $("#load_img"),
        css: {
            top: "36%",
            left: "45%",
            width: "auto"
        }
    }),
    window.location.href = n
}),
$("#text_pattern").click(function () {
    $.cookie("viewType", "2", {
        expires: 1
    });
    var e = $("#text_pattern").attr("keyword"),
    t = !1; -1 != e.indexOf("orderValue=1") && (t = !0, e = e.replace("orderValue=1", "orderValue=2")),
    -1 != e.indexOf("orderValue=2") && 0 == t && (e = e.replace("orderValue=2", "orderValue=1")),
    -1 == e.indexOf("orderByType=soldpriceyuan") && -1 != e.indexOf("orderValue=2") && (e = e.replace("orderValue=2", "orderValue=1"));
    var n = e;
    $.blockUI({
        message: $("#load_img"),
        css: {
            top: "36%",
            left: "45%",
            width: "auto"
        }
    }),
    window.location.href = n
}),
$(document).ready(function () {
    "none" == $(".yxz").css("display") && $(".mdd").attr("style", "border-top:none!important")
}),
$(".Love").on("click",
function () {
    var e = this,
    t = $(e).closest(".products").find("dd b em").attr("id");
    $(e).hasClass("Active") ? $.ajax({
        url: "/user/deletewishlist",
        data: {
            tourId: t
        },
        success: function (t) {
            var n = t.code;
            if (601 == n) {
                var i = GetUrlRelativePath();
                window.location.href = "/signIn.html?targetUrl=" + i
            } else 200 == n && ($(e).removeClass("Active"), $(e).children("span").html("加入心愿单"))
        }
    }) : $.ajax({
        url: "/user/addwishlist",
        data: {
            tourId: t
        },
        success: function (t) {
            var n = t.code;
            if (601 == n) {
                var i = GetUrlRelativePath();
                window.location.href = "/signIn.html?targetUrl=" + i
            } else 200 == n && ($(e).children("span").html("已加入心愿单"), $(e).addClass("Active"))
        }
    })
}),
$(function () {
    $.ajax({
        url: "/user/querywishlists",
        type: "get",
        success: function (e) {
            var e = $.parseJSON(e),
            t = e.code;
            if (200 == t) {
                var n = "";
                $(".lists b em").each(function () {
                    n += $(this).attr("id"),
                    n += ","
                }),
                n = n.substring(0, n.length - 1);
                for (var i = e.list.length,
                s = 0; i > s; s++) {
                    var r = e.list[s].tour_id,
                    o = n.indexOf(r) >= 0;
                    if (o) {
                        var a = $("#" + r).closest("dl").find(".Love");
                        $(a).children("span").html("已加入心愿单"),
                        $(a).addClass("Active")
                    }
                }
            }
        }
    })
}),
$("#ShowMore").click(function () {
    $("#ShowMore").hide(),
    $("#mdd").css("height", "auto"),
    $("#HideMore").show()
}),
$("#HideMore").click(function () {
    $("#ShowMore").show(),
    $("#mdd").css("height", "25px"),
    $("#HideMore").hide()
}),
$(window).bind("pageshow",
function (e) {
    e.originalEvent.persisted && window.location.reload()
});
var initSearch = new InitSearch(searchData);
initSearch.init();
var businessVisit = document.getElementById("businessVisit");
if (businessVisit) {
    var tour_ids = "";
    $(".lists b em").each(function () {
        tour_ids += $(this).attr("id"),
        tour_ids += "-"
    }),
    tour_ids = tour_ids.substring(0, tour_ids.length - 1);
    var tourArray = tour_ids.split("-"),
    tourSplitLen = Math.round(tourArray.length / 2),
    tourArray1 = tourArray.splice(0, tourSplitLen),
    tour_ids = tourArray1.join("-") + "-" + tourArray.join("-"),
    priceList;
    $.ajax({
        type: "post",
        url: "/queryBusinessPrice",
        data: {
            tour_ids: tour_ids
        },
        async: !1,
        success: function (json) {
            if (json = eval("(" + json + ")"), 200 === json.code) {
                priceMap = json.data;
                for (var key in priceMap) {
                    var price = priceMap[key] < 0 ? 0 : priceMap[key],
                    htmlStr = "结算价：<b>¥<em id=" + key + ">" + price + "</em></b>起";
                    0 != price && $("#price_" + key + " .vip").html(htmlStr)
                }
            }
        }
    })
}
$("#FromDate").Zebra_DatePicker({
    direction: !0,
    pair: $("#ToDate")
}),
$("#ToDate").Zebra_DatePicker({
    direction: !0
}),
$("#leixing span a").each(function () {
    $(this).html() == $("#ThisMonth").html() && $("#ThisMonth").hide()
}),
$("#StartDate").Zebra_DatePicker({
    direction: !0,
    pair: $("#EndDate")
}),
$("#EndDate").Zebra_DatePicker({
    direction: !0
}),
function () {
    "use strict";
    function e(e) {
        function t(t, i) {
            var s, r, g = t == window,
            m = i && void 0 !== i.message ? i.message : void 0;
            if (i = e.extend({},
            e.blockUI.defaults, i || {}), !i.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (i.overlayCSS = e.extend({},
                e.blockUI.defaults.overlayCSS, i.overlayCSS || {}), s = e.extend({},
                e.blockUI.defaults.css, i.css || {}), i.onOverlayClick && (i.overlayCSS.cursor = "pointer"), r = e.extend({},
                e.blockUI.defaults.themedCSS, i.themedCSS || {}), m = void 0 === m ? i.message : m, g && f && n(window, {
                    fadeOut: 0
                }), m && "string" != typeof m && (m.parentNode || m.jquery)) {
                    var v = m.jquery ? m[0] : m,
                    y = {};
                    e(t).data("blockUI.history", y),
                    y.el = v,
                    y.parent = v.parentNode,
                    y.display = v.style.display,
                    y.position = v.style.position,
                    y.parent && y.parent.removeChild(v)
                }
                e(t).data("blockUI.onUnblock", i.onUnblock);
                var _, b, w, x, k = i.baseZ;
                _ = e(d || i.forceIframe ? '<iframe class="blockUI" style="z-index:' + k++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + i.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'),
                b = e(i.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + k++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + k++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),
                i.theme && g ? (x = '<div class="blockUI ' + i.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (k + 10) + ';display:none;position:fixed">', i.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : i.theme ? (x = '<div class="blockUI ' + i.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (k + 10) + ';display:none;position:absolute">', i.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (i.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : x = g ? '<div class="blockUI ' + i.blockMsgClass + ' blockPage" style="z-index:' + (k + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + i.blockMsgClass + ' blockElement" style="z-index:' + (k + 10) + ';display:none;position:absolute"></div>',
                w = e(x),
                m && (i.theme ? (w.css(r), w.addClass("ui-widget-content")) : w.css(s)),
                i.theme || b.css(i.overlayCSS),
                b.css("position", g ? "fixed" : "absolute"),
                (d || i.forceIframe) && _.css("opacity", 0);
                var $ = [_, b, w],
                C = e(g ? "body" : t);
                e.each($,
                function () {
                    this.appendTo(C)
                }),
                i.theme && i.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var A = h && (!e.support.boxModel || e("object,embed", g ? null : t).length > 0);
                if (u || A) {
                    if (g && i.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !g) var I = l(t, "borderTopWidth"),
                    S = l(t, "borderLeftWidth"),
                    T = I ? "(0 - " + I + ")" : 0,
                    D = S ? "(0 - " + S + ")" : 0;
                    e.each($,
                    function (e, t) {
                        var n = t[0].style;
                        if (n.position = "absolute", 2 > e) g ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + i.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"'),
                        g ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"'),
                        D && n.setExpression("left", D),
                        T && n.setExpression("top", T);
                        else if (i.centerY) g && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                        n.marginTop = 0;
                        else if (!i.centerY && g) {
                            var s = i.css && i.css.top ? parseInt(i.css.top, 10) : 0,
                            r = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + s + ') + "px"';
                            n.setExpression("top", r)
                        }
                    })
                }
                if (m && (i.theme ? w.find(".ui-widget-content").append(m) : w.append(m), (m.jquery || m.nodeType) && e(m).show()), (d || i.forceIframe) && i.showOverlay && _.show(), i.fadeIn) {
                    var E = i.onBlock ? i.onBlock : c,
                    O = i.showOverlay && !m ? E : c,
                    M = m ? E : c;
                    i.showOverlay && b._fadeIn(i.fadeIn, O),
                    m && w._fadeIn(i.fadeIn, M)
                } else i.showOverlay && b.show(),
                m && w.show(),
                i.onBlock && i.onBlock();
                if (g ? (f = w[0], p = e(i.focusableElements, f), i.focusInput && setTimeout(o, 20)) : a(w[0], i.centerX, i.centerY), i.timeout) {
                    var U = setTimeout(function () {
                        g ? e.unblockUI(i) : e(t).unblock(i)
                    },
                    i.timeout);
                    e(t).data("blockUI.timeout", U)
                }
            }
        }
        function n(t, n) {
            var r, o = t == window,
            a = e(t),
            l = a.data("blockUI.history"),
            c = a.data("blockUI.timeout");
            c && (clearTimeout(c), a.removeData("blockUI.timeout")),
            n = e.extend({},
            e.blockUI.defaults, n || {}),
            s(0, t, n),
            null === n.onUnblock && (n.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));
            var d;
            d = o ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"),
            n.cursorReset && (d.length > 1 && (d[1].style.cursor = n.cursorReset), d.length > 2 && (d[2].style.cursor = n.cursorReset)),
            o && (f = p = null),
            n.fadeOut ? (r = d.length, d.stop().fadeOut(n.fadeOut,
            function () {
                0 === --r && i(d, l, n, t)
            })) : i(d, l, n, t)
        }
        function i(t, n, i, s) {
            var r = e(s);
            if (!r.data("blockUI.isBlocked")) {
                t.each(function (e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }),
                n && n.el && (n.el.style.display = n.display, n.el.style.position = n.position, n.parent && n.parent.appendChild(n.el), r.removeData("blockUI.history")),
                r.data("blockUI.static") && r.css("position", "static"),
                "function" == typeof i.onUnblock && i.onUnblock(s, i);
                var o = e(document.body),
                a = o.width(),
                l = o[0].style.width;
                o.width(a - 1).width(a),
                o[0].style.width = l
            }
        }
        function s(t, n, i) {
            var s = n == window,
            o = e(n);
            if ((t || (!s || f) && (s || o.data("blockUI.isBlocked"))) && (o.data("blockUI.isBlocked", t), s && i.bindEvents && (!t || i.showOverlay))) {
                var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(a, i, r) : e(document).unbind(a, r)
            }
        }
        function r(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && f && t.data.constrainTabKey) {
                var n = p,
                i = !t.shiftKey && t.target === n[n.length - 1],
                s = t.shiftKey && t.target === n[0];
                if (i || s) return setTimeout(function () {
                    o(s)
                },
                10),
                !1
            }
            var r = t.data,
            a = e(t.target);
            return a.hasClass("blockOverlay") && r.onOverlayClick && r.onOverlayClick(t),
            a.parents("div." + r.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length
        }
        function o(e) {
            if (p) {
                var t = p[e === !0 ? p.length - 1 : 0];
                t && t.focus()
            }
        }
        function a(e, t, n) {
            var i = e.parentNode,
            s = e.style,
            r = (i.offsetWidth - e.offsetWidth) / 2 - l(i, "borderLeftWidth"),
            o = (i.offsetHeight - e.offsetHeight) / 2 - l(i, "borderTopWidth");
            t && (s.left = r > 0 ? r + "px" : "0"),
            n && (s.top = o > 0 ? o + "px" : "0")
        }
        function l(t, n) {
            return parseInt(e.css(t, n), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop ||
        function () { },
        d = /MSIE/.test(navigator.userAgent),
        u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
        h = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function (e) {
            t(window, e)
        },
        e.unblockUI = function (e) {
            n(window, e)
        },
        e.growlUI = function (t, n, i, s) {
            var r = e('<div class="growlUI"></div>');
            t && r.append("<h1>" + t + "</h1>"),
            n && r.append("<h2>" + n + "</h2>"),
            void 0 === i && (i = 3e3);
            var o = function (t) {
                t = t || {},
                e.blockUI({
                    message: r,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : i,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: s,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            o();
            r.css("opacity");
            r.mouseover(function () {
                o({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(),
                t.fadeTo(300, 1)
            }).mouseout(function () {
                e(".blockMsg").fadeOut(1e3)
            })
        },
        e.fn.block = function (n) {
            if (this[0] === window) return e.blockUI(n),
            this;
            var i = e.extend({},
            e.blockUI.defaults, n || {});
            return this.each(function () {
                var t = e(this);
                i.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }),
            this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)),
                this.style.zoom = 1,
                t(this, n)
            })
        },
        e.fn.unblock = function (t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
                n(this, t)
            })
        },
        e.blockUI.version = 2.66,
        e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {},
            themedCSS: {},
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6
            },
            cursorReset: "default",
            growlCSS: {
                opacity: .6
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var f = null,
        p = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
}(),
$.ajax({
    type: "post",
    url: "/addsyslogs" + window.location.search,
    dataType: "json",
    data: {
        referer: document.referrer,
        url: window.location.href
    },
    async: !0
});
var AllLocationJson = {},
AllThemesInJson = {};
$.ajax({
    type: "post",
    url: "/header/queryCountry?v=" + Math.random(),
    dataType: "json",
    async: !1,
    success: function (e) {
        200 == e.code && (AllLocationJson = e.data.location, AllThemesInJson = e.data.themeList)
    }
}),
$("#header_search_box .typeahead").typeahead({
    limit: 9,
    minLength: 1,
    prefetch: "/res/data/city-hint9.json",
    template: "<p>{{value}}</p>",
    remote: {
        url: "/searchsuggestion.html?keyWord=%QUERY",
        filter: function (e) {
            return e.data
        }
    },
    engine: Hogan
}),
$("#header_search_button").click(function () {
    var e = $("#header_search_city_input").val();
    header_search(e)
}),
$(document).on("click", ".tt-suggestion",
function () {
    var e = $(this).find("p").html();
    header_search(e)
}),
$("#header_search_city_input").keyup(function (e) {
    if (13 == e.keyCode) {
        var t = $("#header_search_city_input").val();
        header_search(t)
    }
}),
locationCountryUrl();