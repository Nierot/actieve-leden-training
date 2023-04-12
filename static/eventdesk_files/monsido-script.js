!(function (t) {
  document.readyState && "complete" !== document.readyState
    ? window.addEventListener
      ? window.addEventListener("load", t, !1)
      : window.attachEvent && window.attachEvent("onload", t)
    : t();
})(function () {
  var t,
    s,
    e,
    c = {
      heatmap: "//heatmaps.monsido.com/v1/heatmaps.js",
      pageAssist: "//cdn.monsido.com/page-assist/mon-page-assist.js",
      pageAssistV2:
        "//cdn.monsido.com/page-assist/v2/mon-page-assist-loader.js",
      pageCorrect: "//pagecorrect.monsido.com/v1/page-correct.js",
      sopScript: "//app-script.monsido.com/v2/monsido_sop_script.js",
      statistics: "//tracking.monsido.com/",
    },
    n = {
      loadHeatmaps: function (t, e) {
        e.heatmap &&
          e.heatmap.enabled &&
          this.loadFeatureScript(t, this.createScriptTag(c.heatmap)),
          e.heatmap &&
            !1 === e.heatmap.enabled &&
            (window.monsido_functions.enableHeatmaps = o);
      },
      loadPageAssist: function (t, e) {
        e.pageAssist &&
          e.pageAssist.enabled &&
          this.loadFeatureScript(t, this.createScriptTag(c.pageAssist)),
          e.pageAssist &&
            !1 === e.pageAssist.enabled &&
            (window.monsido_functions.enablePageAssist = a);
      },
      loadPageAssistV2: function (t, e) {
        e.pageAssistV2 &&
          e.pageAssistV2.enabled &&
          this.loadFeatureScript(t, this.createScriptTag(c.pageAssistV2)),
          e.pageAssistV2 &&
            !1 === e.pageAssistV2.enabled &&
            (window.monsido_functions.enablePageAssistV2 = r);
      },
      loadPageCorrect: function (t, e) {
        e.pageCorrect &&
          e.pageCorrect.enabled &&
          this.loadFeatureScript(t, this.createScriptTag(c.pageCorrect)),
          e.pageCorrect &&
            !1 === e.pageCorrect.enabled &&
            (window.monsido_functions.enablePageCorrect = d);
      },
      loadFeatureScript: function (t, e) {
        e && this.insertElementBefore(e, t);
      },
      loadStatistic: function (t, e) {
        var n, o;
        e.statistics
          ? e.statistics.enabled
            ? ((window.monsido_tracking = { trackUrl: u, trackDocument: p }),
              (window.monsido_functions.trackUrl = u),
              (window.monsido_functions.trackDocument = p),
              e.statistics.documentTracking &&
                !0 === e.statistics.documentTracking.enabled &&
                (e.statistics.documentTracking.documentExt ||
                  (e.statistics.documentTracking.documentExt = [
                    "pdf",
                    "doc",
                    "ppt",
                    "docx",
                    "pptx",
                  ]),
                e.statistics.documentTracking.documentCls ||
                  (e.statistics.documentTracking.documentCls =
                    "monsido_download"),
                e.statistics.documentTracking.documentIgnoreCls ||
                  (e.statistics.documentTracking.documentIgnoreCls =
                    "monsido_download_ignore"),
                (n = e).statistics &&
                  n.statistics.documentTracking &&
                  n.statistics.documentTracking.enabled &&
                  (document.querySelectorAll
                    ? ("" !==
                        (o = (function (t) {
                          for (var e = [], n = "", o = 0; o < t.length; o++)
                            "" !== (n = t[o].replace(/^\s+|\s+$/g, "")) &&
                              ("." !== n.charAt(0) && (n = "." + n),
                              e.push('a[href$="' + n + '"]'));
                          return e.join(",");
                        })(n.statistics.documentTracking.documentExt).replace(
                          /^\s+|\s+$/g,
                          ""
                        )) && (o += ","),
                      "" !== n.statistics.documentTracking.documentCls &&
                        (o =
                          o + "." + n.statistics.documentTracking.documentCls),
                      h(
                        document.querySelectorAll(o),
                        c.statistics,
                        n.token,
                        g(),
                        n.statistics.documentTracking.documentIgnoreCls
                      ))
                    : h(
                        document.getElementsByClassName(
                          n.statistics.documentTracking.documentCls
                        ),
                        c.statistics,
                        n.token,
                        g(),
                        n.statistics.documentTracking.documentIgnoreCls
                      ))),
              !0 !== e.statistics.cookieLessTracking &&
                (e.statistics.cookieLessTracking = !1),
              !1 !== e.statistics.track_on_load && f(e))
            : (!1 === e.statistics.enabled &&
                (window.monsido_functions.enableStatistics = i),
              !1 !== e.statistics.track_on_load &&
                !1 !== e.track_pageviews_on_load &&
                f(e))
          : !1 === e.hasOwnProperty("statistics") &&
            !1 !== e.track_pageviews_on_load &&
            f(e);
      },
      insertElementBefore: function (t, e) {
        if (!e.parentNode)
          throw new Error(
            "could not insert element: target element has no parent"
          );
        e.parentNode.insertBefore(t, e);
      },
      createScriptTag: function (t) {
        var e = document.createElement("script");
        return (e.type = "text/javascript"), (e.src = t), e;
      },
    },
    m = {
      create: function (t) {
        t = this.createUrl(t);
        return this.createHiddenImage(t);
      },
      createHiddenImage: function (t) {
        var e = document.createElement("img");
        return (
          (e.style.height = "1px"),
          (e.style.width = "1px"),
          (e.src = t),
          e.setAttribute("hidden", ""),
          (e.style.display = "none !important"),
          e
        );
      },
      createUrl: function (t) {
        var e =
          t.trackingEndpoint +
          "?a=" +
          encodeURIComponent(t.token) +
          "&b=" +
          encodeURIComponent(t.currentUrl) +
          "&c=" +
          encodeURIComponent(t.userName);
        return (
          "number" == typeof t.screenHeight &&
            "number" == typeof t.screenWidth &&
            (e =
              e +
              "&d=" +
              encodeURIComponent(t.screenWidth + "x" + t.screenHeight)),
          (e =
            (e = t.referrer ? e + "&e=" + encodeURIComponent(t.referrer) : e) +
            "&f=" +
            encodeURIComponent(t.random)),
          t.performanceTiming &&
            (e = e + "&g=" + encodeURIComponent(t.performanceTiming)),
          (e += "&h=2"),
          t.isFile && (e += "&i=1"),
          t.eventCategory &&
            (e = e + "&k=" + encodeURIComponent(t.eventCategory)),
          t.eventAction && (e = e + "&l=" + encodeURIComponent(t.eventAction)),
          t.eventName && (e = e + "&m=" + encodeURIComponent(t.eventName)),
          t.eventValue && (e = e + "&n=" + encodeURIComponent(t.eventValue)),
          t.search && (e = e + "&o=" + encodeURIComponent(t.search)),
          (e = t.searchResultCount
            ? e + "&p=" + encodeURIComponent(t.searchResultCount)
            : e)
        );
      },
    };
  try {
    window._monsido_script_loader_has_run ||
      ((window._monsido_script_loader_has_run = !0),
      (t = document.getElementsByTagName("script")[0]) &&
        (s = window._monsido) &&
        ((window.monsido_functions = {}),
        (window.monsido_functions.trackPageview = l),
        (window.monsido_functions.trackEvent = function (t, e, n, o) {
          var i,
            s,
            a = window._monsido;
          a &&
            t &&
            e &&
            n &&
            ((i = document.URL),
            (s = g()),
            (a = {
              trackingEndpoint: c.statistics,
              token: a.token,
              currentUrl: i,
              userName: s,
              random: _(),
              eventCategory: t,
              eventAction: e,
              eventName: n,
              eventValue: o,
            }),
            E(m.createUrl(a)));
        }),
        (window.monsido_functions.trackSearch = function (t, e) {
          var n,
            o,
            i = window._monsido;
          i &&
            t &&
            e &&
            ((n = document.URL),
            (o = g()),
            (i = {
              trackingEndpoint: c.statistics,
              token: i.token,
              currentUrl: n,
              userName: o,
              random: _(),
              search: t,
              searchResultCount: e,
            }),
            E(m.createUrl(i)));
        }),
        (window.monsido_functions.setCookieConsent = function () {
          C("monsido", g(), 30, !0);
        }),
        (window.monsido_functions.removeCookieConsent = function () {
          document.cookie =
            "monsido=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }),
        n.loadStatistic(t, s),
        n.loadHeatmaps(t, s),
        n.loadPageAssist(t, s),
        n.loadPageAssistV2(t, s),
        n.loadPageCorrect(t, s),
        (e = (function (t) {
          var e;
          "function" == typeof Event
            ? (e = new Event(t))
            : (e = document.createEvent("Event")).initEvent(t, !0, !0);
          return e;
        })("mon-script-loaded")),
        window.dispatchEvent(e)));
  } catch (t) {}
  function i() {
    (s.statistics.enabled = !0), n.loadStatistic(t, s);
  }
  function o() {
    (s.heatmap.enabled = !0), n.loadHeatmaps(t, s);
  }
  function a() {
    (s.pageAssist.enabled = !0), n.loadPageAssist(t, s);
  }
  function r() {
    (s.pageAssistV2.enabled = !0), n.loadPageAssistV2(t, s);
  }
  function d() {
    (s.pageCorrect.enabled = !0), n.loadPageCorrect(t, s);
  }
  function u(t) {
    var e,
      n = window._monsido;
    n &&
      ((t = t),
      (e = g()),
      n.statistics && n.statistics.enabled
        ? (C("monsido", e, 30),
          w((n = v(c.statistics, n.token, t, e))),
          E(m.createUrl(n)))
        : l(t));
  }
  function l(t) {
    var e,
      n = window._monsido;
    n &&
      ((t = t || document.URL),
      (e = g()),
      (n = {
        trackingEndpoint: c.statistics,
        token: n.token,
        currentUrl: t,
        userName: e,
        random: _(),
      }),
      E(m.createUrl(n)));
  }
  function p(t) {
    var e = window._monsido;
    e &&
      (((e = v(c.statistics, e.token, t, g())).isFile = !0),
      w(e),
      E(m.createUrl(e)));
  }
  function g() {
    return (k("monsido") || _()).split("~")[0];
  }
  function w(t) {
    !(
      window.performance &&
      window.performance.timing &&
      window.performance.timing.domContentLoadedEventEnd &&
      window.navigationStart
    ) ||
      (t.performanceTiming =
        window.performance.timing.domContentLoadedEventEnd -
        window.performance.timing.navigationStart);
  }
  function f(t) {
    var e,
      n = document.URL,
      o = g();
    t.statistics && t.statistics.enabled
      ? (C("monsido", o, 30), w((e = v(c.statistics, t.token, n, o))))
      : (e = {
          trackingEndpoint: c.statistics,
          token: t.token,
          currentUrl: n,
          userName: o,
          random: _(),
        }),
      m.create(e);
  }
  function h(t, n, o, i, e) {
    if (t && 0 < t.length)
      for (var s = 0; s < t.length; s++)
        (a = "click"),
          (c = t[s]),
          (r = e),
          (d = function () {
            var t,
              e = v(
                n,
                o,
                ((e = this.getAttribute("href")),
                ((t = document.createElement("a")).href = e),
                t.href),
                i
              );
            (e.isFile = !0), E(m.createUrl(e));
          }),
          (c.getAttribute("class") &&
            -1 !== c.getAttribute("class").indexOf(r)) ||
            (c.addEventListener
              ? c.addEventListener(a, d, !1)
              : c.attachEvent && c.attachEvent("on" + a, d));
    var a, c, r, d;
  }
  function v(t, e, n, o) {
    return {
      trackingEndpoint: t,
      token: e,
      currentUrl: n,
      userName: o,
      random: _(),
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      referrer: document.referrer,
    };
  }
  function k(t) {
    for (
      var e = t + "=", n = document.cookie.split(";"), o = 0;
      o < n.length;
      o++
    ) {
      for (var i = n[o]; " " === i.charAt(0); ) i = i.substring(1);
      if (0 === i.indexOf(e)) return i.substring(e.length, i.length);
    }
    return "";
  }
  function C(t, e, n, o) {
    var i;
    (!o &&
      s.statistics &&
      !0 === s.statistics.cookieLessTracking &&
      !1 === (!!(i = k("monsido")) && (i.split("~").length = 2))) ||
      (!0 === o && (e += "~1"),
      (i = new Date()).setTime(i.getTime() + 24 * n * 60 * 60 * 1e3),
      (o = "expires=" + i.toUTCString()),
      (document.cookie = t + "=" + e + "; " + o + ";path=/"));
  }
  function _() {
    for (var t = "", e = "ABCDE1234567890", n = 0; n < 3; n++)
      t += e.charAt(Math.floor(Math.random() * e.length));
    return t + new Date().getTime();
  }
  function E(t, e) {
    if (
      ((e = JSON.stringify(e)),
      "navigator" in window && "sendBeacon" in window.navigator)
    )
      navigator.sendBeacon(t, e);
    else {
      var n = window.event && window.event.type,
        n = "unload" === n || "beforeunload" === n,
        o = new XMLHttpRequest();
      o.open("POST", t, !n),
        (o.withCredentials = !1),
        o.setRequestHeader("Accept", "*/*"),
        o.setRequestHeader("Content-Type", "application/json");
      try {
        o.send(e);
      } catch (t) {
        return;
      }
    }
  }
});
