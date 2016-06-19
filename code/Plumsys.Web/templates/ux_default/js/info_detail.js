function loginMemue(e) {
    $("#au_login").show(),
    $("#un_login").hide(),
    -1 != e.indexOf("userOrderList") || -1 != e.indexOf("userInfo") || -1 != e.indexOf("userOrderDetail") || -1 != e.indexOf("userPassword") || -1 != e.indexOf("userCoupons") || -1 != e.indexOf("userTravel") ? $("#U_ROLE_USER").addClass("topbar_hover") : $("#U_ROLE_USER").addClass("widthB")
}
function getClientLanguage() {
    var e = navigator.userLanguage || navigator.language;
    switch (e.toLowerCase()) {
    case "zh-cn":
        return ! 1;
    case "zh-tw":
        return ! 0;
    default:
        return null
    }
}
function translate(e, t) {
    e = e.childNodes;
    for (var i, n = 0,
    s = e.length; s > n; n++) if (i = e.item(n), !("||BR|HR|TEXTAREA|".indexOf("|" + i.tagName + "|") > 0)) if (i.title && (i.title = t(i.title)), i.alt && (i.alt = t(i.alt)), "INPUT" == i.tagName) {
        if (i.getAttribute("api") && "1" == i.getAttribute("api")) continue;
        "INPUT" == i.tagName && "" != i.value && "text" != i.type && "hidden" != i.type && (i.value = t(i.value)),
        i.placeholder && (i.placeholder = t(i.placeholder)),
        i.getAttribute("cn") && i.setAttribute("cn", t(i.getAttribute("cn"))),
        i.getAttribute("data-name") && i.setAttribute("data-name", t(i.getAttribute("data-name")))
    } else if ("SELECT" == i.tagName) {
        if (i.getAttribute("api") && "1" == i.getAttribute("api")) continue;
        arguments.callee(i, t)
    } else 3 == i.nodeType ? "简体中文" != i.data && (i.data = t(i.data)) : arguments.callee(i, t)
}
function translateText(e, t) {
    if (null != e) {
        for (var i, n, s, a = [], r = 0, o = e.length; o > r; r++) i = e.charAt(r),
        n = t ? simplified.indexOf(i) : traditional.indexOf(i),
        s = t ? traditional.charAt(n) : simplified.charAt(n),
        a.push( - 1 != n ? s: i);
        return a.join("")
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
    var i = "";
    if ( - 1 != e.indexOf(".")) {
        var n = e.split(".");
        n[1].length > 3 && (e = parseFloat(e).toFixed(2))
    }
    if ( - 1 != e.indexOf(".")) {
        var n = e.split(".");
        e = n[0],
        t && (i = n[1])
    }
    for (var s = e.length,
    a = "",
    r = 0; s / 3 + 1 > r; r++) 0 >= s - 3 * (r + 1) ? a = e.substring(0, s - 3 * r) + a: a += "," + e.substring(s - 3 * (r + 1), s - 3 * r);
    return t && "" != i ? i.length > 3 ? parseFloat(a + "." + i).toFixed(2) : a + "." + i: a
}
function common_ancho(e, t) {
    var i = $(e).offset().top;
    $("html,body").animate({
        scrollTop: i
    },
    t)
}
function common_isLetterOrNum(e) {
    var t = /^[a-zA-Z0-9]+$/;
    return ! t.test(e)
}
function common_checkEmail(e) {
    return - 1 != e.search(/^([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)
}
function common_isChinese(e) {
    var t = /u4e00-u9fa5/;
    return ! t.test(e)
}
function common_isEnglish(e) {
    var t = /^[A-Za-z]+$/;
    return ! t.test(e)
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
    i = t.exec(location.search);
    return null == i ? "": decodeURIComponent(i[1].replace(/\+/g, " "))
}
function common_post(e, t) {
    var i = document.createElement("form");
    i.action = e,
    i.method = "post",
    i.style.display = "none";
    for (var n in t) {
        var s = document.createElement("textarea");
        s.name = n,
        s.value = t[n],
        i.appendChild(s)
    }
    return document.body.appendChild(i),
    i.submit(),
    i
}
function common_getAllCityJson() {
    var e;
    return $.ajax({
        type: "post",
        url: "/isThemeName",
        data: {},
        dataType: "json",
        async: !0,
        success: function(t) {
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
function common_checkEndTime(e, t, i) {
    var n = new Date(e.replace("-", "/").replace("-", "/")),
    s = new Date(t.replace("-", "/").replace("-", "/")),
    a = new Date(i.replace("-", "/").replace("-", "/"));
    return n >= a && a > s ? 1 : 0
}
function common_checkPersonType(e, t) {
    return common_checkEndTime(t[8], t[9], e) ? ".visitor": common_checkEndTime(t[0], t[1], e) ? ".adult": common_checkEndTime(t[2], t[3], e) ? ".child": common_checkEndTime(t[4], t[5], e) ? ".baby": common_checkEndTime(t[6], t[7], e) ? ".old": "none"
}
function common_checkPersonNum(e, t) {
    for (var i in e) if (e.hasOwnProperty(i) && common_checkEndTime(e[i].beginDate, e[i].endDate, t)) return e[i].personType;
    return ! 1
}
function common_returnZh(e) {
    return ".adult" == e ? "成人": ".child" == e ? "儿童": ".baby" == e ? "婴儿": ".old" == e ? "老人": ".visitor" == e ? "": void 0
}
function common_returnInt(e) {
    return ".adult" == e ? 1 : ".child" == e ? 2 : ".baby" == e ? 3 : ".old" == e ? 4 : ".visitor" == e ? 5 : void 0
}
function common_compare(e, t) {
    var i = [];
    if (void 0 != e.adult_range && i.push(e.adult_range.split("-")[t]), void 0 != e.child_range && i.push(e.child_range.split("-")[t]), void 0 != e.baby_range && i.push(e.baby_range.split("-")[t]), void 0 != e.older_range && i.push(e.older_range.split("-")[t]), void 0 != e.visitor_range && i.push(e.visitor_range.split("-")[t]), 0 == t) {
        for (var n = parseInt(i[0]), s = 0; s < i.length; s++) n > parseInt(i[s]) && (n = parseInt(i[s]));
        return n
    }
    if (1 == t) {
        for (var a = parseInt(i[0]), s = 0; s < i.length; s++) a < parseInt(i[s]) && (a = parseInt(i[s]));
        return a
    }
}
function common_compare_array(e, t) {
    if (0 == t) {
        for (var i = parseInt(e[0]), n = 0; n < e.length; n++) i > parseInt(e[n]) && (i = parseInt(e[n]));
        return i
    }
    if (1 == t) {
        for (var s = parseInt(e[0]), n = 0; n < e.length; n++) s < parseInt(e[n]) && (s = parseInt(e[n]));
        return s
    }
}
function common_checkbrowse() {
    var e = navigator.userAgent.toLowerCase(),
    t = (e.match(/\b(chrome|opera|safari|msie|firefox)\b/) || ["", "mozilla"])[1],
    i = "(?:" + t + "|version)[\\/: ]([\\d.]+)",
    n = (e.match(new RegExp(i)) || [])[1];
    return {
        is: i,
        ver: n
    }
}
function common_timegap(e, t) {
    var i = new Date(e),
    n = new Date(t),
    s = n.getTime() - i.getTime();
    return Math.floor(s / 864e5)
}
function fmoney(e, n) {
    n = n > 0 && 20 >= n ? n: 2,
    e = parseFloat((e + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var s = e.split(".")[0].split("").reverse(),
    a = e.split(".")[1];
    for (t = "", i = 0; i < s.length; i++) t += s[i] + ((i + 1) % 3 == 0 && i + 1 != s.length ? ",": "");
    return t.split("").reverse().join("") + "." + a
}
function isInteger(e) {
    var t = /^\d+$/;
    return t.test(e)
}
function GetUrlRelativePath() {
    var e = document.location.toString(),
    t = e.split("//"),
    i = t[1].indexOf("/"),
    n = t[1].substring(i);
    if ( - 1 != n.indexOf("?")) {
        var s = encodeURIComponent(encodeURIComponent(n.substr(n.indexOf("?"))));
        n = n.substr(0, n.indexOf("?")) + s
    }
    return n
}
function header_search(e) {
    var t = e;
    "" == t && (t = $("#defaultSearch").val());
    var i = searchLocationCountryUrl($.trim(t));
    return "" != i ? (window.location.href = i, !1) : void( - 1 != AllLocationJson.indexOf('"' + t + '"') ? window.location.href = "/search/" + t + "_AllThemes.html": -1 != AllThemesInJson.indexOf('"' + t + '"') ? window.location.href = "/search/AllCitys_" + t + ".html": window.location.href = "/search/AllCitys_AllThemes.html?keyword=" + t)
}
function locationCountryUrl() {}
function searchLocationCountryUrl(e) {
    return ""
} !
function(e) {
    var t = "0.9.3",
    i = {
        isMsie: function() {
            var e = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
            return e ? parseInt(e[2], 10) : !1
        },
        isBlankString: function(e) {
            return ! e || /^\s*$/.test(e)
        },
        escapeRegExChars: function(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isArray: e.isArray,
        isFunction: e.isFunction,
        isObject: e.isPlainObject,
        isUndefined: function(e) {
            return "undefined" == typeof e
        },
        bind: e.proxy,
        bindAll: function(t) {
            var i;
            for (var n in t) e.isFunction(i = t[n]) && (t[n] = e.proxy(i, t))
        },
        indexOf: function(e, t) {
            for (var i = 0; i < e.length; i++) if (e[i] === t) return i;
            return - 1
        },
        each: e.each,
        map: e.map,
        filter: e.grep,
        every: function(t, i) {
            var n = !0;
            return t ? (e.each(t,
            function(e, s) {
                return (n = i.call(null, s, e, t)) ? void 0 : !1
            }), !!n) : n
        },
        some: function(t, i) {
            var n = !1;
            return t ? (e.each(t,
            function(e, s) {
                return (n = i.call(null, s, e, t)) ? !1 : void 0
            }), !!n) : n
        },
        mixin: e.extend,
        getUniqueId: function() {
            var e = 0;
            return function() {
                return e++
            }
        } (),
        defer: function(e) {
            setTimeout(e, 0)
        },
        debounce: function(e, t, i) {
            var n, s;
            return function() {
                var a, r, o = this,
                l = arguments;
                return a = function() {
                    n = null,
                    i || (s = e.apply(o, l))
                },
                r = i && !n,
                clearTimeout(n),
                n = setTimeout(a, t),
                r && (s = e.apply(o, l)),
                s
            }
        },
        throttle: function(e, t) {
            var i, n, s, a, r, o;
            return r = 0,
            o = function() {
                r = new Date,
                s = null,
                a = e.apply(i, n)
            },
            function() {
                var l = new Date,
                c = t - (l - r);
                return i = this,
                n = arguments,
                0 >= c ? (clearTimeout(s), s = null, r = l, a = e.apply(i, n)) : s || (s = setTimeout(o, c)),
                a
            }
        },
        tokenizeQuery: function(t) {
            return e.trim(t).toLowerCase().split(/[\s]+/)
        },
        tokenizeText: function(t) {
            return e.trim(t).toLowerCase().split(/[\s\-_]+/)
        },
        getProtocol: function() {
            return location.protocol
        },
        noop: function() {}
    },
    n = function() {
        var e = /\s+/;
        return {
            on: function(t, i) {
                var n;
                if (!i) return this;
                for (this._callbacks = this._callbacks || {},
                t = t.split(e); n = t.shift();) this._callbacks[n] = this._callbacks[n] || [],
                this._callbacks[n].push(i);
                return this
            },
            trigger: function(t, i) {
                var n, s;
                if (!this._callbacks) return this;
                for (t = t.split(e); n = t.shift();) if (s = this._callbacks[n]) for (var a = 0; a < s.length; a += 1) s[a].call(this, {
                    type: n,
                    data: i
                });
                return this
            }
        }
    } (),
    s = function() {
        function t(t) {
            t && t.el || e.error("EventBus initialized without el"),
            this.$el = e(t.el)
        }
        var n = "typeahead:";
        return i.mixin(t.prototype, {
            trigger: function(e) {
                var t = [].slice.call(arguments, 1);
                this.$el.trigger(n + e, t)
            }
        }),
        t
    } (),
    a = function() {
        function e(e) {
            this.prefix = ["__", e, "__"].join(""),
            this.ttlKey = "__ttl__",
            this.keyMatcher = new RegExp("^" + this.prefix)
        }
        function t() {
            return (new Date).getTime()
        }
        function n(e) {
            return JSON.stringify(i.isUndefined(e) ? null: e)
        }
        function s(e) {
            return JSON.parse(e)
        }
        var a, r;
        try {
            a = window.localStorage,
            a.setItem("~~~", "!"),
            a.removeItem("~~~")
        } catch(o) {
            a = null
        }
        return r = a && window.JSON ? {
            _prefix: function(e) {
                return this.prefix + e
            },
            _ttlKey: function(e) {
                return this._prefix(e) + this.ttlKey
            },
            get: function(e) {
                return this.isExpired(e) && this.remove(e),
                s(a.getItem(this._prefix(e)))
            },
            set: function(e, s, r) {
                return i.isNumber(r) ? a.setItem(this._ttlKey(e), n(t() + r)) : a.removeItem(this._ttlKey(e)),
                a.setItem(this._prefix(e), n(s))
            },
            remove: function(e) {
                return a.removeItem(this._ttlKey(e)),
                a.removeItem(this._prefix(e)),
                this
            },
            clear: function() {
                var e, t, i = [],
                n = a.length;
                for (e = 0; n > e; e++)(t = a.key(e)).match(this.keyMatcher) && i.push(t.replace(this.keyMatcher, ""));
                for (e = i.length; e--;) this.remove(i[e]);
                return this
            },
            isExpired: function(e) {
                var n = s(a.getItem(this._ttlKey(e)));
                return !! (i.isNumber(n) && t() > n)
            }
        }: {
            get: i.noop,
            set: i.noop,
            remove: i.noop,
            clear: i.noop,
            isExpired: i.noop
        },
        i.mixin(e.prototype, r),
        e
    } (),
    r = function() {
        function e(e) {
            i.bindAll(this),
            e = e || {},
            this.sizeLimit = e.sizeLimit || 10,
            this.cache = {},
            this.cachedKeysByAge = []
        }
        return i.mixin(e.prototype, {
            get: function(e) {
                return this.cache[e]
            },
            set: function(e, t) {
                var i;
                this.cachedKeysByAge.length === this.sizeLimit && (i = this.cachedKeysByAge.shift(), delete this.cache[i]),
                this.cache[e] = t,
                this.cachedKeysByAge.push(e)
            }
        }),
        e
    } (),
    o = function() {
        function t(e) {
            i.bindAll(this),
            e = i.isString(e) ? {
                url: e
            }: e,
            l = l || new r,
            o = i.isNumber(e.maxParallelRequests) ? e.maxParallelRequests: o || 6,
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
            this._get = (/^throttle$/i.test(e.rateLimitFn) ? i.throttle: i.debounce)(this._get, e.rateLimitWait || 300)
        }
        function n() {
            c++
        }
        function s() {
            c--
        }
        function a() {
            return o > c
        }
        var o, l, c = 0,
        d = {};
        return i.mixin(t.prototype, {
            _get: function(e, t) {
                function i(i) {
                    var s = n.filter ? n.filter(i) : i;
                    t && t(s),
                    l.set(e, i)
                }
                var n = this;
                a() ? this._sendRequest(e).done(i) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
            },
            _sendRequest: function(t) {
                function i() {
                    s(),
                    d[t] = null,
                    a.onDeckRequestArgs && (a._get.apply(a, a.onDeckRequestArgs), a.onDeckRequestArgs = null)
                }
                var a = this,
                r = d[t];
                return r || (n(), r = d[t] = e.ajax(t, this.ajaxSettings).always(i)),
                r
            },
            get: function(e, t) {
                var n, s, a = this,
                r = encodeURIComponent(e || "");
                return t = t || i.noop,
                n = this.replace ? this.replace(this.url, r) : this.url.replace(this.wildcard, r),
                (s = l.get(n)) ? i.defer(function() {
                    t(a.filter ? a.filter(s) : s)
                }) : this._get(n, t),
                !!s
            }
        }),
        t
    } (),
    l = function() {
        function n(t) {
            i.bindAll(this),
            i.isString(t.template) && !t.engine && e.error("no template engine specified"),
            t.local || t.prefetch || t.remote || e.error("one of local, prefetch, or remote is required"),
            this.name = t.name || i.getUniqueId(),
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
            this.storage = t.name ? new a(t.name) : null
        }
        function s(e, t, n) {
            var s, a;
            return i.isFunction(e) ? s = e: i.isString(e) ? (a = t.compile(e), s = i.bind(a.render, a)) : s = function(e) {
                return "<p>" + e[n] + "</p>"
            },
            s
        }
        var r = {
            thumbprint: "thumbprint",
            protocol: "protocol",
            itemHash: "itemHash",
            adjacencyList: "adjacencyList"
        };
        return i.mixin(n.prototype, {
            _processLocalData: function(e) {
                this._mergeProcessedData(this._processData(e))
            },
            _loadPrefetchData: function(n) {
                function s(e) {
                    var t = n.filter ? n.filter(e) : e,
                    s = h._processData(t),
                    a = s.itemHash,
                    o = s.adjacencyList;
                    h.storage && (h.storage.set(r.itemHash, a, n.ttl), h.storage.set(r.adjacencyList, o, n.ttl), h.storage.set(r.thumbprint, p, n.ttl), h.storage.set(r.protocol, i.getProtocol(), n.ttl)),
                    h._mergeProcessedData(s)
                }
                var a, o, l, c, d, u, h = this,
                p = t + (n.thumbprint || "");
                return this.storage && (a = this.storage.get(r.thumbprint), o = this.storage.get(r.protocol), l = this.storage.get(r.itemHash), c = this.storage.get(r.adjacencyList)),
                d = a !== p || o !== i.getProtocol(),
                n = i.isString(n) ? {
                    url: n
                }: n,
                n.ttl = i.isNumber(n.ttl) ? n.ttl: 864e5,
                l && c && !d ? (this._mergeProcessedData({
                    itemHash: l,
                    adjacencyList: c
                }), u = e.Deferred().resolve()) : u = e.getJSON(n.url).done(s),
                u
            },
            _transformDatum: function(e) {
                var t = i.isString(e) ? e: e[this.valueKey],
                n = e.tokens || i.tokenizeText(t),
                s = {
                    value: t,
                    tokens: n
                };
                return i.isString(e) ? (s.datum = {},
                s.datum[this.valueKey] = e) : s.datum = e,
                s.tokens = i.filter(s.tokens,
                function(e) {
                    return ! i.isBlankString(e)
                }),
                s.tokens = i.map(s.tokens,
                function(e) {
                    return e.toLowerCase()
                }),
                s
            },
            _processData: function(e) {
                var t = this,
                n = {},
                s = {};
                return i.each(e,
                function(e, a) {
                    var r = t._transformDatum(a),
                    o = i.getUniqueId(r.value);
                    n[o] = r,
                    i.each(r.tokens,
                    function(e, t) {
                        var n = t.charAt(0),
                        a = s[n] || (s[n] = [o]); ! ~i.indexOf(a, o) && a.push(o)
                    })
                }),
                {
                    itemHash: n,
                    adjacencyList: s
                }
            },
            _mergeProcessedData: function(e) {
                var t = this;
                i.mixin(this.itemHash, e.itemHash),
                i.each(e.adjacencyList,
                function(e, i) {
                    var n = t.adjacencyList[e];
                    t.adjacencyList[e] = n ? n.concat(i) : i
                })
            },
            _getLocalSuggestions: function(e) {
                var t, n = this,
                s = [],
                a = [],
                r = [];
                return i.each(e,
                function(e, t) {
                    var n = t.charAt(0); ! ~i.indexOf(s, n) && s.push(n)
                }),
                i.each(s,
                function(e, i) {
                    var s = n.adjacencyList[i];
                    return s ? (a.push(s), void((!t || s.length < t.length) && (t = s))) : !1
                }),
                a.length < s.length ? [] : (i.each(t,
                function(t, s) {
                    var o, l, c = n.itemHash[s];
                    o = i.every(a,
                    function(e) {
                        return~i.indexOf(e, s)
                    }),
                    l = o && i.every(e,
                    function(e) {
                        return i.some(c.tokens,
                        function(t) {
                            return 0 === t.indexOf(e)
                        })
                    }),
                    l && r.push(c)
                }), r)
            },
            initialize: function() {
                var t;
                return this.local && this._processLocalData(this.local),
                this.transport = this.remote ? new o(this.remote) : null,
                t = this.prefetch ? this._loadPrefetchData(this.prefetch) : e.Deferred().resolve(),
                this.local = this.prefetch = this.remote = null,
                this.initialize = function() {
                    return t
                },
                t
            },
            getSuggestions: function(e, t) {
                function n(e) {
                    a = a.slice(0),
                    i.each(e,
                    function(e, t) {
                        var n, s = r._transformDatum(t);
                        return n = i.some(a,
                        function(e) {
                            return s.value === e.value
                        }),
                        !n && a.push(s),
                        a.length < r.limit
                    }),
                    t && t(a)
                }
                var s, a, r = this,
                o = !1;
                e.length < this.minLength || (s = i.tokenizeQuery(e), a = this._getLocalSuggestions(s).slice(0, this.limit), a.length < this.limit && this.transport && (o = this.transport.get(e, n)), !o && t && t(a))
            }
        }),
        n
    } (),
    c = function() {
        function t(t) {
            var n = this;
            i.bindAll(this),
            this.specialKeyCodeMap = {
                9 : "tab",
                27 : "esc",
                37 : "left",
                39 : "right",
                13 : "enter",
                38 : "up",
                40 : "down"
            },
            this.$hint = e(t.hint),
            this.$input = e(t.input).on("blur.tt", this._handleBlur).on("focus.tt", this._handleFocus).on("keydown.tt", this._handleSpecialKeyEvent),
            i.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",
            function(e) {
                n.specialKeyCodeMap[e.which || e.keyCode] || i.defer(n._compareQueryToInputValue)
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
        function a(e, t) {
            return e = (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "),
            t = (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "),
            e === t
        }
        return i.mixin(t.prototype, n, {
            _handleFocus: function() {
                this.trigger("focused")
            },
            _handleBlur: function() {
                this.trigger("blured")
            },
            _handleSpecialKeyEvent: function(e) {
                var t = this.specialKeyCodeMap[e.which || e.keyCode];
                t && this.trigger(t + "Keyed", e)
            },
            _compareQueryToInputValue: function() {
                var e = this.getInputValue(),
                t = a(this.query, e),
                i = t ? this.query.length !== e.length: !1;
                i ? this.trigger("whitespaceChanged", {
                    value: this.query
                }) : t || this.trigger("queryChanged", {
                    value: this.query = e
                })
            },
            destroy: function() {
                this.$hint.off(".tt"),
                this.$input.off(".tt"),
                this.$hint = this.$input = this.$overflowHelper = null
            },
            focus: function() {
                this.$input.focus()
            },
            blur: function() {
                this.$input.blur()
            },
            getQuery: function() {
                return this.query
            },
            setQuery: function(e) {
                this.query = e
            },
            getInputValue: function() {
                return this.$input.val()
            },
            setInputValue: function(e, t) {
                this.$input.val(e),
                !t && this._compareQueryToInputValue()
            },
            getHintValue: function() {
                return this.$hint.val()
            },
            setHintValue: function(e) {
                this.$hint.val(e)
            },
            getLanguageDirection: function() {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            },
            isOverflow: function() {
                return this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() > this.$input.width()
            },
            isCursorAtEnd: function() {
                var e, t = this.$input.val().length,
                n = this.$input[0].selectionStart;
                return i.isNumber(n) ? n === t: document.selection ? (e = document.selection.createRange(), e.moveStart("character", -t), t === e.text.length) : !0
            }
        }),
        t
    } (),
    d = function() {
        function t(t) {
            i.bindAll(this),
            this.isOpen = !1,
            this.isEmpty = !0,
            this.isMouseOverDropdown = !1,
            this.$menu = e(t.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("click.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover)
        }
        function s(e) {
            return e.data("suggestion")
        }
        var a = {
            suggestionsList: '<span class="tt-suggestions"></span>'
        },
        r = {
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
        return i.mixin(t.prototype, n, {
            _handleMouseenter: function() {
                this.isMouseOverDropdown = !0
            },
            _handleMouseleave: function() {
                this.isMouseOverDropdown = !1
            },
            _handleMouseover: function(t) {
                var i = e(t.currentTarget);
                this._getSuggestions().removeClass("tt-is-under-cursor"),
                i.addClass("tt-is-under-cursor")
            },
            _handleSelection: function(t) {
                var i = e(t.currentTarget);
                this.trigger("suggestionSelected", s(i))
            },
            _show: function() {
                this.$menu.css("display", "block")
            },
            _hide: function() {
                this.$menu.hide()
            },
            _moveCursor: function(e) {
                var t, i, n, a;
                if (this.isVisible()) {
                    if (t = this._getSuggestions(), i = t.filter(".tt-is-under-cursor"), i.removeClass("tt-is-under-cursor"), n = t.index(i) + e, n = (n + 1) % (t.length + 1) - 1, -1 === n) return void this.trigger("cursorRemoved"); - 1 > n && (n = t.length - 1),
                    a = t.eq(n).addClass("tt-is-under-cursor"),
                    this._ensureVisibility(a),
                    this.trigger("cursorMoved", s(a))
                }
            },
            _getSuggestions: function() {
                return this.$menu.find(".tt-suggestions > .tt-suggestion")
            },
            _ensureVisibility: function(e) {
                var t = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                i = this.$menu.scrollTop(),
                n = e.position().top,
                s = n + e.outerHeight(!0);
                0 > n ? this.$menu.scrollTop(i + n) : s > t && this.$menu.scrollTop(i + (s - t))
            },
            destroy: function() {
                this.$menu.off(".tt"),
                this.$menu = null
            },
            isVisible: function() {
                return this.isOpen && !this.isEmpty
            },
            closeUnlessMouseIsOverDropdown: function() {
                this.isMouseOverDropdown || this.close()
            },
            close: function() {
                this.isOpen && (this.isOpen = !1, this.isMouseOverDropdown = !1, this._hide(), this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"), this.trigger("closed"))
            },
            open: function() {
                this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
            },
            setLanguageDirection: function(e) {},
            moveCursorUp: function() {
                this._moveCursor( - 1)
            },
            moveCursorDown: function() {
                this._moveCursor(1)
            },
            getSuggestionUnderCursor: function() {
                var e = this._getSuggestions().filter(".tt-is-under-cursor").first();
                return e.length > 0 ? s(e) : null
            },
            getFirstSuggestion: function() {
                var e = this._getSuggestions().first();
                return e.length > 0 ? s(e) : null
            },
            renderSuggestions: function(t, n) {
                var s, o, l, c, d, u = "tt-dataset-" + t.name,
                h = '<div class="tt-suggestion">%body</div>',
                p = this.$menu.find("." + u);
                0 === p.length && (o = e(a.suggestionsList).css(r.suggestionsList), p = e("<div></div>").addClass(u).append(t.header).append(o).append(t.footer).appendTo(this.$menu)),
                n.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), l = document.createElement("div"), c = document.createDocumentFragment(), i.each(n,
                function(i, n) {
                    n.dataset = t.name,
                    s = t.template(n.datum),
                    l.innerHTML = h.replace("%body", s),
                    d = e(l.firstChild).css(r.suggestion).data("suggestion", n),
                    d.children().each(function() {
                        e(this).css(r.suggestionChild)
                    }),
                    c.appendChild(d[0])
                }), p.show().find(".tt-suggestions").html(c)) : this.clearSuggestions(t.name),
                this.trigger("suggestionsRendered")
            },
            clearSuggestions: function(e) {
                var t = e ? this.$menu.find(".tt-dataset-" + e) : this.$menu.find('[class^="tt-dataset-"]'),
                i = t.find(".tt-suggestions");
                t.hide(),
                i.empty(),
                0 === this._getSuggestions().length && (this.isEmpty = !0, this._hide())
            }
        }),
        t
    } (),
    u = function() {
        function t(e) {
            var t, n, a;
            i.bindAll(this),
            this.$node = s(e.input),
            this.datasets = e.datasets,
            this.dir = null,
            this.eventBus = e.eventBus,
            t = this.$node.find(".tt-dropdown-menu"),
            n = this.$node.find(".tt-query"),
            a = this.$node.find(".tt-hint"),
            this.dropdownView = new d({
                menu: t
            }).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed", this._propagateEvent),
            this.inputView = new c({
                input: n,
                hint: a
            }).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed tabKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", this._autocomplete)
        }
        function s(t) {
            var i = e(r.wrapper),
            n = e(r.dropdown),
            s = e(t),
            a = e(r.hint);
            i = i.css(o.wrapper),
            n = n.css(o.dropdown),
            a.css(o.hint).css({
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
            }).css(o.query);
            try { ! s.attr("dir") && s.attr("dir", "auto")
            } catch(l) {}
            return s.wrap(i).parent().prepend(a).append(n)
        }
        function a(e) {
            var t = e.find(".tt-query");
            i.each(t.data("ttAttrs"),
            function(e, n) {
                i.isUndefined(n) ? t.removeAttr(e) : t.attr(e, n)
            }),
            t.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(e),
            e.remove()
        }
        var r = {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>'
        },
        o = {
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
        return i.isMsie() && i.mixin(o.query, {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
        }),
        i.isMsie() && i.isMsie() <= 7 && (i.mixin(o.wrapper, {
            display: "inline",
            zoom: "1"
        }), i.mixin(o.query, {
            marginTop: "-1px"
        })),
        i.mixin(t.prototype, n, {
            _managePreventDefault: function(e) {
                var t, i, n = e.data,
                s = !1;
                switch (e.type) {
                case "tabKeyed":
                    t = this.inputView.getHintValue(),
                    i = this.inputView.getInputValue(),
                    s = t && t !== i;
                    break;
                case "upKeyed":
                case "downKeyed":
                    s = !n.shiftKey && !n.ctrlKey && !n.metaKey
                }
                s && n.preventDefault()
            },
            _setLanguageDirection: function() {
                var e = this.inputView.getLanguageDirection();
                e !== this.dir && (this.dir = e, this.$node.css("direction", e), this.dropdownView.setLanguageDirection(e))
            },
            _updateHint: function() {
                var e, t, n, s, a, r = this.dropdownView.getFirstSuggestion(),
                o = r ? r.value: null,
                l = this.dropdownView.isVisible(),
                c = this.inputView.isOverflow();
                o && l && !c && (e = this.inputView.getInputValue(), t = e.replace(/\s{2,}/g, " ").replace(/^\s+/g, ""), n = i.escapeRegExChars(t), s = new RegExp("^(?:" + n + ")(.*$)", "i"), a = s.exec(o), this.inputView.setHintValue(e + (a ? a[1] : "")))
            },
            _clearHint: function() {
                this.inputView.setHintValue("")
            },
            _clearSuggestions: function() {
                this.dropdownView.clearSuggestions()
            },
            _setInputValueToQuery: function() {
                this.inputView.setInputValue(this.inputView.getQuery())
            },
            _setInputValueToSuggestionUnderCursor: function(e) {
                var t = e.data;
                this.inputView.setInputValue(t.value, !0)
            },
            _openDropdown: function() {
                this.dropdownView.open()
            },
            _closeDropdown: function(e) {
                this.dropdownView["blured" === e.type ? "closeUnlessMouseIsOverDropdown": "close"]()
            },
            _moveDropdownCursor: function(e) {
                var t = e.data;
                t.shiftKey || t.ctrlKey || t.metaKey || this.dropdownView["upKeyed" === e.type ? "moveCursorUp": "moveCursorDown"]()
            },
            _handleSelection: function(e) {
                var t = "suggestionSelected" === e.type,
                n = t ? e.data: this.dropdownView.getSuggestionUnderCursor();
                n && (this.inputView.setInputValue(n.value), t ? this.inputView.focus() : e.data.preventDefault(), t && i.isMsie() ? i.defer(this.dropdownView.close) : this.dropdownView.close(), this.eventBus.trigger("selected", n.datum, n.dataset))
            },
            _getSuggestions: function() {
                var e = this,
                t = this.inputView.getQuery();
                t = t.replace(/(^\s*)|(\s*$)/g, ""),
                i.isBlankString(t) || i.each(this.datasets,
                function(i, n) {
                    n.getSuggestions(t,
                    function(i) {
                        t === e.inputView.getQuery() && e.dropdownView.renderSuggestions(n, i)
                    })
                })
            },
            _autocomplete: function(e) {
                var t, i, n, s, a; ("rightKeyed" !== e.type && "leftKeyed" !== e.type || (t = this.inputView.isCursorAtEnd(), i = "ltr" === this.inputView.getLanguageDirection() ? "leftKeyed" === e.type: "rightKeyed" === e.type, t && !i)) && (n = this.inputView.getQuery(), s = this.inputView.getHintValue(), "" !== s && n !== s && (a = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(a.value), this.eventBus.trigger("autocompleted", a.datum, a.dataset)))
            },
            _propagateEvent: function(e) {
                this.eventBus.trigger(e.type)
            },
            destroy: function() {
                this.inputView.destroy(),
                this.dropdownView.destroy(),
                a(this.$node),
                this.$node = null
            },
            setQuery: function(e) {
                this.inputView.setQuery(e),
                this.inputView.setInputValue(e),
                this._clearHint(),
                this._clearSuggestions(),
                this._getSuggestions()
            }
        }),
        t
    } (); !
    function() {
        var t, n = {},
        a = "ttView";
        t = {
            initialize: function(t) {
                function r() {
                    var t, n = e(this),
                    r = new s({
                        el: n
                    });
                    t = i.map(o,
                    function(e) {
                        return e.initialize()
                    }),
                    n.data(a, new u({
                        input: n,
                        eventBus: r = new s({
                            el: n
                        }),
                        datasets: o
                    })),
                    e.when.apply(e, t).always(function() {
                        i.defer(function() {
                            r.trigger("initialized")
                        })
                    })
                }
                var o;
                return t = i.isArray(t) ? t: [t],
                0 === t.length && e.error("no datasets provided"),
                o = i.map(t,
                function(e) {
                    var t = n[e.name] ? n[e.name] : new l(e);
                    return e.name && (n[e.name] = t),
                    t
                }),
                this.each(r)
            },
            destroy: function() {
                function t() {
                    var t = e(this),
                    i = t.data(a);
                    i && (i.destroy(), t.removeData(a))
                }
                return this.each(t)
            },
            setQuery: function(t) {
                function i() {
                    var i = e(this).data(a);
                    i && i.setQuery(t)
                }
                return this.each(i)
            }
        },
        jQuery.fn.typeahead = function(e) {
            return t[e] ? t[e].apply(this, [].slice.call(arguments, 1)) : t.initialize.apply(this, arguments)
        }
    } ()
} (window.jQuery);
var Hogan = {}; !
function(e, t) {
    function i(e) {
        return String(null === e || void 0 === e ? "": e)
    }
    function n(e) {
        return e = i(e),
        c.test(e) ? e.replace(s, "&amp;").replace(a, "&lt;").replace(r, "&gt;").replace(o, "&#39;").replace(l, "&quot;") : e
    }
    e.Template = function(e, i, n, s) {
        this.r = e || this.r,
        this.c = n,
        this.options = s,
        this.text = i || "",
        this.buf = t ? [] : ""
    },
    e.Template.prototype = {
        r: function(e, t, i) {
            return ""
        },
        v: n,
        t: i,
        render: function(e, t, i) {
            return this.ri([e], t || {},
            i)
        },
        ri: function(e, t, i) {
            return this.r(e, t, i)
        },
        rp: function(e, t, i, n) {
            var s = i[e];
            return s ? (this.c && "string" == typeof s && (s = this.c.compile(s, this.options)), s.ri(t, i, n)) : ""
        },
        rs: function(e, t, i) {
            var n = e[e.length - 1];
            if (!d(n)) return void i(e, t, this);
            for (var s = 0; s < n.length; s++) e.push(n[s]),
            i(e, t, this),
            e.pop()
        },
        s: function(e, t, i, n, s, a, r) {
            var o;
            return d(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ls(e, t, i, n, s, a, r)), o = "" === e || !!e, !n && o && t && t.push("object" == typeof e ? e: t[t.length - 1]), o)
        },
        d: function(e, t, i, n) {
            var s = e.split("."),
            a = this.f(s[0], t, i, n),
            r = null;
            if ("." === e && d(t[t.length - 2])) return t[t.length - 1];
            for (var o = 1; o < s.length; o++) a && "object" == typeof a && s[o] in a ? (r = a, a = a[s[o]]) : a = "";
            return n && !a ? !1 : (n || "function" != typeof a || (t.push(r), a = this.lv(a, t, i), t.pop()), a)
        },
        f: function(e, t, i, n) {
            for (var s = !1,
            a = null,
            r = !1,
            o = t.length - 1; o >= 0; o--) if (a = t[o], a && "object" == typeof a && e in a) {
                s = a[e],
                r = !0;
                break
            }
            return r ? (n || "function" != typeof s || (s = this.lv(s, t, i)), s) : n ? !1 : ""
        },
        ho: function(e, t, i, n, s) {
            var a = this.c,
            r = this.options;
            r.delimiters = s;
            var n = e.call(t, n);
            return n = null == n ? String(n) : n.toString(),
            this.b(a.compile(n, r).render(t, i)),
            !1
        },
        b: t ?
        function(e) {
            this.buf.push(e)
        }: function(e) {
            this.buf += e
        },
        fl: t ?
        function() {
            var e = this.buf.join("");
            return this.buf = [],
            e
        }: function() {
            var e = this.buf;
            return this.buf = "",
            e
        },
        ls: function(e, t, i, n, s, a, r) {
            var o = t[t.length - 1],
            l = null;
            if (!n && this.c && e.length > 0) return this.ho(e, o, i, this.text.substring(s, a), r);
            if (l = e.call(o), "function" == typeof l) {
                if (n) return ! 0;
                if (this.c) return this.ho(l, o, i, this.text.substring(s, a), r)
            }
            return l
        },
        lv: function(e, t, n) {
            var s = t[t.length - 1],
            a = e.call(s);
            return "function" == typeof a && (a = i(a.call(s)), this.c && ~a.indexOf("{{")) ? this.c.compile(a, this.options).render(s, n) : i(a)
        }
    };
    var s = /&/g,
    a = /</g,
    r = />/g,
    o = /\'/g,
    l = /\"/g,
    c = /[&<>\"\']/,
    d = Array.isArray ||
    function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
} ("undefined" != typeof exports ? exports: Hogan),
function(e) {
    function t(e) {
        "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1))
    }
    function i(e) {
        return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "")
    }
    function n(e, t, i) {
        if (t.charAt(i) != e.charAt(0)) return ! 1;
        for (var n = 1,
        s = e.length; s > n; n++) if (t.charAt(i + n) != e.charAt(n)) return ! 1;
        return ! 0
    }
    function s(e, t, i, n) {
        for (var o = [], l = null, c = null; e.length > 0;) if (c = e.shift(), "#" == c.tag || "^" == c.tag || a(c, n)) i.push(c),
        c.nodes = s(e, c.tag, i, n),
        o.push(c);
        else {
            if ("/" == c.tag) {
                if (0 === i.length) throw new Error("Closing tag without opener: /" + c.n);
                if (l = i.pop(), c.n != l.n && !r(c.n, l.n, n)) throw new Error("Nesting error: " + l.n + " vs. " + c.n);
                return l.end = c.i,
                o
            }
            o.push(c)
        }
        if (i.length > 0) throw new Error("missing closing tag: " + i.pop().n);
        return o
    }
    function a(e, t) {
        for (var i = 0,
        n = t.length; n > i; i++) if (t[i].o == e.n) return e.tag = "#",
        !0
    }
    function r(e, t, i) {
        for (var n = 0,
        s = i.length; s > n; n++) if (i[n].c == e && i[n].o == t) return ! 0
    }
    function o(e) {
        return e.replace(_, "\\\\").replace(g, '\\"').replace(y, "\\n").replace(b, "\\r")
    }
    function l(e) {
        return~e.indexOf(".") ? "d": "f"
    }
    function c(e) {
        for (var t = "",
        i = 0,
        n = e.length; n > i; i++) {
            var s = e[i].tag;
            "#" == s ? t += d(e[i].nodes, e[i].n, l(e[i].n), e[i].i, e[i].end, e[i].otag + " " + e[i].ctag) : "^" == s ? t += u(e[i].nodes, e[i].n, l(e[i].n)) : "<" == s || ">" == s ? t += h(e[i]) : "{" == s || "&" == s ? t += p(e[i].n, l(e[i].n)) : "\n" == s ? t += v('"\\n"' + (e.length - 1 == i ? "": " + i")) : "_v" == s ? t += f(e[i].n, l(e[i].n)) : void 0 === s && (t += v('"' + o(e[i]) + '"'));
        }
        return t
    }
    function d(e, t, i, n, s, a) {
        return "if(_.s(_." + i + '("' + o(t) + '",c,p,1),c,p,0,' + n + "," + s + ',"' + a + '")){_.rs(c,p,function(c,p,_){' + c(e) + "});c.pop();}"
    }
    function u(e, t, i) {
        return "if(!_.s(_." + i + '("' + o(t) + '",c,p,1),c,p,1,0,0,"")){' + c(e) + "};"
    }
    function h(e) {
        return '_.b(_.rp("' + o(e.n) + '",c,p,"' + (e.indent || "") + '"));'
    }
    function p(e, t) {
        return "_.b(_.t(_." + t + '("' + o(e) + '",c,p,0)));'
    }
    function f(e, t) {
        return "_.b(_.v(_." + t + '("' + o(e) + '",c,p,0)));'
    }
    function v(e) {
        return "_.b(" + e + ");"
    }
    var m = /\S/,
    g = /\"/g,
    y = /\n/g,
    b = /\r/g,
    _ = /\\/g,
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
    e.scan = function(e, s) {
        function a() {
            g.length > 0 && (y.push(new String(g)), g = "")
        }
        function r() {
            for (var e = !0,
            t = x; t < y.length; t++) if (e = y[t].tag && w[y[t].tag] < w._v || !y[t].tag && null === y[t].match(m), !e) return ! 1;
            return e
        }
        function o(e, t) {
            if (a(), e && r()) for (var i, n = x; n < y.length; n++) y[n].tag || ((i = y[n + 1]) && ">" == i.tag && (i.indent = y[n].toString()), y.splice(n, 1));
            else t || y.push({
                tag: "\n"
            });
            b = !1,
            x = y.length
        }
        function l(e, t) {
            var n = "=" + k,
            s = e.indexOf(n, t),
            a = i(e.substring(e.indexOf("=", t) + 1, s)).split(" ");
            return $ = a[0],
            k = a[1],
            s + n.length - 1
        }
        var c = e.length,
        d = 0,
        u = 1,
        h = 2,
        p = d,
        f = null,
        v = null,
        g = "",
        y = [],
        b = !1,
        _ = 0,
        x = 0,
        $ = "{{",
        k = "}}";
        for (s && (s = s.split(" "), $ = s[0], k = s[1]), _ = 0; c > _; _++) p == d ? n($, e, _) ? (--_, a(), p = u) : "\n" == e.charAt(_) ? o(b) : g += e.charAt(_) : p == u ? (_ += $.length - 1, v = w[e.charAt(_ + 1)], f = v ? e.charAt(_ + 1) : "_v", "=" == f ? (_ = l(e, _), p = d) : (v && _++, p = h), b = _) : n(k, e, _) ? (y.push({
            tag: f,
            n: i(g),
            otag: $,
            ctag: k,
            i: "/" == f ? b - k.length: _ + $.length
        }), g = "", _ += k.length - 1, p = d, "{" == f && ("}}" == k ? _++:t(y[y.length - 1]))) : g += e.charAt(_);
        return o(b, !0),
        y
    },
    e.generate = function(t, i, n) {
        var s = 'var _=this;_.b(i=i||"");' + c(t) + "return _.fl();";
        return n.asString ? "function(c,p,i){" + s + ";}": new e.Template(new Function("c", "p", "i", s), i, e, n)
    },
    e.parse = function(e, t, i) {
        return i = i || {},
        s(e, "", [], i.sectionTags || [])
    },
    e.cache = {},
    e.compile = function(e, t) {
        t = t || {};
        var i = e + "||" + !!t.asString,
        n = this.cache[i];
        return n ? n: (n = this.generate(this.parse(this.scan(e, t.delimiters), e, t), e, t), this.cache[i] = n)
    }
} ("undefined" != typeof exports ? exports: Hogan),
jQuery.cookie = function(e, t, i) {
    if ("undefined" == typeof t) {
        var n = null;
        if (document.cookie && "" != document.cookie) for (var s = document.cookie.split(";"), a = 0; a < s.length; a++) {
            var r = jQuery.trim(s[a]);
            if (r.substring(0, e.length + 1) == e + "=") {
                n = decodeURIComponent(r.substring(e.length + 1));
                break
            }
        }
        return n
    }
    i = i || {},
    null === t && (t = "", i.expires = -1);
    var o = "";
    if (i.expires && ("number" == typeof i.expires || i.expires.toUTCString)) {
        var l;
        "number" == typeof i.expires ? (l = new Date, l.setTime(l.getTime() + 24 * i.expires * 60 * 60 * 1e3)) : l = i.expires,
        o = "; expires=" + l.toUTCString()
    }
    var c = i.path ? "; path=" + i.path: "",
    d = i.domain ? "; domain=" + i.domain: "",
    u = i.secure ? "; secure": "";
    document.cookie = [e, "=", encodeURIComponent(t), o, c, d, u].join("")
},
window.onerror = function(e, t, i, n, s) {},
$("#uloginout").click(function() {
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
    success: function(e) {
        200 == e.code ? ($.cookie("uloginflag", "true", {
            path: "/"
        }), loginMemue(thisPageUrl)) : ($("#au_login").hide(), $("#un_login").show())
    }
}),
1 == $.cookie("closeAppAd") ? $("#footer-app-download-div").hide() : $("#footer-app-download-div").show(),
$("#footer_app_phone_del").click(function() {
    var e = new Date;
    e.setTime(e.getTime() + 12096e5),
    $.cookie("closeAppAd", 1, {
        path: "/",
        expires: e
    }),
    $("#footer-app-download-div").hide()
}),
function(e) {
    e.fn.hoverIntent = function(t, i, n) {
        var s = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        s = "object" == typeof t ? e.extend(s, t) : e.isFunction(i) ? e.extend(s, {
            over: t,
            out: i,
            selector: n
        }) : e.extend(s, {
            over: t,
            out: t,
            selector: i
        });
        var a, r, o, l, c = function(e) {
            a = e.pageX,
            r = e.pageY
        },
        d = function(t, i) {
            return i.hoverIntent_t = clearTimeout(i.hoverIntent_t),
            Math.abs(o - a) + Math.abs(l - r) < s.sensitivity ? (e(i).off("mousemove.hoverIntent", c), i.hoverIntent_s = 1, s.over.apply(i, [t])) : (o = a, l = r, i.hoverIntent_t = setTimeout(function() {
                d(t, i)
            },
            s.interval), void 0)
        },
        u = function(e, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t),
            t.hoverIntent_s = 0,
            s.out.apply(t, [e])
        },
        h = function(t) {
            var i = jQuery.extend({},
            t),
            n = this;
            n.hoverIntent_t && (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)),
            "mouseenter" == t.type ? (o = i.pageX, l = i.pageY, e(n).on("mousemove.hoverIntent", c), 1 != n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                d(i, n)
            },
            s.interval))) : (e(n).off("mousemove.hoverIntent", c), 1 == n.hoverIntent_s && (n.hoverIntent_t = setTimeout(function() {
                u(i, n)
            },
            s.timeout)))
        };
        return this.on({
            "mouseenter.hoverIntent": h,
            "mouseleave.hoverIntent": h
        },
        s.selector)
    }
} (jQuery),
function(e) {
    "use strict";
    var t = function() {
        var t = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        },
        i = function() {
            var t = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            return t && e(window).load(function() {
                e("body").children().on("click", e.noop)
            }),
            t
        } (),
        n = function() {
            var e = document.documentElement.style;
            return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
        } (),
        s = function(e, i) {
            var n = t.menuClass;
            i.cssArrows && (n += " " + t.menuArrowClass),
            e.toggleClass(n)
        },
        a = function(i, n) {
            return i.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + t.bcClass).filter(function() {
                return e(this).children(n.popUpSelector).hide().show().length
            }).removeClass(n.pathClass)
        },
        r = function(e) {
            e.children("a").toggleClass(t.anchorClass)
        },
        o = function(e) {
            var t = e.css("ms-touch-action");
            t = "pan-y" === t ? "auto": "pan-y",
            e.css("ms-touch-action", t)
        },
        l = function(t, s) {
            var a = "li:has(" + s.popUpSelector + ")";
            e.fn.hoverIntent && !s.disableHI ? t.hoverIntent(d, u, a) : t.on("mouseenter.superfish", a, d).on("mouseleave.superfish", a, u);
            var r = "MSPointerDown.superfish";
            i || (r += " touchend.superfish"),
            n && (r += " mousedown.superfish"),
            t.on("focusin.superfish", "li", d).on("focusout.superfish", "li", u).on(r, "a", s, c)
        },
        c = function(t) {
            var i = e(this),
            n = i.siblings(t.data.popUpSelector);
            n.length > 0 && n.is(":hidden") && (i.one("click.superfish", !1), "MSPointerDown" === t.type ? i.trigger("focus") : e.proxy(d, i.parent("li"))())
        },
        d = function() {
            var t = e(this),
            i = f(t);
            clearTimeout(i.sfTimer),
            t.siblings().superfish("hide").end().superfish("show")
        },
        u = function() {
            var t = e(this),
            n = f(t);
            i ? e.proxy(h, t, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(h, t, n), n.delay))
        },
        h = function(t) {
            t.retainPath = e.inArray(this[0], t.$path) > -1,
            this.superfish("hide"),
            this.parents("." + t.hoverClass).length || (t.onIdle.call(p(this)), t.$path.length && e.proxy(d, t.$path)())
        },
        p = function(e) {
            return e.closest("." + t.menuClass)
        },
        f = function(e) {
            return p(e).data("sf-options")
        };
        return {
            hide: function(e) {
                if (this.length) {
                    var t = this,
                    i = f(t);
                    if (!i) return this;
                    var n = i.retainPath === !0 ? i.$path: "",
                    s = t.find("li." + i.hoverClass).add(this).not(n).removeClass(i.hoverClass).children(i.popUpSelector),
                    a = i.speedOut;
                    e && (s.show(), a = 0),
                    i.retainPath = !1,
                    i.onBeforeHide.call(s),
                    s.hide(0)
                }
                return this
            },
            show: function() {
                var e = f(this);
                if (!e) return this;
                if (e.hoverStyle) {
                    var t = this.parent().parent(),
                    i = this.children("ul"),
                    n = t.height(),
                    s = i.height();
                    if (s > n) {
                        var a = this.innerHeight(),
                        r = t.children().children().index(this),
                        o = a * r;
                        e.toTopMargin && (o += e.toTopMargin),
                        i.css({})
                    } else this.children("ul").css(e.hoverStyle)
                }
                var l = this.addClass(e.hoverClass),
                c = l.children(e.popUpSelector);
                return e.onBeforeShow.call(c),
                c.show(0),
                this
            },
            destroy: function() {
                return this.each(function() {
                    var i, n = e(this),
                    a = n.data("sf-options");
                    return a ? (i = n.find(a.popUpSelector).parent("li"), clearTimeout(a.sfTimer), s(n, a), r(i), o(n), n.off(".superfish").off(".hoverIntent"), i.children(a.popUpSelector).attr("style",
                    function(e, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }), a.$path.removeClass(a.hoverClass + " " + t.bcClass).addClass(a.pathClass), n.find("." + a.hoverClass).removeClass(a.hoverClass), a.onDestroy.call(n), void n.removeData("sf-options")) : !1
                })
            },
            init: function(i) {
                return this.each(function() {
                    var n = e(this);
                    if (n.data("sf-options")) return ! 1;
                    var c = e.extend({},
                    e.fn.superfish.defaults, i),
                    d = n.find(c.popUpSelector).parent("li");
                    c.$path = a(n, c),
                    n.data("sf-options", c),
                    s(n, c),
                    r(d),
                    o(n),
                    l(n, c),
                    d.not("." + t.bcClass).superfish("hide", !0),
                    c.onInit.call(this)
                })
            }
        }
    } ();
    e.fn.superfish = function(i, n) {
        return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? e.error("Method " + i + " does not exist on jQuery.fn.superfish") : t.init.apply(this, arguments)
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
} (jQuery),
$("#dropdown_menu").superfish({
    speed: "fast",
    speedOut: "fast",
    delay: "100",
    disableHI: !0
}),
$("li #weixin_down").mouseenter(function() {
    $(this).parent().css("border-bottom", "none"),
    $(this).next().show(),
    $(this).addClass("wx-hover")
}),
$("#weixin_block").mouseleave(function() {
    $("#weixin_appear").hide(),
    $("#weixin_down").removeClass("wx-hover")
}),
$("#phone_down").mouseenter(function() {
    $(this).parent().css("border-bottom", "none"),
    $(this).next().show(),
    $(this).addClass("wx-hover")
}),
$("#phone_block").mouseleave(function() {
    $("#phone_appear").hide(),
    $("#phone_down").removeClass("wx-hover")
});
var moreSelected = !0,
$themeChildren = $(".header_themlist").children();
if ($themeChildren.each(function() {
    var e = $(this).find("a").attr("rel"),
    t = $("#themeEname").val();
    t && t === e && (moreSelected = !1, $themeChildren.removeClass("selected"), $(this).addClass("selected"))
}), moreSelected && $("#themeEname").length > 0 && ($themeChildren.removeClass("selected"), $(".moreitems").find(".more").addClass("selected")), $("#isHomeBander").val()) $themeChildren.eq(0).addClass("selected");
else {
    var $categorys = $(".categorys");
    $categorys.css("cursor", "pointer"),
    $categorys.addClass("down"),
    $categorys.mouseenter(function() {
        $(this).removeClass("down"),
        $(this).addClass("up"),
        $(this).find(".continents").show()
    }),
    $categorys.mouseleave(function() {
        $(this).addClass("down"),
        $(this).removeClass("up"),
        $(this).find(".continents").hide()
    })
} - 1 != window.location.pathname.indexOf("sales.html") && ($themeChildren.removeClass("selected"), $themeChildren.removeClass("hover"), $(".header_themlist").find(".flashsales_hot").addClass("selected")),
$(".header_tel_top").mouseenter(function() {
    $(this).children().eq(0).addClass("tel-hover"),
    $(this).children().eq(1).show()
}),
$(".header_tel_top").mouseleave(function() {
    $(this).children().eq(0).removeClass("tel-hover"),
    $(this).children().eq(1).hide()
}),
$(".moreitems").mouseenter(function() {
    var e = $(this).children();
    e.eq(1).show(),
    e.eq(0).addClass("up")
}),
$(".moreitems").mouseleave(function() {
    var e = $(this).children();
    e.eq(1).hide(),
    e.eq(0).removeClass("up")
}),
$(".header_themlist").children().each(function() {
    var e = $(this).find(".navitems_content");
    $(this).on("mouseenter",
    function() {
        $(this).addClass("hover"),
        e.show()
    }),
    $(this).on("mouseleave",
    function() {
        e.hide(),
        $(this).removeClass("hover")
    })
}),
Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
    var t = this.length >>> 0,
    i = Number(arguments[1]) || 0;
    for (i = 0 > i ? Math.ceil(i) : Math.floor(i), 0 > i && (i += t); t > i; i++) if (i in this && this[i] === e) return i;
    return - 1
}),
$("#weixin").mouseover(function() {
    $(".footer_wxin").fadeIn("slow")
}),
$("#weixin").mouseout(function() {
    $(".footer_wxin").fadeOut("slow")
}),
$("#KeFuBtn").mouseenter(function() {
    $(this).removeClass("KeFuBox"),
    $(this).addClass("KeFuBoxAct")
}),
$("#KeFuBtn").mouseleave(function() {
    $(this).removeClass("KeFuBoxAct"),
    $(this).addClass("KeFuBox")
}),
$(".KeFu").click(function() {
    $(".KeFuGroup").fadeIn(100)
}),
$(".BackToTop").click(function() {
    $("body,html").animate({
        scrollTop: 0
    },
    800)
}),
$(".FixedBuyBtn").click(function () {
    $("body,html").animate({
        scrollTop: 0
    },
    800)
}),
$(window).scroll(function() {
    $(window).scrollTop() < 300 ? $(".RightBox").hide() : $(".RightBox").show()
}),
$(".ACloseBtn").click(function() {
    $(".AdviseDone").hide(),
    $(".AdviseDoneThird").hide(),
    $(".AdviseDoneSecond").hide(),
    $(".AdviseUp").show(),
    $(".AdviseGroup").hide(),
    $(".KeFuGroup").hide()
}),
$("#aSubmitBtn").click(function() {
    var e = $(".AdviseText").val().trim();
    return "" == e || void 0 == e ? ($(".VoidLimit").fadeIn(100), setTimeout(function() {
        $(".VoidLimit").hide()
    },
    1e3), !1) : e.length > 500 ? ($(".WordLimit").fadeIn(100), setTimeout(function() {
        $(".WordLimit").hide()
    },
    1e3), !1) : void $.ajax({
        url: "/user/addsuggestion?content=" + e,
        success: function(e) {
            var e = $.parseJSON(e),
            t = e.code;
            200 == t ? ($(".AdviseUp").hide(), $(".AdviseDone").show()) : 600 == t ? ($(".AdviseUp").hide(), $(".AdviseDoneThird").show()) : ($(".AdviseUp").hide(), $(".AdviseDoneSecond").show())
        }
    })
}),
$(".Advise").click(function() {
    $(".AdviseGroup").fadeIn(100)
}),
Function.prototype.delegate = function() {
    var e = this,
    t = this.scope,
    i = arguments,
    n = arguments.length,
    s = "function";
    return function() {
        for (var a = arguments.length,
        r = n > a ? n: a, o = 0; r > o; o++) arguments[o] && (i[o] = arguments[o]);
        i.length = r;
        for (var o = 0,
        l = i.length; l > o; o++) {
            var c = i[o];
            c && typeof c == s && 1 == c.late && (i[o] = c.apply(t || this, i))
        }
        return e.apply(t || this, i)
    }
};
var simplified = "啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲荆兢觉决诀绝均菌钧军君峻俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座",
traditional = "啊阿埃挨哎唉哀皚癌藹矮艾礙愛隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翺襖傲奧懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙壩霸罷爸白柏百擺佰敗拜稗斑班搬扳般頒板版扮拌伴瓣半辦絆邦幫梆榜膀綁棒磅蚌鎊傍謗苞胞包褒剝薄雹保堡飽寶抱報暴豹鮑爆杯碑悲卑北輩背貝鋇倍狽備憊焙被奔苯本笨崩繃甭泵蹦迸逼鼻比鄙筆彼碧蓖蔽畢斃毖幣庇痹閉敝弊必辟壁臂避陛鞭邊編貶扁便變卞辨辯辮遍標彪膘表鼈憋別癟彬斌瀕濱賓擯兵冰柄丙秉餅炳病並玻菠播撥缽波博勃搏鉑箔伯帛舶脖膊渤泊駁捕蔔哺補埠不布步簿部怖擦猜裁材才財睬踩采彩菜蔡餐參蠶殘慚慘燦蒼艙倉滄藏操糙槽曹草廁策側冊測層蹭插叉茬茶查碴搽察岔差詫拆柴豺攙摻蟬饞讒纏鏟産闡顫昌猖場嘗常長償腸廠敞暢唱倡超抄鈔朝嘲潮巢吵炒車扯撤掣徹澈郴臣辰塵晨忱沈陳趁襯撐稱城橙成呈乘程懲澄誠承逞騁秤吃癡持匙池遲弛馳恥齒侈尺赤翅斥熾充衝沖蟲崇寵抽酬疇躊稠愁籌仇綢瞅醜臭初出櫥廚躇鋤雛滁除楚礎儲矗搐觸處揣川穿椽傳船喘串瘡窗幢床闖創吹炊捶錘垂春椿醇唇淳純蠢戳綽疵茨磁雌辭慈瓷詞此刺賜次聰蔥囪匆從叢湊粗醋簇促躥篡竄摧崔催脆瘁粹淬翠村存寸磋撮搓措挫錯搭達答瘩打大呆歹傣戴帶殆代貸袋待逮怠耽擔丹單鄲撣膽旦氮但憚淡誕彈蛋當擋黨蕩檔刀搗蹈倒島禱導到稻悼道盜德得的蹬燈登等瞪凳鄧堤低滴迪敵笛狄滌翟嫡抵底地蒂第帝弟遞締顛掂滇碘點典靛墊電佃甸店惦奠澱殿碉叼雕凋刁掉吊釣調跌爹碟蝶叠諜疊丁盯叮釘頂鼎錠定訂丟東冬董懂動棟侗恫凍洞兜抖鬥陡豆逗痘都督毒犢獨讀堵睹賭杜鍍肚度渡妒端短鍛段斷緞堆兌隊對墩噸蹲敦頓囤鈍盾遁掇哆多奪垛躲朵跺舵剁惰墮蛾峨鵝俄額訛娥惡厄扼遏鄂餓恩而兒耳爾餌洱二貳發罰筏伐乏閥法琺藩帆番翻樊礬釩繁凡煩反返範販犯飯泛坊芳方肪房防妨仿訪紡放菲非啡飛肥匪誹吠肺廢沸費芬酚吩氛分紛墳焚汾粉奮份忿憤糞豐封楓蜂峰鋒風瘋烽逢馮縫諷奉鳳佛否夫敷膚孵扶拂輻幅氟符伏俘服浮涪福袱弗甫撫輔俯釜斧脯腑府腐赴副覆賦複傅付阜父腹負富訃附婦縛咐噶嘎該改概鈣蓋溉幹甘杆柑竿肝趕感稈敢贛岡剛鋼缸肛綱崗港杠篙臯高膏羔糕搞鎬稿告哥歌擱戈鴿胳疙割革葛格蛤閣隔鉻個各給根跟耕更庚羹埂耿梗工攻功恭龔供躬公宮弓鞏汞拱貢共鈎勾溝苟狗垢構購夠辜菇咕箍估沽孤姑鼓古蠱骨谷股故顧固雇刮瓜剮寡挂褂乖拐怪棺關官冠觀管館罐慣灌貫光廣逛瑰規圭矽歸龜閨軌鬼詭癸桂櫃跪貴劊輥滾棍鍋郭國果裹過哈骸孩海氦亥害駭酣憨邯韓含涵寒函喊罕翰撼捍旱憾悍焊汗漢夯杭航壕嚎豪毫郝好耗號浩呵喝荷菏核禾和何合盒貉閡河涸赫褐鶴賀嘿黑痕很狠恨哼亨橫衡恒轟哄烘虹鴻洪宏弘紅喉侯猴吼厚候後呼乎忽瑚壺葫胡蝴狐糊湖弧虎唬護互滬戶花嘩華猾滑畫劃化話槐徊懷淮壞歡環桓還緩換患喚瘓豢煥渙宦幻荒慌黃磺蝗簧皇凰惶煌晃幌恍謊灰揮輝徽恢蛔回毀悔慧卉惠晦賄穢會燴彙諱誨繪葷昏婚魂渾混豁活夥火獲或惑霍貨禍擊圾基機畸稽積箕肌饑迹激譏雞姬績緝吉極棘輯籍集及急疾汲即嫉級擠幾脊己薊技冀季伎祭劑悸濟寄寂計記既忌際妓繼紀嘉枷夾佳家加莢頰賈甲鉀假稼價架駕嫁殲監堅尖箋間煎兼肩艱奸緘繭檢柬堿鹼揀撿簡儉剪減薦檻鑒踐賤見鍵箭件健艦劍餞漸濺澗建僵姜將漿江疆蔣槳獎講匠醬降蕉椒礁焦膠交郊澆驕嬌嚼攪鉸矯僥腳狡角餃繳絞剿教酵轎較叫窖揭接皆稭街階截劫節莖睛晶鯨京驚精粳經井警景頸靜境敬鏡徑痙靖竟競淨炯窘揪究糾玖韭久灸九酒廄救舊臼舅咎就疚鞠拘狙疽居駒菊局咀矩舉沮聚拒據巨具距踞鋸俱句懼炬劇捐鵑娟倦眷卷絹撅攫抉掘倔爵桔傑捷睫竭潔結解姐戒藉芥界借介疥誡屆巾筋斤金今津襟緊錦僅謹進靳晉禁近燼浸盡勁荊兢覺決訣絕均菌鈞軍君峻俊竣浚郡駿喀咖卡咯開揩楷凱慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕顆科殼咳可渴克刻客課肯啃墾懇坑吭空恐孔控摳口扣寇枯哭窟苦酷庫褲誇垮挎跨胯塊筷儈快寬款匡筐狂框礦眶曠況虧盔巋窺葵奎魁傀饋愧潰坤昆捆困括擴廓闊垃拉喇蠟臘辣啦萊來賴藍婪欄攔籃闌蘭瀾讕攬覽懶纜爛濫琅榔狼廊郎朗浪撈勞牢老佬姥酪烙澇勒樂雷鐳蕾磊累儡壘擂肋類淚棱楞冷厘梨犁黎籬狸離漓理李裏鯉禮莉荔吏栗麗厲勵礫曆利傈例俐痢立粒瀝隸力璃哩倆聯蓮連鐮廉憐漣簾斂臉鏈戀煉練糧涼梁粱良兩輛量晾亮諒撩聊僚療燎寥遼潦了撂鐐廖料列裂烈劣獵琳林磷霖臨鄰鱗淋凜賃吝拎玲菱零齡鈴伶羚淩靈陵嶺領另令溜琉榴硫餾留劉瘤流柳六龍聾嚨籠窿隆壟攏隴樓婁摟簍漏陋蘆盧顱廬爐擄鹵虜魯麓碌露路賂鹿潞祿錄陸戮驢呂鋁侶旅履屢縷慮氯律率濾綠巒攣孿灤卵亂掠略掄輪倫侖淪綸論蘿螺羅邏鑼籮騾裸落洛駱絡媽麻瑪碼螞馬罵嘛嗎埋買麥賣邁脈瞞饅蠻滿蔓曼慢漫謾芒茫盲氓忙莽貓茅錨毛矛鉚卯茂冒帽貌貿麽玫枚梅酶黴煤沒眉媒鎂每美昧寐妹媚門悶們萌蒙檬盟錳猛夢孟眯醚靡糜迷謎彌米秘覓泌蜜密冪棉眠綿冕免勉娩緬面苗描瞄藐秒渺廟妙蔑滅民抿皿敏憫閩明螟鳴銘名命謬摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌謀牟某拇牡畝姆母墓暮幕募慕木目睦牧穆拿哪呐鈉那娜納氖乃奶耐奈南男難囊撓腦惱鬧淖呢餒內嫩能妮霓倪泥尼擬你匿膩逆溺蔫拈年碾攆撚念娘釀鳥尿捏聶孽齧鑷鎳涅您檸獰凝甯擰濘牛扭鈕紐膿濃農弄奴努怒女暖虐瘧挪懦糯諾哦歐鷗毆藕嘔偶漚啪趴爬帕怕琶拍排牌徘湃派攀潘盤磐盼畔判叛乓龐旁耪胖抛咆刨炮袍跑泡呸胚培裴賠陪配佩沛噴盆砰抨烹澎彭蓬棚硼篷膨朋鵬捧碰坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬篇偏片騙飄漂瓢票撇瞥拼頻貧品聘乒坪蘋萍平憑瓶評屏坡潑頗婆破魄迫粕剖撲鋪仆莆葡菩蒲埔樸圃普浦譜曝瀑期欺棲戚妻七淒漆柒沏其棋奇歧畦崎臍齊旗祈祁騎起豈乞企啓契砌器氣迄棄汽泣訖掐洽牽扡釺鉛千遷簽仟謙乾黔錢鉗前潛遣淺譴塹嵌欠歉槍嗆腔羌牆薔強搶橇鍬敲悄橋瞧喬僑巧鞘撬翹峭俏竅切茄且怯竊欽侵親秦琴勤芹擒禽寢沁青輕氫傾卿清擎晴氰情頃請慶瓊窮秋丘邱球求囚酋泅趨區蛆曲軀屈驅渠取娶齲趣去圈顴權醛泉全痊拳犬券勸缺炔瘸卻鵲榷確雀裙群然燃冉染瓤壤攘嚷讓饒擾繞惹熱壬仁人忍韌任認刃妊紉扔仍日戎茸蓉榮融熔溶容絨冗揉柔肉茹蠕儒孺如辱乳汝入褥軟阮蕊瑞銳閏潤若弱撒灑薩腮鰓塞賽三三傘散桑嗓喪搔騷掃嫂瑟色澀森僧莎砂殺刹沙紗傻啥煞篩曬珊苫杉山刪煽衫閃陝擅贍膳善汕扇繕墒傷商賞晌上尚裳梢捎稍燒芍勺韶少哨邵紹奢賒蛇舌舍赦攝射懾涉社設砷申呻伸身深娠紳神沈審嬸甚腎慎滲聲生甥牲升繩省盛剩勝聖師失獅施濕詩屍虱十石拾時什食蝕實識史矢使屎駛始式示士世柿事拭誓逝勢是嗜噬適仕侍釋飾氏市恃室視試收手首守壽授售受瘦獸蔬樞梳殊抒輸叔舒淑疏書贖孰熟薯暑曙署蜀黍鼠屬術述樹束戍豎墅庶數漱恕刷耍摔衰甩帥栓拴霜雙爽誰水睡稅吮瞬順舜說碩朔爍斯撕嘶思私司絲死肆寺嗣四伺似飼巳松聳慫頌送宋訟誦搜艘擻嗽蘇酥俗素速粟僳塑溯宿訴肅酸蒜算雖隋隨綏髓碎歲穗遂隧祟孫損筍蓑梭唆縮瑣索鎖所塌他它她塔獺撻蹋踏胎苔擡台泰酞太態汰坍攤貪癱灘壇檀痰潭譚談坦毯袒碳探歎炭湯塘搪堂棠膛唐糖倘躺淌趟燙掏濤滔縧萄桃逃淘陶討套特藤騰疼謄梯剔踢銻提題蹄啼體替嚏惕涕剃屜天添填田甜恬舔腆挑條迢眺跳貼鐵帖廳聽烴汀廷停亭庭挺艇通桐酮瞳同銅彤童桶捅筒統痛偷投頭透凸禿突圖徒途塗屠土吐兔湍團推頹腿蛻褪退吞屯臀拖托脫鴕陀馱駝橢妥拓唾挖哇蛙窪娃瓦襪歪外豌彎灣玩頑丸烷完碗挽晚皖惋宛婉萬腕汪王亡枉網往旺望忘妄威巍微危韋違桅圍唯惟爲濰維葦萎委偉僞尾緯未蔚味畏胃餵魏位渭謂尉慰衛瘟溫蚊文聞紋吻穩紊問嗡翁甕撾蝸渦窩我斡臥握沃巫嗚鎢烏汙誣屋無蕪梧吾吳毋武五捂午舞伍侮塢戊霧晤物勿務悟誤昔熙析西硒矽晰嘻吸錫犧稀息希悉膝夕惜熄烯溪汐犀檄襲席習媳喜銑洗系隙戲細瞎蝦匣霞轄暇峽俠狹下廈夏嚇掀鍁先仙鮮纖鹹賢銜舷閑涎弦嫌顯險現獻縣腺餡羨憲陷限線相廂鑲香箱襄湘鄉翔祥詳想響享項巷橡像向象蕭硝霄削哮囂銷消宵淆曉小孝校肖嘯笑效楔些歇蠍鞋協挾攜邪斜脅諧寫械卸蟹懈泄瀉謝屑薪芯鋅欣辛新忻心信釁星腥猩惺興刑型形邢行醒幸杏性姓兄凶胸匈洶雄熊休修羞朽嗅鏽秀袖繡墟戌需虛噓須徐許蓄酗敘旭序畜恤絮婿緒續軒喧宣懸旋玄選癬眩絢靴薛學穴雪血勳熏循旬詢尋馴巡殉汛訓訊遜迅壓押鴉鴨呀丫芽牙蚜崖衙涯雅啞亞訝焉咽閹煙淹鹽嚴研蜒岩延言顔閻炎沿奄掩眼衍演豔堰燕厭硯雁唁彥焰宴諺驗殃央鴦秧楊揚佯瘍羊洋陽氧仰癢養樣漾邀腰妖瑤搖堯遙窯謠姚咬舀藥要耀椰噎耶爺野冶也頁掖業葉曳腋夜液一壹醫揖銥依伊衣頤夷遺移儀胰疑沂宜姨彜椅蟻倚已乙矣以藝抑易邑屹億役臆逸肄疫亦裔意毅憶義益溢詣議誼譯異翼翌繹茵蔭因殷音陰姻吟銀淫寅飲尹引隱印英櫻嬰鷹應纓瑩螢營熒蠅迎贏盈影穎硬映喲擁傭臃癰庸雍踴蛹詠泳湧永恿勇用幽優悠憂尤由郵鈾猶油遊酉有友右佑釉誘又幼迂淤于盂榆虞愚輿余俞逾魚愉渝漁隅予娛雨與嶼禹宇語羽玉域芋郁籲遇喻峪禦愈欲獄育譽浴寓裕預豫馭鴛淵冤元垣袁原援轅園員圓猿源緣遠苑願怨院曰約越躍鑰嶽粵月悅閱耘雲鄖勻隕允運蘊醞暈韻孕匝砸雜栽哉災宰載再在咱攢暫贊贓髒葬遭糟鑿藻棗早澡蚤躁噪造皂竈燥責擇則澤賊怎增憎曾贈紮喳渣劄軋鍘閘眨柵榨咋乍炸詐摘齋宅窄債寨瞻氈詹粘沾盞斬輾嶄展蘸棧占戰站湛綻樟章彰漳張掌漲杖丈帳賬仗脹瘴障招昭找沼趙照罩兆肇召遮折哲蟄轍者鍺蔗這浙珍斟真甄砧臻貞針偵枕疹診震振鎮陣蒸掙睜征猙爭怔整拯正政幀症鄭證芝枝支吱蜘知肢脂汁之織職直植殖執值侄址指止趾只旨紙志摯擲至致置幟峙制智秩稚質炙痔滯治窒中盅忠鍾衷終種腫重仲衆舟周州洲謅粥軸肘帚咒皺宙晝驟珠株蛛朱豬諸誅逐竹燭煮拄矚囑主著柱助蛀貯鑄築住注祝駐抓爪拽專磚轉撰賺篆樁莊裝妝撞壯狀椎錐追贅墜綴諄准捉拙卓桌琢茁酌啄著灼濁茲咨資姿滋淄孜紫仔籽滓子自漬字鬃棕蹤宗綜總縱鄒走奏揍租足卒族祖詛阻組鑽纂嘴醉最罪尊遵昨左佐柞做作坐座",
traditionalized = translateText.delegate(null, !0),
simplized = translateText.delegate(null, !1),
cookieName = "language";
window.toChinese = function() {
    Cookie.set(cookieName, "tw"),
    window.location.reload()
},
window.toSimpleChinese = function() {
    Cookie.set(cookieName, "cn"),
    window.location.reload()
};
var Cookie = {
    set: function(e, t) {
        var i = new Date;
        i.setDate(i.getDate() + 6e5),
        document.cookie = e + "=" + escape(t) + ";path=/;expires=" + i.toGMTString()
    },
    del: function(e) {
        document.cookie = e + "=;path=/;expires=" + new Date(0).toGMTString()
    },
    get: function(e) {
        var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
        return null != t ? unescape(t[2]) : null
    }
};
initCurreny(),
initLanguage(),
$(function() {
    initLanguage()
}),
$("#zh_cn").click(function() {
    window.toSimpleChinese()
}),
$("#zh_tw").click(function() {
    window.toChinese()
}),
$("#currency li a").each(function() {
    $(this).click(function() {
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
function() {
    function e(t, n) {
        function a(e) {
            if (a[e] !== m) return a[e];
            var t;
            if ("bug-string-char-index" == e) t = "a" != "a" [0];
            else if ("json" == e) t = a("json-stringify") && a("json-parse");
            else {
                var i;
                if ("json-stringify" == e) {
                    t = n.stringify;
                    var s = "function" == typeof t && y;
                    if (s) { (i = function() {
                            return 1
                        }).toJSON = i;
                        try {
                            s = "0" === t(0) && "0" === t(new r) && '""' == t(new o) && t(g) === m && t(m) === m && t() === m && "1" === t(i) && "[1]" == t([i]) && "[null]" == t([m]) && "null" == t(null) && "[null,null,null]" == t([m, g, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == t({
                                a: [i, !0, !1, null, "\x00\b\n\f\r	"]
                            }) && "1" === t(null, i) && "[\n 1,\n 2\n]" == t([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == t(new c( - 864e13)) && '"+275760-09-13T00:00:00.000Z"' == t(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == t(new c( - 621987552e5)) && '"1969-12-31T23:59:59.999Z"' == t(new c( - 1))
                        } catch(l) {
                            s = !1
                        }
                    }
                    t = s
                }
                if ("json-parse" == e) {
                    if (t = n.parse, "function" == typeof t) try {
                        if (0 === t("0") && !t(!1)) {
                            i = t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var d = 5 == i.a.length && 1 === i.a[0];
                            if (d) {
                                try {
                                    d = !t('"	"')
                                } catch(u) {}
                                if (d) try {
                                    d = 1 !== t("01")
                                } catch(h) {}
                                if (d) try {
                                    d = 1 !== t("1.")
                                } catch(p) {}
                            }
                        }
                    } catch(f) {
                        d = !1
                    }
                    t = d
                }
            }
            return a[e] = !!t
        }
        t || (t = s.Object()),
        n || (n = s.Object());
        var r = t.Number || s.Number,
        o = t.String || s.String,
        l = t.Object || s.Object,
        c = t.Date || s.Date,
        d = t.SyntaxError || s.SyntaxError,
        u = t.TypeError || s.TypeError,
        h = t.Math || s.Math,
        p = t.JSON || s.JSON;
        "object" == typeof p && p && (n.stringify = p.stringify, n.parse = p.parse);
        var f, v, m, l = l.prototype,
        g = l.toString,
        y = new c( - 0xc782b5b800cec);
        try {
            y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
        } catch(b) {}
        if (!a("json")) {
            var _ = a("bug-string-char-index");
            if (!y) var w = h.floor,
            x = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            $ = function(e, t) {
                return x[t] + 365 * (e - 1970) + w((e - 1969 + (t = +(t > 1))) / 4) - w((e - 1901 + t) / 100) + w((e - 1601 + t) / 400)
            };
            if ((f = l.hasOwnProperty) || (f = function(e) {
                var t, i = {};
                return (i.__proto__ = null, i.__proto__ = {
                    toString: 1
                },
                i).toString != g ? f = function(e) {
                    var t = this.__proto__;
                    return e = e in (this.__proto__ = null, this),
                    this.__proto__ = t,
                    e
                }: (t = i.constructor, f = function(e) {
                    var i = (this.constructor || t).prototype;
                    return e in this && !(e in i && this[e] === i[e])
                }),
                i = null,
                f.call(this, e)
            }), v = function(e, t) {
                var n, s, a, r = 0; (n = function() {
                    this.valueOf = 0
                }).prototype.valueOf = 0,
                s = new n;
                for (a in s) f.call(s, a) && r++;
                return n = s = null,
                r ? v = 2 == r ?
                function(e, t) {
                    var i, n = {},
                    s = "[object Function]" == g.call(e);
                    for (i in e) s && "prototype" == i || f.call(n, i) || (n[i] = 1, !f.call(e, i)) || t(i)
                }: function(e, t) {
                    var i, n, s = "[object Function]" == g.call(e);
                    for (i in e) s && "prototype" == i || !f.call(e, i) || (n = "constructor" === i) || t(i); (n || f.call(e, i = "constructor")) && t(i)
                }: (s = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), v = function(e, t) {
                    var n, a = "[object Function]" == g.call(e),
                    r = !a && "function" != typeof e.constructor && i[typeof e.hasOwnProperty] && e.hasOwnProperty || f;
                    for (n in e) a && "prototype" == n || !r.call(e, n) || t(n);
                    for (a = s.length; n = s[--a]; r.call(e, n) && t(n));
                }),
                v(e, t)
            },
            !a("json-stringify")) {
                var k = {
                    92 : "\\\\",
                    34 : '\\"',
                    8 : "\\b",
                    12 : "\\f",
                    10 : "\\n",
                    13 : "\\r",
                    9 : "\\t"
                },
                C = function(e, t) {
                    return ("000000" + (t || 0)).slice( - e)
                },
                I = function(e) {
                    for (var t = '"',
                    i = 0,
                    n = e.length,
                    s = !_ || n > 10,
                    a = s && (_ ? e.split("") : e); n > i; i++) {
                        var r = e.charCodeAt(i);
                        switch (r) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                            t += k[r];
                            break;
                        default:
                            if (32 > r) {
                                t += "\\u00" + C(2, r.toString(16));
                                break
                            }
                            t += s ? a[i] : e.charAt(i)
                        }
                    }
                    return t + '"'
                },
                T = function(e, t, i, n, s, a, r) {
                    var o, l, c, d, h, p, y, b, _;
                    try {
                        o = t[e]
                    } catch(x) {}
                    if ("object" == typeof o && o) if (l = g.call(o), "[object Date]" != l || f.call(o, "toJSON"))"function" == typeof o.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || f.call(o, "toJSON")) && (o = o.toJSON(e));
                    else if (o > -1 / 0 && 1 / 0 > o) {
                        if ($) {
                            for (d = w(o / 864e5), l = w(d / 365.2425) + 1970 - 1; $(l + 1, 0) <= d; l++);
                            for (c = w((d - $(l, 0)) / 30.42); $(l, c + 1) <= d; c++);
                            d = 1 + d - $(l, c),
                            h = (o % 864e5 + 864e5) % 864e5,
                            p = w(h / 36e5) % 24,
                            y = w(h / 6e4) % 60,
                            b = w(h / 1e3) % 60,
                            h %= 1e3
                        } else l = o.getUTCFullYear(),
                        c = o.getUTCMonth(),
                        d = o.getUTCDate(),
                        p = o.getUTCHours(),
                        y = o.getUTCMinutes(),
                        b = o.getUTCSeconds(),
                        h = o.getUTCMilliseconds();
                        o = (0 >= l || l >= 1e4 ? (0 > l ? "-": "+") + C(6, 0 > l ? -l: l) : C(4, l)) + "-" + C(2, c + 1) + "-" + C(2, d) + "T" + C(2, p) + ":" + C(2, y) + ":" + C(2, b) + "." + C(3, h) + "Z"
                    } else o = null;
                    if (i && (o = i.call(t, e, o)), null === o) return "null";
                    if (l = g.call(o), "[object Boolean]" == l) return "" + o;
                    if ("[object Number]" == l) return o > -1 / 0 && 1 / 0 > o ? "" + o: "null";
                    if ("[object String]" == l) return I("" + o);
                    if ("object" == typeof o) {
                        for (e = r.length; e--;) if (r[e] === o) throw u();
                        if (r.push(o), _ = [], t = a, a += s, "[object Array]" == l) {
                            for (c = 0, e = o.length; e > c; c++) l = T(c, o, i, n, s, a, r),
                            _.push(l === m ? "null": l);
                            e = _.length ? s ? "[\n" + a + _.join(",\n" + a) + "\n" + t + "]": "[" + _.join(",") + "]": "[]"
                        } else v(n || o,
                        function(e) {
                            var t = T(e, o, i, n, s, a, r);
                            t !== m && _.push(I(e) + ":" + (s ? " ": "") + t)
                        }),
                        e = _.length ? s ? "{\n" + a + _.join(",\n" + a) + "\n" + t + "}": "{" + _.join(",") + "}": "{}";
                        return r.pop(),
                        e
                    }
                };
                n.stringify = function(e, t, n) {
                    var s, a, r, o;
                    if (i[typeof t] && t) if ("[object Function]" == (o = g.call(t))) a = t;
                    else if ("[object Array]" == o) {
                        r = {};
                        for (var l, c = 0,
                        d = t.length; d > c; l = t[c++], o = g.call(l), ("[object String]" == o || "[object Number]" == o) && (r[l] = 1));
                    }
                    if (n) if ("[object Number]" == (o = g.call(n))) {
                        if (0 < (n -= n % 1)) for (s = "", n > 10 && (n = 10); s.length < n; s += " ");
                    } else "[object String]" == o && (s = 10 >= n.length ? n: n.slice(0, 10));
                    return T("", (l = {},
                    l[""] = e, l), a, r, s, "", [])
                }
            }
            if (!a("json-parse")) {
                var S, A, D = o.fromCharCode,
                j = {
                    92 : "\\",
                    34 : '"',
                    47 : "/",
                    98 : "\b",
                    116 : "	",
                    110 : "\n",
                    102 : "\f",
                    114 : "\r"
                },
                E = function() {
                    throw S = A = null,
                    d()
                },
                M = function() {
                    for (var e, t, i, n, s, a = A,
                    r = a.length; r > S;) switch (s = a.charCodeAt(S)) {
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        S++;
                        break;
                    case 123:
                    case 125:
                    case 91:
                    case 93:
                    case 58:
                    case 44:
                        return e = _ ? a.charAt(S) : a[S],
                        S++,
                        e;
                    case 34:
                        for (e = "@", S++; r > S;) if (s = a.charCodeAt(S), 32 > s) E();
                        else if (92 == s) switch (s = a.charCodeAt(++S)) {
                        case 92:
                        case 34:
                        case 47:
                        case 98:
                        case 116:
                        case 110:
                        case 102:
                        case 114:
                            e += j[s],
                            S++;
                            break;
                        case 117:
                            for (t = ++S, i = S + 4; i > S; S++) s = a.charCodeAt(S),
                            s >= 48 && 57 >= s || s >= 97 && 102 >= s || s >= 65 && 70 >= s || E();
                            e += D("0x" + a.slice(t, S));
                            break;
                        default:
                            E()
                        } else {
                            if (34 == s) break;
                            for (s = a.charCodeAt(S), t = S; s >= 32 && 92 != s && 34 != s;) s = a.charCodeAt(++S);
                            e += a.slice(t, S)
                        }
                        if (34 == a.charCodeAt(S)) return S++,
                        e;
                        E();
                    default:
                        if (t = S, 45 == s && (n = !0, s = a.charCodeAt(++S)), s >= 48 && 57 >= s) {
                            for (48 == s && (s = a.charCodeAt(S + 1), s >= 48 && 57 >= s) && E(); r > S && (s = a.charCodeAt(S), s >= 48 && 57 >= s); S++);
                            if (46 == a.charCodeAt(S)) {
                                for (i = ++S; r > i && (s = a.charCodeAt(i), s >= 48 && 57 >= s); i++);
                                i == S && E(),
                                S = i
                            }
                            if (s = a.charCodeAt(S), 101 == s || 69 == s) {
                                for (s = a.charCodeAt(++S), 43 != s && 45 != s || S++, i = S; r > i && (s = a.charCodeAt(i), s >= 48 && 57 >= s); i++);
                                i == S && E(),
                                S = i
                            }
                            return + a.slice(t, S)
                        }
                        if (n && E(), "true" == a.slice(S, S + 4)) return S += 4,
                        !0;
                        if ("false" == a.slice(S, S + 5)) return S += 5,
                        !1;
                        if ("null" == a.slice(S, S + 4)) return S += 4,
                        null;
                        E()
                    }
                    return "$"
                },
                U = function(e) {
                    var t, i;
                    if ("$" == e && E(), "string" == typeof e) {
                        if ("@" == (_ ? e.charAt(0) : e[0])) return e.slice(1);
                        if ("[" == e) {
                            for (t = []; e = M(), "]" != e; i || (i = !0)) i && ("," == e ? (e = M(), "]" == e && E()) : E()),
                            "," == e && E(),
                            t.push(U(e));
                            return t
                        }
                        if ("{" == e) {
                            for (t = {}; e = M(), "}" != e; i || (i = !0)) i && ("," == e ? (e = M(), "}" == e && E()) : E()),
                            "," != e && "string" == typeof e && "@" == (_ ? e.charAt(0) : e[0]) && ":" == M() || E(),
                            t[e.slice(1)] = U(M());
                            return t
                        }
                        E()
                    }
                    return e
                },
                P = function(e, t, i) {
                    i = O(e, t, i),
                    i === m ? delete e[t] : e[t] = i
                },
                O = function(e, t, i) {
                    var n, s = e[t];
                    if ("object" == typeof s && s) if ("[object Array]" == g.call(s)) for (n = s.length; n--;) P(s, n, i);
                    else v(s,
                    function(e) {
                        P(s, e, i)
                    });
                    return i.call(e, t, s)
                };
                n.parse = function(e, t) {
                    var i, n;
                    return S = 0,
                    A = "" + e,
                    i = U(M()),
                    "$" != M() && E(),
                    S = A = null,
                    t && "[object Function]" == g.call(t) ? O((n = {},
                    n[""] = i, n), "", t) : i
                }
            }
        }
        return n.runInContext = e,
        n
    }
    var t = "function" == typeof define && define.amd,
    i = {
        "function": !0,
        object: !0
    },
    n = i[typeof exports] && exports && !exports.nodeType && exports,
    s = i[typeof window] && window || this,
    a = n && i[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!a || a.global !== a && a.window !== a && a.self !== a || (s = a), n && !t) e(s, n);
    else {
        var r = s.JSON,
        o = s.JSON3,
        l = !1,
        c = e(s, s.JSON3 = {
            noConflict: function() {
                return l || (l = !0, s.JSON = r, s.JSON3 = o, r = o = null),
                c
            }
        });
        s.JSON = {
            parse: c.parse,
            stringify: c.stringify
        }
    }
    t && define(function() {
        return c
    })
}.call(this),
function(e, t, i) {
    function n(n, s, a) {
        i++;
        var r, o, l, c, d, u = e(n),
        h = 0,
        p = u.children(),
        f = p.size(),
        v = parseFloat(a.speed),
        m = parseFloat(a.timeout),
        g = parseFloat(a.maxwidth),
        y = a.itemNum * (a.width + a.itemMargin + 1),
        b = a.namespace,
        _ = b + i,
        w = b + "_nav " + _ + "_nav",
        x = b + "_here",
        $ = _ + "_on",
        k = _ + "_s",
        C = e("<ul class='" + b + "_tabs " + _ + "_tabs' />"),
        I = {
            "float": "left",
            position: "relative",
            opacity: 1,
            zIndex: 2
        },
        T = {
            "float": "none",
            position: "absolute",
            opacity: 0,
            zIndex: 1
        },
        S = function(t) {
            a.before(t),
            p.stop().fadeOut(v,
            function() {
                e(this).removeClass($).css(T).css("opacity", 1)
            }).eq(t).fadeIn(v,
            function() {
                e(this).addClass($).css(I),
                a.after(t),
                h = t
            })
        },
        A = function(e) {
            p.removeClass($);
            var t = -e * a.width;
            u.animate({
                left: t
            },
            function() {
                h = e,
                "last" === p.eq(e).attr("data-clone") ? (u.css({
                    left: -a.width
                }), h = 1) : "first" === p.eq(e).attr("data-clone") && (u.css({
                    left: -a.width * (f - 2)
                }), h = f - 2),
                p.eq(h).addClass($)
            })
        },
        D = function(e, t) {
            p.removeClass($),
            h = t ? e - a.itemNum: e + a.itemNum;
            var i = -h * (a.width + a.itemMargin);
            u.animate({
                left: i
            },
            function() {
                p.eq(h).addClass($)
            })
        };
        if ("slide" === a.animtype && 1 == a.itemNum && a.nav) {
            var j = p.eq(0).clone(),
            E = p.eq(f - 1).clone();
            j.attr({
                "data-clone": "last",
                "data-slide": 0
            }).appendTo(u).show(),
            E.attr({
                "data-clone": "first",
                "data-slide": 0
            }).prependTo(u).show(),
            p = u.children(),
            f = p.size()
        }
        if (a.itemNum > 1 && (p.css("margin-right", a.itemMargin), u.parent().css("width", y)), a.random && (p.sort(function() {
            return Math.round(Math.random()) - .5
        }), u.empty().append(p)), p.each(function(e) {
            this.id = k + e
        }), u.addClass(b + " " + _), s && s.maxwidth && u.css("max-width", g), "slide" === a.animtype) {
            p.css({
                width: a.width,
                height: a.height,
                "float": "left",
                position: "relative",
                display: "list-item"
            });
            var M = 0;
            1 == a.itemNum && (h = 1, M = -a.width),
            p.eq(h).addClass($),
            u.css({
                width: a.width * (a.nav ? f + 2 : f),
                height: a.height,
                left: M,
                overflow: "hidden",
                position: "relative"
            })
        } else p.hide().css(T).eq(0).addClass($).css(I).show();
        if (p.size() > 1) {
            if (v + 100 > m) return;
            if (a.pager && !a.manualControls) {
                var U = [];
                p.each(function(t) {
                    if (void 0 === e(this).attr("data-clone")) {
                        U += a.tabsEle ? "<li>" + a.tabsEle[t] + "</li>": "<li></li>"
                    }
                }),
                C.append(U),
                s.navContainer ? e(a.navContainer).append(C) : u.after(C)
            }
            if (a.manualControls && (C = e(a.manualControls), C.addClass(b + "_tabs " + _ + "_tabs")), (a.pager || a.manualControls) && C.find("li").each(function(t) {
                e(this).addClass(k + (t + 1))
            }), (a.pager || a.manualControls) && (d = C.find("li"), r = function(e) {
                d.closest("li").removeClass(x).eq(e).addClass(x)
            }), a.auto && (o = function() {
                c = setInterval(function() {
                    p.stop(!0, !0);
                    var e = f > h + 1 ? h + 1 : 0,
                    t = a.animtype; (a.pager || a.manualControls) && r("slide" === t ? h == f - 2 ? 0 : 0 == h ? f: h: e),
                    "slide" === t ? A(e) : S(e)
                },
                m)
            })(), l = function() {
                a.auto && (clearInterval(c), o())
            },
            a.pause && u.hover(function() {
                clearInterval(c)
            },
            function() {
                l()
            }), (a.pager || a.manualControls) && (u.parent().css("position", "relative"), d.bind("click",
            function(t) {
                t.preventDefault(),
                a.pauseControls || l();
                var i = d.index(this);
                if ("slide" === a.animtype) {
                    if (u.queue("fx").length) return;
                    r(i),
                    A(i + 1)
                } else {
                    if (h === i || e("." + $).queue("fx").length) return;
                    r(i),
                    S(i)
                }
            }).eq(0).closest("li").addClass(x), a.pauseControls && d.hover(function() {
                clearInterval(c)
            },
            function() {
                l()
            })), a.nav) {
                var P = "<a href='#' class='" + w + " prev' >" + a.prevText + "</a><a href='#' class='" + w + " next' >" + a.nextText + "</a>";
                s.navContainer ? e(a.navContainer).append(P) : u.after(P);
                var O = e("." + _ + "_nav"),
                z = O.filter(".prev");
                if (a.hidenav) {
                    O.hide();
                    var L = O.parent();
                    L.on("mouseenter",
                    function() {
                        O.show()
                    }).on("mouseleave",
                    function() {
                        O.hide()
                    })
                }
                O.bind("click",
                function(t) {
                    t.preventDefault();
                    var i = e("." + $),
                    n = 0;
                    if (n = "slide" == a.animtype ? u.queue("fx").length: i.queue("fx").length, !n) {
                        if (1 === a.itemNum) {
                            var s = p.index(i),
                            o = s - 1,
                            c = f > s + 1 ? h + 1 : 0;
                            "slide" === a.animtype ? ( - 1 == o && (o = f - 1), 0 == c && (c = 2), A(e(this)[0] === z[0] ? o: c)) : S(e(this)[0] === z[0] ? o: c)
                        } else {
                            var s = p.index(i),
                            d = e(this)[0] === z[0];
                            if (d && 0 === s) return;
                            if (!d && f - s <= a.itemNum) return;
                            D(s, d)
                        } (a.pager || a.manualControls) && ("slide" === a.animtype ? (c == f - 1 && (c = 1), 0 == o && (o = f - 2), r(e(this)[0] === z[0] ? o - 1 : c - 1)) : r(e(this)[0] === z[0] ? o: c)),
                        a.pauseControls || l()
                    }
                }),
                a.pauseControls && O.hover(function() {
                    clearInterval(c)
                },
                function() {
                    l()
                })
            }
        }
        if ("undefined" == typeof document.body.style.maxWidth && s.maxwidth) {
            var B = function() {
                u.css("width", "100%"),
                u.width() > g && u.css("width", g)
            };
            B(),
            e(t).bind("resize",
            function() {
                B()
            })
        }
        s.height && u.css({
            height: s.height
        })
    }
    e.fn.responsiveSlides = function(t) {
        var i = e.extend({
            animtype: "fade",
            width: 700,
            height: 300,
            itemNum: 1,
            itemMargin: 5,
            auto: !0,
            speed: 500,
            timeout: 4e3,
            pager: !1,
            nav: !1,
            hidenav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: e.noop,
            after: e.noop,
            tabsEle: null
        },
        t);
        n(this, t, i)
    }
} (jQuery, this, 0),
function(e) {
    e.Zebra_DatePicker = function(t, i) {
        var n, s, a, r, o, l, c, d, u, h, p, f, v, m, g, y, b, _, w, x, $, k, C, I, T, S, A, D, j, E, M, U, P, O, z, L, B = {
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
        H = this;
        H.settings = {};
        var N = e(t),
        F = function(t) {
            if (!t) {
                H.settings = e.extend({},
                B, i);
                for (var k in N.data()) 0 === k.indexOf("zdp_") && (k = k.replace(/^zdp\_/, ""), void 0 !== B[k] && (H.settings[k] = N.data("zdp_" + k)))
            }
            H.settings.readonly_element && N.attr("readonly", "readonly");
            var D = {
                days: ["d", "j", "D"],
                months: ["F", "m", "M", "n", "t"],
                years: ["o", "Y", "y"]
            },
            j = !1,
            E = !1,
            L = !1,
            F = null;
            for (F in D) e.each(D[F],
            function(e, t) {
                H.settings.format.indexOf(t) > -1 && ("days" == F ? j = !0 : "months" == F ? E = !0 : "years" == F && (L = !0))
            });
            M = j && E && L ? ["years", "months", "days"] : !j && E && L ? ["years", "months"] : j || E || !L ? j || !E || L ? ["years", "months", "days"] : ["months"] : ["years"],
            -1 == e.inArray(H.settings.view, M) && (H.settings.view = M[M.length - 1]),
            $ = [],
            x = [];
            for (var V, R = 0; 2 > R; R++) V = 0 === R ? H.settings.disabled_dates: H.settings.enabled_dates,
            e.isArray(V) && V.length > 0 && e.each(V,
            function() {
                for (var t = this.split(" "), i = 0; 4 > i; i++) {
                    t[i] || (t[i] = "*"),
                    t[i] = t[i].indexOf(",") > -1 ? t[i].split(",") : new Array(t[i]);
                    for (var n = 0; n < t[i].length; n++) if (t[i][n].indexOf("-") > -1) {
                        var s = t[i][n].match(/^([0-9]+)\-([0-9]+)/);
                        if (null !== s) {
                            for (var a = se(s[1]); a <= se(s[2]); a++) - 1 == e.inArray(a, t[i]) && t[i].push(a + "");
                            t[i].splice(n, 1)
                        }
                    }
                    for (n = 0; n < t[i].length; n++) t[i][n] = isNaN(se(t[i][n])) ? t[i][n] : se(t[i][n])
                }
                0 === R ? $.push(t) : x.push(t)
            });
            var K, Y, W = new Date,
            J = H.settings.reference_date ? H.settings.reference_date: N.data("zdp_reference_date") && void 0 !== N.data("zdp_reference_date") ? N.data("zdp_reference_date") : W;
            if (C = void 0, I = void 0, f = J.getMonth(), u = W.getMonth(), v = J.getFullYear(), h = W.getFullYear(), m = J.getDate(), p = W.getDate(), H.settings.direction === !0) C = J;
            else if (H.settings.direction === !1) I = J,
            A = I.getMonth(),
            S = I.getFullYear(),
            T = I.getDate();
            else if (!e.isArray(H.settings.direction) && G(H.settings.direction) && se(H.settings.direction) > 0 || e.isArray(H.settings.direction) && ((K = q(H.settings.direction[0])) || H.settings.direction[0] === !0 || G(H.settings.direction[0]) && H.settings.direction[0] > 0) && ((Y = q(H.settings.direction[1])) || H.settings.direction[1] === !1 || G(H.settings.direction[1]) && H.settings.direction[1] >= 0)) C = K ? K: new Date(v, f, m + se(e.isArray(H.settings.direction) ? H.settings.direction[0] === !0 ? 0 : H.settings.direction[0] : H.settings.direction)),
            f = C.getMonth(),
            v = C.getFullYear(),
            m = C.getDate(),
            Y && +Y >= +C ? I = Y: !Y && H.settings.direction[1] !== !1 && e.isArray(H.settings.direction) && (I = new Date(v, f, m + se(H.settings.direction[1]))),
            I && (A = I.getMonth(), S = I.getFullYear(), T = I.getDate());
            else if (!e.isArray(H.settings.direction) && G(H.settings.direction) && se(H.settings.direction) < 0 || e.isArray(H.settings.direction) && (H.settings.direction[0] === !1 || G(H.settings.direction[0]) && H.settings.direction[0] < 0) && ((K = q(H.settings.direction[1])) || G(H.settings.direction[1]) && H.settings.direction[1] >= 0)) I = new Date(v, f, m + se(e.isArray(H.settings.direction) ? H.settings.direction[0] === !1 ? 0 : H.settings.direction[0] : H.settings.direction)),
            A = I.getMonth(),
            S = I.getFullYear(),
            T = I.getDate(),
            K && +I > +K ? C = K: !K && e.isArray(H.settings.direction) && (C = new Date(S, A, T - se(H.settings.direction[1]))),
            C && (f = C.getMonth(), v = C.getFullYear(), m = C.getDate());
            else if (e.isArray(H.settings.disabled_dates) && H.settings.disabled_dates.length > 0) for (var X in $) if ("*" == $[X][0] && "*" == $[X][1] && "*" == $[X][2] && "*" == $[X][3]) {
                var ie = [];
                if (e.each(x,
                function() {
                    var e = this;
                    "*" != e[2][0] && ie.push(parseInt(e[2][0] + ("*" == e[1][0] ? "12": ne(e[1][0], 2)) + ("*" == e[0][0] ? "*" == e[1][0] ? "31": new Date(e[2][0], e[1][0], 0).getDate() : ne(e[0][0], 2)), 10))
                }), ie.sort(), ie.length > 0) {
                    var re = (ie[0] + "").match(/([0-9]{4})([0-9]{2})([0-9]{2})/);
                    v = parseInt(re[1], 10),
                    f = parseInt(re[2], 10) - 1,
                    m = parseInt(re[3], 10)
                }
                break
            }
            if (Z(v, f, m)) {
                for (; Z(v);) C ? (v++, f = 0) : (v--, f = 11);
                for (; Z(v, f);) C ? (f++, m = 1) : (f--, m = new Date(v, f + 1, 0).getDate()),
                f > 11 ? (v++, f = 0, m = 1) : 0 > f && (v--, f = 11, m = new Date(v, f + 1, 0).getDate());
                for (; Z(v, f, m);) C ? m++:m--,
                W = new Date(v, f, m),
                v = W.getFullYear(),
                f = W.getMonth(),
                m = W.getDate();
                W = new Date(v, f, m),
                v = W.getFullYear(),
                f = W.getMonth(),
                m = W.getDate()
            }
            var ue = q(N.val() || (H.settings.start_date ? H.settings.start_date: ""));
            if (ue && H.settings.strict && Z(ue.getFullYear(), ue.getMonth(), ue.getDate()) && N.val(""), ae(ue), !H.settings.always_visible) {
                if (!t) {
                    if (H.settings.show_icon) {
                        "firefox" == de.name && N.is('input[type="text"]') && "inline" == N.css("display") && N.css("display", "inline-block");
                        var he = jQuery('<span class="Zebra_DatePicker_Icon_Wrapper"></span>').css({
                            display: N.css("display"),
                            position: "static" == N.css("position") ? "relative": N.css("position"),
                            "float": N.css("float"),
                            top: N.css("top"),
                            right: N.css("right"),
                            bottom: N.css("bottom"),
                            left: N.css("left")
                        });
                        N.wrap(he).css({
                            position: "relative",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto"
                        }),
                        a = jQuery('<button type="button" class="Zebra_DatePicker_Icon' + ("disabled" == N.attr("disabled") ? " Zebra_DatePicker_Icon_Disabled": "") + '">Pick a date</button>'),
                        H.icon = a,
                        U = a.add(N)
                    } else U = N;
                    U.bind("click",
                    function(e) {
                        e.preventDefault(),
                        N.attr("disabled") || ("none" != s.css("display") ? H.hide() : H.show())
                    }),
                    void 0 !== a && a.insertAfter(N)
                }
                if (void 0 !== a) {
                    a.attr("style", ""),
                    H.settings.inside && a.addClass("Zebra_DatePicker_Icon_Inside");
                    var pe = N.outerWidth(),
                    fe = N.outerHeight(),
                    ve = parseInt(N.css("marginLeft"), 10) || 0,
                    me = parseInt(N.css("marginTop"), 10) || 0,
                    ge = a.outerWidth(),
                    ye = a.outerHeight(),
                    be = parseInt(a.css("marginLeft"), 10) || 0,
                    _e = parseInt(a.css("marginRight"), 10) || 0;
                    H.settings.inside ? a.css({
                        top: me + (fe - ye) / 2,
                        left: ve + (pe - ge - _e)
                    }) : a.css({
                        top: me + (fe - ye) / 2,
                        left: ve + pe + be
                    })
                }
            }
            if (z = H.settings.show_select_today !== !1 && e.inArray("days", M) > -1 && !Z(h, u, p) ? H.settings.show_select_today: !1, !t) {
                e(window).bind("resize", ce);
                var we = '<div class="Zebra_DatePicker"><table class="dp_header"><tr><td class="dp_previous">' + H.settings.header_navigation[0] + '</td><td class="dp_caption">&#032;</td><td class="dp_next">' + H.settings.header_navigation[1] + '</td></tr></table><table class="dp_daypicker"></table><table class="dp_monthpicker"></table><table class="dp_yearpicker"></table><table class="dp_footer"><tr><td class="dp_today"' + (H.settings.show_clear_date !== !1 ? ' style="width:50%"': "") + ">" + z + '</td><td class="dp_clear"' + (z !== !1 ? ' style="width:50%"': "") + ">" + H.settings.lang_clear_date + "</td></tr></table></div>";
                s = e(we),
                H.datepicker = s,
                r = e("table.dp_header", s),
                o = e("table.dp_daypicker", s),
                l = e("table.dp_monthpicker", s),
                c = e("table.dp_yearpicker", s),
                O = e("table.dp_footer", s),
                P = e("td.dp_today", O),
                d = e("td.dp_clear", O),
                H.settings.always_visible ? N.attr("disabled") || (H.settings.always_visible.append(s), H.show()) : e("body").append(s),
                s.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)", "mouseover",
                function() {
                    e(this).addClass("dp_hover")
                }).delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)", "mouseout",
                function() {
                    e(this).removeClass("dp_hover")
                }),
                Q(e("td", r)),
                e(".dp_previous", r).bind("click",
                function() {
                    e(this).hasClass("dp_blocked") || ("months" == n ? y--:"years" == n ? y -= 12 : --g < 0 && (g = 11, y--), ee())
                }),
                e(".dp_caption", r).bind("click",
                function() {
                    n = "days" == n ? e.inArray("months", M) > -1 ? "months": e.inArray("years", M) > -1 ? "years": "days": "months" == n ? e.inArray("years", M) > -1 ? "years": e.inArray("days", M) > -1 ? "days": "months": e.inArray("days", M) > -1 ? "days": e.inArray("months", M) > -1 ? "months": "years",
                    ee()
                }),
                e(".dp_caption", r).unbind(),
                e(".dp_next", r).bind("click",
                function() {
                    e(this).hasClass("dp_blocked") || ("months" == n ? y++:"years" == n ? y += 12 : 12 == ++g && (g = 0, y++), ee())
                }),
                o.delegate("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)", "click",
                function() {
                    H.settings.select_other_months && null !== (re = e(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/)) ? te(re[1], re[2] - 1, re[3], "days", e(this)) : te(y, g, se(e(this).html()), "days", e(this))
                }),
                l.delegate("td:not(.dp_disabled)", "click",
                function() {
                    var t = e(this).attr("class").match(/dp\_month\_([0-9]+)/);
                    g = se(t[1]),
                    -1 == e.inArray("days", M) ? te(y, g, 1, "months", e(this)) : (n = "days", H.settings.always_visible && N.val(""), ee())
                }),
                c.delegate("td:not(.dp_disabled)", "click",
                function() {
                    y = se(e(this).html()),
                    -1 == e.inArray("months", M) ? te(y, 1, 1, "years", e(this)) : (n = "months", H.settings.always_visible && N.val(""), ee())
                }),
                e(P).bind("click",
                function(t) {
                    t.preventDefault(),
                    te(h, u, p, "days", e(".dp_current", o)),
                    H.settings.always_visible && H.show(),
                    H.hide()
                }),
                e(d).bind("click",
                function(t) {
                    t.preventDefault(),
                    N.val(""),
                    H.settings.always_visible ? (b = null, _ = null, w = null, e("td.dp_selected", s).removeClass("dp_selected")) : (b = null, _ = null, w = null, g = null, y = null),
                    H.hide(),
                    H.settings.onClear && "function" == typeof H.settings.onClear && H.settings.onClear(N)
                }),
                H.settings.always_visible || e(document).bind({
                    mousedown: le,
                    keyup: oe
                }),
                ee()
            }
        };
        H.destroy = function() {
            void 0 !== H.icon && H.icon.remove(),
            H.datepicker.remove(),
            e(document).unbind("keyup", oe),
            e(document).unbind("mousedown", le),
            e(window).unbind("resize", ce),
            N.removeData("Zebra_DatePicker"),
            delete H
        },
        H.hide = function() {
            H.settings.always_visible || (J("hide"), s.hide())
        },
        H.show = function() {
            n = H.settings.view;
            var t = q(N.val() || (H.settings.start_date ? H.settings.start_date: ""));
            if (t ? (_ = t.getMonth(), g = t.getMonth(), w = t.getFullYear(), y = t.getFullYear(), b = t.getDate(), Z(w, _, b) && (H.settings.strict && N.val(""), g = f, y = v)) : (g = f, y = v), ee(), H.settings.always_visible) s.show();
            else {
                var i = s.outerWidth(),
                r = s.outerHeight(),
                o = void 0 !== a ? a.offset().left + a.outerWidth(!0) : N.offset().left,
                l = void 0 !== a ? a.offset().top: N.offset().top + N.outerHeight(!0),
                c = e(window).width(),
                d = e(window).height(),
                u = e(window).scrollTop(),
                h = e(window).scrollLeft();
                o + i > h + c && (o = h + c - i),
                h > o && (o = h),
                l + r > u + d && (l = u + d - r),
                u > l && (l = u),
                s.css({
                    left: o,
                    top: l
                }),
                s.fadeIn("explorer" == de.name && de.version < 9 ? 0 : 150, "linear"),
                J()
            }
        },
        H.update = function(t) {
            H.original_direction && (H.original_direction = H.direction),
            H.settings = e.extend(H.settings, t),
            F(!0)
        };
        var q = function(t) {
            if (t += "", "" !== e.trim(t)) {
                for (var i = V(H.settings.format), n = ["d", "D", "j", "l", "N", "S", "w", "F", "m", "M", "n", "Y", "y"], s = [], a = [], r = null, o = null, l = 0; l < n.length; l++)(r = i.indexOf(n[l])) > -1 && s.push({
                    character: n[l],
                    position: r
                });
                if (s.sort(function(e, t) {
                    return e.position - t.position
                }), e.each(s,
                function(e, t) {
                    switch (t.character) {
                    case "d":
                        a.push("0[1-9]|[12][0-9]|3[01]");
                        break;
                    case "D":
                        a.push("[a-z]{3}");
                        break;
                    case "j":
                        a.push("[1-9]|[12][0-9]|3[01]");
                        break;
                    case "l":
                        a.push("[a-z]+");
                        break;
                    case "N":
                        a.push("[1-7]");
                        break;
                    case "S":
                        a.push("st|nd|rd|th");
                        break;
                    case "w":
                        a.push("[0-6]");
                        break;
                    case "F":
                        a.push("[a-z]+");
                        break;
                    case "m":
                        a.push("0[1-9]|1[012]+");
                        break;
                    case "M":
                        a.push("[a-z]{3}");
                        break;
                    case "n":
                        a.push("[1-9]|1[012]");
                        break;
                    case "Y":
                        a.push("[0-9]{4}");
                        break;
                    case "y":
                        a.push("[0-9]{2}")
                    }
                }), a.length && (s.reverse(), e.each(s,
                function(e, t) {
                    i = i.replace(t.character, "(" + a[a.length - e - 1] + ")")
                }), a = new RegExp("^" + i + "$", "ig"), o = a.exec(t))) {
                    var c, d = new Date,
                    u = d.getDate(),
                    h = d.getMonth() + 1,
                    p = d.getFullYear(),
                    f = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    v = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    m = !0;
                    if (s.reverse(), e.each(s,
                    function(t, i) {
                        if (!m) return ! 0;
                        switch (i.character) {
                        case "m":
                        case "n":
                            h = se(o[t + 1]);
                            break;
                        case "d":
                        case "j":
                            u = se(o[t + 1]);
                            break;
                        case "D":
                        case "l":
                        case "F":
                        case "M":
                            c = "D" == i.character || "l" == i.character ? H.settings.days: H.settings.months,
                            m = !1,
                            e.each(c,
                            function(e, n) {
                                if (m) return ! 0;
                                if (o[t + 1].toLowerCase() == n.substring(0, "D" == i.character || "M" == i.character ? 3 : n.length).toLowerCase()) {
                                    switch (i.character) {
                                    case "D":
                                        o[t + 1] = f[e].substring(0, 3);
                                        break;
                                    case "l":
                                        o[t + 1] = f[e];
                                        break;
                                    case "F":
                                        o[t + 1] = v[e],
                                        h = e + 1;
                                        break;
                                    case "M":
                                        o[t + 1] = v[e].substring(0, 3),
                                        h = e + 1
                                    }
                                    m = !0
                                }
                            });
                            break;
                        case "Y":
                            p = se(o[t + 1]);
                            break;
                        case "y":
                            p = "19" + se(o[t + 1])
                        }
                    }), m) {
                        var g = new Date(p, (h || 1) - 1, u || 1);
                        if (g.getFullYear() == p && g.getDate() == (u || 1) && g.getMonth() == (h || 1) - 1) return g
                    }
                }
                return ! 1
            }
        },
        Q = function(e) {
            "firefox" == de.name ? e.css("MozUserSelect", "none") : "explorer" == de.name ? e.bind("selectstart",
            function() {
                return ! 1
            }) : e.mousedown(function() {
                return ! 1
            })
        },
        V = function(e) {
            return e.replace(/([-.,*+?^${}()|[\]\/\\])/g, "\\$1")
        },
        R = function(t) {
            for (var i = "",
            n = t.getDate(), s = t.getDay(), a = H.settings.days[s], r = t.getMonth() + 1, o = H.settings.months[r - 1], l = t.getFullYear() + "", c = 0; c < H.settings.format.length; c++) {
                var d = H.settings.format.charAt(c);
                switch (d) {
                case "y":
                    l = l.substr(2);
                case "Y":
                    i += l;
                    break;
                case "m":
                    r = ne(r, 2);
                case "n":
                    i += r;
                    break;
                case "M":
                    o = e.isArray(H.settings.months_abbr) && void 0 !== H.settings.months_abbr[r - 1] ? H.settings.months_abbr[r - 1] : H.settings.months[r - 1].substr(0, 3);
                case "F":
                    i += o;
                    break;
                case "d":
                    n = ne(n, 2);
                case "j":
                    i += n;
                    break;
                case "D":
                    a = e.isArray(H.settings.days_abbr) && void 0 !== H.settings.days_abbr[s] ? H.settings.days_abbr[s] : H.settings.days[s].substr(0, 3);
                case "l":
                    i += a;
                    break;
                case "N":
                    s++;
                case "w":
                    i += s;
                    break;
                case "S":
                    i += n % 10 == 1 && "11" != n ? "st": n % 10 == 2 && "12" != n ? "nd": n % 10 == 3 && "13" != n ? "rd": "th";
                    break;
                default:
                    i += d
                }
            }
            return i
        },
        K = function() {
            var t = new Date(y, g + 1, 0).getDate(),
            i = new Date(y, g, 1).getDay(),
            n = new Date(y, g, 0).getDate(),
            s = i - H.settings.first_day_of_week;
            s = 0 > s ? 7 + s: s,
            X(y + "年 " + H.settings.months[g]);
            var a = "<tr>";
            H.settings.show_week_number && (a += "<th>" + H.settings.show_week_number + "</th>");
            for (var r = 0; 7 > r; r++) a += "<th>" + (e.isArray(H.settings.days_abbr) && void 0 !== H.settings.days_abbr[(H.settings.first_day_of_week + r) % 7] ? H.settings.days_abbr[(H.settings.first_day_of_week + r) % 7] : H.settings.days[(H.settings.first_day_of_week + r) % 7].substr(0, 2)) + "</th>";
            for (a += "</tr><tr>", r = 0; 42 > r; r++) {
                r > 0 && r % 7 === 0 && (a += "</tr><tr>"),
                r % 7 === 0 && H.settings.show_week_number && (a += '<td class="dp_week_number">' + re(new Date(y, g, r - s + 1)) + "</td>");
                var l = r - s + 1;
                if (H.settings.select_other_months && (s > r || l > t)) {
                    var c = new Date(y, g, l),
                    d = c.getFullYear(),
                    f = c.getMonth(),
                    v = c.getDate();
                    c = d + ne(f + 1, 2) + ne(v, 2)
                }
                if (s > r) a += '<td class="' + (H.settings.select_other_months && !Z(d, f, v) ? "dp_not_in_month_selectable date_" + c: "dp_not_in_month") + '">' + (H.settings.select_other_months || H.settings.show_other_months ? ne(n - s + r + 1, H.settings.zero_pad ? 2 : 0) : "&nbsp;") + "</td>";
                else if (l > t) a += '<td class="' + (H.settings.select_other_months && !Z(d, f, v) ? "dp_not_in_month_selectable date_" + c: "dp_not_in_month") + '">' + (H.settings.select_other_months || H.settings.show_other_months ? ne(l - t, H.settings.zero_pad ? 2 : 0) : "&nbsp;") + "</td>";
                else {
                    var m = (H.settings.first_day_of_week + r) % 7,
                    x = "";
                    Z(y, g, l) ? (e.inArray(m, H.settings.weekend_days) > -1 ? x = "dp_weekend_disabled": x += " dp_disabled", g == u && y == h && p == l && (x += " dp_disabled_current")) : (e.inArray(m, H.settings.weekend_days) > -1 && (x = "dp_weekend"), g == _ && y == w && b == l && (x += " dp_selected"), g == u && y == h && p == l && (x += " dp_current")),
                    a += "<td" + ("" !== x ? ' class="' + e.trim(x) + '"': "") + ">" + (H.settings.zero_pad ? ne(l, 2) : l) + "</td>"
                }
            }
            a += "</tr>",
            o.html(e(a)),
            H.settings.always_visible && (D = e("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked, .dp_week_number)", o)),
            o.show()
        },
        Y = function() {
            X(y);
            for (var t = "<tr>",
            i = 0; 12 > i; i++) {
                i > 0 && i % 3 === 0 && (t += "</tr><tr>");
                var n = "dp_month_" + i;
                Z(y, i) ? n += " dp_disabled": _ !== !1 && _ == i ? n += " dp_selected": u == i && h == y && (n += " dp_current"),
                t += '<td class="' + e.trim(n) + '">' + (e.isArray(H.settings.months_abbr) && void 0 !== H.settings.months_abbr[i] ? H.settings.months_abbr[i] : H.settings.months[i].substr(0, 3)) + "</td>"
            }
            t += "</tr>",
            l.html(e(t)),
            H.settings.always_visible && (j = e("td:not(.dp_disabled)", l)),
            l.show()
        },
        W = function() {
            X(y - 7 + " - " + (y + 4));
            for (var t = "<tr>",
            i = 0; 12 > i; i++) {
                i > 0 && i % 3 === 0 && (t += "</tr><tr>");
                var n = "";
                Z(y - 7 + i) ? n += " dp_disabled": w && w == y - 7 + i ? n += " dp_selected": h == y - 7 + i && (n += " dp_current"),
                t += "<td" + ("" !== e.trim(n) ? ' class="' + e.trim(n) + '"': "") + ">" + (y - 7 + i) + "</td>"
            }
            t += "</tr>",
            c.html(e(t)),
            H.settings.always_visible && (E = e("td:not(.dp_disabled)", c)),
            c.show()
        },
        J = function(t) {
            if ("explorer" == de.name && 6 == de.version) {
                if (!k) {
                    var i = se(s.css("zIndex")) - 1;
                    k = jQuery("<iframe>", {
                        src: 'javascript:document.write("")',
                        scrolling: "no",
                        frameborder: 0,
                        allowtransparency: "true",
                        css: {
                            zIndex: i,
                            position: "absolute",
                            top: -1e3,
                            left: -1e3,
                            width: s.outerWidth(),
                            height: s.outerHeight(),
                            filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)",
                            display: "none"
                        }
                    }),
                    e("body").append(k)
                }
                switch (t) {
                case "hide":
                    k.hide();
                    break;
                default:
                    var n = s.offset();
                    k.css({
                        top: n.top,
                        left: n.left,
                        display: "block"
                    })
                }
            }
        },
        Z = function(t, i, n) {
            if ((void 0 === t || isNaN(t)) && (void 0 === i || isNaN(i)) && (void 0 === n || isNaN(n))) return ! 1;
            if (e.isArray(H.settings.direction) || 0 !== se(H.settings.direction)) {
                var s = se(ie(t, "undefined" != typeof i ? ne(i, 2) : "", "undefined" != typeof n ? ne(n, 2) : "")),
                a = (s + "").length;
                if (8 == a && ("undefined" != typeof C && s < se(ie(v, ne(f, 2), ne(m, 2))) || "undefined" != typeof I && s > se(ie(S, ne(A, 2), ne(T, 2))))) return ! 0;
                if (6 == a && ("undefined" != typeof C && s < se(ie(v, ne(f, 2))) || "undefined" != typeof I && s > se(ie(S, ne(A, 2))))) return ! 0;
                if (4 == a && ("undefined" != typeof C && v > s || "undefined" != typeof I && s > S)) return ! 0
            }
            "undefined" != typeof i && (i += 1);
            var r = !1,
            o = !1;
            return $ && e.each($,
            function() {
                if (!r) {
                    var s = this;
                    if ((e.inArray(t, s[2]) > -1 || e.inArray("*", s[2]) > -1) && ("undefined" != typeof i && e.inArray(i, s[1]) > -1 || e.inArray("*", s[1]) > -1) && ("undefined" != typeof n && e.inArray(n, s[0]) > -1 || e.inArray("*", s[0]) > -1)) {
                        if ("*" == s[3]) return r = !0;
                        var a = new Date(t, i - 1, n).getDay();
                        if (e.inArray(a, s[3]) > -1) return r = !0
                    }
                }
            }),
            x && e.each(x,
            function() {
                if (!o) {
                    var s = this;
                    if ((e.inArray(t, s[2]) > -1 || e.inArray("*", s[2]) > -1) && (o = !0, "undefined" != typeof i)) if (o = !0, e.inArray(i, s[1]) > -1 || e.inArray("*", s[1]) > -1) {
                        if ("undefined" != typeof n) if (o = !0, e.inArray(n, s[0]) > -1 || e.inArray("*", s[0]) > -1) {
                            if ("*" == s[3]) return o = !0;
                            var a = new Date(t, i - 1, n).getDay();
                            if (e.inArray(a, s[3]) > -1) return o = !0;
                            o = !1
                        } else o = !1
                    } else o = !1
                }
            }),
            x && o ? !1 : !(!$ || !r)
        },
        G = function(e) {
            return !! (e + "").match(/^\-?[0-9]+$/)
        },
        X = function(t) {
            if (e(".dp_caption", r).html(t), e.isArray(H.settings.direction) || 0 !== se(H.settings.direction) || 1 == M.length && "months" == M[0]) {
                var i, s, a = y,
                o = g;
                "days" == n ? (s = !Z(0 > o - 1 ? ie(a - 1, "11") : ie(a, ne(o - 1, 2))), i = !Z(o + 1 > 11 ? ie(a + 1, "00") : ie(a, ne(o + 1, 2)))) : "months" == n ? ((!C || C.getFullYear() <= a - 1) && (s = !0), (!I || I.getFullYear() >= a + 1) && (i = !0)) : "years" == n && ((!C || C.getFullYear() < a - 7) && (s = !0), (!I || I.getFullYear() > a + 4) && (i = !0)),
                s ? e(".dp_previous", r).removeClass("dp_blocked") : (e(".dp_previous", r).addClass("dp_blocked"), e(".dp_previous", r).removeClass("dp_hover")),
                i ? e(".dp_next", r).removeClass("dp_blocked") : (e(".dp_next", r).addClass("dp_blocked"), e(".dp_next", r).removeClass("dp_hover"))
            }
        },
        ee = function() {
            if ("" === o.text() || "days" == n) {
                if ("" === o.text()) {
                    H.settings.always_visible || s.css("left", -1e3),
                    s.show(),
                    K();
                    var t = o.outerWidth(),
                    i = o.outerHeight();
                    l.css({
                        width: t,
                        height: i
                    }),
                    c.css({
                        width: t,
                        height: i
                    }),
                    r.css("width", t),
                    O.css("width", t),
                    s.hide()
                } else K();
                l.hide(),
                c.hide()
            } else "months" == n ? (Y(), o.hide(), c.hide()) : "years" == n && (W(), o.hide(), l.hide());
            if (H.settings.onChange && "function" == typeof H.settings.onChange && void 0 !== n) {
                var a = "days" == n ? o.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)") : "months" == n ? l.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)") : c.find("td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_blocked)");
                a.each(function() {
                    if ("days" == n) if (e(this).hasClass("dp_not_in_month_selectable")) {
                        var t = e(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/);
                        e(this).data("date", t[1] + "-" + t[2] + "-" + t[3])
                    } else e(this).data("date", y + "-" + ne(g + 1, 2) + "-" + ne(se(e(this).text()), 2));
                    else if ("months" == n) {
                        var t = e(this).attr("class").match(/dp\_month\_([0-9]+)/);
                        e(this).data("date", y + "-" + ne(se(t[1]) + 1, 2))
                    } else e(this).data("date", se(e(this).text()))
                }),
                H.settings.onChange(n, a, N)
            }
            H.settings.show_clear_date === !0 || 0 === H.settings.show_clear_date && "" !== N.val() || H.settings.always_visible && H.settings.show_clear_date !== !1 ? (d.show(), z ? (P.css("width", "50%"), d.css("width", "50%")) : (P.hide(), d.css("width", "100%"))) : (d.hide(), z ? P.show().css("width", "100%") : O.hide())
        },
        te = function(e, t, i, n, s) {
            var a = new Date(e, t, i, 12, 0, 0),
            r = "days" == n ? D: "months" == n ? j: E,
            o = R(a);
            N.val(o),
            H.settings.always_visible && (_ = a.getMonth(), g = a.getMonth(), w = a.getFullYear(), y = a.getFullYear(), b = a.getDate(), r.removeClass("dp_selected"), s.addClass("dp_selected"), "days" == n && s.hasClass("dp_not_in_month_selectable") && H.show()),
            H.hide(),
            ae(a),
            H.settings.onSelect && "function" == typeof H.settings.onSelect && H.settings.onSelect(o, e + "-" + ne(t + 1, 2) + "-" + ne(i, 2), a, N),
            N.focus()
        },
        ie = function() {
            for (var e = "",
            t = 0; t < arguments.length; t++) e += arguments[t] + "";
            return e
        },
        ne = function(e, t) {
            for (e += ""; e.length < t;) e = "0" + e;
            return e
        },
        se = function(e) {
            return parseInt(e, 10)
        },
        ae = function(t) {
            H.settings.pair && e.each(H.settings.pair,
            function() {
                var i = e(this);
                if (i.data && i.data("Zebra_DatePicker")) {
                    var n = i.data("Zebra_DatePicker");
                    n.update({
                        reference_date: t,
                        direction: 0 === n.settings.direction ? 1 : n.settings.direction
                    }),
                    n.settings.always_visible && n.show()
                } else i.data("zdp_reference_date", t)
            })
        },
        re = function(e) {
            var t, i, n, s, a, r, o, l, c, d = e.getFullYear(),
            u = e.getMonth() + 1,
            h = e.getDate();
            return 3 > u ? (t = d - 1, i = (t / 4 | 0) - (t / 100 | 0) + (t / 400 | 0), n = ((t - 1) / 4 | 0) - ((t - 1) / 100 | 0) + ((t - 1) / 400 | 0), s = i - n, a = 0, r = h - 1 + 31 * (u - 1)) : (t = d, i = (t / 4 | 0) - (t / 100 | 0) + (t / 400 | 0), n = ((t - 1) / 4 | 0) - ((t - 1) / 100 | 0) + ((t - 1) / 400 | 0), s = i - n, a = s + 1, r = h + ((153 * (u - 3) + 2) / 5 | 0) + 58 + s),
            o = (t + i) % 7,
            h = (r + o - a) % 7,
            l = r + 3 - h,
            c = 0 > l ? 53 - ((o - s) / 5 | 0) : l > 364 + s ? 1 : (l / 7 | 0) + 1
        },
        oe = function(e) {
            "block" != s.css("display") && 27 != e.which || H.hide()
        },
        le = function(t) {
            if ("block" == s.css("display")) {
                if (H.settings.show_icon && e(t.target).get(0) === a.get(0)) return ! 0;
                0 === e(t.target).parents().filter(".Zebra_DatePicker").length && H.hide()
            }
        },
        ce = function() {
            H.hide(),
            void 0 !== a && (clearTimeout(L), L = setTimeout(function() {
                H.update()
            },
            100))
        },
        de = {
            init: function() {
                this.name = this.searchString(this.dataBrowser) || "",
                this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || ""
            },
            searchString: function(e) {
                for (var t = 0; t < e.length; t++) {
                    var i = e[t].string,
                    n = e[t].prop;
                    if (this.versionSearchString = e[t].versionSearch || e[t].identity, i) {
                        if ( - 1 != i.indexOf(e[t].subString)) return e[t].identity
                    } else if (n) return e[t].identity
                }
            },
            searchVersion: function(e) {
                var t = e.indexOf(this.versionSearchString);
                if ( - 1 != t) return parseFloat(e.substring(t + this.versionSearchString.length + 1))
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
        H.getCurrentDate = function() {
            return new Date(h, u, p)
        },
        H.getFirstableDate = function() {
            return new Date(v, f, m)
        },
        de.init(),
        F()
    },
    e.fn.Zebra_DatePicker = function(t, i) {
        return this.each(function() {
            void 0 !== e(this).data("Zebra_DatePicker") && e(this).data("Zebra_DatePicker").destroy();
            var n = new e.Zebra_DatePicker(this, t);
            e(this).data("Zebra_DatePicker", n),
            "function" == typeof i && i(n.getCurrentDate(), n.getFirstableDate())
        })
    }
} (jQuery),
!
function(e, t) {
    "use strict";
    var i, n, s = !1,
    a = "res/js/layer/",
    r = {
        hosts: function() {
            var e = location.href.match(/\:\d+/);
            return e = e ? e[0] : "",
            "//" + document.domain + e + "/"
        } (),
        getPath: function() {
            var e = document.scripts || i("script"),
            t = e[e.length - 1].src;
            return s ? t.substring(0, t.lastIndexOf("/") + 1) : this.hosts + a
        }
    };
    e.layer = {
        v: "1.7.0",
        ie6: !-[1] && !e.XMLHttpRequest,
        index: 0,
        path: r.getPath(),
        use: function(e, t) {
            var n = i("head")[0],
            e = e.replace(/\s/g, ""),
            s = /\.css$/.test(e),
            a = document.createElement(s ? "link": "script"),
            r = e.replace(/\.|\//g, "");
            s && (a.setAttribute("type", "text/css"), a.setAttribute("rel", "stylesheet")),
            a.setAttribute(s ? "href": "src", layer.path + e),
            a.setAttribute("id", r),
            i("#" + r)[0] || n.appendChild(a),
            i(a).ready(function() {
                t && t()
            })
        },
        ready: function(e) {
            return layer.use("skin/layer.css", e)
        },
        alert: function(e, t, n, s) {
            return i.layer({
                dialog: {
                    msg: e,
                    type: t,
                    yes: s
                },
                title: n,
                area: ["auto", "auto"]
            })
        },
        confirm: function(e, t, n, s) {
            return i.layer({
                dialog: {
                    msg: e,
                    type: 4,
                    btns: 2,
                    yes: t,
                    no: s
                },
                title: n
            })
        },
        msg: function(e, n, s, a) {
            var r, o = {
                title: !1,
                closeBtn: !1
            };
            return ("" == e || e == t) && (e = "&nbsp;"),
            n === t && (n = 2),
            "number" == typeof s ? r = s: (s = s || {},
            r = s.type, o.success = function() {
                layer.shift(s.rate)
            },
            o.shade = s.shade),
            o.time = n,
            o.dialog = {
                msg: e,
                type: r
            },
            o.end = "function" == typeof s ? s: a,
            i.layer(o)
        },
        load: function(e, t) {
            return "string" == typeof e ? this.msg(e, 0, 16) : i.layer({
                time: e,
                loading: {
                    type: t
                },
                bgcolor: t ? "#fff": "",
                shade: [.1, "#000", !!t],
                border: [7, .3, "#000", !(3 === t || !t)],
                type: 3,
                title: ["", !1],
                closeBtn: [0, !1]
            })
        },
        tips: function(e, t, n, s, a, r) {
            var o = {
                type: 4,
                shade: !1,
                success: function(e) {
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
            return n = n || {},
            o.time = n.time || n,
            o.closeBtn = n.closeBtn || !1,
            o.maxWidth = n.maxWidth || s,
            o.tips.guide = n.guide || a,
            o.tips.style = n.style || r,
            i.layer(o)
        }
    };
    var o = function(e) {
        var t = this.config;
        layer.index++,
        this.index = layer.index,
        this.config = i.extend({},
        t, e),
        this.config.dialog = i.extend({},
        t.dialog, e.dialog),
        this.config.page = i.extend({},
        t.page, e.page),
        this.config.iframe = i.extend({},
        t.iframe, e.iframe),
        this.config.loading = i.extend({},
        t.loading, e.loading),
        this.config.tips = i.extend({},
        t.tips, e.tips),
        this.creat()
    };
    o.pt = o.prototype,
    o.pt.config = {
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
            yes: function(e) {
                layer.close(e)
            },
            no: function(e) {
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
        success: function(e) {},
        close: function(e) {
            layer.close(e)
        },
        end: function() {}
    },
    o.pt.type = ["dialog", "page", "iframe", "loading", "tips"],
    o.pt.space = function(e) {
        var e = e || "",
        t = this.index,
        i = this.config,
        n = i.dialog,
        s = this.dom,
        a = -1 === n.type ? "": '<span class="xubox_msg xulayer_png32 xubox_msgico xubox_msgtype' + n.type + '"></span>',
        r = ['<div class="xubox_dialog">' + a + '<span class="xubox_msg xubox_text" style="' + (a ? "": "padding-left:20px") + '">' + n.msg + "</span></div>", '<div class="xubox_page">' + e + "</div>", '<iframe allowtransparency="true" id="' + s.ifr + t + '" name="' + s.ifr + t + '" onload="$(this).removeClass(\'xubox_load\');" class="' + s.ifr + '" frameborder="0" src="' + i.iframe.src + '"></iframe>', '<span class="xubox_loading xubox_loading_' + i.loading.type + '"></span>', '<div class="xubox_tips" style="' + i.tips.style[0] + '"><div class="xubox_tipsMsg">' + i.tips.msg + '</div><i class="layerTipsG"></i></div>'],
        o = "",
        l = "",
        c = i.zIndex + t,
        d = "z-index:" + c + "; background-color:" + i.shade[1] + "; opacity:" + i.shade[0] + "; filter:alpha(opacity=" + 100 * i.shade[0] + ");";
        i.shade[2] && (o = '<div times="' + t + '" id="xubox_shade' + t + '" class="xubox_shade" style="' + d + '"></div>'),
        i.zIndex = c;
        var u = "",
        h = "",
        p = "z-index:" + (c - 1) + ";  background-color: " + i.border[2] + "; opacity:" + i.border[1] + "; filter:alpha(opacity=" + 100 * i.border[1] + "); top:-" + i.border[0] + "px; left:-" + i.border[0] + "px;";
        i.border[3] && (l = '<div id="xubox_border' + t + '" class="xubox_border" style="' + p + '"></div>'),
        i.closeBtn[1] && (h = '<a class="xubox_close xulayer_png32 xubox_close' + i.closeBtn[0] + '" href="javascript:;"></a>'),
        i.title[1] && (u = '<h2 class="xubox_title"><em>' + i.title[0] + "</em></h2>");
        var f = '<div times="' + t + '" showtime="' + i.time + '" style="z-index:' + c + '" id="' + s.lay + t + '" class="' + s.lay + '"><div style="background-color:' + i.bgcolor + "; z-index:" + c + '" class="xubox_main">' + r[i.type] + u + h + '<span class="xubox_botton"></span></div>' + l + "</div>";
        return [o, f]
    },
    o.pt.dom = {
        lay: "xubox_layer",
        ifr: "xubox_iframe"
    },
    o.pt.creat = function() {
        var e = this,
        t = "",
        s = this.config,
        a = s.dialog,
        r = e.config.title,
        o = e.dom,
        l = e.index;
        r.constructor === Array || (e.config.title = [r, !0]),
        r === !1 && (e.config.title = [r, !1]);
        var c = s.page,
        d = i("body"),
        u = function(i) {
            var i = i || "";
            t = e.space(i),
            d.append(t[0])
        };
        switch (s.type) {
        case 1:
            if ("" !== c.html) u('<div class="xuboxPageHtml">' + c.html + "</div>"),
            d.append(t[1]);
            else if ("" !== c.url) u('<div class="xuboxPageHtml" id="xuboxPageHtml' + l + '">' + c.html + "</div>"),
            d.append(t[1]),
            i.get(c.url,
            function(e) {
                i("#xuboxPageHtml" + l).html(e),
                c.ok && c.ok(e)
            });
            else {
                if (0 != i(c.dom).parents(".xubox_page").length) return;
                u(),
                i(c.dom).show().wrap(t[1])
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
            i(".xubox_loading")[0] && layer.close(i(".xubox_loading").parents("." + o.lay).attr("times")),
            u(),
            d.append(t[1]);
            break;
        case 4:
            s.title = ["", !1],
            s.area = ["auto", "auto"],
            s.fix = !1,
            s.border = !1,
            i(".xubox_tips")[0] && layer.close(i(".xubox_tips").parents("." + o.lay).attr("times")),
            u(),
            d.append(t[1]),
            i("#" + o.lay + l).find(".xubox_close").css({
                top: 6,
                right: 7
            });
            break;
        default:
            s.title[1] || (s.area = ["auto", "auto"]),
            i(".xubox_dialog")[0] && layer.close(i(".xubox_dialog").parents("." + o.lay).attr("times")),
            u(),
            d.append(t[1])
        }
        this.layerS = i("#xubox_shade" + l),
        this.layerB = i("#xubox_border" + l),
        this.layerE = i("#" + o.lay + l);
        var h = this.layerE;
        if (this.layerMian = h.find(".xubox_main"), this.layerTitle = h.find(".xubox_title"), this.layerText = h.find(".xubox_text"), this.layerPage = h.find(".xubox_page"), this.layerBtn = h.find(".xubox_botton"), -1 != s.offset[1].indexOf("px")) var p = parseInt(s.offset[1]);
        else if ("50%" == s.offset[1]) var p = s.offset[1];
        else var p = parseInt(s.offset[1]) / 100 * n.width();
        if (h.css({
            left: p + s.border[0],
            width: s.area[0],
            height: s.area[1]
        }), s.fix ? h.css({
            top: parseInt(s.offset[0]) + s.border[0]
        }) : h.css({
            top: parseInt(s.offset[0]) + n.scrollTop() + s.border[0],
            position: "absolute"
        }), 0 == s.type && s.title[1]) switch (a.btns) {
        case 0:
            e.layerBtn.html("").hide();
            break;
        case 2:
            e.layerBtn.html('<a href="javascript:;" class="xubox_yes xubox_botton2">' + a.btn[0] + '</a><a href="javascript:;" class="xubox_no xubox_botton3">' + a.btn[1] + "</a>");
            break;
        default:
            e.layerBtn.html('<a href="javascript:;" class="xubox_yes xubox_botton1">' + a.btn[0] + "</a>")
        }
        "auto" === h.css("left") ? (h.hide(), setTimeout(function() {
            h.show(),
            e.set(l)
        },
        500)) : e.set(l),
        s.time <= 0 || e.autoclose(),
        this.callback()
    },
    o.pt.set = function(e) {
        var t = this,
        s = t.layerE,
        a = t.config,
        r = (a.dialog, a.page),
        o = (a.loading, t.dom);
        switch (t.autoArea(e), a.title[1] ? layer.ie6 && t.layerTitle.css({
            width: s.outerWidth()
        }) : 4 != a.type && s.find(".xubox_close").addClass("xubox_close1"), s.attr({
            type: t.type[a.type]
        }), a.type) {
        case 1:
            s.find(r.dom).addClass("layer_pageContent"),
            a.shade[2] && s.css({
                zIndex: a.zIndex + 1
            }),
            a.title[1] && t.layerPage.css({
                top: t.layerTitle.outerHeight()
            });
            break;
        case 2:
            var l = s.find("." + o.ifr),
            c = s.height();
            l.addClass("xubox_load").css({
                width: s.width()
            }),
            a.title[1] ? l.css({
                top: t.layerTitle.height(),
                height: c - t.layerTitle.height()
            }) : l.css({
                top: 0,
                height: c
            }),
            layer.ie6 && l.attr("src", a.iframe.src);
            break;
        case 3:
            break;
        case 4:
            var d = [0, s.outerHeight()],
            u = i(a.tips.follow),
            h = {
                width: u.outerWidth(),
                height: u.outerHeight(),
                top: u.offset().top,
                left: u.offset().left
            },
            p = s.find(".layerTipsG");
            a.tips.isGuide || p.remove(),
            s.outerWidth() > a.maxWidth && s.width(a.maxWidth),
            h.tipColor = a.tips.style[1],
            d[0] = s.outerWidth(),
            h.where = [function() {
                h.tipLeft = h.left,
                h.tipTop = h.top - d[1] - 10,
                p.removeClass("layerTipsB").addClass("layerTipsT").css({
                    "border-right-color": h.tipColor
                })
            },
            function() {
                h.tipLeft = h.left + h.width + 10,
                h.tipTop = h.top,
                p.removeClass("layerTipsL").addClass("layerTipsR").css({
                    "border-bottom-color": h.tipColor
                })
            },
            function() {
                h.tipLeft = h.left,
                h.tipTop = h.top + h.height + 10,
                p.removeClass("layerTipsT").addClass("layerTipsB").css({
                    "border-right-color": h.tipColor
                })
            },
            function() {
                h.tipLeft = h.left - d[0] + 10,
                h.tipTop = h.top,
                p.removeClass("layerTipsR").addClass("layerTipsL").css({
                    "border-bottom-color": h.tipColor
                })
            }],
            h.where[a.tips.guide](),
            0 === a.tips.guide ? h.top - (n.scrollTop() + d[1] + 16) < 0 && h.where[2]() : 1 === a.tips.guide ? n.width() - (h.left + h.width + d[0] + 16) > 0 || h.where[3]() : 2 === a.tips.guide ? h.top - n.scrollTop() + h.height + d[1] + 16 - n.height() > 0 && h.where[0]() : 3 === a.tips.guide && d[0] + 16 - h.left > 0 && h.where[1](),
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
            a.title[1] ? t.layerText.css({
                paddingTop: 18 + t.layerTitle.outerHeight()
            }) : (s.find(".xubox_msgico").css({
                top: 8
            }), t.layerText.css({
                marginTop: 11
            }))
        }
        a.fadeIn && s.css({
            opacity: 0
        }).animate({
            opacity: 1
        },
        a.fadeIn),
        t.move()
    },
    o.pt.autoArea = function(e) {
        var t, n, s = this,
        a = s.layerE,
        r = s.config,
        o = r.page,
        l = s.layerMian,
        c = s.layerBtn,
        d = s.layerText,
        u = s.layerPage,
        h = s.layerB,
        p = 0,
        f = i(".xubox_loading");
        switch ("auto" === r.area[0] && l.outerWidth() >= r.maxWidth && a.css({
            width: r.maxWidth
        }), t = r.title[1] ? s.layerTitle.innerHeight() : 0, r.type) {
        case 0:
            var v = c.find("a");
            n = d.outerHeight() + 20,
            v.length > 0 && (p = v.outerHeight() + 20);
            break;
        case 1:
            n = i(o.dom).outerHeight(),
            "auto" === r.area[0] && a.css({
                width: u.outerWidth()
            }),
            "" === o.html && "" === o.url || (n = u.outerHeight());
            break;
        case 3:
            n = f.outerHeight(),
            l.css({
                width: f.width()
            })
        }
        "auto" === r.area[1] && l.css({
            height: t + n + p
        }),
        h.css({
            width: a.outerWidth() + 2 * r.border[0],
            height: a.outerHeight() + 2 * r.border[0]
        }),
        layer.ie6 && "auto" != r.area[0] && l.css({
            width: a.outerWidth()
        }),
        "50%" !== r.offset[1] && "" != r.offset[1] || 4 === r.type ? a.css({
            marginLeft: 0
        }) : a.css({
            marginLeft: -a.outerWidth() / 2
        })
    },
    o.pt.move = function() {
        var e = this,
        t = this.config,
        s = e.dom,
        a = {
            setY: 0,
            moveLayer: function() {
                if (0 == parseInt(a.layerE.css("margin-left"))) var e = parseInt(a.move.css("left"));
                else var e = parseInt(a.move.css("left")) + -parseInt(a.layerE.css("margin-left"));
                "fixed" !== a.layerE.css("position") && (e -= a.layerE.parent().offset().left, a.setY = 0),
                a.layerE.css({
                    left: e,
                    top: parseInt(a.move.css("top")) - a.setY
                })
            }
        };
        t.move[1] && e.layerE.find(t.move[0]).attr("move", "ok"),
        t.move[1] ? e.layerE.find(t.move[0]).css({
            cursor: "move"
        }) : e.layerE.find(t.move[0]).css({
            cursor: "auto"
        }),
        i(t.move[0]).on("mousedown",
        function(e) {
            if (e.preventDefault(), "ok" === i(this).attr("move")) {
                a.ismove = !0,
                a.layerE = i(this).parents("." + s.lay);
                var r = a.layerE.offset().left,
                o = a.layerE.offset().top,
                l = a.layerE.width() - 6,
                c = a.layerE.height() - 6;
                i("#xubox_moves")[0] || i("body").append('<div id="xubox_moves" class="xubox_moves" style="left:' + r + "px; top:" + o + "px; width:" + l + "px; height:" + c + 'px; z-index:2147483584"></div>'),
                a.move = i("#xubox_moves"),
                t.moveType && a.move.css({
                    opacity: 0
                }),
                a.moveX = e.pageX - a.move.position().left,
                a.moveY = e.pageY - a.move.position().top,
                "fixed" !== a.layerE.css("position") || (a.setY = n.scrollTop())
            }
        }),
        i(document).mousemove(function(e) {
            if (a.ismove) {
                var i = e.pageX - a.moveX,
                s = e.pageY - a.moveY;
                if (e.preventDefault(), !t.moveOut) {
                    a.setY = n.scrollTop();
                    var r = n.width() - a.move.outerWidth() - t.border[0],
                    o = t.border[0] + a.setY;
                    i < t.border[0] && (i = t.border[0]),
                    i > r && (i = r),
                    o > s && (s = o),
                    s > n.height() - a.move.outerHeight() - t.border[0] + a.setY && (s = n.height() - a.move.outerHeight() - t.border[0] + a.setY)
                }
                a.move.css({
                    left: i,
                    top: s
                }),
                t.moveType && a.moveLayer(),
                i = null,
                s = null,
                r = null,
                o = null
            }
        }).mouseup(function() {
            try {
                a.ismove && (a.moveLayer(), a.move.remove()),
                a.ismove = !1
            } catch(e) {
                a.ismove = !1
            }
            t.moveEnd && t.moveEnd()
        })
    },
    o.pt.autoclose = function() {
        var e = this,
        t = this.config.time,
        i = function() {
            t--,
            0 === t && (layer.close(e.index), clearInterval(e.autotime))
        };
        this.autotime = setInterval(i, 1e3)
    },
    r.config = {
        end: {}
    },
    o.pt.callback = function() {
        var e = this,
        t = e.layerE,
        i = e.config,
        n = i.dialog;
        e.openLayer(),
        e.config.success(t),
        layer.ie6 && e.IE6(),
        t.find(".xubox_close").off("click").on("click",
        function(t) {
            t.preventDefault(),
            i.close(e.index)
        }),
        t.find(".xubox_yes").off("click").on("click",
        function(t) {
            t.preventDefault(),
            n.yes(e.index)
        }),
        t.find(".xubox_no").off("click").on("click",
        function(t) {
            t.preventDefault(),
            n.no(e.index)
        }),
        this.layerS.off("click").on("click",
        function(t) {
            t.preventDefault(),
            e.config.shadeClose && layer.close(e.index)
        }),
        r.config.end[e.index] = i.end
    },
    o.pt.IE6 = function() {
        var e = this,
        t = e.layerE,
        s = i("select"),
        a = e.dom,
        r = t.offset().top;
        if (e.config.fix) var o = function() {
            t.css({
                top: i(document).scrollTop() + r
            })
        };
        else var o = function() {
            t.css({
                top: r
            })
        };
        o(),
        n.scroll(o),
        i.each(s,
        function(e, t) {
            var n = i(this);
            n.parents("." + a.lay)[0] || "none" == n.css("display") || n.attr({
                layer: "1"
            }).hide(),
            n = null
        }),
        e.reselect = function() {
            i.each(s,
            function(e, t) {
                var n = i(this);
                n.parents("." + a.lay)[0] || 1 == n.attr("layer") && i("." + a.lay).length < 1 && n.removeAttr("layer").show(),
                n = null
            })
        }
    },
    o.pt.openLayer = function() {
        var e = this,
        t = e.dom;
        layer.autoArea = function(t) {
            return e.autoArea(t)
        },
        layer.getIndex = function(e) {
            return i(e).parents("." + t.lay).attr("times")
        },
        layer.getChildFrame = function(e, n) {
            return n = n || i("." + t.ifr).parents("." + t.lay).attr("times"),
            i("#" + t.lay + n).find("." + t.ifr).contents().find(e)
        },
        layer.getFrameIndex = function(e) {
            return i(e ? "#" + e: "." + t.ifr).parents("." + t.lay).attr("times")
        },
        layer.iframeAuto = function(e) {
            e = e || i("." + t.ifr).parents("." + t.lay).attr("times");
            var n = this.getChildFrame("body", e).outerHeight(),
            s = i("#" + t.lay + e),
            a = s.find(".xubox_title"),
            r = 0; ! a || (r = a.height()),
            s.css({
                height: n + r
            });
            var o = -parseInt(i("#xubox_border" + e).css("top"));
            i("#xubox_border" + e).css({
                height: n + 2 * o + r
            }),
            i("#" + t.ifr + e).css({
                height: n
            })
        },
        layer.close = function(n) {
            var s = i("#" + t.lay + n),
            a = i("#xubox_moves, #xubox_shade" + n);
            if (s.attr("type") == e.type[1]) if (s.find(".xuboxPageHtml")[0]) s.remove();
            else {
                s.find(".xubox_close,.xubox_botton,.xubox_title,.xubox_border").remove();
                for (var o = 0; 3 > o; o++) s.find(".layer_pageContent").unwrap().hide()
            } else document.all && s.find("#" + t.ifr + n).remove(),
            s.remove();
            a.remove(),
            layer.ie6 && e.reselect(),
            "function" == typeof r.config.end[n] && r.config.end[n](),
            delete r.config.end[n]
        },
        layer.loadClose = function() {
            var e = i(".xubox_loading").parents("." + t.lay),
            n = e.attr("times");
            layer.close(n)
        },
        layer.shift = function(t, i) {
            var s = e.config,
            a = layer.ie6,
            r = e.layerE,
            o = 0,
            l = n.width(),
            c = n.height();
            o = "50%" == s.offset[1] || "" == s.offset[1] ? r.outerWidth() / 2 : r.outerWidth();
            var d = {
                t: {
                    top: s.border[0]
                },
                b: {
                    top: c - r.outerHeight() - s.border[0]
                },
                cl: o + s.border[0],
                ct: -r.outerHeight(),
                cr: l - o - s.border[0],
                fn: function() {
                    a && e.IE6()
                }
            };
            switch (t) {
            case "left-top":
                r.css({
                    left:
                    d.cl,
                    top: d.ct
                }).animate(d.t, i, d.fn);
                break;
            case "top":
                r.css({
                    top:
                    d.ct
                }).animate(d.t, i, d.fn);
                break;
            case "right-top":
                r.css({
                    left:
                    d.cr,
                    top: d.ct
                }).animate(d.t, i, d.fn);
                break;
            case "right-bottom":
                r.css({
                    left:
                    d.cr,
                    top: c
                }).animate(d.b, i, d.fn);
                break;
            case "bottom":
                r.css({
                    top:
                    c
                }).animate(d.b, i, d.fn);
                break;
            case "left-bottom":
                r.css({
                    left:
                    d.cl,
                    top: c
                }).animate(d.b, i, d.fn);
                break;
            case "left":
                r.css({
                    left:
                    -r.outerWidth(),
                    marginLeft: 0
                }).animate({
                    left: d.t.top
                },
                i, d.fn)
            }
        },
        layer.setMove = function() {
            return e.move()
        },
        layer.area = function(n, s) {
            var a = [i("#" + t.lay + n), i("#xubox_border" + n)],
            r = a[0].attr("type"),
            o = a[0].find(".xubox_main"),
            l = a[0].find(".xubox_title");
            if (r === e.type[1] || r === e.type[2]) {
                if (a[0].css(s), a[1][0] && a[1].css({
                    width: s.width - 2 * parseInt(a[1].css("left")),
                    height: s.height - 2 * parseInt(a[1].css("top"))
                }), o.css({
                    height: s.height
                }), r === e.type[2]) {
                    var c = a[0].find("iframe");
                    c.css({
                        width: s.width,
                        height: l ? s.height - l.outerHeight() : s.height
                    })
                }
                "0px" !== a[0].css("margin-left") && (s.hasOwnProperty("top") && a[0].css({
                    top: s.top - (a[1][0] && parseInt(a[1].css("top")))
                }), s.hasOwnProperty("left") && a[0].css({
                    left: s.left + a[0].outerWidth() / 2 - (a[1][0] && parseInt(a[1].css("left")))
                }), a[0].css({
                    marginLeft: -a[0].outerWidth() / 2
                }))
            }
        },
        layer.closeAll = function() {
            var e = i("." + t.lay);
            i.each(e,
            function() {
                var e = i(this).attr("times");
                layer.close(e)
            })
        },
        layer.zIndex = e.config.zIndex,
        layer.setTop = function(e) {
            var t = function() {
                layer.zIndex++,
                e.css("z-index", layer.zIndex + 1)
            };
            return layer.zIndex = parseInt(e[0].style.zIndex),
            e.on("mousedown", t),
            layer.zIndex
        }
    },
    r.run = function() {
        i = jQuery,
        n = i(e),
        layer.use("skin/layer.css"),
        i.layer = function(e) {
            var t = new o(e);
            return t.index
        }
    };
    var l = "../../init/jquery";
    e.seajs ? define([l],
    function(t, i, n) {
        r.run(),
        i.layer = [e.layer, e.$.layer]
    }) : r.run()
} (window),
String.prototype.startWith = function(e) {
    var t = new RegExp("^" + e);
    return t.test(this)
},
String.prototype.replaceWith = function(e, t) {
    var i = new RegExp(e, "g"),
    n = this.replace(i, t);
    return n
},
String.prototype.Contain = function(e) {
    if (e) if (e.constructor == Array) for (var t = 0; t < e.length; t++) for (var i = 0; i < this.length; i++) {
        var n, s = e[t];
        if (s && (n = s.length > 1 ? this.substr(i, s.length) : this.substr(i, 1), s == n)) return ! 0
    } else if (e.constructor == String) {
        for (var t = 0; t < this.length; t++) if (this.length - t >= e.length && this.substr(t, e.length) == e) return ! 0
    } else layer.msg("参数有误！", 1, 8, "");
    return ! 1
},
String.prototype.endWith = function(e) {
    var t = new RegExp(e + "$");
    return t.test(this)
},
"function" != typeof String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}),
function(e) {
    var t, i, n, s, a, r, o, l = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    u = "BeforeAppend",
    h = "MarkupParse",
    p = "Open",
    f = "Change",
    v = "mfp",
    m = "." + v,
    g = "mfp-ready",
    y = "mfp-removing",
    b = "mfp-prevent-close",
    _ = function() {},
    w = !!window.jQuery,
    x = e(window),
    $ = function(e, i) {
        t.ev.on(v + e + m, i)
    },
    k = function(t, i, n, s) {
        var a = document.createElement("div");
        return a.className = "mfp-" + t,
        n && (a.innerHTML = n),
        s ? i && i.appendChild(a) : (a = e(a), i && a.appendTo(i)),
        a
    },
    C = function(i, n) {
        t.ev.triggerHandler(v + i, n),
        t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n: [n]))
    },
    I = function(i) {
        return i === o && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), o = i),
        t.currTemplate.closeBtn
    },
    T = function() {
        e.magnificPopup.instance || (t = new _, t.init(), e.magnificPopup.instance = t)
    },
    S = function() {
        var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition) return ! 0;
        for (; t.length;) if (t.pop() + "Transition" in e) return ! 0;
        return ! 1
    };
    _.prototype = {
        constructor: _,
        init: function() {
            var i = navigator.appVersion;
            t.isIE7 = -1 !== i.indexOf("MSIE 7."),
            t.isIE8 = -1 !== i.indexOf("MSIE 8."),
            t.isLowIE = t.isIE7 || t.isIE8,
            t.isAndroid = /android/gi.test(i),
            t.isIOS = /iphone|ipad|ipod/gi.test(i),
            t.supportsTransition = S(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            s = e(document),
            t.popupsCache = {}
        },
        open: function(i) {
            n || (n = e(document.body));
            var a;
            if (i.isObj === !1) {
                t.items = i.items.toArray(),
                t.index = 0;
                var o, l = i.items;
                for (a = 0; l.length > a; a++) if (o = l[a], o.parsed && (o = o.el[0]), o === i.el[0]) {
                    t.index = a;
                    break
                }
            } else t.items = e.isArray(i.items) ? i.items: [i.items],
            t.index = i.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [],
            r = "",
            t.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : s,
            i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {},
            t.st = e.extend(!0, {},
            e.magnificPopup.defaults, i),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile: t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = k("bg").on("click" + m,
            function() {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + m,
            function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)),
            t.contentContainer = k("content"),
            t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (a = 0; c.length > a; a++) {
                var d = c[a];
                d = d.charAt(0).toUpperCase() + d.slice(1),
                t["init" + d].call(t)
            }
            C("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? ($(h,
            function(e, t, i, n) {
                i.close_replaceWith = I(n.type)
            }), r += " mfp-close-btn-in") : t.wrap.append(I())),
            t.st.alignTop && (r += " mfp-align-top"),
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: x.scrollTop(),
                position: "absolute"
            }),
            (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: s.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && s.on("keyup" + m,
            function(e) {
                27 === e.keyCode && t.close()
            }),
            x.on("resize" + m,
            function() {
                t.updateSize()
            }),
            t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
            r && t.wrap.addClass(r);
            var u = t.wH = x.height(),
            f = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var v = t._getScrollbarSize();
                v && (f.marginRight = v)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
            var y = t.st.mainClass;
            return t.isIE7 && (y += " mfp-ie7"),
            y && t._addClassToMFP(y),
            t.updateItemHTML(),
            C("BuildControls"),
            e("html").css(f),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || n),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g),
                s.on("focusin" + m, t._onFocusIn)
            },
            16),
            t.isOpen = !0,
            t.updateSize(u),
            C(p),
            i
        },
        close: function() {
            t.isOpen && (C(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(y), setTimeout(function() {
                t._close()
            },
            t.st.removalDelay)) : t._close())
        },
        _close: function() {
            C(l);
            var i = y + " " + g + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var n = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : n.overflow = "",
                e("html").css(n)
            }
            s.off("keyup" + m + " focusin" + m),
            t.ev.off(m),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null,
            t.content = null,
            t.currTemplate = null,
            t.prevHeight = 0,
            C(d)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                n = window.innerHeight * i;
                t.wrap.css("height", n),
                t.wH = n
            } else t.wH = e || x.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            C("Resize")
        },
        updateItemHTML: function() {
            var i = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (C("BeforeChange", [t.currItem ? t.currItem.type: "", n]), t.currItem = i, !t.currTemplate[n]) {
                var s = t.st[n] ? t.st[n].markup: !1;
                C("FirstMarkupParse", s),
                t.currTemplate[n] = s ? e(s) : !0
            }
            a && a !== i.type && t.container.removeClass("mfp-" + a + "-holder");
            var r = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(r, n),
            i.preloaded = !0,
            C(f, i),
            a = i.type,
            t.container.prepend(t.contentContainer),
            C("AfterChange")
        },
        appendContent: function(e, i) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(I()) : t.content = e: t.content = "",
            C(u),
            t.container.addClass("mfp-" + i + "-holder"),
            t.contentContainer.append(t.content)
        },
        parseEl: function(i) {
            var n, s = t.items[i];
            if (s.tagName ? s = {
                el: e(s)
            }: (n = s.type, s = {
                data: s,
                src: s.src
            }), s.el) {
                for (var a = t.types,
                r = 0; a.length > r; r++) if (s.el.hasClass("mfp-" + a[r])) {
                    n = a[r];
                    break
                }
                s.src = s.el.attr("data-mfp-src"),
                s.src || (s.src = s.el.attr("href"))
            }
            return s.type = n || t.st.type || "inline",
            s.index = i,
            s.parsed = !0,
            t.items[i] = s,
            C("ElementParse", s),
            t.items[i]
        },
        addGroup: function(e, i) {
            var n = function(n) {
                n.mfpEl = this,
                t._openClick(n, e, i)
            };
            i || (i = {});
            var s = "click.magnificPopup";
            i.mainEl = e,
            i.items ? (i.isObj = !0, e.off(s).on(s, n)) : (i.isObj = !1, i.delegate ? e.off(s).on(s, i.delegate, n) : (i.items = e, e.off(s).on(s, n)))
        },
        _openClick: function(i, n, s) {
            var a = void 0 !== s.midClick ? s.midClick: e.magnificPopup.defaults.midClick;
            if (a || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                var r = void 0 !== s.disableOn ? s.disableOn: e.magnificPopup.defaults.disableOn;
                if (r) if (e.isFunction(r)) {
                    if (!r.call(t)) return ! 0
                } else if (r > x.width()) return ! 0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()),
                s.el = e(i.mfpEl),
                s.delegate && (s.items = n.find(s.delegate)),
                t.open(s)
            }
        },
        updateStatus: function(e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i),
                n || "loading" !== e || (n = t.st.tLoading);
                var s = {
                    status: e,
                    text: n
                };
                C("UpdateStatus", s),
                e = s.status,
                n = s.text,
                t.preloader.html(n),
                t.preloader.find("a").on("click",
                function(e) {
                    e.stopImmediatePropagation()
                }),
                t.container.addClass("mfp-s-" + e),
                i = e
            }
        },
        _checkIfClose: function(i) {
            if (!e(i).hasClass(b)) {
                var n = t.st.closeOnContentClick,
                s = t.st.closeOnBgClick;
                if (n && s) return ! 0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return ! 0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (n) return ! 0
                } else if (s && e.contains(document, i)) return ! 0;
                return ! 1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? s.height() : document.body.scrollHeight) > (e || x.height())
        },
        _setFocus: function() { (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(i) {
            return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, i, n) {
            var s;
            n.data && (i = e.extend(n.data, i)),
            C(h, [t, i, n]),
            e.each(i,
            function(e, i) {
                if (void 0 === i || i === !1) return ! 0;
                if (s = e.split("_"), s.length > 1) {
                    var n = t.find(m + "-" + s[0]);
                    if (n.length > 0) {
                        var a = s[1];
                        "replaceWith" === a ? n[0] !== i[0] && n.replaceWith(i) : "img" === a ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(s[1], i)
                    }
                } else t.find(m + "-" + e).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm",
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    },
    e.magnificPopup = {
        instance: null,
        proto: _.prototype,
        modules: [],
        open: function(t, i) {
            return T(),
            t = t ? e.extend(!0, {},
            t) : {},
            t.isObj = !0,
            t.index = i || 0,
            this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options),
            e.extend(this.proto, i.proto),
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    },
    e.fn.magnificPopup = function(i) {
        T();
        var n = e(this);
        if ("string" == typeof i) if ("open" === i) {
            var s, a = w ? n.data("magnificPopup") : n[0].magnificPopup,
            r = parseInt(arguments[1], 10) || 0;
            a.items ? s = a.items[r] : (s = n, a.delegate && (s = s.find(a.delegate)), s = s.eq(r)),
            t._openClick({
                mfpEl: s
            },
            n, a)
        } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1));
        else i = e.extend(!0, {},
        i),
        w ? n.data("magnificPopup", i) : n[0].magnificPopup = i,
        t.addGroup(n, i);
        return n
    };
    var A, D, j, E = "inline",
    M = function() {
        j && (D.after(j.addClass(A)).detach(), j = null)
    };
    e.magnificPopup.registerModule(E, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(E),
                $(l + "." + E,
                function() {
                    M()
                })
            },
            getInline: function(i, n) {
                if (M(), i.src) {
                    var s = t.st.inline,
                    a = e(i.src);
                    if (a.length) {
                        var r = a[0].parentNode;
                        r && r.tagName && (D || (A = s.hiddenClass, D = k(A), A = "mfp-" + A), j = a.after(D).detach().removeClass(A)),
                        t.updateStatus("ready")
                    } else t.updateStatus("error", s.tNotFound),
                    a = e("<div>");
                    return i.inlineElement = a,
                    a
                }
                return t.updateStatus("ready"),
                t._parseMarkup(n, {},
                i),
                n
            }
        }
    });
    var U, P = "ajax",
    O = function() {
        U && n.removeClass(U)
    },
    z = function() {
        O(),
        t.req && t.req.abort()
    };
    e.magnificPopup.registerModule(P, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(P),
                U = t.st.ajax.cursor,
                $(l + "." + P, z),
                $("BeforeChange." + P, z)
            },
            getAjax: function(i) {
                U && n.addClass(U),
                t.updateStatus("loading");
                var s = e.extend({
                    url: i.src,
                    success: function(n, s, a) {
                        var r = {
                            data: n,
                            xhr: a
                        };
                        C("ParseAjax", r),
                        t.appendContent(e(r.data), P),
                        i.finished = !0,
                        O(),
                        t._setFocus(),
                        setTimeout(function() {
                            t.wrap.addClass(g)
                        },
                        16),
                        t.updateStatus("ready"),
                        C("AjaxContentAdded")
                    },
                    error: function() {
                        O(),
                        i.finished = i.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                },
                t.st.ajax.settings);
                return t.req = e.ajax(s),
                ""
            }
        }
    });
    var L, B = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n)) return n.call(t, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image,
                i = ".image";
                t.types.push("image"),
                $(p + i,
                function() {
                    "image" === t.currItem.type && e.cursor && n.addClass(e.cursor)
                }),
                $(l + i,
                function() {
                    e.cursor && n.removeClass(e.cursor),
                    x.off("resize" + m)
                }),
                $("Resize" + i, t.resizeImage),
                t.isLowIE && $("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - i)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, C("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var i = 0,
                n = e.img[0],
                s = function(a) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(L), i++, void(3 === i ? s(10) : 40 === i ? s(50) : 100 === i && s(500)))
                    },
                    a)
                };
                s(1)
            },
            getImage: function(i, n) {
                var s = 0,
                a = function() {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (s++, 200 > s ? setTimeout(a, 100) : r()))
                },
                r = function() {
                    i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", o.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                },
                o = t.st.image,
                l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img",
                    i.img = e(c).on("load.mfploader", a).on("error.mfploader", r),
                    c.src = i.src,
                    l.is("img") && (i.img = i.img.clone()),
                    c = i.img[0],
                    c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: B(i),
                    img_replaceWith: i.img
                },
                i),
                t.resizeImage(),
                i.hasSize ? (L && clearInterval(L), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", o.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
            }
        }
    });
    var H, N = function() {
        return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform),
        H
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e: e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, i = t.st.zoom,
                n = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var s, a, r = i.duration,
                    o = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                        n = "all " + i.duration / 1e3 + "s " + i.easing,
                        s = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        },
                        a = "transition";
                        return s["-webkit-" + a] = s["-moz-" + a] = s["-o-" + a] = s[a] = n,
                        t.css(s),
                        t
                    },
                    d = function() {
                        t.content.css("visibility", "visible")
                    };
                    $("BuildControls" + n,
                    function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(s), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void d();
                            a = o(e),
                            a.css(t._getOffset()),
                            t.wrap.append(a),
                            s = setTimeout(function() {
                                a.css(t._getOffset(!0)),
                                s = setTimeout(function() {
                                    d(),
                                    setTimeout(function() {
                                        a.remove(),
                                        e = a = null,
                                        C("ZoomAnimationEnded")
                                    },
                                    16)
                                },
                                r)
                            },
                            16)
                        }
                    }),
                    $(c + n,
                    function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(s), t.st.removalDelay = r, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                a = o(e)
                            }
                            a.css(t._getOffset(!0)),
                            t.wrap.append(a),
                            t.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                a.css(t._getOffset())
                            },
                            16)
                        }
                    }),
                    $(l + n,
                    function() {
                        t._allowZoom() && (d(), a && a.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img: !1
            },
            _getOffset: function(i) {
                var n;
                n = i ? t.currItem.img: t.st.zoom.opener(t.currItem.el || t.currItem);
                var s = n.offset(),
                a = parseInt(n.css("padding-top"), 10),
                r = parseInt(n.css("padding-bottom"), 10);
                s.top -= e(window).scrollTop() - a;
                var o = {
                    width: n.width(),
                    height: (w ? n.innerHeight() : n[0].offsetHeight) - r - a
                };
                return N() ? o["-moz-transform"] = o.transform = "translate(" + s.left + "px," + s.top + "px)": (o.left = s.left, o.top = s.top),
                o
            }
        }
    });
    var F = "iframe",
    q = "//about:blank",
    Q = function(e) {
        if (t.currTemplate[F]) {
            var i = t.currTemplate[F].find("iframe");
            i.length && (e || (i[0].src = q), t.isIE8 && i.css("display", e ? "block": "none"))
        }
    };
    e.magnificPopup.registerModule(F, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(F),
                $("BeforeChange",
                function(e, t, i) {
                    t !== i && (t === F ? Q() : i === F && Q(!0))
                }),
                $(l + "." + F,
                function() {
                    Q()
                })
            },
            getIframe: function(i, n) {
                var s = i.src,
                a = t.st.iframe;
                e.each(a.patterns,
                function() {
                    return s.indexOf(this.index) > -1 ? (this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), s = this.src.replace("%id%", s), !1) : void 0
                });
                var r = {};
                return a.srcAction && (r[a.srcAction] = s),
                t._parseMarkup(n, r, i),
                t.updateStatus("ready"),
                n
            }
        }
    });
    var V = function(e) {
        var i = t.items.length;
        return e > i - 1 ? e - i: 0 > e ? i + e: e
    },
    R = function(e, t, i) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = t.st.gallery,
                n = ".mfp-gallery",
                a = Boolean(e.fn.mfpFastClick);
                return t.direction = !0,
                i && i.enabled ? (r += " mfp-gallery", $(p + n,
                function() {
                    i.navigateByImgClick && t.wrap.on("click" + n, ".mfp-img",
                    function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }),
                    s.on("keydown" + n,
                    function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), $("UpdateStatus" + n,
                function(e, i) {
                    i.text && (i.text = R(i.text, t.currItem.index, t.items.length))
                }), $(h + n,
                function(e, n, s, a) {
                    var r = t.items.length;
                    s.counter = r > 1 ? R(i.tCounter, a.index, r) : ""
                }), $("BuildControls" + n,
                function() {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup,
                        s = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(b),
                        r = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(b),
                        o = a ? "mfpFastClick": "click";
                        s[o](function() {
                            t.prev()
                        }),
                        r[o](function() {
                            t.next()
                        }),
                        t.isIE7 && (k("b", s[0], !1, !0), k("a", s[0], !1, !0), k("b", r[0], !1, !0), k("a", r[0], !1, !0)),
                        t.container.append(s.add(r))
                    }
                }), $(f + n,
                function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null
                    },
                    16)
                }), void $(l + n,
                function() {
                    s.off(n),
                    t.wrap.off("click" + n),
                    t.arrowLeft && a && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),
                    t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function() {
                t.direction = !0,
                t.index = V(t.index + 1),
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1,
                t.index = V(t.index - 1),
                t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, i = t.st.gallery.preload,
                n = Math.min(i[0], t.items.length),
                s = Math.min(i[1], t.items.length);
                for (e = 1; (t.direction ? s: n) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1; (t.direction ? n: s) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(i) {
                if (i = V(i), !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)),
                    C("LazyLoad", n),
                    "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader",
                    function() {
                        n.hasSize = !0
                    }).on("error.mfploader",
                    function() {
                        n.hasSize = !0,
                        n.loadError = !0,
                        C("LazyLoadError", n)
                    }).attr("src", n.src)),
                    n.preloaded = !0
                }
            }
        }
    });
    var K = "retina";
    e.magnificPopup.registerModule(K, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/,
                function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                    i = e.ratio;
                    i = isNaN(i) ? i() : i,
                    i > 1 && ($("ImageHasSize." + K,
                    function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / i,
                            width: "100%"
                        })
                    }), $("ElementParse." + K,
                    function(t, n) {
                        n.src = e.replaceSrc(n, i)
                    }))
                }
            }
        }
    }),
    function() {
        var t = 1e3,
        i = "ontouchstart" in window,
        n = function() {
            x.off("touchmove" + a + " touchend" + a)
        },
        s = "mfpFastClick",
        a = "." + s;
        e.fn.mfpFastClick = function(s) {
            return e(this).each(function() {
                var r, o = e(this);
                if (i) {
                    var l, c, d, u, h, p;
                    o.on("touchstart" + a,
                    function(e) {
                        u = !1,
                        p = 1,
                        h = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0],
                        c = h.clientX,
                        d = h.clientY,
                        x.on("touchmove" + a,
                        function(e) {
                            h = e.originalEvent ? e.originalEvent.touches: e.touches,
                            p = h.length,
                            h = h[0],
                            (Math.abs(h.clientX - c) > 10 || Math.abs(h.clientY - d) > 10) && (u = !0, n())
                        }).on("touchend" + a,
                        function(e) {
                            n(),
                            u || p > 1 || (r = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                r = !1
                            },
                            t), s())
                        })
                    })
                }
                o.on("click" + a,
                function() {
                    r || s()
                })
            })
        },
        e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + a + " click" + a),
            i && x.off("touchmove" + a + " touchend" + a)
        }
    } (),
    T()
} (window.jQuery || window.Zepto),
function() {
    "use strict";
    function e(e) {
        function t(t, n) {
            var s, a, v = t == window,
            m = n && void 0 !== n.message ? n.message: void 0;
            if (n = e.extend({},
            e.blockUI.defaults, n || {}), !n.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({},
                e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({},
                e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), a = e.extend({},
                e.blockUI.defaults.themedCSS, n.themedCSS || {}), m = void 0 === m ? n.message: m, v && p && i(window, {
                    fadeOut: 0
                }), m && "string" != typeof m && (m.parentNode || m.jquery)) {
                    var g = m.jquery ? m[0] : m,
                    y = {};
                    e(t).data("blockUI.history", y),
                    y.el = g,
                    y.parent = g.parentNode,
                    y.display = g.style.display,
                    y.position = g.style.position,
                    y.parent && y.parent.removeChild(g)
                }
                e(t).data("blockUI.onUnblock", n.onUnblock);
                var b, _, w, x, $ = n.baseZ;
                b = e(d || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + $+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>': '<div class="blockUI" style="display:none"></div>'),
                _ = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + $+++';display:none"></div>': '<div class="blockUI blockOverlay" style="z-index:' + $+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),
                n.theme && v ? (x = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + ($ + 10) + ';display:none;position:fixed">', n.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : n.theme ? (x = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + ($ + 10) + ';display:none;position:absolute">', n.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : x = v ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + ($ + 10) + ';display:none;position:fixed"></div>': '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + ($ + 10) + ';display:none;position:absolute"></div>',
                w = e(x),
                m && (n.theme ? (w.css(a), w.addClass("ui-widget-content")) : w.css(s)),
                n.theme || _.css(n.overlayCSS),
                _.css("position", v ? "fixed": "absolute"),
                (d || n.forceIframe) && b.css("opacity", 0);
                var k = [b, _, w],
                C = e(v ? "body": t);
                e.each(k,
                function() {
                    this.appendTo(C)
                }),
                n.theme && n.draggable && e.fn.draggable && w.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var I = h && (!e.support.boxModel || e("object,embed", v ? null: t).length > 0);
                if (u || I) {
                    if (v && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !v) var T = l(t, "borderTopWidth"),
                    S = l(t, "borderLeftWidth"),
                    A = T ? "(0 - " + T + ")": 0,
                    D = S ? "(0 - " + S + ")": 0;
                    e.each(k,
                    function(e, t) {
                        var i = t[0].style;
                        if (i.position = "absolute", 2 > e) v ? i.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : i.setExpression("height", 'this.parentNode.offsetHeight + "px"'),
                        v ? i.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : i.setExpression("width", 'this.parentNode.offsetWidth + "px"'),
                        D && i.setExpression("left", D),
                        A && i.setExpression("top", A);
                        else if (n.centerY) v && i.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                        i.marginTop = 0;
                        else if (!n.centerY && v) {
                            var s = n.css && n.css.top ? parseInt(n.css.top, 10) : 0,
                            a = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + s + ') + "px"';
                            i.setExpression("top", a)
                        }
                    })
                }
                if (m && (n.theme ? w.find(".ui-widget-content").append(m) : w.append(m), (m.jquery || m.nodeType) && e(m).show()), (d || n.forceIframe) && n.showOverlay && b.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock: c,
                    E = n.showOverlay && !m ? j: c,
                    M = m ? j: c;
                    n.showOverlay && _._fadeIn(n.fadeIn, E),
                    m && w._fadeIn(n.fadeIn, M)
                } else n.showOverlay && _.show(),
                m && w.show(),
                n.onBlock && n.onBlock();
                if (v ? (p = w[0], f = e(n.focusableElements, p), n.focusInput && setTimeout(r, 20)) : o(w[0], n.centerX, n.centerY), n.timeout) {
                    var U = setTimeout(function() {
                        v ? e.unblockUI(n) : e(t).unblock(n)
                    },
                    n.timeout);
                    e(t).data("blockUI.timeout", U)
                }
            }
        }
        function i(t, i) {
            var a, r = t == window,
            o = e(t),
            l = o.data("blockUI.history"),
            c = o.data("blockUI.timeout");
            c && (clearTimeout(c), o.removeData("blockUI.timeout")),
            i = e.extend({},
            e.blockUI.defaults, i || {}),
            s(0, t, i),
            null === i.onUnblock && (i.onUnblock = o.data("blockUI.onUnblock"), o.removeData("blockUI.onUnblock"));
            var d;
            d = r ? e("body").children().filter(".blockUI").add("body > .blockUI") : o.find(">.blockUI"),
            i.cursorReset && (d.length > 1 && (d[1].style.cursor = i.cursorReset), d.length > 2 && (d[2].style.cursor = i.cursorReset)),
            r && (p = f = null),
            i.fadeOut ? (a = d.length, d.stop().fadeOut(i.fadeOut,
            function() {
                0 === --a && n(d, l, i, t)
            })) : n(d, l, i, t)
        }
        function n(t, i, n, s) {
            var a = e(s);
            if (!a.data("blockUI.isBlocked")) {
                t.each(function(e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }),
                i && i.el && (i.el.style.display = i.display, i.el.style.position = i.position, i.parent && i.parent.appendChild(i.el), a.removeData("blockUI.history")),
                a.data("blockUI.static") && a.css("position", "static"),
                "function" == typeof n.onUnblock && n.onUnblock(s, n);
                var r = e(document.body),
                o = r.width(),
                l = r[0].style.width;
                r.width(o - 1).width(o),
                r[0].style.width = l
            }
        }
        function s(t, i, n) {
            var s = i == window,
            r = e(i);
            if ((t || (!s || p) && (s || r.data("blockUI.isBlocked"))) && (r.data("blockUI.isBlocked", t), s && n.bindEvents && (!t || n.showOverlay))) {
                var o = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(o, n, a) : e(document).unbind(o, a)
            }
        }
        function a(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var i = f,
                n = !t.shiftKey && t.target === i[i.length - 1],
                s = t.shiftKey && t.target === i[0];
                if (n || s) return setTimeout(function() {
                    r(s)
                },
                10),
                !1
            }
            var a = t.data,
            o = e(t.target);
            return o.hasClass("blockOverlay") && a.onOverlayClick && a.onOverlayClick(t),
            o.parents("div." + a.blockMsgClass).length > 0 ? !0 : 0 === o.parents().children().filter("div.blockUI").length
        }
        function r(e) {
            if (f) {
                var t = f[e === !0 ? f.length - 1 : 0];
                t && t.focus()
            }
        }
        function o(e, t, i) {
            var n = e.parentNode,
            s = e.style,
            a = (n.offsetWidth - e.offsetWidth) / 2 - l(n, "borderLeftWidth"),
            r = (n.offsetHeight - e.offsetHeight) / 2 - l(n, "borderTopWidth");
            t && (s.left = a > 0 ? a + "px": "0"),
            i && (s.top = r > 0 ? r + "px": "0")
        }
        function l(t, i) {
            return parseInt(e.css(t, i), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var c = e.noop ||
        function() {},
        d = /MSIE/.test(navigator.userAgent),
        u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
        h = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) {
            t(window, e)
        },
        e.unblockUI = function(e) {
            i(window, e)
        },
        e.growlUI = function(t, i, n, s) {
            var a = e('<div class="growlUI"></div>');
            t && a.append("<h1>" + t + "</h1>"),
            i && a.append("<h2>" + i + "</h2>"),
            void 0 === n && (n = 3e3);
            var r = function(t) {
                t = t || {},
                e.blockUI({
                    message: a,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn: 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut: 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout: n,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: s,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            r();
            a.css("opacity");
            a.mouseover(function() {
                r({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(),
                t.fadeTo(300, 1)
            }).mouseout(function() {
                e(".blockMsg").fadeOut(1e3)
            })
        },
        e.fn.block = function(i) {
            if (this[0] === window) return e.blockUI(i),
            this;
            var n = e.extend({},
            e.blockUI.defaults, i || {});
            return this.each(function() {
                var t = e(this);
                n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }),
            this.each(function() {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)),
                this.style.zoom = 1,
                t(this, i)
            })
        },
        e.fn.unblock = function(t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function() {
                i(this, t)
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
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false": "about:blank",
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
        var p = null,
        f = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery)
} (),
function(e) {
    var t = e.event.dispatch || e.event.handle,
    i = e.event.special,
    n = "D" + +new Date,
    s = "D" + ( + new Date + 1);
    i.scrollstart = {
        setup: function() {
            var s, a = function(e) {
                var n = this,
                a = arguments;
                s ? clearTimeout(s) : (e.type = "scrollstart", t.apply(n, a)),
                s = setTimeout(function() {
                    s = null
                },
                i.scrollstop.latency)
            };
            e(this).bind("scroll", a).data(n, a)
        },
        teardown: function() {
            e(this).unbind("scroll", e(this).data(n))
        }
    },
    i.scrollstop = {
        latency: 250,
        setup: function() {
            var n, a = function(e) {
                var s = this,
                a = arguments;
                n && clearTimeout(n),
                n = setTimeout(function() {
                    n = null,
                    e.type = "scrollstop",
                    t.apply(s, a)
                },
                i.scrollstop.latency)
            };
            e(this).bind("scroll", a).data(s, a)
        },
        teardown: function() {
            e(this).unbind("scroll", e(this).data(s))
        }
    }
} (jQuery),
function(e, t) {
    function i(e) {
        this.settings = {},
        this.selectedData = {},
        this.templateData = {},
        this.defaultValue = "",
        this.templateValData = {},
        this.namespace = "",
        this.formatResult = function(e) {
            return e
        },
        t.extend(this, e)
    }
    i.prototype = {
        createList: function(e) {
            for (var t = ['<ul class="select_option">'], i = 0; i < e.length; i++) {
                var n = e[i],
                s = this.namespace + ("" == this.namespace ? "": "-") + "hwselect-result-" + i;
                n instanceof Object && "id" in n ? (this.templateData[s] = n, this.templateValData[n.id] = s) : (this.templateData[s] = n, this.templateValData[n] = s),
                t.push('<li id="' + s + '" >' + this.formatResult(n))
            }
            return t.push("</ul>"),
            t.join("")
        },
        getSelectedVal: function(e) {
            return e instanceof Object && "id" in e ? e.id: e
        },
        blindEvent: function() {
            var e = this.settings,
            i = this;
            e.$inputVal.on("click",
            function() {
                i.open()
            }),
            e.$wrap.on("mouseleave",
            function() {
                i.close()
            }),
            e.$listChildren.each(function() {
                t(this).on("click",
                function() {
                    var n = i.getSelectedVal(i.templateData[t(this).attr("id")]);
                    n != e.$element.val() && (e.$list.find(".hover").removeClass("hover"), e.$inputVal.find("p").html(t(this).html()), t(this).addClass("hover"), i.selectedData.val = n, i.change(n, i.templateData[t(this).attr("id")], e.$element.attr("id")), e.$element.val(n)),
                    e.$list.hide()
                })
            })
        },
        open: function() {
            this.settings.$list.show()
        },
        close: function() {
            this.settings.$list.hide()
        },
        formatValue: function(e) {
            var t = this.templateData[this.templateValData[e]];
            return this.formatResult(t)
        },
        init: function() {
            var e = this,
            i = e.$element.width(),
            n = e.$element,
            s = e.$element.val();
            s = "" != s ? s: e.defaultValue,
            n.hide().wrap("<div class='select_wrap hwselect_" + this.namespace + "' ></div>").after(e.createList(e.data)).before('<div class="s_date"><p>' + e.formatValue(s) + "</p></div>").prev().css("width", i);
            var a = n.prev().innerWidth();
            n.next().css("width", a).children().css("width", a),
            e.$inputVal = n.prev(),
            e.$list = n.next(),
            e.$wrap = n.parent(),
            e.$listChildren = e.$list.children(),
            t.extend(e.settings, e),
            this.selectedData.val = s,
            "" != this.defaultValue && n.val(s);
            var r = null;
            e.$listChildren.each(function() {
                return t(this).attr("id") == e.templateValData[s] ? (r = e.$listChildren.index(this), t(this).addClass("hover"), !1) : void 0
            }),
            this.blindEvent()
        }
    },
    t.fn.hwSelect = function() {
        var e, n = Array.prototype.slice.call(arguments, 0);
        if (0 === n.length || "object" == typeof n[0]) {
            e = 0 === n.length ? {}: t.extend({},
            n[0]),
            e.$element = t(this);
            var s = new i(e);
            s.init()
        }
    }
} (window, $),
function(e, t, i, n) {
    var s = e(t);
    e.fn.lazyload = function(a) {
        function r() {
            var t = 0;
            l.each(function() {
                var i = e(this);
                if (!c.skip_invisible || i.is(":visible")) if (e.abovethetop(this, c) || e.leftofbegin(this, c));
                else if (e.belowthefold(this, c) || e.rightoffold(this, c)) {
                    if (++t > c.failure_limit) return ! 1
                } else i.trigger("appear"),
                t = 0
            })
        }
        var o, l = this,
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
        return a && (n !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), n !== a.effectspeed && (a.effect_speed = a.effectspeed, delete a.effectspeed), e.extend(c, a)),
        o = c.container === n || c.container === t ? s: e(c.container),
        0 === c.event.indexOf("scroll") && o.bind(c.event,
        function() {
            return r()
        }),
        this.each(function() {
            var t = this,
            i = e(t);
            t.loaded = !1,
            i.attr("src") !== n && i.attr("src") !== !1 || i.is("img") && i.attr("src", c.placeholder),
            i.one("appear",
            function() {
                if (!this.loaded) {
                    if (c.appear) {
                        var n = l.length;
                        c.appear.call(t, n, c)
                    }
                    e("<img />").bind("load",
                    function() {
                        var n = i.attr("data-" + c.data_attribute);
                        i.hide(),
                        i.is("img") ? i.attr("src", n) : i.css("background-image", "url('" + n + "')"),
                        i[c.effect](c.effect_speed),
                        t.loaded = !0;
                        var s = e.grep(l,
                        function(e) {
                            return ! e.loaded
                        });
                        if (l = e(s), c.load) {
                            var a = l.length;
                            c.load.call(t, a, c)
                        }
                    }).attr("src", i.attr("data-" + c.data_attribute))
                }
            }),
            0 !== c.event.indexOf("scroll") && i.bind(c.event,
            function() {
                t.loaded || i.trigger("appear")
            })
        }),
        s.bind("resize",
        function() {
            r()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && s.bind("pageshow",
        function(t) {
            t.originalEvent && t.originalEvent.persisted && l.each(function() {
                e(this).trigger("appear")
            })
        }),
        e(i).ready(function() {
            r()
        }),
        this
    },
    e.belowthefold = function(i, a) {
        var r;
        return r = a.container === n || a.container === t ? (t.innerHeight ? t.innerHeight: s.height()) + s.scrollTop() : e(a.container).offset().top + e(a.container).height(),
        r <= e(i).offset().top - a.threshold
    },
    e.rightoffold = function(i, a) {
        var r;
        return r = a.container === n || a.container === t ? s.width() + s.scrollLeft() : e(a.container).offset().left + e(a.container).width(),
        r <= e(i).offset().left - a.threshold
    },
    e.abovethetop = function(i, a) {
        var r;
        return r = a.container === n || a.container === t ? s.scrollTop() : e(a.container).offset().top,
        r >= e(i).offset().top + a.threshold + e(i).height()
    },
    e.leftofbegin = function(i, a) {
        var r;
        return r = a.container === n || a.container === t ? s.scrollLeft() : e(a.container).offset().left,
        r >= e(i).offset().left + a.threshold + e(i).width()
    },
    e.inviewport = function(t, i) {
        return ! (e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
    },
    e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return ! e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return ! e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return ! e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return ! e.rightoffold(t, {
                threshold: 0
            })
        }
    })
} (jQuery, window, document);
var UserQA = {
    init: function() {
        this.fetchComment(1),
        this.fetchQA(1)
    },
    fetchComment: function(e) {
        $.ajax({
            url: "/user/viewCommentOrder.html?tourId=" + tourId + "&pageNo=" + e + "&cache=" + new Date,
            dataType: "json",
            type: "get",
            success: function(e) {
                if (e && 1 == e.status) {
                    var t = e.reviews,
                    i = e.totalNum,
                    n = e.avg,
                    s = e.pageNo;
                    if (i > 0) {
                        var a = "<li id = 'order_li'><a href='#order_comment'>用户点评<span id='yhdpnum'>" + i + "</span><b></b></a></li>";
                        0 == $("#order_li").length && $("#tour_xg").before(a);
                        var r = "<div class='content-title'>";
                        r += "<div name='tour_yhdp' id='tour_yhdp' class='tour-maobiao'></div>",
                        r += "<b></b><span class='title-big'>用户点评</span>",
                        r += "</div>",
                        r += "<div class='xgpf'>",
                        r += "<div id='xzw_starSys' class='star floatL'>",
                        r += "<div id='xzw_starBox'>",
                        r += "<ul class='stars' id='star'>",
                        r += "<li><a href='javascript:void()'  class='one-star'>1</a></li>",
                        r += "<li><a href='javascript:void()'  class='one-star'>2</a></li>",
                        r += "<li><a href='javascript:void()'  class='one-star'>3</a></li>",
                        r += "<li><a href='javascript:void()'  class='one-star'>4</a></li>",
                        r += "<li><a href='javascript:void()' class='one-star'>5</a></li>",
                        r += "</ul>",
                        r += "<div class='current-rating' id='showb' style='width:" + 20 * n + "px'></div>",
                        r += "</div></div>",
                        r += "<span class='score'>" + n + "分</span>",
                        r += "<span cass='number'>  共" + i + "条点评</span>",
                        r += "</div>",
                        r += "<div class='tour-box-content'>";
                        for (var o = 0; o < t.length; o++) {
                            var l = t[o],
                            c = "http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon01.png",
                            d = l.totalgrade / 20,
                            u = l.processgrade,
                            h = l.itemgrade,
                            p = l.servicegrade,
                            f = "";
                            5 == h ? f = "非常棒，值得再去": 4 == h ? f = "还不错，去一次就行了": 3 == h && (f = "感觉一般般");
                            var v = "";
                            5 == u ? v = "非常棒": 4 == u ? v = "很好": 3 == u ? v = "还不错": 2 == u ? v = "马马虎虎": 1 == u && (v = "不满意");
                            var m = "";
                            m = 5 == p ? "非常棒": 4 == p ? "很好": 3 == p ? "还不错": 2 == p ? "马马虎虎": "不满意";
                            var g = !1;
                            if (0 == o) {
                                if (1 == l.isgood) {
                                    g = !0,
                                    c = "http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon00.png",
                                    r += "<div class='infos-evaluate-top'>",
                                    r += "<dl>",
                                    r += "<dt><img src='http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon00.png'/>",
                                    r += "<div class='name'>" + l.usercontact + " </div>",
                                    r += "<div class='time'>" + l.createTime + "</div>",
                                    r += "</dt>",
                                    r += "<dd>",
                                    r += "<div class='dp-xj'>",
                                    r += "<div class='floatL dp-dp'>",
                                    r += "<div class='floatL'>点评：</div>",
                                    r += "<div id='xzw_starSys' class='star floatL'><div id='xzw_starBox'>",
                                    r += "<ul class='stars' id='star'>",
                                    r += "<li><a href='javascript:void()'  class='one-star'>1</a></li>",
                                    r += "<li><a href='javascript:void()'  class='one-star'>2</a></li>",
                                    r += "<li><a href='javascript:void()'  class='one-star'>3</a></li>",
                                    r += "<li><a href='javascript:void()'  class='one-star'>4</a></li>",
                                    r += "<li><a href='javascript:void()'  class='one-star'>5</a></li>",
                                    r += "</ul>",
                                    r += "<div class='current-rating' id='showb' style='width:" + l.totalgrade + "px'></div>",
                                    r += "<div class='clear'></div>",
                                    r += "</div></div>",
                                    r += "</div>",
                                    r += "<div class='floatL ywxm'>游玩项目：<span>" + f + "</span></div>",
                                    r += "<div class='floatL ywgc'>游玩过程：<span>" + v + "</span></div>",
                                    r += "<div class='floatL ywgc'>游玩服务：<span>" + m + "</span></div>",
                                    r += "<div class='clear'></div>",
                                    r += "</div>",
                                    r += "<div class='C_review'>" + l.review + "</div>",
                                    "" != l.reply && void 0 != l.reply && (r += "<div class='CS_reply'>" + l.reply + "</div>");
                                    var y = l.imagesurl;
                                    if (y) {
                                        var b = y.split(",");
                                        if (b.length > 0) {
                                            r += "<div class='imgs'><ul>";
                                            for (var _ = 0; _ < b.length; _++) {
                                                var w = b[_];
                                                r += "<li  style='cursor:pointer' id='" + l.id + "'><img class='select_commentimg' style='height:100%' data='" + l.id + "' src='" + imageHead + "/" + w + "'/><div id='show_" + l.id + "' class=''></div></li>"
                                            }
                                            r += "</ul>",
                                            r += "<div class='clear'></div>",
                                            r += "<div class='imgsdetail' id='imgsdetail_" + l.id + "' style='display:none'>",
                                            r += "<img  id='commentimg_" + l.id + "' src='" + imageHead + "/" + b[0] + "'/>",
                                            r += "</div></div>"
                                        }
                                    }
                                    r += "<div class='hot'></div>",
                                    r += "</dd>",
                                    r += "</dl>",
                                    r += "</div>"
                                }
                                r += "<div class='infos-evaluate'>"
                            } else d >= 3 && 4 > d ? c = "http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon02.png": d >= 0 && 2 >= d && (c = "http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon03.png");
                            if (!g) {
                                r += "<dl>",
                                r += "<dt>",
                                r += "<img src='" + c + "' alt='' />",
                                r += "<div class='name'>" + l.usercontact + " </div>",
                                r += "<div class='time'>" + l.createTime + "</div>",
                                r += "</dt>",
                                r += "<dd>",
                                r += "<div class='dp-xj'>",
                                r += "<div class='floatL dp-dp'>",
                                r += "<div class='floatL'>点评：</div>",
                                r += "<div id='xzw_starSys' class='star floatL'><div id='xzw_starBox'>",
                                r += "<ul class='stars' id='star'>",
                                r += "<li><a href='javascript:void()'  class='one-star'>1</a></li>",
                                r += "<li><a href='javascript:void()'  class='one-star'>2</a></li>",
                                r += "<li><a href='javascript:void()'  class='one-star'>3</a></li>",
                                r += "<li><a href='javascript:void()'  class='one-star'>4</a></li>",
                                r += "<li><a href='javascript:void()'  class='one-star'>5</a></li>",
                                r += "</ul>",
                                r += "<div class='current-rating' id='showb' style='width:" + l.totalgrade + "px'></div>",
                                r += "<div class='clear'></div>",
                                r += "</div></div>",
                                r += "</div>",
                                r += "<div class='floatL ywxm'>游玩项目：<span>" + f + "</span></div>",
                                r += "<div class='floatL ywgc'>游玩过程：<span>" + v + "</span></div>",
                                r += "<div class='floatL ywgc'>游玩服务：<span>" + m + "</span></div>",
                                r += "<div class='clear'></div>",
                                r += "</div>",
                                r += "<div class='C_review'>" + l.review + "</div>",
                                "" != l.reply && void 0 != l.reply && (r += "<div class='CS_reply'>" + l.reply + "</div>");
                                var y = l.imagesurl;
                                if (y) {
                                    var b = y.split(",");
                                    if (b.length > 0) {
                                        r += "<div class='imgs'><ul>";
                                        for (var _ = 0; _ < b.length; _++) {
                                            var w = b[_];
                                            r += "<li  style='cursor:pointer' id='" + l.id + "'><img class='select_commentimg' style='height:100%' data='" + l.id + "' src='" + imageHead + "/" + w + "'/><div id='show_" + l.id + "' class=''></div></li>"
                                        }
                                        r += "</ul>",
                                        r += "<div class='clear'></div>",
                                        r += "<div class='imgsdetail' id='imgsdetail_" + l.id + "' style='display:none'>",
                                        r += "<img  id='commentimg_" + l.id + "' src='" + imageHead + "/" + b[0] + "'/>",
                                        r += "</div></div>"
                                    }
                                }
                                r += (1 == l.isgood, "<div class='hot'></div>"),
                                r += "</dd></dl>"
                            }
                        }
                        r += "</div>";
                        var x = 10,
                        k = 1;
                        if (k = i % 6 == 0 ? i / 6 : i / 6 + 1, k = parseInt(k), k >= 2) {
                            if (r += "<div class='page'>", r += 1 == s ? "<a href='javascript:void()'>上一页</a>&nbsp;": "<a href='javascript:UserQA.fetchComment(" + (s - 1) + ")'>上一页</a>&nbsp;", k > x) if (x >= s + 1) {
                                for (var o = 1; x > o; o++) r += s == o ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='javascript:UserQA.fetchComment(" + o + ")'>" + o + "</a>&nbsp;";
                                r += s == k ? "<a href='javascript:void()' class='hover'>" + k + "</a>": "...<a href='javascript:UserQA.fetchComment(" + k + ")'>" + k + "</a>"
                            } else if (s >= k - x + 2) {
                                r += "<a href='javascript:void()'>1</a>&nbsp;";
                                for (var o = k - x + 1; k > o; o++) r += s == o ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='javascript:UserQA.fetchComment(" + o + ")'>" + o + "</a>&nbsp;";
                                r += s == k ? "...<a href='javascript:void()' class='hover'>" + k + "</a>": "...<a href='javascript:UserQA.fetchComment(" + k + ")'>" + k + "</a>"
                            } else {
                                r += "<a href='javascript:void()'>1</a>&nbsp;";
                                for (var o = s; s + 1 > o; o++) r += s == o ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='javascript:UserQA.fetchComment(" + o + ")'>" + o + "</a>&nbsp;";
                                r += s == k ? "<a href='javascript:void()' class='hover'>" + k + "</a>": "...<a href='javascript:UserQA.fetchComment(" + k + ")'>" + k + "</a>"
                            } else for (var o = 1; k >= o; o++) r += s == o ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='javascript:UserQA.fetchComment(" + o + ")'>" + o + "</a>&nbsp;";
                            r += k > s ? "<a href='javascript:UserQA.fetchComment(" + (s + 1) + ")'>下一页</a>": "<a href='javascript:void()'>下一页</a>",
                            r += "</div>"
                        }
                        r += "</div>",
                        $(".tour-evaluate").show(),
                        $(".tour-evaluate").children().remove(),
                        $(".tour-evaluate").append(r),
                        $(".select_commentimg").each(function() {
                            $(this).click(function() {
                                var e = $(this).attr("src"),
                                t = $(this).attr("data"),
                                i = $("#imgsdetail_" + t).attr("da"),
                                n = $("#commentimg_" + t).attr("src");
                                return "1" == i && e == n ? ($("#imgsdetail_" + t).hide(), $("#imgsdetail_" + t).attr("da", "0"), void $(this).parent("li").each(function() {
                                    $(this).removeClass("hover"),
                                    $(this).children("div").removeClass("ponity_shadow")
                                })) : ($(".imgs ul li").each(function() {
                                    $(this).removeClass("hover"),
                                    $(this).children("div").removeClass("ponity_shadow"),
                                    $("#imgsdetail_" + $(this).attr("id")).hide(),
                                    $("#imgsdetail_" + $(this).attr("id")).attr("da", "0")
                                }), $("#imgsdetail_" + t).show(), $("#commentimg_" + t).attr("src", e), $("#imgsdetail_" + t).attr("da", "1"), $(this).next().addClass("ponity_shadow"), void $(this).parent().addClass("hover"))
                            }),
                            $(".imgs li").each(function() {
                                $(this).mousemove(function() {
                                    $(this).siblings().each(function() {
                                        var e = $("#imgsdetail_" + $(this).attr("id")).attr("da"),
                                        t = $("#commentimg_" + $(this).attr("id")).attr("src"),
                                        i = $(this).children("img").attr("src");
                                        "1" == e && i == t || $(this).removeClass("hover")
                                    }),
                                    $(this).addClass("hover")
                                }).mouseout(function() {
                                    var e = $("#imgsdetail_" + $(this).attr("id")).attr("da"),
                                    t = $("#commentimg_" + $(this).attr("id")).attr("src"),
                                    i = $(this).children("img").attr("src");
                                    "1" == e && i == t || $(this).removeClass("hover")
                                })
                            })
                        })
                    }
                }
            }
        })
    },
    fetchQA: function(e) {
        $.ajax({
            url: "/fetchQAList?tourId=" + tourId + "&pageNo=" + e,
            dataType: "json",
            type: "get",
            success: function(e) {
                var t = "<div class='content-title'>";
                if (t += "<b></b><span class='title-big'>问题咨询</span></div>", t += "<div class='tour-box-content'>", t += "<div class='infos-qa'> ", e && 1 == e.status) {
                    var i = e.qas,
                    n = e.pageNo,
                    s = e.totalPage;
                    if (i.length > 0) {
                        $("#zxNum").show(),
                        $("#zxNum").html(e.totalSize),
                        t += "<div class='btn'><a href='javascript:UserQA.addQuestion()'>我要提问</a></div>";
                        for (var a = 0; a < i.length; a++) {
                            var r = i[a],
                            o = r.question,
                            l = r.answer,
                            c = r.createTime,
                            d = r.email,
                            u = r.phone;
                            t += "<dl>",
                            t += "<dt>" + o,
                            t += "<span>(" + (d ? d: u) + " " + c + ")</span>",
                            t += "</dt>",
                            l && (t += "<dd>旅行顾问回答：" + l + "</dd>"),
                            t += "</dl>"
                        }
                    } else t += "<div class='empty-qa' style=''>对产品有任何疑问，请使用<a href='javascript:UserQA.addQuestion();'>在线提问</a>咨询，我们将第一时间进行答复。</div>";
                    t += "</div>";
                    var h = 10;
                    if (s > 1) {
                        if (t += "<div class='page'>", t += 1 == n ? "<a href='javascript:void()'>上一页</a>&nbsp;": "<a href='javascript:UserQA.fetchQA(" + (n - 1) + ")'>上一页</a>&nbsp;", s > h) if (h >= n + 1) {
                            for (var a = 1; h > a; a++) t += n == a ? "<a href='javascript:void()' class='hover'>" + n + "</a>&nbsp;": "<a href='javascript:UserQA.fetchQA(" + a + ")'>" + a + "</a>&nbsp;";
                            t += n == s ? "<a href='javascript:void()' class='hover'>" + s + "</a>": "...<a href='javascript:UserQA.fetchQA(" + s + ")'>" + s + "</a>"
                        } else if (n >= s - h + 2) {
                            t += "<a href='javascript:void()'>1</a>&nbsp;";
                            for (var a = s - h + 1; s > a; a++) t += n == a ? "<a href='javascript:void()' class='hover'>" + n + "</a>&nbsp;": "<a href='javascript:UserQA.fetchQA(" + a + ")'>" + a + "</a>&nbsp;";
                            t += n == s ? "...<a href='javascript:void()' class='hover'>" + s + "</a>": "...<a href='javascript:UserQA.fetchQA(" + s + ")'>" + s + "</a>"
                        } else {
                            t += "<a href='javascript:void()'>1</a>&nbsp;";
                            for (var a = n; n + 1 > a; a++) t += n == a ? "<a href='javascript:void()' class='hover'>" + n + "</a>&nbsp;": "<a href='javascript:UserQA.fetchQA(" + a + ")'>" + a + "</a>&nbsp;";
                            t += n == s ? "<a href='javascript:void()' class='hover'>" + s + "</a>": "...<a href='javascript:UserQA.fetchQA(" + s + ")'>" + s + "</a>"
                        } else for (var a = 1; s >= a; a++) t += n == a ? "<a href='javascript:void()' class='hover'>" + n + "</a>&nbsp;": "<a href='javascript:UserQA.fetchQA(" + a + ")'>" + a + "</a>&nbsp;";
                        t += s > n ? "<a href='javascript:UserQA.fetchQA(" + (n + 1) + ")'>下一页</a>": "<a href='javascript:void()'>下一页</a>",
                        t += "</div>"
                    }
                } else t += "<div class='empty-qa' style=''>对产品有任何疑问，请使用<a href='javascript:UserQA.addQuestion();'>在线提问</a>咨询，我们将第一时间进行答复。</div></div>";
                t += "</div>",
                $(".tour-qa").children().remove(),
                $(".tour-qa").append(t),
                $(".tour-qa").show()
            },
            error: function() {}
        })
    },
    addQuestion: function() {
        var e = $("#useremail").val(),
        t = $("#userphone").val(),
        i = "" != e ? e: "" != t ? t: "输入你的手机号/邮箱地址";
        if ($("#askquestions").attr("id")) $("#askquestions").show();
        else {
            var n = "<div id='askquestions' class='hwlayout_box'><div class='hwlayout_box_text'><p class='fsize16'>在线提问<span class='fsize12'>(最长不能超过1000字)</span><p>";
            n += "<textarea id='question'></textarea>",
            n += "<p> <input type='text' value='" + i + "' id='contract'/> <span>我们的解答将通过你预留的联系方式直接发送给你。</span>",
            n += "</p>",
            n += "<p class='qabtn'>",
            n += "<input type='button' id='submit_question' value='提交问题' class='layout_btn_red'/>",
            n += "&nbsp;&nbsp;<input type='button' id='close_dialog' value='关闭' class='layout_btn_gray'/>",
            n += "</p></div></div>";
            var s = $(document.body).position(),
            a = s.height;
            a = a / 2 - 200;
            var r = $.layer({
                type: 1,
                offset: [a + "px", ""],
                title: !1,
                shadeClose: !0,
                closeBtn: !1,
                area: ["680px", "400px"],
                page: {
                    html: n
                }
            });
            $("#contract").focus(function() {
                var e = $(this).val();
                e && "输入你的手机号/邮箱地址" != e || $(this).val("")
            }).blur(function() {
                var e = $(this).val();
                e && "输入你的手机号/邮箱地址" != e || $(this).val("输入你的手机号/邮箱地址")
            }),
            $("#submit_question").click(function() {
                var e = $("#question").val(),
                t = $("#contract").val();
                if (!e || e.length < 4 || e.length > 1e3) return void layer.tips("问题的字数必须在4--1000之间", "#question", 2, 280, 0, ["background-color:#e10979; color:#fff", "#e10979"]);
                if (e && t && "输入你的手机号/邮箱地址" != t) {
                    var i = "",
                    n = "",
                    s = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                    a = /\d{11}/;
                    if (s.test(t)) i = t;
                    else {
                        if (!a.test(t)) return void layer.tips("您输入的联系方式不正确", "#contract", 2, 280, 0, ["background-color:#e10979; color:#fff", "#e10979"]);
                        n = t
                    }
                    $.ajax({
                        url: "/questionTour",
                        data: {
                            question: e,
                            tourId: tourId,
                            email: i,
                            phone: n
                        },
                        type: "post",
                        dataType: "json",
                        success: function(e) {
                            if (e && 1 == e.status) layer.alert(e.msg, 1),
                            layer.close(r);
                            else {
                                var t = e.msg,
                                i = ""; - 2 == e.status ? i = "#question": -3 == e.status ? i = "#contract": -1 == e.status && (i = "#askquestions"),
                                layer.tips(t, i, 2, 280, 0, ["background-color:#e10979; color:#fff", "#e10979"])
                            }
                        }
                    })
                } else layer.tips("联系方式不能为空", "#contract", 2, 280, 0, ["background-color:#e10979; color:#fff", "#e10979"])
            }),
            $("#close_dialog").click(function() {
                layer.close(r)
            })
        }
    }
},
tabImg = [],
$tourSlider = $("#tour-slider");
if ("0" == $("#isErpImage").val()) $tourSlider.children().each(function() {
    var e = $(this).attr("rel").replace("_m", "_s") + "/tourDetailSmall.jpg";
    tabImg.push('<div class="ctrl_wrap"><img src="' + e + '" width="126" height="86"></img></div><div class="ponity_shadow"></div><div class="ponity"></div>')
});
else {
    var json = $("#imgsmaList").val(),
    obj = eval(json);
    $(obj).each(function(e) {
        var t = obj[e];
        tabImg.push('<div class="ctrl_wrap"><img src="' + t.nameUrl + '" width="126" height="86"></img></div><div class="ponity_shadow"></div><div class="ponity"></div>')
    })
}
$tourSlider.responsiveSlides({
    auto: !0,
    animtype: "fade",
    pager: !0,
    speed: 500,
    namespace: "tourSlider",
    width: 690,
    tabsEle: tabImg,
    timeout: 3e4
});
var cType = $("#currencysignal").val(),
currencyCode = $("#currencycode").val(),
TourDetailUtils = {
    directorInitialize: function(e, t) {
        var i = new Date,
        n = i.getMonth(),
        s = i.getFullYear() + "-" + (10 > n ? "0": "") + (n + 1);
        $.ajax({
            type: "post",
            url: "/tourDetail/queryTourSkuByAjaxFromERP.html",
            dataType: "json",
            async: !1,
            data: {
                tourid: e,
                date: s,
                ctype: currencyCode
            },
            success: function(e) { (e.code = 200) && t(e.data)
            }
        })
    },
    isPaymentDivBlock: !1,
    submbuyBind: function() {
        $("#submbuy,#submbuy01").click(function() {
            var e = $(window).width(),
            t = $("#paymentDiv").width(),
            i = (e - t) / 2 + "px",
            n = $(window).height(),
            s = $("#paymentDiv").height(),
            a = (n - s) / 2 + "px";
            $.blockUI({
                message: $("#paymentDiv"),
                css: {
                    cursor: "",
                    left: i,
                    width: t + "px",
                    top: a,
                    position: "fixed"
                },
                overlayCSS: {
                    cursor: "default"
                }
            }),
            TourDetailUtils.isPaymentDivBlock = !0
        }),
        $(".paymentDiv_close").click(function() {
            $.unblockUI(),
            TourDetailUtils.isPaymentDivBlock = !1
        })
    },
    onReSize: function() {
        window.onresize = function() {
            if (TourDetailUtils.isPaymentDivBlock) {
                var e = $(window).width(),
                t = $("#paymentDiv").width(),
                i = (e - t) / 2 + "px",
                n = $(window).height(),
                s = $("#paymentDiv").height(),
                a = (n - s) / 2 + "px";
                $.blockUI({
                    message: $("#paymentDiv"),
                    css: {
                        cursor: "",
                        left: i,
                        width: t + "px",
                        top: a,
                        position: "fixed"
                    },
                    overlayCSS: {
                        cursor: "default"
                    }
                })
            }
        }
    },
    onKeyDown: function() {
        window.onkeydown = function(e) {
            TourDetailUtils.isPaymentDivBlock && 27 == e.keyCode && ($.unblockUI(), TourDetailUtils.isPaymentDivBlock = !1)
        }
    },
    getNewMonthLinkage: function(e, t, i) {
        $.ajax({
            type: "post",
            url: "/tourDetail/queryErpLinkage.html",
            dataType: "json",
            async: !1,
            data: {
                tourid: e,
                date: t
            },
            success: function(e) {
                i(200 == e.code ? e.data: {
                    pl_linkage: {
                        "0h": 0,
                        "0l": 0,
                        "1h": 0,
                        "1l": 0,
                        "2h": 0,
                        "2l": 0,
                        "3h": 0,
                        "3l": 0,
                        "4h": 0,
                        "4l": 0,
                        "5h": 0,
                        "5l": 0,
                        "6h": 0,
                        "6l": 0,
                        "7h": 0,
                        "7l": 0,
                        "8h": 0,
                        "8l": 0,
                        "9h": 0,
                        "9l": 0,
                        "10h": 0,
                        "10l": 0,
                        "11h": 0,
                        "11l": 0,
                        "12h": 0,
                        "12l": 0,
                        "13h": 0,
                        "13l": 0,
                        "14h": 0,
                        "14l": 0,
                        "15h": 0,
                        "15l": 0,
                        "16h": 0,
                        "16l": 0,
                        "17h": 0,
                        "17l": 0,
                        "18h": 0,
                        "18l": 0,
                        "19h": 0,
                        "19l": 0,
                        "20h": 0,
                        "20l": 0,
                        "21h": 0,
                        "21l": 0,
                        "22h": 0,
                        "22l": 0,
                        "23h": 0,
                        "23l": 0,
                        "24h": 0,
                        "24l": 0,
                        "25h": 0,
                        "25l": 0,
                        "26h": 0,
                        "26l": 0,
                        "27h": 0,
                        "27l": 0,
                        "28h": 0,
                        "28l": 0,
                        "29h": 0,
                        "29l": 0,
                        "31h": 0,
                        "31l": 0
                    }
                })
            },
            error: function() {
                i({
                    pl_linkage: {
                        "0h": 0,
                        "0l": 0,
                        "1h": 0,
                        "1l": 0,
                        "2h": 0,
                        "2l": 0,
                        "3h": 0,
                        "3l": 0,
                        "4h": 0,
                        "4l": 0,
                        "5h": 0,
                        "5l": 0,
                        "6h": 0,
                        "6l": 0,
                        "7h": 0,
                        "7l": 0,
                        "8h": 0,
                        "8l": 0,
                        "9h": 0,
                        "9l": 0,
                        "10h": 0,
                        "10l": 0,
                        "11h": 0,
                        "11l": 0,
                        "12h": 0,
                        "12l": 0,
                        "13h": 0,
                        "13l": 0,
                        "14h": 0,
                        "14l": 0,
                        "15h": 0,
                        "15l": 0,
                        "16h": 0,
                        "16l": 0,
                        "17h": 0,
                        "17l": 0,
                        "18h": 0,
                        "18l": 0,
                        "19h": 0,
                        "19l": 0,
                        "20h": 0,
                        "20l": 0,
                        "21h": 0,
                        "21l": 0,
                        "22h": 0,
                        "22l": 0,
                        "23h": 0,
                        "23l": 0,
                        "24h": 0,
                        "24l": 0,
                        "25h": 0,
                        "25l": 0,
                        "26h": 0,
                        "26l": 0,
                        "27h": 0,
                        "27l": 0,
                        "28h": 0,
                        "28l": 0,
                        "29h": 0,
                        "29l": 0,
                        "31h": 0,
                        "31l": 0
                    }
                })
            }
        })
    },
    unRemindMsg: function() {
        $("#login_error").html(""),
        $("#login_error").removeClass("hwlayout_error")
    },
    bindRemind: function() {
        var e = this;
        $(".product_remind").click(function() {
            $("#remind_phone").val(""),
            $("#remind_email").val(""),
            e.unRemindMsg(),
            $.blockUI({
                message: $("#remindDiv"),
                css: {
                    top: "36%",
                    left: "35%"
                },
                overlayCSS: {
                    cursor: "default"
                }
            })
        }),
        $("#remind_close").on("click",
        function() {
            $.unblockUI()
        }),
        $("#remind_phone").blur(function() {
            var t = $(this).val();
            "" == t || common_isTelphone(t) ? ($("#remind_email").hasClass("remind_error") || e.unRemindMsg(), $(this).removeClass("remind_error")) : (e.remindMsg("手机格式不正确"), $(this).addClass("remind_error"))
        }),
        $("#remind_email").blur(function() {
            var t = $(this).val();
            "" == t || common_checkEmail(t) ? ($("#remind_phone").hasClass("remind_error") || e.unRemindMsg(), $(this).removeClass("remind_error")) : (e.remindMsg("邮箱格式不正确"), $(this).addClass("remind_error"))
        }),
        $("#remind_submit").click(function() {
            var e = $("#remind_phone"),
            t = e.val(),
            i = $("#remind_email"),
            n = i.val();
            return "" == t && "" == n ? void $.unblockUI() : void($("#login_error").hasClass("hwlayout_error") || $.ajax({
                type: "get",
                url: "/tourShortageNotify",
                dataType: "json",
                data: {
                    tour_id: $("#tour_id").val(),
                    phone: t,
                    email: n
                },
                success: function(e) {
                    200 == e.code ? $.unblockUI() : ($("#login_error").html("*" + e.data), $("#login_error").addClass("hwlayout_error"))
                }
            }))
        })
    },
    fetchComment: function(e) {
        $.ajax({
            url: "/user/viewCommentOrder.html?tourId=" + tourId + "&pageNo=" + e,
            dataType: "json",
            type: "get",
            success: function(e) {
                if (e && 1 == e.status) {
                    var t = e.reviews,
                    i = e.totalNum,
                    n = e.avg,
                    s = e.pageNo;
                    if (i > 0) {
                        var a = "<li id = 'order_li'><a href='#order_comment'>用户点评<span id='yhdpnum'>" + i + "</span><b></b></a></li>";
                        0 == $("#order_li").length && $("#tour_xg").before(a);
                        var r = "<span>";
                        r += '<span class="StarEmpty"></span>',
                        r += '<span class="StarFull" style="width:' + 20 * n + 'px;"></span>',
                        r += "</span>",
                        r += '<span class="CommentNum">' + n + '分(<a href="#tour_ljpj"><font>' + i + "</font></a>)</span>",
                        $(".NewTourStarBox").html(r),
                        $(".tourreply").html("累计评价(" + i + ")<b></b>").show();
                        var o = "<div class='content-title'>";
                        o += "<div name='tour_yhdp' id='tour_yhdp' class='tour-maobiao'></div>",
                        o += "<span class='title-big'>用户点评</span>",
                        o += "</div>",
                        o += "<div class='xgpf'>",
                        o += "<div id='xzw_starSys' class='star floatL'>",
                        o += "<div id='xzw_starBox'>",
                        o += "<ul class='stars' id='star'>",
                        o += "<li><a href='javascript:void()'  class='one-star'>1</a></li>",
                        o += "<li><a href='javascript:void()'  class='one-star'>2</a></li>",
                        o += "<li><a href='javascript:void()'  class='one-star'>3</a></li>",
                        o += "<li><a href='javascript:void()'  class='one-star'>4</a></li>",
                        o += "<li><a href='javascript:void()' class='one-star'>5</a></li>",
                        o += "</ul>",
                        o += "<div class='current-rating' id='showb' style='width:" + 20 * n + "px'></div>",
                        o += "</div></div>",
                        o += "<span class='score'>" + n + "分</span>",
                        o += "<span cass='number'>" + i + "条评价</span>",
                        o += "</div>",
                        o += "<div class='tour-box-content'>";
                        for (var l = 0; l < t.length; l++) {
                            var c = t[l],
                            d = "http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon01.png",
                            u = c.totalgrade / 20,
                            h = c.processgrade,
                            p = c.itemgrade,
                            f = c.servicegrade,
                            v = "";
                            5 == p ? v = "非常棒，值得再去": 4 == p ? v = "还不错，去一次就行了": 3 == p && (v = "感觉一般般");
                            var m = "";
                            5 == h ? m = "非常棒": 4 == h ? m = "很好": 3 == h ? m = "还不错": 2 == h ? m = "马马虎虎": 1 == h && (m = "不满意");
                            var g = "";
                            g = 5 == f ? "非常棒": 4 == f ? "很好": 3 == f ? "还不错": 2 == f ? "马马虎虎": "不满意";
                            var y = !1;
                            if (0 == l) {
                                if (1 == c.isgood) {
                                    y = !0,
                                    d = "http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon00.png",
                                    o += "<div class='infos-evaluate-top'>",
                                    o += "<dl>",
                                    o += "<dd>",
                                    o += "<div class='dp-xj'>",
                                    o += "<div class='floatL dp-dp'>",
                                    o += "<div id='xzw_starSys' class='star floatL'><div id='xzw_starBox'>",
                                    o += "<ul class='stars' id='star'>",
                                    o += "<li><a href='javascript:void()'  class='one-star'>1</a></li>",
                                    o += "<li><a href='javascript:void()'  class='one-star'>2</a></li>",
                                    o += "<li><a href='javascript:void()'  class='one-star'>3</a></li>",
                                    o += "<li><a href='javascript:void()'  class='one-star'>4</a></li>",
                                    o += "<li><a href='javascript:void()'  class='one-star'>5</a></li>",
                                    o += "</ul>",
                                    o += "<div class='current-rating' id='showb' style='width:" + c.totalgrade + "px'></div>",
                                    o += "<div class='clear'></div>",
                                    o += "</div></div>",
                                    o += "</div>",
                                    o += "<div class='clear'></div>",
                                    o += "</div>",
                                    o += "<div class='C_review'>" + c.review + "</div>",
                                    "" != c.reply && void 0 != c.reply && (o += "<div class='CS_reply'>" + c.reply + "</div>");
                                    var b = c.imagesurl;
                                    if (b) {
                                        var _ = b.split(",");
                                        if (_.length > 0) {
                                            o += "<div class='imgs'><ul>";
                                            for (var w = 0; w < _.length; w++) {
                                                var x = _[w];
                                                o += "<li  style='cursor:pointer' id='" + c.id + "'><img class='select_commentimg' style='height:100%' data='" + c.id + "' src='" + imageHead + x + "?imageMogr2/thumbnail/!600x'/><div id='show_" + c.id + "' class=''></div></li>"
                                            }
                                            o += "</ul>",
                                            o += "<div class='clear'></div>",
                                            o += "<div class='imgsdetail' id='imgsdetail_" + c.id + "' style='display:none'>",
                                            o += "<img  id='commentimg_" + c.id + "' src='" + imageHead + "/" + _[0] + "'/>",
                                            o += "</div></div>"
                                        }
                                    }
                                    o += "<div class='hot'></div>",
                                    o += "</dd>",
                                    o += "<dd class='userinfo'>",
                                    o += "<div class='name' style='overflow:hidden;height:22px;'>" + c.finalName + " </div>",
                                    o += "<div class='time'>" + c.createTime + "</div>",
                                    o += "</dd>",
                                    o += "</dl>",
                                    o += "</div>"
                                }
                                o += "<div class='infos-evaluate'>"
                            } else u >= 3 && 4 > u ? d = "http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon02.png": u >= 0 && 2 >= u && (d = "http://img01.haiwaner.com/hwpc/res/images/tour/tour-dp-icon03.png");
                            if (!y) {
                                o += "<dl>",
                                o += "<dd>",
                                o += "<div class='dp-xj'>",
                                o += "<div class='floatL dp-dp'>",
                                o += "<div id='xzw_starSys' class='star floatL'><div id='xzw_starBox'>",
                                o += "<ul class='stars' id='star'>",
                                o += "<li><a href='javascript:void()'  class='one-star'>1</a></li>",
                                o += "<li><a href='javascript:void()'  class='one-star'>2</a></li>",
                                o += "<li><a href='javascript:void()'  class='one-star'>3</a></li>",
                                o += "<li><a href='javascript:void()'  class='one-star'>4</a></li>",
                                o += "<li><a href='javascript:void()'  class='one-star'>5</a></li>",
                                o += "</ul>",
                                o += "<div class='current-rating' id='showb' style='width:" + c.totalgrade + "px'></div>",
                                o += "<div class='clear'></div>",
                                o += "</div></div>",
                                o += "</div>",
                                o += "<div class='clear'></div>",
                                o += "</div>",
                                o += "<div class='C_review'>" + c.review + "</div>",
                                "" != c.reply && void 0 != c.reply && (o += "<div class='CS_reply'>" + c.reply + "</div>");
                                var b = c.imagesurl;
                                if (b) {
                                    var _ = b.split(",");
                                    if (_.length > 0) {
                                        o += "<div class='imgs'><ul>";
                                        for (var w = 0; w < _.length; w++) {
                                            var x = _[w];
                                            o += "<li  style='cursor:pointer' id='" + c.id + "'><img class='select_commentimg' style='height:100%' data='" + c.id + "' src='" + imageHead + x + "?imageMogr2/thumbnail/!600x'/><div id='show_" + c.id + "' class=''></div></li>"
                                        }
                                        o += "</ul>",
                                        o += "<div class='clear'></div>",
                                        o += "<div class='imgsdetail' id='imgsdetail_" + c.id + "' style='display:none'>",
                                        o += "<img  id='commentimg_" + c.id + "' src='" + imageHead + "/" + _[0] + "'/>",
                                        o += "</div></div>"
                                    }
                                }
                                o += (1 == c.isgood, "<div class='hot'></div>"),
                                o += "</dd>",
                                o += "<dd class='userinfo'>",
                                o += "<div class='name' style='overflow:hidden;height:22px;'>" + c.finalName + " </div>",
                                o += "<div class='time'>" + c.createTime + "</div>",
                                o += "</dd>",
                                o += "</dl>"
                            }
                        }
                        o += "</div>";
                        var k = 10,
                        C = 1;
                        if (C = i % 6 == 0 ? i / 6 : i / 6 + 1, C = parseInt(C), C >= 2) {
                            if (o += "<div class='page'>", o += 1 == s ? "<a href='javascript:void()'>上一页</a>&nbsp;": "<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + (s - 1) + ")'>上一页</a>&nbsp;", C > k) if (k >= s + 1) {
                                for (var l = 1; k > l; l++) o += s == l ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + l + ")'>" + l + "</a>&nbsp;";
                                o += s == C ? "<a href='javascript:void()' class='hover'>" + C + "</a>": "...<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + C + ")'>" + C + "</a>"
                            } else if (s >= C - k + 2) {
                                o += "<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(1)'>1</a>&nbsp;";
                                for (var l = C - k + 1; C > l; l++) o += s == l ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + l + ")'>" + l + "</a>&nbsp;";
                                o += s == C ? "...<a href='javascript:void()' class='hover'>" + C + "</a>": "...<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + C + ")'>" + C + "</a>"
                            } else {
                                o += "<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(1)'>1</a>&nbsp;";
                                for (var l = s; s + 1 > l; l++) o += s == l ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + l + ")'>" + l + "</a>&nbsp;";
                                o += s == C ? "<a href='javascript:void()' class='hover'>" + C + "</a>": "...<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + C + ")'>" + C + "</a>"
                            } else for (var l = 1; C >= l; l++) o += s == l ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + l + ")'>" + l + "</a>&nbsp;";
                            o += C > s ? "&nbsp;<a href='#LJPJMD' onclick='TourDetailUtils.fetchComment(" + (s + 1) + ")'>下一页</a>": "&nbsp;<a href='javascript:void()'>下一页</a>",
                            o += "</div>"
                        }
                        o += "</div>",
                        $(".tour-evaluate").show(),
                        $(".tour-evaluate").children().remove(),
                        $(".tour-evaluate").append(o),
                        $(".select_commentimg").each(function() {
                            $(this).click(function() {
                                var e = $(this).attr("src"),
                                t = $(this).attr("data"),
                                i = $("#imgsdetail_" + t).attr("da"),
                                n = $("#commentimg_" + t).attr("src");
                                return "1" == i && e == n ? ($("#imgsdetail_" + t).hide(), $("#imgsdetail_" + t).attr("da", "0"), void $(this).parent("li").each(function() {
                                    $(this).removeClass("hover"),
                                    $(this).children("div").removeClass("ponity_shadow")
                                })) : ($(".imgs ul li").each(function() {
                                    $(this).removeClass("hover"),
                                    $(this).children("div").removeClass("ponity_shadow"),
                                    $("#imgsdetail_" + $(this).attr("id")).hide(),
                                    $("#imgsdetail_" + $(this).attr("id")).attr("da", "0")
                                }), $("#imgsdetail_" + t).show(), $("#commentimg_" + t).attr("src", e), $("#imgsdetail_" + t).attr("da", "1"), $(this).next().addClass("ponity_shadow"), void $(this).parent().addClass("hover"))
                            }),
                            $(".imgs li").each(function() {
                                $(this).mousemove(function() {
                                    $(this).siblings().each(function() {
                                        var e = $("#imgsdetail_" + $(this).attr("id")).attr("da"),
                                        t = $("#commentimg_" + $(this).attr("id")).attr("src"),
                                        i = $(this).children("img").attr("src");
                                        "1" == e && i == t || $(this).removeClass("hover")
                                    }),
                                    $(this).addClass("hover")
                                }).mouseout(function() {
                                    var e = $("#imgsdetail_" + $(this).attr("id")).attr("da"),
                                    t = $("#commentimg_" + $(this).attr("id")).attr("src"),
                                    i = $(this).children("img").attr("src");
                                    "1" == e && i == t || $(this).removeClass("hover")
                                })
                            })
                        })
                    } else $(".NewTourStarBox").html('<span class="CommentNum">暂无评价</span>'),
                    $("#tour_ljpj,.tourreply").remove()
                } else $(".NewTourStarBox").html('<span class="CommentNum">暂无评价</span>'),
                $("#tour_ljpj,.tourreply").remove()
            }
        })
    },
    fetchQA: function(e) {
        $.ajax({
            url: "/fetchQAList?tourId=" + tourId + "&pageNo=" + e,
            dataType: "json",
            type: "get",
            success: function(e) {
                var t = "<div class='content-title'>";
                t += "<b></b><span class='title-big'>问题咨询</span></div>",
                t += "<div class='tour-box-content'>",
                t += "<div class='infos-qa'> ";
                var i = "javascript:TourDetailUtils.addQuestion();";
                if (e && 1 == e.status) {
                    var n = e.qas,
                    s = (e.pageSize, e.pageNo),
                    a = e.totalPage;
                    if (n.length > 0) {
                        $("#zxNum").show(),
                        $("#zxNum").html(e.totalSize),
                        t += "<div class='btn'><a href=" + i + ">我要提问</a></div>";
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                            l = (o.id, o.question),
                            c = o.answer,
                            d = o.createTime,
                            u = o.email,
                            h = o.phone;
                            t += "<dl>",
                            t += "<dt>" + l,
                            t += "<span>(" + (u ? u: h) + " " + d + ")</span>",
                            t += "</dt>",
                            c && (t += "<dd>旅行顾问回答：" + c + "</dd>"),
                            t += "</dl>"
                        }
                    } else t += "<div class='empty-qa' style=''>对产品有任何疑问，请使用<a href=" + i + ">在线提问</a>咨询，我们将第一时间进行答复。</div>";
                    t += "</div>";
                    var p = 10;
                    if (a > 1) {
                        if (t += "<div class='page'>", t += 1 == s ? "<a href='javascript:void()'>上一页</a>&nbsp;": "<a href='javascript:TourDetailUtils.fetchQA(" + (s - 1) + ")'>上一页</a>&nbsp;", a > p) if (p >= s + 1) {
                            for (var r = 1; p > r; r++) t += s == r ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='javascript:TourDetailUtils.fetchQA(" + r + ")'>" + r + "</a>&nbsp;";
                            t += s == a ? "<a href='javascript:void()' class='hover'>" + a + "</a>": "...<a href='javascript:TourDetailUtils.fetchQA(" + a + ")'>" + a + "</a>"
                        } else if (s >= a - p + 2) {
                            t += "<a href='javascript:void()'>1</a>&nbsp;";
                            for (var r = a - p + 1; a > r; r++) t += s == r ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='javascript:TourDetailUtils.fetchQA(" + r + ")'>" + r + "</a>&nbsp;";
                            t += s == a ? "...<a href='javascript:void()' class='hover'>" + a + "</a>": "...<a href='javascript:TourDetailUtils.fetchQA(" + a + ")'>" + a + "</a>"
                        } else {
                            t += "<a href='javascript:void()'>1</a>&nbsp;";
                            for (var r = s; s + 1 > r; r++) t += s == r ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='javascript:TourDetailUtils.fetchQA(" + r + ")'>" + r + "</a>&nbsp;";
                            t += s == a ? "<a href='javascript:void()' class='hover'>" + a + "</a>": "...<a href='javascript:TourDetailUtils.fetchQA(" + a + ")'>" + a + "</a>"
                        } else for (var r = 1; a >= r; r++) t += s == r ? "<a href='javascript:void()' class='hover'>" + s + "</a>&nbsp;": "<a href='javascript:TourDetailUtils.fetchQA(" + r + ")'>" + r + "</a>&nbsp;";
                        t += a > s ? "<a href='javascript:TourDetailUtils.fetchQA(" + (s + 1) + ")'>下一页</a>": "<a href='javascript:void()'>下一页</a>",
                        t += "</div>"
                    }
                } else t += "<div class='empty-qa' style=''>对产品有任何疑问，请使用<a href=" + i + ">在线提问</a>咨询，我们将第一时间进行答复。</div></div>";
                t += "</div>",
                $(".tour-qa").children().remove(),
                $(".tour-qa").append(t),
                $(".tour-qa").show()
            },
            error: function() {}
        })
    },
    detailFixed: function() {
        var e = $(".tour-nav"),
        t = $(".tour-nav-wrap").offset().top,
        i = $(window).scrollTop(),
        n = 54;
        e.children().each(function() {
            $(this).on("click",
            function() {
                var t = $(this).find("a");
                if (t.hasClass("hover")) return ! 1;
                e.find(".hover").removeClass("hover"),
                t.addClass("hover");
                var i = t.attr("href");
                return $(window).scrollTop($(i).offset().top),
                !1
            })
        }),
        $(window).scroll(function() {
            if (i = $(window).scrollTop(), i >= t) e.parent().parent(".tour-nav-wrap").css({
                position: "fixed",
                top: 0
            }),
            $(".RightLike").css("margin-top", "310px"),
            e.parent().parent().addClass("TourNaviAct"),
            $(".tour-nav-wrap2").show();
            else {
                var s = e.children().eq(0).find("a");
                s.hasClass("hover") || (e.find(".hover").removeClass("hover"), s.addClass("hover")),
                e.parent().parent(".tour-nav-wrap").css({
                    position: "static",
                    top: "auto"
                }),
                $(".RightLike").css("margin-top", "50px"),
                e.parent().parent().removeClass("TourNaviAct"),
                $(".tour-nav-wrap2").hide()
            }
            e.children().each(function() {
                var t = $(this).find("a").attr("href");
                if (targettop = $(t).scrollTop(), void 0 != $(t).get(0) && $(t).offset().top <= i + n) {
                    var s = e.find("a[href=" + t + "]");
                    s.hasClass("hover") || (e.find(".hover").removeClass("hover"), s.addClass("hover"))
                }
            })
        })
    },
    customerService: function() {
        $(".tour_related").length > 0 && this.loadImg($(".tour_related")),
        $(".zxkfli").on("mouseenter",
        function() {
            $(".zaixiankefu").attr("style", "display:block")
        }),
        $(".zxkfli").on("mouseleave",
        function() {
            $(".zaixiankefu").attr("style", "display:none")
        })
    },
    backToTop: function() {
        $("#backToTop").click(function() {
            $("body,html").animate({
                scrollTop: 0
            },
            800)
        }),
        $(window).scroll(function() {
            $(window).scrollTop() < 300 ? $(".backToTop").hide() : $(".backToTop").show()
        })
    },
    addQuestion: function() {
        var e = $("#useremail").val(),
        t = $("#userphone").val(),
        i = "" != t ? t: "" != e ? e: "";
        if ("" == i) return void(window.location.href = "/signIn.html?targetUrl=" + window.location.href + "#tour_zxtw");
        if ($("#askquestions").attr("id")) $("#askquestions").show();
        else {
            var n = "<div id='askquestions' class='hwlayout_box'><div class='hwlayout_box_text'><p class='fsize16'>在线提问<span class='fsize12'>(最长不能超过1000字)</span><p>";
            n += "<textarea id='question'></textarea>",
            n += "<p> <input type='text' value='" + i + "' id='contract'/> <span>我们的解答将通过你预留的联系方式直接发送给你。</span>",
            n += "</p>",
            n += "<p class='qabtn'>",
            n += "<input type='button' id='submit_question' value='提交问题' class='layout_btn_red'/>",
            n += "&nbsp;&nbsp;<input type='button' id='close_dialog' value='关闭' class='layout_btn_gray'/>",
            n += "</p></div></div>";
            var s = $(document.body).position(),
            a = s.height;
            a = a / 2 - 200;
            var r = $.layer({
                type: 1,
                offset: [a + "px", ""],
                title: !1,
                shadeClose: !0,
                closeBtn: !1,
                area: ["680px", "400px"],
                page: {
                    html: n
                }
            });
            $("#contract").focus(function() {
                var e = $(this).val();
                e && "输入你的手机号/邮箱地址" != e || $(this).val("")
            }).blur(function() {
                var e = $(this).val();
                e && "输入你的手机号/邮箱地址" != e || $(this).val("输入你的手机号/邮箱地址")
            }),
            $("#submit_question").click(function() {
                var e = $("#question").val(),
                t = $("#contract").val();
                if (!e || e.length < 4 || e.length > 1e3) return void layer.tips("问题的字数必须在4--1000之间", "#question", 2, 280, 0, ["background-color:#e10979; color:#fff", "#e10979"]);
                if (e && t && "输入你的手机号/邮箱地址" != t) {
                    var i = "",
                    n = "",
                    s = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                    a = /\d{11}/;
                    if (s.test(t)) i = t;
                    else {
                        if (!a.test(t)) return void layer.tips("您输入的联系方式不正确", "#contract", 2, 280, 0, ["background-color:#e10979; color:#fff", "#e10979"]);
                        n = t
                    }
                    $.ajax({
                        url: "/questionTour",
                        data: {
                            question: e,
                            tourId: tourId,
                            email: i,
                            phone: n
                        },
                        type: "post",
                        dataType: "json",
                        success: function(e) {
                            if (e && 1 == e.status) layer.alert(e.msg, 1),
                            layer.close(r);
                            else {
                                var t = e.msg,
                                i = ""; - 2 == e.status ? i = "#question": -3 == e.status ? i = "#contract": -1 == e.status && (i = "#askquestions"),
                                layer.tips(t, i, 2, 280, 0, ["background-color:#e10979; color:#fff", "#e10979"])
                            }
                        }
                    })
                } else layer.tips("联系方式不能为空", "#contract", 2, 280, 0, ["background-color:#e10979; color:#fff", "#e10979"])
            }),
            $("#close_dialog").click(function() {
                layer.close(r)
            })
        }
    },
    typeTips: function() {
        $("#qijiashuoming").find(".type_tips").each(function() {
            $(this).on("mouseenter",
            function() {
                $(".tips_contentqjsm").attr("style", "display:block")
            }),
            $(this).parent().on("mouseleave",
            function() {
                $(".tips_contentqjsm").attr("style", "display:none")
            })
        }),
        $("#erciqueren").find(".type_tips").each(function() {
            $(this).on("mouseenter",
            function() {
                $(".tips_erciqueren").attr("style", "display:block")
            }),
            $(this).parent().on("mouseleave",
            function() {
                $(".tips_erciqueren").attr("style", "display:none")
            })
        })
    }
},
Director = function() {
    function Director(e) {
        this.tourId = e,
        this.currentScence,
        this.currentDay = 0,
        this.defaultCurrentDay = "",
        this.memoryJudgeCodeL = 2147483647,
        this.memoryJudgeCodeH = 2147483647,
        this.linkage_dic,
        this.skuspec,
        this.sellstart_date,
        this.sellend_date,
        this.skuPriceMap = {},
        this.skuEle = {},
        this.personEle = {},
        this.scencePool = {},
        TourDetailUtils.submbuyBind(),
        TourDetailUtils.bindRemind(),
        TourDetailUtils.fetchComment(1),
        TourDetailUtils.fetchQA(1),
        TourDetailUtils.detailFixed(),
        TourDetailUtils.customerService(),
        TourDetailUtils.backToTop(),
        TourDetailUtils.typeTips(),
        TourDetailUtils.onReSize(),
        TourDetailUtils.onKeyDown()
    }
    return Director.prototype.initialize = function() {
        var __this__ = this;
        return TourDetailUtils.directorInitialize(this.tourId,
        function(data) {
            __this__.linkage_dic = data.pl_linkage_dic,
            __this__.skuunit = data.skuunit,
            __this__.skuspec = eval("(" + data.skuspec + ")");
            for (var plSku = data.pl_sku,
            tempMinDate = 1e6,
            tempMaxDate = 0,
            i = 0; i < plSku.length; i++) {
                var priceInfo = eval("(" + plSku[i].priceInfo + ")");
                if (__this__.skuPriceMap[plSku[i].sku] = {},
                __this__.skuPriceMap[plSku[i].sku].price = priceInfo, __this__.skuPriceMap[plSku[i].sku].sku_id = plSku[i].skuid, __this__.skuPriceMap[plSku[i].sku].min = plSku[i].minNum, data.business ? __this__.skuPriceMap[plSku[i].sku].max = 500 : __this__.skuPriceMap[plSku[i].sku].max = plSku[i].maxNum, plSku[i].sellstartDate) {
                    var thisMinDate = 100 * parseInt(plSku[i].sellstartDate.substr(0, 4), "10") + parseInt(plSku[i].sellstartDate.substr(5, 2), "10");
                    tempMinDate > thisMinDate && (tempMinDate = thisMinDate)
                }
                if (plSku[i].sellendDate) {
                    var thisMaxDate = 100 * parseInt(plSku[i].sellendDate.substr(0, 4), "10") + parseInt(plSku[i].sellendDate.substr(5, 2), "10");
                    thisMaxDate > tempMaxDate && (tempMaxDate = thisMaxDate)
                }
            }
            var mmppMinPriceMap = {};
            for (var mmpp in __this__.skuPriceMap) {
                var tempThisMinPrice = 1e6;
                for (var ddpp in __this__.skuPriceMap[mmpp].price) {
                    var thisDayPrice = __this__.skuPriceMap[mmpp].price[ddpp].p;
                    thisDayPrice && 0 != thisDayPrice && tempThisMinPrice > thisDayPrice && (tempThisMinPrice = thisDayPrice)
                }
                var ageType = mmpp.split("+")[0];
                mmppMinPriceMap[ageType] ? tempThisMinPrice < mmppMinPriceMap[ageType] && (mmppMinPriceMap[ageType] = tempThisMinPrice) : mmppMinPriceMap[ageType] = tempThisMinPrice
            }
            for (var t in mmppMinPriceMap) mmppMinPriceMap[t] >= 1e6 && (mmppMinPriceMap[t] = 0);
            __this__.sellstart_date = (tempMinDate + "").substr(0, 4) + "-" + (tempMinDate + "").substr(4, 2),
            __this__.sellend_date = (tempMaxDate + "").substr(0, 4) + "-" + (tempMaxDate + "").substr(4, 2);
            var linkage_dic = __this__.linkage_dic,
            skuunit = __this__.skuunit,
            tourId = __this__.tourId;
            $("#skuunit").val(skuunit);
            for (var skuspec = __this__.skuspec,
            lHtml = "",
            rHtml = "",
            i = 0; i < skuspec.length; i++) {
                var thisSkuSpec = skuspec[i];
                if (1 != thisSkuSpec.skutype) {
                    lHtml += '<div class="sku-sel"> <div class="title">' + thisSkuSpec.skuname + '：</div><div class="text">';
                    for (var j = 0; j < thisSkuSpec.skuitem.length; j++) lHtml += "<span>" + thisSkuSpec.skuitem[j].spec + "</span>";
                    lHtml += "</div></div>"
                } else for (var rHtmlFirstPersonDefaultCount = !0,
                j = 0; j < thisSkuSpec.skuitem.length; j++) {
                    var thisAge = thisSkuSpec.skuitem[j],
                    isFirstPersonCount = 0;
                    rHtmlFirstPersonDefaultCount && (isFirstPersonCount = 1, rHtmlFirstPersonDefaultCount = !1),
                    "" != thisAge.explain && (rHtml += ' <div class="field-select"><div class="field-type" travellertype="' + thisAge.travellerType + '" person="' + thisAge.spec + '">' + ("人" == skuunit ? thisAge.spec + '<span class="field-range">(' + thisAge.explain + ")</span>": skuunit + '&nbsp;&nbsp;<span class="field-range">( 数 量  )</span>') + '</div> <div class="num-counter"><span class="reduce">-</span> <input class="nums" value="' + isFirstPersonCount + '"> <span class="add">+</span></div><div class="field-price"><em style="display: inline;">&nbsp;</em></div></div>', "5718" != tourId && "5851" != tourId || (2 == thisAge.travellerType && (rHtml = rHtml.replace("儿童<span", "青年<span")), 3 == thisAge.travellerType && (rHtml = rHtml.replace("婴儿<span", "儿童<span"))))
                }
            }
            $skuSelect = $("#skuSelect"),
            $fieldText = $("#field-text"),
            $skuunitName = $("#skuunit_name"),
            $skuSelect.html(lHtml),
            $skuunitName.html(skuunit + "数选择"),
            $fieldText.html(rHtml),
            $skuSelect.find("span").each(function() {
                var e = $(this).html(),
                t = linkage_dic[e];
                __this__.skuEle["$" + t] = new Spirit(e, t, $(this)),
                $(this).click(function() {
                    $(this).hasClass("hover") ? $(this).removeClass("hover") : ($(this).parent().find("span").removeClass("hover"), $(this).addClass("hover")),
                    __this__.shader()
                })
            }),
            $fieldText.find(".field-type").each(function() {
                var e = $(this).attr("person"),
                t = linkage_dic[e];
                __this__.personEle["$" + t] = new Spirit(e, t, $(this).parent())
            });
            for (var mmmppp in __this__.personEle) __this__.personEle[mmmppp].$Ele.attr("minPrice", mmppMinPriceMap[__this__.personEle[mmmppp].name]);
            $fieldText.find(".field-select").each(function() {
                var e = $(this).find("input");
                e.keyup(function() {
                    var t = e.val();
                    return isInteger(t) ? void __this__.shader() : (layer.tips("人数必须为整数！", this, 2, 280, 1, ["background-color:#e10979; color:#fff", "#e10979"]), void e.focus())
                }),
                e.blur(function() {
                    var t = e.val();
                    return isInteger(t) ? void 0 : (layer.tips("人数必须为整数！", this, 2, 280, 1, ["background-color:#e10979; color:#fff", "#e10979"]), void e.focus())
                }),
                $(this).find(".reduce").click(function() {
                    var t = parseInt(e.val(), "10"),
                    i = parseInt($(this).parent().parent().attr("min"), "10"),
                    n = parseInt($(this).parent().parent().attr("max"), "10");
                    isNaN(n) || isNaN(i) || (t == i ? (e.val(0), __this__.shader()) : t > i ? (e.val(t - 1), __this__.shader()) : 0 != t && i - 1 > t && (e.val(i), __this__.shader()))
                }),
                $(this).find(".add").click(function() {
                    var t = parseInt(e.val(), "10"),
                    i = parseInt($(this).parent().parent().attr("min"), "10"),
                    n = parseInt($(this).parent().parent().attr("max"), "10");
                    isNaN(n) || isNaN(i) || (0 == t ? (e.val(i), __this__.shader()) : n > t ? (e.val(t + 1), __this__.shader()) : t > n + 1 && (e.val(n), __this__.shader()))
                })
            })
        }),
        $("#buyNow").click(function() {
            var e = $("#myDateTime .selected div");
            if (0 == e.length) return $("#errorTips").show().empty().html('<p><b class="tips"></b> 请选使用日期</p>'),
            void setTimeout(function() {
                $("#errorTips").hide()
            },
            2e3);
            for (var t = $(".nums"), i = 0; i < t.length; i++) {
                var n = t[i],
                s = n.value;
                if (!isInteger(s)) return layer.tips("人数必须为整数！", n, 2, 280, 1, ["background-color:#e10979; color:#fff", "#e10979"]),
                void n.focus()
            }
            var a = !0,
            r = !0;
            if ($("#field-text div[travellertype]").each(function() {
                var e = $(this).attr("travellertype") + "",
                t = $(this).parent().find("input").val(),
                i = $(this).parent().find("input").attr("min");
                if ("0" == t || $(this).parent().hasClass("disablePerson") || (a = !1), "1" !== e || $(this).parent().hasClass("disablePerson")) {
                    if ("0" != t && 0 < parseInt(t, "10") < parseInt(i, "10")) return $("#errorTips").show().empty().html('<p><b class="tips"></b>最小购买数量必须为:' + i + "</p>"),
                    setTimeout(function() {
                        $("#errorTips").hide()
                    },
                    2e3),
                    void(r = !1);
                    "2" === e ? $("#child_num").val(t) : "3" === e ? $("#baby_num").val(t) : "4" === e && $("#older_num").val(t)
                } else $("#adult_num").val(t)
            }), r) {
                if (a) return $("#errorTips").show().empty().html('<p><b class="tips"></b>最小购买数量必须不全为0</p>'),
                setTimeout(function() {
                    $("#errorTips").hide()
                },
                2e3),
                void(r = !1);
                var o = parseInt(e.html(), "10"),
                l = __this__.currentScence.month + (10 > o ? "-0": "-") + o,
                c = __this__.personEle,
                d = 0;
                for (var u in c) {
                    var h = c[u];
                    if (!h.$Ele.hasClass("disablePerson")) {
                        var p = h.$Ele.attr("p"),
                        f = h.$Ele.find("input").val();
                        d += p * f
                    }
                } - 1 != d.toString().indexOf(".") && (d = fmoney(d, 2));
                var v = !0;
                if ($("#skuSelect .sku-sel").each(function() {
                    $(this).find(".hover").size() < 1 && (v = !1)
                }), !v) return $("#errorTips").show().empty().html('<p><b class="tips"></b>请检查您的预订选项!</p>'),
                void setTimeout(function() {
                    $("#errorTips").hide()
                },
                2e3);
                var m = "",
                g = __this__.skuEle;
                for (var y in g) g[y].$Ele.hasClass("hover") && (m += "+" + g[y].name);
                var b = !0;
                if ($("#field-text div[travellertype]").each(function() {
                    var e = $(this).attr("person") + m;
                    __this__.skuPriceMap[e] && b && ($("#sku_id").val(__this__.skuPriceMap[e].sku_id), b = !1)
                }), b) return $("#errorTips").show().empty().html('<p><b class="tips"></b>请检查您的预订选项!</p>'),
                void setTimeout(function() {
                    $("#errorTips").hide()
                },
                2e3);
                $("#start_time").val(l),
                $("#total_amt").val(d),
                $.blockUI({
                    message: $("#load_img"),
                    css: {
                        top: "36%",
                        left: "45%",
                        width: "auto"
                    }
                }),
                $("#middle_page").val($(".fm").serialize()),
                window.location.href = "/tour/fillorder.html?" + $(".fm").serialize()
            }
        }),
        this
    },
    Director.prototype.render = function(e) {
        var t = this,
        i = this.scencePool[e];
        i || (i = new Scence(this.tourId, e), this.scencePool[e] = i),
        this.memoryJudgeCodeL = 2147483647;
        for (var n = {},
        s = parseInt(e.substr(0, 4), "10"), a = parseInt(e.substr(5, 2), "10"), r = new Date(s, a - 1, 1).getDay(), o = new Date(s, a, 0).getDate(), l = '<div class="year-month"><span class="month-lft"><b></b></span><span class="month-fc"></span>' + s + "年" + a + '月 <span class="month-rgt"><b></b></span></div><table border="0" cellspacing="0" cellpadding="0"  bgcolor="#ffffff" id="calendar_id"><tr><td >日</td><td >一</td><td >二</td><td >三</td><td >四</td><td >五</td><td >六</td>', c = 0; (o + r == 28 ? 28 : 36 > o + r ? 35 : 42) > c; c++) if (c % 7 == 0 && (l += "</tr><tr>"), l += "", c >= r && o + r > c) {
            var d = c - r + 1;
            l += "<td class='usable'><div>" + d + "</div><span></span></td>"
        } else l += "<td>&nbsp;</td>";
        var u = $("#myDateTime");
        return u.html(l + "</tr></table>"),
        u.find(".month-lft").click(function() {
            t.currentDay = 0,
            t.sellstart_date != t.currentScence.month && (1 == a ? t.render(s - 1 + "-12") : t.render(s + (11 > a ? "-0": "-") + (a - 1)))
        }),
        u.find(".month-rgt").click(function() {
            t.currentDay = 0,
            t.sellend_date != t.currentScence.month && (12 == a ? t.render(s + 1 + "-01") : t.render(s + (9 > a ? "-0": "-") + (a + 1)))
        }),
        u.find("td[class]").each(function() {
            var e = $(this).find("div").html();
            n["$" + e] = new Spirit(e, e, $(this)),
            $(this).click(function() {
                $(this).hasClass("selected") ? ($(this).removeClass("selected"), $(".text").find("span").removeClass("hover"), t.currentDay = 0) : (0 != t.currentDay && t.currentScence.dayEle["$" + t.currentDay] && t.currentScence.dayEle["$" + t.currentDay].$Ele.removeClass("selected"), t.currentDay = $(this).find("div").html(), t.currentScence.dayEle["$" + t.currentDay].$Ele.addClass("selected")),
                $(this).hasClass("selected") ? 0 == $(".text").find(".hover").length && $(".sku-sel").each(function() {
                    var e = !0;
                    $(this).find(".text span").each(function() {
                        e && !$(this).hasClass("disableSku") && ($(this).click(), e = !1)
                    })
                }) : $(".text").find(".hover").click(),
                t.shader()
            })
        }),
        i.assignSpirits(n),
        o >= this.currentDay && this.currentDay > 0 && n["$" + this.currentDay].$Ele.addClass("selected"),
        this.currentScence = i,
        this.shader(),
        i
    },
    Director.prototype.shader = function() {
        var e = !0,
        t = this,
        i = this.currentScence.dayEle,
        n = this.currentScence.linkage,
        s = this.skuEle,
        a = this.personEle,
        r = [],
        o = n["0l"],
        l = n["0h"],
        c = "";
        0 != this.currentDay && r.push(this.currentDay);
        for (var d in s) s[d].$Ele.hasClass("hover") && (r.push(s[d].linkage), c += "+" + s[d].name);
        for (var u = 0; u < r.length; u++) if (r[u]) {
            var h = n[r[u] + "l"],
            p = n[r[u] + "h"];
            h && p && (o &= n[r[u] + "l"], l &= n[r[u] + "h"])
        }
        for (var f = this.memoryJudgeCodeH ^ l,
        v = this.memoryJudgeCodeL ^ o,
        m = 1,
        u = 0; 31 > u; u++) {
            if (0 != (v & m)) {
                var g = i["$" + (u + 1)];
                if (!g) continue;
                var y = g.$Ele;
                0 != (o & m) ? (y.removeClass("nousable").addClass("usable").removeAttr("style"), y.click(function() {
                    $(this).hasClass("selected") ? ($(this).removeClass("selected"), t.currentDay = 0) : (0 != t.currentDay && t.currentScence.dayEle["$" + t.currentDay].$Ele.removeClass("selected"), t.currentDay = $(this).find("div").html(), t.currentScence.dayEle["$" + t.currentDay].$Ele.addClass("selected")),
                    t.shader()
                })) : (y.hasClass("selected") && y.removeClass("selected"), y.removeClass("usable").addClass("nousable").css({
                    cursor: "auto"
                }).unbind())
            }
            if (0 != (f & m)) {
                var b = s["$" + (u + 32)],
                _ = a["$" + (u + 32)];
                0 != (l & m) ? (b && b.$Ele.css({
                    cursor: "pointer"
                }).removeClass("disableSku").click(function() {
                    $(this).hasClass("hover") ? $(this).removeClass("hover") : ($(this).parent().find("span").removeClass("hover"), $(this).addClass("hover")),
                    t.shader()
                }), _ && _.$Ele.removeClass("disablePerson")) : (b && (b.$Ele.hasClass("hover") && (b.$Ele.removeClass("hover"), e = !1), b.$Ele.css({
                    cursor: "auto"
                }).addClass("disableSku").unbind()), _ && _.$Ele.addClass("disablePerson"))
            }
            m <<= 1
        }
        var w = new Date;
        if (t.defaultCurrentDay && "" != t.defaultCurrentDay) {
            var x = t.defaultCurrentDay.split("-");
            w.setFullYear(x[0]),
            w.setDate(1),
            w.setMonth(x[1] - 1),
            w.setDate(x[2])
        } else {
            var k = new Date;
            k.setDate(k.getDate() + min_days_before_book),
            w.setUTCFullYear(k.getFullYear(), k.getMonth(), k.getDate())
        }
        var C = w.getFullYear(),
        I = w.getMonth() + 1,
        T = w.getDate(),
        S = parseInt(t.currentScence.month.substr(0, 4), "10"),
        A = parseInt(t.currentScence.month.substr(5, 2), "10");
        if (C == S && I > A || C > S) for (var D in t.currentScence.dayEle) {
            var j = t.currentScence.dayEle[D];
            j.$Ele.hasClass("selected") && (j.$Ele.removeClass("selected"), t.currentDay = 0),
            j.$Ele.removeClass("usable").addClass("nousable").css({
                cursor: "auto"
            }).unbind()
        } else if (C == S && A == I) for (var D in t.currentScence.dayEle) {
            var j = t.currentScence.dayEle[D];
            j.linkage < T && (j.$Ele.hasClass("selected") && (j.$Ele.removeClass("selected"), t.currentDay = 0), j.$Ele.removeClass("usable").addClass("nousable").css({
                cursor: "auto"
            }).unbind())
        }
        var E = t.currentScence.month + (t.currentDay < 10 ? "-0": "-") + t.currentDay,
        M = !0;
        for (var U in a) {
            var P = this.skuPriceMap[a[U].name + c];
            if (M && !a[U].$Ele.hasClass("disablePerson")) {
                a[U].$Ele.attr("minPrice");
                for (var O in t.currentScence.dayEle) {
                    var z = t.currentScence.dayEle[O].linkage;
                    z = t.currentScence.month + (10 > z ? "-0": "-") + z
                }
                M = !1
            }
            P && t.currentDay && !a[U].$Ele.hasClass("disablePerson") ? (a[U].$Ele.attr("p", P.price[E].p), a[U].$Ele.attr("mp", P.price[E].mp), a[U].$Ele.attr("min", P.min), a[U].$Ele.attr("max", P.max), a[U].$Ele.attr("minPrice", P.minPrice)) : (a[U].$Ele.attr("p", 0), a[U].$Ele.attr("mp", 0))
        }
        this.memoryJudgeCodeL = o,
        this.memoryJudgeCodeH = l;
        var L = 0 == this.currentDay ? '<p>使用日期：<span style="color:#f52e4b;">* 请选择</span></p>': "<p >使用日期：" + this.currentScence.month.replace("-", "年") + "月" + this.currentDay + "日</p>";
        $("#skuSelect").find(".sku-sel").each(function() {
            var e = $(this).find(".title").text();
            L += "<p>" + e + "<span >" + $(this).find(".hover").text() + "</span></p>"
        }),
        $("#tripInfo").html(L),
        this.refreshPrice(),
        e || t.shader()
    },
    Director.prototype.refreshPrice = function() {
        var e = this.personEle,
        t = 0,
        i = 0,
        n = !0,
        s = 0;
        for (var a in e) {
            var r = e[a];
            if (r.$Ele.hasClass("disablePerson")) r.$Ele.find("em").html(" ");
            else {
                var o = r.$Ele.attr("p"),
                l = r.$Ele.attr("mp"),
                c = parseInt(r.$Ele.find("input").val(), "10"),
                d = parseInt(r.$Ele.attr("min"), "10"),
                u = parseInt(r.$Ele.attr("max"), "10");
                if (d && u && 0 != d && 0 != u && 0 != c && (d > c && (c = d, r.$Ele.find("input").val(c)), c > u && (c = u, r.$Ele.find("input").val(c))), 0 == l) {
                    var h = r.$Ele.attr("minPrice");
                    h && 0 != h ? (r.$Ele.find("em").html(" "), n && (s = h, n = !1)) : r.$Ele.find("em").html(" ")
                } else r.$Ele.find("em").html(" " + cType + " " + o);
                t += l * c,
                i += o * c
            }
        }
        if (0 == i) $("#totalMoney").html("总价"),
        $("#savingMoney").html("共为您节省： ");
        else {
            var p = i; - 1 != p.toString().indexOf(".") && (p = fmoney(p, 2)),
            $("#totalMoney").html("总价 <b>" + cType + p + "</b>");
            var f = t - i; - 1 != f.toString().indexOf(".") && (f = fmoney(f, 2)),
            $("#savingMoney").html("共为您节省： <span>" + cType + " " + f + "</span>")
        }
    },
    Director
} (),
Scence = function() {
    function e(e, t) {
        this.dayEle = {},
        this.month = t;
        var i = this;
        TourDetailUtils.getNewMonthLinkage(e, t,
        function(e) {
            i.linkage = e.pl_linkage
        })
    }
    return e.prototype.assignSpirits = function(e) {
        this.dayEle = e
    },
    e
} (),
Spirit = function() {
    function e(e, t, i) {
        this.name = e,
        this.linkage = t,
        this.$Ele = i
    }
    return e
} ();
$(".MoreBtn").click(function() {
    $(this).parent().find(".TourInfoMsg").css("max-height", "none"),
    $(this).parent().find(".TourInfoMsg2").css("max-height", "none"),
    $(this).parent().find(".MoreBtn2").show(),
    $(this).hide()
}),
$(".MoreBtn2").click(function() {
    $(this).parent().find(".TourInfoMsg").css("max-height", "120px"),
    $(this).parent().find(".TourInfoMsg2").css("max-height", "120px"),
    $(this).parent().find(".MoreBtn").show(),
    $(this).hide()
}),
$(".Love").click(function() {
    var e = $("#tour_id").val();
    $(".Love").hasClass("Act") ? $.ajax({
        url: "/user/deletewishlist",
        data: {
            tourId: e
        },
        success: function(e) {
            var t = e.code;
            if (601 == t) {
                var i = GetUrlRelativePath();
                window.location.href = "/signIn.html?targetUrl=" + i
            } else 200 == t && $(".Love").removeClass("Act").text("加入心愿单")
        }
    }) : $.ajax({
        url: "/user/addwishlist",
        data: {
            tourId: e
        },
        success: function(e) {
            var t = e.code;
            if (601 == t) {
                var i = GetUrlRelativePath();
                window.location.href = "/signIn.html?targetUrl=" + i
            } else 200 == t && $(".Love").addClass("Act").text("已加入心愿单")
        }
    })
}),
$.ajax({
    url: "/user/querywishlists",
    type: "get",
    success: function(e) {
        var e = $.parseJSON(e),
        t = e.code;
        if (200 == t) for (var i = $("#tour_id").val(), n = e.list.length, s = 0; n > s; s++) {
            var a = e.list[s].tour_id;
            i == a && $(".Love").addClass("Act").text("已加入心愿单")
        }
    }
}),
$(".TourInfoMsg .InfoBox").height() <= $(".TourInfoMsg").height() && $(".TourInfoMsg").parent().find(" .MoreBtn").hide(),
$(".TourInfoMsg2 .InfoBox").height() <= $(".TourInfoMsg2").height() && $(".TourInfoMsg2").parent().find(" .MoreBtn").hide(),
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
    success: function(e) {
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
        filter: function(e) {
            return e.data
        }
    },
    engine: Hogan
}),
$("#header_search_button").click(function() {
    var e = $("#header_search_city_input").val();
    header_search(e)
}),
$(document).on("click", ".tt-suggestion",
function() {
    var e = $(this).find("p").html();
    header_search(e)
}),
$("#header_search_city_input").keyup(function(e) {
    if (13 == e.keyCode) {
        var t = $("#header_search_city_input").val();
        header_search(t)
    }
}),
locationCountryUrl();