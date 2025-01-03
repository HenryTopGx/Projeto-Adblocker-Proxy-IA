function _bsaViewableFaker() {
    if (typeof FakeIntersectionObserver === "function") {
        return FakeIntersectionObserver
    }
    return class FakeIntersectionObserver {
        constructor(callback) {
            this._callback = callback
        }
        observe(target) {
            this._callback([{
                target: target,
                isIntersecting: false,
                intersectionRatio: 0
            }], this)
        }
        unobserve(_target) {}
        disconnect() {}
    }
}
var IntersectionObserver = typeof IntersectionObserver === "function" ? IntersectionObserver : _bsaViewableFaker();
window.requestIdleCallback = window.requestIdleCallback || function(cb) {
    var start = Date.now();
    return setTimeout((function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start))
            }
        })
    }
    ), 1)
}
;
var _bsaViewable = {
    forceOn: false,
    isset: function(v) {
        return typeof v !== "undefined" && v != null
    },
    _corelib: function() {
        return window._bsa || window._carbonads
    },
    triggerView: function(statviewlink) {
        _bsaViewable._corelib()._touchUrl(statviewlink)
    },
    _inIframe: function() {
        try {
            return window.self !== window.top
        } catch (e) {
            return true
        }
    },
    _iabViewablePercentages: {
        242500: .3,
        0: .5
    },
    _iabViewableTime: 1e3,
    _iabViewablePercentage: function(width, height) {
        const area = (width || 0) * (height || 0);
        const thresholds = Object.keys(_bsaViewable._iabViewablePercentages).toSorted().reverse();
        const matchedThreshold = thresholds.find((threshold=>area >= threshold));
        return _bsaViewable._iabViewablePercentages[matchedThreshold]
    },
    shouldWrapRoot: function(options) {
        const viewableDeactivated = options.noViewable;
        const windowNotDisplayed = (window.innerHeight || 0) === 0 && (window.innerWidth || 0) === 0;
        const inIframe = _bsaViewable._inIframe();
        return !viewableDeactivated && !windowNotDisplayed && !inIframe
    },
    _ensureEmbodiedElement: function(element) {
        if (element.nodeName !== "SCRIPT") {
            return [element, false]
        }
        const measurementElement = document.createElement("div");
        measurementElement.id = "_bsa_viewable_check_" + Math.floor(Math.random() * 999);
        element.parentNode.insertBefore(measurementElement, element.nextSibling);
        return [measurementElement, measurementElement.id]
    },
    _cleanupCheck: function(cleanupId) {
        return function() {
            if (!cleanupId) {
                return
            }
            document.getElementById(cleanupId).remove()
        }
    },
    _callbackWithCleanup(primaryCallback, cleanupCallback) {
        return function() {
            const response = primaryCallback.apply(this, arguments);
            cleanupCallback();
            return response
        }
    },
    rootObserve: function(element, callback) {
        const ensuredElementInfo = _bsaViewable._ensureEmbodiedElement(element);
        const ensuredElement = ensuredElementInfo[0];
        const cleanupId = ensuredElementInfo[1];
        const observer = _bsaViewable._rootObserver(_bsaViewable._callbackWithCleanup(callback, _bsaViewable._cleanupCheck(cleanupId)));
        observer.observe(ensuredElement)
    },
    _rootObserver: function(callback) {
        const reportingOverlapThreshold = 0;
        const actualOverlapThreshold = .5;
        const options = {
            threshold: reportingOverlapThreshold
        };
        return new IntersectionObserver((function(entries, observer) {
            entries.forEach((function(entry) {
                callback(entry.intersectionRatio >= actualOverlapThreshold)
            }
            ));
            observer.disconnect()
        }
        ),options)
    },
    officiallyViewedCallback: function(statviewlink) {
        window.requestIdleCallback((function() {
            _bsaViewable.triggerView(statviewlink)
        }
        ), {
            timeout: 1e3
        })
    },
    setLinkInfo: function(statviewlink, key, value) {
        _bsaViewable._linkInfo = _bsaViewable._linkInfo || {};
        _bsaViewable._linkInfo[statviewlink] = _bsaViewable._linkInfo[statviewlink] || {};
        _bsaViewable._linkInfo[statviewlink][key] = value
    },
    getLinkInfo: function(statviewlink, key) {
        if (_bsaViewable._linkInfo && _bsaViewable._linkInfo[statviewlink]) {
            return _bsaViewable._linkInfo[statviewlink][key]
        }
        return null
    },
    observerCallback: function(entries, observer) {
        entries.forEach((function(entry) {
            const imageTags = entry.target.querySelectorAll("img[data-statview]");
            imageTags.forEach((function(imageTag) {
                const statviewlink = _bsaViewable.isset(imageTag) && imageTag.getAttribute("data-statview");
                if (statviewlink && statviewlink !== "") {
                    if (entry.isIntersecting && _bsaViewable._iabViewablePercentage(imageTag.getAttribute("width"), imageTag.getAttribute("height")) <= entry.intersectionRatio && !_bsaViewable.getLinkInfo(statviewlink, "intersectStart")) {
                        _bsaViewable.setLinkInfo(statviewlink, "intersectStart", Date.now());
                        _bsaViewable.setLinkInfo(statviewlink, "timeoutId", window.setTimeout((function() {
                            _bsaViewable.observer().unobserve(entry.target);
                            _bsaViewable.officiallyViewedCallback(statviewlink);
                            _bsaViewable.setLinkInfo(statviewlink, "viewedAt", Date.now())
                        }
                        ), _bsaViewable._iabViewableTime))
                    } else if (!entry.isIntersecting && _bsaViewable.getLinkInfo(statviewlink, "intersectStart") || entry.isIntersecting && _bsaViewable._iabViewablePercentage(imageTag.getAttribute("width"), imageTag.getAttribute("height")) > entry.intersectionRatio && _bsaViewable.getLinkInfo(statviewlink, "intersectStart")) {
                        window.clearTimeout(_bsaViewable.getLinkInfo(statviewlink, "timeoutId"));
                        _bsaViewable.setLinkInfo(statviewlink, "intersectStart", null);
                        _bsaViewable.setLinkInfo(statviewlink, "timeoutId", null)
                    }
                }
            }
            ))
        }
        ))
    },
    observer: function() {
        if (!_bsaViewable.isset(_bsaViewable._observer)) {
            const overlapThreshold = Object.values(_bsaViewable._iabViewablePercentages);
            const options = {
                threshold: overlapThreshold
            };
            _bsaViewable._observer = new IntersectionObserver(_bsaViewable.observerCallback,options)
        }
        return _bsaViewable._observer
    },
    observe: function(target) {
        if (_bsaViewable.shouldObserve(target)) {
            _bsaViewable.observer().observe(target)
        }
    },
    shouldObserve: function(target) {
        const imageTags = target.querySelectorAll("img[data-statview]");
        return Array.from(imageTags).some((function(imageTag) {
            return _bsaViewable.isset(imageTag) && imageTag.getAttribute("data-statview").length > 0
        }
        ))
    },
    maybeViewableAttr: function(ad, statviewlink) {
        if (ad.should_record_viewable === "1" || _bsaViewable.forceOn) {
            return ` data-statview="${statviewlink}" `
        }
        return ' data-no-statview="no" '
    }
};
var _carbonads = {
    _client: "carbon.js",
    _version: "20231113",
    _clientConfig: function() {
        const configParts = {
            protocol: this.getUrlVar("protocol"),
            cd: this.getUrlVar("cd"),
            serveUrl: this.getUrlVar("serve"),
            serve: this.getServe(this.getUrlVar("serve"), this.getUrlVar("placement")),
            format: this.getUrlVar("format")
        };
        const configString = Object.keys(configParts).reduce((function(strParts, key) {
            const configValue = configParts[key];
            if (configValue) {
                return strParts.concat([`${key}:${encodeURIComponent(configValue)}`])
            }
            return strParts
        }
        ), []).join(";");
        return "(" + configString + ")"
    },
    _headers: function() {
        return {
            "x-origin": window.location.toString(),
            "x-client": this._client + "/" + this._version + " " + this._clientConfig()
        }
    },
    _loadJson: function(url, callback) {
        const req = fetch(url, {
            headers: this._headers()
        });
        req.then((function(response) {
            return response.json()
        }
        )).then((function(json) {
            return callback(json)
        }
        )).catch((function(err) {
            console.log("Carbon ad connectivity issue!", url, "due to", err)
        }
        ))
    },
    _touchUrl: function(url) {
        const req = fetch(url, {
            headers: this._headers(),
            mode: "no-cors"
        });
        req.then((function(response) {
            return response
        }
        )).catch((function(err) {
            console.log("Carbon ad connectivity issue!", url, "due to", err)
        }
        ))
    },
    init: function(where, force_serve) {
        _carbon_where = null;
        if (where) {
            _carbon_where = where
        }
        var placement = this.getUrlVar("placement")
          , baseurl = this.srv()
          , protocol = this.getUrlVar("protocol") ? this.getUrlVar("protocol") + ":" : "https:"
          , serve = this.getServe(force_serve ? force_serve : this.getUrlVar("serve"), placement)
          , format = this.getUrlVar("format");
        var forceUrlPreview = this.getUrlVar("_bsa_url_preview", window.location.href);
        if (forceUrlPreview) {
            var previewData = JSON.parse(decodeURIComponent(forceUrlPreview));
            setTimeout((function() {
                _carbonads_go({
                    ads: [Object.assign({}, previewData, {
                        zonekey: serve,
                        format: format,
                        statlink: previewData.link.replace(/^(http:|https:)/gm, "")
                    }), {}]
                })
            }
            ), 0)
        } else {
            const element = _carbon_where || document.querySelector("#_carbonads_js");
            _bsaViewable.rootObserve(element, (function(viewable) {
                const baseUrl = `${protocol}//${baseurl}/ads/${serve}.json?segment=placement:${placement}`;
                const jsonSrc = _carbonads._buildSrvUrl(baseUrl, viewable);
                _carbonads._loadJson(jsonSrc, _carbonads_go)
            }
            ))
        }
    },
    _buildSrvUrl: function(base, viewable) {
        var forcebanner = this.getUrlVar("bsaforcebanner", window.location.href)
          , ignore = this.getUrlVar("bsaignore", window.location.href)
          , forwardedip = this.getUrlVar("bsaforwardedip", window.location.href)
          , ignoretargeting = this.getUrlVar("bsaignoretargeting", window.location.href);
        if (forcebanner) {
            base += "&forcebanner=" + forcebanner
        }
        if (ignore) {
            base += "&ignore=" + ignore
        }
        if (ignoretargeting) {
            base += "&ignoretargeting=" + ignore
        }
        if (forwardedip) {
            base += "&forwardedip=" + forwardedip
        }
        if (viewable) {
            base += "&v=" + viewable
        }
        var ck = "";
        try {
            ck = decodeURIComponent(document.cookie)
        } catch (e) {}
        var day = ck.indexOf("_bsap_daycap=")
          , life = ck.indexOf("_bsap_lifecap=");
        day = day >= 0 ? ck.substring(day + 12 + 1).split(";")[0].split(",") : [];
        life = life >= 0 ? ck.substring(life + 13 + 1).split(";")[0].split(",") : [];
        if (day.length || life.length) {
            var freqcap = [];
            for (var i = 0; i < day.length; i++) {
                var adspot = day[i];
                for (var found = -1, find = 0; find < freqcap.length && found == -1; find++)
                    if (freqcap[find][0] == adspot)
                        found = find;
                if (found == -1)
                    freqcap.push([adspot, 1, 0]);
                else
                    freqcap[found][1]++
            }
            for (var i = 0; i < life.length; i++) {
                var adspot = day[i];
                for (var found = -1, find = 0; find < freqcap.length && found == -1; find++)
                    if (freqcap[find][0] == adspot)
                        found = find;
                if (found == -1)
                    freqcap.push([adspot, 0, 1]);
                else
                    freqcap[found][2]++
            }
            for (var i = 0; i < freqcap.length; i++)
                freqcap[i] = freqcap[i][0] + ":" + freqcap[i][1] + "," + freqcap[i][2];
            if (freqcap.length)
                base += "&freqcap=" + encodeURIComponent(freqcap.join(";"))
        }
        return base
    },
    getServe: function(serve, placement) {
        var r = new Array;
        r["getbootstrapcom"] = "CKYIKKJL";
        r["fontawesome"] = "CKYIV5QM";
        r["vuetifyjscom"] = "CKYI5KQY";
        r["abuseipdbcomjw"] = "CKYIE53Y";
        r["stocksnapio"] = "CKYIV23Y";
        r["mongoosejscom"] = "CKYIL27I";
        r["semanticuicom"] = "CKYIKK7M";
        r["rubydocorg"] = "CKYIKKQN";
        r["joomlaorg"] = "CKYI553E";
        r["kkorgcooltools"] = "CKYICKJN";
        r["framework7io"] = "CKYIE5QJ";
        r["bestfolioscom"] = "CKYIV23I";
        r["tobiasahlincom"] = "CKYIEKQN";
        r["mindsparklemagcom"] = "CKYIV2JM";
        r["simpledesktopscom"] = "CKYIV53I";
        r["colormindio"] = "CKYIV27W";
        r["adonisjscom"] = "CKYIL23I";
        r["passportjsorg"] = "CKYI523M";
        r["pugjsorg"] = "CKYILKQ7";
        r["gormio"] = "CK7DTKJY";
        r["materialpalettecom"] = "CK7DTKJM";
        r["murzebe"] = "CKYIK27U";
        r["learnshayhowecom"] = "CKYILKJL";
        r["landbookcom"] = "CKYIP2QM";
        r["logobookcom"] = "CKYIV2QE";
        r["html2canvashertzencom"] = "CKYIL2JL";
        r["colorzillacomgradienteditor"] = "CK7DT23W";
        r["rvmio"] = "CKYI55QN";
        r["silviomoretogithubiobootstrapsel"] = "CKYIKK7I";
        r["cssreferenceio"] = "CKYIK2JU";
        r["searchcodecom"] = "CKYIEKQE";
        r["tachyonsio"] = "CKYIE2QU";
        r["mjtsaicom"] = "CKYIC53E";
        r["bradfrostwebcom"] = "CKYIV5QE";
        r["thecodebarbariancom"] = "CKYI5K3Y";
        r["coolx10com"] = "CKYIK2JM";
        r["csswizardrycom"] = "CKYIK5QI";
        r["bitsofcode"] = "CKYIL23L";
        r["gitguide"] = "CKYI5K3W";
        r["callmenickcom"] = "CKYI52J7";
        r["marksheetio"] = "CKYIE53J";
        r["saedsayadcom"] = "CKYIL5QI";
        r["alertifyjs"] = "CKYI55QJ";
        r["sourcemakingcom"] = "CK7DTKJJ";
        r["colorzillacom"] = "CKYIK53N";
        r["muicsscom"] = "CKYIL5QW";
        r["glebbahmutovcom"] = "CKYI5K7U";
        r["bloggetbootstrapcom"] = "CKYIKKJJ";
        r["baconipsumcom"] = "CKYIPKJU";
        r["signature"] = "CKYIC5QU";
        r["drushcommandscom"] = "CKYIE27N";
        r["cubicbeziercom"] = "CKYIPKJ7";
        r["syntaxdbcom"] = "CKYILK3I";
        r["listjscom"] = "CKYIKK7W";
        r["learninglaravel"] = "CKYI527J";
        r["blivesta"] = "CKYI5K7I";
        r["ohshitgitcom"] = "CK7DTKQE";
        r["frontendfrontcom"] = "CKYIEKJU";
        r["hiliosgithubiojQuerycountdown"] = "CKYIEKJM";
        r["sassmeister"] = "CKYIK2JN";
        r["mockitoorg"] = "CKYIL5QY";
        r["ponyfoocom"] = "CKYI553L";
        r["pxlnv"] = "CKYICKJW";
        r["tutorialzinecom"] = "CKYIK5QM";
        r["flexboxgridcom"] = "CKYILK3N";
        r["milligramgithubio"] = "CKYIE23J";
        r["uispacenet"] = "CKYIVK7E";
        r["wildlyinaccuratecom"] = "CKYIKK3U";
        r["htmlreferenceio"] = "CKYI553U";
        r["realisticshots"] = "CKYIPK37";
        r["wowwebcouk"] = "CKYIP237";
        r["astronautwebco"] = "CKYIK23W";
        r["botmanio"] = "CKYI52QL";
        r["deanattalicom"] = "CKYIL5Q7";
        r["numeraljscom"] = "CKYIKK7Y";
        r["leaveroume"] = "CKYIK5QN";
        r["glotio"] = "CKYIE2JM";
        r["davepaquettecom"] = "CK7DTKJN";
        r["zealdocsorg"] = "CKYIE53W";
        r["catalinred"] = "CKYIE2QY";
        r["graineditcom"] = "CKYIPK3M";
        r["materialthemecom"] = "CK7DT23I";
        r["worktimercouk"] = "CKYIC2JM";
        r["osvaldasinfo"] = "CKYI5K77";
        r["codrops"] = "CKYIK53I";
        r["bootflat"] = "CKYI5KJY";
        r["littlesnippetsnet"] = "CKYIEK7W";
        r["dpilv"] = "CKYIPK7N";
        r["jaysalvatcom"] = "CKYI5K7M";
        r["pushjsorg"] = "CKYI553I";
        r["logospirecom"] = "CKYIP23J";
        r["wwwsiiimplecom"] = "CKYIPK3J";
        r["hugogiraudelcom"] = "CKYIKKQY";
        r["basscsscom"] = "CKYIPKQN";
        r["jquerycardscom"] = "CKYIE23I";
        r["sketchshortcutscom"] = "CKYIPKJY";
        r["js2coffee"] = "CKYI553W";
        r["aisleonenet"] = "CKYIV53W";
        r["discordserverscom"] = "CK7DTKQJ";
        r["coolphptoolscom"] = "CKYIE27Y";
        r["perfectionkillscom"] = "CKYIKK3L";
        r["degoesnet"] = "CKYIC53J";
        r["sketchapprocks"] = "CKYIP2JE";
        r["jxnblkcom"] = "CKYIPKQM";
        r["githubcombevacqua"] = "CKYI5KJW";
        r["1000hzgithubio"] = "CKYIE5QM";
        r["pastiebincom"] = "CKYI5277";
        r["colintohcom"] = "CKYIEKQY";
        r["cssguidelines"] = "CKYIK53L";
        r["simonholywellcom"] = "CKYIK23E";
        r["gedblogcom"] = "CKYIV5QL";
        r["clusterizejsorg"] = "CKYIE53N";
        r["resourcecardscom"] = "CKYIP2QI";
        r["imagehoverio"] = "CKYIL2JM";
        r["polrprojectorg"] = "CK7DTK7W";
        r["fittextjscom"] = "CKYIK27M";
        r["visualizingeconomicscom"] = "CKYIC237";
        r["css3testcom"] = "CKYIEK7U";
        r["trentwaltoncom"] = "CKYI52QM";
        r["thenewsprint"] = "CKYICKJJ";
        r["mclearcouk"] = "CKYIVK37";
        r["scoopthemes"] = "CKYIK2JE";
        r["mrmrsio"] = "CKYIPKQI";
        r["bitshadowgithubio"] = "CKYILK7E";
        r["inspirationmobiletumblrcom"] = "CKYIPKJJ";
        r["thinkandbuildit"] = "CKYIKK77";
        r["usabilitycountscom"] = "CKYIC27L";
        r["blogeppzeu"] = "CKYIEKQI";
        r["responsivebp"] = "CKYIK2QM";
        r["philgrcom"] = "CKYIK237";
        r["iconfindercom"] = "CKYIP5QI";
        r["emmetreview"] = "CKYIE23Y";
        r["davidwalshname"] = "CKYI5KQL";
        r["codedailyio"] = "CKYIEK7J";
        r["krasimirtsonevcom"] = "CKYIE2QI";
        r["saeedalipoorgithubioicono"] = "CKYIK53W";
        r["jmarbachcom"] = "CKYICKQM";
        r["blogtdwrightcouk"] = "CK7DT2QL";
        r["aspectratio"] = "CK7DTKQI";
        r["chriswhartonme"] = "CKYILKJM";
        if (this.isset(r[placement]) && (serve == "CVYD42T" || serve == "CVYD42E" || serve == "C6AILKT"))
            return r[placement];
        else if (serve == "CVYD42T" || serve == "CVYD42E" || serve == "C6AILKT")
            return "CKYICKQI";
        else
            return serve
    },
    getUrlVar: function(name, target) {
        target = typeof target !== "undefined" ? target : document.getElementById("_carbonads_js").src,
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(target);
        if (results == null)
            return "";
        else
            return results[1]
    },
    ensureHttpsLink: function(link) {
        return link.startsWith("//") ? `https:${link}` : link
    },
    isset: function(v) {
        return typeof v !== "undefined" && v != null
    },
    nonempty: function(v) {
        return this.isset(v) && v != ""
    },
    refresh: function() {
        _carbonads.gotback = false;
        const el = document.getElementById("carbonads");
        this.remove(document.getElementById("_carbonads_projs"));
        this.remove(el);
        this.init()
    },
    reload: function(where, force_serve) {
        _carbonads.gotback = false;
        this.remove(document.getElementById("_carbonads_projs"));
        this.init(where, force_serve)
    },
    remove: function(el) {
        if (typeof el !== "undefined" && el != null)
            el.parentNode.removeChild(el)
    },
    srv: function() {
        if (_carbonads.SRV_OVERRIDE) {
            return _carbonads.SRV_OVERRIDE
        }
        const baseurl = this.getUrlVar("cd") ? this.getUrlVar("cd") : "srv.carbonads.net";
        return baseurl
    },
    htmlEncode: function(v) {
        return v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;")
    },
    hexToRgba: function(hex, alpha=1) {
        const [r,g,b] = [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
    },
    prepareAdUrl: function({statlink: statlink, fallbackLink: fallbackLink}, placement) {
        const baseLink = _carbonads.ensureHttpsLink(statlink || fallbackLink).replace(/srv.buysellads.com/g, _carbonads.srv());
        return _carbonads.applyTimestampToUrl(baseLink)
    },
    prepareAdProps: function(ad) {
        const placement = _carbonads.getUrlVar("placement");
        const requiredCarbonCoverKeys = ["backgroundColor", "callToAction", "company", "companyTagline", "logo", "largeImage"];
        const isCarbonCoverSupported = requiredCarbonCoverKeys.every((key=>key in ad));
        const availableFormat = isCarbonCoverSupported ? ["cover", "responsive"] : ["responsive"];
        const customCssTemplate = _carbonads.isset(ad.custom_css) ? `<style>${ad.custom_css}</style>` : "";
        const statview = _bsaViewable.maybeViewableAttr(ad, _carbonads.isset(ad.statview) ? ad.statview + "?segment=placement:" + placement : "");
        const image = ad.image;
        const description = ad.description || ad.title;
        const creativeIdClass = "creativeId-" + ad.creativeid;
        const fulllink = _carbonads.prepareAdUrl(ad, placement);
        const largeImage = ad.largeImage;
        const logo = ad.logo;
        const smallImage = ad.smallImage;
        return {
            availableFormat: availableFormat,
            backgroundColor: ad.backgroundColor,
            callToAction: ad.callToAction,
            company: ad.company,
            companyTagline: ad.companyTagline,
            creativeIdClass: creativeIdClass,
            customCssTemplate: customCssTemplate,
            description: description,
            fulllink: fulllink,
            image: ad.image,
            smallImage: ad.smallImage,
            largeImage: ad.largeImage,
            logo: ad.logo,
            placement: placement,
            statview: statview
        }
    },
    appendPixelToElement: function(pixel, el) {
        if (typeof pixel != "undefined") {
            const pixelContainer = document.createElement("div");
            pixelContainer.className = "carbon-pixels";
            pixelContainer.style.display = "none";
            const pixels = pixel.split("||");
            for (let j = 0; j < pixels.length; j++) {
                const pix = document.createElement("img");
                pix.src = _carbonads.applyTimestampToUrl(pixels[j]);
                pix.border = "0";
                pix.height = "1";
                pix.width = "1";
                pix.style.display = "none";
                pix.alt = "ads via Carbon";
                pixelContainer.appendChild(pix)
            }
            el.appendChild(pixelContainer)
        }
    },
    getFormatElement: function(format, adProperties) {
        switch (format) {
        case "cover":
            return adProperties.availableFormat.includes("cover") ? _carbonads.formats.cover(adProperties) : _carbonads.formats.responsive(adProperties);
        case "responsive":
            return _carbonads.formats.responsive(adProperties);
        default:
            return _carbonads.formats.classic(adProperties)
        }
    },
    applyTimestampToUrl: function(url) {
        const time = Math.round(Date.now() / 1e4) | 0;
        return url.replace("[timestamp]", time)
    },
    loadOptimize: function(fallbackOptimizePlacementId, fallbackOptimizeScriptSrvPath) {
        const fallbackOptimizeEl = document.createElement("div");
        fallbackOptimizeEl.id = fallbackOptimizePlacementId;
        document.querySelector("#_carbonads_js").insertAdjacentElement("afterend", fallbackOptimizeEl);
        const optimizeScriptSrvFullPath = `https://cdn4.buysellads.net${fallbackOptimizeScriptSrvPath}?` + (new Date - new Date % 6e5);
        const existingOptimizeScript = document.querySelector(`script[src="${optimizeScriptSrvFullPath}"]`);
        if (existingOptimizeScript) {
            existingOptimizeScript.onload = function() {
                window.optimize.queue.push((()=>{
                    window.optimize.push(fallbackOptimizePlacementId)
                }
                ))
            }
        } else {
            const fallbackOptimizeScript = document.createElement("script");
            fallbackOptimizeScript.type = "text/javascript";
            fallbackOptimizeScript.id = "_optimize_js";
            fallbackOptimizeScript.async = true;
            fallbackOptimizeScript.src = optimizeScriptSrvFullPath;
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(fallbackOptimizeScript)
        }
    },
    injectCssBasedOnWidth: function(el, format) {
        if (format === "cover" && el.clientWidth < 360) {
            const carbonCoverVerticalCss = `<style>#carbon-cover > a:first-child{aspect-ratio:unset}#carbon-cover .carbon-large-image{width:unset;max-width:100%}#carbon-cover a:hover .carbon-large-image{width:unset}#carbon-cover .carbon-logo{row-gap:1ch;min-height:unset}#carbon-cover .carbon-text{row-gap:1ch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:unset}#carbon-cover .carbon-tagline{min-height:unset;max-inline-size:unset}#carbon-cover .carbon-description{-webkit-box-flex:unset;-ms-flex-positive:unset;flex-grow:unset;line-height:1.4;opacity:unset}#carbon-cover .carbon-cta{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;text-align:center}</style>`;
            el.insertAdjacentHTML("beforeend", carbonCoverVerticalCss)
        }
    },
    formats: {
        classic: function({backgroundColor: backgroundColor, customCssTemplate: customCssTemplate, description: description, fulllink: fulllink, logo: logo, smallImage: smallImage, placement: placement, statview: statview}) {
            const el = document.createElement("span");
            el.innerHTML = `\n${customCssTemplate}\n<span class="carbon-wrap">\n\t<a href="${_carbonads.htmlEncode(fulllink)}" class="carbon-img" target="_blank" rel="noopener sponsored">\n\t\t<img src="${_carbonads.isset(smallImage) ? smallImage : logo}" alt="ads via Carbon" border="0" ${_carbonads.isset(backgroundColor) && _carbonads.isset(logo) ? `style="background:${_carbonads.htmlEncode(backgroundColor)};width:100px;padding: 30px 15px;box-sizing: content-box;"` : 'height="100" width="130"'} ${statview} />\n\t</a>\n\t<a href="${_carbonads.htmlEncode(fulllink)}" class="carbon-text" target="_blank" rel="noopener sponsored">\n\t\t ${_carbonads.htmlEncode(description)}\n\t</a>\n</span>\n<a href="http://carbonads.net/?utm_source=${_carbonads.htmlEncode(placement)}&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon"\nclass="carbon-poweredby"\ntarget="_blank" rel="noopener sponsored">ads via Carbon</a>\n`;
            return el
        },
        responsive: function({backgroundColor: backgroundColor, customCssTemplate: customCssTemplate, description: description, fulllink: fulllink, smallImage: smallImage, logo: logo, placement: placement, statview: statview}) {
            const carbonResponsiveCss = `#carbon-responsive a,#carbon-responsive a:hover{color:var(--carbon-text-color)}#carbon-responsive *{margin:unset;padding:unset;line-height:unset}#carbon-responsive{--carbon-padding:1em;--carbon-max-char:20ch;--carbon-bg-primary:hsl(0, 0%, 98%);--carbon-bg-secondary:hsl(0, 0%, 92%);--carbon-text-color:hsl(0, 0%, 20%);font-size:14px;font-family:system-ui,sans-serif;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;min-inline-size:130px;max-inline-size:400px;gap:1ex;line-height:1.5}#carbon-responsive .carbon-responsive-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:var(--carbon-padding);gap:var(--carbon-padding);border:solid 1px var(--carbon-bg-secondary);background-color:var(--carbon-bg-primary)}#carbon-responsive a{text-decoration:none}#carbon-responsive .carbon-img{-webkit-box-flex:0;-ms-flex:0 0 130px;flex:0 0 130px}#carbon-responsive .carbon-img img{display:block}#carbon-responsive .carbon-text{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:var(--carbon-max-char);flex-basis:var(--carbon-max-char);line-height:1.4;text-align:left}#carbon-responsive .carbon-poweredby{font-size:.85em;text-align:right;opacity:.5}`;
            const el = document.createElement("div");
            el.id = "carbon-responsive";
            el.innerHTML = `\n<style>\n${carbonResponsiveCss}\n</style>\n${customCssTemplate}\n<div class="carbon-responsive-wrap">\n\t<a href="${_carbonads.htmlEncode(fulllink)}" class="carbon-img" target="_blank" rel="noopener sponsored">\n\t\t\t<img src="${_carbonads.isset(smallImage) ? smallImage : logo}" alt="ads via Carbon" border="0" ${_carbonads.isset(backgroundColor) && _carbonads.isset(logo) ? `style="background:${_carbonads.htmlEncode(backgroundColor)};width:100px;padding: 30px 15px;box-sizing: content-box;"` : 'height="100" width="130"'} ${statview} />\n\t\t</a>\n\t\t<a href="${fulllink}" class="carbon-text" target="_blank" rel="noopener sponsored">\n\t\t\t ${_carbonads.htmlEncode(description)}\n\t\t</a>\n</div>\n<a href="http://carbonads.net/?utm_source=${_carbonads.htmlEncode(placement)}&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon"\nclass="carbon-poweredby" target="_blank" rel="noopener sponsored">ads via Carbon</a>\n`;
            return el
        },
        cover: function({backgroundColor: backgroundColor, callToAction: callToAction, company: company, companyTagline: companyTagline, creativeIdClass: creativeIdClass, customCssTemplate: customCssTemplate, description: description, fulllink: fulllink, largeImage: largeImage, logo: logo, placement: placement, statview: statview}) {
            const bgRgba = _carbonads.hexToRgba(backgroundColor, .8);
            const carbonCoverCss = `#carbon-cover,#carbon-cover .carbon-logo,#carbon-cover .carbon-main,#carbon-cover>a:first-child{display:-webkit-box;display:-ms-flexbox}#carbon-cover,#carbon-cover .carbon-logo,#carbon-cover .carbon-main,#carbon-cover .carbon-text{-webkit-box-orient:vertical;-webkit-box-direction:normal}#carbon-cover *{margin:initial;padding:initial;line-height:initial}#carbon-cover button{margin:0;padding:0;border:none;outline:0;background:0 0;color:inherit;font:inherit;cursor:pointer}#carbon-cover .carbon-visually-hidden{clip:rect(0 0 0 0);position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;border:0;white-space:nowrap}#carbon-cover{--carbon-font-family:system-ui;--carbon-font-size:14px;--carbon-shadow:0 0 1px hsl(0deg 0% 0% / 0.085),0 0 2px hsl(0deg 0% 0% / 0.085),0 0 4px hsl(0deg 0% 0% / 0.085),0 0 8px hsl(0deg 0% 0% / 0.085);--carbon-icon-size:0.75em;display:flex;z-index:10;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;max-inline-size:400px;font-size:var(--carbon-font-size);font-family:var(--carbon-font-family)}#carbon-cover>a:first-child{display:flex;z-index:2;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:5%;overflow:hidden;gap:2ch;border-radius:6px;-webkit-box-shadow:var(--carbon-shadow);box-shadow:var(--carbon-shadow);text-decoration:none}#carbon-cover>a:first-child::after,#carbon-cover>a:first-child::before{position:absolute;inset:0;content:""}#carbon-cover>a::before{z-index:0;background-position:center;background-size:cover;background-repeat:no-repeat}#carbon-cover>a::after{z-index:1;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);content:""}#carbon-cover>a>*{z-index:3}#carbon-cover .carbon-main{display:flex;row-gap:1ch;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:calc(100% - 250px);flex-basis:calc(100% - 250px);-ms-flex-direction:column;flex-direction:column;color:#fff}#carbon-cover .carbon-logo{display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;min-height:72px}#carbon-cover .carbon-logo img{max-width:125px;height:auto}#carbon-cover .carbon-tagline{max-inline-size:16ch;margin-top:auto;font-weight:500;line-height:1.3}#carbon-cover .carbon-text{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;height:100px}#carbon-cover .carbon-description{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-inline-size:54ch;font-size:.9em;line-height:1.35;overflow:hidden}#carbon-cover .carbon-cta{padding:1ex 1ch;border-radius:3px;background:#fff;-webkit-box-shadow:var(--carbon-shadow);box-shadow:var(--carbon-shadow);color:#111;font-weight:600}#carbon-cover .carbon-large-image{display:block;width:50%;max-inline-size:250px;border-radius:5px;-webkit-box-shadow:var(--carbon-shadow);box-shadow:var(--carbon-shadow)}#carbon-cover a:hover .carbon-large-image{width:20%}#carbon-cover .carbon-footer{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-column-gap:1ch;-moz-column-gap:1ch;column-gap:1ch;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;width:100%;-webkit-margin-before:0.75ex;margin-block-start:0.75ex;color:#7f7f7f;text-decoration:none}#carbon-cover .carbon-footer a{color:#b2b2b2;text-decoration:none}#carbon-cover .carbon-footer button{display:-ms-grid;display:grid;place-content:center;padding:.5ch;border-radius:3px;background-color:#f2f2f2}#carbon-cover .carbon-footer button:hover{background-color:#e5e5e5;-webkit-transition:background-color .2s ease-in-out;-o-transition:background-color .2s ease-in-out;transition:background-color .2s ease-in-out}#carbon-cover button>svg{stroke:hsl(0,0%,70%);stroke-width:3;width:var(--carbon-icon-size);height:var(--carbon-icon-size)}#carbon-cover .carbon-via{margin-left:auto;font-size:.9em}#carbon-cover .carbon-footer a.carbon-no-hover .carbon-share{display:none;position:relative}#carbon-cover .carbon-share-icon:not(.carbon-no-hover):hover+.carbon-share,#carbon-cover .carbon-share:hover{z-index:3;opacity:1}#carbon-cover .carbon-share-icon:not(.carbon-no-hover):hover::before{display:block;z-index:2;position:absolute;top:-10px;width:14ch;height:5ex;content:""}#carbon-cover .carbon-share{position:absolute;bottom:calc(var(--carbon-icon-size) + 14px);left:0;padding:.2em;border:1px solid #ccc;border-radius:5px;background-color:#fff;-webkit-box-shadow:var(--carbon-shadow);box-shadow:var(--carbon-shadow);opacity:0;-webkit-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}#carbon-cover .carbon-share ul{padding:.5em;color:#212121;font-weight:500;font-size:12px;list-style-type:none}#carbon-cover .carbon-share ul>*+*{margin-top:10px}#carbon-cover .carbon-description{opacity:0;-webkit-transition:opacity .1s ease-out;-o-transition:opacity .1s ease-out;transition:opacity .1s ease-out}#carbon-cover a:hover .carbon-description{opacity:1;-webkit-transition:opacity .5s ease-in .25s;-o-transition:opacity .5s ease-in .25s;transition:opacity .5s ease-in .25s}#carbon-cover .carbon-large-image{-webkit-transition:width .25s ease-in-out;-o-transition:width .25s ease-in-out;transition:width .25s ease-in-out}#carbon-cover .carbon-main{-webkit-transition:opacity 10ms ease-in-out;-o-transition:opacity 10ms ease-in-out;transition:opacity 10ms ease-in-out}@property --reveal-mask{syntax:"<percentage>";initial-value:0%;inherits:false}#carbon-cover .carbon-reveal{-webkit-animation:var(--reveal-duration,1.5s) var(--reveal-delay,0s) carbon-reveal forwards;animation:var(--reveal-duration,1.5s) var(--reveal-delay,0s) carbon-reveal forwards;-webkit-mask-image:-webkit-gradient(linear,left top,left bottom,from(var(--reveal-angle,135deg)),color-stop(black),to(transparent));-webkit-mask-image:linear-gradient(var(--reveal-angle,135deg),black calc(var(--reveal-mask) - 100%),transparent var(--reveal-mask))}@-webkit-keyframes carbon-reveal{100%,70%{--reveal-mask:200%}}@keyframes carbon-reveal{100%,70%{--reveal-mask:200%}}@media (max-width:360px){#carbon-cover>a:first-child{aspect-ratio:unset}#carbon-cover .carbon-large-image{width:unset;max-width:100%}#carbon-cover a:hover .carbon-large-image{width:unset}#carbon-cover .carbon-logo{row-gap:1ch;min-height:unset}#carbon-cover .carbon-text{row-gap:1ch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;height:unset}#carbon-cover .carbon-tagline{min-height:unset;max-inline-size:unset}#carbon-cover .carbon-description{-webkit-box-flex:unset;-ms-flex-positive:unset;flex-grow:unset;line-height:1.4;opacity:unset}#carbon-cover .carbon-cta{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;text-align:center}}`;
            const carbonCoverHtml = `\n\t\t\t<style>\n\t\t\t\t${carbonCoverCss}\n\t\t\t\t.${creativeIdClass} > a:first-child::after {\n\t\t\t\t\tbackground-color: ${bgRgba};\n\t\t\t\t}\n\t\t\t\t.${creativeIdClass} > a:first-child::before {\n\t\t\t\t\tbackground-image: url('${largeImage}')\n\t\t\t\t}\n\t\t\t</style>\n\t\t\t${customCssTemplate}\n\t\t\t<img class="carbon-large-image" src="${largeImage}" alt="${_carbonads.htmlEncode(company)}" border="0" ${statview} />\n\t\t\t<div class="carbon-main">\n\t\t\t\t<div class="carbon-logo">\n\t\t\t\t\t<img src="${logo}" alt="" border="0" />\n\t\t\t\t\t<div class="carbon-tagline">${_carbonads.htmlEncode(companyTagline)}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="carbon-text">\n\t\t\t\t\t<div class="carbon-description">${_carbonads.htmlEncode(description)}</div>\n\t\t\t\t\t<div class="carbon-cta">${_carbonads.htmlEncode(callToAction)}</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`;
            const carbonFooterHtml = `\n\t\t\t<button class="carbon-share-icon">\n\t\t\t\t<span class="carbon-visually-hidden">Share Carbon Ad Icon</span>\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>\n\t\t\t</button>\n\t\t\t<div class="carbon-share">\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href="#" id="carbonCopyLink">Copy Link</a></li>\n\t\t\t\t\t<li><a href="#" id="carbonEmailLink">Send via email</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<button id="carbon-refresh">\n\t\t\t\t<span class="carbon-visually-hidden">Refresh Carbon Ad</span>\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>\n\t\t\t</button>\n\t\t\t<a class="carbon-via"\n\t\t\t\thref="http://carbonads.net/?utm_source=${placement}&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon"\n\t\t\t\trel="noopener sponsored"\n\t\t\t\t>ads via Carbon</a\n\t\t\t>\n\t\t\t`;
            const carbonCoverEl = document.createElement("a");
            carbonCoverEl.href = fulllink;
            carbonCoverEl.rel = "noopener sponsored";
            carbonCoverEl.target = "_blank";
            carbonCoverEl.className = "carbon-reveal";
            carbonCoverEl.innerHTML = carbonCoverHtml;
            const carbonFooterEl = document.createElement("div");
            carbonFooterEl.className = "carbon-footer";
            carbonFooterEl.innerHTML = carbonFooterHtml;
            const el = document.createElement("div");
            el.appendChild(carbonCoverEl);
            el.appendChild(carbonFooterEl);
            el.id = "carbon-cover";
            el.classList.add(creativeIdClass);
            return el
        },
        _addEventListeners: function(ad, format) {
            const {company: company, companyTagline: companyTagline, description: description, fulllink: fulllink} = ad;
            if (format === "cover") {
                const carbonRefreshButton = document.querySelector("#carbon-refresh");
                if (carbonRefreshButton) {
                    carbonRefreshButton.addEventListener("click", (()=>{
                        _carbonads.refresh()
                    }
                    ))
                }
                if (navigator.share) {
                    const carbonShareButton = document.querySelector(".carbon-share-icon");
                    if (carbonShareButton) {
                        carbonShareButton.classList.add("carbon-no-hover");
                        carbonShareButton.addEventListener("click", (function() {
                            navigator.share({
                                title: "Carbon Ad for " + company,
                                text: company + "\n" + companyTagline + "\n" + description,
                                url: fulllink
                            }).catch((error=>{
                                console.log("Error sharing", error)
                            }
                            ))
                        }
                        ))
                    }
                } else {
                    const carbonCopyLinkButton = document.getElementById("carbonCopyLink");
                    const carbonEmailLinkButton = document.getElementById("carbonEmailLink");
                    if (carbonCopyLinkButton && carbonEmailLinkButton) {
                        carbonCopyLinkButton.addEventListener("click", (function(e) {
                            e.preventDefault();
                            const textArea = document.createElement("textarea");
                            textArea.value = fulllink;
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand("Copy");
                            textArea.remove()
                        }
                        ));
                        carbonEmailLinkButton.addEventListener("click", (function(e) {
                            e.preventDefault();
                            const subject = "Carbon Ad for " + company;
                            const body = `${company}\n${companyTagline}\n${description}\n${fulllink}`;
                            window.location.href = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body)
                        }
                        ))
                    }
                }
            }
        }
    }
};
function _carbonads_go(b) {
    if (!b)
        return;
    const format = _carbonads.getUrlVar("format");
    const placement = _carbonads.getUrlVar("placement");
    const ad = b["ads"][0];
    if (!_carbonads.nonempty(ad.statlink) && (!(_carbonads.nonempty(ad.fallbackImage) && _carbonads.nonempty(ad.fallbackLink) && _carbonads.nonempty(ad.fallbackTitle)) || !_carbonads.nonempty(ad.fallbackZoneKey)) && !(_carbonads.nonempty(ad.fallbackImage) && _carbonads.nonempty(ad.fallbackLink) && _carbonads.nonempty(ad.fallbackTitle))) {
        if (_carbonads.isset(ad.fallbackOptimizePlacementId)) {
            _carbonads.loadOptimize(ad.fallbackOptimizePlacementId, ad.fallbackOptimizeScriptSrvPath);
            return
        }
        var fallbackKey = _carbonads.nonempty(ad.fallbackZoneKey) ? ad.fallbackZoneKey : "CK7DT53I";
        if (_carbonads.gotback === fallbackKey) {
            return
        }
        _carbonads.gotback = fallbackKey;
        var fallbackSrc = _carbonads._buildSrvUrl("https://" + _carbonads.srv() + "/ads/" + fallbackKey + ".json?segment=placement:" + placement);
        if (ad.fallbackTitle !== "hide") {
            if (_carbonads.isset(ad.custom_css)) {
                const customCssEl = document.createElement("style");
                customCssEl.innerHTML = ad.custom_css;
                document.querySelector("#_carbonads_js").appendChild(customCssEl)
            }
            _carbonads._loadJson(fallbackSrc, _carbonads_go)
        }
        return
    }
    const fallbackAd = {
        backgroundColor: ad.fallbackBackgroundColor,
        callToAction: ad.fallbackCallToAction,
        company: ad.fallbackCompany,
        companyTagline: ad.fallbackCompanyTagline,
        fallbackLink: ad.fallbackLink,
        smallImage: ad.fallbackImage,
        largeImage: ad.fallbackLargeImage,
        logo: ad.fallbackLogo,
        title: ad.fallbackTitle
    };
    const adProperties = _carbonads.nonempty(ad.statlink) ? _carbonads.prepareAdProps(ad) : _carbonads.prepareAdProps(fallbackAd);
    var n = document.getElementsByClassName("carbon-wrap");
    var fdiv = document.createElement("div");
    fdiv.id = n.length > 0 ? "carbonads_" + n.length : "carbonads";
    const carbonEl = _carbonads.getFormatElement(format, adProperties);
    fdiv.appendChild(carbonEl);
    _carbonads.appendPixelToElement(ad.pixel, carbonEl);
    _bsaViewable.observe(carbonEl);
    var carbonjs = document.getElementById("_carbonads_js");
    if (carbonjs != null) {
        if (_carbonads.isset(_carbon_where)) {
            _carbon_where.appendChild(fdiv)
        } else {
            carbonjs.parentNode.insertBefore(fdiv, carbonjs.nextSibling)
        }
    }
    var mw = document.querySelectorAll(".carbon-img > img");
    for (var i = 0; i < mw.length; i++)
        mw[i].style.maxWidth = "130px";
    _carbonads.injectCssBasedOnWidth(carbonEl, format);
    _bsap_serving_callback(ad.bannerid, ad.zonekey, ad.freqcap);
    if (_carbonads.nonempty(ad.fallbackTitle) && !_carbonads.nonempty(ad.statlink)) {
        document.querySelector(".carbon-poweredby")?.remove();
        document.querySelector(".carbon-via")?.remove();
        if (ad.fallbackTitle === "hide")
            _carbonads.remove(document.getElementById("carbonads"))
    }
    _carbonads.formats._addEventListeners(adProperties, format)
}
_carbonads.init();
window["_bsap_serving_callback"] = function(banner, zone, freqcap) {
    var append = function(w, data, days) {
        var c = document.cookie
          , i = c.indexOf(w + "=")
          , existing = i >= 0 ? c.substring(i + w.length + 1).split(";")[0] + "%2C" : ""
          , d = new Date;
        d.setTime(days * 36e5 + d);
        data = existing + data;
        data = data.substring(0, 2048);
        document.cookie = w + "=" + data + "; expires=" + d.toGMTString() + "; SameSite=Lax; path=/"
    };
    if (freqcap) {
        append("_bsap_daycap", banner, 1);
        append("_bsap_lifecap", banner, 365)
    }
}
;
