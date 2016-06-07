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
    r = e.length; r > i; i++) if (n = e.item(i), !("||BR|HR|TEXTAREA|".indexOf("|" + n.tagName + "|") > 0)) if (n.title && (n.title = t(n.title)), n.alt && (n.alt = t(n.alt)), "INPUT" == n.tagName) {
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
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) n = e.charAt(s),
        i = t ? simplified.indexOf(n) : traditional.indexOf(n),
        r = t ? traditional.charAt(i) : simplified.charAt(i),
        o.push(-1 != i ? r : n);
        return o.join("")
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
            function (e, r) {
                return (i = n.call(null, r, e, t)) ? void 0 : !1
            }), !!i) : i
        },
        some: function (t, n) {
            var i = !1;
            return t ? (e.each(t,
            function (e, r) {
                return (i = n.call(null, r, e, t)) ? !1 : void 0
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
            var i, r;
            return function () {
                var o, s, a = this,
                u = arguments;
                return o = function () {
                    i = null,
                    n || (r = e.apply(a, u))
                },
                s = n && !i,
                clearTimeout(i),
                i = setTimeout(o, t),
                s && (r = e.apply(a, u)),
                r
            }
        },
        throttle: function (e, t) {
            var n, i, r, o, s, a;
            return s = 0,
            a = function () {
                s = new Date,
                r = null,
                o = e.apply(n, i)
            },
            function () {
                var u = new Date,
                c = t - (u - s);
                return n = this,
                i = arguments,
                0 >= c ? (clearTimeout(r), r = null, s = u, o = e.apply(n, i)) : r || (r = setTimeout(a, c)),
                o
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
                var i, r;
                if (!this._callbacks) return this;
                for (t = t.split(e) ; i = t.shift() ;) if (r = this._callbacks[i]) for (var o = 0; o < r.length; o += 1) r[o].call(this, {
                    type: i,
                    data: n
                });
                return this
            }
        }
    }(),
    r = function () {
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
    o = function () {
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
        function r(e) {
            return JSON.parse(e)
        }
        var o, s;
        try {
            o = window.localStorage,
            o.setItem("~~~", "!"),
            o.removeItem("~~~")
        } catch (a) {
            o = null
        }
        return s = o && window.JSON ? {
            _prefix: function (e) {
                return this.prefix + e
            },
            _ttlKey: function (e) {
                return this._prefix(e) + this.ttlKey
            },
            get: function (e) {
                return this.isExpired(e) && this.remove(e),
                r(o.getItem(this._prefix(e)))
            },
            set: function (e, r, s) {
                return n.isNumber(s) ? o.setItem(this._ttlKey(e), i(t() + s)) : o.removeItem(this._ttlKey(e)),
                o.setItem(this._prefix(e), i(r))
            },
            remove: function (e) {
                return o.removeItem(this._ttlKey(e)),
                o.removeItem(this._prefix(e)),
                this
            },
            clear: function () {
                var e, t, n = [],
                i = o.length;
                for (e = 0; i > e; e++) (t = o.key(e)).match(this.keyMatcher) && n.push(t.replace(this.keyMatcher, ""));
                for (e = n.length; e--;) this.remove(n[e]);
                return this
            },
            isExpired: function (e) {
                var i = r(o.getItem(this._ttlKey(e)));
                return !!(n.isNumber(i) && t() > i)
            }
        } : {
            get: n.noop,
            set: n.noop,
            remove: n.noop,
            clear: n.noop,
            isExpired: n.noop
        },
        n.mixin(e.prototype, s),
        e
    }(),
    s = function () {
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
            u = u || new s,
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
        function r() {
            c--
        }
        function o() {
            return a > c
        }
        var a, u, c = 0,
        h = {};
        return n.mixin(t.prototype, {
            _get: function (e, t) {
                function n(n) {
                    var r = i.filter ? i.filter(n) : n;
                    t && t(r),
                    u.set(e, n)
                }
                var i = this;
                o() ? this._sendRequest(e).done(n) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
            },
            _sendRequest: function (t) {
                function n() {
                    r(),
                    h[t] = null,
                    o.onDeckRequestArgs && (o._get.apply(o, o.onDeckRequestArgs), o.onDeckRequestArgs = null)
                }
                var o = this,
                s = h[t];
                return s || (i(), s = h[t] = e.ajax(t, this.ajaxSettings).always(n)),
                s
            },
            get: function (e, t) {
                var i, r, o = this,
                s = encodeURIComponent(e || "");
                return t = t || n.noop,
                i = this.replace ? this.replace(this.url, s) : this.url.replace(this.wildcard, s),
                (r = u.get(i)) ? n.defer(function () {
                    t(o.filter ? o.filter(r) : r)
                }) : this._get(i, t),
                !!r
            }
        }),
        t
    }(),
    u = function () {
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
            this.template = r(t.template, t.engine, this.valueKey),
            this.local = t.local,
            this.prefetch = t.prefetch,
            this.remote = t.remote,
            this.itemHash = {},
            this.adjacencyList = {},
            this.storage = t.name ? new o(t.name) : null
        }
        function r(e, t, i) {
            var r, o;
            return n.isFunction(e) ? r = e : n.isString(e) ? (o = t.compile(e), r = n.bind(o.render, o)) : r = function (e) {
                return "<p>" + e[i] + "</p>"
            },
            r
        }
        var s = {
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
                function r(e) {
                    var t = i.filter ? i.filter(e) : e,
                    r = d._processData(t),
                    o = r.itemHash,
                    a = r.adjacencyList;
                    d.storage && (d.storage.set(s.itemHash, o, i.ttl), d.storage.set(s.adjacencyList, a, i.ttl), d.storage.set(s.thumbprint, p, i.ttl), d.storage.set(s.protocol, n.getProtocol(), i.ttl)),
                    d._mergeProcessedData(r)
                }
                var o, a, u, c, h, l, d = this,
                p = t + (i.thumbprint || "");
                return this.storage && (o = this.storage.get(s.thumbprint), a = this.storage.get(s.protocol), u = this.storage.get(s.itemHash), c = this.storage.get(s.adjacencyList)),
                h = o !== p || a !== n.getProtocol(),
                i = n.isString(i) ? {
                    url: i
                } : i,
                i.ttl = n.isNumber(i.ttl) ? i.ttl : 864e5,
                u && c && !h ? (this._mergeProcessedData({
                    itemHash: u,
                    adjacencyList: c
                }), l = e.Deferred().resolve()) : l = e.getJSON(i.url).done(r),
                l
            },
            _transformDatum: function (e) {
                var t = n.isString(e) ? e : e[this.valueKey],
                i = e.tokens || n.tokenizeText(t),
                r = {
                    value: t,
                    tokens: i
                };
                return n.isString(e) ? (r.datum = {},
                r.datum[this.valueKey] = e) : r.datum = e,
                r.tokens = n.filter(r.tokens,
                function (e) {
                    return !n.isBlankString(e)
                }),
                r.tokens = n.map(r.tokens,
                function (e) {
                    return e.toLowerCase()
                }),
                r
            },
            _processData: function (e) {
                var t = this,
                i = {},
                r = {};
                return n.each(e,
                function (e, o) {
                    var s = t._transformDatum(o),
                    a = n.getUniqueId(s.value);
                    i[a] = s,
                    n.each(s.tokens,
                    function (e, t) {
                        var i = t.charAt(0),
                        o = r[i] || (r[i] = [a]); ! ~n.indexOf(o, a) && o.push(a)
                    })
                }),
                {
                    itemHash: i,
                    adjacencyList: r
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
                r = [],
                o = [],
                s = [];
                return n.each(e,
                function (e, t) {
                    var i = t.charAt(0); ! ~n.indexOf(r, i) && r.push(i)
                }),
                n.each(r,
                function (e, n) {
                    var r = i.adjacencyList[n];
                    return r ? (o.push(r), void ((!t || r.length < t.length) && (t = r))) : !1
                }),
                o.length < r.length ? [] : (n.each(t,
                function (t, r) {
                    var a, u, c = i.itemHash[r];
                    a = n.every(o,
                    function (e) {
                        return ~n.indexOf(e, r)
                    }),
                    u = a && n.every(e,
                    function (e) {
                        return n.some(c.tokens,
                        function (t) {
                            return 0 === t.indexOf(e)
                        })
                    }),
                    u && s.push(c)
                }), s)
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
                    o = o.slice(0),
                    n.each(e,
                    function (e, t) {
                        var i, r = s._transformDatum(t);
                        return i = n.some(o,
                        function (e) {
                            return r.value === e.value
                        }),
                        !i && o.push(r),
                        o.length < s.limit
                    }),
                    t && t(o)
                }
                var r, o, s = this,
                a = !1;
                e.length < this.minLength || (r = n.tokenizeQuery(e), o = this._getLocalSuggestions(r).slice(0, this.limit), o.length < this.limit && this.transport && (a = this.transport.get(e, i)), !a && t && t(o))
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
            this.$overflowHelper = r(this.$input)
        }
        function r(t) {
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
        function o(e, t) {
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
                t = o(this.query, e),
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
    h = function () {
        function t(t) {
            n.bindAll(this),
            this.isOpen = !1,
            this.isEmpty = !0,
            this.isMouseOverDropdown = !1,
            this.$menu = e(t.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("click.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover)
        }
        function r(e) {
            return e.data("suggestion")
        }
        var o = {
            suggestionsList: '<span class="tt-suggestions"></span>'
        },
        s = {
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
                this.trigger("suggestionSelected", r(n))
            },
            _show: function () {
                this.$menu.css("display", "block")
            },
            _hide: function () {
                this.$menu.hide()
            },
            _moveCursor: function (e) {
                var t, n, i, o;
                if (this.isVisible()) {
                    if (t = this._getSuggestions(), n = t.filter(".tt-is-under-cursor"), n.removeClass("tt-is-under-cursor"), i = t.index(n) + e, i = (i + 1) % (t.length + 1) - 1, -1 === i) return void this.trigger("cursorRemoved"); -1 > i && (i = t.length - 1),
                    o = t.eq(i).addClass("tt-is-under-cursor"),
                    this._ensureVisibility(o),
                    this.trigger("cursorMoved", r(o))
                }
            },
            _getSuggestions: function () {
                return this.$menu.find(".tt-suggestions > .tt-suggestion")
            },
            _ensureVisibility: function (e) {
                var t = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                n = this.$menu.scrollTop(),
                i = e.position().top,
                r = i + e.outerHeight(!0);
                0 > i ? this.$menu.scrollTop(n + i) : r > t && this.$menu.scrollTop(n + (r - t))
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
                return e.length > 0 ? r(e) : null
            },
            getFirstSuggestion: function () {
                var e = this._getSuggestions().first();
                return e.length > 0 ? r(e) : null
            },
            renderSuggestions: function (t, i) {
                var r, a, u, c, h, l = "tt-dataset-" + t.name,
                d = '<div class="tt-suggestion">%body</div>',
                p = this.$menu.find("." + l);
                0 === p.length && (a = e(o.suggestionsList).css(s.suggestionsList), p = e("<div></div>").addClass(l).append(t.header).append(a).append(t.footer).appendTo(this.$menu)),
                i.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), u = document.createElement("div"), c = document.createDocumentFragment(), n.each(i,
                function (n, i) {
                    i.dataset = t.name,
                    r = t.template(i.datum),
                    u.innerHTML = d.replace("%body", r),
                    h = e(u.firstChild).css(s.suggestion).data("suggestion", i),
                    h.children().each(function () {
                        e(this).css(s.suggestionChild)
                    }),
                    c.appendChild(h[0])
                }), p.show().find(".tt-suggestions").html(c)) : this.clearSuggestions(t.name),
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
    l = function () {
        function t(e) {
            var t, i, o;
            n.bindAll(this),
            this.$node = r(e.input),
            this.datasets = e.datasets,
            this.dir = null,
            this.eventBus = e.eventBus,
            t = this.$node.find(".tt-dropdown-menu"),
            i = this.$node.find(".tt-query"),
            o = this.$node.find(".tt-hint"),
            this.dropdownView = new h({
                menu: t
            }).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed", this._propagateEvent),
            this.inputView = new c({
                input: i,
                hint: o
            }).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed tabKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", this._autocomplete)
        }
        function r(t) {
            var n = e(s.wrapper),
            i = e(s.dropdown),
            r = e(t),
            o = e(s.hint);
            n = n.css(a.wrapper),
            i = i.css(a.dropdown),
            o.css(a.hint).css({
                backgroundAttachment: r.css("background-attachment"),
                backgroundClip: r.css("background-clip"),
                backgroundColor: r.css("background-color"),
                backgroundImage: r.css("background-image"),
                backgroundOrigin: r.css("background-origin"),
                backgroundPosition: r.css("background-position"),
                backgroundRepeat: r.css("background-repeat"),
                backgroundSize: r.css("background-size")
            }),
            r.data("ttAttrs", {
                dir: r.attr("dir"),
                autocomplete: r.attr("autocomplete"),
                spellcheck: r.attr("spellcheck"),
                style: r.attr("style")
            }),
            r.addClass("tt-query").attr({
                autocomplete: "off",
                spellcheck: !1
            }).css(a.query);
            try {
                !r.attr("dir") && r.attr("dir", "auto")
            } catch (u) { }
            return r.wrap(n).parent().prepend(o).append(i)
        }
        function o(e) {
            var t = e.find(".tt-query");
            n.each(t.data("ttAttrs"),
            function (e, i) {
                n.isUndefined(i) ? t.removeAttr(e) : t.attr(e, i)
            }),
            t.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(e),
            e.remove()
        }
        var s = {
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
                r = !1;
                switch (e.type) {
                    case "tabKeyed":
                        t = this.inputView.getHintValue(),
                        n = this.inputView.getInputValue(),
                        r = t && t !== n;
                        break;
                    case "upKeyed":
                    case "downKeyed":
                        r = !i.shiftKey && !i.ctrlKey && !i.metaKey
                }
                r && i.preventDefault()
            },
            _setLanguageDirection: function () {
                var e = this.inputView.getLanguageDirection();
                e !== this.dir && (this.dir = e, this.$node.css("direction", e), this.dropdownView.setLanguageDirection(e))
            },
            _updateHint: function () {
                var e, t, i, r, o, s = this.dropdownView.getFirstSuggestion(),
                a = s ? s.value : null,
                u = this.dropdownView.isVisible(),
                c = this.inputView.isOverflow();
                a && u && !c && (e = this.inputView.getInputValue(), t = e.replace(/\s{2,}/g, " ").replace(/^\s+/g, ""), i = n.escapeRegExChars(t), r = new RegExp("^(?:" + i + ")(.*$)", "i"), o = r.exec(a), this.inputView.setHintValue(e + (o ? o[1] : "")))
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
                var t, n, i, r, o; ("rightKeyed" !== e.type && "leftKeyed" !== e.type || (t = this.inputView.isCursorAtEnd(), n = "ltr" === this.inputView.getLanguageDirection() ? "leftKeyed" === e.type : "rightKeyed" === e.type, t && !n)) && (i = this.inputView.getQuery(), r = this.inputView.getHintValue(), "" !== r && i !== r && (o = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(o.value), this.eventBus.trigger("autocompleted", o.datum, o.dataset)))
            },
            _propagateEvent: function (e) {
                this.eventBus.trigger(e.type)
            },
            destroy: function () {
                this.inputView.destroy(),
                this.dropdownView.destroy(),
                o(this.$node),
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
        o = "ttView";
        t = {
            initialize: function (t) {
                function s() {
                    var t, i = e(this),
                    s = new r({
                        el: i
                    });
                    t = n.map(a,
                    function (e) {
                        return e.initialize()
                    }),
                    i.data(o, new l({
                        input: i,
                        eventBus: s = new r({
                            el: i
                        }),
                        datasets: a
                    })),
                    e.when.apply(e, t).always(function () {
                        n.defer(function () {
                            s.trigger("initialized")
                        })
                    })
                }
                var a;
                return t = n.isArray(t) ? t : [t],
                0 === t.length && e.error("no datasets provided"),
                a = n.map(t,
                function (e) {
                    var t = i[e.name] ? i[e.name] : new u(e);
                    return e.name && (i[e.name] = t),
                    t
                }),
                this.each(s)
            },
            destroy: function () {
                function t() {
                    var t = e(this),
                    n = t.data(o);
                    n && (n.destroy(), t.removeData(o))
                }
                return this.each(t)
            },
            setQuery: function (t) {
                function n() {
                    var n = e(this).data(o);
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
        c.test(e) ? e.replace(r, "&amp;").replace(o, "&lt;").replace(s, "&gt;").replace(a, "&#39;").replace(u, "&quot;") : e
    }
    e.Template = function (e, n, i, r) {
        this.r = e || this.r,
        this.c = i,
        this.options = r,
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
            var r = n[e];
            return r ? (this.c && "string" == typeof r && (r = this.c.compile(r, this.options)), r.ri(t, n, i)) : ""
        },
        rs: function (e, t, n) {
            var i = e[e.length - 1];
            if (!h(i)) return void n(e, t, this);
            for (var r = 0; r < i.length; r++) e.push(i[r]),
            n(e, t, this),
            e.pop()
        },
        s: function (e, t, n, i, r, o, s) {
            var a;
            return h(e) && 0 === e.length ? !1 : ("function" == typeof e && (e = this.ls(e, t, n, i, r, o, s)), a = "" === e || !!e, !i && a && t && t.push("object" == typeof e ? e : t[t.length - 1]), a)
        },
        d: function (e, t, n, i) {
            var r = e.split("."),
            o = this.f(r[0], t, n, i),
            s = null;
            if ("." === e && h(t[t.length - 2])) return t[t.length - 1];
            for (var a = 1; a < r.length; a++) o && "object" == typeof o && r[a] in o ? (s = o, o = o[r[a]]) : o = "";
            return i && !o ? !1 : (i || "function" != typeof o || (t.push(s), o = this.lv(o, t, n), t.pop()), o)
        },
        f: function (e, t, n, i) {
            for (var r = !1,
            o = null,
            s = !1,
            a = t.length - 1; a >= 0; a--) if (o = t[a], o && "object" == typeof o && e in o) {
                r = o[e],
                s = !0;
                break
            }
            return s ? (i || "function" != typeof r || (r = this.lv(r, t, n)), r) : i ? !1 : ""
        },
        ho: function (e, t, n, i, r) {
            var o = this.c,
            s = this.options;
            s.delimiters = r;
            var i = e.call(t, i);
            return i = null == i ? String(i) : i.toString(),
            this.b(o.compile(i, s).render(t, n)),
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
        ls: function (e, t, n, i, r, o, s) {
            var a = t[t.length - 1],
            u = null;
            if (!i && this.c && e.length > 0) return this.ho(e, a, n, this.text.substring(r, o), s);
            if (u = e.call(a), "function" == typeof u) {
                if (i) return !0;
                if (this.c) return this.ho(u, a, n, this.text.substring(r, o), s)
            }
            return u
        },
        lv: function (e, t, i) {
            var r = t[t.length - 1],
            o = e.call(r);
            return "function" == typeof o && (o = n(o.call(r)), this.c && ~o.indexOf("{{")) ? this.c.compile(o, this.options).render(r, i) : n(o)
        }
    };
    var r = /&/g,
    o = /</g,
    s = />/g,
    a = /\'/g,
    u = /\"/g,
    c = /[&<>\"\']/,
    h = Array.isArray ||
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
        r = e.length; r > i; i++) if (t.charAt(n + i) != e.charAt(i)) return !1;
        return !0
    }
    function r(e, t, n, i) {
        for (var a = [], u = null, c = null; e.length > 0;) if (c = e.shift(), "#" == c.tag || "^" == c.tag || o(c, i)) n.push(c),
        c.nodes = r(e, c.tag, n, i),
        a.push(c);
        else {
            if ("/" == c.tag) {
                if (0 === n.length) throw new Error("Closing tag without opener: /" + c.n);
                if (u = n.pop(), c.n != u.n && !s(c.n, u.n, i)) throw new Error("Nesting error: " + u.n + " vs. " + c.n);
                return u.end = c.i,
                a
            }
            a.push(c)
        }
        if (n.length > 0) throw new Error("missing closing tag: " + n.pop().n);
        return a
    }
    function o(e, t) {
        for (var n = 0,
        i = t.length; i > n; n++) if (t[n].o == e.n) return e.tag = "#",
        !0
    }
    function s(e, t, n) {
        for (var i = 0,
        r = n.length; r > i; i++) if (n[i].c == e && n[i].o == t) return !0
    }
    function a(e) {
        return e.replace(_, "\\\\").replace(v, '\\"').replace(y, "\\n").replace(w, "\\r")
    }
    function u(e) {
        return ~e.indexOf(".") ? "d" : "f"
    }
    function c(e) {
        for (var t = "",
        n = 0,
        i = e.length; i > n; n++) {
            var r = e[n].tag;
            "#" == r ? t += h(e[n].nodes, e[n].n, u(e[n].n), e[n].i, e[n].end, e[n].otag + " " + e[n].ctag) : "^" == r ? t += l(e[n].nodes, e[n].n, u(e[n].n)) : "<" == r || ">" == r ? t += d(e[n]) : "{" == r || "&" == r ? t += p(e[n].n, u(e[n].n)) : "\n" == r ? t += g('"\\n"' + (e.length - 1 == n ? "" : " + i")) : "_v" == r ? t += f(e[n].n, u(e[n].n)) : void 0 === r && (t += g('"' + a(e[n]) + '"'))
        }
        return t
    }
    function h(e, t, n, i, r, o) {
        return "if(_.s(_." + n + '("' + a(t) + '",c,p,1),c,p,0,' + i + "," + r + ',"' + o + '")){_.rs(c,p,function(c,p,_){' + c(e) + "});c.pop();}"
    }
    function l(e, t, n) {
        return "if(!_.s(_." + n + '("' + a(t) + '",c,p,1),c,p,1,0,0,"")){' + c(e) + "};"
    }
    function d(e) {
        return '_.b(_.rp("' + a(e.n) + '",c,p,"' + (e.indent || "") + '"));'
    }
    function p(e, t) {
        return "_.b(_.t(_." + t + '("' + a(e) + '",c,p,0)));'
    }
    function f(e, t) {
        return "_.b(_.v(_." + t + '("' + a(e) + '",c,p,0)));'
    }
    function g(e) {
        return "_.b(" + e + ");"
    }
    var m = /\S/,
    v = /\"/g,
    y = /\n/g,
    w = /\r/g,
    _ = /\\/g,
    $ = {
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
    e.scan = function (e, r) {
        function o() {
            v.length > 0 && (y.push(new String(v)), v = "")
        }
        function s() {
            for (var e = !0,
            t = C; t < y.length; t++) if (e = y[t].tag && $[y[t].tag] < $._v || !y[t].tag && null === y[t].match(m), !e) return !1;
            return e
        }
        function a(e, t) {
            if (o(), e && s()) for (var n, i = C; i < y.length; i++) y[i].tag || ((n = y[i + 1]) && ">" == n.tag && (n.indent = y[i].toString()), y.splice(i, 1));
            else t || y.push({
                tag: "\n"
            });
            w = !1,
            C = y.length
        }
        function u(e, t) {
            var i = "=" + x,
            r = e.indexOf(i, t),
            o = n(e.substring(e.indexOf("=", t) + 1, r)).split(" ");
            return b = o[0],
            x = o[1],
            r + i.length - 1
        }
        var c = e.length,
        h = 0,
        l = 1,
        d = 2,
        p = h,
        f = null,
        g = null,
        v = "",
        y = [],
        w = !1,
        _ = 0,
        C = 0,
        b = "{{",
        x = "}}";
        for (r && (r = r.split(" "), b = r[0], x = r[1]), _ = 0; c > _; _++) p == h ? i(b, e, _) ? (--_, o(), p = l) : "\n" == e.charAt(_) ? a(w) : v += e.charAt(_) : p == l ? (_ += b.length - 1, g = $[e.charAt(_ + 1)], f = g ? e.charAt(_ + 1) : "_v", "=" == f ? (_ = u(e, _), p = h) : (g && _++, p = d), w = _) : i(x, e, _) ? (y.push({
            tag: f,
            n: n(v),
            otag: b,
            ctag: x,
            i: "/" == f ? w - x.length : _ + b.length
        }), v = "", _ += x.length - 1, p = h, "{" == f && ("}}" == x ? _++ : t(y[y.length - 1]))) : v += e.charAt(_);
        return a(w, !0),
        y
    },
    e.generate = function (t, n, i) {
        var r = 'var _=this;_.b(i=i||"");' + c(t) + "return _.fl();";
        return i.asString ? "function(c,p,i){" + r + ";}" : new e.Template(new Function("c", "p", "i", r), n, e, i)
    },
    e.parse = function (e, t, n) {
        return n = n || {},
        r(e, "", [], n.sectionTags || [])
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
        if (document.cookie && "" != document.cookie) for (var r = document.cookie.split(";"), o = 0; o < r.length; o++) {
            var s = jQuery.trim(r[o]);
            if (s.substring(0, e.length + 1) == e + "=") {
                i = decodeURIComponent(s.substring(e.length + 1));
                break
            }
        }
        return i
    }
    n = n || {},
    null === t && (t = "", n.expires = -1);
    var a = "";
    if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
        var u;
        "number" == typeof n.expires ? (u = new Date, u.setTime(u.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : u = n.expires,
        a = "; expires=" + u.toUTCString()
    }
    var c = n.path ? "; path=" + n.path : "",
    h = n.domain ? "; domain=" + n.domain : "",
    l = n.secure ? "; secure" : "";
    document.cookie = [e, "=", encodeURIComponent(t), a, c, h, l].join("")
},
window.onerror = function (e, t, n, i, r) { },
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
        var r = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        r = "object" == typeof t ? e.extend(r, t) : e.isFunction(n) ? e.extend(r, {
            over: t,
            out: n,
            selector: i
        }) : e.extend(r, {
            over: t,
            out: t,
            selector: n
        });
        var o, s, a, u, c = function (e) {
            o = e.pageX,
            s = e.pageY
        },
        h = function (t, n) {
            return n.hoverIntent_t = clearTimeout(n.hoverIntent_t),
            Math.abs(a - o) + Math.abs(u - s) < r.sensitivity ? (e(n).off("mousemove.hoverIntent", c), n.hoverIntent_s = 1, r.over.apply(n, [t])) : (a = o, u = s, n.hoverIntent_t = setTimeout(function () {
                h(t, n)
            },
            r.interval), void 0)
        },
        l = function (e, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t),
            t.hoverIntent_s = 0,
            r.out.apply(t, [e])
        },
        d = function (t) {
            var n = jQuery.extend({},
            t),
            i = this;
            i.hoverIntent_t && (i.hoverIntent_t = clearTimeout(i.hoverIntent_t)),
            "mouseenter" == t.type ? (a = n.pageX, u = n.pageY, e(i).on("mousemove.hoverIntent", c), 1 != i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function () {
                h(n, i)
            },
            r.interval))) : (e(i).off("mousemove.hoverIntent", c), 1 == i.hoverIntent_s && (i.hoverIntent_t = setTimeout(function () {
                l(n, i)
            },
            r.timeout)))
        };
        return this.on({
            "mouseenter.hoverIntent": d,
            "mouseleave.hoverIntent": d
        },
        r.selector)
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
        r = function (e, n) {
            var i = t.menuClass;
            n.cssArrows && (i += " " + t.menuArrowClass),
            e.toggleClass(i)
        },
        o = function (n, i) {
            return n.find("li." + i.pathClass).slice(0, i.pathLevels).addClass(i.hoverClass + " " + t.bcClass).filter(function () {
                return e(this).children(i.popUpSelector).hide().show().length
            }).removeClass(i.pathClass)
        },
        s = function (e) {
            e.children("a").toggleClass(t.anchorClass)
        },
        a = function (e) {
            var t = e.css("ms-touch-action");
            t = "pan-y" === t ? "auto" : "pan-y",
            e.css("ms-touch-action", t)
        },
        u = function (t, r) {
            var o = "li:has(" + r.popUpSelector + ")";
            e.fn.hoverIntent && !r.disableHI ? t.hoverIntent(h, l, o) : t.on("mouseenter.superfish", o, h).on("mouseleave.superfish", o, l);
            var s = "MSPointerDown.superfish";
            n || (s += " touchend.superfish"),
            i && (s += " mousedown.superfish"),
            t.on("focusin.superfish", "li", h).on("focusout.superfish", "li", l).on(s, "a", r, c)
        },
        c = function (t) {
            var n = e(this),
            i = n.siblings(t.data.popUpSelector);
            i.length > 0 && i.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === t.type ? n.trigger("focus") : e.proxy(h, n.parent("li"))())
        },
        h = function () {
            var t = e(this),
            n = f(t);
            clearTimeout(n.sfTimer),
            t.siblings().superfish("hide").end().superfish("show")
        },
        l = function () {
            var t = e(this),
            i = f(t);
            n ? e.proxy(d, t, i)() : (clearTimeout(i.sfTimer), i.sfTimer = setTimeout(e.proxy(d, t, i), i.delay))
        },
        d = function (t) {
            t.retainPath = e.inArray(this[0], t.$path) > -1,
            this.superfish("hide"),
            this.parents("." + t.hoverClass).length || (t.onIdle.call(p(this)), t.$path.length && e.proxy(h, t.$path)())
        },
        p = function (e) {
            return e.closest("." + t.menuClass)
        },
        f = function (e) {
            return p(e).data("sf-options")
        };
        return {
            hide: function (e) {
                if (this.length) {
                    var t = this,
                    n = f(t);
                    if (!n) return this;
                    var i = n.retainPath === !0 ? n.$path : "",
                    r = t.find("li." + n.hoverClass).add(this).not(i).removeClass(n.hoverClass).children(n.popUpSelector),
                    o = n.speedOut;
                    e && (r.show(), o = 0),
                    n.retainPath = !1,
                    n.onBeforeHide.call(r),
                    r.hide(0)
                }
                return this
            },
            show: function () {
                var e = f(this);
                if (!e) return this;
                if (e.hoverStyle) {
                    var t = this.parent().parent(),
                    n = this.children("ul"),
                    i = t.height(),
                    r = n.height();
                    if (r > i) {
                        var o = this.innerHeight(),
                        s = t.children().children().index(this),
                        a = o * s;
                        e.toTopMargin && (a += e.toTopMargin),
                        n.css({})
                    } else this.children("ul").css(e.hoverStyle)
                }
                var u = this.addClass(e.hoverClass),
                c = u.children(e.popUpSelector);
                return e.onBeforeShow.call(c),
                c.show(0),
                this
            },
            destroy: function () {
                return this.each(function () {
                    var n, i = e(this),
                    o = i.data("sf-options");
                    return o ? (n = i.find(o.popUpSelector).parent("li"), clearTimeout(o.sfTimer), r(i, o), s(n), a(i), i.off(".superfish").off(".hoverIntent"), n.children(o.popUpSelector).attr("style",
                    function (e, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }), o.$path.removeClass(o.hoverClass + " " + t.bcClass).addClass(o.pathClass), i.find("." + o.hoverClass).removeClass(o.hoverClass), o.onDestroy.call(i), void i.removeData("sf-options")) : !1
                })
            },
            init: function (n) {
                return this.each(function () {
                    var i = e(this);
                    if (i.data("sf-options")) return !1;
                    var c = e.extend({},
                    e.fn.superfish.defaults, n),
                    h = i.find(c.popUpSelector).parent("li");
                    c.$path = o(i, c),
                    i.data("sf-options", c),
                    r(i, c),
                    s(h),
                    a(i),
                    u(i, c),
                    h.not("." + t.bcClass).superfish("hide", !0),
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
    r = "function";
    return function () {
        for (var o = arguments.length,
        s = i > o ? i : o, a = 0; s > a; a++) arguments[a] && (n[a] = arguments[a]);
        n.length = s;
        for (var a = 0,
        u = n.length; u > a; a++) {
            var c = n[a];
            c && typeof c == r && 1 == c.late && (n[a] = c.apply(t || this, n))
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
});
for (var namelist = ["aboutus", "disclaimer", "privacy", "terms", "payment_service", "job", "partner", "contactus"], url = location.href, i = 0; i < namelist.length; i++) if (url.indexOf(namelist[i]) > 0) {
    $("div.lft ul li").eq(i).addClass("hover");
    break
}
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