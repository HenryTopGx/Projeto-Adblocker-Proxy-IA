(()=>{
    var cn = Object.create;
    var Ee = Object.defineProperty;
    var ln = Object.getOwnPropertyDescriptor;
    var hn = Object.getOwnPropertyNames;
    var dn = Object.getPrototypeOf
      , xn = Object.prototype.hasOwnProperty;
    var $ = (g,t)=>()=>(g && (t = g(g = 0)),
    t);
    var ae = (g,t)=>()=>(t || g((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , at = (g,t)=>{
        for (var e in t)
            Ee(g, e, {
                get: t[e],
                enumerable: !0
            })
    }
      , un = (g,t,e,i)=>{
        if (t && typeof t == "object" || typeof t == "function")
            for (let s of hn(t))
                !xn.call(g, s) && s !== e && Ee(g, s, {
                    get: ()=>t[s],
                    enumerable: !(i = ln(t, s)) || i.enumerable
                });
        return g
    }
    ;
    var ne = (g,t,e)=>(e = g != null ? cn(dn(g)) : {},
    un(t || !g || !g.__esModule ? Ee(e, "default", {
        value: g,
        enumerable: !0
    }) : e, g));
    var Z, P = $(()=>{
        Z = {
            adskeeper: `<div class="mgheader">
	<span class="mghead">%WIDGET_TITLE%</span>
	<div class="mg_addad%id">
		<a href="//widgets.adskeeper.com/%utm%id" target="_blank">
			<img src="//cdn.adskeeper.co.uk/images/adskeeper_svg.svg" width="71" height="16" alt />
		</a>
	</div>
</div>
<style>
	.mghead {
        line-height: 20px;
        vertical-align: middle;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        text-align: left;
        font-family: Verdana, sans-serif;
        color: #4555a7;
        display: block;
        margin: 0 0 0px 5px;
        float: left;
    }
	.mgheader {
        display: table !Important;
        width: 100% !important;
    }

    div.mg_addad%id {
        text-align: right;
        opacity: 0.5;
        margin-right: 10px;
        display: inline-block;
        float: right;
    }

    div.mg_addad%id:hover {
        opacity: 1
    }

    div.mg_addad%id a {
        color: #000000;
        font: normal 10px Myriad Pro;
        text-decoration: none;
    }

    div.mg_addad%id img {
        margin: 0px -5px 0px 0px;
        border: 0px;
        float: none;
        padding: 0px;
    }
</style>

`
        }
    }
    );
    var K, B = $(()=>{
        K = {}
    }
    );
    var j, L = $(()=>{
        j = ["make cl[i1!]ck", "(cl[i!1]ck|cl[i!1]que|kl[i!1]kone|shtyp|kl[i!1]k|kl[i!1]kn[i!1]\u0435e) ((on|[i!1]n the) )?(h[e3]re|me|please|ads|to|en cualqu[i!1]er anunc[i!1]o|qu\u1EA3ng c\xE1o|na [i!1]megen|nje nga reklamat|no an\xFAnc[i!1]o|reklamen|em alguma propaganda|[i!1]klan atan|below banner)", "pres[i1!]ona \u0441ualqu[i1!]er [i1!]magen", "toca la pr[i1!]mera [i1!]magen ", "(cl[i!1]ck|cl[i!1]que|kl[i!1]kone|shtyp|kl[i!1]k|kl[i!1]kn[i!1]\u0435e) ((on|[i!1]n the) )?([i!1]zpod)", "adclick", "criteo.com", "cdn.geozo.com", "taboola", "trck.tracking505.com"]
    }
    );
    var J, A = $(()=>{
        J = {
            "[GO]": "IR",
            "[INFORMER_BACK_BUTTON_BANNER_TEXT]": "Mais hist\xF3rias para conferir antes de ir",
            "[INFORMER_BTN_DISCOVER_MORE]": "Discover More",
            "[INFORMER_BUTTON_MORE]": "Mais",
            "[INFORMER_CLOSE_AD_BUTTON]": "An\xFAncio fechado",
            "[INFORMER_CTA_LEARN_MORE]": "Leia mais",
            "[INFORMER_DSA_ICON_TITLE]": "Widget Context Menu",
            "[INFORMER_OPEN_BUTTON]": "Aberto",
            "[INFORMER_VIDEO_CLICK_TEXT]": "Saiba mais",
            "[LS_CAB_SITE_BLOCK_ANTIFRAUD_SUBJECT_V2]": "Seu site %s foi bloqueado (%s)",
            "[LS_INFORMERS_CLOSE_BUTTON]": "Fechar",
            "[LS_INFORMERS_MOBILEMODAL_GO]": "Go",
            "[LS_INFORMERS_WIDGET_MOBILE_CONTINUE]": "Continue",
            "[WIDGET_TITLE_CHECK_THIS_OUT]": "Veja isso",
            "[WIDGET_TITLE_INTERESTING]": "Interessante na rede",
            "[WIDGET_TITLE_INTERESTING_FOR_YOU]": "Interessante para voc\xEA",
            "[WIDGET_TITLE_MORE_COOL_STUFF]": "Mais coisas legais",
            "[WIDGET_TITLE_MORE_FROM_AROUND_THE_WEB]": "Mais da Web",
            "[WIDGET_TITLE_PARTNERS_NEWS]": "Not\xEDcias de Parceiros",
            "[WIDGET_TITLE_POPULAR]": "Popular na rede",
            "[WIDGET_TITLE_PROMOTED_CONTENT]": "Conte\xFAdo Promovido",
            "[WIDGET_TITLE_SMI]": "Em outra m\xEDdia",
            "[WIDGET_TITLE_SPONSORED_CONTENT]": "Conte\xFAdo Patrocinado",
            "[WIDGET_TITLE_SUGGESTED_NEWS]": "Not\xEDcias Sugeridas",
            "[WIDGET_TITLE_YOU_MAY_LIKE]": "Voc\xEA pode gostar"
        }
    }
    );
    var U, _ = $(()=>{
        U = {
            library: "",
            cli: "8f532822552b7ef86ec588ad7f3d0609710fc818",
            widgetBuilder: "15035905"
        }
    }
    );
    var G = $(()=>{}
    );
    var R = $(()=>{}
    );
    var W, it = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        W = class {
            constructor(t) {
                this.app = t
            }
            addHook(t, e, i=0, s=!1) {
                {
                    let o = i !== 0;
                    this.app[t].push(c=>{
                        let d = this.name || this.constructor.name
                          , u = [];
                        return u.push(this.app.lifeCycleBlock.execute(`${t} hook ${d}`, f=>{
                            try {
                                o ? (c = c || [],
                                c.push(f),
                                e.apply(this, c)) : (e.apply(this, c),
                                f())
                            } catch (I) {
                                this.app.log(`${t} hook ${d}:`, "error", I),
                                this.app.debugBlock.sendData(I.message),
                                f()
                            }
                        }
                        , 0, !1, !0)),
                        o && i !== 999999 && u.push(this.app.lifeCycleBlock.execute("", f=>{
                            f()
                        }
                        , i, s, !0)),
                        Promise.race(u)
                    }
                    )
                }
            }
        }
    }
    );
    var oe, Ui = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        oe = class extends W {
            constructor(t) {
                super(t),
                this.isDebugEnabled = !1,
                this.isProfilerEnabled = !1,
                this.app.log = this.log.bind(this),
                this.app.time = this.time.bind(this),
                this.app.timeEnd = this.timeEnd.bind(this)
            }
            initDebugger() {
                this.isDebugEnabled = this.app.getQueryParameterByName("mgwdebug") === "1" || !1,
                this.isProfilerEnabled = this.app.getQueryParameterByName("mgwprofile") === "1" || !1
            }
            log(t, e="log", i=null) {
                if (this.isDebugEnabled) {
                    let o = ["log", "info", "warn", "error"].indexOf(e) !== -1 ? e : "log";
                    typeof console[o] != "function" && (o = "log"),
                    i && i.stack && i.message ? console[o](`WIDGET_1419550_${this.app.uniqId}`, t, i.stack) : console[o](`WIDGET_1419550_${this.app.uniqId}`, t)
                }
            }
            time(t) {
                this.isProfilerEnabled && typeof console.time == "function" && console.time(`WIDGET_1419550_${this.app.uniqId} ${t}`)
            }
            timeEnd(t) {
                this.isProfilerEnabled && typeof console.timeEnd == "function" && console.timeEnd(`WIDGET_1419550_${this.app.uniqId} ${t}`)
            }
            sendData(t) {}
        }
    }
    );
    var nt, pt, Zt, Lt, Yt, Bt = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        (function(g) {
            g.Teaser = "teaser",
            g.Banner = "banner",
            g.Gpt = "gpt"
        }
        )(nt || (nt = {}));
        (function(g) {
            g.Wages = "w",
            g.Exchange = "e",
            g.InternalExchange = "i",
            g.Video = "v",
            g.DirectPublisherDemand = "dpd"
        }
        )(pt || (pt = {}));
        (function(g) {
            g.Desktop = "desktop",
            g.Mobile = "mobile",
            g.Tablet = "tablet",
            g.SmartTV = "smarttv"
        }
        )(Zt || (Zt = {}));
        (function(g) {
            g[g.MG = 0] = "MG",
            g[g.L = 1] = "L",
            g[g.AK = 2] = "AK",
            g[g.IM = 3] = "IM"
        }
        )(Lt || (Lt = {}));
        (function(g) {
            g.Storage = "storage",
            g.Cmp = "cmp"
        }
        )(Yt || (Yt = {}))
    }
    );
    var re, $i = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        Ui();
        Bt();
        re = class g {
            constructor(t, e, i, s, o, c, d) {
                if (this.blankImage = "",
                this.BaseBlockClass = g,
                this.app = this,
                this.widgetParams = d,
                this.context = e,
                this.blankImage = `data:image/svg+xml,%3Csvg
            xmlns="http://www.w3.org/2000/svg"
            width="200" height="200"
            viewBox="0 0 200 200"
            %3E%3C/svg%3E`,
                this.enabledCooperationTypes = JSON.parse('["wages"]'),
                this.root = this.context.document.getElementById(t),
                this.debugBlock = new oe(this),
                this.lifeCycleLoadResolver = null,
                this.waitConsentResolver = null,
                this.rootId = t,
                this.containerId = s,
                this.uniqId = o,
                this.fallbackMode = i,
                this.page = 1,
                this.adlink = "",
                this.template = "",
                this.templateContent = null,
                this.id = 1419550,
                this.originalId = 1419550,
                this.pvid = "",
                this.muid = "",
                this.afterPreRenderNewsHooks = [],
                this.beforeInjectScriptHooks = [],
                this.beforeLoadNewsHooks = [],
                this.afterLoadNewsHooks = [],
                this.afterInjectScriptHooks = [],
                this.beforePrepareCappingDataHooks = [],
                this.afterPrepareCappingDataHooks = [],
                this.afterSendCappingHooks = [],
                this.beforeInitHooks = [],
                this.afterInitHooks = [],
                this.observerWidgetHooks = [],
                this.observerTeasersHooks = [],
                this.blocksAddress = "",
                this.tickerPrefix = "",
                this.countLoadBlocks = 0,
                this.preTemplate = "",
                this.postTemplate = "",
                this.banners = {},
                this.loadedDefault = !1,
                this.teaserData = {},
                this.servicerData = {},
                this.pagesServicerData = [],
                this.childWidgetsData = JSON.parse("[]"),
                this.versionWidget = c,
                this.sspPerformance = 10 >= Math.ceil(Math.random() * 100),
                this.doubleClickType = "",
                this.doubleClickCheckId = 0,
                this.doubleClickPercent = 0,
                this.precalcRect = null,
                this.preRenderTeaserSizes = null,
                this.preRenderImageSizes = null,
                this.widgetConstructorData = JSON.parse('{"cols":1,"font":"arial","kind":"wages","rows":"2","type":"in-site-notification","media":{"opacity":80,"duration":1,"minWidth":250,"position":"bottom","minHeight":150,"videoOverlay":1},"mgbox":{"styles":{"maxWidth":1220}},"price":false,"theme":"#3f3f3f","width":"100%","button":1,"mcdesc":{"styles":{"font":"arial","color":"#444444","display":"none","fontSize":11,"fontStyle":"normal","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"mgline":{"styles":{"width":"150","height":"120","margin":"2","borderColor":"#ffffff","borderStyle":"solid","borderWidth":0,"borderRadius":"0"}},"imgType":"super","mcimage":{"size":328,"styles":{"padding":0,"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0},"size-width":"200","size-height":"200"},"mcprice":{"show":"true","styles":{"font":"arial","color":"#222222","fontSize":14,"fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"mctable":{"styles":{"borderColor":"","borderWidth":0,"backgroundColor":""}},"mctitle":{"styles":{"color":"#0c0c0c","fontSize":17,"fontStyle":"normal","textAlign":"center","fontWeight":"bold","text-transform":"uppercase","textDecoration":"none"}},"subType":"in-site-notification-media-grey","mcdomain":{"styles":{"font":"arial","color":"#159417","display":"none","fontSize":12,"fontStyle":"italic","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"rerunAds":1,"isToaster":1,"colsMobile":"1","isDragDown":1,"previewImg":"https:\\/\\/cdn.adskeeper.co.uk\\/images\\/draw-widget-preview.jpg","imageFormat":5,"imageShadow":"","textPosition":"bottom","autoplacement":"off","formatChanged":true,"isInterstitial":0,"popupFrequency":15,"widgetFormatId":2,"mobileWidgetImg":"https:\\/\\/cdn.adskeeper.co.uk\\/images\\/mobile-widget-preview-adskeeper.png","passageFrequency":60,"teaserCardShadow":"0","teaserFixedWidth":"0","imageScaleOnHover":"","interstitialAfter":3,"is_show_ad_marker":0,"frequencyOfDisplay":1,"widgetTitleSettings":{"styles":{"font":"arial","color":"#3f3f3f","fontSize":14,"text-transform":"uppercase"}},"frequencyCappingShow":3,"frequencyCappingTime":2,"notificationPosition":"top","toasterInactivityTime":8,"widgetTypeDescription":1}'),
                typeof this.widgetConstructorData.mctitle < "u" && typeof this.widgetConstructorData.mctitle.styles < "u" && typeof this.widgetConstructorData.mctitle.styles.fontSize < "u" ? this.autoSizeTitle = Number(this.widgetConstructorData.mctitle.styles.fontSize) : this.autoSizeTitle = 0,
                this.globalSettings = JSON.parse('{"capping_observer_threshold":"0.5","current_language":"en","widget_lazy_load_margin":"1000","accidental_clicks_delay":"10","ia_page_view_timeout":"180","ia_page_imp_timeout":"180","widget_intentiq_refresh_millis":"43200000","retention_tool_widget_utm":"utm_mgid_push","except_ads_limit":"150","capping_observer_time":"","widget_consent_wait_time_ms":"30","widget_consent_outdated_time":"168"}'),
                this.customBanners = JSON.parse('{"1419550":[]}'),
                this.initServicerRequest = !0,
                this.exceptAdsList = [],
                this.clickHandlers = [],
                this.sspDoubleClickHash = [],
                this.requestParams = {},
                this.userAgentDataParams = null,
                this.consentDataParams = null,
                this.videoMetricsParams = null,
                this.webProtocol = "https:",
                this.clickHandlerList = {
                    onSiteNotificationClick: {
                        handler: "onSiteNotificationHandler",
                        priority: 8
                    },
                    onSmartDoubleClick: {
                        handler: "onSmartDoubleClickHandler",
                        priority: 10
                    },
                    onAntifraudStatisticsClick: {
                        handler: "onAntifraudStatisticsClickHandler",
                        priority: 15
                    },
                    sspDoubleClick: {
                        handler: "sspDoubleClickHandler",
                        priority: 20
                    },
                    scrollTimeDoubleClick: {
                        handler: "scrollTimeDoubleClickHandler",
                        priority: 21
                    },
                    activateDelayLink: {
                        handler: "activateDelayLinkHandler",
                        priority: 30
                    },
                    accidentalClicks: {
                        handler: "accidentalClicksHandler",
                        priority: 50
                    },
                    externalCountersLink: {
                        handler: "externalCountersLinkHandler",
                        priority: 100
                    },
                    returnedRefreshClick: {
                        handler: "returnedRefreshClickHandler",
                        priority: 120
                    },
                    internalExchangeLogger: {
                        handler: "internalExchangeLoggerHandler",
                        priority: 150
                    },
                    showDesktopDoubleClick: {
                        handler: "showDesktopDoubleClickButton",
                        priority: 150
                    },
                    showMobileDoubleClick: {
                        handler: "showDoubleClickButton",
                        priority: 150
                    },
                    hangNiceLinkListener: {
                        handler: "hangNiceLinkListener",
                        priority: 200
                    },
                    countSessionClicks: {
                        handler: "countSessionClicksHandler",
                        priority: 250
                    },
                    closeWidgetClick: {
                        handler: "closeWidget",
                        priority: 600
                    },
                    refreshNews: {
                        handler: "refreshNewsHandler",
                        priority: 700
                    }
                },
                this.context.self !== this.context.top) {
                    let u = this.context.document.referrer.split("/");
                    this.intExchangeProtocol = u[0].indexOf("http") == 0 ? u[0] : "https:"
                } else {
                    let u = this.context.document.location.protocol;
                    this.intExchangeProtocol = u.indexOf("http") == 0 ? u : "https:"
                }
                this.sourceName = "",
                this.setTemplate(`{foreach}
<div class="mgbox"
   >
    <div class="mgline">
        {if $banner}{$banner}{/if}
        {if $teaser}
            <div class="image-with-text">
                <div class="text-elements">
                    <div class="text_on_hover">
                        <div class="mcdomain">
                            <a {$target} {$href}>
                                <span class="mcdomain_source">{$source}</span>
                                <span class="mcdomain_now">now</span>
                                <svg class="mcdomain_icon" xmlns="http://www.w3.org/2000/svg" viewBox="-21 0 512 512"><path d="m448 232.148438c-11.777344 0-21.332031-9.554688-21.332031-21.332032 0-59.839844-23.296875-116.074218-65.601563-158.402344-8.339844-8.339843-8.339844-21.820312 0-30.164062 8.339844-8.339844 21.824219-8.339844 30.164063 0 50.371093 50.367188 78.101562 117.335938 78.101562 188.566406 0 11.777344-9.554687 21.332032-21.332031 21.332032zm0 0"/><path d="m21.332031 232.148438c-11.773437 0-21.332031-9.554688-21.332031-21.332032 0-71.230468 27.734375-138.199218 78.101562-188.566406 8.339844-8.339844 21.824219-8.339844 30.164063 0 8.34375 8.34375 8.34375 21.824219 0 30.164062-42.304687 42.304688-65.597656 98.5625-65.597656 158.402344 0 11.777344-9.558594 21.332032-21.335938 21.332032zm0 0"/><path d="m434.753906 360.8125c-32.257812-27.265625-50.753906-67.117188-50.753906-109.335938v-59.476562c0-75.070312-55.765625-137.214844-128-147.625v-23.042969c0-11.796875-9.558594-21.332031-21.332031-21.332031-11.777344 0-21.335938 9.535156-21.335938 21.332031v23.042969c-72.253906 10.410156-128 72.554688-128 147.625v59.476562c0 42.21875-18.496093 82.070313-50.941406 109.503907-8.300781 7.105469-13.058594 17.429687-13.058594 28.351562 0 20.589844 16.746094 37.335938 37.335938 37.335938h352c20.585937 0 37.332031-16.746094 37.332031-37.335938 0-10.921875-4.757812-21.246093-13.246094-28.519531zm0 0"/><path d="m234.667969 512c38.632812 0 70.953125-27.542969 78.378906-64h-156.757813c7.421876 36.457031 39.742188 64 78.378907 64zm0 0"/>
                                </svg>
                            </a>
                        </div>
                        <div class="mctitle">
                            <a {$target} {$href}>{$title}</a>
                        </div>
                    </div>
                </div>
                <div class="mcimg">
                    <a {$target} {$href} >
                        <div class="image-container">
                            <img class="mcimg" {$src} />
                            <!--intExchangeWagesImagePlace-->
                        </div>
                    </a>
                </div>
            </div>
            <div class="mgbottom_media">
                <div class="mgbtn_media mgbtn_media-like">
                    <svg class="mgmedia__metrics-icon cusel-exception" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path class="cusel-exception" d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64c12.011,0,23.061-4.053,32-10.795V224H53.333z" fill="#8e9298"></path></g></g> <g><g><path class="cusel-exception" d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"></path></g></g></svg>
                    <span class="mgmedia__metrics-value cusel-exception">285</span>
                </div>
            </div>
            <div class="mg-close-button">
		        <a href="javascript:;" class="mg-close-action"></a>
		        <span class="mg-close-button">&#215;</span>
	        </div>
        {/if}
    </div>
</div>
{/foreach}
`.replace(/[\r\n]/g, "")),
                this.setStyles(`.mgresponsive { display: inherit; } .mgbox * { transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s; } .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: solid; border-width: 0px; background: rgba(248, 248, 248, 0.95); display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px; border-radius: 10px; transition: all 0.3s ease 0s; } .mgbox:hover { background: #ffffff !important; } .mgbox { width: 100%; max-width: 390px; } div.mcimg { padding: 5px 5px 5px 10px; text-align: center; float: left; margin-right: 10px; } img.mcimg { border-style: solid; border-color: #ffffff; border-width: 0px; width: 100% !important; height: auto !important; max-width: 70px; max-height: 70px; box-sizing: border-box; display: block; } .mgline .text-elements { display: table-cell; height: 80px; vertical-align: middle; padding-right: 54px; } .mctitle { text-align: left; margin-right: 10px; } .mctitle a { font-weight: bold; font-size: 13px; line-height: 15px; font-style: normal; text-decoration: none; color: #414a59; font-family: Verdana, sans-serif; } .mcdesc { display: block; text-align: left; margin-top: 5px; } .mcdesc a { font-weight: normal; font-size: 14px; line-height: 18px; font-style: normal; text-decoration: none; color: #6D6D6D; font-family: Verdana, sans-serif; display: block; } .mcdomain { display: block; text-align: left; } .mcdomain a { font-weight: normal; font-size: 14px; line-height: 18px; font-style: normal; text-decoration: none; color: #6D6D6D; font-family: Verdana, sans-serif; display: block; overflow: hidden; } .mcdomain a img.mcimgsrc { vertical-align: bottom; margin-bottom: -3px; height: 20px; width: 20px; display: inline-block; } .mgline { background: none repeat scroll 0 0; cursor: pointer; display: inline-block; _overflow: hidden; *zoom: 1; *display: inline; padding: 0 !important; border-style: solid; border-color: #ffffff; border-width: 0px; width: 100%; max-width: 100%; box-sizing: border-box; margin: 0; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; overflow: hidden; } .mgline .image-container { position: relative; overflow: visible; } .mgline .image-container .mcimgad { position: absolute; right: 0; bottom: 0; width: 20px; height: 20px; } .mgline { vertical-align: top; } .mgline, .mgbox { min-width: 90px; } .mgline[max-width~="120px"] .mcdesc { display: none !important; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } .text-elements a { text-decoration: none; } div.mcprice { text-align: center; } div.mcprice span { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: Verdana, sans-serif; } div.mgbuybox, div.mgarrowbox { display: none; } div.mgbuybox, div.mgarrowbox, div.mcprice { display: none; } span.mcpriceold { text-decoration: line-through !important; } .mgpopular { background-color: rgba(255, 0, 0, 0.2) !important; border-color: rgba(255, 90, 0, 0.3) !important; } img.mcimg { margin: 0; opacity: 1 !important; } .mgline { position: relative; } .mgline .fake { visibility: hidden; position: relative; padding-top: 4px; } .mgline:hover .mctitle a { text-decoration: none !important; } .mgline:hover .mcpriceold + .mcprice, .mgline:hover .mcpriceold { visibility: hidden; } .mgline:hover .mcdiscount { display: block; position: absolute; left: 0px; right: 0px; top: 5px; } .mgarrowbox { position: relative; background: #00bfff; width: 55%; height: 22px; margin: 0px; border-color: transparent; border-left-color: #00bfff; display: inline-block; font-family: Verdana, sans-serif; } .mgarrowbox:after { left: 100%; top: 50%; content: " "; height: 0px; width: 0px; position: absolute; pointer-events: none; margin-top: -11px; border: solid 11px; border-color: inherit; } .mgbuybox { width: 40%; display: inline-block; text-align: right; font-weight: bold; font-family: Verdana, sans-serif; font-size: 12px; color: #666666; text-decoration: underline; } .mctitle { line-height: 1 !important; } div.mcprice { margin-top: 5px; line-height: 12px !important; } div.mgbuybox, div.mgarrowbox { display: none; } .mgtobottom { position: absolute; bottom: 0; width: 100%; text-align: left; } .mgline .image-with-text, .mgline .mgtobottom { width: 100% !important; margin: 0 auto; } .mgline .image-with-text, .mgline .mgtobottom { max-width: 100%; } .mgheader { display: none !important; } .mghead { font-family: Verdana, sans-serif !important; color: #00bfff; font-size: 14px !important; text-transform: uppercase !important; } .mcpriceold { float: left; padding-left: 5px; } .mcdiscount { display: none; } .mcdomain a { padding: 0px; display: block; padding-top: 5px; padding-bottom: 2px; overflow: hidden; } div.mcprice, div.mcriceold { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: Verdana, sans-serif; } div.mcpriceold { text-decoration: line-through !important; } .mgline[max-width~="120px"] .mgarrowbox, .mgline[max-width~="120px"] .mgbuybox { display: none !important; } .mgline .image-with-text { min-height: 1px; } .mgbox { position: fixed !important; z-index: 99999999; animation: 0.3s ease 0s 1 normal none running show !important; transition: all 0.3s ease 0s !important; } .mgbox:nth-of-type(1) { top: 10px; right: 10px; bottom: auto; } .mgbox:nth-of-type(2) { top: 120px; right: 10px; bottom: auto; } .mgbox:nth-of-type(3) { top: 230px; right: 10px; bottom: auto; } .mgbox:nth-of-type(4) { top: 340px; right: 10px; bottom: auto; } .mgbox:nth-of-type(5) { top: 450px; right: 10px; bottom: auto; } .mgbox:nth-of-type(6) { top: 560px; right: 10px; bottom: auto; } div.mg-close-button { display: flex; justify-content: center; z-index: 999; cursor: pointer; border-radius: 5px; position: absolute; right: 0; top: 0; width: 50px; height: 100%; transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s; border-radius: 0px 10px 10px 0px; } .mg-close-button:hover { background: rgba(0, 0, 0, 0.05); } a.mg-close-action { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } span.mg-close-button { color: transparent; font-size: 25px; font-weight: 400; font-family: Verdana, sans-serif; display: flex; align-self: center; cursor: pointer; transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s; } .mgbox:hover span.mg-close-button { color: #414a59; } a.mg-button { background-color: #33172e; display: inline-block; margin: 10px 0 0; padding: 6px 10px; font-size: 15px; border: 2px solid #ec0081; line-height: 19px; font-weight: 700; color: #fff; font-family: Verdana, sans-serif; -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15); box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15); border-radius: 5px; } @media (max-width: 480px) { .mgbox { max-width: calc(100% - 20px); } .mg-close-button { background: rgba(0, 0, 0, 0.05) !important; } span.mg-close-button { color: #414a59 !important; } } @media only screen and (max-device-width: 812px) and (orientation: landscape) { .mgbox { max-width: 75% !important; } .mg-close-button { background: rgba(0, 0, 0, 0.05) !important; } span.mg-close-button { color: #414a59 !important; } } .widgetPreviewRoot { min-height: 400px; } .mgbox { display: block; background: transparent; box-shadow: none; border-radius: unset; max-width: 410px; padding: 0 10px !important; } .mgbox:hover { background: transparent !important; } .mgbox:hover span.mg-close-button { color: #fff !important; } .mgline { display: block; overflow: visible; background-color: #8d8da1; position: relative; box-shadow: rgba(141, 141, 161, 0.4) 2px 4px 5px; border-radius: 15px; cursor: initial; } .mgline:hover { box-shadow: rgba(141, 141, 161, 0.5) 5px 7px 8px; } .mgline div.mcimg { position: relative; width: 35%; max-width: 100px; max-height: 100px; overflow: hidden; padding: 0; float: none; margin-right: 0; border-radius: 50% 50% 0 50%; } .mgline img.mcimg { max-width: 328px; max-height: 328px; object-fit: cover; border-radius: 50%; } .mgline .image-with-text { display: flex; align-items: center; justify-content: space-between; width: calc(100% - 60px) !important; max-width: calc(100% - 60px) !important; padding: 10px 0 10px 15px; margin: 0 !important; box-sizing: border-box; } .mgline .text-elements { display: flex; height: 100px; width: 62%; max-width: 210px; padding-right: 0; } .mgline .image-container { position: static; overflow: hidden; border-radius: 50% 50% 0 50%; } .mgline .text_on_hover { width: 100%; display: flex; flex-direction: column; align-items: flex-start; } .mgline .mctitle { width: 100%; max-width: 210px; margin-right: 0; } .mgline .mctitle a { font-size: 14px; line-height: 16px; color: #fff; font-family: Arial, sans-serif; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; max-height: 50px; -webkit-line-clamp: 3; -webkit-box-orient: vertical; padding: 2px 0; box-sizing: border-box; } .mgline .mcdomain { width: 100%; max-width: 210px; margin-bottom: 5px; } .mgline .mcdomain a { display: flex; align-items: center; color: #fff; font-weight: 500; line-height: 15px; font-size: 12px; text-decoration: none; } .mgline .mcdomain_source { margin-right: 7px; text-align: left; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; max-height: 15px; -webkit-line-clamp: 1; -webkit-box-orient: vertical; } .mgline .mcdomain_now { position: relative; margin: 0 5px 0 10px; } .mgline .mcdomain_now:after { content: \\'\\'; display: block; background-color: #fff; height: 4px; width: 4px; position: absolute; top: 5px; left: -8px; border-radius: 50%; } .mgline .mcdomain_icon { width: 20px; height: 20px; max-width: 20px; max-height: 20px; min-width: 20px; min-height: 20px; } .mgline .mcdomain_icon path { fill: #fff; } .mgheader { display: none !important; } .mgbox:nth-of-type(1) { right: 0; } .mgbox:nth-of-type(2) { top: 140px; right: 0; bottom: auto; } .mgbox:nth-of-type(3) { top: 270px; right: 0; bottom: auto; } .mgbox:nth-of-type(4) { top: 400px; right: 0; bottom: auto; } .mgbox:nth-of-type(5) { top: 530px; right: 0; bottom: auto; } .mgbox:nth-of-type(6) { top: 660px; right: 0; bottom: auto; } div.mg-close-button { border-radius: 0 15px 15px 0 !important; background: #7e7e92 !important; } div.mg-close-button:hover { background: #737387 !important; } span.mg-close-button { font-size: 35px; font-family: Arial, sans-serif; color: #fff; } .mgbottom_media { position: absolute; bottom: 6px; left: 13px; transition: none; display: flex; align-items: center; justify-content: flex-start; width: 54%; max-width: 210px; } .mgbtn_media { display: flex; align-items: center; justify-content: center; color: #2d69af; font-weight: 600; line-height: 1; font-size: 14px; cursor: pointer; transition: none; padding: 3px; box-sizing: border-box; } .mgmedia__metrics-icon { word-break: normal; display: block; height: 17px; width: 17px; max-width: 17px; max-height: 17px; min-width: 17px; min-height: 17px; margin-right: 7px; transition: none; } .mgmedia__metrics-icon path { fill: #2d69af; transition: none; } .mgmedia__metrics-value { font-size: 15px; transition: none; font-family: Arial, sans-serif; } .mgbtn_media:hover { color: #3c78be; } .mgbtn_media:hover .mgmedia__metrics-icon path { fill: #3c78be; } .mgbtn_media-active .mgmedia__metrics-value { color: #000; } @media (max-width: 480px) { div.mg-close-button { background: #7e7e92 !important; } span.mg-close-button { color: #fff !important; } } `.replace(/\\'/g, "'")),
                this.servicerDomain = "servicer.adskeeper.co.uk",
                this.adBlockStyles = "".replace(/\((\'|\")?\/\//g, "($1https://"),
                this.clickTracking = "",
                this.loadedType = "",
                this.parentCustomFuncBlocks = {},
                this.childFuncBlocks = {},
                this.browserId = -1,
                this.deviceType = Zt.Desktop,
                this.hrefAttr = "href",
                this.enabledCooperationTypes = JSON.parse('["wages"]'),
                this.consentData = null,
                this.cmpEnabled = !1,
                this.uspString = "",
                this.uspEnabled = !1,
                this.tcfv2Data = null,
                this.tcfv2Enabled = !1,
                this.consentOrigin = null,
                this.cookieMatchingDomain = "cm.adskeeper.co.uk",
                this.context._mgIntExchangeNews = this.context._mgIntExchangeNews || {},
                this.iframePlacementType = 0,
                this.networkInformationType = "unknown",
                this.networkInformationEffectiveType = "unknown",
                this.networkInformationSaveData = 0,
                this.pageUrl = "",
                this.refererUrl = "",
                this.refererParam = "",
                this.adblockDetectResult = null,
                this.adBlockStatement = !1,
                this.gptOptions = JSON.parse("{}"),
                this.backfillData = JSON.parse("{}"),
                this.isOurIframe = this.context.document.location.hostname === "mg.adskeeper.co.uk",
                this.refreshedElement = null,
                this.startServicerTime = null,
                this.setRefererData()
            }
            setRefererData() {
                let t = this.app.isIframe()
                  , e = !0
                  , i = !1
                  , s = this.app.context
                  , o = this.app.context;
                if (t)
                    for (; ; ) {
                        try {
                            s.frameElement && s.frameElement.src != "" && (e = !1),
                            s.document.body
                        } catch {
                            s = o,
                            i = !0,
                            e = !1;
                            break
                        }
                        if (s == s.parent)
                            break;
                        o = s,
                        s = s.parent
                    }
                try {
                    this.app.isAmp() ? (this.app.iframePlacementType = 3,
                    this.app.pageUrl = typeof this.app.context.context.sourceUrl < "u" ? this.app.context.context.sourceUrl : "",
                    this.app.refererUrl = typeof this.app.context.context.referrer < "u" ? this.app.context.context.referrer : "",
                    this.app.pageUrl != "" ? this.app.refererParam = this.app.pageUrl : this.app.refererParam = this.app.refererUrl) : (this.app.pageUrl = s.document.location.href,
                    this.app.refererUrl = s.document.referrer || "",
                    this.app.refererParam = this.app.refererUrl,
                    t && !e && (i ? this.app.iframePlacementType = 2 : (this.app.refererParam = this.app.pageUrl,
                    this.app.iframePlacementType = 1)))
                } catch {
                    this.app.iframePlacementType = 2
                }
            }
            getQueryParameterByName(t) {
                t = t.replace(/[\[\]]/g, "\\$&");
                let i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(this.app.context.location.href);
                return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
            }
            setStyles(t) {
                this.app.styles = t.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//")
            }
            setTemplate(t) {
                t = t.replace(/^\s*[\r\n]|\s{2,}/gm, ""),
                t = t.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//"),
                t = t.replace('src="//', 'src="' + this.app.webProtocol + "//"),
                this.app.templateText = t.replace('href="//', 'href="' + this.app.webProtocol + "//")
            }
            cutString(t, e, i) {
                if (t.length <= e)
                    return t;
                let s = [];
                s = t.split(" ");
                let o = s[0] + " ", c;
                for (let d = 1; d < s.length; d++) {
                    if (c = o + s[d],
                    c.length > e)
                        return o + (typeof i > "u" || i ? "..." : "");
                    o += s[d] + " "
                }
                return t
            }
            parseString(t, e) {
                let i = [], s, o = "";
                for (i = t.split(" "),
                s = 0; s < i.length; s++)
                    i[s].length > e && i[s].search(/&\w+;/) < 0 ? o += i[s].substr(0, e) + " " + i[s].substr(e) + " " : o += i[s] + " ";
                return o
            }
            prepareTitle(t) {
                return t = this.app.cutString(t, 75, 1),
                t
            }
            prepareDesc(t) {
                return t = this.app.cutString(t, 75, 1),
                t
            }
            hidePreloadDiv() {
                this.app.fallbackMode ? this.app.fallbackMode && this.app.countLoadBlocks === 0 && (this.app.root.innerHTML = "",
                this.app.context.document.getElementById("M862931PreloadC1419550") && (this.app.context.document.getElementById("M862931PreloadC1419550").style.display = "none")) : ["AdskeeperPreloadC" + this.app.containerId, "M862931PreloadC" + this.app.containerId, "AdskeeperPreloadN" + this.app.containerId, "M862931PreloadN" + this.app.containerId].every(e=>{
                    let i = this.app.context.document.getElementById(e);
                    return i ? (i.style.display = "none",
                    !1) : !0
                }
                )
            }
            loadNewsPrestart(t, e) {
                if (this.app.hidePreloadDiv(),
                typeof t < "u") {
                    this.app.servicerData = t;
                    let i = {
                        page: this.app.pagesServicerData.length + 1,
                        servicerData: this.app.servicerData,
                        teasersCount: e
                    };
                    if (this.app.pagesServicerData.push(i),
                    typeof t.dt < "u" && (this.app.deviceType = t.dt),
                    typeof t.brid < "u" && (this.app.browserId = t.brid),
                    typeof this.app.servicerData < "u" && typeof this.app.servicerData.css < "u" && (this.app.styles = this.app.servicerData.css,
                    this.app.stylesheetsBlock.add("split_style", this.app.servicerData.css),
                    this.app.stylesheetsBlock.remove("main")),
                    typeof this.app.servicerData < "u" && typeof this.app.servicerData.t < "u" && this.app.servicerData.t !== "") {
                        let s = this.app.servicerData.t.replace(/\r?\n/g, "");
                        this.app.setTemplate(s)
                    }
                }
            }
            preloadVideoWidgetResources() {
                let t = this.app.servicerData.dt ? this.app.servicerData.dt : "desktop"
                  , e = this.app.servicerData.config.formats.filter(i=>i.device === t)[0];
                if (e) {
                    let {protocol: i} = this.context.document.location
                      , s = i.indexOf("http") !== -1 ? `${i}//` : "https://"
                      , o = this.app.currentSubnetDomain
                      , c = `mgStyles${this.id}`;
                    if (e.styleUrl) {
                        let d = e.styleUrl.replace("{{DOMAIN}}", this.app.currentSubnetDomain).replace(/^(https?:\/\/|\/\/)/, `${s}`);
                        this.appendWidgetPreloadDom(d, c, !0)
                    }
                    (typeof e.playerType > "u" || e.playerType === "mgplayer") && this.appendWidgetPreloadDom(`${s}video-native.${o}/mgPlayer/img/mgPlayer_v2_sprite.svg`)
                }
            }
            appendWidgetPreloadDom(t, e="", i=!1) {
                let s = this.context.document.createElement("link");
                s.setAttribute("href", t);
                let o = t.split(".").pop();
                o === "css" && (s.setAttribute("type", "text/css"),
                s.setAttribute("rel", "stylesheet")),
                o === "svg" && s.setAttribute("type", "image/svg+xml"),
                e && s.setAttribute("id", e),
                i && (s.onload = ()=>{
                    s.setAttribute("data-loaded", "true")
                }
                ),
                this.app.isShadowRoot() ? (this.app.root.getRootNode().appendChild(s),
                this.context.document.head.appendChild(s.cloneNode(!0))) : this.context.document.head.appendChild(s)
            }
            addVideoLib() {}
            loadNews(t) {
                if (this.app.addVideoLib(),
                t.length > 0) {
                    let i = this.app.getRenderer(this.app.templateText).getHtml(t);
                    if (this.app.root && i) {
                        if (i = this.app.advertLinkBlock.parseAdvertLink(i),
                        this.app.fallbackMode && this.app.countLoadBlocks == 0 && (this.app.root.innerHTML = ""),
                        this.app.templateContent = this.app.context.document.createElement("template"),
                        this.app.templateContent.innerHTML = "<div>" + this.app.preTemplate + i + this.app.postTemplate + "</div>",
                        typeof this.app.templateContent.content > "u") {
                            let d = this.app.templateContent
                              , u = document.createDocumentFragment()
                              , f = d.childNodes;
                            for (let I = 0; I < f.length; I++)
                                u.appendChild(f[I].cloneNode(!0));
                            this.app.templateContent.content = u
                        }
                        this.app.templateContent = this.app.templateContent.content.firstChild;
                        let s = this.app.templateContent.querySelectorAll(".mgline-gpt");
                        if (s.length)
                            for (let d = 0; d < s.length; d++)
                                s[d].innerHTML = "";
                        if (this.app.refreshedElement) {
                            this.app.templateContent = this.app.templateContent.querySelector(".mgline");
                            let d = this.app.templateContent.getElementsByTagName("a");
                            for (let u = 0; u < d.length; u++)
                                d[u].setAttribute("data-refreshed", "true")
                        }
                        let o = this.app.templateContent.querySelectorAll("img.mcimg");
                        if (o.length > 0)
                            for (let d = 0; d < o.length; d++) {
                                let u = o[d];
                                u.src = o[d].getAttribute("data-src"),
                                u.setAttribute("alt", "")
                            }
                        let c = this.app.templateContent.querySelectorAll("video.mcvideo");
                        if (c.length > 0)
                            for (let d = 0; d < c.length; d++) {
                                let u = c[d];
                                u.onplay = function() {
                                    u.classList.add("played")
                                }
                                ,
                                u.removeAttribute("nopin"),
                                u.removeAttribute("crossorigin"),
                                u.src = u.getAttribute("data-src"),
                                typeof u.childNodes[0] < "u" && u.parentElement.appendChild(u.childNodes[0])
                            }
                        this.app.addTemplate(this.app.templateContent),
                        this.app.renderBanners(!0, null)
                    }
                } else {
                    if (typeof this.app.context._mgIsCustomBanner < "u")
                        try {
                            let i = {
                                bannerType: "_mgIsCustomBanner",
                                isEmpty: !0,
                                id: this.app.context.frameElement.id
                            };
                            this.app.context.parent.postMessage(i, "*")
                        } catch {}
                    if (this.app.root && this.app.countLoadBlocks == 0) {
                        this.app.root.innerHTML = "";
                        return
                    }
                }
                if (this.app.servicerData && this.app.servicerData.muidn && this.app.servicerData.pvid && this.app.pvid != "" && this.app.servicerData.pvid == this.app.pvid)
                    try {
                        if (this.app.context.localStorage && this.app.context.localStorage.setItem("mgMuidn", this.app.servicerData.muidn),
                        this.app.isAmp()) {
                            let i = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString()
                              , s = "mgMuidn=" + this.app.servicerData.muidn + ";domain=.ampproject.net;expires=" + i + ";SameSite=None;Secure";
                            this.app.context.document.cookie = s
                        }
                        this.app.muid = this.app.servicerData.muidn
                    } catch {}
                this.app.cookieBlock.cookieStorage.page = this.app.page,
                this.app.cookieBlock.cookieStorage.time = new Date().getTime().toString(),
                this.app.cookieBlock.setCookie();
                let e = this.app.root.getElementsByTagName("a");
                for (let i = 0; i < e.length; i++)
                    e[i].rel = "sponsored nofollow noopener";
                this.app.countLoadBlocks++
            }
            addTemplate(t) {
                this.app.refreshedElement ? (this.app.refreshedElement.parentNode.replaceChild(t, this.app.refreshedElement),
                (typeof this.app.requestParams.limitads < "u" || typeof this.app.requestParams.rtb_disabled < "u") && (delete this.app.requestParams.limitads,
                delete this.app.requestParams.rtb_disabled),
                this.app.refreshedElement = null) : this.app.root.appendChild(t)
            }
            getViewportHeight() {
                let t = this.app.context.document
                  , e = this.app.context
                  , i = "documentElement"
                  , s = "clientHeight"
                  , o = "clientWidth"
                  , c = "innerHeight"
                  , d = "innerWidth"
                  , u = "scrollHeight"
                  , f = "scrollWidth"
                  , I = "offsetHeight"
                  , T = "offsetWidth"
                  , E = "offsetLeft"
                  , y = "offsetTop"
                  , C = "scrollTop"
                  , b = "scrollLeft";
                return this.app.isAmp() ? typeof e["intersectionRect1419550_" + this.uniqId] < "u" ? {
                    c: e["intersectionRect1419550_" + this.app.uniqId].height,
                    s: e["intersectionRect1419550_" + this.app.uniqId].y
                } : {
                    c: e.intersectionRect1419550.height,
                    s: e.intersectionRect1419550.y
                } : e[d] ? {
                    c: e[c],
                    s: e.pageYOffset
                } : t[i] && t[i][o] ? {
                    c: t[i][s],
                    s: t[i][C]
                } : t.body[o] ? {
                    c: t.body[s],
                    s: t.body[C]
                } : 0
            }
            renderBanners(t, e) {
                for (let i in this.app.banners)
                    if (this.app.banners[i].rs != t) {
                        if (!t) {
                            if (this.app.banners[i].iteration != e)
                                continue;
                            this.app.banners[i].rs = !1
                        }
                        if (this.app.banners[i].isRendered === !0)
                            continue;
                        let s = this.app.root.querySelector("#" + i)
                          , o = this.app.banners[i].html
                          , c = !1;
                        if (this.app.banners[i].clickUrl && o.indexOf("${CLICK_PIXEL}") !== -1) {
                            let f = this.app.allowReturnParams;
                            this.app.allowReturnParams = !0,
                            o = o.replace(/\${CLICK_PIXEL}/g, this.app.banners[i].clickUrl + this.app.getAntifraudQueryParameter(this.app.banners[i].clickUrl)),
                            c = !0,
                            this.app.allowReturnParams = f
                        }
                        o.indexOf("{page_url}") !== -1 && (o = o.replace(/{page_url}/g, this.app.pageUrl)),
                        o.indexOf("{referrer_url}") !== -1 && (o = o.replace(/{referrer_url}/g, this.app.refererUrl));
                        let d = this.app.banners[i].isCustomBanner
                          , u = `<!DOCTYPE html><html><body style="margin: 0;">
          ${d ? "<script>var _mgIsCustomBanner = true;<\/script>" : ""}
          ${o}
          </body></html>
        `;
                        if (d)
                            try {
                                this.app.context.addEventListener("message", ({data: f})=>{
                                    f && f?.bannerType === "_mgIsCustomBanner" && f?.id === this.app.banners[i].id && (f.isEmpty && (s.style.display = "none",
                                    s.parentElement.style.display = "none"),
                                    f.height && (s.style.height = f.height + "px"))
                                }
                                , !1)
                            } catch {}
                        this.app.banners[i].useSecureIframe ? this.app.renderInSafeIframe(s, `banner_${i}`, u) : (s.contentWindow.document.open(),
                        s.contentWindow.document.write(u),
                        s.contentWindow.document.close()),
                        this.app.banners[i].isRendered = !0,
                        c || (f=>{
                            s.contentWindow.document.body.addEventListener("click", I=>{
                                let T = I.target
                                  , E = !1;
                                for (; T.parentElement; )
                                    if (T.tagName === "A") {
                                        E = !0;
                                        break
                                    } else
                                        T = T.parentElement;
                                E && this.app.request.pixel("bannerClickTracker", this.app.banners[f].clickUrl, {
                                    k: this.app.getAntifraudQueryParameter(this.app.banners[f].clickUrl)
                                }, {})
                            }
                            , !0)
                        }
                        )(i)
                    }
            }
            renderInSafeIframe(t, e, i) {
                t.sandbox = "allow-scripts allow-popups";
                let s = this.app.context.location.href.indexOf("admin.") === -1 && this.app.context.location.href.indexOf("dashboard.") === -1 && this.app.context.location.href.indexOf("panel.") === -1;
                14 > 0 && s && (t.sandbox = "allow-same-origin allow-scripts allow-popups"),
                "srcdoc"in t ? t.srcdoc = i : (t.src = this.app.webProtocol + `//cdn.adskeeper.co.uk/widgets/framehost.html#${e}`,
                this.app.context.addEventListener("message", o=>{
                    o.origin === this.app.webProtocol + "//cdn.adskeeper.co.uk" && o.data === `loaded #${e}` && t.contentWindow.postMessage(i, "*")
                }
                , !1))
            }
            getPageCount() {
                return 20
            }
            init() {
                if (typeof JSON != "object" && (this.app.hidePreloadDiv(),
                this.app.log("Unsupported browser", "error"),
                this.app.debugBlock.sendData("Unsupported browser")),
                this.app.canUseShadowDom()) {
                    let t = this.app.root;
                    try {
                        t.parentNode.attachShadow({
                            mode: "open"
                        }).appendChild(t)
                    } catch (e) {
                        this.app.log("Shadow DOM can't be attached: ", "error", e)
                    }
                }
                if (this.app.root) {
                    this.app.cookieBlock.getCookie();
                    let t = Number(this.app.cookieBlock.cookieStorage.page)
                      , e = typeof this.app.cookieBlock.cookieStorage.time < "u" ? Number(this.app.cookieBlock.cookieStorage.time) : 0
                      , i = this.app.context.AdskeeperPageOffset ? parseInt(this.app.context.AdskeeperPageOffset) : 0;
                    this.app.addClickHandler(this.app.clickHandlerList.hangNiceLinkListener.handler, this.app.clickHandlerList.hangNiceLinkListener.priority),
                    this.app.addEvent(this.app.root, "mouseup", this.app.eventsHangNiceLinkListener),
                    this.app.addEvent(this.app.root, "contextmenu", this.app.eventsHangNiceLinkListener),
                    this.app.addEvent(this.app.root, "touchstart", this.app.eventsHangNiceLinkListener);
                    let s = this.app.getPageCount();
                    if (t != null && t < s && t > 0 ? this.app.page = t + 1 : (t > s - 1 || t < 1) && (this.app.page = 1 + i),
                    new Date().getTime() - e >= 6e5 && (this.app.page = 1 + i),
                    this.app.page || (this.app.page = 1),
                    this.app.pageUnlim = this.app.page - 1,
                    this.app.cookieBlock.cookieStorage.page = this.app.page,
                    this.app.cookieBlock.setCookie(),
                    !this.app.context.document.cookie) {
                        let o = new Date;
                        this.app.page = o.getSeconds() % s + 1
                    }
                    this.app.blocksAddress = this.app.webProtocol + "//" + this.app.servicerDomain + "/",
                    this.app.clickTracking = typeof this.app.context.MGClickTracking < "u" ? this.app.context.MGClickTracking : "",
                    this.app.adblockDetectResult === null && this.setAdblockDetectResult(),
                    this.app.adBlockStatement && (this.app.getRoot().classList.add("eyeo"),
                    this.app.rtbDisabled = 1),
                    this.app.adBlockStatement && this.app.setTemplate("".replace(/[\r\n]/g, "")),
                    this.app.context.onClickExcludes = this.app.context.onClickExcludes || [],
                    this.app.context.onClickExcludes.push(this.app.root),
                    this.app.adBlockStatement ? this.app.stylesheetsBlock.add("adBlockMain", this.app.adBlockStyles) : typeof this.app.context._mgBackfillStyles < "u" ? this.app.setBackfillStyles() : this.app.stylesheetsBlock.add("main", this.app.styles),
                    this.app.addEvent(this.app.root, "click", this.app.widgetClickHandler),
                    this.app.addEvent(this.app.root, "auxclick", this.app.widgetClickHandler)
                }
            }
            setBackfillStyles() {
                let t = this.app.context._mgBackfillStyles
                  , e = `
      .mgbox {
        padding: 0 !important;
        margin: 0 auto !important;
        width: 100% !important;
        max-width: 100% !important;
        border: none !important;
      }
      .mgbox:first-of-type {
        padding: 0 !important;
      }
      .mgbox .mgline {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
        padding: 0 !important;
        margin: 0 !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        background: none !important;
      }
      .mgline .mcdesc {
        display: none !important;
      }
    `;
                this.app.utils.isMobile() || (t = t.replace("@media (max-width: 480px)", "@media (min-width: 480px)")),
                t.indexOf(".mgtobottom .mcdomain") !== -1 && (t = t.replace(".mgtobottom .mcdomain", ".mcdomain"),
                t = t.replace(".mgtobottom .mcdomain a", ".mcdomain a")),
                this.app.stylesheetsBlock.add("backfillMain", t + e)
            }
            resetPage() {
                this.app.page = 1
            }
            getMostTopWindow() {
                let t = this.app.context;
                for (; t != t.parent; )
                    try {
                        let e = t.parent.document.body;
                        t = t.parent
                    } catch {
                        break
                    }
                return t
            }
            getDevicePixelRatio() {
                let t = 1;
                return typeof this.app.context.devicePixelRatio < "u" ? t = this.app.context.devicePixelRatio : typeof this.app.context.screen.systemXDPI < "u" && typeof this.app.context.screen.logicalXDPI < "u" && this.app.context.screen.systemXDPI > this.app.context.screen.logicalXDPI && (t = this.app.context.screen.systemXDPI / this.app.context.screen.logicalXDPI),
                t % 1 === 0 || (t = t.toFixed(3)),
                t
            }
            getCbusterParameter() {
                return this.app.context.MG_CacheBuster || new Date().getTime() + "" + Math.floor(Math.random() * 1e9 + 1)
            }
            async injectScript(t, e) {
                this.app.time("processHooks(beforeInjectScriptHooks)"),
                await this.lifeCycleBlock.processHooks("beforeInjectScriptHooks", null),
                this.app.timeEnd("processHooks(beforeInjectScriptHooks)"),
                this.app.injectionScriptMethod(t, e)
            }
            createServicerScriptElement(t, e) {
                let i = this.app.context.document.createElement("script")
                  , s = "AdskeeperC1419550DisableStart"
                  , o = "mgDisableStart1419550"
                  , c = typeof this.app.context[s] < "u";
                c || (c = typeof this.app.context[o] < "u"),
                i.type = c ? "text/plain" : "text/javascript",
                i.charset = "utf-8",
                i.referrerPolicy = "strict-origin-when-cross-origin";
                let d = 1419550;
                this.app.adBlockStatement && Object.keys(this.app.childWidgetsData).some(f=>{
                    let I = this.app.childWidgetsData[f];
                    if (I.showMonetizationEnabled === 1 && typeof I.childId < "u")
                        return d = I.childId,
                        this.app.requestParams.src_cid = this.app.originalId,
                        !0
                }
                );
                let u = t ? "fs/" : "";
                return i.src = this.app.blocksAddress + u + d + "/" + e,
                i
            }
            getMuid() {
                if (!this.app.muid.length) {
                    let t = "";
                    if (this.app.isAmp())
                        t = this.app.getCookieValue("mgMuidn");
                    else
                        try {
                            this.app.context.localStorage && (t = this.app.context.localStorage.getItem("mgMuidn"))
                        } catch {}
                    typeof t == "string" && t.length && (this.app.muid = t)
                }
                return this.app.muid
            }
            getCookieValue(t) {
                let e = "";
                try {
                    let i = this.app.context.document.cookie.split("; ").filter(s=>s.indexOf(t) !== -1);
                    i.length && (e = i[0].split("=")[1])
                } catch (i) {
                    this.app.log("getCookieValue Failed", "error", i)
                }
                return e
            }
            getArticlePublishedTime() {
                let t = ""
                  , e = this.app.getMostTopWindow()
                  , i = e.document.querySelector('meta[property="article:published_time"]') || e.document.querySelector('meta[property="og:article:published_time"]');
                if (i && (t = i.getAttribute("content")?.trim() || ""),
                !t.length)
                    try {
                        let s = JSON.parse(e.document.querySelector('script[type="application/ld+json"]')?.textContent.trim() || "{}");
                        if (Object.keys(s)?.length) {
                            let o = "dateModified"
                              , c = d=>{
                                for (let u in d)
                                    if (d.hasOwnProperty(u)) {
                                        let f = d[u];
                                        if (u === o)
                                            return f;
                                        if (typeof f == "object") {
                                            let I = c(f);
                                            if (I)
                                                return I
                                        }
                                    }
                            }
                            ;
                            t = c(s)?.trim() || ""
                        }
                    } catch (s) {
                        this.app.log("getArticlePublishedTime - Failed", "error", s)
                    }
                return t
            }
            injectionScriptMethod(t, e) {
                let i = this.app.createServicerScriptElement(t, this.app.page);
                this.app.requestParams = {
                    ...this.app.requestParams,
                    ...this.app.pageViewPixelBlock.getPageDataParams()
                };
                let s = this.app.getUserAgentDataParams();
                s && (this.app.requestParams = {
                    ...this.app.requestParams,
                    ...s
                });
                let o = this.app.getVideoMetricsParams();
                if (o && (this.app.requestParams = {
                    ...this.app.requestParams,
                    ...o
                }),
                this.app.consentDataParams = this.app.consentsBlock.getConsentData(),
                this.app.consentDataParams && (this.app.requestParams = {
                    ...this.app.requestParams,
                    ...this.app.consentDataParams
                }),
                this.app.consentOrigin !== null && (this.app.requestParams.consentOrigin = this.app.consentOrigin),
                this.app.consentOrigin === Yt.Cmp)
                    typeof this.app.requestParams.consentStrLen < "u" && delete this.app.requestParams.consentStrLen,
                    typeof this.app.requestParams.consentTimestamp < "u" && delete this.app.requestParams.consentTimestamp;
                else
                    try {
                        let y = this.app.context.localStorage.getItem("MG_tcfv2Data");
                        this.app.requestParams.consentStrLen = y ? y.length : 0,
                        y && (this.app.requestParams.consentTimestamp = JSON.parse(y || "{}")?.timestamp || 0)
                    } catch {}
                if (typeof this.app.context._mgRMB862931 < "u" && (this.app.requestParams.rmb = 1),
                this.app.adBlockStatement && (this.app.requestParams.adb = 1,
                typeof this.app.rtbDisabled < "u" && (this.app.requestParams.rtb_disabled = this.app.rtbDisabled)),
                this.app.adblockDetectResult && (this.app.requestParams.eyeo = 1),
                typeof this.app.context.MGi < "u" && (this.app.requestParams.iso = this.app.context.MGi,
                this.app.requestParams.token = "f1a24d3eef52667f37ea58211e9e032e"),
                typeof this.app.context["ampOptions1419550_" + this.app.uniqId] < "u")
                    try {
                        let y = JSON.parse(this.app.context["ampOptions1419550_" + this.app.uniqId])
                          , C = typeof y.src_id < "u" ? y.src_id : this.app.sourceName;
                        this.app.requestParams.src_id = C
                    } catch {}
                if (JSON.parse('["wages"]').indexOf("int_exchange") >= 0) {
                    let y = this.app.context.document.querySelector('meta[property="og:title"]');
                    if (this.app.context !== this.app.context.top)
                        try {
                            y = this.app.context.parent.document.querySelector('meta[property="og:title"]')
                        } catch {}
                    y && (this.app.requestParams.ogtitle = encodeURIComponent(y.getAttribute("content")))
                }
                if (this.app.uniqId !== "" && (this.app.requestParams.uniqId = this.app.uniqId),
                this.app.getActiveChilds().length && (this.app.requestParams.childs = this.app.getActiveChilds().join(",")),
                e) {
                    let y = this.app.getExceptAds();
                    this.app.requestParams.rsh = e,
                    this.app.requestParams.initial_composite = this.app.id,
                    e === 2 && y.length && (this.app.requestParams.except_ads = y.join(",")),
                    typeof this.app.requestParams.cmpreason < "u" && delete this.app.requestParams.cmpreason,
                    typeof this.app.requestParams.nocmp < "u" && delete this.app.requestParams.nocmp
                }
                if (Array.isArray(this.app.context._mgExceptAds) || Array.isArray(this.app.context.document.mgExceptIds)) {
                    let y = this.app.getExceptAds();
                    y.length && (this.app.requestParams.except_ads = y.join(","))
                }
                this.app.gptOptions?.backfill && !this.app.adBlockStatement && typeof this.app.context._mgGPT1419550 > "u" ? (this.app.context._mgGPT1419550 = !0,
                this.app.requestParams.gptbid = this.app.gptOptions.backfill) : typeof this.app.requestParams.gptbid < "u" && delete this.app.requestParams.gptbid,
                typeof this.app.context.MG_setRequestNonPersonalizedAds < "u" && this.app.context.MG_setRequestNonPersonalizedAds == 1 && (this.app.requestParams.npa = 1),
                this.app.getInternalIds().length && (this.app.requestParams.exclude_int_exchange = this.app.getInternalIds().join(","));
                try {
                    let y = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                    typeof y.type < "u" && (this.app.networkInformationType = y.type,
                    this.app.requestParams.nit = this.app.networkInformationType),
                    typeof y.effectiveType < "u" && (this.app.networkInformationEffectiveType = y.effectiveType,
                    this.app.requestParams.niet = this.app.networkInformationEffectiveType),
                    typeof y.saveData < "u" && (this.app.networkInformationSaveData = y.saveData ? 1 : 0,
                    this.app.requestParams.nisd = y.saveData)
                } catch {}
                typeof this.app.context._mgSingleJS862931 < "u" && (this.app.requestParams.jsp = this.app.context._mgSingleJS862931),
                this.app.requestParams.pv = 5,
                this.app.requestParams.lct = this.app.getLct(1716276376),
                this.app.requestParams.jsv = "es6",
                this.app.requestParams.pageView = this.app.pageView,
                this.app.requestParams.dpr = this.app.getDevicePixelRatio(),
                this.app.requestParams.ref = encodeURIComponent(this.app.contextBlock.stripAmpParts(this.app.refererParam)),
                this.app.requestParams.hashCommit = U.widgetBuilder,
                this.app.iframePlacementType !== 0 && (this.app.requestParams.iframe = this.app.iframePlacementType),
                typeof this.app.context._mgBackfillCxurl < "u" && (this.app.requestParams.cxurl = this.app.context._mgBackfillCxurl),
                typeof this.app.context._mgBackfillRef < "u" && (this.app.requestParams.ref = this.app.context._mgBackfillRef);
                let c = this.app.getMuid();
                c.length && (this.app.requestParams.muid = c);
                let d = this.app.getArticlePublishedTime();
                d.length && (this.app.requestParams.apt = encodeURIComponent(d));
                let u = this.app.context?.performance.getEntriesByType?.("navigation")[0]?.responseEnd
                  , f = this.app.context?.performance.now?.()
                  , I = Math.round(f - u);
                typeof I == "number" && !isNaN(I) && (this.app.requestParams.tfre = I);
                let T = [];
                for (let y in this.app.requestParams)
                    this.app.requestParams.hasOwnProperty(y) && T.push(`${y}=${this.app.requestParams[y]}`);
                if (typeof this.app.globalSettings.retention_tool_widget_utm == "string" && this.app.globalSettings.retention_tool_widget_utm.length && !this.app.isAmp()) {
                    let y = this.app.globalSettings.retention_tool_widget_utm
                      , b = (this.app.pageUrl || this.app.context.location.href || "").split("&").filter(D=>D.indexOf(y) !== -1).slice(0, 1).join("");
                    b = b.substring(b.indexOf(y)),
                    b && T.push(b)
                }
                let E = i.src;
                E.indexOf("?") == -1 ? E += "?" : E += "&",
                E += T.join("&"),
                i.src = E,
                this.app.sspPerformance && typeof this.app.context.performance.getEntries < "u" && (i.onload = ()=>{
                    this.app.context.performance.getEntries().map(y=>{
                        if (y.name === E) {
                            let C = Math.ceil(y.responseEnd - y.startTime);
                            this.app.request.pixel("widgetSspPerformance", this.app.webProtocol + "//c.adskeeper.co.uk/widget-ssp-performance", {
                                time: `time=${C}`
                            }, {})
                        }
                    }
                    )
                }
                ),
                window.performance?.mark("ssp_request_start", {
                    detail: {
                        _mgwidget: 1419550
                    }
                }),
                this.app.context.document.head.appendChild(i),
                i.onerror = ()=>{
                    this.app.isAdblock = !0
                }
            }
            sendConsentLog(t) {
                let e = this.app.calculateSessionsBlock.getSessionId()
                  , i = {
                    widget: `widget=${this.app.id}`,
                    pvId: `pv_id=${this.app.pvid}`,
                    diffTime: `diff_time=${Math.ceil((t - this.app.startServicerTime) / 1e3)}`,
                    storage: `storage=${this.app.requestParams.consentOrigin === Yt.Storage ? 1 : 0}`
                };
                e && (i.sessionId = `session_id=${e}`),
                this.app.request.pixel(`loggingConsent${this.app.id}`, this.app.webProtocol + "//c.adskeeper.co.uk/consent-log", i, {
                    unique: !0
                })
            }
            getActiveChilds() {
                return JSON.parse("[]")
            }
            addClickHandler(t, e) {
                this.app.clickHandlers.push({
                    handler: t,
                    priority: e
                }),
                this.app.clickHandlers.sort(function(i, s) {
                    return i.priority < s.priority ? -1 : 1
                })
            }
            widgetClickHandler(t) {
                t || (t = this.app.context.event),
                t.target || (t.target = t.srcElement);
                let e = t.target;
                if (e.tagName !== "A") {
                    e = this.app.getParentLink(e);
                    let i = !1;
                    if ("which"in t ? i = t.which === 3 : "button"in t && (i = t.button === 2),
                    !e && !i) {
                        let s = this.app.getParentElWithClass(t.target, "text-elements");
                        if (s) {
                            let o = t.target.getElementsByTagName("A");
                            o[0] ? e = o[0] : (o = s.getElementsByTagName("A"),
                            o[0] && (e = o[0]))
                        }
                        if (e) {
                            e.click();
                            return
                        }
                    }
                }
                if (e && !(!e.hasAttribute("data-hash") && !e.classList.contains("mg-close-action")))
                    for (let i = 0; i < this.app.clickHandlers.length; i++)
                        try {
                            if (!this[this.app.clickHandlers[i].handler](e, t))
                                return
                        } catch (s) {
                            this.app.log("Click Handler name: " + this.app.clickHandlers[i].handler + ", error: ", "error", s)
                        }
            }
            start() {
                this.app.root && this.app.countLoadBlocks == 0 && this.app.injectScript(!1)
            }
            defaultComposite(t) {}
            addEvent(t, e, i) {
                t.addEventListener ? (e === "touchstart" || e === "touchmove") && this.app.isPassiveSupported() ? t.addEventListener(e, i.bind(this), {
                    passive: !0
                }) : t.addEventListener(e, i.bind(this), !1) : t.attachEvent("on" + e, i.bind(this))
            }
            removeEvent(t, e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent("on" + e, i)
            }
            getMainCssSelector() {
                return "#" + (this.app.realRoot ? this.app.realRoot.id : this.app.root.id)
            }
            doubleClickHandler(t, e=!1) {
                let i = t.getAttribute("data-hash")
                  , s = t.getAttribute("href")
                  , o = {
                    checkId: "checkId=" + this.app.doubleClickCheckId,
                    cid: "cid=" + this.app.getWidgetValue("id", 1419550),
                    gb_uid: "gb_uid=" + this.app.getWidgetValue("goodsPartUid", 57751587),
                    h2: "h2=" + this.app.servicerData.h2,
                    hash: "hash=" + i,
                    percent: "percent=" + this.app.doubleClickPercent,
                    type: "type=" + this.app.doubleClickType,
                    url: "url=" + encodeURIComponent(s),
                    uuid: "uuid=" + this.app.servicerData.rid
                };
                e && (o.isOut = "isOut=" + Number(e)),
                this.app.request.pixel("doubleclick", this.app.webProtocol + "//c.adskeeper.co.uk/doubleclick", o, {})
            }
            adBlockDetect() {
                return this.app.adblockDetectResult === null && this.setAdblockDetectResult(),
                this.app.adblockDetectResult
            }
            setAdblockDetectResult() {
                let t = ["banner_ad", "sponsored_ad"]
                  , e = o=>{
                    let c = this.app.context.document.createElement("div");
                    return c.className = o,
                    c.style.setProperty("display", "block", "important"),
                    c.style.setProperty("padding", "1px", "important"),
                    c.style.visibility = "hidden",
                    c.style.position = "absolute",
                    c.innerHTML = ".",
                    this.app.context.document.body.appendChild(c),
                    c
                }
                  , i = o=>!o.offsetHeight
                  , s = o=>{
                    let c = null;
                    for (let d = 0; d < o.length; d++) {
                        c = e(o[d]);
                        let u = i(c);
                        if (this.app.context.document.body.removeChild(c),
                        u)
                            return !0
                    }
                    return !1
                }
                ;
                this.app.adblockDetectResult = s(t)
            }
            isShadowRoot() {
                try {
                    return typeof this.app.root.getRootNode < "u" && !!this.app.root.getRootNode().host
                } catch {
                    return !1
                }
            }
            canUseShadowDom() {
                let t = this.app.root.parentNode;
                return !!(t && (t.id?.indexOf("ScriptRoot") > 0 || t.dataset?.type === "_mgwidget") && typeof t.attachShadow == "function")
            }
            getRoot() {
                return this.app.isShadowRoot() ? this.app.root.getRootNode().host : this.app.root.parentElement
            }
            generatePvid() {
                return new Date().getTime().toString(16) + (Math.round(Math.random() * 1e9) + 2147483648).toString(16)
            }
            getLct(t) {
                return t - t % 60
            }
            isAmp() {
                return typeof this.app.context.context < "u" && typeof this.app.context.context.data < "u" && typeof this.app.context.context.data.widget < "u" ? !0 : typeof this.app.context.boundingClientRect1419550 < "u" && typeof this.app.context.intersectionRect1419550 < "u"
            }
            isIframe() {
                try {
                    return this.app.context.self !== this.app.context.top
                } catch {
                    return !0
                }
            }
            startMgqwp() {
                typeof this.context._mgwqp < "u" ? setTimeout(()=>{
                    this.context._mgwqp()
                }
                , 0) : setTimeout(()=>{
                    this.startMgqwp()
                }
                , 50)
            }
            htmlEntities(t) {
                return String(typeof t < "u" ? t : "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
            }
            getRenderer(t) {
                return t.indexOf("data-template-schema") === -1 ? this.app.renderClassicBlock : this.app.renderSchematicBlock
            }
            getViewrateParams() {
                let t = Object.keys(this.app.teaserData).filter(s=>this.app.teaserData[s].isViewed)
                  , e = t.length
                  , i = t.map(s=>this.app.teaserData[s].page).filter((s,o,c)=>c.indexOf(s) === o).reduce((s,o)=>s + this.app.pagesServicerData.filter(c=>c.page === o)[0]?.teasersCount, 0);
                return {
                    views: e,
                    renders: i
                }
            }
            getUserAgentDataParams() {
                if (this.app.userAgentDataParams)
                    return this.app.userAgentDataParams;
                try {
                    if (this.app.context.sessionStorage)
                        return JSON.parse(this.app.context.sessionStorage.getItem("_mgAgentDataParams"))
                } catch {
                    return null
                }
                return null
            }
            getVideoMetricsParams() {
                if (this.app.videoMetricsParams)
                    return this.app.videoMetricsParams;
                try {
                    if (this.app.context.sessionStorage)
                        return JSON.parse(this.app.context.sessionStorage.getItem("_mgVideoMetricsParams"))
                } catch {
                    return null
                }
                return null
            }
        }
    }
    );
    function te(g, t) {
        async function e(...i) {
            await pe.acquireStorage(()=>{
                g.call(this, ...i)
            }
            ),
            typeof i[i.length - 1] == "function" && i[i.length - 1]()
        }
        return e
    }
    var zt, gt, Ce, pe, Ht, vo, At, Pe = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        (function(g) {
            g.ping = "ping",
            g.get = "get",
            g.set = "set",
            g.lock = "lock",
            g.unlock = "unlock"
        }
        )(zt || (zt = {}));
        (function(g) {
            g.local = "local",
            g.session = "session",
            g.page = "page"
        }
        )(gt || (gt = {}));
        Ce = class {
            constructor() {
                if (this.callbacks = {},
                this.pingIntervalId = null,
                this.internalStore = {},
                this.isCrossDomainStorageEnabled()) {
                    let t = document.createElement("iframe");
                    t.src = "https://cdn.adskeeper.co.uk/widgets/storage.html",
                    t.style.display = "none",
                    document.body.appendChild(t),
                    this.frame = t.contentWindow,
                    this.internalStore[gt.local] = {},
                    this.internalStore[gt.session] = {},
                    this.internalStore[gt.page] = {},
                    window.addEventListener("message", e=>{
                        if (typeof e.data._mgstorage < "u") {
                            let i = e.data._mgstorage;
                            i.error && console.error(i.error),
                            this.callbacks[i.eventId](i)
                        }
                    }
                    )
                } else
                    this.internalStore[gt.local] = localStorage,
                    this.internalStore[gt.session] = sessionStorage,
                    this.internalStore[gt.page] = window
            }
            async waitForFrame() {
                return new Promise(t=>{
                    this.pingIntervalId = setInterval(()=>{
                        let e = this.getEventId();
                        this.callbacks[e] = ()=>{
                            clearInterval(this.pingIntervalId),
                            t()
                        }
                        ,
                        this.request({
                            eventId: e,
                            srcId: "widget",
                            action: zt.ping
                        })
                    }
                    , 100)
                }
                )
            }
            async get(t, e, i) {
                return new Promise(s=>{
                    let o = this.getEventId();
                    this.callbacks[o] = c=>{
                        s(c.data)
                    }
                    ,
                    this.request({
                        eventId: o,
                        engine: e,
                        srcId: "widget",
                        action: zt.get,
                        lockId: t,
                        key: i
                    })
                }
                )
            }
            async set(t, e, i, s) {
                return new Promise(o=>{
                    let c = this.getEventId();
                    this.callbacks[c] = ()=>{
                        o()
                    }
                    ,
                    this.request({
                        eventId: c,
                        engine: e,
                        srcId: "widget",
                        action: zt.set,
                        lockId: t,
                        key: i,
                        val: s
                    })
                }
                )
            }
            async lock() {
                return new Promise(t=>{
                    let e = this.getEventId();
                    this.callbacks[e] = i=>{
                        t(i.data)
                    }
                    ,
                    this.request({
                        eventId: e,
                        srcId: "widget",
                        action: zt.lock
                    })
                }
                )
            }
            async unlock(t) {
                return new Promise(e=>{
                    let i = this.getEventId();
                    this.callbacks[i] = s=>{
                        e(s)
                    }
                    ,
                    this.request({
                        eventId: i,
                        srcId: "widget",
                        action: zt.unlock,
                        lockId: t
                    })
                }
                )
            }
            async fetch(t) {
                this.internalStore[gt.local] = JSON.parse(await this.get(t, gt.local, this.getStorageKey())) ?? {},
                this.internalStore[gt.session] = JSON.parse(await this.get(t, gt.session, this.getStorageKey())) ?? {},
                this.internalStore[gt.page] = JSON.parse(await this.get(t, gt.page, this.getStorageKey())) ?? {}
            }
            async flush(t) {
                await this.set(t, gt.local, this.getStorageKey(), JSON.stringify(this.internalStore[gt.local])),
                await this.set(t, gt.session, this.getStorageKey(), JSON.stringify(this.internalStore[gt.session])),
                await this.set(t, gt.page, this.getStorageKey(), JSON.stringify(this.internalStore[gt.page])),
                this.internalStore[gt.local] = {},
                this.internalStore[gt.session] = {},
                this.internalStore[gt.page] = {},
                await this.unlock(t)
            }
            getStorageKey() {
                return "storage862931"
            }
            isCrossDomainStorageEnabled() {
                return !1
            }
            engine(t) {
                return {
                    getItem: e=>{
                        let i = this.internalStore[t][e] ?? null;
                        return i === "undefined" && (i = null),
                        i
                    }
                    ,
                    setItem: (e,i)=>{
                        this.internalStore[t][e] = i
                    }
                    ,
                    removeItem: e=>{
                        delete this.internalStore[t][e]
                    }
                }
            }
            async acquireStorage(t) {
                try {
                    if (this.isCrossDomainStorageEnabled()) {
                        let e = await this.lock();
                        await this.fetch(e),
                        t(),
                        await this.flush(e)
                    } else
                        t()
                } catch (e) {
                    console.error(e)
                }
            }
            getEventId() {
                return ("0000000000" + Math.round(Math.random() * 1e10).toString(16)).slice(-10)
            }
            request(t) {
                this.frame.postMessage({
                    _mgstorage: t
                }, "*")
            }
        }
        ,
        pe = new Ce,
        Ht = pe.engine(gt.local),
        vo = pe.engine(gt.session),
        At = pe.engine(gt.page)
    }
    );
    var ji = {};
    at(ji, {
        VideoMetricsBlock: ()=>Be
    });
    var Be, Zi = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        Be = class extends W {
            constructor(t) {
                super(t),
                this.name = "VideoMetricsBlock",
                this.userAgent = this.app.context.navigator?.userAgent || "",
                this.exceptionAgentList = ["Zalo iOS"],
                this.videoType = "video/mp4",
                this.isMetricsCollected = !1,
                this.collectMetrics()
            }
            waitForCollectMetrics() {
                let t, i = new Date().getTime();
                return new Promise(s=>{
                    t = setInterval(()=>{
                        if (new Date().getTime() - i >= 1e3) {
                            this.app.videoMetricsParams = {
                                mp4: 0,
                                ap: 0
                            },
                            clearInterval(t),
                            this.app.log(`${this.name}: too long Video Promise resolving process.`),
                            s();
                            return
                        }
                        this.isMetricsCollected && (clearInterval(t),
                        s())
                    }
                    , 10)
                }
                )
            }
            collectMetrics() {
                let t = {
                    mp4: 0,
                    ap: 0
                }
                  , e = ()=>{
                    this.isMetricsCollected = !0,
                    this.app.videoMetricsParams = {
                        ...t
                    };
                    try {
                        this.app.context.sessionStorage && this.app.context.sessionStorage.setItem("_mgVideoMetricsParams", JSON.stringify(t))
                    } catch {}
                }
                ;
                if (this.isIosWebview() && (this.isExceptionAgent() || Lt.IM === 2)) {
                    e();
                    return
                }
                try {
                    let i = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])],{
                        type: this.videoType
                    })
                      , s = this.app.context.document.createElement("video");
                    if (s.muted = !0,
                    s.autoplay = !0,
                    s.loop = !0,
                    s.setAttribute("playsinline", ""),
                    s.setAttribute("webkit-playsinline", ""),
                    s.src = URL.createObjectURL(i),
                    typeof s.canPlayType < "u") {
                        let c = s.canPlayType(this.videoType);
                        (c == "maybe" || c == "probably") && (t.mp4 = 1)
                    }
                    let o = s.play();
                    typeof o < "u" ? o.then(()=>{
                        t.ap = 1,
                        s.src = "",
                        typeof s.remove < "u" && s.remove(),
                        e()
                    }
                    ).catch(c=>{
                        t.ap = 0,
                        s.src = "",
                        typeof s.remove < "u" && s.remove(),
                        e()
                    }
                    ) : (t.ap = 0,
                    s.src = "",
                    typeof s.remove < "u" && s.remove(),
                    e())
                } catch {
                    t.mp4 = 0,
                    t.ap = 0,
                    e()
                }
            }
            isIosWebview() {
                return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(this.userAgent)
            }
            isExceptionAgent() {
                return this.exceptionAgentList.some(t=>this.userAgent.indexOf(t) !== -1)
            }
        }
    }
    );
    var Ki = {};
    at(Ki, {
        NavigatorAgentDataBlock: ()=>Le
    });
    var Kt, Le, Ji = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        (function(g) {
            g.architecture = "scua",
            g.bitness = "scub",
            g.brands = "scu",
            g.fullVersionList = "scufvl",
            g.mobile = "scum",
            g.model = "scumd",
            g.platform = "scup",
            g.platformVersion = "scupv",
            g.uaFullVersion = "scufv",
            g.wow64 = "scuw"
        }
        )(Kt || (Kt = {}));
        Le = class extends W {
            constructor(t) {
                super(t),
                this.name = "NavigatorAgentDataBlock",
                this.isDataCollected = !1,
                this.collectUserAgentData()
            }
            waitForUserAgentData() {
                let t, i = new Date().getTime();
                return new Promise(s=>{
                    t = setInterval(()=>{
                        if (new Date().getTime() - i >= 1e3) {
                            this.app.userAgentDataParams = null,
                            clearInterval(t),
                            this.app.log(`${this.name}: too long collecting data process.`),
                            s();
                            return
                        }
                        this.isDataCollected && (clearInterval(t),
                        s())
                    }
                    , 10)
                }
                )
            }
            collectUserAgentData() {
                this.app.context.navigator.userAgentData.getHighEntropyValues(Object.keys(Kt)).then(t=>{
                    let e = {};
                    Object.keys(t).forEach(i=>{
                        let s = t[i];
                        if (typeof s == "boolean" && (e[Kt[i]] = `${encodeURIComponent(s ? "?1" : "?0")}`),
                        typeof s == "string" && s.length && (e[Kt[i]] = `${encodeURIComponent('"' + s + '"')}`),
                        Array.isArray(s) && s.length) {
                            let o = s.reduce((c,d,u,f)=>c + `"${d.brand}";v="${d.version}"${u !== f.length - 1 ? ", " : ""}`, "");
                            e[Kt[i]] = `${encodeURIComponent(o)}`
                        }
                    }
                    ),
                    this.isDataCollected = !0,
                    this.app.userAgentDataParams = {
                        ...e
                    };
                    try {
                        this.app.context.sessionStorage && this.app.context.sessionStorage.setItem("_mgAgentDataParams", JSON.stringify(e))
                    } catch {}
                }
                ).catch(t=>{
                    this.isDataCollected = !0,
                    this.app.userAgentDataParams = null
                }
                )
            }
        }
    }
    );
    var Xi = {};
    at(Xi, {
        AmpRenderBlock: ()=>Ae
    });
    var Ae, Qi = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Ae = class extends W {
            constructor(t) {
                super(t),
                this.name = "AmpRenderBlock",
                this.addHook("afterPreRenderNewsHooks", this.ampRenderStart),
                this.addHook("afterLoadNewsHooks", this.ampResizeHook),
                this.ampPageView(),
                this.addHook("beforePrepareCappingDataHooks", this.ampPageImp, 1e4)
            }
            ampRenderStart() {
                this.ampResizedHeight = this.app.precalcRect.height,
                this.app.context.context.renderStart({
                    width: this.app.precalcRect.width,
                    height: this.app.precalcRect.height
                })
            }
            ampPageView() {
                typeof this.app.context.context.computeInMasterFrame < "u" && this.app.context.context.computeInMasterFrame(this.app.context, "_mgPageViewAmp862931", t=>{
                    let e = this.app.context.context.pageViewId
                      , i = localStorage.getItem("_mgPageViewAmpId862931") ? localStorage.getItem("_mgPageViewAmpId862931") : "";
                    if (e === i) {
                        let s = this.app.getMostTopWindow();
                        s._mgPageView862931 = s._mgPageView862931 || [],
                        s._mgPageView862931.push(s.location.pathname),
                        s._mgPageViewEndPoint862931 = s._mgPageViewEndPoint862931 || [],
                        s._mgPageViewEndPoint862931.push(s.location.pathname),
                        this.app.initServicerRequest = !1
                    }
                    localStorage.setItem("_mgPageViewAmpId862931", e),
                    t()
                }
                , ()=>{}
                )
            }
            ampPageImp(t) {
                typeof this.app.context.context.computeInMasterFrame < "u" ? this.app.context.context.computeInMasterFrame(this.app.context, "_mgPageImpAmp862931", e=>{
                    let i = this.app.context.context.pageViewId
                      , s = localStorage.getItem("_mgPageImpAmpId862931") ? localStorage.getItem("_mgPageImpAmpId862931") : "";
                    if (i === s) {
                        let o = this.app.getMostTopWindow();
                        o._mgPageImp862931 = o._mgPageImp862931 || [],
                        o._mgPageImp862931.push(o.location.pathname)
                    }
                    localStorage.setItem("_mgPageImpAmpId862931", i),
                    e()
                }
                , ()=>{}
                ) : t()
            }
            askAmpForResize() {
                let t = Math.ceil(this.app.root.getBoundingClientRect().height)
                  , e = this.app.precalcRect.width;
                this.app.context.context.requestResize(e, t).then(()=>{
                    this.app.ampResizeDenied = !1,
                    this.ampResizedHeight = t
                }
                , ()=>{
                    this.app.ampResizeDenied = !0
                }
                )
            }
            ampResizeHook() {
                typeof this.ampResizeInterval > "u" && (this.ampResizeInterval = setInterval(()=>{
                    let t = Math.ceil(this.app.root.getBoundingClientRect().height);
                    typeof this.app.ampResizeDenied < "u" && this.app.ampResizeDenied ? this.askAmpForResize() : t !== this.ampResizedHeight && this.askAmpForResize()
                }
                , 100))
            }
        }
    }
    );
    var Yi = {};
    at(Yi, {
        MgqBlock: ()=>_e
    });
    var _e, ts = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        _e = class extends W {
            constructor(t) {
                super(t),
                this.isLongCheck = !1,
                this.name = "MgqBlock",
                this.worker = this.createWorker(),
                this.init()
            }
            init() {
                this.app.context._mgq = this.app.context._mgq || [],
                typeof this.app.context._mgqp > "u" && (this.app.context._mgqp = this.worker,
                this.app.context._mgqt = new Date().getTime(),
                this.worker())
            }
            createWorker() {
                return ()=>{
                    let t = this.app.context._mgq.length
                      , e = this.app.context._mgq.slice(0)
                      , i = 0;
                    for (let s = 0; s < t; s++) {
                        let o = e[s]
                          , c = this.app.context
                          , d = o[0];
                        if (o[0].indexOf(".") > 0 && (c = c[o[0].split(".")[0]],
                        d = o[0].split(".")[1]),
                        typeof c[d] == "function" && d !== "MgSensorInvoke") {
                            try {
                                c[d].apply(c, o.slice(1))
                            } catch (u) {
                                this.app.log("mgq error:", "error", u),
                                this.app.debugBlock.sendData(`mgq error: ${u.message}`)
                            }
                            this.app.context._mgq.splice(s - i, 1),
                            i++
                        }
                    }
                    this.app.context._mgqi || (this.app.context._mgqi = this.app.context.setInterval(()=>{
                        this.worker()
                    }
                    , 5)),
                    this.isLongCheck || new Date().getTime() - this.app.context._mgqt > 1e4 && (this.isLongCheck = !0,
                    this.app.context.clearInterval(this.app.context._mgqi),
                    this.app.context._mgqi = this.app.context.setInterval(()=>{
                        this.worker()
                    }
                    , 100))
                }
            }
        }
    }
    );
    var es = {};
    at(es, {
        UtilsBlock: ()=>Ge
    });
    var Ge, is = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Ge = class extends W {
            constructor(t) {
                super(t),
                this.isMobileResult = null,
                this.name = "UtilsBlock"
            }
            getScroll() {
                let t = this.app.getMostTopWindow();
                return {
                    top: t.document.body.scrollTop || t.document.documentElement.scrollTop || 0,
                    left: t.document.body.scrollLeft || t.document.documentElement.scrollLeft || 0
                }
            }
            getViewportSize() {
                let t = this.app.getMostTopWindow();
                return {
                    width: t.innerWidth || t.document.documentElement.clientWidth,
                    height: t.innerHeight || t.document.documentElement.clientHeight
                }
            }
            getRect(t, e) {
                let i = t.getBoundingClientRect()
                  , s = {
                    top: i.top,
                    bottom: i.bottom,
                    left: i.left,
                    right: i.right,
                    height: i.height ? i.height : i.bottom - i.top,
                    width: i.width ? i.width : i.right - i.left
                };
                if (this.app.context.self !== this.app.context.top) {
                    let o = this.getFrame();
                    if (o) {
                        let c = o.getBoundingClientRect();
                        s.top += c.top,
                        s.bottom += c.top,
                        s.left += c.left,
                        s.right += c.left
                    }
                }
                if (e) {
                    let o = this.getScroll();
                    s.top += o.top,
                    s.bottom += o.top,
                    s.left += o.left,
                    s.right += o.left
                }
                return s
            }
            getFrame() {
                let t;
                try {
                    let e;
                    for (let i = this.app.context; i.frameElement; i = i.parent)
                        e = i.frameElement;
                    t = e
                } catch {
                    t = null
                }
                return t
            }
            elementViewportIntersection(t) {
                let e = this.app.utils.getRect(t, !0)
                  , i = this.app.utils.getViewportSize()
                  , s = this.app.utils.getScroll();
                for (let f in e)
                    e.hasOwnProperty(f) && (e[f] = Math.floor(e[f]));
                i.top = s.top,
                i.bottom = s.top + i.height,
                i.left = s.left,
                i.right = s.left + i.width;
                let o = e.width * e.height;
                if (!o)
                    return 0;
                let c = Math.max(0, Math.min(e.right, i.right) - Math.max(e.left, i.left))
                  , d = Math.max(0, Math.min(e.bottom, i.bottom) - Math.max(e.top, i.top));
                return c * d / o
            }
            isMobile() {
                if (this.isMobileResult === null) {
                    let t = !1;
                    (function(e) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
                    }
                    )(navigator.userAgent || navigator.vendor || window.opera),
                    this.isMobileResult = t
                }
                return this.isMobileResult
            }
            isTablet() {
                let t = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
                return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(t)
            }
            generateHash() {
                return Date.now().toString(36) + Math.random().toString(36).substring(2)
            }
            isChromeWebView() {
                let t = ["WebView", "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})", "Linux; U; Android"]
                  , e = new RegExp("(" + t.join("|") + ")","ig");
                return !!navigator.userAgent.match(e)
            }
            isSupportES6() {
                try {
                    return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"),
                    !0
                } catch {
                    return !1
                }
            }
        }
    }
    );
    var ss = ae(ce=>{
        "use strict";
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        Object.defineProperty(ce, "__esModule", {
            value: !0
        });
        ce.ConsentsBlock = void 0;
        var bn = function() {
            function g(t, e, i) {
                e === void 0 && (e = 30),
                i === void 0 && (i = !1);
                var s;
                this.hasStorageConsentTCFv2 = !1,
                this.app = t,
                this.consentTimeout = e,
                this.isWaitConsent = i,
                this.app.requestParams = this.app.requestParams || {},
                this.topWindow = this.app.getMostTopWindow(),
                this.actualizeStorageConsentTCFv2(),
                this.isWaitConsent && !this.hasStorageConsentTCFv2 && (this.consentTimeout = Number((s = this.app.globalSettings) === null || s === void 0 ? void 0 : s.widget_consent_wait_time_ms) || 300,
                this.app.requestParams.nocmp = 1)
            }
            return g.prototype.actualizeStorageConsentTCFv2 = function() {
                var t, e = Number((t = this.app.globalSettings) === null || t === void 0 ? void 0 : t.widget_consent_outdated_time) || 168;
                try {
                    if (this.app.context.localStorage && !this.app.isOurIframe) {
                        var i = JSON.parse(this.app.context.localStorage.getItem("MG_tcfv2Data") || "{}");
                        i?.timestamp && new Date().getTime() - i.timestamp < e * 60 * 60 * 1e3 ? this.hasStorageConsentTCFv2 = !0 : this.app.context.localStorage.removeItem("MG_tcfv2Data")
                    }
                } catch {
                    this.app.log("ConsentsAdapter - localStorage not found.")
                }
            }
            ,
            g.prototype.initTCFv2Proxy = function() {
                if (typeof this.app.context.__tcfapi == "function")
                    return;
                this.isSearchingLocator = !0;
                for (var t = this.app.context, e, i = {}; t; ) {
                    try {
                        if (t.frames.__tcfapiLocator) {
                            e = t;
                            break
                        }
                    } catch (o) {
                        this.app.log(o, "warn", o)
                    }
                    if (t === this.app.context.top)
                        break;
                    t = t.parent
                }
                if (this.isSearchingLocator = !1,
                !e)
                    return;
                this.app.context.__tcfapi = function(o, c, d, u) {
                    var f = Math.random() + ""
                      , I = {
                        __tcfapiCall: {
                            command: o,
                            parameter: u,
                            version: c,
                            callId: f
                        }
                    };
                    i[f] = d,
                    e.postMessage(I, "*")
                }
                ;
                function s(o) {
                    var c = {};
                    try {
                        c = typeof o.data == "string" ? JSON.parse(o.data) : o.data
                    } catch (u) {
                        this.app.log(u, "warn", u)
                    }
                    var d = c ? c.__tcfapiReturn : null;
                    d && typeof i[d.callId] == "function" && i[d.callId](d.returnValue, d.success)
                }
                this.app.context.addEventListener("message", s.bind(this), !1)
            }
            ,
            g.prototype.tcfv2Api = function(t) {
                var e = this, i = new Date().getTime(), s;
                return new Promise(function(o, c) {
                    var d = function() {
                        e.app.tcfv2Enabled = !0,
                        e.app.requestParams.tcfV2 = 1;
                        try {
                            var u = function(f, I) {
                                if (I && (f.eventStatus === "tcloaded" || f.eventStatus === "useractioncomplete")) {
                                    var T = new Date().getTime();
                                    e.app.tcfv2Data = f,
                                    e.app.context.localStorage && (e.app.isOurIframe ? e.app.context.localStorage.removeItem("MG_tcfv2Data") : (f.timestamp = T,
                                    e.app.context.localStorage.setItem("MG_tcfv2Data", JSON.stringify(f)))),
                                    e.app.log("Consents. TCFv2 API done."),
                                    e.app.startServicerTime && e.app.sendConsentLog(T),
                                    e.app.waitConsentResolver && e.app.waitConsentResolver(),
                                    t && setTimeout(function() {
                                        t()
                                    }, 0),
                                    o()
                                } else
                                    I && !f.gdprApplies && (t && setTimeout(function() {
                                        t()
                                    }, 0),
                                    o()),
                                    e.app.log("Consents. TCFv2 API paused.")
                            };
                            e.app.context.__tcfapi("addEventListener", 2, u)
                        } catch (f) {
                            e.app.log("Consents. TCFv2 API fail."),
                            t && setTimeout(function() {
                                t()
                            }, 0),
                            c(f)
                        }
                    };
                    e.initTCFv2Proxy(),
                    typeof e.app.context.__tcfapi == "function" ? d() : s = setInterval(function() {
                        if (new Date().getTime() - i >= e.consentTimeout * 1e3) {
                            clearInterval(s),
                            e.app.log("Consents. TCFv2 API not found. Limit time end."),
                            t && setTimeout(function() {
                                t()
                            }, 0),
                            o();
                            return
                        }
                        e.isSearchingLocator || e.initTCFv2Proxy(),
                        typeof e.app.context.__tcfapi == "function" && (clearInterval(s),
                        d())
                    }, 500)
                }
                )
            }
            ,
            g.prototype.gdprApi = function(t) {
                var e = this;
                return new Promise(function(i, s) {
                    if (typeof e.topWindow.__cmp == "function") {
                        e.app.cmpEnabled = !0,
                        e.app.requestParams.tcfV1 = 1;
                        try {
                            e.topWindow.__cmp("getConsentData", null, function(o) {
                                e.app.consentData = o,
                                e.app.context.localStorage && (e.app.isOurIframe ? e.app.context.localStorage.removeItem("MG_ConsentData") : e.app.context.localStorage.setItem("MG_ConsentData", JSON.stringify(o))),
                                e.app.log("Consents. TCFv1 API done."),
                                t && setTimeout(function() {
                                    t()
                                }, 0),
                                i()
                            })
                        } catch (o) {
                            t && setTimeout(function() {
                                t()
                            }, 0),
                            s(o)
                        }
                    } else
                        t && setTimeout(function() {
                            t()
                        }, 0),
                        i()
                }
                )
            }
            ,
            g.prototype.ccpaApi = function(t) {
                var e = this;
                return new Promise(function(i, s) {
                    if (typeof e.topWindow.__uspapi == "function") {
                        e.app.uspEnabled = !0;
                        try {
                            e.topWindow.__uspapi("getUSPData", 1, function(o, c) {
                                c ? (e.app.uspString = o.uspString || "",
                                e.app.context.localStorage && e.app.uspString !== "" && (e.app.isOurIframe ? e.app.context.localStorage.removeItem("MG_uspString") : e.app.context.localStorage.setItem("MG_uspString", e.app.uspString)),
                                e.app.log("Consents. CCPA API done.")) : e.app.log("Consents. CCPA API fail."),
                                t && setTimeout(function() {
                                    t()
                                }, 0),
                                i()
                            })
                        } catch (o) {
                            t && setTimeout(function() {
                                t()
                            }, 0),
                            s(o)
                        }
                    } else
                        t && setTimeout(function() {
                            t()
                        }, 0),
                        i()
                }
                )
            }
            ,
            g.prototype.getGdprData = function() {
                var t, e, i, s, o = null;
                if ((this.app.cmpEnabled || this.app.tcfv2Enabled || this.app.isAmp()) && (this.app.isAmp() && this.app.context.context.initialConsentValue ? o = {
                    gdpr_consent: this.app.context.context.initialConsentValue,
                    gdpr: 1
                } : !((t = this.app) === null || t === void 0) && t.tcfv2Data && typeof ((e = this.app.tcfv2Data) === null || e === void 0 ? void 0 : e.tcString) < "u" ? (o = {
                    gdpr_consent: this.app.tcfv2Data.tcString,
                    gdpr: typeof this.app.tcfv2Data.gdprApplies < "u" ? +this.app.tcfv2Data.gdprApplies : ""
                },
                this.app.consentOrigin = "cmp") : !((i = this.app) === null || i === void 0) && i.consentData && typeof ((s = this.app.consentData) === null || s === void 0 ? void 0 : s.consentData) < "u" && (o = {
                    gdpr_consent: this.app.consentData.consentData,
                    gdpr: typeof this.app.consentData.gdprApplies < "u" ? +this.app.consentData.gdprApplies : ""
                })),
                o === null)
                    try {
                        if (this.app.context.localStorage && !this.app.isOurIframe) {
                            var c = null;
                            c = JSON.parse(this.app.context.localStorage.getItem("MG_ConsentData") || "null"),
                            c !== null && typeof c.consentData < "u" && (o = {
                                gdpr_consent: c.consentData,
                                gdpr: typeof c.gdprApplies < "u" ? +c.gdprApplies : ""
                            }),
                            c = JSON.parse(this.app.context.localStorage.getItem("MG_tcfv2Data") || "null"),
                            c !== null && typeof c.tcString < "u" && (o = {
                                gdpr_consent: c.tcString,
                                gdpr: typeof c.gdprApplies < "u" ? +c.gdprApplies : ""
                            },
                            this.app.consentOrigin = "storage")
                        }
                    } catch (d) {
                        this.app.log("getGdprData -> " + d.message)
                    }
                return o
            }
            ,
            g.prototype.getUspData = function() {
                var t = null;
                if (this.app.uspEnabled && this.app.uspString != "" && typeof this.app.uspString < "u")
                    t = {
                        us_privacy: this.app.uspString
                    };
                else
                    try {
                        if (this.app.context.localStorage && !this.app.isOurIframe) {
                            var e = this.app.context.localStorage.getItem("MG_uspString");
                            e != null && e != "" && typeof e < "u" && (t = {
                                us_privacy: e
                            })
                        }
                    } catch (i) {
                        this.app.log("getUspData -> " + i.message)
                    }
                return t
            }
            ,
            g.prototype.getConsentData = function() {
                var t = {}
                  , e = this.getGdprData()
                  , i = this.getUspData();
                return e != null && Object.keys(e).forEach(function(s) {
                    return t[s] = e[s]
                }),
                i != null && Object.keys(i).forEach(function(s) {
                    return t[s] = i[s]
                }),
                Object.keys(t).length > 0 ? t : null
            }
            ,
            g.prototype.fetchConsents = function() {
                var t = this;
                return Promise.allSettled([this.tcfv2Api(), this.gdprApi(), this.ccpaApi()]).then(function() {
                    return t.getConsentData()
                })
            }
            ,
            g
        }();
        ce.ConsentsBlock = bn
    }
    );
    var ns = {};
    at(ns, {
        ConsentsBlock: ()=>Re
    });
    var as, Re, os = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        as = ne(ss()),
        Re = class extends W {
            constructor(t) {
                super(t),
                this.consentTimeout = 30,
                this.isWidgetLoaded = !1,
                this.name = "ConsentsBlock",
                this.isWidgetObservable = !1,
                this.isWaitConsent = this.getWaitConsent(),
                this.consentsAdapter = new as.ConsentsBlock(t,this.consentTimeout,this.isWaitConsent),
                this.addHook("beforeInitHooks", this.consentsAdapter.tcfv2Api.bind(this.consentsAdapter), 50),
                this.addHook("beforeInitHooks", this.consentsAdapter.gdprApi.bind(this.consentsAdapter), 50),
                this.addHook("beforeInitHooks", this.consentsAdapter.ccpaApi.bind(this.consentsAdapter), 50)
            }
            getWaitConsent() {
                if (this.app.isAmp())
                    return !1
            }
            observeWidget() {
                this.viewInterval = setInterval(()=>{
                    this.app.utils.elementViewportIntersection(this.app.root) > 0 && (clearInterval(this.viewInterval),
                    this.loadWidget(!0))
                }
                , 150)
            }
            loadWidget(t=!1) {
                this.isWidgetLoaded || (this.isWidgetLoaded = !0,
                this.viewInterval && clearInterval(this.viewInterval),
                typeof this.app.requestParams.nocmp < "u" && delete this.app.requestParams.nocmp,
                t && (this.app.log(`${this.name}: waiting for consents is complete, widget in viewable zone.`),
                this.app.requestParams.cmpreason = "wvzs"),
                this.app.injectScript(!1))
            }
            getConsentData() {
                let t = this.consentsAdapter.getConsentData();
                return (!t || !t.gdpr) && typeof this.app.context._mgGdprApplies < "u" && (t = t || {},
                t.gdpr = this.app.context._mgGdprApplies),
                (!t || !t.gdpr_consent) && typeof this.app.context._mgConsentData < "u" && (t = t || {},
                t.gdpr_consent = this.app.context._mgConsentData),
                t
            }
            waitConsent(t) {
                this.waitConsentResolve().then(()=>{
                    this.app.log(`${this.name}: waiting for consents is complete, consents received.`),
                    this.loadWidget()
                }
                ),
                this.isWidgetObservable && this.observeWidget(),
                setTimeout(()=>{
                    this.app.log(`${this.name}: waiting for consents is complete, limit time end.`),
                    this.loadWidget()
                }
                , t * 1e3)
            }
            async waitConsentResolve() {
                return new Promise(t=>{
                    this.app.waitConsentResolver = t
                }
                )
            }
        }
    }
    );
    var rs = {};
    at(rs, {
        RequestBlock: ()=>Me
    });
    var Me, ps = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Me = class extends W {
            pixel(t, e, i, s) {
                this._send(t, e, i, s, (o,c)=>{
                    this._imgRequest(o, c)
                }
                )
            }
            beacon(t, e, i, s) {
                this._send(t, e, i, s, (o,c,d)=>{
                    if (typeof navigator.sendBeacon == "function")
                        try {
                            navigator.sendBeacon(c),
                            this.app.log(`Request beacon ${o} started`)
                        } catch (u) {
                            this.app.log(`Request beacon ${o} error: `, "error", u),
                            this._imgRequest(o, c)
                        }
                    else
                        this._imgRequest(o, c)
                }
                )
            }
            beaconBlob(t, e, i, s) {
                this._send(t, e, {}, s, (o,c,d)=>{
                    if (typeof navigator.sendBeacon == "function")
                        try {
                            navigator.sendBeacon(c, i),
                            this.app.log(`Request beaconBlob ${o} started`)
                        } catch (u) {
                            this.app.log(`Request beaconBlob ${o} error: `, "error", u),
                            this._xhrRequest(o, c, "POST", i)
                        }
                    else
                        this._xhrRequest(o, c, "POST", i)
                }
                )
            }
            script(t, e, i, s) {
                this._send(t, e, i, s, (o,c)=>{
                    let d = this.app.context.document.createElement("SCRIPT");
                    d.src = c,
                    d.type = "text/javascript",
                    d.async = !0,
                    s.charset && (d.charset = s.charset),
                    s.onerror && (d.onerror = s.onerror),
                    s.dest ? (s.dest.appendChild(d),
                    this.app.log(`Request script ${o} started`)) : this.app.log(`Request script ${o} failed - options.dest is undefined!`, "warn")
                }
                )
            }
            _prepareUrl(t, e) {
                this.app.consentDataParams = this.app.consentsBlock.getConsentData(),
                this.app.consentDataParams && t.indexOf("/vz") == -1 && Object.keys(this.app.consentDataParams).forEach(s=>{
                    let o = this.app.consentDataParams[s];
                    t.indexOf(s) === -1 && (e[s] = `${s}=${o}`)
                }
                );
                let i = [];
                for (let s of Object.keys(e))
                    (e[s][0] === "?" || e[s][0] === "&") && (e[s] = e[s].substring(1)),
                    i.push(e[s]);
                return i.length && (t.slice(-1) !== "?" && t.slice(-1) !== "&" && (t += t.indexOf("?") === -1 ? "?" : "&"),
                t += i.join("&")),
                t
            }
            _send(t, e, i, s, o) {
                if (s.unique) {
                    if (this.app.context._mgRequests = this.app.context._mgRequests || {},
                    this.app.context._mgRequests[t]) {
                        this.app.log(`Request ${t} stopped - already defined on page`, "warn");
                        return
                    }
                    this.app.context._mgRequests[t] = !0
                }
                e = this._prepareUrl(e, i),
                o(t, e, s)
            }
            _imgRequest(t, e) {
                let i = this.app.context.document.createElement("IMG");
                i.referrerPolicy = "strict-origin-when-cross-origin",
                i.src = e,
                i.onerror = ()=>this.app.log(`Request image ${t} load error`, "error"),
                this.app.log(`Request image ${t} started`)
            }
            _xhrRequest(t, e, i, s) {
                let o = new XMLHttpRequest;
                o.open(i, e, !0),
                o.onerror = ()=>this.app.log(`Request XHR ${t} load error`),
                o.send(s),
                this.app.log(`Request image ${t} started`)
            }
        }
    }
    );
    var cs = {};
    at(cs, {
        ContextBlock: ()=>Oe
    });
    var Oe, ls = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Oe = class extends W {
            constructor(t) {
                super(t),
                this.topmostWindowAccessible = null,
                this.name = "ContextBlock"
            }
            getTopmostWindowAccessible() {
                if (!this.topmostWindowAccessible)
                    try {
                        for (let t = this.app.context; t.document && (this.topmostWindowAccessible = t,
                        t != t.top); t = t.parent)
                            ;
                    } catch {}
                return this.topmostWindowAccessible
            }
            parseUrl(t) {
                let e = document.createElement("A");
                e.href = t;
                let i = e.search.replace(/^\?/, "").split("&")
                  , s = [];
                for (let c of i)
                    if (c !== "") {
                        let d = c.split("=");
                        s.push({
                            key: d[0],
                            value: typeof d[1] < "u" ? d[1] : ""
                        })
                    }
                let o = e.pathname;
                return o === "" && (o = "/"),
                o.charAt(0) !== "/" && (o = "/" + e.pathname),
                {
                    protocol: e.protocol,
                    host: e.host,
                    pathname: o,
                    search: e.search,
                    hash: e.hash,
                    parsedParams: s
                }
            }
            composeUrl(t) {
                return t.protocol + "//" + t.host + t.pathname + t.search + t.hash
            }
            stripAmpParts(t) {
                let e = t
                  , i = this.parseUrl(t)
                  , s = "cdn.ampproject.org";
                if (i.host.indexOf(s) > 0 && i.host.indexOf(s) === i.host.length - s.length) {
                    let o = i.pathname.split("/");
                    if (typeof o[1] < "u" && (o[1] === "c" || o[1] === "v" || o[1] === "wp")) {
                        let c = !1;
                        typeof o[2] < "u" && o[2] === "s" && (c = !0),
                        e = (c ? "https" : "http") + "://";
                        let d = 0;
                        for (let u of o)
                            u !== "" && u !== "c" && u !== "v" && u !== "wp" && u !== "s" && (e += (d++ !== 0 ? "/" : "") + u);
                        e += i.search + i.hash
                    } else if (typeof o[1] > "u" || o[1] === "") {
                        let c = new RegExp(`.${s}/?$`);
                        e = e.replace(c, "").replace(/^0-/, "").replace(/-0$/, "").replace(/-+/g, d=>d.length === 2 ? "-" : d.length === 1 ? "." : d)
                    }
                }
                return e
            }
            contextUriSanitize(t) {
                if (t) {
                    t = this.stripAmpParts(t);
                    let e = this.parseUrl(t);
                    this.app.context._mgCanonicalUri = this.composeUrl(e)
                }
                return this.app.context._mgCanonicalUri
            }
            contextUriParse() {
                if (!this.app.context._mgCanonicalUri) {
                    this.app.context._mgCanonicalUri = "";
                    try {
                        let t = this.getTopmostWindowAccessible()
                          , e = ""
                          , i = t.document.querySelector('meta[property="og:url"]');
                        if (i && i.getAttribute("content") && i.getAttribute("content").indexOf("http") !== -1)
                            e = i.getAttribute("content");
                        else {
                            let s = t.document.querySelector("link[rel='canonical']");
                            s && s.getAttribute("href") && s.getAttribute("href").indexOf("http") !== -1 && (e = s.getAttribute("href"))
                        }
                        if (e === "") {
                            switch (this.app.iframePlacementType) {
                            case 0:
                                e = this.app.pageUrl;
                                break;
                            case 1:
                                e = this.app.pageUrl;
                                break;
                            case 2:
                                e = this.app.refererUrl;
                                break;
                            case 3:
                                try {
                                    e = this.app.context.context.canonicalUrl
                                } catch {}
                                e || (e = this.app.pageUrl !== "" ? this.app.pageUrl : this.app.refererUrl);
                                break
                            }
                            this.contextUriSanitize(e)
                        } else
                            this.app.context._mgCanonicalUri = e
                    } catch {}
                }
                return this.app.context._mgCanonicalUri
            }
        }
    }
    );
    var hs = {};
    at(hs, {
        PageViewPixelBlock: ()=>He
    });
    var He, ds = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        He = class extends W {
            constructor(t) {
                super(t),
                this.name = "PageViewPixelBlock",
                this.sendPageViewPixel()
            }
            sendPageViewPixel() {
                this.w = this.app.getMostTopWindow();
                let t = this.w.location.pathname;
                this.w._mgPageViewEndPoint862931 = this.w._mgPageViewEndPoint862931 || [];
                let e = this.w._mgPageViewEndPoint862931
                  , i = Number(this.app.globalSettings?.ia_page_view_timeout) || 180
                  , s = 0
                  , o = 0;
                try {
                    this.app.context.localStorage && (s = Number(this.app.context.localStorage.getItem("_mgPageViewEndPoint862931")),
                    o = Number(this.app.context.localStorage.getItem("_mgPvidTime")),
                    new Date().getTime() - o > i * 1e3 && this.app.context.localStorage.setItem("_mgPvid", this.app.generatePvid()))
                } catch {}
                if (new Date().getTime() - s > i * 1e3 && Array.isArray(e) && e.indexOf(t) === -1) {
                    e.push(t);
                    let c = this.getPageViewPixelParams()
                      , d = {};
                    for (let u in c)
                        d[u] = `${u}=${c[u]}`;
                    this.app.initServicerRequest && this.app.request.pixel("pageView", this.app.webProtocol + "//c.adskeeper.co.uk/pv/", d, {})
                }
                this.app.initServicerRequest = !1
            }
            getPageDataParams() {
                let t = {};
                this.setPageData();
                try {
                    if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 30 * 60 * 1e3 < Date.now()) {
                        let e = this.app.contextBlock.stripAmpParts(this.app.refererUrl)?.match(/:\/\/([^\/:]+)/i);
                        sessionStorage.MG_Session_pr = e && e[1] ? e[1] : "",
                        sessionStorage.MG_Session_lu = this.app.pageUrl
                    }
                    sessionStorage.MG_Session_lastUpdate = Date.now(),
                    sessionStorage && sessionStorage.MG_Session_pr && (t.pr = encodeURIComponent(sessionStorage.MG_Session_pr)),
                    sessionStorage && sessionStorage.MG_Session_lu && (t.lu = encodeURIComponent(sessionStorage.MG_Session_lu))
                } catch {}
                return t.cbuster = this.app.getCbusterParameter(),
                t.pvid = this.app.pvid,
                this.app.context.isFBIA1419550 ? t.implVersion = 14 : this.app.isAmp() ? t.implVersion = 12 : this.app.context._mgc && this.app.getRoot().dataset.type === "_mgwidget" ? t.implVersion = 17 : this.app.versionWidget && (t.implVersion = this.app.versionWidget),
                t.cxurl = encodeURIComponent(this.app.contextBlock.contextUriParse()),
                t
            }
            setPageData() {
                this.app.pageView = 0;
                let t = !1;
                try {
                    t = !!this.app.context.isFBIA1419550 && !!this.app.context.localStorage
                } catch {}
                if (this.app.pvid || (this.app.pvid = this.app.generatePvid()),
                t) {
                    let e = this.app.context.localStorage.getItem("_mgPageView862931")
                      , i = Number(this.app.globalSettings.ia_page_view_timeout) || 180;
                    (!e || new Date().getTime() - parseInt(e) > i * 1e3) && !this.app.initServicerRequest && (this.app.context.localStorage.setItem("_mgPageView862931", new Date().getTime().toString()),
                    this.app.pageView = 1),
                    this.app.initServicerRequest && (this.app.context.localStorage.setItem("_mgPageViewEndPoint862931", new Date().getTime().toString()),
                    this.app.context.localStorage.setItem("_mgPvidTime", new Date().getTime().toString()),
                    this.app.pageView = 1);
                    let s = this.app.context.localStorage.getItem("_mgPvid");
                    s && (this.app.pvid = s)
                } else {
                    let e = this.w.location.pathname;
                    this.w._mgPageView862931 = this.w._mgPageView862931 || [];
                    let i = this.w._mgPageView862931;
                    this.w._mgPageViewEndPoint862931 = this.w._mgPageViewEndPoint862931 || [];
                    let s = this.w._mgPageViewEndPoint862931;
                    this.w._mgPvidList = this.w._mgPvidList || [];
                    let o = this.w._mgPvidList;
                    Array.isArray(i) && i.indexOf(e) === -1 && !this.app.initServicerRequest && (i.push(e),
                    this.app.pageView = 1),
                    Array.isArray(s) && s.indexOf(e) === -1 && this.app.initServicerRequest && (s.push(e),
                    this.app.pageView = 1),
                    typeof this.w._mgPvid < "u" && (this.app.pvid = this.w._mgPvid),
                    Array.isArray(o) && o.indexOf(e) === -1 && (o.push(e),
                    this.app.pvid = this.app.generatePvid(),
                    this.w._mgPvid = this.app.pvid)
                }
            }
            getPageViewPixelParams() {
                let t = {
                    ...this.getPageDataParams(),
                    site: 862931,
                    i: 1
                }
                  , e = this.app.getUserAgentDataParams();
                return e && (t = {
                    ...t,
                    ...e
                }),
                t
            }
        }
    }
    );
    var ee, le, xs = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        (function(g) {
            g.es5 = "es5",
            g.es6 = "es6"
        }
        )(ee || (ee = {}));
        le = class {
            constructor(t, e) {
                if (this.additionalWidgets = t,
                this.urlType = e,
                this.additionalWidgets.length)
                    for (let i = 0; i < this.additionalWidgets.length; i++)
                        setTimeout(()=>{
                            this.init(this.additionalWidgets[i])
                        }
                        , 0)
            }
            init(t) {
                let e = t.widgetDivId ? this.createWidgetDiv(t.id, t.widgetDivId) : null
                  , i = this.createWidgetScript(t.urls[this.urlType])
                  , s = t.insertTo || "before";
                this.waitForElement(t.searchSelector).then(o=>{
                    t.widgetDivId && this.insertWidgetBlock(o, e, s),
                    window.performance?.mark("main_script_start_load", {
                        detail: {
                            _mgwidget: t.id
                        }
                    }),
                    this.insertWidgetScript(i)
                }
                )
            }
            createWidgetDiv(t, e) {
                let i = document.createElement("div")
                  , s = document.createElement("div")
                  , o = e;
                return i.classList.add(`${o}-additional`),
                s.id = o,
                i.appendChild(s),
                i
            }
            createWidgetScript(t) {
                let e = document.createElement("script");
                return e.src = t,
                e.async = !0,
                e.crossOrigin = "anonymous",
                e
            }
            insertWidgetBlock(t, e, i) {
                switch (i) {
                case "into":
                    t.appendChild(e);
                    break;
                case "before":
                    t.parentElement.insertBefore(e, t);
                    break;
                case "after":
                    t.insertAdjacentElement("afterend", e);
                    break
                }
            }
            insertWidgetScript(t) {
                document.head ? document.head.appendChild(t) : document.body.appendChild(t)
            }
            waitForElement(t) {
                return new Promise(e=>{
                    if (document.querySelector(t))
                        return e(document.querySelector(t));
                    let i = new MutationObserver(()=>{
                        document.querySelector(t) && (e(document.querySelector(t)),
                        i.disconnect())
                    }
                    );
                    i.observe(document, {
                        childList: !0,
                        subtree: !0
                    })
                }
                )
            }
        }
    }
    );
    var us = {};
    at(us, {
        BackButtonBlock: ()=>We
    });
    var st, We, fs = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        xs();
        (function(g) {
            g.startedPage = "mg-started-page",
            g.additionalPage = "mg-additional-page",
            g.container = "mg-additional-container",
            g.header = "mg-additional-header",
            g.headerAdded = "mg-header-added",
            g.popup = "mg-additional-popup",
            g.popupInner = "mg-additional-popup-inner",
            g.popupText = "mg-additional-popup-text",
            g.popupTriangle = "mg-additional-popup-triangle",
            g.popupCloseBtn = "mg-additional-popup-close-btn",
            g.popupAdded = "mg-popup-added",
            g.popupShowed = "mg-popup-showed",
            g.popupClosed = "mg-popup-closed"
        }
        )(st || (st = {}));
        We = class extends W {
            constructor(t) {
                super(t),
                this.startedPage = "_mgStartedPage",
                this.additionalPage = "_mgAdditionalPage",
                this.storageStartUrl = "_mgStartUrl",
                this.storagePopupCloseTime = "_mgPopupCloseTime",
                this.name = "BackButtonBlock",
                this.options = JSON.parse("null"),
                this.widgetId = Number(this.options?.widget_id),
                this.widgetId && (this.siteBody = this.app.context.document.body,
                this.widgetContainerSelector = `M862931ScriptRootC${this.widgetId}-additional`,
                this.pointerHandler = this.pointerHandler.bind(this),
                this.hasFilters = !!this.options?.filters?.length,
                this.hasFilters ? this.addHook("beforeLoadNewsHooks", this.init) : this.init())
            }
            init() {
                if (this.hasFilters && !this.isFiltersChecked()) {
                    this.app.log(`${this.name}: the block didn't pass the filtering conditions.`);
                    return
                }
                let t, e = 300 * 1e3, i = new Date().getTime(), s = null;
                this.app.context?.performance?.getEntriesByType("navigation")?.length ? s = this.app.context.performance.getEntriesByType("navigation")[0] : this.app.context?.performance?.timing && (s = this.app.context.performance.timing),
                t = setInterval(()=>{
                    if (new Date().getTime() - i >= e) {
                        clearInterval(t),
                        this.app.log(`${this.name}: didn't load, too long page loading process.`);
                        return
                    }
                    s?.loadEventEnd && s.loadEventEnd > 0 && (clearInterval(t),
                    this.startEvents())
                }
                , 100)
            }
            startEvents() {
                let t = this.app.context.history.state
                  , e = this.getStartedUrl()
                  , i = this.app.context.document.location.href;
                e === i && this.isObject(t) && t.hasOwnProperty(this.additionalPage) && typeof this.app.context[this.additionalPage] > "u" && (this.app.context[this.additionalPage] = !0,
                this.buildAdditionalPage(),
                this.showAdditionalPage()),
                typeof this.app.context.onpointerdown > "u" ? this.initialEvent = "click" : this.initialEvent = "pointerdown",
                this.siteBody.addEventListener(this.initialEvent, this.pointerHandler),
                this.app.context.addEventListener("popstate", this.popstateHandler.bind(this))
            }
            isFiltersChecked() {
                let t = !0
                  , e = this.options.filters.filter(o=>o.type === "traffic_type")[0]?.value;
                if (t && e?.length && typeof this.app.servicerData.tt < "u") {
                    let o = this.app.servicerData.tt.toLowerCase();
                    o.length ? t = e.some(c=>c.toLowerCase() === o) : t = !1
                }
                let i = this.options.filters.filter(o=>o.type === "traffic_source")[0]?.value;
                if (t && i?.length && typeof this.app.servicerData.ts < "u") {
                    let o = this.app.servicerData.ts.toLowerCase();
                    o.length ? t = i.some(c=>c.toLowerCase().indexOf(o) !== -1) : t = !1
                }
                let s = this.options.filters.filter(o=>o.type === "device")[0]?.value;
                if (t && s?.length && typeof this.app.servicerData.dt < "u") {
                    let o = this.app.servicerData.dt.toLowerCase();
                    o.length ? t = s.some(c=>c.toLowerCase() === o) : t = !1
                }
                return t
            }
            pointerHandler() {
                if (this.siteBody.removeEventListener(this.initialEvent, this.pointerHandler),
                !this.getStartedUrl()) {
                    let e = this.app.context.document.location.href;
                    this.app.context?.sessionStorage.setItem(this.storageStartUrl, e),
                    this.pushHistoryState()
                }
            }
            popstateHandler(t) {
                let e = t.target?.history?.state || t.state
                  , i = this.getStartedUrl()
                  , s = this.app.context.document.location.href
                  , o = e === null || e === "" || this.isObject(e) && !e.hasOwnProperty(this.startedPage);
                i === s && o && typeof this.app.context[this.additionalPage] > "u" && (this.app.context[this.additionalPage] = !0,
                this.replaceHistoryState(),
                this.buildAdditionalPage(),
                this.showAdditionalPage()),
                this.isObject(e) && (i !== s && !e.hasOwnProperty(this.additionalPage) && !e.hasOwnProperty(this.startedPage) && this.showRegularPage(),
                e.hasOwnProperty(this.startedPage) && this.showStartedPage(),
                e.hasOwnProperty(this.additionalPage) && this.showAdditionalPage())
            }
            pushHistoryState() {
                let t = this.app.context.history.state
                  , e = {
                    [this.startedPage]: !0
                }
                  , i = this.app.context.document.location;
                if (t === null || t === "")
                    (this.isIosFBWebview() || this.isFBAndroid()) && !i.hash ? this.app.context.history.pushState(e, "", i.href + "#" + this.app.utils.generateHash()) : this.app.context.history.pushState(e, "", "");
                else if (this.isObject(t)) {
                    let s = {
                        ...t,
                        ...e
                    };
                    (this.isIosFBWebview() || this.isFBAndroid()) && !i.hash ? this.app.context.history.pushState(s, "", i.href + "#" + this.app.utils.generateHash()) : this.app.context.history.pushState(s, "", "")
                } else
                    this.app.log(`${this.name}: client also uses history.state and its not an object, so module will not work.`)
            }
            replaceHistoryState() {
                let t = this.app.context.history.state
                  , e = {
                    [this.additionalPage]: !0
                };
                t === null ? this.app.context.history.replaceState(e, "", "") : this.isObject(t) ? this.app.context.history.replaceState({
                    ...t,
                    ...e
                }, "", "") : this.app.log(`${this.name}: client also uses history.state and its not an object, so module will not work.`)
            }
            buildAdditionalPage() {
                let t = this.options?.display?.some(s=>s.type === "header")
                  , e = this.options?.display?.some(s=>s.type === "banner")
                  , i = document.createElement("div");
                i.classList.add(st.container),
                i.style.display = "none",
                this.siteBody.appendChild(i),
                this.styles = `
      body.${st.additionalPage} > *:not(.${st.container}) {
        display: none !important;
      }
      body.${st.additionalPage} .${st.container} {
        display: block !important;
      }
      body.${st.startedPage} .${st.container} {
        display: none !important;
      }
      body.${st.additionalPage} {
        padding-top: 0 !important;
        margin-top: 0 !important;
        transform: none !important;
      }
      .${st.container} {
        display: none;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 15px 10px;
        width: 100%;
        max-width: 1100px;
        background: #fff;
      }
    `,
                t && this.insertHeader(i),
                e && this.insertPopup(i),
                this.addingStyles(i),
                new le([{
                    id: this.widgetId,
                    urls: {
                        es5: "https://jsc.adskeeper.co.uk/s/u/superanimes.in.1419550.es5.js".split(".").map((s,o,c)=>o === c.length - 3 ? this.widgetId : s).join("."),
                        es6: "https://jsc.adskeeper.co.uk/s/u/superanimes.in.1419550.es6.js".split(".").map((s,o,c)=>o === c.length - 3 ? this.widgetId : s).join(".")
                    },
                    widgetDivId: `M862931ScriptRootC${this.widgetId}`,
                    searchSelector: `.${st.container}`,
                    insertTo: "into"
                }],this.app.utils.isSupportES6() ? ee.es6 : ee.es5)
            }
            insertHeader(t) {
                let e = this.options.display.filter(s=>s.type === "header")[0]?.options?.selector || "header"
                  , i = this.app.context.document.querySelector(e);
                if (i) {
                    let s = getComputedStyle(i)
                      , o = i.cloneNode(!0);
                    o.classList.add(st.header),
                    t.classList.add(st.headerAdded),
                    t.appendChild(o),
                    this.styles = this.styles + `
        .${st.container}.${st.headerAdded} {
          padding: 0 !important;
        }
        .${st.header} {
          margin-bottom: 10px !important;
          z-index: 9999999 !important;
        }
        .${st.container}.${st.headerAdded} div[class=${this.widgetContainerSelector}] {
          padding: 0 10px;
          box-sizing: border-box;
        }
      `,
                    !this.app.utils.isMobile() && !this.app.utils.isTablet() && (t.style.maxWidth = s.width),
                    s.position === "fixed" && (o.style.maxWidth = "100%",
                    o.style.top = "0px",
                    o.style.zIndex = "9999999",
                    t.style.setProperty("padding-top", s.height, "important"))
                }
            }
            insertPopup(t) {
                let e = this.app.context?.localStorage.getItem(this.storagePopupCloseTime)
                  , i = 24 * 60 * 60 * 1e3
                  , s = e && new Date().getTime() - Number(e) >= i;
                if (!e || s) {
                    let o = this.options.display.filter(T=>T.type === "banner")[0]?.options
                      , c = o?.bg_color || "#0279f5"
                      , d = o?.text_color || "#ffffff"
                      , u = o?.text || this.app.getTranslation("[INFORMER_BACK_BUTTON_BANNER_TEXT]")
                      , f = document.createElement("div");
                    f.classList.add(st.popup),
                    t.classList.add(st.popupAdded),
                    f.innerHTML = `
        <div class="${st.popupInner}">
          <div class="${st.popupText}">${u}</div>
          <div class="${st.popupTriangle}"></div>
          <div class="${st.popupCloseBtn}">
            <svg width="11" height="11" viewBox="0 0 11 11">
              <path fill="${d}" fill-rule="evenodd" d="M10.34.038L5.5 4.878.66.038.038.66l4.84 
              4.84-4.84 4.84.622.622 4.84-4.84 4.84 4.84.622-.622-4.84-4.84 4.84-4.84z"></path>
            </svg>
          </div>
        </div>
      `,
                    t.appendChild(f),
                    this.styles = this.styles + `
        .${st.popup} {
          display: block;
          margin: 0 auto;
          width: 100%;
          height: 50px;
          overflow: hidden;
          position: relative;
          z-index: 999999;
        }
        .${st.popupInner} {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 auto;
          width: 100%;
          height: 40px;
          text-align: center;
          transition: all 0.7s ease;
          opacity: 0;
          transform: translateY(-150px);
          background: ${c};
        }
        .${st.popup}.${st.popupShowed} .${st.popupInner} {
          transform: translateY(0px);
          opacity: 1;
        }
        .${st.popup}.${st.popupClosed} .${st.popupInner} {
          display: none;
        }
        .${st.popup}.${st.popupClosed} {
          z-index: -1;
        }
        .${st.popupText} {
          box-sizing: border-box;
          padding: 10px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 1;
          font-weight: 400;
          color: ${d};
        }
        .${st.popupTriangle} {
          display: block;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 12px solid;
          color: ${c};
        }
        .${st.popupCloseBtn} {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 15px;
          height: 15px;
          margin-right: 10px;
          color: ${d};
          cursor: pointer;
        }
        .${st.container}.${st.popupAdded} div[class=${this.widgetContainerSelector}] {
          margin-top: -40px;
        }
        @media (max-width: 480px) {
          .${st.popupText} {
            font-size: 13px;
          }
        }
      `;
                    let I = this.app.context.document.querySelector(`.${st.popupCloseBtn}`);
                    I && this.app.addEvent(I, "click", ()=>{
                        f.classList.add(st.popupClosed),
                        this.app.context?.localStorage.setItem(this.storagePopupCloseTime, String(new Date().getTime()))
                    }
                    ),
                    this.showPopup(t, f)
                }
            }
            showPopup(t, e) {
                let i, o = new Date().getTime();
                i = setInterval(()=>{
                    if (new Date().getTime() - o >= 6e4) {
                        clearInterval(i),
                        this.app.log(`${this.name}: additional widget didn't load, don't show Popup too.`);
                        return
                    }
                    let c = t.querySelector(`div[class=${this.widgetContainerSelector}]`);
                    if (c && c.children.length) {
                        let d = c.children[0], u, f;
                        d.shadowRoot && d.shadowRoot.children.length ? u = d.shadowRoot.children : d.children.length && (u = d.children),
                        u?.length && [].slice.call(u).forEach(I=>{
                            I.getElementsByClassName("mgbox")[0] && (f = I.getElementsByClassName("mgbox")[0])
                        }
                        ),
                        f && (clearInterval(i),
                        e.style.maxWidth = getComputedStyle(f).width,
                        e.classList.add(st.popupShowed),
                        this.app.context.addEventListener("resize", ()=>{
                            e.style.maxWidth = getComputedStyle(f).width
                        }
                        ))
                    }
                }
                , 100)
            }
            addingStyles(t) {
                let e = document.createElement("style");
                e.setAttribute("id", "mgAdditionalStyles"),
                e.appendChild(document.createTextNode(this.styles)),
                t.appendChild(e)
            }
            showAdditionalPage() {
                this.siteBody.classList.remove(st.startedPage),
                this.siteBody.classList.add(st.additionalPage)
            }
            showStartedPage() {
                this.siteBody.classList.remove(st.additionalPage),
                this.siteBody.classList.add(st.startedPage)
            }
            showRegularPage() {
                this.siteBody.classList.remove(st.startedPage),
                this.siteBody.classList.remove(st.additionalPage)
            }
            getStartedUrl() {
                return this.app.context?.sessionStorage.getItem(this.storageStartUrl)
            }
            isObject(t) {
                return t !== null && t.constructor === Object
            }
            isIosFBWebview() {
                let t = this.app.context.navigator.userAgent.toLowerCase();
                return t.indexOf("apple") > -1 && t.indexOf("iphone") > -1 && t.indexOf("webkit") > -1 && (t.indexOf("fban") > -1 || t.indexOf("fbav") > -1) && t.indexOf("safari") === -1 && t.indexOf("firefox") === -1 && t.indexOf("chrome") === -1
            }
            isFBAndroid() {
                let t = this.app.context.navigator.userAgent || this.app.context.navigator.vendor || this.app.context.opera;
                return (t.indexOf("FBAN") > -1 || t.indexOf("FBAV") > -1) && t.indexOf("Android") > -1
            }
        }
    }
    );
    var ms = {};
    at(ms, {
        MainBlock: ()=>Ne
    });
    var Ne, gs = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        Ne = class extends W {
            constructor(t) {
                super(t),
                this.cappingRealShowTime = 0,
                this.widgetRealShowTime = 0,
                this.name = "MainBlock",
                this.addHook("beforeInitHooks", ()=>{
                    this.app.addEvent(this.app.root, "mousemove", e=>{
                        this.app.root.mouseX = e.pageX - this.app.root.offsetLeft,
                        this.app.root.mouseY = e.pageY - this.app.root.offsetTop
                    }
                    )
                }
                ),
                this.setAppFunctions(),
                this.addHook("afterPrepareCappingDataHooks", ()=>{
                    this.cappingRealShowTime = this.app.getCurrentTimestamp()
                }
                ),
                this.addHook("observerWidgetHooks", (e,i)=>{
                    e && i >= .01 && (this.widgetRealShowTime = this.app.getCurrentTimestamp())
                }
                ),
                this.addHook("afterLoadNewsHooks", ()=>{
                    this.fixWrongExternalImages()
                }
                ),
                this.addHook("afterPrepareCappingDataHooks", this.renderLazyBanners),
                this.addHook("afterLoadNewsHooks", this.setAltToImages),
                this.addHook("afterLoadNewsHooks", this.fixCustomBannerHeight),
                this.addHook("afterLoadNewsHooks", this.fixBackfillBannerHeight)
            }
            setAppFunctions() {
                this.app.extractClass = t=>{
                    if (t && typeof t.className < "u") {
                        let e = t.className.replace(/\s/g, ".").split(".")[0];
                        if (e)
                            return e.replace("1419550", "")
                    }
                    return ""
                }
                ,
                this.app.getCurrentTimestamp = ()=>Math.floor(Date.now() / 1e3),
                this.app.prepareNiceHref = (t,e,i)=>{
                    let s, o = this.app.teaserData[t];
                    if (o?.type != nt.Teaser)
                        return;
                    let c = o;
                    if (o.coopType != pt.InternalExchange && c.sdl == 1) {
                        if (s = this.app.clickTracking,
                        c.dl != "")
                            s += c.dl;
                        else {
                            let d = decodeURIComponent(c.source.replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, "")).toLowerCase()
                              , u = decodeURIComponent(c.title.replace(/[`|',:\/?;$%&\(\)^*!@]/g, "")).replace(/\s/g, "_");
                            s += this.app.webProtocol + "//" + (d ? d + "/" : "") + u
                        }
                        this.app.clickTracking && s.indexOf(this.app.clickTracking) !== -1 && (s = this.app.clickTracking + encodeURIComponent(s.replace(this.app.clickTracking, "")))
                    } else
                        s = this.app.prepareHref(t, e, i);
                    return s
                }
                ,
                this.app.prepareHref = (t,e,i)=>{
                    let s = this.app.teaserData[t]
                      , o = this.app.getQueryParameterByName("dc")
                      , c = this.getClickZone()
                      , d = ""
                      , u = "";
                    if (i && this.app.context._mgExternalLinkChanger === 1) {
                        let f = i.search;
                        if (d = i.protocol + "//" + i.hostname + i.pathname,
                        f != "") {
                            f = f.replace("?", "");
                            let I = f.split("&");
                            for (let T = 0; T < I.length; T++) {
                                let E = I[T].split("=");
                                E[0] != "k" && E[0] != "dc" && (d += (T == 0 ? "?" : "&") + I[T])
                            }
                        }
                    } else
                        d = this.app.clickTracking + this.app.webProtocol,
                        s ? s.link && (/^http[s]?:/.test(s.link) ? d = this.app.clickTracking + s.link : s.coopType == pt.InternalExchange ? d = this.app.clickTracking + this.app.intExchangeProtocol + s.link : d = this.app.clickTracking + this.app.webProtocol + s.link) : d = "#";
                    if (this.app.clickableDelay && this.app.activateDelayBlock && this.app.activateDelayBlock.isWagesLink(i) && (u = "dc=1"),
                    u = o ? "dc=" + parseInt(o) : u,
                    u = c !== "" && u === "" ? "dc=" + c : u,
                    u !== "" && (d += (d.indexOf("?") >= 0 ? "&" : "?") + u),
                    this.app.transitParamsInit) {
                        let f = this.app.getQueryParameterByName("extclckid");
                        f && /[\&\?]extclckid\=/.test(d) === !1 && (d += (d.indexOf("?") >= 0 ? "&" : "?") + "extclckid=" + f)
                    }
                    if (this.app.antifraudBlock?.getAntifraudParams && s && s.coopType != pt.InternalExchange && (d += this.app.getAntifraudQueryParameter(d, e, i)),
                    s && s.coopType != pt.InternalExchange && (this.cappingRealShowTime && /[\&\?]crst\=/.test(d) === !1 && (d += (d.indexOf("?") >= 0 ? "&" : "?") + "crst=" + this.cappingRealShowTime),
                    this.widgetRealShowTime && /[\&\?]wrst\=/.test(d) === !1 && (d += (d.indexOf("?") >= 0 ? "&" : "?") + "wrst=" + this.widgetRealShowTime)),
                    this.app.context.transitType && /[\&\?]trt\=/.test(d) === !1 && (d += (d.indexOf("?") >= 0 ? "&" : "?") + "trt=" + this.app.context.transitType),
                    this.app.clickTracking && d.indexOf(this.app.clickTracking) !== -1 && (d = this.app.clickTracking + encodeURIComponent(d.replace(this.app.clickTracking, ""))),
                    i && /[\&\?]wct\=/.test(d) === !1 && this.getParameterFromLink(i, "wct") && (d += (d.indexOf("?") === -1 ? "?" : "&") + this.getParameterFromLink(i, "wct")),
                    e?.type === "click") {
                        let f = e.target
                          , I = "." + this.app.extractClass(f)
                          , T = f.tagName;
                        if (T === "A") {
                            let E = f.parentNode;
                            T = E.tagName,
                            I = "." + this.app.extractClass(E)
                        }
                        (!s || s.coopType !== pt.InternalExchange && s.coopType !== pt.DirectPublisherDemand) && (d += (d.indexOf("?") >= 0 ? "&" : "?") + "ce=" + T + I)
                    }
                    if (s && s.coopType !== pt.InternalExchange && s.coopType !== pt.DirectPublisherDemand) {
                        let f = this.app.getMuid();
                        f.length && d.indexOf("muid") < 0 && (d += (d.indexOf("?") >= 0 ? "&" : "?") + "muid=" + f)
                    }
                    return this.app.context.transitThrownParams && this.app.context.transitThrownParams.forEach(f=>{
                        let I = this.app.getQueryParameterByName(f);
                        I && I.length > 0 && (d = this.replaceUrlParam(d, f, I))
                    }
                    ),
                    d
                }
                ,
                this.app.getAntifraudQueryParameter = (t,e,i)=>{
                    let s = this.app.antifraudBlock.getAntifraudParams(e, i);
                    if (s) {
                        let o = this.app.id;
                        return (t.indexOf("?") >= 0 ? "&" : "?") + "k=" + o + "f" + s
                    }
                    return ""
                }
                ,
                this.app.getTranslation = t=>{
                    let e = J;
                    return t.search(/^\[\S*\]$/g) === 0 ? e[t] ? e[t] : "" : t
                }
                ,
                this.app.getParentLink = t=>{
                    for (; t && t.tagName !== "BODY"; ) {
                        if (t.tagName === "A")
                            return t;
                        t = t.parentElement
                    }
                    return null
                }
                ,
                this.app.getParentElWithClass = (t,e)=>{
                    try {
                        for (; t && t.tagName !== "BODY"; ) {
                            if (t.classList.contains(e))
                                return t;
                            t = t.parentElement
                        }
                    } catch {
                        return null
                    }
                    return null
                }
                ,
                this.app.findClosest = (t,e)=>{
                    let i;
                    for (; t.parentNode; ) {
                        i = t.parentNode.querySelectorAll(e);
                        for (let s = 0; s < i.length; s++)
                            if (t.isEqualNode(i[s]))
                                return i[s];
                        t = t.parentNode
                    }
                    return null
                }
                ,
                this.app.htmlToElement = t=>{
                    let e = document.createElement("div");
                    return e.innerHTML = t,
                    e.firstChild
                }
                ,
                this.app.getInternalIds = ()=>Object.keys(this.app.context._mgIntExchangeNews),
                this.app.concatUniqueArray = (t,e)=>t.concat(e.filter(i=>t.indexOf(i) < 0)),
                this.app.getExceptAds = ()=>{
                    let t = Number(this.app.globalSettings?.except_ads_limit) || 150;
                    return Array.isArray(this.app.context._mgExceptAds) && this.app.context._mgExceptAds.length && (this.app.exceptAdsList = this.app.concatUniqueArray(this.app.exceptAdsList, this.app.context._mgExceptAds)),
                    Array.isArray(this.app.context.document.mgExceptIds) && this.app.context.document.mgExceptIds.length && (this.app.exceptAdsList = this.app.concatUniqueArray(this.app.exceptAdsList, this.app.context.document.mgExceptIds)),
                    this.app.exceptAdsList.length > t && (this.app.exceptAdsList = this.app.exceptAdsList.slice(this.app.exceptAdsList.length - t)),
                    this.app.exceptAdsList
                }
                ,
                this.app.tox64String = (t,e)=>{
                    e = e || !1;
                    let i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s = "", o, c, d, u, f, I, T, E = 0;
                    for (; E < t.length; )
                        o = t.charCodeAt(E++),
                        c = t.charCodeAt(E++),
                        d = t.charCodeAt(E++),
                        u = o >> 2,
                        f = (o & 3) << 4 | c >> 4,
                        I = isNaN(c) ? 64 : (c & 15) << 2 | d >> 6,
                        T = isNaN(d) ? 64 : d & 63,
                        s += i.charAt(u) + i.charAt(f) + i.charAt(I) + i.charAt(T);
                    return e === !0 && (s = s.replace("+", "-").replace("/", "_").replace("=", "*")),
                    s
                }
                ,
                this.app.hangNiceLinkListener = (t,e)=>{
                    if (this.app.loadedDefault)
                        return;
                    let i = t.getAttribute("data-hash");
                    return this.app.teaserData[i].type == nt.Teaser && this.app.teaserData[i].sdl && (this.app.teaserData[i].sdl = 0),
                    t[this.app.hrefAttr] = this.app.prepareHref(i, e, t),
                    !0
                }
                ,
                this.app.eventsHangNiceLinkListener = t=>{
                    t || (t = this.app.context.event);
                    let e = t.target || t.srcElement;
                    e.tagName != "A" && (e = this.app.getParentLink(e),
                    e === null) || e.hasAttribute("data-hash") && this.app.hangNiceLinkListener(e, t)
                }
                ,
                this.app.isHiddenElement = t=>{
                    for (; t.tagName !== "BODY"; ) {
                        if (t.style.position !== "fixed" && t.offsetParent || t.style.visibility === "hidden" || t.style.display === "none")
                            return !0;
                        t = t.parentNode
                    }
                    return !1
                }
                ,
                this.app.random = (t,e)=>Math.floor(t + Math.random() * (e - t + 1)),
                this.app.isTouchDevice = ()=>"ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0,
                this.app.getExpectedCountNews = ()=>{
                    let t = 2
                      , e = JSON.parse("[]");
                    return this.app.utils.isMobile() && typeof e.mobile < "u" && (t = e.mobile),
                    t
                }
                ,
                this.app.isPassiveSupported = ()=>{
                    if (typeof this.app.passiveIsSupported < "u")
                        return this.app.passiveIsSupported;
                    this.app.passiveIsSupported = !1;
                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                this.app.passiveIsSupported = !0
                            }
                        }))
                    } catch {}
                    return this.app.passiveIsSupported
                }
                ,
                this.app.getWidgetValue = (t,e)=>{
                    let i = JSON.parse("[]");
                    return this.app.originalId !== this.app.id && typeof i[this.app.id]?.[t] < "u" ? i[this.app.id][t] : e
                }
                ,
                this.app.isEnabledDoubleClick = ()=>typeof this.app.servicerData.dcb < "u"
            }
            fixWrongExternalImages() {
                let t = this.app.root.getElementsByClassName("mg-wrong-image");
                if (t.length > 0 && this.app.debugBlock.sendData("Wrong external images count: " + t.length),
                t.length)
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e]
                          , s = i.src;
                        i.src = this.app.blankImage,
                        setTimeout(()=>{
                            let o = i.getBoundingClientRect();
                            i.classList.add("mg-wrongImage" + e),
                            i.src = s,
                            this.app.stylesheetsBlock.add("wrongImage" + e, ".mg-wrongImage" + e + " { width: " + o.width + `px !important;
height: ` + o.height + `px !important;
object-fit: cover;
-o-object-fit: cover;
object-position: top;
-o-object-position: top;
 }`),
                            this.app.debugBlock.sendData("fixWrongExternalImages. " + JSON.stringify(o))
                        }
                        , 50)
                    }
            }
            fixHeaderWidgetHeight() {
                let e = this.app.context.document.getElementById("M862931ScriptRootC1419550");
                e || (e = this.app.getRoot()),
                e && e.setAttribute("style", "min-height:auto !important;")
            }
            getClickZone() {
                let t = JSON.parse("[]");
                if (t.length === 0 || !t.top || !t.left || !t.right || !t.bottom)
                    return "";
                let e = this.app.root.offsetHeight
                  , i = this.app.root.offsetWidth
                  , s = this.app.root.mouseX
                  , o = this.app.root.mouseY
                  , c = {
                    top: e / 100 * t.top,
                    left: i / 100 * t.left,
                    right: i - i / 100 * t.right,
                    bottom: e / 100 * t.bottom
                }
                  , d = o <= c.top ? 0 : o >= c.bottom ? 2 : 1
                  , u = s <= c.left ? 0 : s >= c.right ? 2 : 1;
                return [[2, 3, 4], [5, "", 6], [7, 8, 9]][d][u]
            }
            getParameterFromLink(t, e) {
                let i = t?.search;
                if (i === "")
                    return null;
                let s = i.replace("?", "").split("&");
                for (let o = 0; o < s.length; o++)
                    if (s[o].split("=")[0] === e)
                        return s[o];
                return null
            }
            replaceUrlParam(t, e, i) {
                let s = new RegExp("\\b(" + e + "=).*?(&|#|$)");
                return i === null ? t : t.search(s) >= 0 ? t.replace(s, "$1" + i + "$2") : (t = t.replace(/[?#]$/, ""),
                t + (t.indexOf("?") > 0 ? "&" : "?") + e + "=" + i)
            }
            renderLazyBanners(t) {
                this.app.root && this.app.teaserData[t].type === "banner" && this.app.renderBanners(!1, this.app.teaserData[t].iteration)
            }
            fixBackfillBannerHeight() {
                if (typeof this.app.context._mgIsBackfillBanner < "u") {
                    let t = this.app.root.querySelector(".mcdomain");
                    typeof this.app.context._mgBackfillStyles < "u" ? this.app.context._mgBackfillStyles.indexOf(".mcdomain-top") === -1 && this.app.root.querySelector(".mctitle").insertAdjacentElement("afterend", t) : t.style.display = "block",
                    this.sendBannerHeight("_mgIsBackfillBanner")
                }
            }
            setAltToImages() {
                if (this.app.root) {
                    let t = this.app.root.getElementsByTagName("img");
                    for (let e = 0; e < t.length; e++)
                        t[e].getAttribute("alt") === null && t[e].setAttribute("alt", "")
                }
            }
            fixCustomBannerHeight() {
                typeof this.app.context._mgIsCustomBanner < "u" && this.sendBannerHeight("_mgIsCustomBanner")
            }
            sendBannerHeight(t) {
                try {
                    this.app.root.style.width = "100%",
                    this.app.root.style.height = "auto";
                    let e = this.app.root.querySelectorAll("video.mcvideo");
                    if (e.length) {
                        let i = 'width="200" height="200"'.split(" ").reduce((s,o,c,d)=>{
                            let u = Number(o.split("=")[1].replace(/"/g, ""));
                            return c === 0 ? s + u : s / u
                        }
                        , 0);
                        for (let s = 0; s < e.length; s++) {
                            let o = e[s]
                              , c = Math.ceil(o.getBoundingClientRect()?.width)
                              , d = Math.ceil(c / i);
                            o.style.setProperty("height", `${d}px`, "important")
                        }
                    }
                    setTimeout(()=>{
                        let i = Math.ceil(this.app.root.getBoundingClientRect()?.height);
                        if (i > 0) {
                            let s = {
                                bannerType: t,
                                height: i,
                                id: this.app.context.frameElement.id
                            };
                            this.app.context.parent.postMessage(s, "*")
                        }
                    }
                    , 0)
                } catch {}
            }
        }
    }
    );
    var vs = {};
    at(vs, {
        ResponseParserBlock: ()=>Ve
    });
    var Ve, ys = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        Ve = class extends W {
            getParsedTeaserData(t, e) {
                let i = this.getServicerTeaser(t)
                  , s = (1 - parseFloat(i.price) / parseFloat(i.priceold)) * 100;
                return s <= 1 || s > 100 ? (i.priceold = "",
                i.discount = "") : i.discount = s ? `${Math.floor(s)}%` : "",
                i.other.i = i.other.i ? this.app.htmlEntities(i.other.i) : this.app.blankImage,
                this.app.deviceType != Zt.Desktop && (i.other.sdl = 0),
                {
                    type: nt.Teaser,
                    hash: i.hash,
                    id: i.id,
                    source: i.source,
                    title: i.title,
                    desc: i.desc,
                    price: i.price,
                    priceold: i.priceold,
                    discount: i.discount,
                    category: i.other.category,
                    catId: i.other?.catId || null,
                    cta: i.other.cta ?? "",
                    cdt: i.other.cdt ?? "",
                    img: i.other.i,
                    link: i.other.l ?? "",
                    mirror: i.mirror,
                    extd: i.other.extd,
                    coopType: i.other.type ?? null,
                    mediaType: i.other["media-type"],
                    sdl: i.other.sdl,
                    dl: i.other.dl,
                    clicktrackers: i.other.clicktrackers ?? [],
                    imp: i.other.imp ?? [],
                    impt: i.other.impt ?? [],
                    jst: i.other.jst ?? [],
                    iteration: e,
                    page: this.app.pagesServicerData.length,
                    cdomain: i.other.cdomain || null,
                    ccid: i.other.ccid || null,
                    ch: i.other.ch || null,
                    isViewed: !1,
                    dsa_link: i.other.dsa_link || null
                }
            }
            getServicerTeaser(t) {
                return {
                    source: this.app.htmlEntities(t[0]),
                    id: this.app.htmlEntities(t[1]),
                    title: t[3] ? this.app.prepareTitle(t[3]) : "",
                    desc: t[4] ? this.app.prepareDesc(t[4]) : "",
                    mirror: "adskeeper",
                    key: t[6],
                    price: t[7] ? this.app.htmlEntities(t[7]).replace(",00", "").replace(new RegExp("[^0-9,]"), "") : "",
                    priceold: t[8] ? this.app.htmlEntities(t[8]).replace(",00", "").replace(new RegExp("[^0-9,]"), "") : "",
                    discount: "",
                    other: t[10] ? t[10] : {},
                    hash: t[9]
                }
            }
            getParsedBannerData(t, e) {
                let s = "mgBanner_1419550_" + this.app.pagesServicerData.length + "_" + e;
                return {
                    type: nt.Banner,
                    id: s,
                    hash: t.h,
                    coopType: pt.Wages,
                    imp: t.imp ?? [],
                    page: this.app.pagesServicerData.length,
                    iteration: e,
                    impt: t.impt ?? [],
                    jst: t.jst ?? [],
                    html: t.html,
                    width: t.width ?? 0,
                    height: t.height ?? 0,
                    rs: t.rs ?? !1,
                    useSecureIframe: !1,
                    clickUrl: t.clickUrl,
                    isViewed: !1
                }
            }
            getCustomBannerData(t, e) {
                this.app.consentDataParams && (typeof this.app.consentDataParams.gdpr < "u" && typeof this.app.consentDataParams.gdpr_consent < "u" && (t = t.replace(/\${GDPR}/g, String(this.app.consentDataParams.gdpr)).replace(/\${GDPR_CONSENT}/g, this.app.consentDataParams.gdpr_consent)),
                typeof this.app.consentDataParams.us_privacy < "u" && (t = t.replace(/\${CCPA}/g, this.app.consentDataParams.us_privacy)));
                let i = "mgBanner_1419550_" + this.app.pagesServicerData.length + "_" + e;
                return {
                    type: nt.Banner,
                    hash: "",
                    coopType: pt.Wages,
                    imp: [],
                    page: this.app.pagesServicerData.length,
                    iteration: e,
                    impt: [],
                    jst: [],
                    html: t,
                    id: i,
                    width: 0,
                    height: 0,
                    rs: !1,
                    useSecureIframe: !0,
                    clickUrl: "",
                    isViewed: !1,
                    isCustomBanner: !0
                }
            }
            getParsedGptData(t, e) {
                let i = this.app.getWidgetValue("gptOptions", null);
                i && (this.app.gptOptions = i);
                let s = "mgGpt_1419550_" + this.app.pagesServicerData.length + "_" + e
                  , o = Object.keys(this.app.preRenderTeaserSizes).filter(u=>this.app.preRenderTeaserSizes[u].position === e).map(u=>this.app.preRenderTeaserSizes[u])[0]
                  , c = t?.price ? this.formatPrice(t.price) : null
                  , d = this.app.gptOptions?.price ? "d" + this.formatPrice(this.app.gptOptions.price) : null;
                return {
                    id: s,
                    type: nt.Gpt,
                    hash: "",
                    coopType: pt.Wages,
                    page: this.app.pagesServicerData.length,
                    iteration: e,
                    imp: [],
                    impt: [],
                    jst: [],
                    width: o?.width || 0,
                    height: o?.height || 0,
                    afrd: this.app.servicerData.afrd || 0,
                    divId: this.app.gptOptions.divId,
                    slot: this.app.gptOptions.slot,
                    lazy: this.app.gptOptions?.lazy || null,
                    backfill: this.app.gptOptions?.backfill || null,
                    isRendered: !1,
                    isViewed: !1,
                    slotPrice: c || d,
                    loadAfterActivity: this.app.gptOptions?.loadAfterActivity || !1,
                    loggingEnabled: this.app.gptOptions?.loggingEnabled || !1
                }
            }
            getAdUnitsFromJson(t) {
                let e = [];
                return Array.isArray(t) && t.forEach((i,s)=>{
                    let o = s + 1;
                    if ("gpt"in i) {
                        let c = this.getParsedGptData(i, o);
                        e.push(c)
                    } else if ("html"in i) {
                        let c = this.getParsedBannerData(i, o);
                        e.push(c)
                    } else if (this.app.customBanners[this.app.id]?.[o]?.length > 0) {
                        let c = this.getCustomBannerData(this.app.customBanners[this.app.id][o], o);
                        e.push(c)
                    } else {
                        let c = this.getParsedTeaserData(i, o);
                        e.push(c)
                    }
                }
                ),
                e
            }
            fillAdUnitsData(t) {
                t.forEach(e=>{
                    switch (e.type) {
                    case nt.Teaser:
                        this.fillTeaserData(e);
                        break;
                    case nt.Banner:
                        this.fillBannerData(e);
                        break;
                    case nt.Gpt:
                        this.fillGptData(e);
                        break
                    }
                }
                )
            }
            fillTeaserData(t) {
                this.app.teaserData[t.hash] = t,
                t.coopType == pt.InternalExchange && (this.app.context._mgIntExchangeNews[t.id] = 1),
                t.coopType == pt.Wages && t.extd !== 1 && this.app.exceptAdsList.indexOf(t.id) === -1 && this.app.exceptAdsList.push(t.id)
            }
            fillBannerData(t) {
                this.app.teaserData[t.hash || t.id] = t,
                this.app.banners[t.id] = t
            }
            fillGptData(t) {
                this.app.teaserData[t.id] = t
            }
            formatPrice(t) {
                return parseFloat(String(t)).toFixed(2)
            }
        }
    }
    );
    var bs = {};
    at(bs, {
        CookieBlock: ()=>Fe
    });
    var Fe, ws = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Fe = class extends W {
            constructor(t) {
                super(t),
                this.name = "CookieBlock",
                this.cookieStorage = {},
                this.sharedCookieStorage = {},
                this.storageName = "AdskeeperStorage" + (this.app.context.AdskeeperPageOffset ? this.app.context.AdskeeperPageOffset : "")
            }
            getCookieValue() {
                try {
                    let t = this.app.context.document.cookie?.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)"))
                      , e = {};
                    return t && (e = JSON.parse(decodeURIComponent(t[1]))),
                    e
                } catch {}
            }
            getCookie() {
                let t = this.getCookieValue();
                typeof t.C1419550 < "u" ? this.cookieStorage = t.C1419550 : this.cookieStorage = {},
                typeof t[0] < "u" ? this.sharedCookieStorage = t[0] : this.sharedCookieStorage = {}
            }
            setCookie() {
                {
                    let t = this.getCookieValue();
                    t.C1419550 = this.cookieStorage,
                    t[0] = this.sharedCookieStorage;
                    try {
                        let e = encodeURIComponent(JSON.stringify(t));
                        this.app.context.document.cookie = this.storageName + "=" + e + ";path=/"
                    } catch {}
                }
            }
        }
    }
    );
    var ks = {};
    at(ks, {
        StylesheetsBlock: ()=>qe
    });
    var qe, Is = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        qe = class extends W {
            constructor(t) {
                super(t),
                this.name = "StylesheetsBlock",
                this.isIE = typeof Proxy > "u",
                this.stylesDom = {},
                this.isIE || (this.stylesDom = new Proxy(this.stylesDom,{
                    set: (e,i,s)=>{
                        let o = s.container
                          , c = s.style;
                        return e[i] && delete this.stylesDom[i],
                        this.inject(c, i, o),
                        e[i] = s,
                        !0
                    }
                    ,
                    has: (e,i)=>this.app.root.querySelector("style#" + i) === null && typeof e[i] < "u" ? !1 : typeof e[i] < "u",
                    deleteProperty: (e,i)=>(this.removeFromDom(i),
                    delete e[i],
                    !0)
                }))
            }
            add(t, e, i=null) {
                t += "_" + this.app.uniqId,
                !(!this.isIE && typeof i > "u" && t in this.stylesDom) && (e = e.replace(/((@media|@supports not) \([^(]*\) {)/g, "$1}"),
                e = e.replace(/((?:^|}|,|;)\W*)((?:\w+)?\.(?:mc|mg|row)[\-\w]+)/g, "$1" + this.app.getMainCssSelector() + " $2"),
                e = e.replace(/(((@media|@supports not) \([^(]*\) \{)\})/g, "$2"),
                e = e.replace(/video-cdn\.(.+)\/mgPlayer/g, this.app.currentSubnetDomain),
                e.length && (this.isIE ? (this.removeFromDom(t),
                this.inject(e, t, i)) : this.stylesDom[t] = {
                    style: e,
                    container: i
                }))
            }
            remove(t) {
                t += "_" + this.app.uniqId,
                !this.isIE && t in this.stylesDom ? delete this.stylesDom[t] : this.removeFromDom(t)
            }
            removeFromDom(t) {
                let e = this.app.root.querySelector("#" + t);
                e && e.parentNode.removeChild(e)
            }
            inject(t, e, i) {
                if (i) {
                    let s = i;
                    if (s.className = "AdskeeperC1419550",
                    s.styleSheet)
                        s.styleSheet.cssText = t;
                    else {
                        for (; s.firstChild; )
                            s.removeChild(s.firstChild);
                        s.appendChild(this.app.context.document.createTextNode(t))
                    }
                } else {
                    let s = this.app.context.document.createElement("style");
                    s.setAttribute("id", e),
                    s.className = "AdskeeperC1419550",
                    s.type = "text/css",
                    (typeof this.app.realRoot < "u" ? this.app.realRoot : this.app.root).appendChild(s),
                    s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(this.app.context.document.createTextNode(t))
                }
            }
        }
    }
    );
    var Ds = {};
    at(Ds, {
        AdvertLinkBlock: ()=>ze,
        AdvertLinkSettings: ()=>Jt
    });
    var Jt, ze, Ts = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        (function(g) {
            g[g.Off = 0] = "Off",
            g[g.LogoAndTitle = 1] = "LogoAndTitle",
            g[g.OnlyTitle = 2] = "OnlyTitle",
            g[g.OnlyLogo = 3] = "OnlyLogo"
        }
        )(Jt || (Jt = {}));
        ze = class extends W {
            constructor(t) {
                super(t),
                this.name = "AdvertLinkBlock",
                this.addHook("beforeLoadNewsHooks", this.refreshAdvertLink)
            }
            parseAdvertLink(t) {
                let e = "<!--advertPrefix-->"
                  , i = t.indexOf(e) > t.length / 2;
                return i && this.removeElements(this.app.root.getElementsByClassName("mg_addad" + this.app.id)),
                (i || this.app.countLoadBlocks === 0) && (t.indexOf(e) >= 0 ? t = t.replace(e, this.app.tickerPrefix) : t = this.app.tickerPrefix + t),
                t
            }
            refreshAdvertLink() {
                let t = this.getAdvertLinkValue()
                  , e = !1
                  , i = !0;
                if (t || e && i)
                    try {
                        let s = this.getAdLinkBlock()?.replace(/%id/g, String(this.app.id))
                          , o = "";
                        e ? o = this.app.getTranslation("[WIDGET_TITLE_PROMOTED_CONTENT]") : o = this.app.getTranslation("[WIDGET_TITLE_INTERESTING_FOR_YOU]");
                        let c = navigator.language.substr(0, 2)
                          , d = '["es","vi","it","hi","pl","ru","uk"]'.indexOf(c) !== -1 ? c : "";
                        s = s.replace("%WIDGET_TITLE%", o),
                        s = s.replace("%lang/", d.length ? d + "/" : ""),
                        s = s.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//"),
                        s = s.replace('src="//', 'src="' + this.app.webProtocol + "//"),
                        s = s.replace('href="//', 'href="' + this.app.webProtocol + "//");
                        let u = "";
                        if (!u.length) {
                            u = this.app.subnetMirrorsUtm;
                            let I = this.app.context.document.location?.hostname;
                            if (this.app.context !== this.app.context.top) {
                                let T = this.app.context.document.referrer?.match(/:\/\/(.[^/]+)/);
                                T !== null && (I = T[1])
                            }
                            u = u.replace("{domain}", I)
                        }
                        this.app.tickerPrefix = s.replace(/%utm/, u);
                        let f = document.createElement("div");
                        if (e && i)
                            f.innerHTML = this.app.tickerPrefix;
                        else {
                            if (t === Jt.LogoAndTitle)
                                return;
                            f.innerHTML = this.app.tickerPrefix,
                            t === Jt.OnlyTitle && this.removeElements(f.getElementsByClassName("mg_addad" + this.app.id)),
                            t === Jt.OnlyLogo && (this.removeElements(f.getElementsByClassName("mghead")),
                            this.removeElements(f.getElementsByClassName("mghead" + this.app.id)))
                        }
                        this.app.tickerPrefix = f.innerHTML
                    } catch {}
                else
                    this.app.tickerPrefix = ""
            }
            getAdvertLinkValue() {
                return 0
            }
            removeElements(t) {
                for (let e = 0; e < t.length; e++)
                    t[e].parentNode.removeChild(t[e])
            }
            getAdLinkBlock() {
                let t = "in-site-notification"
                  , e = "in-site-notification-media-grey"
                  , i = "adskeeper"
                  , s = K;
                typeof s < "u" && typeof s[t] < "u" && (typeof s[t]["*"] < "u" && (i = s[t]["*"]),
                typeof s[t][e] < "u" && (i = s[t][e]));
                let o = Z;
                return typeof o[i] > "u" && (i = "adskeeper"),
                o[i]
            }
        }
    }
    );
    var Ss = {};
    at(Ss, {
        SendDimensionsBlock: ()=>$e
    });
    var Ue, $e, Es = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        Ue = {
            title: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
            domain: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet Lorem ipsum"
        },
        $e = class extends W {
            constructor(t) {
                super(t),
                this.cols = 0,
                this.childMarginFixPixels = 1,
                this.adblockMinWidgetWidth = 500,
                this.adblockMaxPercentage = 0,
                this.bannerWidth = 300,
                this.bannerHeight = 250,
                this.bannerMinHeight = 220,
                this.name = "SendDimensionsBlock",
                this.isAdblock = !1,
                this.isBannerMacros = this.app.templateText.indexOf("$banner") !== -1 || this.app.templateText.indexOf('data-template-schema="banner"') !== -1,
                this.isBannerAllowed = this.isBannerMacros && !this.isAdblock,
                this.bannerStretchHeight = this.app.utils.isMobile() ? 280 : this.bannerHeight,
                this.storageKey = `${(this.isAdblock ? "_mgAdbDimsData" : "_mgDimsData") + 1419550}`,
                this.isShowedUpFormat = ["mobile-widget", "in-site-notification", "passage", "interstitial"].indexOf("in-site-notification") !== -1,
                this.isPlaceReservation = !this.isShowedUpFormat,
                this.checkStorageDimsData()
            }
            calcPreRenderingBlock() {
                this.app.precalcRect = {},
                this.app.preRenderTeaserSizes = {},
                this.app.preRenderImageSizes = {},
                this.teasers = [].slice.call(this.app.root.getElementsByClassName("mgline")),
                this.isAdblock && this.reformatForAdblock(),
                typeof this.app.iframeSizeChangerBlock?.initIframeSizeChange == "function" && this.app.iframeSizeChangerBlock.initIframeSizeChange();
                let t = this.app.root.getBoundingClientRect();
                this.app.precalcRect.width = Math.ceil(t.width ? t.width : t.right - t.left),
                this.app.precalcRect.height = Math.ceil(t.height ? t.height : t.bottom - t.top) - this.childMarginFixPixels,
                this.app.requestParams.w = this.app.precalcRect.width,
                this.app.requestParams.h = this.app.precalcRect.height;
                for (let e = 0; e < this.teasers.length; e++) {
                    let i = e + 1
                      , s = this.teasers[e];
                    this.calcPrerenderTeaserSizes(s, i)
                }
                if (this.isBannerAllowed) {
                    let e = Object.keys(this.app.preRenderTeaserSizes).map(c=>this.app.preRenderTeaserSizes[c]);
                    e.every(c=>c.height >= this.bannerHeight && c.width >= this.bannerWidth) && (this.app.requestParams.ident_p = !0);
                    let i = e.reduce((c,d)=>{
                        let u = `${d.width}x${d.height}`
                          , f = c[u] || [];
                        return {
                            ...c,
                            [u]: [...f, d.position]
                        }
                    }
                    , {});
                    this.app.requestParams.sz = Object.keys(i).join(";"),
                    this.app.requestParams.szp = Object.keys(i).map(c=>i[c]).join(";");
                    let s = e[0].top
                      , o = e.reduce((c,d)=>{
                        let u = d.top + (s < 0 ? -s : 0)
                          , f = c[u] || [];
                        return {
                            ...c,
                            [u]: [...f, d.position]
                        }
                    }
                    , {});
                    this.app.requestParams.szl = Object.keys(o).map(c=>o[c]).join(";")
                }
                this.cols === 0 && (this.cols = this.teasers.length),
                this.app.requestParams.cols = this.cols,
                this.updateStorageDimsData(),
                this.cleanAfterPrerender(),
                this.performAfterPrerender()
            }
            cleanAfterPrerender() {
                this.app.root = this.app.realRoot;
                let t = "preRenderingBlock1419550_" + this.app.uniqId
                  , e = this.app.root;
                this.app.root.parentNode.id === t && this.app.root.parentNode.parentNode != null && (e = this.app.root.parentNode.parentNode),
                e.querySelector("#" + t) !== null && e.removeChild(e.querySelector("#" + t)),
                this.app.loadedType = "",
                this.app.currentSubnet = null,
                this.app.countLoadBlocks = this.app.countLoadBlocksContainer,
                this.app.template = "",
                delete this.app.teaserData[""]
            }
            performAfterPrerender() {
                if (typeof this.app.context._mgIsCustomBanner < "u")
                    try {
                        let t = {
                            bannerType: "_mgIsCustomBanner",
                            height: this.app.precalcRect.height,
                            id: this.app.context.frameElement.id
                        };
                        this.app.context.parent.postMessage(t, "*")
                    } catch {}
                this.app.root.style.overflow = "visible",
                this.app.root.style.visibility = "visible",
                this.isPlaceReservation && (this.app.root.style.width = this.app.precalcRect.width + "px",
                this.app.root.style.height = this.app.precalcRect.height + "px"),
                this.addHook("afterLoadNewsHooks", ()=>{
                    this.isPlaceReservation && (this.app.root.style.width = "auto",
                    this.app.root.style.height = "auto"),
                    this.adblockMaxPercentage > 0 && this.changeWidgetWidth()
                }
                )
            }
            checkStorageDimsData() {
                try {
                    if (this.app.context.localStorage) {
                        let t = null
                          , e = this.app.getLct(1716276376)
                          , i = U.widgetBuilder
                          , s = Math.ceil(this.app.getRoot().getBoundingClientRect().width)
                          , o = JSON.parse(this.app.context.localStorage.getItem(this.storageKey) || "[]").filter(c=>c.rootWidth === s ? c.lct === e && c.hashCommit === i ? (t = c,
                        !0) : !1 : !0);
                        t && (this.app.precalcRect = t.precalcRect,
                        this.app.preRenderTeaserSizes = t.preRenderTeaserSizes,
                        this.app.preRenderImageSizes = t.preRenderImageSizes,
                        t.adblockMaxPercentage && (this.adblockMaxPercentage = t.adblockMaxPercentage),
                        Object.keys(t.requestParams).forEach(c=>{
                            this.app.requestParams[c] = t.requestParams[c]
                        }
                        ),
                        this.addHook("beforeInitHooks", this.performAfterPrerender)),
                        this.app.context.localStorage.setItem(this.storageKey, JSON.stringify(o))
                    }
                } catch {}
            }
            updateStorageDimsData() {
                let t = ["w", "h", "cols", "ident_p", "sz", "szp", "szl", "limitads"]
                  , e = {};
                e.requestParams = {},
                e.precalcRect = this.app.precalcRect,
                e.preRenderTeaserSizes = this.app.preRenderTeaserSizes,
                e.preRenderImageSizes = this.app.preRenderImageSizes,
                e.lct = this.app.getLct(1716276376),
                e.hashCommit = U.widgetBuilder,
                e.rootWidth = Math.ceil(this.app.getRoot().getBoundingClientRect().width),
                this.adblockMaxPercentage > 0 && (e.adblockMaxPercentage = this.adblockMaxPercentage),
                Object.keys(this.app.requestParams).forEach(i=>{
                    t.indexOf(i) !== -1 && (e.requestParams[i] = this.app.requestParams[i])
                }
                );
                try {
                    if (this.app.context.localStorage) {
                        let i = JSON.parse(this.app.context.localStorage.getItem(this.storageKey) || "[]");
                        i.push(e),
                        this.app.context.localStorage.setItem(this.storageKey, JSON.stringify(i))
                    }
                } catch {}
            }
            preparePrerenderData(t) {
                let e = this.app.context.document.createElement("div")
                  , i = this.app.context.document.createElement("div")
                  , s = t || this.app.getExpectedCountNews()
                  , o = []
                  , c = "preRenderingBlock1419550_" + this.app.uniqId;
                if (e.id = c,
                e.style.visibility = "hidden",
                i.id = this.app.root.id,
                i.style.padding = `${this.childMarginFixPixels}px 0 0 0`,
                i.style.margin = `-${this.childMarginFixPixels}px auto 0 auto`,
                e.appendChild(i),
                this.app.loadedType = "goods",
                this.app.currentSubnet = 0,
                this.app.realRoot = this.app.root,
                this.app.countLoadBlocksContainer = this.app.countLoadBlocks,
                this.app.root.appendChild(e),
                this.app.root = i,
                this.isShowedUpFormat) {
                    let d = `
        #${c} {
          position: fixed;
          bottom: -150%;
          left: -150%;
          width: 100%;
          opacity: 0;
        }
        #${c} div.mgbox {
          position: relative !important;
        }
      `;
                    this.app.stylesheetsBlock.add("preRender", d)
                }
                for (let d = 1; d <= s; d++)
                    o.push({
                        type: nt.Teaser,
                        coopType: pt.Wages,
                        hash: "",
                        id: d.toString(),
                        source: Ue.domain,
                        title: Ue.title,
                        desc: Ue.description,
                        img: this.app.blankImage,
                        price: "",
                        priceold: "",
                        discount: "",
                        iteration: d,
                        imp: [],
                        impt: [],
                        clicktrackers: [],
                        jst: [],
                        category: "",
                        catId: null,
                        cdt: "",
                        cta: "",
                        dl: "",
                        extd: 0,
                        link: "",
                        mediaType: "",
                        mirror: "",
                        page: 1,
                        sdl: 0,
                        dsa_link: null
                    });
                return this.app.teaserData[""] = o[0],
                o
            }
            prerenderNews(t) {
                if (this.app.root && t) {
                    this.app.fallbackMode && this.app.countLoadBlocks === 0 && (this.app.root.innerHTML = ""),
                    this.app.advertLinkBlock.refreshAdvertLink(),
                    t = this.app.advertLinkBlock.parseAdvertLink(t),
                    this.addPreRenderTemplate(t);
                    let e = this.app.root.getElementsByTagName("a");
                    for (let i = 0; i < e.length; i++)
                        e[i].rel = "sponsored nofollow noopener"
                }
            }
            addPreRenderTemplate(t) {
                this.app.root.insertAdjacentHTML("beforeend", this.app.preTemplate + t + this.app.postTemplate)
            }
            calcPrerenderTeaserSizes(t, e) {
                let i = t.getBoundingClientRect()
                  , s = Math.ceil(t?.clientHeight || (i.height ? i.height : i.bottom - i.top))
                  , o = Math.ceil(t?.clientWidth || (i.width ? i.width : i.right - i.left))
                  , c = t.querySelector("img.mcimg");
                if (c && this.calcPrerenderImageSizes(c, e),
                this.isNeedRecalcTeaserHeight(o, s, e)) {
                    let d = !1;
                    this.teasers[e - 1].innerHTML = `<div style="min-width: ${this.bannerWidth}px; min-height: ${this.bannerStretchHeight}px;"></div>`;
                    let u = this.teasers[e - 1].getBoundingClientRect()
                      , f = this.app.root.getBoundingClientRect();
                    if (u.width >= this.bannerWidth && u.height >= this.bannerStretchHeight) {
                        d = !0;
                        let I = this.app.root.parentNode;
                        for (; I && typeof I.tagName < "u" && I.tagName !== "BODY"; ) {
                            let T = I.getBoundingClientRect();
                            if (T.width < f.width || T.height < f.height) {
                                d = !1;
                                break
                            } else
                                I = I.parentNode
                        }
                    }
                    d && (s = this.bannerStretchHeight)
                }
                this.app.preRenderTeaserSizes[e - 1] = {
                    height: s,
                    width: o,
                    position: e,
                    top: Math.floor(i.top)
                },
                typeof this.prepTop < "u" && this.prepTop < i.top && this.cols === 0 && (this.cols = e - 1),
                this.prepTop = i.top
            }
            isNeedRecalcTeaserHeight(t, e, i) {
                return this.isBannerAllowed && t >= this.bannerWidth && e >= this.bannerMinHeight && e < this.bannerStretchHeight
            }
            calcPrerenderImageSizes(t, e) {
                let i = t.getBoundingClientRect();
                if (i.height === 0 || i.width === 0) {
                    let s = "#preRenderingBlock1419550_" + this.app.uniqId;
                    if (this.app.realRoot.querySelector(s) !== null) {
                        let o = this.app.realRoot.querySelector(s);
                        o.style.clear = "both",
                        i = t.getBoundingClientRect()
                    }
                }
                this.app.preRenderImageSizes[e - 1] = {
                    height: i.height,
                    width: i.width
                }
            }
            reformatForAdblock() {
                if (this.app.utils.isMobile()) {
                    for (let t = this.teasers.length; t > 1; t--) {
                        let e = this.teasers[t - 1];
                        if (this.app.root.getBoundingClientRect().height > this.app.context.screen.height && e && e.parentNode)
                            e.parentNode.removeChild(e);
                        else
                            break
                    }
                    this.teasers = [].slice.call(this.app.root.getElementsByClassName("mgline")),
                    this.app.requestParams.limitads = this.teasers.length
                } else {
                    let t = ""
                      , e = 0;
                    for (let i in this.app.childWidgetsData)
                        if (this.app.childWidgetsData.hasOwnProperty(i) && this.app.childWidgetsData[i].isAdblockChild) {
                            t = this.app.childWidgetsData[i].childSubtype;
                            break
                        }
                    t === "under-article-widget-adblock" || t === "in-article-adblock" ? e = 25 : t === "header-widget-adblock" && (e = 15),
                    t && t.indexOf("adblock") !== -1 && e > 0 && (this.adblockMaxPercentage = e)
                }
            }
            changeWidgetWidth() {
                let t = this.app.root.querySelector(".mgbox")
                  , e = t.offsetWidth
                  , i = t.offsetHeight
                  , s = e * i
                  , o = this.app.context.innerWidth * this.app.context.innerHeight;
                if (s / o * 100 > this.adblockMaxPercentage && e > this.adblockMinWidgetWidth) {
                    let d = o * this.adblockMaxPercentage / 100
                      , u = s - d
                      , f = e - e * (u / s / 2)
                      , I = f >= this.adblockMinWidgetWidth ? Math.floor(f) : this.adblockMinWidgetWidth;
                    t.style.maxWidth = I + "px"
                }
            }
        }
    }
    );
    var Cs = {};
    at(Cs, {
        InternalExchangeLoggerBlock: ()=>je
    });
    var je, Ps = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        je = class extends W {
            constructor(t) {
                super(t),
                this.name = "InternalExchangeLoggerBlock",
                this.app.internalExchangeLoggerHandler = this.clickHandler.bind(this),
                this.addHook("afterLoadNewsHooks", this.init)
            }
            init() {
                this.app.addClickHandler(this.app.clickHandlerList.internalExchangeLogger.handler, this.app.clickHandlerList.internalExchangeLogger.priority)
            }
            clickHandler(t, e) {
                let i = t.getAttribute("data-hash")
                  , s = this.app.teaserData[i];
                if (s && s.coopType == pt.InternalExchange) {
                    let o = {};
                    o.cid = `cid=${this.app.id}`,
                    o.tid = `tid=${s.id}`,
                    o.h = `h=${i}`,
                    typeof this.app.servicerData.isBot < "u" && (o.bot = `bot=${this.app.servicerData.isBot}`),
                    typeof this.app.servicerData.tt < "u" && (o.tt = `tt=${this.app.servicerData.tt}`),
                    typeof this.app.servicerData.ts < "u" && (o.ts = `ts=${this.app.servicerData.ts}`),
                    typeof this.app.servicerData.psid < "u" && (o.psid = `psid=${this.app.servicerData.psid}`),
                    typeof this.app.servicerData.dt < "u" && (o.dt = `dt=${this.app.servicerData.dt}`);
                    let c = t.parentElement.tagName
                      , d = "." + this.app.extractClass(t.parentElement);
                    o.ce = `ce=${c}${d}`,
                    this.app.request.pixel("internalExchangeLogger", this.app.webProtocol + "//c.adskeeper.co.uk/clie", o, {})
                }
                return !0
            }
        }
    }
    );
    var Bs = {};
    at(Bs, {
        IframeSizeChangerBlock: ()=>Ze
    });
    var Ze, Ls = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Ke();
        Ze = class extends W {
            constructor(t) {
                super(t),
                this.name = "IframeSizeChangerBlock",
                this.addHook("afterLoadNewsHooks", this.initIframeSizeChange)
            }
            initIframeSizeChange() {
                let t = null;
                try {
                    if (t || (t = this.app.context.parent.document.getElementById(this.app.context.name)),
                    t)
                        try {
                            let e = this.app.context.parent.document.getElementById(t.name + "__container__").parentNode;
                            e.style.width = "initial",
                            e.style.height = "initial"
                        } catch {}
                } catch {
                    this.app.log("SafeFrame. Checking for support..."),
                    this.isSafeFrameSupported() && this.isSafeFrameAllowedPush() ? (this.app.log("SafeFrame. Supported"),
                    this.safeFrameRegister(),
                    this.safeFrameExpand()) : this.app.log("SafeFrame. Unsupported!");
                    return
                }
                if (t) {
                    let e = "0".split("*");
                    typeof e[0] < "u" && (t.width = e[0] + "px"),
                    typeof e[1] < "u" && (t.height = e[1] + "px")
                }
            }
            isSafeFrameSupported() {
                return typeof this.app.context.$sf < "u"
            }
            isSafeFrameAllowedPush() {
                return this.app.context.$sf.ext.supports()["exp-push"]
            }
            safeFrameExpand() {
                this.app.log("SafeFrame. Expanding...");
                let t = this.app.context.$sf.ext.geom().exp
                  , e = {
                    push: !0,
                    t: t.t,
                    l: t.l,
                    r: t.r,
                    b: t.b
                };
                this.app.context.$sf.ext.expand(e)
            }
            safeFrameRegister() {
                this.app.log("SafeFrame. Register..."),
                this.app.context.$sf.ext.register(300, 250, (t,e)=>{
                    this.app.log("SafeFrame. " + t + "; " + JSON.stringify(e))
                }
                )
            }
        }
    }
    );
    var As = {};
    at(As, {
        RejectBlock: ()=>Je
    });
    var Je, _s = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Je = class extends W {
            constructor(t) {
                super(t),
                this.isRejectNeeded = !1,
                this.name = "RejectBlock",
                this.app.isInsertedRejectStyles = !1,
                this.app.AdskeeperReject = ()=>{
                    this.isRejectNeeded = !0
                }
                ,
                this.addHook("afterLoadNewsHooks", this.initReject)
            }
            initReject() {
                this.isRejectNeeded && this.reject()
            }
            reject() {
                let t = this.app.root.querySelectorAll(".mgline");
                for (let e = 0; e < t.length; e++) {
                    let i = t[e]
                      , s = i.querySelector(".close-informer")
                      , o = i.querySelector("div.mcimg")
                      , c = i.className.match(/teaser-([0-9]+)/)
                      , d = i.className.match(/type-(w|e|i)/);
                    if (!s && o && i.className.indexOf("dsp") <= 0 && c && d && d[1] !== "i") {
                        let f = this.buildCloseBtn(c, d);
                        i.querySelector(".image-container")?.appendChild(f)
                    }
                }
                this.initRejectStyles()
            }
            buildCloseBtn(t, e) {
                let i = this.app.subnetDashboardDomain + "/publisher/blocked"
                  , s = this.app.context.document.createElement("a");
                return s.className = "close-informer",
                s.href = i + "/teaser/" + t[1] + "/widget/" + (e[1] === "w" ? "57751587/type/goods" : "0/type/news"),
                s.target = "_blank",
                s.style.top = "2px",
                s.style.right = "3px",
                s.rel = "sponsored nofollow",
                s
            }
            initRejectStyles() {
                if (this.app.isInsertedRejectStyles)
                    return;
                this.app.stylesheetsBlock.add("reject", `
div.mgline a.close-informer {
width: 14px !important;
height: 14px !important;
background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");
display: block;
opacity: 0;
position: absolute;
right: 2px;
top: 2px;
z-index: 149999;
cursor: pointer;
-moz-transition: all 0.3s ease-out;
-o-transition: all 0.3s ease-out;
-webkit-transition: all 0.3s ease-out;
-ms-transition: all 0.3s ease-out;
transition: all 0.3s ease-out;
}
.mgline a.close-informer:hover {
opacity: 1;
}
.mgline .image-with-text img.mcimgad {
-moz-transition: all 0.3s ease-out;
-o-transition: all 0.3s ease-out;
-webkit-transition: all 0.3s ease-out;
-ms-transition: all 0.3s ease-out;
transition: all 0.3s ease-out;
}
div.mcimg {
position: relative;
}
div.image-with-price {
position: relative;
}
.mgline .image-container {
width: auto;
margin: 0 auto;
position: relative;
}`),
                this.app.isInsertedRejectStyles = !0
            }
        }
    }
    );
    var Gs = {};
    at(Gs, {
        DSAIconBlock: ()=>Xe
    });
    var Xe, Rs = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Xe = class extends W {
            constructor(t) {
                super(t),
                this.isStylesAppended = !1,
                this.iconSize = 16,
                this.name = "DSAIconBlock",
                this.isMobile = this.app.utils.isMobile() || this.app.utils.isTablet(),
                this.nonClickZone = this.isMobile ? 9 : 5,
                this.addHook("afterLoadNewsHooks", this.init)
            }
            init() {
                let t = this.app.root.querySelectorAll(".mgline");
                for (let e = 0; e < t.length; e++) {
                    let i = t[e];
                    if (typeof i.dataset.dsa < "u" || i.classList.contains("type-v"))
                        continue;
                    let s = i.getAttribute("data-i")
                      , o = this.app.teaserData[s];
                    if (o && o.dsa_link) {
                        i.dataset.dsa = "true";
                        let c = this.buildIcon(o.dsa_link)
                          , d = i.querySelector(".image-with-text");
                        d = i.querySelector(".image-container"),
                        d && (d.style.position = "relative",
                        d.appendChild(c),
                        this.appendStyles())
                    }
                }
            }
            buildIcon(t) {
                let e = this.app.context.document.createElement("div")
                  , i = this.app.context.document.createElement("a")
                  , s = `<svg class="mgdsa-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
      viewBox="0 0 18 18" fill="none">
      <rect width="18" height="18" fill="white"/>
      <g clip-path="url(#clip0_49_159)">
        <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86
        13.14 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075
        12.3075 15 9 15Z" fill="#737373"/>
        <path d="M9.65019 11.8586L9.6502 8.21708H7.47609V9.35846H8.50881L8.50881 13L10.6829 13V11.8586H9.65019Z"
        fill="#737373"/>
        <path d="M10 6C10 6.55228 9.55229 7 9 7C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5C9.55229 5 10
        5.44772 10 6Z" fill="#737373"/>
      </g>
      <defs>
        <clipPath id="clip0_49_159">
          <rect width="16" height="16" fill="white" transform="translate(1 1)"/>
        </clipPath>
      </defs>
    </svg>`;
                return e.classList.add("mgdsa-container"),
                i.classList.add("mgdsa-link"),
                i.href = t,
                i.target = "_blank",
                i.title = this.app.getTranslation("[INFORMER_DSA_ICON_TITLE]"),
                i.rel = "sponsored nofollow",
                i.innerHTML = s,
                e.appendChild(i),
                e
            }
            appendStyles() {
                if (this.isStylesAppended)
                    return;
                let t = `
      .mgdsa-container {
        display: flex;
        justify-content: flex-end;
        width: ${this.iconSize + this.nonClickZone}px;
        height: ${this.iconSize + this.nonClickZone}px;
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 2147483646;
        opacity: ${this.isMobile ? 1 : 0};
        transition: opacity 0.3s ease-out;
      }
      .mgdsa-link {
        display: block;
        max-width: ${this.iconSize}px;
        max-height: ${this.iconSize}px;
        text-decoration: none;
        outline: none;
        border: none;
        cursor: pointer;
      }
      .mgdsa-icon {
        width: ${this.iconSize}px;
        height: ${this.iconSize}px;
        max-width: ${this.iconSize}px;
        max-height: ${this.iconSize}px;
      }
    `;
                this.isMobile ? t += `
        .mgdsa-link {
          padding: 0 0 ${this.nonClickZone}px ${this.nonClickZone}px;
          box-sizing: content-box;
        }
      ` : t += `
        .mgline:hover .mgdsa-container {
          opacity: 1;
        }
      `,
                this.app.stylesheetsBlock.add("dsa-icon", t),
                this.isStylesAppended = !0
            }
        }
    }
    );
    var Ms = {};
    at(Ms, {
        TeaserHoverBlock: ()=>Qe
    });
    var Qe, Os = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Qe = class extends W {
            constructor(t) {
                super(t),
                this.name = "TeaserHoverBlock",
                this.addHook("afterLoadNewsHooks", this.init)
            }
            init() {
                let t = this.app.root.querySelectorAll(".mgline");
                for (let e = 0; e < t.length; e++) {
                    let i = t[e]
                      , s = {
                        mgline: i,
                        advIcon: i.querySelector("img.mcimgad"),
                        rejectIcon: i.querySelector(".close-informer")
                    };
                    this.teaserHover(s)
                }
            }
            teaserHover(t) {
                let {mgline: e, advIcon: i, rejectIcon: s} = t
                  , o = {
                    advIcon: {
                        el: i,
                        positionLimits: this.iconPositionLimits(i, s)
                    },
                    rejectIcon: {
                        el: s
                    }
                };
                this.app.isTouchDevice() ? e.addEventListener("click", ()=>{
                    s && this.moveIconsForward(o)
                }
                ) : e.addEventListener("mouseenter", ()=>{
                    s && this.moveIconsForward(o)
                }
                ),
                e.addEventListener("mouseleave", ()=>{
                    s && this.moveIconsBack(o)
                }
                )
            }
            iconPositionLimits(t, e) {
                let i = this.getIconCurrentPosition(t)
                  , s = this.getIconCurrentPosition(e);
                return !t || !e ? {
                    initial: null,
                    ending: null
                } : {
                    initial: i.right,
                    ending: i.right + e.offsetWidth + s.right
                }
            }
            moveIconsForward(t) {
                this.isAdvIconOnTop(t.advIcon.el) && this.changeIconPosition(t.advIcon, "mouseenter"),
                t.rejectIcon.el && (t.rejectIcon.el.style.opacity = "0.7")
            }
            moveIconsBack(t) {
                this.isAdvIconOnTop(t.advIcon.el) && this.changeIconPosition(t.advIcon, "mouseleave"),
                t.rejectIcon.el && (t.rejectIcon.el.style.opacity = "0")
            }
            changeIconPosition(t, e) {
                let i = t.positionLimits.initial
                  , s = t.positionLimits.ending;
                t.el && (e === "mouseenter" && s !== null && (t.el.style.right = s + "px"),
                e === "mouseleave" && i !== null && (t.el.style.right = i + "px"))
            }
            getIconCurrentPosition(t) {
                let e = t ? this.app.context.getComputedStyle(t) : null;
                return {
                    right: e ? parseInt(e.right.replace("px", "")) : null,
                    top: e ? parseInt(e.top.replace("px", "")) : null
                }
            }
            isAdvIconOnTop(t) {
                if (t) {
                    let e = +this.app.context.getComputedStyle(t).top.replace("px", "");
                    return e >= 0 && e <= 5
                }
            }
        }
    }
    );
    var Ws = {};
    at(Ws, {
        InAppParamsBlock: ()=>Ye
    });
    var Hs, Ye, Ns = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Hs = ["mgBundle", "mgStoreurl", "mgIfa", "gdpr", "gdprConsent", "usPrivacy", "gdprApplies", "consentData", "uspString"],
        Ye = class extends W {
            constructor(t) {
                super(t),
                this.name = "InAppParamsBlock",
                this.addHook("afterInitHooks", ()=>{
                    this.rootContainer = this.app.getRoot();
                    for (let e in this.rootContainer.dataset)
                        if (Hs.indexOf(e) !== -1) {
                            this.setMgDataAttributes();
                            break
                        }
                }
                )
            }
            setMgDataAttributes() {
                for (let t in this.rootContainer.dataset)
                    if (Hs.indexOf(t) !== -1) {
                        let e = this.rootContainer.dataset[t];
                        t === "gdpr" || t === "gdprApplies" ? this.app.requestParams.gdpr = Number(e) || 1 : t === "gdprConsent" || t === "consentData" ? this.app.requestParams.gdpr_consent = e : t === "usPrivacy" || t === "uspString" ? this.app.requestParams.us_privacy = e : this.app.requestParams[t] = e
                    }
            }
        }
    }
    );
    var Vs = {};
    at(Vs, {
        CountersBlock: ()=>ti
    });
    var ti, Fs = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        ti = class extends W {
            constructor(t) {
                super(t),
                this.impTrackCapping = {},
                this.name = "CountersBlock",
                this.addHook("afterLoadNewsHooks", this.countersLoad),
                this.addHook("afterLoadNewsHooks", this.parseImpTracker),
                this.addHook("afterPrepareCappingDataHooks", this.sendImpTrackCapping),
                this.addHook("afterPrepareCappingDataHooks", this.sendJsTrackers)
            }
            countersLoad() {
                let t = 0;
                if (Number(this.app.id) !== 1419550) {
                    let e = this.app.childWidgetsData[this.app.id];
                    t = e ? e.newsWidgetIdPartner : null
                }
            }
            parseImpTracker() {
                let t = Object.keys(this.app.teaserData);
                for (let e in t)
                    if (Array.isArray(this.app.teaserData[t[e]].impt)) {
                        for (let i = 0; i < this.app.teaserData[t[e]].impt.length; i++)
                            if (!(typeof this.app.teaserData[t[e]].impt[i].completed < "u")) {
                                if (this.app.teaserData[t[e]].impt[i].only_viewable === 1)
                                    typeof this.impTrackCapping[t[e]] > "u" && (this.impTrackCapping[t[e]] = []),
                                    this.impTrackCapping[t[e]].push(this.app.teaserData[t[e]].impt[i]);
                                else {
                                    let s = this.app.teaserData[t[e]].impt[i].code;
                                    this.app.teaserData[t[e]].impt[i].type === "i" && this.sendCustomCounter(s),
                                    this.app.teaserData[t[e]].impt[i].type === "j" && (this.app.teaserData[t[e]].impt[i].iframe === 1 ? this.sendIframeTracker(t[e], s, i) : this.sendInlineTracker(t[e], s))
                                }
                                this.app.teaserData[t[e]].impt[i].completed = 1
                            }
                    }
            }
            sendImpTrackCapping(t) {
                if (!(typeof this.impTrackCapping[t] > "u"))
                    for (let e = 0; e < this.impTrackCapping[t].length; e++)
                        this.impTrackCapping[t][e].type === "i" && this.sendCustomCounter(this.impTrackCapping[t][e].code),
                        this.impTrackCapping[t][e].type === "j" && (this.impTrackCapping[t][e].iframe === 1 ? this.sendIframeTracker(t, this.impTrackCapping[t][e].code, e) : this.sendInlineTracker(t, this.impTrackCapping[t][e].code))
            }
            sendCustomCounter(t) {
                this.app.request.pixel("widgetCustomCounter", t, {
                    mgbuster: "mgbuster=" + ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)
                }, {})
            }
            sendIframeTracker(t, e, i) {
                let s = "<script>window.onerror = function() { return true; };<\/script>";
                s += e;
                let o = this.app.context.document.createElement("iframe");
                o.style.display = "none",
                this.app.renderInSafeIframe(o, `${t}_${i}`, s),
                this.app.root.appendChild(o)
            }
            sendInlineTracker(t, e) {
                let i = this.getMglineByHash(t);
                if (!i)
                    return;
                i.insertAdjacentHTML("beforeend", e);
                let s = i.childNodes;
                for (let o = 0; o < s.length; o++)
                    if (s[o]instanceof HTMLScriptElement) {
                        let c = s[o]
                          , d = this.app.context.document.createElement("script");
                        d.src = c.src,
                        i.removeChild(c),
                        i.appendChild(d)
                    }
            }
            getMglineByHash(t) {
                let e = this.app.root.getElementsByClassName("mgline");
                for (let i = 0; i < e.length; i++)
                    if (e[i].getAttribute("data-i") === t)
                        return e[i];
                return null
            }
            sendJsTrackers(t) {
                if (Array.isArray(this.app.teaserData[t].jst))
                    for (let e = 0; e < this.app.teaserData[t].jst.length; e++) {
                        let i = "<script>window.onerror = function() { return true; };<\/script>";
                        i += this.app.teaserData[t].jst[e];
                        let s = this.app.context.document.createElement("iframe");
                        s.style.display = "none",
                        this.app.renderInSafeIframe(s, `${t}_${e}`, i),
                        this.app.root.appendChild(s)
                    }
            }
        }
    }
    );
    var qs = {};
    at(qs, {
        SubnetsBlock: ()=>ei
    });
    var ei, zs = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        ei = class extends W {
            constructor(t) {
                super(t),
                this.name = "SubnetsBlock",
                this.addHook("afterInitHooks", this.init),
                this.app.currentSubnet = 2,
                this.app.subnetMirrorsImage = "",
                this.app.subnetMirrorsUtm = "",
                this.app.subnetDashboardDomain = ""
            }
            init() {
                let t = [1419550];
                this.childWidgets = JSON.parse("[]");
                let e = JSON.parse("[]");
                this.childFuncBlockList = [];
                for (let o in this.childWidgets)
                    this.childWidgets.hasOwnProperty(o) && t.push(this.childWidgets[o].childId);
                for (let o in e)
                    if (e.hasOwnProperty(o)) {
                        this.childFuncBlockList[o] = this.childFuncBlockList[o] || [];
                        for (let c in e[o])
                            e[o].hasOwnProperty(c) && this.childFuncBlockList[o].push(e[o][c].split("/").pop())
                    }
                let i = this.loadSubnets()
                  , s = this.app.uniqId !== "" ? "_" + this.app.uniqId : "";
                t.forEach(o=>{
                    this.app.context["mgReject" + o] = this.app.AdskeeperReject,
                    this.app.context["mgLoadAds" + o + s] = (c,d)=>{
                        let u = i[2];
                        this.loadAds(c, d, o, 2, u.mirror)
                    }
                    ,
                    this.app.context["_mgConsentWait" + o + s] = c=>{
                        this.app.consentsBlock.waitConsent(c),
                        typeof this.app.context["_mgGPT" + o] < "u" && delete this.app.context["_mgGPT" + o]
                    }
                    ;
                    for (let c in i)
                        if (i.hasOwnProperty(c)) {
                            let d = i[c];
                            d.id !== Lt.L && (this.app.context[d.informer_prefix + "CReject" + o] = this.app.AdskeeperReject,
                            this.app.context[d.informer_prefix + "LoadGoods" + o + s] = (u,f)=>{
                                this.loadAds(u, f, o, d.id, d.mirror)
                            }
                            )
                        }
                }
                )
            }
            loadSubnets() {
                let t = JSON.parse('{"2":{"id":2,"informer_prefix":"Adskeeper","mirror":"adskeeper.co.uk","mirrorName":"adskeeper","imageDomain":"adskeeper.co.uk","dashboardDomain":"dashboard.adskeeper.co.uk","utm":"?utm_source=widget_adskeeper&utm_medium=text&utm_campaign=add&utm_content="}}')
                  , e = t[2];
                return this.app.subnetMirrorsImage = e.imageDomain,
                this.app.subnetMirrorsUtm = e.utm,
                this.app.subnetDashboardDomain = this.app.webProtocol + "//" + e.dashboardDomain,
                t
            }
            loadAds(t, e, i, s, o) {
                if (window.performance?.mark("ssp_response", {
                    detail: {
                        _mgwidget: 1419550
                    }
                }),
                this.app.id = i,
                this.app.loadedType = "goods",
                this.app.currentSubnet = s,
                this.app.currentSubnetDomain = o,
                this.app.originalId !== this.app.id) {
                    if (typeof this.childFuncBlockList[this.app.id] < "u") {
                        let c = this.childFuncBlockList[this.app.id];
                        this.executeFuncBlock(c)
                    }
                    if (typeof this.childWidgets[this.app.id] < "u" && typeof this.childWidgets[this.app.id].customFuncBlocks < "u") {
                        let c = this.childWidgets[this.app.id].customFuncBlocks;
                        this.executeFuncBlock(c)
                    }
                }
                this.app.lifeCycleBlock.render(t, e)
            }
            executeFuncBlock(t) {
                for (let e in t)
                    if (t.hasOwnProperty(e)) {
                        let i = t[e]
                          , s = i.replace(/[-_]/g, "").replace(/./, o=>o.toUpperCase()) + "Block";
                        try {
                            this.app[s] = new window.AdskeeperInfC1419550.childFuncBlocks[i](this.app)
                        } catch (o) {
                            this.app.log(`SubnetsBlock - ${i} error:`, "error", o)
                        }
                    }
            }
        }
    }
    );
    var Us = {};
    at(Us, {
        ScrollTimeDoubleClickBlock: ()=>ii
    });
    var ii, $s = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        ii = class extends W {
            constructor(t) {
                super(t),
                this.lastScrollTime = 0,
                this.lastClickTime = 0,
                this.name = "ScrollTimeDoubleClickBlock",
                this.app.getWidgetValue("useScrollClick", !1) && (this.app.addEvent(this.app.context, "scroll", ()=>this.onContextScrollEvent()),
                this.app.scrollTimeDoubleClickHandler = this.onClick.bind(this),
                this.app.addClickHandler(this.app.clickHandlerList.scrollTimeDoubleClick.handler, this.app.clickHandlerList.scrollTimeDoubleClick.priority))
            }
            onClick(t, e) {
                return this.onContextClickEvent(),
                this.app.doubleClickType = "scrollTime",
                this.lastScrollTime <= this.lastClickTime && this.lastClickTime - this.lastScrollTime <= .5 ? (this.app.doubleClickHandler(t),
                e.preventDefault(),
                this.app.linksBlocked = !0,
                !1) : (this.app.linksBlocked = !1,
                !0)
            }
            onContextScrollEvent() {
                this.lastScrollTime = this.app.getCurrentTimestamp()
            }
            onContextClickEvent() {
                this.lastClickTime = this.app.getCurrentTimestamp()
            }
        }
    }
    );
    var Zs = {};
    at(Zs, {
        SmartDoubleClickBlock: ()=>si
    });
    var js, wn, kn, si, Ks = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        js = 1,
        wn = 100,
        kn = {
            undefined: -1,
            desktop: 1,
            mobile: 2,
            tablet: 3,
            smarttv: 4
        },
        si = class extends W {
            constructor(t) {
                super(t),
                this.name = "SmartDoubleClickBlock",
                this.app.isDisabledBySmartDoubleClick = !1,
                this.addHook("afterInitHooks", this.init)
            }
            init() {
                this.groups = this.app.getWidgetValue("doubleclickParameters", JSON.parse("null")),
                !(!this.groups || !this.app.isEnabledDoubleClick()) && (this.doubleClickCheckId = 0,
                this.loadedTime = this.app.getCurrentTimestamp(),
                this.handlers = this.getHandlers(),
                this.app.onSmartDoubleClickHandler = this.onClick.bind(this),
                this.app.addClickHandler(this.app.clickHandlerList.onSmartDoubleClick.handler, this.app.clickHandlerList.onSmartDoubleClick.priority))
            }
            getGroupPercent(t, e, i) {
                let s = 0
                  , o = e.getBoundingClientRect();
                for (let c in this.handlers) {
                    if (!this.handlers[c])
                        continue;
                    let d = this.handlers[c](t, i, o);
                    if (d === !1)
                        return !1;
                    s += d
                }
                return s / Object.keys(t).length
            }
            getGroupElementPercent(t, e, i) {
                return t.hasOwnProperty(e) ? t[e].hasOwnProperty("value") && i === t[e].value || t[e].hasOwnProperty("min") && i >= t[e].min && i <= t[e].max ? t[e].percent : !1 : 0
            }
            getDoubleClickPercent(t, e) {
                for (let i in this.groups) {
                    if (!this.groups[i])
                        continue;
                    let s = this.getGroupPercent(this.groups[i], t, e);
                    if (s !== !1)
                        return this.doubleClickCheckId = i,
                        s
                }
                return this.doubleClickCheckId = 0,
                js - 1
            }
            onClick(t, e) {
                let i = this.app.random(js, wn);
                return this.app.doubleClickPercent = Number(this.getDoubleClickPercent(t, e)),
                this.app.isDisabledBySmartDoubleClick = this.app.doubleClickPercent < i,
                this.app.doubleClickCheckId = this.app.isDisabledBySmartDoubleClick ? 0 : this.doubleClickCheckId,
                !0
            }
            getHandlers() {
                return [t=>this.getGroupElementPercent(t, "device", kn[this.app.deviceType] || ""), t=>this.getGroupElementPercent(t, "browser", this.app.browserId), t=>this.getGroupElementPercent(t, "click_time", this.app.getCurrentTimestamp() - this.loadedTime), t=>this.getGroupElementPercent(t, "width", this.app.root.offsetWidth), t=>this.getGroupElementPercent(t, "height", this.app.root.offsetHeight), t=>this.getGroupElementPercent(t, "click_y", this.app.root.mouseY), t=>this.getGroupElementPercent(t, "click_x", this.app.root.mouseX), t=>this.getGroupElementPercent(t, "hw_ratio", this.app.root.offsetHeight / this.app.root.offsetWidth), (t,e)=>this.getGroupElementPercent(t, "borderTop", e.offsetY), (t,e)=>this.getGroupElementPercent(t, "borderLeft", e.offsetX), (t,e,i)=>this.getGroupElementPercent(t, "borderRight", i.width - e.offsetX), (t,e,i)=>this.getGroupElementPercent(t, "borderBottom", i.height - e.offsetY), t=>this.getGroupElementPercent(t, "research", 1)]
            }
        }
    }
    );
    var Js = {};
    at(Js, {
        MobileDoubleClickBlock: ()=>ai
    });
    var ai, Xs = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        ai = class extends W {
            constructor(t) {
                super(t),
                this.name = "MobileDoubleClickBlock",
                ("ontouchstart"in window || navigator.maxTouchPoints > 0) && (this.addHook("afterSendCappingHooks", this.init),
                this.addHook("beforeInitHooks", ()=>{
                    this.informerId = this.app.root.getAttribute("id")
                }
                ))
            }
            init() {
                this.app.isEnabledDoubleClick() && (this.app.doubleClickTimeLoaded || (this.app.doubleClickTimeLoaded = new Date().getTime() / 1e3),
                this.app.stylesheetsBlock.add("doubleclickMobile", this.getStyles()),
                this.app.showDoubleClickButton = this.onClick.bind(this),
                this.app.addClickHandler(this.app.clickHandlerList.showMobileDoubleClick.handler, this.app.clickHandlerList.showMobileDoubleClick.priority))
            }
            onClick(t, e) {
                if (this.app.isDisabledBySmartDoubleClick)
                    return !0;
                this.app.doubleClickType = "mobile",
                this.app.linksBlocked = !1;
                let i = t;
                if (0) {
                    if (i.className.indexOf("mgbuybox") === -1)
                        try {} catch (d) {}
                } else {
                    let s = new Date().getTime() / 1e3
                      , o = this.app.getWidgetValue("mobileDoubleclickDelay", 0);
                    if (i.className !== "AdskeeperCDButton1419550" && (o === 0 || s - this.app.doubleClickTimeLoaded < o)) {
                        for (this.app.doubleClickHandler(i),
                        this.app.linksBlocked = !0,
                        e.preventDefault(); i.tagName !== "A" && i.id !== this.informerId; )
                            if (i = i.parentElement,
                            i.id === this.informerId)
                                return;
                        let c = e.target;
                        for (; !c.classList.contains("mgline"); )
                            c = c.parentElement;
                        let d = this.app.context.document.createElement("div");
                        d.className = "AdskeeperCDLayout1419550",
                        d.style.zIndex = "100000";
                        let u = this.createLinkGo(i, c, o);
                        d.appendChild(u);
                        let f = c.querySelector(".mgline-inner");
                        f ? f.appendChild(d) : c.appendChild(d),
                        setTimeout(()=>{
                            d.parentNode.removeChild(d)
                        }
                        , 1e4)
                    } else
                        return this.app.doubleClickHandler(i, !0),
                        !0
                }
            }
            createLinkGo(t, e, i) {
                let s = this.app.context.document.createElement("a");
                s.innerHTML = this.app.getTranslation("[GO]");
                let o = t.getAttribute(this.app.hrefAttr);
                typeof o == "string" && (o = o + (o.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType),
                s.href = o;
                let c = e.querySelector("a")?.getAttribute("data-hash");
                c && s.setAttribute("data-hash", c);
                let d = 80
                  , u = 80
                  , f = (1 - d / e.offsetHeight) / 2 * 100
                  , I = e.offsetWidth / u * .98;
                s.style.top = f + "%";
                let T = I > 1 ? (1 - u / e.offsetWidth) / 2 * 100 : 0;
                return s.style.left = T + "%",
                e.offsetHeight <= 100 && (I = .5),
                I < 1 && (s.style.transform = "scale3d(" + I + "," + I + "," + I + ")",
                s.style.webkitTransform = "scale3d(" + I + "," + I + "," + I + ")",
                s.style.transformOrigin = "left",
                s.style.webkitTransformOrigin = "left"),
                s.target = "_blank",
                s.className = "AdskeeperCDButton1419550",
                setTimeout(()=>{
                    I = I < 1 ? I : 1,
                    s.style.transform = "scale3d(" + I + "," + I + "," + I + ")",
                    s.style.webkitTransform = "scale3d(" + I + "," + I + "," + I + ")"
                }
                , i),
                s
            }
            getStyles() {
                return '.AdskeeperCDButton1419550{display:       inline-block;width:         170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);text-align:    center;padding:    0 10px;text-shadow:   none;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}.AdskeeperCDLayout1419550{height: 100%;width: 100%;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#AdskeeperCComposite1419550 .mgline {position:relative}'
            }
        }
    }
    );
    var Qs = {};
    at(Qs, {
        DesktopDoubleClickBlock: ()=>ni
    });
    var ni, Ys = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        ni = class extends W {
            constructor(t) {
                super(t),
                this.name = "DesktopDoubleClickBlock";
                let e = "ontouchstart"in window || navigator.maxTouchPoints > 0
                  , i = "addEventListener"in window.document;
                !e && i && (this.addHook("afterSendCappingHooks", this.init),
                this.addHook("beforeInitHooks", ()=>{
                    this.informerId = this.app.root.getAttribute("id")
                }
                ))
            }
            init() {
                this.app.isEnabledDoubleClick() && (this.app.doubleClickTimeLoaded || (this.app.doubleClickTimeLoaded = new Date().getTime() / 1e3),
                this.app.stylesheetsBlock.add("desktopDoubleClick", this.getStyles()),
                this.app.showDesktopDoubleClickButton = this.onClick.bind(this),
                this.app.addClickHandler(this.app.clickHandlerList.showDesktopDoubleClick.handler, this.app.clickHandlerList.showDesktopDoubleClick.priority))
            }
            onClick(t, e) {
                if (this.app.isDisabledBySmartDoubleClick)
                    return !0;
                this.app.doubleClickType = "desktop",
                this.app.linksBlocked = !1;
                let i = t
                  , s = new Date().getTime() / 1e3
                  , o = this.app.getWidgetValue("desktopDoubleclickDelay", 0);
                if (i.className !== "AdskeeperCDButton1419550" && (o === 0 || s - this.app.doubleClickTimeLoaded < o)) {
                    for (this.app.doubleClickHandler(i),
                    e.preventDefault(),
                    this.app.linksBlocked = !0; i.tagName !== "A" && i.id !== this.informerId; )
                        if (i = i.parentElement,
                        i.id === this.informerId)
                            return !1;
                    let c = e.target;
                    try {
                        for (; !c.classList.contains("mgline"); )
                            c = c.parentElement
                    } catch {
                        return !1
                    }
                    let d = this.app.context.document.createElement("div");
                    d.className = "AdskeeperCDLayout1419550",
                    d.style.zIndex = "100000";
                    let u = this.createLinkGo(i, c, e);
                    d.appendChild(u);
                    let f = c.querySelector(".mgline-inner");
                    f ? f.appendChild(d) : c.appendChild(d),
                    setTimeout(()=>{
                        d.parentNode.removeChild(d)
                    }
                    , 1e4)
                } else
                    return this.app.doubleClickHandler(i, !0),
                    !0
            }
            createLinkGo(t, e, i) {
                let s = this.app.context.document.createElement("a");
                s.innerHTML = this.app.getTranslation("[GO]");
                let o = t.getAttribute(this.app.hrefAttr);
                typeof o == "string" && (o = o + (o.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType),
                s.href = o;
                let c = e.querySelector("a")?.getAttribute("data-hash");
                c && s.setAttribute("data-hash", c);
                let d = e.offsetHeight
                  , u = d / 3 + 2
                  , f = u;
                s.style.width = u - 2 + "px",
                s.style.lineHeight = u - 2 + "px",
                s.style.height = "33.33%",
                e.offsetHeight <= 100 && (f = 80,
                u = 80,
                s.style.width = "80px",
                s.style.lineHeight = "78px",
                s.style.height = "80px");
                let I = (1 - u / e.offsetHeight) / 2 * 100;
                i.clientY - e.getBoundingClientRect().top < d / 2 ? I = (1 - 2 * u / d) * 100 / 4 + 50 : I = (1 - 2 * u / d) * 100 / 4,
                e.offsetHeight <= 100 && (I = -34),
                s.style.top = I + "%";
                let E = e.offsetWidth / f * .98
                  , y = E > 1 ? (1 - f / e.offsetWidth) / 2 * 100 : 0;
                return e.offsetHeight <= 100 && (y = 45.5),
                s.style.left = y + "%",
                parseFloat(s.style.width) <= 50 && (s.style.font = "normal 500 12px/" + s.style.width + ' "Sans", sans-serif'),
                e.offsetHeight <= 100 && (E = .5),
                E < 1 && (s.style.transform = "scale3d(" + E + "," + E + "," + E + ")",
                s.style.webkitTransform = "scale3d(" + E + "," + E + "," + E + ")",
                s.style.transformOrigin = "left",
                s.style.webkitTransformOrigin = "left"),
                s.target = "_blank",
                s.className = "AdskeeperCDButton1419550",
                setTimeout(()=>{
                    E = E < 1 ? E : 1,
                    s.style.transform = "scale3d(" + E + "," + E + "," + E + ")",
                    s.style.webkitTransform = "scale3d(" + E + "," + E + "," + E + ")"
                }
                , 500),
                s
            }
            getStyles() {
                return '.AdskeeperCDButton1419550{display:       inline-block;width:         170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);text-align:    center;padding:    0 10px;text-shadow:   none;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}.AdskeeperCDLayout1419550{height: 100%;width: 100%;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 100;}#AdskeeperCComposite1419550 .mgline {position:relative}'
            }
        }
    }
    );
    var ta = {};
    at(ta, {
        SspDoubleClickBlock: ()=>oi
    });
    var oi, ea = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        oi = class extends W {
            constructor(t) {
                super(t),
                this.servicerDoubleClickStatus = !1,
                this.name = "SspDoubleClickBlock",
                this.addHook("afterSendCappingHooks", this.onCapping),
                this.addHook("afterInjectScriptHooks", this.init),
                this.app.doubleClickType = "ssp",
                this.app.hashTimer = []
            }
            init() {
                this.app.stylesheetsBlock.add("ssp_doubleclick", this.getStyles());
                let t = setInterval(()=>{
                    if (this.servicerDoubleClickStatus) {
                        clearInterval(t);
                        return
                    }
                    !this.app.isEnabledDoubleClick() && typeof this.app.servicerData.dc < "u" && this.app.root.querySelectorAll("a[data-hash]").length && (this.app.sspDoubleClickHandler = this.onClick.bind(this),
                    this.app.addClickHandler(this.app.clickHandlerList.sspDoubleClick.handler, this.app.clickHandlerList.sspDoubleClick.priority),
                    this.servicerDoubleClickStatus = !0)
                }
                , 100)
            }
            onClick(t, e) {
                let i = t.getAttribute("data-hash")
                  , s = new Date().getTime();
                return i in this.app.hashTimer && s - this.app.hashTimer[i] > this.app.servicerData.dc || this.app.teaserData[i].coopType !== pt.Wages || t.className === "AdskeeperDButton1419550" ? (this.app.doubleClickHandler(t, !0),
                !0) : (this.app.doubleClickHandler(t),
                e.preventDefault(),
                this.showButton(t),
                !1)
            }
            showButton(t) {
                let e = this.app.context.document.createElement("div");
                e.classList.add("AdskeeperDLayout1419550");
                let i = t.closest(".mgline");
                i !== null && i.appendChild(e);
                let s = this.app.context.document.createElement("a");
                s.classList.add("AdskeeperDButton1419550");
                let o = t.getAttribute("href");
                typeof o == "string" && (o = o + (o.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType),
                s.href = o,
                s.setAttribute("data-hash", t.getAttribute("data-hash"));
                let c = Lt.MG !== 2 ? 50 : 80
                  , d = Lt.MG !== 2 ? 170 : 80
                  , u = (1 - c / i.offsetHeight) / 2 * 100
                  , f = i.offsetWidth / d * .98;
                s.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIHBvaW50cz0iMTIsMjkuMSAyMi4yLDE5IDEyLjEsOC45IDE0LDcgMjYsMTkgMTQsMzEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMSI+PC9wb2x5Z29uPjwvc3ZnPg==)",
                s.style.backgroundPosition = "center",
                s.style.top = u + "%";
                let I = f > 1 ? (1 - d / i.offsetWidth) / 2 * 100 : 0;
                Lt.MG === 2 && (s.style.left = I + "%"),
                f < 1 && (s.style.transform = "scale3d(" + f + "," + f + "," + f + ")",
                s.style.webkitTransform = "scale3d(" + f + "," + f + "," + f + ")",
                s.style.transformOrigin = "left",
                s.style.webkitTransformOrigin = "left"),
                s.target = "_blank",
                e.appendChild(s),
                setTimeout(()=>{
                    Lt.MG !== 2 ? (s.style.left = I + "%",
                    s.style.opacity = "1") : (f = f < 1 ? f : 1,
                    s.style.transform = "scale3d(" + f + "," + f + "," + f + ")",
                    s.style.webkitTransform = "scale3d(" + f + "," + f + "," + f + ")")
                }
                , 10),
                setTimeout(()=>{
                    e.parentNode.removeChild(e)
                }
                , 1e4)
            }
            onCapping() {
                if (typeof this.app.sspDoubleClickHash < "u")
                    for (let t = 0; t < this.app.sspDoubleClickHash.length; t++)
                        typeof this.app.hashTimer[this.app.sspDoubleClickHash[t]] > "u" && (this.app.hashTimer[this.app.sspDoubleClickHash[t]] = new Date().getTime())
            }
            getStyles() {
                let t = {
                    0: {
                        borderColor: "#0a1b53",
                        gradient: "#2b3c84, #0c1b52",
                        fontColor: "#fff"
                    },
                    2: {
                        borderColor: "#010101",
                        gradient: "#111312, #010101",
                        fontColor: "#fff"
                    },
                    3: {
                        borderColor: "#F36729",
                        gradient: "#F79220, #F26B29",
                        fontColor: "#fff"
                    }
                }
                  , e = typeof t[2] < "u" ? t[2] : t[0]
                  , i = ".AdskeeperDButton1419550{display:       inline-block;";
                return Lt.MG !== 2 ? i += "width:         168px;height:        48px;background:    -moz-linear-gradient(" + e.gradient + ");background:    -o-linear-gradient(" + e.gradient + ");background:    -webkit-linear-gradient(" + e.gradient + ");background:    linear-gradient(" + e.gradient + ");border:        1px solid " + e.borderColor + ";color:         " + e.fontColor + ' !important;font:          normal 700 21px/48px "Zapf Dingbats", sans-serif;opacity: 0;left: -100%;' : i += 'width:     170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);',
                i += "text-align:    center;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}.AdskeeperDLayout1419550{height: 100%;width: 100% !important;position: absolute !important;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#AdskeeperComposite1419550 .mgline {position:relative}",
                i
            }
        }
    }
    );
    var ia = {};
    at(ia, {
        ExternalCountersBlock: ()=>ri
    });
    var ri, sa = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        ri = class extends W {
            constructor(t) {
                super(t),
                this.name = "ExternalCountersBlock",
                this.app.externalCountersLinkHandler = this.externalCountersLinkHandler.bind(this),
                this.handleExternalCountersListener()
            }
            externalCountersLinkHandler(t, e) {
                let i = t.getAttribute("data-hash")
                  , s = this.app.teaserData[i];
                if (s && Array.isArray(s.clicktrackers)) {
                    let o = s.clicktrackers;
                    if (o.length)
                        for (let c = 0; c < o.length; c++)
                            this.app.request.pixel(`clickTracker ${i} - ${o[c]}`, o[c], {}, {})
                }
                return !0
            }
            handleExternalCountersListener() {
                this.app.addClickHandler(this.app.clickHandlerList.externalCountersLink.handler, this.app.clickHandlerList.externalCountersLink.priority)
            }
        }
    }
    );
    var aa = {};
    at(aa, {
        VideoTeasersBlock: ()=>pi
    });
    var pi, na = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        pi = class extends W {
            constructor(t) {
                super(t),
                this.name = "VideoTeasersBlock",
                this.siteBody = this.app.getMostTopWindow().document.body,
                this.playVideos = this.playVideos.bind(this),
                this.addHook("beforeLoadNewsHooks", this.setVideoStyles),
                this.addHook("afterLoadNewsHooks", this.playVideos)
            }
            setVideoStyles() {
                let t = `.mgresponsive { display: inherit; } .mgbox * { transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s; } .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: solid; border-width: 0px; background: rgba(248, 248, 248, 0.95); display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px; border-radius: 10px; transition: all 0.3s ease 0s; } .mgbox:hover { background: #ffffff !important; } .mgbox { width: 100%; max-width: 390px; } div.mcimg { padding: 5px 5px 5px 10px; text-align: center; float: left; margin-right: 10px; } img.mcimg { border-style: solid; border-color: #ffffff; border-width: 0px; width: 100% !important; height: auto !important; max-width: 70px; max-height: 70px; box-sizing: border-box; display: block; } .mgline .text-elements { display: table-cell; height: 80px; vertical-align: middle; padding-right: 54px; } .mctitle { text-align: left; margin-right: 10px; } .mctitle a { font-weight: bold; font-size: 13px; line-height: 15px; font-style: normal; text-decoration: none; color: #414a59; font-family: Verdana, sans-serif; } .mcdesc { display: block; text-align: left; margin-top: 5px; } .mcdesc a { font-weight: normal; font-size: 14px; line-height: 18px; font-style: normal; text-decoration: none; color: #6D6D6D; font-family: Verdana, sans-serif; display: block; } .mcdomain { display: block; text-align: left; } .mcdomain a { font-weight: normal; font-size: 14px; line-height: 18px; font-style: normal; text-decoration: none; color: #6D6D6D; font-family: Verdana, sans-serif; display: block; overflow: hidden; } .mcdomain a img.mcimgsrc { vertical-align: bottom; margin-bottom: -3px; height: 20px; width: 20px; display: inline-block; } .mgline { background: none repeat scroll 0 0; cursor: pointer; display: inline-block; _overflow: hidden; *zoom: 1; *display: inline; padding: 0 !important; border-style: solid; border-color: #ffffff; border-width: 0px; width: 100%; max-width: 100%; box-sizing: border-box; margin: 0; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; overflow: hidden; } .mgline .image-container { position: relative; overflow: visible; } .mgline .image-container .mcimgad { position: absolute; right: 0; bottom: 0; width: 20px; height: 20px; } .mgline { vertical-align: top; } .mgline, .mgbox { min-width: 90px; } .mgline[max-width~="120px"] .mcdesc { display: none !important; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } .text-elements a { text-decoration: none; } div.mcprice { text-align: center; } div.mcprice span { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: Verdana, sans-serif; } div.mgbuybox, div.mgarrowbox { display: none; } div.mgbuybox, div.mgarrowbox, div.mcprice { display: none; } span.mcpriceold { text-decoration: line-through !important; } .mgpopular { background-color: rgba(255, 0, 0, 0.2) !important; border-color: rgba(255, 90, 0, 0.3) !important; } img.mcimg { margin: 0; opacity: 1 !important; } .mgline { position: relative; } .mgline .fake { visibility: hidden; position: relative; padding-top: 4px; } .mgline:hover .mctitle a { text-decoration: none !important; } .mgline:hover .mcpriceold + .mcprice, .mgline:hover .mcpriceold { visibility: hidden; } .mgline:hover .mcdiscount { display: block; position: absolute; left: 0px; right: 0px; top: 5px; } .mgarrowbox { position: relative; background: #00bfff; width: 55%; height: 22px; margin: 0px; border-color: transparent; border-left-color: #00bfff; display: inline-block; font-family: Verdana, sans-serif; } .mgarrowbox:after { left: 100%; top: 50%; content: " "; height: 0px; width: 0px; position: absolute; pointer-events: none; margin-top: -11px; border: solid 11px; border-color: inherit; } .mgbuybox { width: 40%; display: inline-block; text-align: right; font-weight: bold; font-family: Verdana, sans-serif; font-size: 12px; color: #666666; text-decoration: underline; } .mctitle { line-height: 1 !important; } div.mcprice { margin-top: 5px; line-height: 12px !important; } div.mgbuybox, div.mgarrowbox { display: none; } .mgtobottom { position: absolute; bottom: 0; width: 100%; text-align: left; } .mgline .image-with-text, .mgline .mgtobottom { width: 100% !important; margin: 0 auto; } .mgline .image-with-text, .mgline .mgtobottom { max-width: 100%; } .mgheader { display: none !important; } .mghead { font-family: Verdana, sans-serif !important; color: #00bfff; font-size: 14px !important; text-transform: uppercase !important; } .mcpriceold { float: left; padding-left: 5px; } .mcdiscount { display: none; } .mcdomain a { padding: 0px; display: block; padding-top: 5px; padding-bottom: 2px; overflow: hidden; } div.mcprice, div.mcriceold { font-weight: bold; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #ffffff; font-family: Verdana, sans-serif; } div.mcpriceold { text-decoration: line-through !important; } .mgline[max-width~="120px"] .mgarrowbox, .mgline[max-width~="120px"] .mgbuybox { display: none !important; } .mgline .image-with-text { min-height: 1px; } .mgbox { position: fixed !important; z-index: 99999999; animation: 0.3s ease 0s 1 normal none running show !important; transition: all 0.3s ease 0s !important; } .mgbox:nth-of-type(1) { top: 10px; right: 10px; bottom: auto; } .mgbox:nth-of-type(2) { top: 120px; right: 10px; bottom: auto; } .mgbox:nth-of-type(3) { top: 230px; right: 10px; bottom: auto; } .mgbox:nth-of-type(4) { top: 340px; right: 10px; bottom: auto; } .mgbox:nth-of-type(5) { top: 450px; right: 10px; bottom: auto; } .mgbox:nth-of-type(6) { top: 560px; right: 10px; bottom: auto; } div.mg-close-button { display: flex; justify-content: center; z-index: 999; cursor: pointer; border-radius: 5px; position: absolute; right: 0; top: 0; width: 50px; height: 100%; transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s; border-radius: 0px 10px 10px 0px; } .mg-close-button:hover { background: rgba(0, 0, 0, 0.05); } a.mg-close-action { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } span.mg-close-button { color: transparent; font-size: 25px; font-weight: 400; font-family: Verdana, sans-serif; display: flex; align-self: center; cursor: pointer; transition: all 0.3s ease 0s; -webkit-transition: all 0.3s ease 0s; } .mgbox:hover span.mg-close-button { color: #414a59; } a.mg-button { background-color: #33172e; display: inline-block; margin: 10px 0 0; padding: 6px 10px; font-size: 15px; border: 2px solid #ec0081; line-height: 19px; font-weight: 700; color: #fff; font-family: Verdana, sans-serif; -webkit-box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15); box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15); border-radius: 5px; } @media (max-width: 480px) { .mgbox { max-width: calc(100% - 20px); } .mg-close-button { background: rgba(0, 0, 0, 0.05) !important; } span.mg-close-button { color: #414a59 !important; } } @media only screen and (max-device-width: 812px) and (orientation: landscape) { .mgbox { max-width: 75% !important; } .mg-close-button { background: rgba(0, 0, 0, 0.05) !important; } span.mg-close-button { color: #414a59 !important; } } .widgetPreviewRoot { min-height: 400px; } .mgbox { display: block; background: transparent; box-shadow: none; border-radius: unset; max-width: 410px; padding: 0 10px !important; } .mgbox:hover { background: transparent !important; } .mgbox:hover span.mg-close-button { color: #fff !important; } .mgline { display: block; overflow: visible; background-color: #8d8da1; position: relative; box-shadow: rgba(141, 141, 161, 0.4) 2px 4px 5px; border-radius: 15px; cursor: initial; } .mgline:hover { box-shadow: rgba(141, 141, 161, 0.5) 5px 7px 8px; } .mgline div.mcimg { position: relative; width: 35%; max-width: 100px; max-height: 100px; overflow: hidden; padding: 0; float: none; margin-right: 0; border-radius: 50% 50% 0 50%; } .mgline img.mcimg { max-width: 328px; max-height: 328px; object-fit: cover; border-radius: 50%; } .mgline .image-with-text { display: flex; align-items: center; justify-content: space-between; width: calc(100% - 60px) !important; max-width: calc(100% - 60px) !important; padding: 10px 0 10px 15px; margin: 0 !important; box-sizing: border-box; } .mgline .text-elements { display: flex; height: 100px; width: 62%; max-width: 210px; padding-right: 0; } .mgline .image-container { position: static; overflow: hidden; border-radius: 50% 50% 0 50%; } .mgline .text_on_hover { width: 100%; display: flex; flex-direction: column; align-items: flex-start; } .mgline .mctitle { width: 100%; max-width: 210px; margin-right: 0; } .mgline .mctitle a { font-size: 14px; line-height: 16px; color: #fff; font-family: Arial, sans-serif; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; max-height: 50px; -webkit-line-clamp: 3; -webkit-box-orient: vertical; padding: 2px 0; box-sizing: border-box; } .mgline .mcdomain { width: 100%; max-width: 210px; margin-bottom: 5px; } .mgline .mcdomain a { display: flex; align-items: center; color: #fff; font-weight: 500; line-height: 15px; font-size: 12px; text-decoration: none; } .mgline .mcdomain_source { margin-right: 7px; text-align: left; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; max-height: 15px; -webkit-line-clamp: 1; -webkit-box-orient: vertical; } .mgline .mcdomain_now { position: relative; margin: 0 5px 0 10px; } .mgline .mcdomain_now:after { content: \\'\\'; display: block; background-color: #fff; height: 4px; width: 4px; position: absolute; top: 5px; left: -8px; border-radius: 50%; } .mgline .mcdomain_icon { width: 20px; height: 20px; max-width: 20px; max-height: 20px; min-width: 20px; min-height: 20px; } .mgline .mcdomain_icon path { fill: #fff; } .mgheader { display: none !important; } .mgbox:nth-of-type(1) { right: 0; } .mgbox:nth-of-type(2) { top: 140px; right: 0; bottom: auto; } .mgbox:nth-of-type(3) { top: 270px; right: 0; bottom: auto; } .mgbox:nth-of-type(4) { top: 400px; right: 0; bottom: auto; } .mgbox:nth-of-type(5) { top: 530px; right: 0; bottom: auto; } .mgbox:nth-of-type(6) { top: 660px; right: 0; bottom: auto; } div.mg-close-button { border-radius: 0 15px 15px 0 !important; background: #7e7e92 !important; } div.mg-close-button:hover { background: #737387 !important; } span.mg-close-button { font-size: 35px; font-family: Arial, sans-serif; color: #fff; } .mgbottom_media { position: absolute; bottom: 6px; left: 13px; transition: none; display: flex; align-items: center; justify-content: flex-start; width: 54%; max-width: 210px; } .mgbtn_media { display: flex; align-items: center; justify-content: center; color: #2d69af; font-weight: 600; line-height: 1; font-size: 14px; cursor: pointer; transition: none; padding: 3px; box-sizing: border-box; } .mgmedia__metrics-icon { word-break: normal; display: block; height: 17px; width: 17px; max-width: 17px; max-height: 17px; min-width: 17px; min-height: 17px; margin-right: 7px; transition: none; } .mgmedia__metrics-icon path { fill: #2d69af; transition: none; } .mgmedia__metrics-value { font-size: 15px; transition: none; font-family: Arial, sans-serif; } .mgbtn_media:hover { color: #3c78be; } .mgbtn_media:hover .mgmedia__metrics-icon path { fill: #3c78be; } .mgbtn_media-active .mgmedia__metrics-value { color: #000; } @media (max-width: 480px) { div.mg-close-button { background: #7e7e92 !important; } span.mg-close-button { color: #fff !important; } } `;
                t = t.split("img.mcimg {").filter((e,i)=>i !== 0).map(e=>e.substring(0, e.indexOf("}"))).join("").trim(),
                this.app.stylesheetsBlock.add("new-mcvideo-styles", `.mgline video.mcvideo {${t}}`)
            }
            playVideos() {
                let t = this.app.root.getElementsByClassName("mcvideo");
                for (let e = 0; e < t.length; e++) {
                    let i = t[e]
                      , s = ()=>{
                        if (i.classList.contains("played"))
                            this.siteBody.removeEventListener("pointerdown", s);
                        else {
                            let o = i.play();
                            typeof o < "u" && o.catch(c=>{
                                this.app.log("_playVideosHandler. Error: ", "error", c),
                                i.controls = !0
                            }
                            )
                        }
                    }
                    ;
                    this.siteBody.addEventListener("pointerdown", s, !1)
                }
            }
        }
    }
    );
    var oa = {};
    at(oa, {
        OriginTrialsBlock: ()=>ci
    });
    var ci, ra = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        ci = class extends W {
            constructor(t) {
                super(t),
                this.name = "OriginTrialsBlock",
                this.addHook("beforeInitHooks", this.initOriginTrials)
            }
            initOriginTrials() {
                JSON.parse('[{"name":"X-Requested-With Trial. servicer.adskeeper.co.uk","token":"A5QbzCjCRrcUW0oqh3vru+n83j\\/Zsj1PZV5\\/+tOWwBJ7Moww++ua4CipW+orGX66H2vuc\\/BnoTSPMgtgzpPraQ8AAACGeyJvcmlnaW4iOiJodHRwczovL3NlcnZpY2VyLmFkc2tlZXBlci5jby51azo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","conditions":["webview"]},{"name":"X-Requested-With Trial. c.adskeeper.co.uk","token":"A0s1a7dM0Unnsjgvv+gpNYxk17J\\/KLFAMF8DmgJhsIc0HflFItDhbNDtDbV75hhsX80wC3KYDbSyxE3gAExqtQYAAAB\\/eyJvcmlnaW4iOiJodHRwczovL2MuYWRza2VlcGVyLmNvLnVrOjQ0MyIsImZlYXR1cmUiOiJXZWJWaWV3WFJlcXVlc3RlZFdpdGhEZXByZWNhdGlvbiIsImV4cGlyeSI6MTcxOTUzMjc5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==","conditions":["webview"]}]').forEach(e=>{
                    if (e.conditions.indexOf("webview") !== -1 && !this.app.utils.isChromeWebView())
                        return;
                    let i = this.app.context.document.createElement("META");
                    i.httpEquiv = "origin-trial",
                    i.content = e.token,
                    this.app.context.document.head.appendChild(i),
                    this.app.log("Origin Trial Token inserted: " + e.name)
                }
                )
            }
        }
    }
    );
    var pa = {};
    at(pa, {
        CalculateSessionsBlock: ()=>Dn
    });
    var In, he, Dn, ca = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Pe();
        In = function(g, t, e) {
            for (var i = arguments.length > 2, s = 0; s < t.length; s++)
                e = i ? t[s].call(g, e) : t[s].call(g);
            return i ? e : void 0
        }
        ,
        he = function(g, t, e, i, s, o) {
            function c(M) {
                if (M !== void 0 && typeof M != "function")
                    throw new TypeError("Function expected");
                return M
            }
            for (var d = i.kind, u = d === "getter" ? "get" : d === "setter" ? "set" : "value", f = !t && g ? i.static ? g : g.prototype : null, I = t || (f ? Object.getOwnPropertyDescriptor(f, i.name) : {}), T, E = !1, y = e.length - 1; y >= 0; y--) {
                var C = {};
                for (var b in i)
                    C[b] = b === "access" ? {} : i[b];
                for (var b in i.access)
                    C.access[b] = i.access[b];
                C.addInitializer = function(M) {
                    if (E)
                        throw new TypeError("Cannot add initializers after decoration has completed");
                    o.push(c(M || null))
                }
                ;
                var D = (0,
                e[y])(d === "accessor" ? {
                    get: I.get,
                    set: I.set
                } : I[u], C);
                if (d === "accessor") {
                    if (D === void 0)
                        continue;
                    if (D === null || typeof D != "object")
                        throw new TypeError("Object expected");
                    (T = c(D.get)) && (I.get = T),
                    (T = c(D.set)) && (I.set = T),
                    (T = c(D.init)) && s.unshift(T)
                } else
                    (T = c(D)) && (d === "field" ? s.unshift(T) : I[u] = T)
            }
            f && Object.defineProperty(f, i.name, I),
            E = !0
        }
        ,
        Dn = (()=>{
            var g;
            let t = W, e = [], i, s, o, c;
            return g = class extends t {
                constructor(u) {
                    super(u),
                    this.topWindow = (In(this, e),
                    void 0),
                    this.expirationLimit = 30 * 24 * 60 * 60 * 1e3,
                    this.weekLimit = 7 * 24 * 60 * 60 * 1e3,
                    this.sessionLimit = 30 * 60 * 1e3,
                    this.storageKeys = {
                        sessionsList: "_mgSessionsTimeList",
                        sessionsNumber: "_mgSessionsNumber",
                        sessionId: "_mgSessionId",
                        sessionPage: "_mgSessionPagesNumber",
                        sessionTeasersData: "_mgSessionTeasersData"
                    },
                    this.pagesKey = "_mgSessionPages",
                    this.name = "CalculateSessionsBlock",
                    this.init()
                }
                init() {
                    this.topWindow = this.app.getMostTopWindow();
                    try {
                        this.topWindow.localStorage && (this.app.countSessionClicksHandler = this.onClick.bind(this),
                        this.app.addClickHandler(this.app.clickHandlerList.countSessionClicks.handler, this.app.clickHandlerList.countSessionClicks.priority),
                        this.addHook("beforeInjectScriptHooks", this.calculateSessions, 1e3, !0),
                        this.addHook("beforeInjectScriptHooks", this.sendSessions, 1e3, !0),
                        this.addHook("beforeLoadNewsHooks", this.savedSessions, 1e3, !0),
                        this.addHook("afterPrepareCappingDataHooks", this.setTeaserImps, 1e3, !0))
                    } catch (u) {
                        this.app.log(`${this.name} no localStorage found`, "error", u)
                    }
                }
                calculateSessions() {
                    let u = this.topWindow.location.pathname;
                    this.app.isAmp() && this.app.context.context.location && (u = this.app.context.context.location);
                    let f = this.getCurrentTime();
                    if (this.sessionPage = Number(At.getItem(this.storageKeys.sessionPage)) || Number(Ht.getItem(this.storageKeys.sessionPage)) || 0,
                    this.sessionsList = (JSON.parse(At.getItem(this.storageKeys.sessionsList) || "false") || JSON.parse(Ht.getItem(this.storageKeys.sessionsList) || "false") || []).filter(I=>f - I < this.expirationLimit),
                    At.setItem(this.pagesKey, At.getItem(this.pagesKey) || "[]"),
                    At.getItem(this.pagesKey).indexOf(u) === -1) {
                        let I = JSON.parse(At.getItem(this.pagesKey));
                        I.push(u),
                        At.setItem(this.pagesKey, JSON.stringify(I)),
                        this.sessionPage = this.sessionPage + 1
                    }
                    if (this.sessionsList.length) {
                        let I = this.sessionsList[this.sessionsList.length - 1];
                        f - I < this.sessionLimit ? (this.sessionsList[this.sessionsList.length - 1] = f,
                        this.sessionId = At.getItem(this.storageKeys.sessionId) || Ht.getItem(this.storageKeys.sessionId) || this.generateSessionId()) : (this.sessionId = this.generateSessionId(),
                        this.sessionsList = [...this.sessionsList, f],
                        At.setItem(this.pagesKey, JSON.stringify([u])),
                        this.sessionPage = 1)
                    } else
                        this.sessionId = this.generateSessionId(),
                        this.sessionsList = [f],
                        At.setItem(this.pagesKey, JSON.stringify([u])),
                        this.sessionPage = 1;
                    this.sessionsByWeek = this.sessionsList.filter(I=>f - I < this.weekLimit),
                    At.setItem(this.storageKeys.sessionId, this.sessionId),
                    At.setItem(this.storageKeys.sessionPage, this.sessionPage.toString()),
                    At.setItem(this.storageKeys.sessionsList, JSON.stringify(this.sessionsList))
                }
                sendSessions() {
                    if (this.app.requestParams.sessionId = this.sessionId,
                    this.app.requestParams.sessionPage = this.sessionPage,
                    this.app.requestParams.sessionNumberWeek = this.sessionsByWeek.length,
                    this.sessionsList.length === 1)
                        this.app.requestParams.sessionNumber = 1;
                    else if (this.sessionsList.length >= 2) {
                        let u = this.sessionsList[this.sessionsList.length - 1]
                          , f = this.sessionsList[this.sessionsList.length - 2]
                          , I = Math.floor((u - f) / 6e4);
                        this.app.requestParams.sessionNumber = this.sessionsList.length,
                        this.app.requestParams.timeBetweenSessions = I
                    }
                    if (this.sessionTeasersData = JSON.parse(Ht.getItem(this.storageKeys.sessionTeasersData) || "[]"),
                    this.sessionTeasersData.length) {
                        let u = this.sessionTeasersData.map(f=>`${f.catId},${f.imps || 0}${f.clicks ? "," + f.clicks : ""}`);
                        this.app.requestParams.sessionCats = u.join(";")
                    }
                }
                savedSessions() {
                    this.app.servicerData.consent ? (Ht.setItem(this.storageKeys.sessionId, this.sessionId),
                    Ht.setItem(this.storageKeys.sessionPage, this.sessionPage.toString()),
                    Ht.setItem(this.storageKeys.sessionsList, JSON.stringify(this.sessionsList))) : Object.keys(this.storageKeys).forEach(u=>{
                        Ht.removeItem(this.storageKeys[u])
                    }
                    )
                }
                generateSessionId() {
                    return Ht.removeItem(this.storageKeys.sessionTeasersData),
                    Math.round(Date.now() / 1e3).toString(16) + "-" + ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)
                }
                getCurrentTime() {
                    return new Date().getTime()
                }
                setTeaserImps(u) {
                    this.updateTeaserData(u, "imps")
                }
                onClick(u, f) {
                    let I = u.getAttribute("data-hash");
                    return this.updateTeaserData(I, "clicks"),
                    !0
                }
                updateTeaserData(u, f) {
                    if (this.app.servicerData.consent && this.app.teaserData[u].catId) {
                        let I = this.app.teaserData[u].catId;
                        this.sessionTeasersData = JSON.parse(Ht.getItem(this.storageKeys.sessionTeasersData) || "[]"),
                        this.sessionTeasersData.some(T=>T.catId === I) ? this.sessionTeasersData = this.sessionTeasersData.map(T=>T.catId === I ? {
                            ...T,
                            [f]: (T[f] || 0) + 1
                        } : T) : this.sessionTeasersData.push({
                            catId: I,
                            [f]: 1
                        }),
                        Ht.setItem(this.storageKeys.sessionTeasersData, JSON.stringify(this.sessionTeasersData))
                    }
                }
                getSessionId() {
                    return this.sessionId || null
                }
            }
            ,
            (()=>{
                let d = typeof Symbol == "function" && Symbol.metadata ? Object.create(t[Symbol.metadata] ?? null) : void 0;
                i = [te],
                s = [te],
                o = [te],
                c = [te],
                he(g, null, i, {
                    kind: "method",
                    name: "calculateSessions",
                    static: !1,
                    private: !1,
                    access: {
                        has: u=>"calculateSessions"in u,
                        get: u=>u.calculateSessions
                    },
                    metadata: d
                }, null, e),
                he(g, null, s, {
                    kind: "method",
                    name: "sendSessions",
                    static: !1,
                    private: !1,
                    access: {
                        has: u=>"sendSessions"in u,
                        get: u=>u.sendSessions
                    },
                    metadata: d
                }, null, e),
                he(g, null, o, {
                    kind: "method",
                    name: "savedSessions",
                    static: !1,
                    private: !1,
                    access: {
                        has: u=>"savedSessions"in u,
                        get: u=>u.savedSessions
                    },
                    metadata: d
                }, null, e),
                he(g, null, c, {
                    kind: "method",
                    name: "updateTeaserData",
                    static: !1,
                    private: !1,
                    access: {
                        has: u=>"updateTeaserData"in u,
                        get: u=>u.updateTeaserData
                    },
                    metadata: d
                }, null, e),
                d && Object.defineProperty(g, Symbol.metadata, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: d
                })
            }
            )(),
            g
        }
        )()
    }
    );
    var la = {};
    at(la, {
        CalculateViewrateBlock: ()=>li
    });
    var li, ha = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        li = class extends W {
            constructor(t) {
                super(t),
                this.weekLimit = 7 * 24 * 60 * 60 * 1e3,
                this.storageKey = "_mgViewrate1419550",
                this.name = "CalculateViewrateBlock",
                this.app.isAmp() || this.init()
            }
            init() {
                this.topWindow = this.app.getMostTopWindow(),
                this.currentViewrateId = this.app.utils.generateHash();
                let t = new Date().getTime();
                try {
                    if (this.topWindow.localStorage) {
                        this.viewrateDataList = (this.topWindow[this.storageKey] || JSON.parse(this.topWindow.localStorage[this.storageKey] || "false") || []).filter(i=>t - i.st < this.weekLimit);
                        let e = {
                            id: this.currentViewrateId,
                            st: t,
                            v: 0,
                            r: 0
                        };
                        this.viewrateDataList.push(e),
                        this.addHook("afterSendCappingHooks", this.updateViewrates),
                        this.addHook("beforeInjectScriptHooks", this.sendViewrates),
                        this.addHook("afterLoadNewsHooks", this.savedViewrates),
                        this.topWindow.addEventListener("beforeunload", ()=>{
                            this.clearEmptyViewrates()
                        }
                        )
                    }
                } catch (e) {
                    this.app.log(`${this.name} no localStorage found`, "error", e)
                }
            }
            updateViewrates() {
                let {views: t, renders: e} = this.app.getViewrateParams();
                this.viewrateDataList = this.viewrateDataList.map(i=>i.id === this.currentViewrateId ? {
                    ...i,
                    v: t,
                    r: e
                } : i),
                this.savedViewrates()
            }
            sendViewrates() {
                let {v: t, r: e} = this.viewrateDataList.reduce((i,s)=>(i.v = s.v + i.v,
                i.r = s.r + i.r,
                i), {
                    v: 0,
                    r: 0
                });
                t > 0 && e > 0 && (this.app.requestParams.viewrate_1w = `${t},${e}`)
            }
            savedViewrates() {
                this.topWindow[this.storageKey] = this.viewrateDataList,
                this.app.servicerData.consent ? this.topWindow.localStorage[this.storageKey] = JSON.stringify(this.viewrateDataList) : this.topWindow.localStorage.removeItem(this.storageKey)
            }
            clearEmptyViewrates() {
                if (this.topWindow.localStorage[this.storageKey]) {
                    let t = JSON.parse(this.topWindow.localStorage[this.storageKey]).filter(e=>e.v > 0 && e.r > 0);
                    this.topWindow.localStorage[this.storageKey] = JSON.stringify(t)
                }
            }
        }
    }
    );
    var da = {};
    at(da, {
        RenderClassicBlock: ()=>hi
    });
    var hi, xa = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        hi = class extends W {
            constructor(t) {
                super(t),
                this.name = "RenderClassicBlock",
                this.expressionMap = {
                    "||": e=>{
                        for (let i in e)
                            if (this.expressionParser(e[i]))
                                return !0;
                        return !1
                    }
                    ,
                    "&&": e=>{
                        for (let i in e)
                            if (!this.expressionParser(e[i]))
                                return !1;
                        return !0
                    }
                    ,
                    "==": e=>this.expressionParser(e[0]) == this.expressionParser(e[1]),
                    "!=": e=>this.expressionParser(e[0]) != this.expressionParser(e[1]),
                    "+": e=>this.expressionParser(e[0]) + this.expressionParser(e[1]),
                    "-": e=>this.expressionParser(e[0]) - this.expressionParser(e[1]),
                    "*": e=>this.expressionParser(e[0]) * this.expressionParser(e[1]),
                    "/": e=>this.expressionParser(e[0]) / this.expressionParser(e[1]),
                    "%": e=>this.expressionParser(e[0]) % this.expressionParser(e[1])
                }
            }
            setRawTemplate(t) {
                this.templateText = t
            }
            getHtml(t) {
                if (t.length === 0) {
                    this.app.isAmp() && this.app.context.context.noContentAvailable();
                    return
                }
                let e = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(this.templateText);
                if (!e)
                    return;
                let i = typeof e[1] < "u" ? e[1] : "";
                for (let s = 0; s < t.length; s++) {
                    let o = this.renderItem(t[s], e[2]);
                    i += typeof o < "u" ? o : ""
                }
                return i += typeof e[3] < "u" ? e[3] : "",
                i
            }
            expressionParser(t) {
                for (let e in this.expressionMap)
                    if (t.indexOf(e) !== -1)
                        return this.expressionMap[e](t.split(e));
                return (t || "").replace(/^([\'|\s]+)|([\'|\s]+)$/g, "")
            }
            renderItem(t, e) {
                let i = [];
                i.push("teaser-" + t.id);
                let s = "";
                if (t.type == nt.Banner) {
                    let u = t
                      , f = "100%";
                    u.width != 0 ? f = u.width + "px" : typeof this.app.preRenderTeaserSizes[u.iteration - 1] < "u" && (f = this.app.preRenderTeaserSizes[u.iteration - 1].width + "px");
                    let I = "100%";
                    u.height != 0 ? I = u.height + "px" : typeof this.app.preRenderTeaserSizes[u.iteration - 1] < "u" && (I = this.app.preRenderTeaserSizes[u.iteration - 1].height + "px");
                    let T = "width: " + f + "; height: " + I + "; border: 0px; margin: auto; overflow: hidden; position: relative;z-index: 1;";
                    s = '<iframe id="' + u.id + '" scrolling="no" style="' + T + '"></iframe>',
                    i.push("mgline-banner"),
                    this.app.stylesheetsBlock.add("mgline-banner", `.mgline-banner {  display: inline-flex;
  background: initial;
  }`)
                }
                t.type == nt.Teaser && t.link.match(/[\?|&]u=/) != null && i.push("dsp"),
                t.coopType != null && (i.push("type-" + t.coopType),
                t.coopType == pt.Video && i.push("vrline"),
                t.type === nt.Teaser && t.extd == 1 && t.coopType === pt.Wages && i.push("extd")),
                t.type === nt.Gpt && (i.push("mgline-gpt"),
                this.app.stylesheetsBlock.add(`style-${t.id}`, `.mgbox .teaser-${t.id} {
        width: ${t.width ? t.width + "px" : "100%"};
        height: ${t.height ? t.height + "px" : "auto"};
      }`));
                let o = u=>u && u.indexOf("//") === 0 ? this.app.webProtocol + u : u
                  , c = t.coopType != pt.Video ? this.app.hrefAttr + '="' + this.app.prepareNiceHref(t.hash) + '" data-hash="' + t.hash + '"' : "";
                t.hash == "" && (c = `onclick="return false" ${this.app.hrefAttr}="#"`);
                let d = [[/\{\*.*?\*\}/, ""], [/\{\$href\}/g, c], [/\{\$pmc_item\}/, this.app.id], [/\{\$hash\}/g, t.hash], [/\{\$target\}/g, t.coopType == pt.InternalExchange || typeof this.app.servicerData.ats < "u" && this.app.servicerData.ats ? 'target="_top"' : 'target="_blank"'], [/(class\=\".*?)(mgline)([^\"]*\")/, "$1$2 " + i.join(" ") + '$3 data-i="' + (t.hash || t.id) + '"'], [/(class\=\'.*?)(mgline)([^\']*\')/, "$1$2 " + i.join(" ") + '$3 data-i="' + (t.hash || t.id) + '"'], [/\{\$source\}/g, t.type == nt.Teaser ? t.source : ""], [/\{\$src\}/g, 'width="200" height="200" data-i="' + (nt.Teaser ? t.id : "") + '" data-src="' + o(nt.Teaser ? t.img : "") + '" nopin="nopin"' + ((nt.Teaser ? t.extd : 0) == 1 ? "" : " crossOrigin")], [/\{\$title\}/g, this.app.htmlEntities(nt.Teaser ? t.title : "")], [/\{\$desc\}/g, this.app.htmlEntities(nt.Teaser ? t.desc : "")], [/\{\$iteration\}/g, t.iteration], [/\$iteration/g, t.iteration], [/this\.iteration/g, t.iteration], [/\{\$price\}/g, nt.Teaser ? t.price : ""], [/\{\$priceold\}/g, nt.Teaser ? t.priceold : ""], [/\{\$discount\}/g, nt.Teaser ? t.discount : ""], [/\{if \$price\}/g, "{if '' != " + (nt.Teaser && t.price ? t.price : "''") + "}"], [/\{if !\$price\}/g, "{if '' == " + (nt.Teaser && t.price ? t.price : "''") + "}"], [/\{if \$priceold\}/g, "{if '' != " + (nt.Teaser && t.priceold ? t.priceold : "''") + "}"], [/\{if \$price != " "\}/g, "{if " + (nt.Teaser && t.price ? t.price : "''").trim().length + " != 0}"], [/\{if \$price == " "\}/g, "{if " + (nt.Teaser && t.price ? t.price : "''").trim().length + " == 0}"], [/\$priceold/g, nt.Teaser ? t.priceold : ""], [/\$price/g, nt.Teaser ? t.price : ""], [/\{\$banner\}/g, s], [/\{if \$teaser\}/g, "{if '' == '" + s + "'}"], [/\{if \$banner\}/g, "{if '' != '" + s + "'}"], [/\{\$category\}/g, nt.Teaser ? t.category : ""], [/\{\$cta\}/g, nt.Teaser ? t.cta : ""], [/\{if \$cta\}/g, "{if '" + (nt.Teaser && t.cta ? t.cta : "''") + "' != ''}"], [/\{if !\$cta\}/g, "{if '" + (nt.Teaser && t.cta ? t.cta : "''") + "' != ''}"], [/\{\$disclaimer\}/g, nt.Teaser ? t.cdt : ""], [/\{if \$disclaimer\}/g, "{if '" + (nt.Teaser && t.cdt ? t.cdt : "''") + "' != ''}"], [/\{if !\$disclaimer\}/g, "{if '" + (nt.Teaser && t.cdt ? t.cdt : "''") + "' != ''}"], [/\{\$sourceName\}/g, this.app.sourceName]];
                for (let u = 0; u < d.length; u++)
                    e = e.replace(d[u][0], d[u][1]);
                for (e = e.replace(/\r?\n/g, ""); ; ) {
                    let u = e
                      , f = /\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g;
                    if (e = e.replace(f, (I,T,E)=>this.expressionParser(T) ? E : ""),
                    u == e)
                        break
                }
                if (t.type == nt.Teaser && (t.mediaType == "video" || t.img.match(/\.mp4/))) {
                    let f = /<img class="mcimg" width="(\d+)" height="(\d+)"/.exec(e)
                      , I = f ? f[1] + "px;" : "100%;"
                      , T = f ? f[2] + "px;" : "100%;";
                    e = e.replace(/<img( class="mcimg[^>]+)/, '<video autoplay loop muted webkit-playsinline playsinline class="mcvideo" $1'),
                    this.app.stylesheetsBlock.add("video", `video.mcvideo { border-style: solid;
  border-color: #ffffff;
  border-width: 0;
  width: 100%;
  height: auto;
  max-width: ` + I + `
  max-height: ` + T + `
  box-sizing: border-box;
  display: block; }`)
                }
                if (t.type == nt.Teaser && t.extd === 1 && this.app.preRenderImageSizes[t.iteration - 1]) {
                    let u = this.app.preRenderImageSizes[t.iteration - 1].width
                      , f = this.app.preRenderImageSizes[t.iteration - 1].height;
                    if (f == 0 || u == 0)
                        this.app.debugBlock.sendData("Wrong external image size! Using fallback"),
                        e = e.replace(/<img( class="mcimg")/, '<img class="mcimg mg-wrong-image"');
                    else {
                        let I = {
                            width: u + "px !important",
                            height: f + "px !important",
                            "object-fit": "cover",
                            "-o-object-fit": "cover",
                            "object-position": "top",
                            "-o-object-position": "top"
                        }
                          , T = "";
                        Object.keys(I).forEach(E=>{
                            T += E + ":" + I[E] + ";"
                        }
                        ),
                        e = e.replace(/<img( class="mcimg")/, '<img class="mcimg" style="' + T + '"')
                    }
                }
                return e
            }
        }
    }
    );
    var ua = {};
    at(ua, {
        ResponsiveBlock: ()=>di
    });
    var di, fa = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        di = class extends W {
            constructor(t) {
                super(t),
                this.addHook("afterLoadNewsHooks", this.responsiveInit)
            }
            responsiveInit() {
                this.fixPrices(),
                setTimeout(()=>{
                    this.fixFlexbox()
                }
                , 100)
            }
            fixElementPrice(t) {
                let e = t.getElementsByClassName("mcpriceouter");
                for (let i = 0; i < e.length; i++) {
                    let s = e[i].parentNode
                      , o = s.getElementsByClassName("mcpriceold");
                    if (e[i].getBoundingClientRect().bottom >= s.getBoundingClientRect().bottom)
                        for (let c = 0; c < o.length; c++)
                            o[c].style.display = "none";
                    else
                        for (let c = 0; c < o.length; c++)
                            o[c].style.display = "inline-block",
                            e[i].getBoundingClientRect().bottom >= s.getBoundingClientRect().bottom && (o[c].style.display = "none")
                }
            }
            fixPrices() {
                let t = this.app.root.getElementsByClassName("mgline");
                for (let e = 0; e < t.length; e++)
                    (i=>{
                        i.getElementsByClassName("mcpriceouter").length && this.fixElementPrice(i)
                    }
                    )(t[e])
            }
            fixFlexbox() {
                let e = (this.app.context.document.body || this.app.context.document.documentElement).style;
                if (e.webkitFlexWrap == "" || e.msFlexWrap == "" || e.flexWrap == "")
                    return !0;
                let i = this.app.root.getElementsByClassName("mgline");
                for (let s = 0; s < i.length; s++)
                    i[s].style.height = "auto";
                setTimeout(()=>{
                    let s = 0
                      , o = 0;
                    for (let c = 0; c < i.length; c++) {
                        let d = i[c].getBoundingClientRect();
                        o = d.bottom - d.top,
                        o > s && (s = o)
                    }
                    if (o != 0)
                        for (let c = 0; c < i.length; c++)
                            i[c].style.height = s + "px";
                    this.fixImages()
                }
                , 0)
            }
            fixImages() {
                setTimeout(()=>{
                    let t = !1
                      , e = this.app.root.getElementsByClassName("mcimg");
                    for (let i = 0; i < e.length; i++)
                        if (e[i].tagName == "DIV") {
                            let s = e[i].getBoundingClientRect();
                            s.bottom - s.top <= 25 && (t = !0,
                            e[i].style.display = "none",
                            function(o) {
                                setTimeout(function() {
                                    o.style.display = "block"
                                }, 0)
                            }(e[i]))
                        }
                    t && this.fixFlexbox()
                }
                , 200)
            }
        }
    }
    );
    var Vt, ma = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        Vt = function(g, t) {
            var e = {}
              , i = e.lib = {}
              , s = function() {}
              , o = i.Base = {
                extend: function(y) {
                    s.prototype = this;
                    var C = new s;
                    return y && C.mixIn(y),
                    C.hasOwnProperty("init") || (C.init = function() {
                        C.$super.init.apply(this, arguments)
                    }
                    ),
                    C.init.prototype = C,
                    C.$super = this,
                    C
                },
                create: function() {
                    var y = this.extend();
                    return y.init.apply(y, arguments),
                    y
                },
                init: function() {},
                mixIn: function(y) {
                    for (var C in y)
                        y.hasOwnProperty(C) && (this[C] = y[C]);
                    y.hasOwnProperty("toString") && (this.toString = y.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
              , c = i.WordArray = o.extend({
                init: function(y, C) {
                    y = this.words = y || [],
                    this.sigBytes = C != t ? C : 4 * y.length
                },
                toString: function(y) {
                    return (y || u).stringify(this)
                },
                concat: function(y) {
                    var C = this.words
                      , b = y.words
                      , D = this.sigBytes;
                    if (y = y.sigBytes,
                    this.clamp(),
                    D % 4)
                        for (var M = 0; M < y; M++)
                            C[D + M >>> 2] |= (b[M >>> 2] >>> 24 - 8 * (M % 4) & 255) << 24 - 8 * ((D + M) % 4);
                    else if (65535 < b.length)
                        for (M = 0; M < y; M += 4)
                            C[D + M >>> 2] = b[M >>> 2];
                    else
                        C.push.apply(C, b);
                    return this.sigBytes += y,
                    this
                },
                clamp: function() {
                    var y = this.words
                      , C = this.sigBytes;
                    y[C >>> 2] &= 4294967295 << 32 - 8 * (C % 4),
                    y.length = g.ceil(C / 4)
                },
                clone: function() {
                    var y = o.clone.call(this);
                    return y.words = this.words.slice(0),
                    y
                },
                random: function(y) {
                    for (var C = [], b = 0; b < y; b += 4)
                        C.push(4294967296 * g.random() | 0);
                    return new c.init(C,y)
                }
            })
              , d = e.enc = {}
              , u = d.Hex = {
                stringify: function(y) {
                    var C = y.words;
                    y = y.sigBytes;
                    for (var b = [], D = 0; D < y; D++) {
                        var M = C[D >>> 2] >>> 24 - 8 * (D % 4) & 255;
                        b.push((M >>> 4).toString(16)),
                        b.push((M & 15).toString(16))
                    }
                    return b.join("")
                },
                parse: function(y) {
                    for (var C = y.length, b = [], D = 0; D < C; D += 2)
                        b[D >>> 3] |= parseInt(y.substr(D, 2), 16) << 24 - 4 * (D % 8);
                    return new c.init(b,C / 2)
                }
            }
              , f = d.Latin1 = {
                stringify: function(y) {
                    var C = y.words;
                    y = y.sigBytes;
                    for (var b = [], D = 0; D < y; D++)
                        b.push(String.fromCharCode(C[D >>> 2] >>> 24 - 8 * (D % 4) & 255));
                    return b.join("")
                },
                parse: function(y) {
                    for (var C = y.length, b = [], D = 0; D < C; D++)
                        b[D >>> 2] |= (y.charCodeAt(D) & 255) << 24 - 8 * (D % 4);
                    return new c.init(b,C)
                }
            }
              , I = d.Utf8 = {
                stringify: function(y) {
                    try {
                        return decodeURIComponent(escape(f.stringify(y)))
                    } catch {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function(y) {
                    return f.parse(unescape(encodeURIComponent(y)))
                }
            }
              , T = i.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new c.init,
                    this._nDataBytes = 0
                },
                _append: function(y) {
                    typeof y == "string" && (y = I.parse(y)),
                    this._data.concat(y),
                    this._nDataBytes += y.sigBytes
                },
                _process: function(y) {
                    var C = this._data
                      , b = C.words
                      , D = C.sigBytes
                      , M = this.blockSize
                      , Y = D / (4 * M)
                      , Y = y ? g.ceil(Y) : g.max((Y | 0) - this._minBufferSize, 0);
                    if (y = Y * M,
                    D = g.min(4 * y, D),
                    y) {
                        for (var ct = 0; ct < y; ct += M)
                            this._doProcessBlock(b, ct);
                        ct = b.splice(0, y),
                        C.sigBytes -= D
                    }
                    return new c.init(ct,D)
                },
                clone: function() {
                    var y = o.clone.call(this);
                    return y._data = this._data.clone(),
                    y
                },
                _minBufferSize: 0
            });
            i.Hasher = T.extend({
                cfg: o.extend(),
                init: function(y) {
                    this.cfg = this.cfg.extend(y),
                    this.reset()
                },
                reset: function() {
                    T.reset.call(this),
                    this._doReset()
                },
                update: function(y) {
                    return this._append(y),
                    this._process(),
                    this
                },
                finalize: function(y) {
                    return y && this._append(y),
                    this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(y) {
                    return function(C, b) {
                        return new y.init(b).finalize(C)
                    }
                },
                _createHmacHelper: function(y) {
                    return function(C, b) {
                        return new E.HMAC.init(y,b).finalize(C)
                    }
                }
            });
            var E = e.algo = {};
            return e
        }(Math);
        (function() {
            var g = Vt
              , t = g.lib.WordArray;
            g.enc.Base64 = {
                stringify: function(e) {
                    var i = e.words
                      , s = e.sigBytes
                      , o = this._map;
                    e.clamp(),
                    e = [];
                    for (var c = 0; c < s; c += 3)
                        for (var d = (i[c >>> 2] >>> 24 - 8 * (c % 4) & 255) << 16 | (i[c + 1 >>> 2] >>> 24 - 8 * ((c + 1) % 4) & 255) << 8 | i[c + 2 >>> 2] >>> 24 - 8 * ((c + 2) % 4) & 255, u = 0; 4 > u && c + .75 * u < s; u++)
                            e.push(o.charAt(d >>> 6 * (3 - u) & 63));
                    if (i = o.charAt(64))
                        for (; e.length % 4; )
                            e.push(i);
                    return e.join("")
                },
                parse: function(e) {
                    var i = e.length
                      , s = this._map
                      , o = s.charAt(64);
                    o && (o = e.indexOf(o),
                    o != -1 && (i = o));
                    for (var o = [], c = 0, d = 0; d < i; d++)
                        if (d % 4) {
                            var u = s.indexOf(e.charAt(d - 1)) << 2 * (d % 4)
                              , f = s.indexOf(e.charAt(d)) >>> 6 - 2 * (d % 4);
                            o[c >>> 2] |= (u | f) << 24 - 8 * (c % 4),
                            c++
                        }
                    return t.create(o, c)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }
        )();
        (function(g) {
            function t(T, E, y, C, b, D, M) {
                return T = T + (E & y | ~E & C) + b + M,
                (T << D | T >>> 32 - D) + E
            }
            function e(T, E, y, C, b, D, M) {
                return T = T + (E & C | y & ~C) + b + M,
                (T << D | T >>> 32 - D) + E
            }
            function i(T, E, y, C, b, D, M) {
                return T = T + (E ^ y ^ C) + b + M,
                (T << D | T >>> 32 - D) + E
            }
            function s(T, E, y, C, b, D, M) {
                return T = T + (y ^ (E | ~C)) + b + M,
                (T << D | T >>> 32 - D) + E
            }
            for (var o = Vt, u = o.lib, c = u.WordArray, d = u.Hasher, u = o.algo, f = [], I = 0; 64 > I; I++)
                f[I] = 4294967296 * g.abs(g.sin(I + 1)) | 0;
            u = u.MD5 = d.extend({
                _doReset: function() {
                    this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function(T, E) {
                    for (var y = 0; 16 > y; y++) {
                        var C = E + y
                          , b = T[C];
                        T[C] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360
                    }
                    var y = this._hash.words
                      , C = T[E + 0]
                      , b = T[E + 1]
                      , D = T[E + 2]
                      , M = T[E + 3]
                      , Y = T[E + 4]
                      , ct = T[E + 5]
                      , lt = T[E + 6]
                      , It = T[E + 7]
                      , Wt = T[E + 8]
                      , ht = T[E + 9]
                      , ot = T[E + 10]
                      , dt = T[E + 11]
                      , Tt = T[E + 12]
                      , xt = T[E + 13]
                      , rt = T[E + 14]
                      , bt = T[E + 15]
                      , H = y[0]
                      , F = y[1]
                      , O = y[2]
                      , N = y[3]
                      , H = t(H, F, O, N, C, 7, f[0])
                      , N = t(N, H, F, O, b, 12, f[1])
                      , O = t(O, N, H, F, D, 17, f[2])
                      , F = t(F, O, N, H, M, 22, f[3])
                      , H = t(H, F, O, N, Y, 7, f[4])
                      , N = t(N, H, F, O, ct, 12, f[5])
                      , O = t(O, N, H, F, lt, 17, f[6])
                      , F = t(F, O, N, H, It, 22, f[7])
                      , H = t(H, F, O, N, Wt, 7, f[8])
                      , N = t(N, H, F, O, ht, 12, f[9])
                      , O = t(O, N, H, F, ot, 17, f[10])
                      , F = t(F, O, N, H, dt, 22, f[11])
                      , H = t(H, F, O, N, Tt, 7, f[12])
                      , N = t(N, H, F, O, xt, 12, f[13])
                      , O = t(O, N, H, F, rt, 17, f[14])
                      , F = t(F, O, N, H, bt, 22, f[15])
                      , H = e(H, F, O, N, b, 5, f[16])
                      , N = e(N, H, F, O, lt, 9, f[17])
                      , O = e(O, N, H, F, dt, 14, f[18])
                      , F = e(F, O, N, H, C, 20, f[19])
                      , H = e(H, F, O, N, ct, 5, f[20])
                      , N = e(N, H, F, O, ot, 9, f[21])
                      , O = e(O, N, H, F, bt, 14, f[22])
                      , F = e(F, O, N, H, Y, 20, f[23])
                      , H = e(H, F, O, N, ht, 5, f[24])
                      , N = e(N, H, F, O, rt, 9, f[25])
                      , O = e(O, N, H, F, M, 14, f[26])
                      , F = e(F, O, N, H, Wt, 20, f[27])
                      , H = e(H, F, O, N, xt, 5, f[28])
                      , N = e(N, H, F, O, D, 9, f[29])
                      , O = e(O, N, H, F, It, 14, f[30])
                      , F = e(F, O, N, H, Tt, 20, f[31])
                      , H = i(H, F, O, N, ct, 4, f[32])
                      , N = i(N, H, F, O, Wt, 11, f[33])
                      , O = i(O, N, H, F, dt, 16, f[34])
                      , F = i(F, O, N, H, rt, 23, f[35])
                      , H = i(H, F, O, N, b, 4, f[36])
                      , N = i(N, H, F, O, Y, 11, f[37])
                      , O = i(O, N, H, F, It, 16, f[38])
                      , F = i(F, O, N, H, ot, 23, f[39])
                      , H = i(H, F, O, N, xt, 4, f[40])
                      , N = i(N, H, F, O, C, 11, f[41])
                      , O = i(O, N, H, F, M, 16, f[42])
                      , F = i(F, O, N, H, lt, 23, f[43])
                      , H = i(H, F, O, N, ht, 4, f[44])
                      , N = i(N, H, F, O, Tt, 11, f[45])
                      , O = i(O, N, H, F, bt, 16, f[46])
                      , F = i(F, O, N, H, D, 23, f[47])
                      , H = s(H, F, O, N, C, 6, f[48])
                      , N = s(N, H, F, O, It, 10, f[49])
                      , O = s(O, N, H, F, rt, 15, f[50])
                      , F = s(F, O, N, H, ct, 21, f[51])
                      , H = s(H, F, O, N, Tt, 6, f[52])
                      , N = s(N, H, F, O, M, 10, f[53])
                      , O = s(O, N, H, F, ot, 15, f[54])
                      , F = s(F, O, N, H, b, 21, f[55])
                      , H = s(H, F, O, N, Wt, 6, f[56])
                      , N = s(N, H, F, O, bt, 10, f[57])
                      , O = s(O, N, H, F, lt, 15, f[58])
                      , F = s(F, O, N, H, xt, 21, f[59])
                      , H = s(H, F, O, N, Y, 6, f[60])
                      , N = s(N, H, F, O, dt, 10, f[61])
                      , O = s(O, N, H, F, D, 15, f[62])
                      , F = s(F, O, N, H, ht, 21, f[63]);
                    y[0] = y[0] + H | 0,
                    y[1] = y[1] + F | 0,
                    y[2] = y[2] + O | 0,
                    y[3] = y[3] + N | 0
                },
                _doFinalize: function() {
                    var T = this._data
                      , E = T.words
                      , y = 8 * this._nDataBytes
                      , C = 8 * T.sigBytes;
                    E[C >>> 5] |= 128 << 24 - C % 32;
                    var b = g.floor(y / 4294967296);
                    for (E[(C + 64 >>> 9 << 4) + 15] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360,
                    E[(C + 64 >>> 9 << 4) + 14] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360,
                    T.sigBytes = 4 * (E.length + 1),
                    this._process(),
                    T = this._hash,
                    E = T.words,
                    y = 0; 4 > y; y++)
                        C = E[y],
                        E[y] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
                    return T
                },
                clone: function() {
                    var T = d.clone.call(this);
                    return T._hash = this._hash.clone(),
                    T
                }
            }),
            o.MD5 = d._createHelper(u),
            o.HmacMD5 = d._createHmacHelper(u)
        }
        )(Math);
        (function() {
            var g = Vt
              , i = g.lib
              , t = i.Base
              , e = i.WordArray
              , i = g.algo
              , s = i.EvpKDF = t.extend({
                cfg: t.extend({
                    keySize: 4,
                    hasher: i.MD5,
                    iterations: 1
                }),
                init: function(o) {
                    this.cfg = this.cfg.extend(o)
                },
                compute: function(o, c) {
                    for (var T = this.cfg, d = T.hasher.create(), u = e.create(), f = u.words, I = T.keySize, T = T.iterations; f.length < I; ) {
                        E && d.update(E);
                        var E = d.update(o).finalize(c);
                        d.reset();
                        for (var y = 1; y < T; y++)
                            E = d.finalize(E),
                            d.reset();
                        u.concat(E)
                    }
                    return u.sigBytes = 4 * I,
                    u
                }
            });
            g.EvpKDF = function(o, c, d) {
                return s.create(d).compute(o, c)
            }
        }
        )();
        Vt.lib.Cipher || function(g) {
            var y = Vt
              , t = y.lib
              , e = t.Base
              , i = t.WordArray
              , s = t.BufferedBlockAlgorithm
              , o = y.enc.Base64
              , c = y.algo.EvpKDF
              , d = t.Cipher = s.extend({
                cfg: e.extend(),
                createEncryptor: function(b, D) {
                    return this.create(this._ENC_XFORM_MODE, b, D)
                },
                createDecryptor: function(b, D) {
                    return this.create(this._DEC_XFORM_MODE, b, D)
                },
                init: function(b, D, M) {
                    this.cfg = this.cfg.extend(M),
                    this._xformMode = b,
                    this._key = D,
                    this.reset()
                },
                reset: function() {
                    s.reset.call(this),
                    this._doReset()
                },
                process: function(b) {
                    return this._append(b),
                    this._process()
                },
                finalize: function(b) {
                    return b && this._append(b),
                    this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function(b) {
                    return {
                        encrypt: function(D, M, Y) {
                            return (typeof M == "string" ? C : E).encrypt(b, D, M, Y)
                        },
                        decrypt: function(D, M, Y) {
                            return (typeof M == "string" ? C : E).decrypt(b, D, M, Y)
                        }
                    }
                }
            });
            t.StreamCipher = d.extend({
                _doFinalize: function() {
                    return this._process(!0)
                },
                blockSize: 1
            });
            var T = y.mode = {}
              , u = function(b, D, M) {
                var Y = this._iv;
                Y ? this._iv = g : Y = this._prevBlock;
                for (var ct = 0; ct < M; ct++)
                    b[D + ct] ^= Y[ct]
            }
              , f = (t.BlockCipherMode = e.extend({
                createEncryptor: function(b, D) {
                    return this.Encryptor.create(b, D)
                },
                createDecryptor: function(b, D) {
                    return this.Decryptor.create(b, D)
                },
                init: function(b, D) {
                    this._cipher = b,
                    this._iv = D
                }
            })).extend();
            f.Encryptor = f.extend({
                processBlock: function(b, D) {
                    var M = this._cipher
                      , Y = M.blockSize;
                    u.call(this, b, D, Y),
                    M.encryptBlock(b, D),
                    this._prevBlock = b.slice(D, D + Y)
                }
            }),
            f.Decryptor = f.extend({
                processBlock: function(b, D) {
                    var M = this._cipher
                      , Y = M.blockSize
                      , ct = b.slice(D, D + Y);
                    M.decryptBlock(b, D),
                    u.call(this, b, D, Y),
                    this._prevBlock = ct
                }
            }),
            T = T.CBC = f,
            f = (y.pad = {}).Pkcs7 = {
                pad: function(b, D) {
                    for (var M = 4 * D, M = M - b.sigBytes % M, Y = M << 24 | M << 16 | M << 8 | M, ct = [], lt = 0; lt < M; lt += 4)
                        ct.push(Y);
                    M = i.create(ct, M),
                    b.concat(M)
                },
                unpad: function(b) {
                    b.sigBytes -= b.words[b.sigBytes - 1 >>> 2] & 255
                }
            },
            t.BlockCipher = d.extend({
                cfg: d.cfg.extend({
                    mode: T,
                    padding: f
                }),
                reset: function() {
                    d.reset.call(this);
                    var D = this.cfg
                      , b = D.iv
                      , D = D.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE)
                        var M = D.createEncryptor;
                    else
                        M = D.createDecryptor,
                        this._minBufferSize = 1;
                    this._mode = M.call(D, this, b && b.words)
                },
                _doProcessBlock: function(b, D) {
                    this._mode.processBlock(b, D)
                },
                _doFinalize: function() {
                    var b = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        b.pad(this._data, this.blockSize);
                        var D = this._process(!0)
                    } else
                        D = this._process(!0),
                        b.unpad(D);
                    return D
                },
                blockSize: 4
            });
            var I = t.CipherParams = e.extend({
                init: function(b) {
                    this.mixIn(b)
                },
                toString: function(b) {
                    return (b || this.formatter).stringify(this)
                }
            })
              , T = (y.format = {}).OpenSSL = {
                stringify: function(b) {
                    var D = b.ciphertext;
                    return b = b.salt,
                    (b ? i.create([1398893684, 1701076831]).concat(b).concat(D) : D).toString(o)
                },
                parse: function(b) {
                    b = o.parse(b);
                    var D = b.words;
                    if (D[0] == 1398893684 && D[1] == 1701076831) {
                        var M = i.create(D.slice(2, 4));
                        D.splice(0, 4),
                        b.sigBytes -= 16
                    }
                    return I.create({
                        ciphertext: b,
                        salt: M
                    })
                }
            }
              , E = t.SerializableCipher = e.extend({
                cfg: e.extend({
                    format: T
                }),
                encrypt: function(b, D, M, Y) {
                    Y = this.cfg.extend(Y);
                    var ct = b.createEncryptor(M, Y);
                    return D = ct.finalize(D),
                    ct = ct.cfg,
                    I.create({
                        ciphertext: D,
                        key: M,
                        iv: ct.iv,
                        algorithm: b,
                        mode: ct.mode,
                        padding: ct.padding,
                        blockSize: b.blockSize,
                        formatter: Y.format
                    })
                },
                decrypt: function(b, D, M, Y) {
                    return Y = this.cfg.extend(Y),
                    D = this._parse(D, Y.format),
                    b.createDecryptor(M, Y).finalize(D.ciphertext)
                },
                _parse: function(b, D) {
                    return typeof b == "string" ? D.parse(b, this) : b
                }
            })
              , y = (y.kdf = {}).OpenSSL = {
                execute: function(b, D, M, Y) {
                    return Y || (Y = i.random(8)),
                    b = c.create({
                        keySize: D + M
                    }).compute(b, Y),
                    M = i.create(b.words.slice(D), 4 * M),
                    b.sigBytes = 4 * D,
                    I.create({
                        key: b,
                        iv: M,
                        salt: Y
                    })
                }
            }
              , C = t.PasswordBasedCipher = E.extend({
                cfg: E.cfg.extend({
                    kdf: y
                }),
                encrypt: function(b, D, M, Y) {
                    return Y = this.cfg.extend(Y),
                    M = Y.kdf.execute(M, b.keySize, b.ivSize),
                    Y.iv = M.iv,
                    b = E.encrypt.call(this, b, D, M.key, Y),
                    b.mixIn(M),
                    b
                },
                decrypt: function(b, D, M, Y) {
                    return Y = this.cfg.extend(Y),
                    D = this._parse(D, Y.format),
                    M = Y.kdf.execute(M, b.keySize, b.ivSize, D.salt),
                    Y.iv = M.iv,
                    E.decrypt.call(this, b, D, M.key, Y)
                }
            })
        }();
        (function() {
            for (var g = Vt, t = g.lib.BlockCipher, Wt = g.algo, e = [], i = [], s = [], o = [], c = [], d = [], u = [], f = [], I = [], T = [], E = [], y = 0; 256 > y; y++)
                E[y] = 128 > y ? y << 1 : y << 1 ^ 283;
            for (var C = 0, b = 0, y = 0; 256 > y; y++) {
                var D = b ^ b << 1 ^ b << 2 ^ b << 3 ^ b << 4
                  , D = D >>> 8 ^ D & 255 ^ 99;
                e[C] = D,
                i[D] = C;
                var M = E[C]
                  , Y = E[M]
                  , ct = E[Y]
                  , lt = 257 * E[D] ^ 16843008 * D;
                s[C] = lt << 24 | lt >>> 8,
                o[C] = lt << 16 | lt >>> 16,
                c[C] = lt << 8 | lt >>> 24,
                d[C] = lt,
                lt = 16843009 * ct ^ 65537 * Y ^ 257 * M ^ 16843008 * C,
                u[D] = lt << 24 | lt >>> 8,
                f[D] = lt << 16 | lt >>> 16,
                I[D] = lt << 8 | lt >>> 24,
                T[D] = lt,
                C ? (C = M ^ E[E[E[ct ^ M]]],
                b ^= E[E[b]]) : C = b = 1
            }
            var It = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
              , Wt = Wt.AES = t.extend({
                _doReset: function() {
                    for (var dt = this._key, ht = dt.words, ot = dt.sigBytes / 4, dt = 4 * ((this._nRounds = ot + 6) + 1), Tt = this._keySchedule = [], xt = 0; xt < dt; xt++)
                        if (xt < ot)
                            Tt[xt] = ht[xt];
                        else {
                            var rt = Tt[xt - 1];
                            xt % ot ? 6 < ot && xt % ot == 4 && (rt = e[rt >>> 24] << 24 | e[rt >>> 16 & 255] << 16 | e[rt >>> 8 & 255] << 8 | e[rt & 255]) : (rt = rt << 8 | rt >>> 24,
                            rt = e[rt >>> 24] << 24 | e[rt >>> 16 & 255] << 16 | e[rt >>> 8 & 255] << 8 | e[rt & 255],
                            rt ^= It[xt / ot | 0] << 24),
                            Tt[xt] = Tt[xt - ot] ^ rt
                        }
                    for (ht = this._invKeySchedule = [],
                    ot = 0; ot < dt; ot++)
                        xt = dt - ot,
                        rt = ot % 4 ? Tt[xt] : Tt[xt - 4],
                        ht[ot] = 4 > ot || 4 >= xt ? rt : u[e[rt >>> 24]] ^ f[e[rt >>> 16 & 255]] ^ I[e[rt >>> 8 & 255]] ^ T[e[rt & 255]]
                },
                encryptBlock: function(ht, ot) {
                    this._doCryptBlock(ht, ot, this._keySchedule, s, o, c, d, e)
                },
                decryptBlock: function(ht, ot) {
                    var dt = ht[ot + 1];
                    ht[ot + 1] = ht[ot + 3],
                    ht[ot + 3] = dt,
                    this._doCryptBlock(ht, ot, this._invKeySchedule, u, f, I, T, i),
                    dt = ht[ot + 1],
                    ht[ot + 1] = ht[ot + 3],
                    ht[ot + 3] = dt
                },
                _doCryptBlock: function(ht, ot, dt, Tt, xt, rt, bt, H) {
                    for (var N = this._nRounds, Rt = ht[ot] ^ dt[0], Mt = ht[ot + 1] ^ dt[1], Nt = ht[ot + 2] ^ dt[2], vt = ht[ot + 3] ^ dt[3], O = 4, F = 1; F < N; F++)
                        var Ft = Tt[Rt >>> 24] ^ xt[Mt >>> 16 & 255] ^ rt[Nt >>> 8 & 255] ^ bt[vt & 255] ^ dt[O++]
                          , Ct = Tt[Mt >>> 24] ^ xt[Nt >>> 16 & 255] ^ rt[vt >>> 8 & 255] ^ bt[Rt & 255] ^ dt[O++]
                          , _t = Tt[Nt >>> 24] ^ xt[vt >>> 16 & 255] ^ rt[Rt >>> 8 & 255] ^ bt[Mt & 255] ^ dt[O++]
                          , vt = Tt[vt >>> 24] ^ xt[Rt >>> 16 & 255] ^ rt[Mt >>> 8 & 255] ^ bt[Nt & 255] ^ dt[O++]
                          , Rt = Ft
                          , Mt = Ct
                          , Nt = _t;
                    Ft = (H[Rt >>> 24] << 24 | H[Mt >>> 16 & 255] << 16 | H[Nt >>> 8 & 255] << 8 | H[vt & 255]) ^ dt[O++],
                    Ct = (H[Mt >>> 24] << 24 | H[Nt >>> 16 & 255] << 16 | H[vt >>> 8 & 255] << 8 | H[Rt & 255]) ^ dt[O++],
                    _t = (H[Nt >>> 24] << 24 | H[vt >>> 16 & 255] << 16 | H[Rt >>> 8 & 255] << 8 | H[Mt & 255]) ^ dt[O++],
                    vt = (H[vt >>> 24] << 24 | H[Rt >>> 16 & 255] << 16 | H[Mt >>> 8 & 255] << 8 | H[Nt & 255]) ^ dt[O++],
                    ht[ot] = Ft,
                    ht[ot + 1] = Ct,
                    ht[ot + 2] = _t,
                    ht[ot + 3] = vt
                },
                keySize: 8
            });
            g.AES = t._createHelper(Wt)
        }
        )()
    }
    );
    var ga = {};
    at(ga, {
        AntifraudStatisticsBlock: ()=>gi
    });
    var xi, Xt, Ut, ui, fi, mi, gi, va = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        ma();
        it();
        xi = class {
            constructor() {
                this.mousePositions = [],
                this.lineSegments = [],
                this.lineIndex = 0,
                this.scrollActive = !1
            }
            isLinear() {
                return this.calculateTotalLength() < 10 ? !1 : this.lineSegments.every(t=>{
                    let e = this.mousePositions.slice(t.start, t.end + 1);
                    return this.checkLinear(e)
                }
                )
            }
            reset() {
                this.mousePositions = [],
                this.lineSegments = [],
                this.lineIndex = 0,
                this.scrollActive = !1
            }
            onMouseMoveHandler(t) {
                this.scrollActive || (this.mousePositions.push({
                    x: t.clientX,
                    y: t.clientY
                }),
                this.mousePositions.length > 2 && this.checkForNewLineSegment())
            }
            onScrollHandler() {
                this.scrollActive = !0
            }
            onScrollEndHandler() {
                this.scrollActive = !1
            }
            checkForNewLineSegment() {
                let t = this.mousePositions[this.mousePositions.length - 2]
                  , e = this.mousePositions[this.mousePositions.length - 1]
                  , i = (e.y - t.y) / (e.x - t.x);
                if (this.lineSegments[this.lineIndex]) {
                    let s = this.mousePositions[this.lineSegments[this.lineIndex].start]
                      , o = (t.y - s.y) / (t.x - s.x);
                    Math.abs(i - o) > 5 ? (this.lineSegments[this.lineIndex].end = this.mousePositions.length - 2,
                    this.lineSegments.push({
                        start: this.mousePositions.length - 1
                    }),
                    this.lineIndex++) : this.lineSegments[this.lineIndex].end = this.mousePositions.length - 1
                } else
                    this.lineSegments.push({
                        start: 0,
                        end: this.mousePositions.length - 1
                    })
            }
            checkLinear(t) {
                if (t.length < 2)
                    return !0;
                let e = 3
                  , [i,s] = [t[0].x, t[0].y]
                  , [o,c] = [t[t.length - 1].x, t[t.length - 1].y];
                for (let d = 1; d < t.length - 1; d++) {
                    let[u,f] = [t[d].x, t[d].y];
                    if (Math.abs((c - s) * u - (o - i) * f + o * s - c * i) / Math.sqrt(Math.pow(c - s, 2) + Math.pow(o - i, 2)) > e)
                        return !1
                }
                return !0
            }
            calculateTotalLength() {
                let t = 0;
                for (let e = 1; e < this.mousePositions.length; e++) {
                    let i = this.mousePositions[e - 1]
                      , s = this.mousePositions[e]
                      , o = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2));
                    t += o
                }
                return t
            }
        }
        ,
        Xt = class {
            static getClosestDistanceInSquare(t, e) {
                let i = t.x - e.left
                  , s = t.y - e.top
                  , o = e.width - i
                  , c = e.height - s;
                return Math.min(i, s, o, c)
            }
            static getInnerElementPercent(t, e) {
                let i = t.getBoundingClientRect()
                  , s = Math.abs(i.width * i.height)
                  , o = i.width
                  , c = i.height;
                i.top < 0 && (c += i.top),
                i.left < 0 && (o += i.left);
                let d = i.top + i.height;
                e.height < d && (c -= d - e.height);
                let u = i.left + i.width;
                return e.width < u && (o -= u - e.width),
                c = c > 0 ? c : 0,
                o = o > 0 ? o : 0,
                o * c * 100 / s
            }
            static findImageElementOfTeaser(t) {
                return t.querySelector("img.mcimg")
            }
            static getViewportSize() {
                return {
                    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
                    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
                }
            }
            static isElementMatches(t, e) {
                return t.matches ? t.matches(e) : t.msMatchesSelector ? t.msMatchesSelector(e) : !1
            }
        }
        ;
        (function(g) {
            g.Undefined = "undefined",
            g.Click = "click",
            g.Close = "close",
            g.Like = "like"
        }
        )(Ut || (Ut = {}));
        ui = class {
            constructor() {
                this.action = Ut.Undefined,
                this.isTabActive = !0,
                this.clickTime = 0,
                this.lastScrollTime = 0,
                this.lastPageResizeTime = 0,
                this.lastWidgetResizeTime = 0,
                this.widgetCoordinateX = 0,
                this.widgetCoordinateY = 0,
                this.tapRadiusX = 0,
                this.tapRadiusY = 0,
                this.isHidden = !1,
                this.clickToBorderDistance = 0,
                this.teaserCoordinateX = 0,
                this.teaserCoordinateY = 0,
                this.teaserWidth = 0,
                this.teaserHeight = 0,
                this.imageWidth = 0,
                this.imageHeight = 0,
                this.teaserViewportPercent = 0,
                this.widgetOnLoadDisposition = !1,
                this.clickCoordinateX = 0,
                this.clickCoordinateY = 0,
                this.compileTime = 1716276376,
                this.forbiddenPatternMatches = 0,
                this.widgetType = "",
                this.isLinear = !1,
                this.isPixalateTriggered = !1,
                this.isWidgetOverlapped = !1,
                this.isRefreshedTeaserClicked = !1
            }
        }
        ,
        fi = class {
            constructor(t, e, i=[]) {
                this.app = t,
                this.parameters = e,
                this.forbiddenPatterns = i,
                this.linearMovementDetector = new xi
            }
            onWidgetLoadEvent() {
                let t = this.app.root.getBoundingClientRect();
                this.initialWidgetCoordinates = {
                    x: t.left + window.scrollX,
                    y: t.top + window.scrollY
                },
                this.setForbiddenPatternMatches()
            }
            onContextFocusEvent() {
                this.parameters.isTabActive = !0,
                this.setForbiddenPatternMatches()
            }
            onContextBlurEvent() {
                this.parameters.isTabActive = !1,
                this.setForbiddenPatternMatches()
            }
            async onWidgetClickEvent(t, e, i) {
                this.setWidgetCoordinates(),
                this.setForbiddenPatternMatches(),
                this.setClickCoordinates(i),
                this.setWidgetType(),
                this.parameters.action = t,
                this.parameters.clickTime = this.app.getCurrentTimestamp(),
                this.parameters.widgetOnLoadDisposition = this.getWidgetDisposition();
                let s = this.app.findClosest(e, "div[data-i]");
                if (s) {
                    let o = s.getBoundingClientRect();
                    this.parameters.isHidden = !s.offsetParent,
                    this.parameters.teaserCoordinateX = o.left,
                    this.parameters.teaserCoordinateY = o.top,
                    this.parameters.teaserWidth = o.width,
                    this.parameters.teaserHeight = o.height,
                    this.parameters.teaserViewportPercent = Xt.getInnerElementPercent(s, Xt.getViewportSize()),
                    this.parameters.isLinear = this.linearMovementDetector.isLinear(),
                    "clientX"in i && "clientY"in i && (this.parameters.clickToBorderDistance = Xt.getClosestDistanceInSquare({
                        x: i.clientX,
                        y: i.clientY
                    }, o));
                    let c = Xt.findImageElementOfTeaser(s);
                    c && this.setImageProperties(c)
                }
            }
            setForbiddenPatternMatches() {
                if (typeof this.app.context.document == "object" && typeof this.app.context.document.documentElement == "object") {
                    let t = this.countPatternMatchesInElement(this.app.context.document.documentElement, this.forbiddenPatterns);
                    this.parameters.forbiddenPatternMatches < t && (this.parameters.forbiddenPatternMatches = t)
                }
            }
            onContextMouseMoveEvent(t) {
                if (this.app.getCurrentTimestamp() - this.loadTimestamp > 10) {
                    this.linearMovementDetector.reset();
                    return
                }
                this.linearMovementDetector.onMouseMoveHandler(t)
            }
            onContextScrollEvent() {
                this.parameters.lastScrollTime = this.app.getCurrentTimestamp(),
                this.linearMovementDetector.onScrollHandler(),
                this.scrollEndHandler && clearTimeout(this.scrollEndHandler),
                this.scrollEndHandler = setTimeout(()=>{
                    this.linearMovementDetector.onScrollEndHandler()
                }
                , 150)
            }
            onContextResizeEvent() {
                this.parameters.lastPageResizeTime = this.app.getCurrentTimestamp()
            }
            onRootResizeEvent() {
                this.parameters.lastWidgetResizeTime = this.app.getCurrentTimestamp()
            }
            onRootTouchEndEvent(t) {
                let e = t.changedTouches.item(0);
                e && (this.parameters.tapRadiusX = e.radiusX,
                this.parameters.tapRadiusY = e.radiusY)
            }
            setWidgetCoordinates() {
                let t = this.app.root.getBoundingClientRect();
                this.parameters.widgetCoordinateX = t.left,
                this.parameters.widgetCoordinateY = t.top
            }
            setImageProperties(t) {
                let e = t.getBoundingClientRect();
                this.parameters.imageWidth = e.width,
                this.parameters.imageHeight = e.height
            }
            getWidgetDisposition() {
                return this.parameters.widgetCoordinateX + window.scrollX !== this.initialWidgetCoordinates.x || this.parameters.widgetCoordinateY + window.scrollY !== this.initialWidgetCoordinates.y
            }
            setClickCoordinates(t) {
                "clientX"in t && "clientY"in t ? (this.parameters.clickCoordinateX = t.clientX,
                this.parameters.clickCoordinateY = t.clientY) : t.touches && t.touches[0] && (this.parameters.clickCoordinateX = t.touches[0].clientX,
                this.parameters.clickCoordinateY = t.touches[0].clientY)
            }
            setWidgetType() {
                switch (!0) {
                case this.app.getWidgetValue("hasGoodsPart", !0):
                    this.parameters.widgetType = "goods";
                    break;
                case this.app.getWidgetValue("hasNewsPart", !1):
                    this.parameters.widgetType = "news";
                    break;
                case this.app.getWidgetValue("hasVideoPart", !1):
                    this.parameters.widgetType = "video";
                    break;
                default:
                    this.parameters.widgetType = "exchange"
                }
            }
            countPatternMatchesInElement(t, e) {
                let i = t.outerHTML;
                return e.reduce((s,o)=>{
                    try {
                        let c = new RegExp(o,"gi")
                          , d = i.match(c);
                        if (d)
                            return s + d.length
                    } catch (c) {
                        this.app.log(`Error processing pattern "${o}": ${c.message}`)
                    }
                    return s
                }
                , 0)
            }
        }
        ,
        mi = class {
            constructor(t, e, i, s) {
                this.protocol = t,
                this.parameters = e,
                this.client = i,
                this.app = s
            }
            send(t, e) {
                let i = btoa(JSON.stringify({
                    rid: e,
                    showHash: t,
                    parameters: this.getEncodedParameters(t, e)
                }))
                  , s = new Blob([i]);
                this.client.beaconBlob("antifraud-event-hash", this.protocol + "//c.adskeeper.co.uk/aws", s, {})
            }
            getEncodedParameters(t, e) {
                let i = {
                    stringify: function(s) {
                        let o = {
                            ct: btoa(s.ciphertext.toString())
                        };
                        return s.iv && (o.iv = s.iv.toString()),
                        s.salt && (o.s = btoa(s.salt.toString()) + Math.random().toString(36).slice(-2)),
                        JSON.stringify(o).replace(/\s/g, "")
                    }
                };
                return btoa(Vt.AES.encrypt(JSON.stringify(this.parameters), t + e, {
                    format: i
                }).toString())
            }
        }
        ,
        gi = class g extends W {
            constructor(t) {
                super(t),
                this.name = "AntifraudStatisticsBlock",
                this.parameters = new ui,
                this.statistics = new mi(this.app.webProtocol,this.parameters,this.app.request,this.app),
                this.eventHandler = new fi(this.app,this.parameters,Object.keys(j).length ? j : []),
                this.addHook("afterLoadNewsHooks", this.initAntifraudStatistics.bind(this)),
                this.app.onAntifraudStatisticsClickHandler = this.clickHandler.bind(this),
                this.app.addClickHandler(this.app.clickHandlerList.onAntifraudStatisticsClick.handler, this.app.clickHandlerList.onAntifraudStatisticsClick.priority)
            }
            setPixalateTriggered() {
                this.parameters.isPixalateTriggered = !0
            }
            setIsWidgetOverlapped(t) {
                this.parameters.isWidgetOverlapped = t
            }
            setIsRefreshedTeaserClicked(t) {
                this.parameters.isRefreshedTeaserClicked = t
            }
            initAntifraudStatistics() {
                this.eventHandler.onWidgetLoadEvent(),
                this.app.addEvent(this.app.context, "focus", ()=>this.eventHandler.onContextFocusEvent()),
                this.app.addEvent(this.app.context, "blur", ()=>this.eventHandler.onContextBlurEvent()),
                this.app.addEvent(this.app.context, "scroll", ()=>this.eventHandler.onContextScrollEvent()),
                this.app.addEvent(this.app.context, "resize", ()=>this.eventHandler.onContextResizeEvent()),
                this.app.addEvent(this.app.context, "mousemove", e=>this.eventHandler.onContextMouseMoveEvent(e)),
                this.app.addEvent(this.app.root, "resize", ()=>this.eventHandler.onRootResizeEvent()),
                this.app.addEvent(this.app.root, "touchend", e=>this.eventHandler.onRootTouchEndEvent(e));
                let t = this.app.root.querySelector("a[data-hash]")?.getAttribute("data-hash");
                t && (this.addElementAction(".mgclose-btn", Ut.Close, t),
                this.addElementAction(".mg-close-button", Ut.Close, t),
                this.addElementAction(".mgbtn_media-like", Ut.Like, t))
            }
            clickHandler(t, e) {
                return this.actionHandler(Ut.Click, e, t.getAttribute("data-hash")),
                !0
            }
            addElementAction(t, e, i) {
                let s = this.app.root.querySelector(t);
                s && this.app.addEvent(s, "click", o=>{
                    this.actionHandler(e, o, i)
                }
                )
            }
            actionHandler(t, e, i) {
                this.eventHandler.onWidgetClickEvent(t, this.app.root, e).catch(s=>{
                    this.app.log(`Click Handler name: ${g.name} action: ${t}, error: `, "error", s)
                }
                ).finally(()=>{
                    this.statistics.send(i, this.app.servicerData.rid)
                }
                )
            }
        }
    }
    );
    var ba = ae((Oh,ya)=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        function q(g, t) {
            var e = de();
            return q = function(i, s) {
                i = i - 337;
                var o = e[i];
                return o
            }
            ,
            q(g, t)
        }
        (function(g, t) {
            for (var e = q, i = g(); ; )
                try {
                    var s = -parseInt(e(919)) / 1 + parseInt(e(969)) / 2 + -parseInt(e(1051)) / 3 * (parseInt(e(527)) / 4) + parseInt(e(548)) / 5 * (-parseInt(e(1033)) / 6) + parseInt(e(401)) / 7 * (parseInt(e(884)) / 8) + -parseInt(e(956)) / 9 * (-parseInt(e(867)) / 10) + parseInt(e(846)) / 11 * (-parseInt(e(382)) / 12);
                    if (s === t)
                        break;
                    i.push(i.shift())
                } catch {
                    i.push(i.shift())
                }
        }
        )(de, 985251);
        (function() {
            var g = {
                927: function(s, o) {
                    var c = q, d;
                    d = function(u) {
                        var f = q;
                        u.version = f(418),
                        u[f(964)] = function(I, T) {
                            var E = f
                              , y = 1
                              , C = 0
                              , b = I[E(619)]
                              , D = 0;
                            E(516) == typeof T && (y = 65535 & T,
                            C = T >>> 16);
                            for (var M = 0; M < b; ) {
                                for (D = Math[E(360)](b - M, 2654) + M; M < D; M++)
                                    C += y += 255 & I.charCodeAt(M);
                                y = 15 * (y >>> 16) + (65535 & y),
                                C = 15 * (C >>> 16) + (65535 & C)
                            }
                            return C % 65521 << 16 | y % 65521
                        }
                        ,
                        u[f(363)] = function(I, T) {
                            var E = f
                              , y = 1
                              , C = 0
                              , b = I[E(619)]
                              , D = 0;
                            E(516) == typeof T && (y = 65535 & T,
                            C = T >>> 16 & 65535);
                            for (var M = 0; M < b; ) {
                                for (D = Math[E(360)](b - M, 2654) + M; M < D; M++)
                                    C += y += 255 & I[M];
                                y = 15 * (y >>> 16) + (65535 & y),
                                C = 15 * (C >>> 16) + (65535 & C)
                            }
                            return C % 65521 << 16 | y % 65521
                        }
                        ,
                        u[f(905)] = function(I, T) {
                            var E = f
                              , y = 1
                              , C = 0
                              , b = I[E(619)]
                              , D = 0
                              , M = 0
                              , Y = 0;
                            E(516) == typeof T && (y = 65535 & T,
                            C = T >>> 16);
                            for (var ct = 0; ct < b; ) {
                                for (D = Math[E(360)](b - ct, 2918); D > 0; )
                                    (M = I[E(1005)](ct++)) < 128 ? y += M : M < 2048 ? (C += y += 192 | M >> 6 & 31,
                                    --D,
                                    y += 128 | 63 & M) : M >= 55296 && M < 57344 ? (C += y += 240 | (M = 64 + (1023 & M)) >> 8 & 7,
                                    --D,
                                    C += y += 128 | M >> 2 & 63,
                                    --D,
                                    C += y += 128 | (Y = 1023 & I.charCodeAt(ct++)) >> 6 & 15 | (3 & M) << 4,
                                    --D,
                                    y += 128 | 63 & Y) : (C += y += 224 | M >> 12 & 15,
                                    --D,
                                    C += y += 128 | M >> 6 & 63,
                                    --D,
                                    y += 128 | 63 & M),
                                    C += y,
                                    --D;
                                y = 15 * (y >>> 16) + (65535 & y),
                                C = 15 * (C >>> 16) + (65535 & C)
                            }
                            return C % 65521 << 16 | y % 65521
                        }
                    }
                    ,
                    c(854) == typeof DO_NOT_EXPORT_ADLER ? d(o) : d({})
                }
            }
              , t = {};
            function e(s) {
                var o = q
                  , c = t[s];
                if (c !== void 0)
                    return c.exports;
                var d = t[s] = {
                    exports: {}
                };
                return g[s](d, d[o(1097)], e),
                d[o(1097)]
            }
            e.n = function(s) {
                var o = q
                  , c = s && s[o(699)] ? function() {
                    return s.default
                }
                : function() {
                    return s
                }
                ;
                return e.d(c, {
                    a: c
                }),
                c
            }
            ,
            e.d = function(s, o) {
                var c = q;
                for (var d in o)
                    e.o(o, d) && !e.o(s, d) && Object[c(443)](s, d, {
                        enumerable: !0,
                        get: o[d]
                    })
            }
            ,
            e.o = function(s, o) {
                var c = q;
                return Object[c(808)][c(1142)][c(683)](s, o)
            }
            ,
            e.r = function(s) {
                var o = q;
                o(854) != typeof Symbol && Symbol[o(436)] && Object[o(443)](s, Symbol[o(436)], {
                    value: o(889)
                }),
                Object[o(443)](s, o(699), {
                    value: !0
                })
            }
            ;
            var i = {};
            (function() {
                "use strict";
                var s = q;
                e.r(i),
                e.d(i, {
                    AntiFraud: function() {
                        return M
                    },
                    Anura: function() {
                        return Vi
                    },
                    AnuraStatus: function() {
                        return Te
                    },
                    Application: function() {
                        return pn
                    },
                    BaseConfiguration: function() {
                        return Y
                    },
                    EventMask: function() {
                        return b
                    },
                    Pixalate: function() {
                        return Fi
                    },
                    Snapshot: function() {
                        return nn
                    }
                });
                var o, c = e(927), d = e.n(c), u = function() {
                    var r = q;
                    function p() {}
                    return p[r(1002)] = function(a) {
                        var n = r;
                        if (a === null || isNaN(a) || a === "")
                            return "";
                        var h = "";
                        a < 0 && (h = ",",
                        a *= -1);
                        for (var l = parseInt(String(a), 10).toString(8), m = Math.ceil(l[n(619)] / 2), w = 0; w < m; w++) {
                            var k = l.substr(2 * w, 2);
                            h += p[n(456)](k)
                        }
                        return h
                    }
                    ,
                    p.x64String = function(a) {
                        var n = r;
                        a = a[n(514)](),
                        a = unescape(encodeURIComponent(a));
                        for (var h, l, m, w, k, x, v, S = n(893), V = "", z = 0; z < a[n(619)]; )
                            w = (h = a[n(1005)](z++)) >> 2,
                            k = (3 & h) << 4 | (l = a.charCodeAt(z++)) >> 4,
                            m = a[n(1005)](z++),
                            x = isNaN(l) ? 64 : (15 & l) << 2 | m >> 6,
                            v = isNaN(m) ? 64 : 63 & m,
                            V += S[n(644)](w) + S.charAt(k) + S[n(644)](x) + S[n(644)](v);
                        return V
                    }
                    ,
                    p[r(666)] = function(a) {
                        var n = r;
                        return n(1114)[n(700)](a, 1)
                    }
                    ,
                    p[r(456)] = function(a) {
                        return {
                            "00": "A",
                            "01": "B",
                            "02": "C",
                            "03": "D",
                            "04": "E",
                            "05": "F",
                            "06": "G",
                            "07": "H",
                            10: "I",
                            11: "J",
                            12: "K",
                            13: "L",
                            14: "M",
                            15: "N",
                            16: "O",
                            17: "P",
                            20: "Q",
                            21: "R",
                            22: "S",
                            23: "T",
                            24: "U",
                            25: "V",
                            26: "W",
                            27: "X",
                            30: "Y",
                            31: "Z",
                            32: "a",
                            33: "b",
                            34: "c",
                            35: "d",
                            36: "e",
                            37: ".",
                            40: "g",
                            41: "h",
                            42: "i",
                            43: "j",
                            44: "k",
                            45: "l",
                            46: "m",
                            47: "n",
                            50: "o",
                            51: "p",
                            52: "q",
                            53: "r",
                            54: "s",
                            55: "t",
                            56: "u",
                            57: "v",
                            60: "0",
                            61: "1",
                            62: "2",
                            63: "3",
                            64: "4",
                            65: "5",
                            66: "6",
                            67: "7",
                            70: "8",
                            71: "9",
                            72: "w",
                            73: "x",
                            74: "y",
                            75: "z",
                            76: "-",
                            77: "_",
                            0: "!",
                            1: "*",
                            2: ";",
                            3: ":",
                            4: "=",
                            5: "+",
                            6: "$",
                            7: "~"
                        }[a]
                    }
                    ,
                    p[r(647)] = function(a) {
                        var n = r;
                        return d()[n(905)](a) >>> 0
                    }
                    ,
                    p
                }(), f = function() {
                    var r = q;
                    function p() {}
                    return p[r(404)] = function(a) {
                        var n = r
                          , h = [];
                        for (var l in a)
                            h.push(l + "=" + a[l]);
                        return h[n(765)]("&")
                    }
                    ,
                    p
                }(), I = function() {
                    var r = q;
                    function p() {}
                    return p[r(913)] = function(a, n, h) {
                        h === void 0 && (h = !1);
                        var l = a.length;
                        if (l <= n)
                            return a;
                        var m = h ? l - n : 0
                          , w = h ? l : n;
                        return a.substring(m, w)
                    }
                    ,
                    p
                }(), T = function() {
                    var r = q;
                    function p() {}
                    return p.addEvent = function(a, n, h) {
                        var l = q;
                        a[l(1152)] ? a[l(1152)](n, h, !1) : a[l(632)]("on" + n, h)
                    }
                    ,
                    p[r(1115)] = function(a, n, h) {
                        var l = r;
                        a[l(490)] ? a.removeEventListener(n, h, !1) : a[l(663)]("on" + n, h)
                    }
                    ,
                    p
                }(), E = function() {
                    var r = q;
                    function p(a) {
                        var n = q;
                        this[n(504)] = a,
                        this.topIFrame = null,
                        this.context = a.context
                    }
                    return p[r(808)].isSessionStorageEnabled = function() {
                        var a = r
                          , n = null;
                        if (a(429)in this.context)
                            try {
                                this[a(474)].sessionStorage[a(603)](a(719), 1),
                                n = this[a(474)].sessionStorage[a(815)](a(719))
                            } catch {}
                        return n ? 1 : 0
                    }
                    ,
                    p.prototype[r(1011)] = function() {
                        var a = r
                          , n = 0;
                        return (this[a(474)][a(1026)] || this.context[a(726)] !== void 0) && (n += 1),
                        (this.context.opera && this[a(474)][a(1026)][a(547)] || this[a(474)][a(726)] !== void 0) && (n += 2),
                        (this.context[a(487)][a(495)] || this[a(474)][a(554)]) && (n += 4),
                        this[a(474)].btoa && !this.context[a(624)][a(435)] && this[a(474)][a(951)] === void 0 || (n += 8),
                        this[a(474)][a(590)] && (n += 16),
                        this.context[a(587)] !== void 0 && (n += 32),
                        this[a(474)][a(645)] || (n += 64),
                        n
                    }
                    ,
                    p[r(808)][r(1141)] = function() {
                        var a = r;
                        return this[a(474)][a(624)].javaEnabled() ? 1 : 0
                    }
                    ,
                    p[r(808)][r(918)] = function() {
                        var a = r
                          , n = 0
                          , h = this[a(474)][a(624)][a(483)];
                        if (h !== void 0 && a(1021) === h?.["Shockwave Flash"])
                            n = 1;
                        else if (this[a(474)].ActiveXObject !== void 0)
                            try {
                                new ActiveXObject(a(526)) && (n = 1)
                            } catch {}
                        return n
                    }
                    ,
                    p[r(808)][r(558)] = function() {
                        var a = r;
                        return this[a(474)][a(624)].cookieEnabled ? 1 : 0
                    }
                    ,
                    p[r(808)].isLocalStorageEnabled = function() {
                        var a = r
                          , n = null;
                        if (a(452)in this[a(474)])
                            try {
                                this[a(474)].localStorage.setItem("svs", 1),
                                n = this[a(474)][a(452)][a(815)]("svs")
                            } catch {}
                        return n ? 1 : 0
                    }
                    ,
                    p[r(808)][r(471)] = function() {
                        var a = r
                          , n = 0;
                        return this[a(1141)]() && (n += 1),
                        this[a(918)]() && (n += 2),
                        this[a(558)]() && (n += 4),
                        this[a(1156)]() && (n += 8),
                        this[a(461)]() && (n += 16),
                        this.isTouchStart() && (n += 32),
                        n
                    }
                    ,
                    p[r(808)].isTouchStart = function() {
                        var a = r;
                        return this[a(474)][a(1112)] !== void 0
                    }
                    ,
                    p.prototype[r(917)] = function(a) {
                        var n = r
                          , h = -32768
                          , l = {
                            top: h,
                            bottom: h,
                            left: h,
                            right: h,
                            height: h,
                            width: h
                        };
                        try {
                            l = a.getBoundingClientRect()
                        } catch {
                            return l
                        }
                        var m = {
                            top: l[n(678)],
                            bottom: l[n(557)],
                            left: l[n(610)],
                            right: l.right,
                            height: l[n(750)] ? l[n(750)] : l[n(557)] - l[n(678)],
                            width: l.width ? l[n(1040)] : l.right - l[n(610)]
                        };
                        if (this[n(474)][n(948)] !== this[n(474)][n(678)]) {
                            var w = this.getFrameElement();
                            if (w) {
                                var k = w.getBoundingClientRect();
                                m[n(678)] += k.top,
                                m[n(557)] += k[n(678)],
                                m.left += k.left,
                                m[n(373)] += k[n(610)]
                            }
                        }
                        return m
                    }
                    ,
                    p.prototype.getFrameElement = function() {
                        var a = r;
                        if (this[a(513)] === void 0)
                            try {
                                var n = void 0
                                  , h = void 0;
                                for (h = (n = this[a(474)])[a(605)]; n[a(605)]; n = n[a(762)])
                                    h = n[a(605)];
                                this[a(513)] = h
                            } catch {
                                this.topIFrame = null
                            }
                        return this[a(513)]
                    }
                    ,
                    p[r(808)][r(342)] = function(a) {
                        var n = r
                          , h = 0
                          , l = 0;
                        return n(1022)in a && n(656)in a ? (h = a[n(1022)],
                        l = a[n(656)]) : "touches"in a && a[n(664)] && a[n(664)][0] && (h = a[n(664)][0][n(1022)],
                        l = a[n(664)][0][n(656)]),
                        {
                            x: h,
                            y: l
                        }
                    }
                    ,
                    p[r(808)][r(1127)] = function(a) {
                        var n = r
                          , h = 0
                          , l = 0;
                        return a || (a = this.context.event),
                        "pageX"in a && "pageY"in a ? (h = a[n(729)],
                        l = a[n(968)]) : n(664)in a && a.touches && a[n(664)][0] ? (h = a[n(664)][0][n(729)],
                        l = a[n(664)][0].pageY) : n(1022)in a && n(656)in a && (h = a[n(1022)] + (this[n(474)][n(487)][n(425)][n(787)] || this[n(474)][n(487)][n(433)][n(787)]) - this[n(474)][n(487)][n(425)].clientLeft,
                        l = a[n(656)] + (this[n(474)][n(487)][n(425)].scrollTop || this.context[n(487)][n(433)].scrollTop) - this[n(474)][n(487)].documentElement[n(984)]),
                        {
                            x: h,
                            y: l
                        }
                    }
                    ,
                    p[r(808)][r(869)] = function(a) {
                        var n = r
                          , h = 0
                          , l = 0;
                        do
                            h += a[n(468)],
                            l += a.offsetTop,
                            a = a[n(723)];
                        while (a);
                        return {
                            x: h,
                            y: l
                        }
                    }
                    ,
                    p[r(808)][r(648)] = function(a) {
                        var n = r
                          , h = -32768
                          , l = h
                          , m = h;
                        return "clientX"in a && n(656)in a ? (l = a[n(1022)],
                        m = a[n(656)]) : "touches"in a && a.touches && a.touches[0] && (l = a[n(664)][0][n(1022)],
                        m = a[n(664)][0][n(656)]),
                        {
                            x: l,
                            y: m
                        }
                    }
                    ,
                    p[r(808)][r(962)] = function(a) {
                        var n = r;
                        if (this[n(474)][n(916)]) {
                            var h = !0
                              , l = 0;
                            T[n(908)](this.context, "deviceorientation", function() {
                                h && (l++,
                                h = !1,
                                setTimeout(function() {
                                    h = !0
                                }, 1e3)),
                                a(l.toString())
                            })
                        } else
                            a("-1")
                    }
                    ,
                    p[r(808)][r(755)] = function(a) {
                        var n = r
                          , h = -32768
                          , l = h
                          , m = h;
                        return a || (a = this[n(474)][n(791)]),
                        n(729)in a && n(968)in a ? (l = a[n(729)],
                        m = a[n(968)]) : "touches"in a && a[n(664)] && a[n(664)][0] ? (l = a[n(664)][0][n(729)],
                        m = a[n(664)][0][n(968)]) : n(1022)in a && "clientY"in a && (l = a[n(1022)] + (this[n(474)][n(487)][n(425)][n(787)] || this.context[n(487)][n(433)][n(787)]) - this[n(474)][n(487)].documentElement[n(1066)],
                        m = a[n(656)] + (this[n(474)][n(487)][n(425)][n(1119)] || this[n(474)][n(487)][n(433)].scrollTop) - this.context.document[n(425)][n(984)]),
                        {
                            x: l,
                            y: m
                        }
                    }
                    ,
                    p[r(808)][r(705)] = function(a) {
                        for (var n = r; a.firstChild && a[n(976)][n(833)] === 1; )
                            a = a[n(976)];
                        for (; a[n(890)] && a !== this.context[n(487)][n(433)]; ) {
                            if (parseFloat(this[n(474)][n(953)](a)[n(891)](n(550))) <= .2)
                                return 1;
                            a = a.parentNode
                        }
                        return a !== null && a !== this[n(474)][n(487)][n(433)] && a[n(866)]()instanceof ShadowRoot ? (a = a[n(866)]()[n(1050)],
                        this[n(705)](a)) : 0
                    }
                    ,
                    p[r(808)].isOnLine = function() {
                        var a = r
                          , n = 1;
                        return this.context[a(624)][a(650)] !== void 0 && (n = this.context[a(624)].onLine ? 1 : 0),
                        n
                    }
                    ,
                    p[r(808)][r(424)] = function(a) {
                        var n = r;
                        this.context[n(624)][n(793)] && this[n(474)][n(624)][n(793)]()[n(622)](function(h) {
                            var l = n;
                            a(+h[l(519)], 100 * h[l(1084)])
                        })
                    }
                    ,
                    p[r(808)][r(975)] = function() {
                        var a = r
                          , n = this[a(474)][a(487)][a(1117)](a(362));
                        return n[a(931)] && n.getContext("2d") ? 1 : 0
                    }
                    ,
                    p[r(808)][r(616)] = function() {
                        var a = r
                          , n = 0;
                        return this.context.screenX !== void 0 && (n = Math[a(615)](this.context[a(629)])),
                        n
                    }
                    ,
                    p[r(808)][r(525)] = function() {
                        var a = r
                          , n = 0;
                        return this[a(474)][a(494)] !== void 0 && (n = Math.abs(this[a(474)][a(494)])),
                        n
                    }
                    ,
                    p[r(808)][r(1098)] = function(a) {
                        for (var n = r, h = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/, l = /\/\/s-img.*\/([\d]+)\/.*\.(jpg|gif)/, m = this.config[n(836)].getElementsByTagName(n(580)), w = this[n(504)][n(836)].getElementsByTagName("VIDEO"), k = [], x = 0; x < m.length; x++)
                            k[n(524)](m[x]);
                        for (x = 0; x < w[n(619)]; x++)
                            k.push(w[x]);
                        for (x = 0; x < k[n(619)]; x++) {
                            var v = h[n(658)](k[x][n(366)]);
                            v || (v = l[n(658)](k[x][n(366)])),
                            T.addEvent(k[x], n(1055), a)
                        }
                    }
                    ,
                    p.prototype[r(1135)] = function() {
                        var a = r
                          , n = 0;
                        return this[a(474)][a(624)][a(356)] !== void 0 && (n = this[a(474)][a(624)][a(356)]),
                        n
                    }
                    ,
                    p[r(808)].getPlugins = function() {
                        var a = r
                          , n = "";
                        if (this.context[a(624)][a(483)] !== void 0) {
                            for (var h = this.context[a(624)][a(483)], l = [], m = 0; m < h[a(619)]; m++)
                                l[a(524)](h[m][a(618)]);
                            n = I[a(913)](l[a(765)]("|")[a(861)](/\s/g, ""), 300)
                        }
                        return n
                    }
                    ,
                    p[r(808)][r(769)] = function() {
                        var a = r
                          , n = {
                            networkInformationType: a(817),
                            networkInformationEffectiveType: a(817),
                            networkInformationSaveData: 0
                        };
                        try {
                            var h = this[a(474)][a(624)][a(458)] || this.context[a(624)].mozConnection || this[a(474)][a(624)][a(432)];
                            h[a(497)] !== void 0 && (n.networkInformationType = h.type),
                            h[a(344)] !== void 0 && (n[a(486)] = h.effectiveType),
                            h[a(567)] !== void 0 && (n.networkInformationSaveData = h.saveData ? 1 : 0)
                        } catch {}
                        return n
                    }
                    ,
                    p[r(808)].getTimePerformance = function() {
                        return new Promise(function(a) {
                            for (var n = q, h = performance.now(), l = new Array(5e3), m = 0; m < 5e3; m++)
                                l[m] = Math[n(792)]();
                            l[n(588)]();
                            var w = performance[n(660)]();
                            a(Math[n(741)](w - h))
                        }
                        )
                    }
                    ,
                    p.prototype[r(877)] = function() {
                        var a = r;
                        return this[a(1156)]() && (n = this[a(474)][a(452)][a(815)](a(1158))) !== null ? n : "";
                        var n
                    }
                    ,
                    p[r(808)].getPixelDepth = function() {
                        var a = r, n;
                        return (n = window[a(756)][a(393)]) !== null && n !== void 0 ? n : -1
                    }
                    ,
                    p.prototype.getStringValueFromLocalStorage = function(a, n) {
                        var h = r;
                        if (!this.isLocalStorageEnabled())
                            return n;
                        var l = this[h(474)][h(452)][h(815)](a);
                        return this[h(474)][h(452)][h(657)](a),
                        l ?? n
                    }
                    ,
                    p.prototype.getNumberValueFromLocalStorage = function(a, n) {
                        var h = r;
                        if (!this[h(1156)]())
                            return n;
                        var l = this[h(474)][h(452)][h(815)](a);
                        return this.context.localStorage.removeItem(a),
                        l ? parseInt(l) : n
                    }
                    ,
                    p
                }(), y = function() {
                    var r = q;
                    function p() {
                        var a = q;
                        this[a(1007)] = [],
                        this[a(679)] = []
                    }
                    return p[r(808)][r(800)] = function(a, n) {
                        var h = r;
                        return this[h(1007)][h(524)](a),
                        this.sizes[h(524)](n),
                        this
                    }
                    ,
                    p[r(808)].pack = function() {
                        var a = r
                          , n = this[a(679)][a(954)](function(k, x) {
                            return k + x
                        }, 0);
                        if (this[a(1007)].reduce(function(k, x) {
                            var v = a;
                            return k + x[v(619)]
                        }, 0) <= n)
                            return this[a(1007)];
                        for (var h = this[a(464)](), l = h[0], m = h[1], w = h[2]; this[a(728)](l); )
                            ;
                        return this.applyReplacements(l, m, w),
                        l
                    }
                    ,
                    p[r(808)][r(464)] = function() {
                        for (var a = r, n = [], h = [], l = [], m = 0; m < this[a(1007)].length; m++) {
                            var w = this.referrers[m][a(619)] >= 8 ? this.referrers[m][a(466)]("/", 8) : -1;
                            w === -1 ? (n[m] = this[a(1007)][m],
                            this[a(1007)][m] = "") : (n[m] = this.referrers[m].substr(0, w),
                            this.referrers[m] = this[a(1007)][m].substr(w)),
                            this[a(679)][m] -= n[m][a(619)]
                        }
                        return h.push[a(929)](h, n),
                        h[0] === h[1] ? l[0] = "++" : h[0] === h[2] && (l[0] = "::"),
                        h[1] === h[2] && (l[1] = ";;"),
                        [n, h, l]
                    }
                    ,
                    p[r(808)][r(728)] = function(a) {
                        for (var n = r, h = Array(this[n(1007)].length)[n(901)](!1), l = !1, m = 0; m < this[n(1007)][n(619)]; m++)
                            if (h[m] || this[n(1007)][m][n(619)])
                                h[m] || (l = !0,
                                a[m] += this[n(1007)][m][0],
                                this[n(1007)][m] = this[n(1007)][m][n(619)] !== 1 ? this[n(1007)][m][n(700)](1) : "",
                                this.sizes[m]--,
                                this[n(679)][m] || (h[m] = !0));
                            else {
                                h[m] = !0;
                                var w = this[n(679)][m];
                                this.sizes[m] = 0;
                                var k = h.indexOf(!1);
                                k !== -1 && (this.sizes[k] += w)
                            }
                        return l
                    }
                    ,
                    p[r(808)][r(1147)] = function(a, n, h) {
                        var l = r;
                        for (var m in h)
                            l(963) != typeof a[m] && (a[m] = ""),
                            a[m] = a[m][l(1085)](n[m]).join(h[m])
                    }
                    ,
                    p
                }();
                function C(r) {
                    var p = q;
                    return C = typeof Symbol == "function" && p(749) == typeof Symbol[p(444)] ? function(a) {
                        return typeof a
                    }
                    : function(a) {
                        var n = p;
                        return a && n(795) == typeof Symbol && a[n(736)] === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                    }
                    ,
                    C(r)
                }
                (function(r) {
                    var p = q;
                    r[p(508)] = p(508),
                    r.MUST_NOT_EXIST = p(1138),
                    r[p(943)] = p(943),
                    r[p(539)] = p(539),
                    r[p(818)] = p(818),
                    r[p(776)] = p(776),
                    r[p(941)] = "LESS_THAN",
                    r[p(586)] = p(586),
                    r[p(582)] = "EXCLUDES",
                    r[p(1088)] = p(1088),
                    r[p(970)] = p(970),
                    r[p(989)] = p(989),
                    r[p(912)] = p(912),
                    r[p(856)] = p(856),
                    r.IS_OBJECT = "IS_OBJECT",
                    r[p(438)] = p(438),
                    r.IS_NUMBER = p(801)
                }
                )(o || (o = {}));
                var b, D = function() {
                    function r(p) {
                        var a = q;
                        this[a(504)] = p
                    }
                    return r.prototype.isValid = function() {
                        var p = q
                          , a = this
                          , n = {
                            isValid: !0,
                            isDebugPropertyTriggered: !1
                        };
                        return n[p(814)] = this[p(504)][p(735)][p(437)](function(h) {
                            var l = p, m, w = h.name, k = h[l(1009)], x = h[l(914)], v = h[l(835)];
                            if (v !== void 0 && v)
                                return n.isDebugPropertyTriggered = !0,
                                !0;
                            var S = (w = w[l(861)](/^window\./, ""))[l(1085)](".")[l(954)](function(V, z) {
                                return V ? V[z] : void 0
                            }, a.config[l(474)]);
                            switch (k) {
                            case o[l(508)]:
                                return S !== void 0;
                            case o[l(1138)]:
                                return S === void 0;
                            case o.REGEX_MATCH:
                                return new RegExp(x)[l(933)](String(S));
                            case o[l(539)]:
                                return S === x;
                            case o.NOT_EQUALS:
                                return S !== x;
                            case o[l(776)]:
                                return S > x;
                            case o.LESS_THAN:
                                return S < x;
                            case o[l(586)]:
                                return S[l(672)](x);
                            case o[l(582)]:
                                return !S[l(672)](x);
                            case o[l(1088)]:
                                return S === null;
                            case o.IS_NOT_NULL:
                                return S !== null;
                            case o.IS_TRUE:
                                return S === !0;
                            case o.IS_FALSE:
                                return S === !1;
                            case o[l(856)]:
                                return Array[l(651)](S);
                            case o[l(998)]:
                                return C(S) === "object" && S !== null;
                            case o.IS_STRING:
                                return l(963) == typeof S;
                            case o[l(801)]:
                                return typeof S == "number";
                            default:
                                return (m = a.config[l(399)]) === null || m === void 0 || m[l(621)](l(371)[l(710)](k)),
                                !1
                            }
                        }),
                        n
                    }
                    ,
                    r
                }();
                (function(r) {
                    var p = q;
                    r[r[p(528)] = 0] = "MouseUp",
                    r[r[p(733)] = 1] = p(733),
                    r[r[p(752)] = 2] = p(752),
                    r[r[p(830)] = 4] = p(830),
                    r[r[p(789)] = 8] = p(789),
                    r[r[p(865)] = 16] = p(865),
                    r[r.Focus = 32] = "Focus"
                }
                )(b || (b = {}));
                var M = function() {
                    var r = q;
                    function p(a) {
                        var n = q;
                        this[n(504)] = a,
                        this[n(540)] = null,
                        this[n(988)] = "",
                        this[n(505)] = "",
                        this[n(358)] = "",
                        this.afDeepSession = 0,
                        this[n(565)] = 0,
                        this.afImgLoaded = 0,
                        this[n(907)] = "",
                        this[n(712)] = "",
                        this[n(774)] = "",
                        this.afBrowserFlag = 0,
                        this.afPlugins = "",
                        this.afBrowserHookMask = 0,
                        this[n(359)] = -1,
                        this[n(687)] = -1,
                        this[n(1031)] = n(734),
                        this.afTimePerformance = -1,
                        this.eventMask = b[n(528)],
                        this[n(642)] = !0,
                        this[n(713)] = !1,
                        this[n(472)] = new E(a),
                        this[n(1074)] = new D(a)
                    }
                    return p[r(808)][r(450)] = function() {
                        var a = r
                          , n = this;
                        this[a(504)][a(874)].getCookie(),
                        this.setReferrers(),
                        this[a(638)](),
                        this[a(825)](),
                        this[a(565)] = new Date()[a(985)](),
                        this.afBrowserFlag = this.domExtractor.getBrowserFlag(),
                        this[a(357)] = this[a(472)][a(1011)](),
                        this[a(414)] = this[a(472)][a(771)]();
                        try {
                            var h = this.browserValidator[a(814)]();
                            this[a(642)] = h[a(814)],
                            this[a(713)] = h[a(1091)]
                        } catch {
                            this[a(642)] = !1
                        }
                        this[a(504)][a(942)] && this.domExtractor[a(482)]().then(function(l) {
                            var m = a;
                            n[m(857)] = l
                        }),
                        this[a(555)]()
                    }
                    ,
                    p[r(808)][r(1006)] = function(a, n, h) {
                        var l = r;
                        h === void 0 && (h = "");
                        var m = new Date
                          , w = this[l(472)][l(648)](a)
                          , k = this[l(472)].getRectOfElement(n)
                          , x = this.domExtractor[l(705)](n);
                        return this[l(1057)](n),
                        this[l(922)](a, n),
                        p[l(563)]({
                            1: u[l(1002)](this[l(642)] ? 1 : 0),
                            2: u[l(1002)](this.isDebugBrowserPropertyTriggered ? 1 : 0),
                            3: u[l(1002)](this.afMgLoaded),
                            4: u[l(1002)](m.getTime()),
                            5: u.x64String(this[l(472)][l(877)]()),
                            7: u[l(935)](w.x + "|" + w.y),
                            8: u[l(1002)](p[l(1018)](n, l(721)) ? 1 : 0),
                            9: u[l(1002)](k[l(610)]),
                            10: u[l(1002)](this[l(540)]),
                            11: u.compressNumber(k[l(678)]),
                            12: u[l(1002)](this[l(472)][l(384)]()),
                            13: u.x64String(k.width + "|" + k[l(750)]),
                            14: u[l(1002)](this[l(472)].getNumberValueFromLocalStorage(l(367), -1)),
                            15: u.compressNumber(this.domExtractor[l(467)](l(811), -1)),
                            16: u[l(935)](this[l(472)].getStringValueFromLocalStorage(l(670), "")),
                            17: u[l(1002)](this[l(807)]),
                            18: u[l(1002)](this.eventMask),
                            19: this[l(358)],
                            20: this[l(505)],
                            21: this[l(988)],
                            22: u.compressNumber(this[l(392)]),
                            23: u[l(935)](this.afCoordsClickAndLinkOfPage),
                            24: u[l(935)](this[l(774)]),
                            25: u.compressNumber(this[l(857)]),
                            27: u[l(1002)](this[l(504)][l(819)]),
                            28: u[l(666)](this.domExtractor[l(471)]()),
                            29: u[l(935)](this.afCoords),
                            30: u.compressNumber(this.config[l(474)][l(756)][l(1040)]),
                            31: u.compressNumber(this[l(504)].context.screen[l(750)]),
                            33: u[l(1002)](this[l(790)]),
                            34: u[l(1002)](x),
                            35: u[l(935)](this.config[l(474)].navigator[l(671)]),
                            36: u[l(935)](this.afPlugins),
                            37: u[l(1002)](this[l(472)].getNumberValueFromLocalStorage(l(888), 0)),
                            38: u[l(935)](this[l(504)][l(474)][l(624)][l(448)]),
                            39: u[l(935)](-m.getTimezoneOffset()),
                            40: u[l(935)](this[l(359)] + "|" + this[l(687)]),
                            41: u[l(935)](this[l(504)][l(474)][l(756)][l(780)] + "|" + this[l(504)][l(474)].screen.availHeight),
                            42: u.x64String(this.networkInformation),
                            43: u[l(1002)](this.domExtractor[l(616)]()),
                            44: u[l(1002)](this[l(472)][l(525)]()),
                            45: u.compressNumber(this[l(357)]),
                            46: u[l(1002)](u.adler32(h)),
                            47: u.compressNumber(this[l(472)][l(975)]()),
                            48: u.compressNumber(this[l(472)][l(596)]())
                        })
                    }
                    ,
                    p[r(808)][r(1104)] = function(a) {
                        var n = r;
                        this.eventMask = a | this[n(961)]
                    }
                    ,
                    p[r(808)].setWidgetEvents = function() {
                        var a = r
                          , n = this;
                        this[a(472)][a(1098)](function() {
                            var h = a;
                            n[h(790)] || (n[h(790)] = new Date()[h(985)]())
                        })
                    }
                    ,
                    p[r(808)].setEvents = function() {
                        var a = r
                          , n = this;
                        T[a(908)](this.config[a(474)][a(487)], a(522), function(h) {
                            var l = a;
                            h || (h = n[l(504)][l(474)][l(791)]),
                            n[l(504)][l(474)][l(997)](n[l(1145)]),
                            n[l(1145)] = n[l(504)][l(474)][l(773)](function() {
                                var m = l;
                                n.miliSecondsFromScroll === null && (n.miliSecondsFromScroll = 0),
                                n[m(540)]++
                            }, 100)
                        }),
                        this[a(472)].getDeviceOrientation(function(h) {
                            var l = a;
                            n[l(774)] = h
                        }),
                        this[a(472)][a(424)](function(h, l) {
                            var m = a;
                            n[m(359)] = h,
                            n[m(687)] = l
                        })
                    }
                    ,
                    p[r(808)][r(825)] = function() {
                        var a = r
                          , n = this.domExtractor.getNetwrokInformation();
                        this.networkInformation = [n[a(412)], n[a(486)], n[a(668)]][a(765)]("|")
                    }
                    ,
                    p[r(808)][r(922)] = function(a, n) {
                        var h = r
                          , l = this[h(472)][h(755)](a)
                          , m = this[h(472)].getCoordsElementOfPage(n);
                        this.afCoordsClickAndLinkOfPage = [l.x, l.y, m.x, m.y][h(732)](function(w) {
                            return parseInt(w)
                        })[h(765)]("|")
                    }
                    ,
                    p[r(808)].setCoords = function(a) {
                        var n = r
                          , h = this[n(472)].getRectOfElement(a);
                        this.afCoords = [h.height, h[n(1040)], h.left, h.top][n(732)](function(l) {
                            return parseInt(l)
                        })[n(765)]("|")
                    }
                    ,
                    p[r(808)][r(1137)] = function() {
                        var a = r;
                        this[a(504)][a(874)][a(600)][a(758)] === void 0 ? (this[a(988)] = I[a(913)](this[a(504)].context[a(487)][a(947)], 500),
                        this.config[a(874)][a(600)].svspr = this[a(988)],
                        this[a(504)].cookieStorage[a(604)]()) : this.afPrimaryReferrer = this[a(504)][a(874)][a(600)][a(758)],
                        this[a(504)].context.hasOwnProperty(a(469)) ? this.afReferrer = this.config[a(474)].referer : this[a(505)] = this[a(504)].context[a(487)][a(947)],
                        this[a(358)] = this[a(504)][a(474)][a(487)].location[a(391)];
                        var n = new y
                          , h = this[a(504)][a(649)] ? [70, 50, 50] : [300, 300, 300]
                          , l = n[a(800)](this[a(988)], h[0])[a(800)](this.afReferrer, h[1]).add(this[a(358)], h[2])[a(1030)]();
                        this.afPrimaryReferrer = u.x64String(I.trimString(l[0], 256)),
                        this.afReferrer = u.x64String(I.trimString(l[1], 256)),
                        this[a(358)] = u[a(935)](I[a(913)](l[2], 256))
                    }
                    ,
                    p[r(808)][r(638)] = function() {
                        var a = r;
                        if (this.config[a(874)][a(600)][a(691)] !== void 0) {
                            this[a(392)] = this[a(504)].cookieStorage[a(600)][a(691)];
                            var n = this[a(504)].modulePrefix + a(1103);
                            this.config[a(474)][n] === void 0 && (this.afDeepSession++,
                            this.config[a(474)][n] = !0)
                        } else
                            this[a(392)] = 1;
                        this[a(504)][a(874)][a(600)][a(691)] = this[a(392)],
                        this.config[a(874)][a(604)]()
                    }
                    ,
                    p[r(1018)] = function(a, n) {
                        var h = r
                          , l = a[h(993)];
                        if (l === "")
                            return null;
                        for (var m = l[h(861)]("?", "")[h(1085)]("&"), w = 0; w < m[h(619)]; w++)
                            if (m[w][h(1085)]("=")[0] === n)
                                return m[w];
                        return null
                    }
                    ,
                    p[r(563)] = function(a) {
                        var n = r
                          , h = "";
                        for (var l in a)
                            h += parseInt(l) === 1 ? "c" : "f",
                            a[n(1142)](l) && (h += a[l]);
                        var m = u[n(1002)](u[n(647)](h));
                        return encodeURIComponent(h + "(" + m)
                    }
                    ,
                    p
                }()
                  , Y = function(r) {
                    var p = q;
                    this.id = r.id,
                    this[p(873)] = r.modulePrefix,
                    this.logger = r[p(399)],
                    this[p(874)] = r.cookieStorage,
                    this[p(474)] = r.context || window,
                    this.root = r[p(836)] || window.document,
                    this[p(649)] = r.afShortEnabled || !1,
                    this.iframePlacementType = r.iframePlacementType || 0,
                    this.useTimePerformance = r[p(942)] || !1,
                    this[p(735)] = r[p(735)] || []
                }
                  , ct = function() {
                    var r = q;
                    return ct = Object.assign || function(p) {
                        for (var a = q, n, h = 1, l = arguments[a(619)]; h < l; h++)
                            for (var m in n = arguments[h])
                                Object[a(808)].hasOwnProperty.call(n, m) && (p[m] = n[m]);
                        return p
                    }
                    ,
                    ct[r(929)](this, arguments)
                };
                function lt(r, p, a, n) {
                    return new (a || (a = Promise))(function(h, l) {
                        var m = q;
                        function w(v) {
                            var S = q;
                            try {
                                x(n[S(828)](v))
                            } catch (V) {
                                l(V)
                            }
                        }
                        function k(v) {
                            try {
                                x(n.throw(v))
                            } catch (S) {
                                l(S)
                            }
                        }
                        function x(v) {
                            var S;
                            v.done ? h(v.value) : (S = v.value,
                            S instanceof a ? S : new a(function(V) {
                                V(S)
                            }
                            )).then(w, k)
                        }
                        x((n = n[m(929)](r, p || []))[m(828)]())
                    }
                    )
                }
                function It(r, p) {
                    var a = q, n, h, l, m, w = {
                        label: 0,
                        sent: function() {
                            if (1 & l[0])
                                throw l[1];
                            return l[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return m = {
                        next: k(0),
                        throw: k(1),
                        return: k(2)
                    },
                    a(795) == typeof Symbol && (m[Symbol[a(444)]] = function() {
                        return this
                    }
                    ),
                    m;
                    function k(x) {
                        return function(v) {
                            return function(S) {
                                var V = q;
                                if (n)
                                    throw new TypeError(V(1003));
                                for (; m && (m = 0,
                                S[0] && (w = 0)),
                                w; )
                                    try {
                                        if (n = 1,
                                        h && (l = 2 & S[0] ? h[V(1128)] : S[0] ? h[V(737)] || ((l = h[V(1128)]) && l[V(683)](h),
                                        0) : h[V(828)]) && !(l = l[V(683)](h, S[1]))[V(1093)])
                                            return l;
                                        switch (h = 0,
                                        l && (S = [2 & S[0], l[V(1071)]]),
                                        S[0]) {
                                        case 0:
                                        case 1:
                                            l = S;
                                            break;
                                        case 4:
                                            return w[V(398)]++,
                                            {
                                                value: S[1],
                                                done: !1
                                            };
                                        case 5:
                                            w[V(398)]++,
                                            h = S[1],
                                            S = [0];
                                            continue;
                                        case 7:
                                            S = w[V(860)].pop(),
                                            w[V(641)][V(966)]();
                                            continue;
                                        default:
                                            if (!((l = (l = w.trys)[V(619)] > 0 && l[l.length - 1]) || S[0] !== 6 && S[0] !== 2)) {
                                                w = 0;
                                                continue
                                            }
                                            if (S[0] === 3 && (!l || S[1] > l[0] && S[1] < l[3])) {
                                                w.label = S[1];
                                                break
                                            }
                                            if (S[0] === 6 && w[V(398)] < l[1]) {
                                                w.label = l[1],
                                                l = S;
                                                break
                                            }
                                            if (l && w[V(398)] < l[2]) {
                                                w[V(398)] = l[2],
                                                w[V(860)].push(S);
                                                break
                                            }
                                            l[2] && w.ops.pop(),
                                            w.trys[V(966)]();
                                            continue
                                        }
                                        S = p.call(r, w)
                                    } catch (z) {
                                        S = [6, z],
                                        h = 0
                                    } finally {
                                        n = l = 0
                                    }
                                if (5 & S[0])
                                    throw S[1];
                                return {
                                    value: S[0] ? S[1] : void 0,
                                    done: !0
                                }
                            }([x, v])
                        }
                    }
                }
                function Wt(r, p, a) {
                    var n = q;
                    if (a || arguments.length === 2)
                        for (var h, l = 0, m = p[n(619)]; l < m; l++)
                            !h && l in p || (h || (h = Array[n(808)][n(788)][n(683)](p, 0, l)),
                            h[l] = p[l]);
                    return r[n(710)](h || Array.prototype[n(788)][n(683)](p))
                }
                Object[s(824)],
                s(795) == typeof SuppressedError && SuppressedError;
                function ht(r, p) {
                    return new Promise(function(a) {
                        return setTimeout(a, r, p)
                    }
                    )
                }
                function ot(r) {
                    var p = s;
                    return !!r && p(795) == typeof r.then
                }
                function dt(r, p) {
                    var a = s;
                    try {
                        var n = r();
                        ot(n) ? n[a(622)](function(h) {
                            return p(!0, h)
                        }, function(h) {
                            return p(!1, h)
                        }) : p(!0, n)
                    } catch (h) {
                        p(!1, h)
                    }
                }
                function Tt(r, p, a) {
                    return a === void 0 && (a = 16),
                    lt(this, void 0, void 0, function() {
                        var n, h, l, m;
                        return It(this, function(w) {
                            var k = q;
                            switch (w.label) {
                            case 0:
                                n = Array(r[k(619)]),
                                h = Date.now(),
                                l = 0,
                                w[k(398)] = 1;
                            case 1:
                                return l < r.length ? (n[l] = p(r[l], l),
                                (m = Date[k(660)]()) >= h + a ? (h = m,
                                [4, ht(0)]) : [3, 3]) : [3, 4];
                            case 2:
                                w[k(1039)](),
                                w[k(398)] = 3;
                            case 3:
                                return ++l,
                                [3, 1];
                            case 4:
                                return [2, n]
                            }
                        })
                    })
                }
                function xt(r) {
                    var p = s;
                    r[p(622)](void 0, function() {})
                }
                function rt(r, p) {
                    r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]],
                    p = [p[0] >>> 16, 65535 & p[0], p[1] >>> 16, 65535 & p[1]];
                    var a = [0, 0, 0, 0];
                    return a[3] += r[3] + p[3],
                    a[2] += a[3] >>> 16,
                    a[3] &= 65535,
                    a[2] += r[2] + p[2],
                    a[1] += a[2] >>> 16,
                    a[2] &= 65535,
                    a[1] += r[1] + p[1],
                    a[0] += a[1] >>> 16,
                    a[1] &= 65535,
                    a[0] += r[0] + p[0],
                    a[0] &= 65535,
                    [a[0] << 16 | a[1], a[2] << 16 | a[3]]
                }
                function bt(r, p) {
                    r = [r[0] >>> 16, 65535 & r[0], r[1] >>> 16, 65535 & r[1]],
                    p = [p[0] >>> 16, 65535 & p[0], p[1] >>> 16, 65535 & p[1]];
                    var a = [0, 0, 0, 0];
                    return a[3] += r[3] * p[3],
                    a[2] += a[3] >>> 16,
                    a[3] &= 65535,
                    a[2] += r[2] * p[3],
                    a[1] += a[2] >>> 16,
                    a[2] &= 65535,
                    a[2] += r[3] * p[2],
                    a[1] += a[2] >>> 16,
                    a[2] &= 65535,
                    a[1] += r[1] * p[3],
                    a[0] += a[1] >>> 16,
                    a[1] &= 65535,
                    a[1] += r[2] * p[2],
                    a[0] += a[1] >>> 16,
                    a[1] &= 65535,
                    a[1] += r[3] * p[1],
                    a[0] += a[1] >>> 16,
                    a[1] &= 65535,
                    a[0] += r[0] * p[3] + r[1] * p[2] + r[2] * p[1] + r[3] * p[0],
                    a[0] &= 65535,
                    [a[0] << 16 | a[1], a[2] << 16 | a[3]]
                }
                function H(r, p) {
                    return (p %= 64) == 32 ? [r[1], r[0]] : p < 32 ? [r[0] << p | r[1] >>> 32 - p, r[1] << p | r[0] >>> 32 - p] : (p -= 32,
                    [r[1] << p | r[0] >>> 32 - p, r[0] << p | r[1] >>> 32 - p])
                }
                function N(r, p) {
                    return (p %= 64) == 0 ? r : p < 32 ? [r[0] << p | r[1] >>> 32 - p, r[1] << p] : [r[1] << p - 32, 0]
                }
                function O(r, p) {
                    return [r[0] ^ p[0], r[1] ^ p[1]]
                }
                function F(r) {
                    return r = O(r, [0, r[0] >>> 1]),
                    r = O(r = bt(r, [4283543511, 3981806797]), [0, r[0] >>> 1]),
                    O(r = bt(r, [3301882366, 444984403]), [0, r[0] >>> 1])
                }
                function Ft(r) {
                    return parseInt(r)
                }
                function Ct(r) {
                    return parseFloat(r)
                }
                function _t(r, p) {
                    var a = s;
                    return a(516) == typeof r && isNaN(r) ? p : r
                }
                function vt(r) {
                    var p = s;
                    return r[p(954)](function(a, n) {
                        return a + (n ? 1 : 0)
                    }, 0)
                }
                function Rt(r, p) {
                    var a = s;
                    if (p === void 0 && (p = 1),
                    Math.abs(p) >= 1)
                        return Math[a(741)](r / p) * p;
                    var n = 1 / p;
                    return Math[a(741)](r * n) / n
                }
                function Mt(r) {
                    var p = s;
                    return r && p(1021) == typeof r && p(380)in r ? r : {
                        message: r
                    }
                }
                function Nt(r, p, a) {
                    var n = s
                      , h = Object.keys(r)[n(553)](function(m) {
                        return !function(w, k) {
                            for (var x = q, v = 0, S = w[x(619)]; v < S; ++v)
                                if (w[v] === k)
                                    return !0;
                            return !1
                        }(a, m)
                    })
                      , l = Tt(h, function(m) {
                        return function(w, k) {
                            var x = new Promise(function(v) {
                                var S = q
                                  , V = Date[S(660)]();
                                dt(w[S(405)](null, k), function() {
                                    for (var z = S, tt = [], et = 0; et < arguments[z(619)]; et++)
                                        tt[et] = arguments[et];
                                    var ft = Date[z(660)]() - V;
                                    if (!tt[0])
                                        return v(function() {
                                            return {
                                                error: Mt(tt[1]),
                                                duration: ft
                                            }
                                        });
                                    var mt = tt[1];
                                    if (function(wt) {
                                        var yt = z;
                                        return yt(795) != typeof wt
                                    }(mt))
                                        return v(function() {
                                            return {
                                                value: mt,
                                                duration: ft
                                            }
                                        });
                                    v(function() {
                                        return new Promise(function(wt) {
                                            var yt = q
                                              , kt = Date[yt(660)]();
                                            dt(mt, function() {
                                                for (var St = yt, Dt = [], Ot = 0; Ot < arguments[St(619)]; Ot++)
                                                    Dt[Ot] = arguments[Ot];
                                                var qt = ft + Date[St(660)]() - kt;
                                                if (!Dt[0])
                                                    return wt({
                                                        error: Mt(Dt[1]),
                                                        duration: qt
                                                    });
                                                wt({
                                                    value: Dt[1],
                                                    duration: qt
                                                })
                                            })
                                        }
                                        )
                                    })
                                })
                            }
                            );
                            return xt(x),
                            function() {
                                var v = q;
                                return x[v(622)](function(S) {
                                    return S()
                                })
                            }
                        }(r[m], p)
                    });
                    return xt(l),
                    function() {
                        return lt(this, void 0, void 0, function() {
                            var m, w, k, x;
                            return It(this, function(v) {
                                var S = q;
                                switch (v.label) {
                                case 0:
                                    return [4, l];
                                case 1:
                                    return [4, Tt(v[S(1039)](), function(V) {
                                        var z = V();
                                        return xt(z),
                                        z
                                    })];
                                case 2:
                                    return m = v[S(1039)](),
                                    [4, Promise.all(m)];
                                case 3:
                                    for (w = v[S(1039)](),
                                    k = {},
                                    x = 0; x < h[S(619)]; ++x)
                                        k[h[x]] = w[x];
                                    return [2, k]
                                }
                            })
                        })
                    }
                }
                function Pi() {
                    var r = s
                      , p = window
                      , a = navigator;
                    return vt(["MSCSSMatrix"in p, r(492)in p, r(868)in p, r(455)in a, r(435)in a]) >= 4
                }
                function ve() {
                    var r = s
                      , p = window
                      , a = navigator;
                    return vt([r(757)in a, r(368)in a, a[r(592)][r(466)](r(967)) === 0, r(775)in p, r(532)in p, r(681)in p, r(607)in p]) >= 5
                }
                function Qt() {
                    var r = s
                      , p = window
                      , a = navigator;
                    return vt([r(407)in p, "CSSPrimitiveValue"in p, "Counter"in p, a[r(592)][r(466)](r(1095)) === 0, r(995)in a, r(939)in p]) >= 4
                }
                function ye() {
                    var r = s
                      , p = window;
                    return vt(["safari"in p, !(r(990)in p), !(r(454)in p), !(r(561)in navigator)]) >= 3
                }
                function Za() {
                    var r = s
                      , p = document;
                    return (p[r(1068)] || p[r(747)] || p[r(859)] || p[r(926)])[r(683)](p)
                }
                function Bi() {
                    var r = s
                      , p = ve()
                      , a = function() {
                        var h = q, l, m, w = window;
                        return vt([h(614)in navigator, h(896)in ((m = (l = document[h(425)]) === null || l === void 0 ? void 0 : l[h(697)]) !== null && m !== void 0 ? m : {}), h(1086)in w, h(587)in w, "CSSMozDocumentRule"in w, h(447)in w]) >= 4
                    }();
                    if (!p && !a)
                        return !1;
                    var n = window;
                    return vt([r(760)in n, r(667)in n, p && !("SharedWorker"in n), a && /android/i.test(navigator[r(797)])]) >= 2
                }
                function Li(r) {
                    var p = new Error(r);
                    return p.name = r,
                    p
                }
                function Ai(r, p, a) {
                    var n, h, l;
                    return a === void 0 && (a = 50),
                    lt(this, void 0, void 0, function() {
                        var m, w;
                        return It(this, function(k) {
                            var x = q;
                            switch (k.label) {
                            case 0:
                                m = document,
                                k[x(398)] = 1;
                            case 1:
                                return m[x(433)] ? [3, 3] : [4, ht(a)];
                            case 2:
                                return k[x(1039)](),
                                [3, 1];
                            case 3:
                                w = m[x(1117)](x(784)),
                                k[x(398)] = 4;
                            case 4:
                                return k.trys[x(524)]([4, , 10, 11]),
                                [4, new Promise(function(v, S) {
                                    var V = x
                                      , z = !1
                                      , tt = function() {
                                        z = !0,
                                        v()
                                    };
                                    w[V(813)] = tt,
                                    w[V(608)] = function(mt) {
                                        z = !0,
                                        S(mt)
                                    }
                                    ;
                                    var et = w.style;
                                    et[V(463)]("display", V(1052), V(583)),
                                    et[V(950)] = "absolute",
                                    et[V(678)] = "0",
                                    et[V(610)] = "0",
                                    et[V(375)] = "hidden",
                                    p && V(662)in w ? w[V(662)] = p : w.src = V(440),
                                    m[V(433)][V(910)](w);
                                    var ft = function() {
                                        var mt = V, wt, yt;
                                        z || (((yt = (wt = w[mt(434)]) === null || wt === void 0 ? void 0 : wt.document) === null || yt === void 0 ? void 0 : yt[mt(1083)]) === "complete" ? tt() : setTimeout(ft, 10))
                                    };
                                    ft()
                                }
                                )];
                            case 5:
                                k[x(1039)](),
                                k[x(398)] = 6;
                            case 6:
                                return !((h = (n = w[x(434)]) === null || n === void 0 ? void 0 : n[x(487)]) === null || h === void 0) && h[x(433)] ? [3, 8] : [4, ht(a)];
                            case 7:
                                return k[x(1039)](),
                                [3, 6];
                            case 8:
                                return [4, r(w, w[x(434)])];
                            case 9:
                                return [2, k[x(1039)]()];
                            case 10:
                                return (l = w[x(890)]) === null || l === void 0 || l[x(338)](w),
                                [7];
                            case 11:
                                return [2]
                            }
                        })
                    })
                }
                function Ka(r) {
                    for (var p = s, a = function(v) {
                        for (var S = q, V, z, tt = S(994)[S(710)](v, "'"), et = /^\s*([a-z-]*)(.*)$/i[S(658)](v), ft = et[1] || void 0, mt = {}, wt = /([.:#][\w-]+|\[.+?\])/gi, yt = function(Ot, qt) {
                            var se = S;
                            mt[Ot] = mt[Ot] || [],
                            mt[Ot][se(524)](qt)
                        }; ; ) {
                            var kt = wt[S(658)](et[2]);
                            if (!kt)
                                break;
                            var St = kt[0];
                            switch (St[0]) {
                            case ".":
                                yt("class", St[S(788)](1));
                                break;
                            case "#":
                                yt("id", St[S(788)](1));
                                break;
                            case "[":
                                var Dt = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/[S(658)](St);
                                if (!Dt)
                                    throw new Error(tt);
                                yt(Dt[1], (z = (V = Dt[4]) !== null && V !== void 0 ? V : Dt[5]) !== null && z !== void 0 ? z : "");
                                break;
                            default:
                                throw new Error(tt)
                            }
                        }
                        return [ft, mt]
                    }(r), n = a[0], h = a[1], l = document[p(1117)](n ?? p(500)), m = 0, w = Object[p(510)](h); m < w[p(619)]; m++) {
                        var k = w[m]
                          , x = h[k].join(" ");
                        p(697) === k ? Ja(l[p(697)], x) : l[p(848)](k, x)
                    }
                    return l
                }
                function Ja(r, p) {
                    for (var a = s, n = 0, h = p[a(1085)](";"); n < h[a(619)]; n++) {
                        var l = h[n]
                          , m = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/[a(658)](l);
                        if (m) {
                            var w = m[1]
                              , k = m[2]
                              , x = m[4];
                            r[a(463)](w, k, x || "")
                        }
                    }
                }
                var $t = [s(1e3), "sans-serif", "serif"]
                  , _i = [s(761), s(613), s(400), "Arabic Typesetting", s(1045), "AvantGarde Bk BT", s(1155), s(346), "Bitstream Vera Sans Mono", s(423), "Century", s(560), s(727), s(959), s(680), s(599), "Futura Md BT", s(507), "Gill Sans", s(575), s(1047), "Helvetica Neue", s(389), s(871), s(852), s(402), s(897), s(685), s(378), "MS Mincho", s(422), s(849), s(480), s(379), s(677), s(978), s(416), s(372), s(986), s(1092), s(981), "Pristina", s(1099), s(1139), s(413), "SimHei", "Small Fonts", s(822), "TRAJAN PRO", s(911), "Vrinda", s(431)];
                function be(r) {
                    var p = s;
                    return r[p(722)]()
                }
                var ie, we;
                function ke() {
                    var r = s
                      , p = screen;
                    return [_t(Ct(p.availTop), null), _t(Ct(p.width) - Ct(p.availWidth) - _t(Ct(p[r(351)]), 0), null), _t(Ct(p[r(750)]) - Ct(p[r(485)]) - _t(Ct(p.availTop), 0), null), _t(Ct(p.availLeft), null)]
                }
                function Ie(r) {
                    for (var p = 0; p < 4; ++p)
                        if (r[p])
                            return !1;
                    return !0
                }
                function Xa(r) {
                    var p;
                    return lt(this, void 0, void 0, function() {
                        var a, n, h, l, m, w, k;
                        return It(this, function(x) {
                            var v = q;
                            switch (x[v(398)]) {
                            case 0:
                                for (a = document,
                                n = a[v(1117)]("div"),
                                h = new Array(r[v(619)]),
                                l = {},
                                Gi(n),
                                k = 0; k < r[v(619)]; ++k)
                                    v(1157) === (m = Ka(r[k]))[v(646)] && m.show(),
                                    Gi(w = a.createElement(v(500))),
                                    w[v(910)](m),
                                    n.appendChild(w),
                                    h[k] = m;
                                x[v(398)] = 1;
                            case 1:
                                return a[v(433)] ? [3, 3] : [4, ht(50)];
                            case 2:
                                return x[v(1039)](),
                                [3, 1];
                            case 3:
                                a.body.appendChild(n);
                                try {
                                    for (k = 0; k < r[v(619)]; ++k)
                                        h[k].offsetParent || (l[r[k]] = !0)
                                } finally {
                                    (p = n.parentNode) === null || p === void 0 || p[v(338)](n)
                                }
                                return [2, l]
                            }
                        })
                    })
                }
                function Gi(r) {
                    var p = s;
                    r.style[p(463)](p(878), p(1052), p(583))
                }
                function Ri(r) {
                    var p = s;
                    return matchMedia("(inverted-colors: "[p(710)](r, ")")).matches
                }
                function Mi(r) {
                    var p = s;
                    return matchMedia(p(778)[p(710)](r, ")")).matches
                }
                function jt(r) {
                    var p = s;
                    return matchMedia("(prefers-contrast: "[p(710)](r, ")"))[p(1014)]
                }
                function Oi(r) {
                    var p = s;
                    return matchMedia(p(881)[p(710)](r, ")"))[p(1014)]
                }
                function Hi(r) {
                    var p = s;
                    return matchMedia("(dynamic-range: "[p(710)](r, ")"))[p(1014)]
                }
                var ut = Math
                  , Pt = function() {
                    return 0
                }
                  , De = {
                    default: [],
                    apple: [{
                        font: s(639)
                    }],
                    serif: [{
                        fontFamily: "serif"
                    }],
                    sans: [{
                        fontFamily: "sans-serif"
                    }],
                    mono: [{
                        fontFamily: s(1e3)
                    }],
                    min: [{
                        fontSize: s(782)
                    }],
                    system: [{
                        fontFamily: s(1017)
                    }]
                }
                  , Qa = {
                    fonts: function() {
                        return Ai(function(r, p) {
                            var a = q
                              , n = p.document
                              , h = n[a(433)];
                            h[a(697)][a(1043)] = a(796);
                            var l = n[a(1117)](a(500))
                              , m = {}
                              , w = {}
                              , k = function(V) {
                                var z = a
                                  , tt = n[z(1117)](z(397))
                                  , et = tt[z(697)];
                                return et[z(950)] = z(637),
                                et[z(678)] = "0",
                                et[z(610)] = "0",
                                et.fontFamily = V,
                                tt[z(419)] = z(1148),
                                l.appendChild(tt),
                                tt
                            }
                              , x = $t[a(732)](k)
                              , v = function() {
                                for (var V = a, z = {}, tt = function(mt) {
                                    var wt = q;
                                    z[mt] = $t[wt(732)](function(yt) {
                                        return function(kt, St) {
                                            var Dt = q;
                                            return k("'"[Dt(710)](kt, "',")[Dt(710)](St))
                                        }(mt, yt)
                                    })
                                }, et = 0, ft = _i; et < ft[V(619)]; et++)
                                    tt(ft[et]);
                                return z
                            }();
                            h.appendChild(l);
                            for (var S = 0; S < $t[a(619)]; S++)
                                m[$t[S]] = x[S][a(840)],
                                w[$t[S]] = x[S][a(1082)];
                            return _i[a(553)](function(V) {
                                return z = v[V],
                                $t.some(function(tt, et) {
                                    var ft = q;
                                    return z[et][ft(840)] !== m[tt] || z[et][ft(1082)] !== w[tt]
                                });
                                var z
                            })
                        })
                    },
                    domBlockers: function(r) {
                        var p = s
                          , a = (r === void 0 ? {} : r)[p(633)];
                        return lt(this, void 0, void 0, function() {
                            var n, h, l, m, w;
                            return It(this, function(k) {
                                var x = q;
                                switch (k[x(398)]) {
                                case 0:
                                    return Qt() || Bi() ? (v = atob,
                                    n = {
                                        abpIndo: [x(462), x(408), "#SidebarIklan-wrapper", x(655), v(x(1069))],
                                        abpvn: [x(1109), x(1019), v(x(517)), '[id^="bn_bottom_fixed_"]', x(936)],
                                        adBlockFinland: [x(887), v(x(623)), ".ylamainos", v(x(809)), v(x(1121))],
                                        adBlockPersian: [x(1034), x(798), 'TABLE[width="140px"]', x(530), v("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                                        adBlockWarningRemoval: [x(821), x(465), ".wp_adblock_detect", v(x(439)), v(x(826))],
                                        adGuardAnnoyances: [x(1094), x(337), x(862), x(1072), x(923)],
                                        adGuardBase: [".BetterJsPopOverlay", v(x(476)), v("I2Jhbm5lcmZsb2F0MjI="), v("I2NhbXBhaWduLWJhbm5lcg=="), v("I0FkLUNvbnRlbnQ=")],
                                        adGuardChinese: [v(x(858)), v(x(1077)), "#widget-quan", v(x(411)), v("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                                        adGuardFrench: ["#pavePub", v(x(980)), x(838), x(441), v(x(781))],
                                        adGuardGerman: [x(341)],
                                        adGuardJapanese: [x(763), v(x(1037)), v(x(971)), v(x(1028)), v(x(965))],
                                        adGuardMobile: [v(x(1124)), v("LmFtcF9hZA=="), x(803), "#mgid_iframe1", v(x(844))],
                                        adGuardRussian: [v(x(717)), v(x(503)), x(725), v(x(1106)), x(1151)],
                                        adGuardSocial: [v(x(406)), v("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), x(689), "#inlineShare", ".popup-social"],
                                        adGuardSpanishPortuguese: [x(987), x(786), x(1064), x(396), ".cnt-publi"],
                                        adGuardTrackingProtection: [x(352), v(x(576)), v(x(934)), v("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), x(502)],
                                        adGuardTurkish: [x(1070), v(x(1035)), v(x(927)), v(x(515)), v(x(892))],
                                        bulgarian: [v(x(1010)), "#ea_intext_div", x(612), x(1118)],
                                        easyList: [x(1063), v(x(794)), v(x(534)), x(339), v(x(654))],
                                        easyListChina: [v(x(479)), v(x(886)), x(1134), x(1061), x(345)],
                                        easyListCookie: [".ezmob-footer", x(827), x(945), v(x(521)), x(738)],
                                        easyListCzechSlovak: [x(626), v("I3Jla2xhbW5pLWJveA=="), v(x(661)), x(1056), v(x(361))],
                                        easyListDutch: [v(x(523)), v("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), x(751), v(x(581)), x(694)],
                                        easyListGermany: ["#SSpotIMPopSlider", v(x(1078)), v(x(426)), v(x(611)), v(x(1089))],
                                        easyListItaly: [v(x(1111)), ".sb-box-pubbliredazionale", v("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), v("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), v("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                        easyListLithuania: [v(x(899)), v(x(591)), v(x(938)), v("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), v(x(446))],
                                        estonian: [v(x(1049))],
                                        fanboyAnnoyances: [x(625), x(1133), x(1146), x(903), "#back-top"],
                                        fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                        fanboyEnhancedTrackers: [x(1100), x(475), x(451), x(744), x(541)],
                                        fanboySocial: ["#FollowUs", "#meteored_share", x(442), x(460), ".community__social-desc"],
                                        frellwitSwedish: [v(x(831)), v(x(759)), "article.category-samarbete", v("ZGl2LmhvbGlkQWRz"), x(343)],
                                        greekAdBlock: [v("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), v(x(577)), v(x(1075)), "DIV.agores300", x(417)],
                                        hungarian: [x(562), x(748), v(x(1032)), v(x(816)), "#hirdetesek_box"],
                                        iDontCareAboutCookies: [x(686), x(544), ".o--cookies--container", x(459), x(979)],
                                        icelandicAbp: [v(x(427))],
                                        latvian: [v("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), v(x(428))],
                                        listKr: [v(x(957)), v(x(499)), v(x(1038)), v(x(609)), ".revenue_unit_item.dable"],
                                        listeAr: [v(x(972)), ".right-and-left-sponsers", v(x(1012)), v(x(643)), v(x(457))],
                                        listeFr: [v("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), v(x(1027)), v(x(617)), x(883), x(768)],
                                        officialPolish: [x(542), v(x(804)), v(x(930)), v(x(573)), v(x(578))],
                                        ro: [v(x(537)), v(x(702)), v(x(853)), v("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                                        ruAd: [v(x(783)), v(x(730)), v(x(512)), x(543), x(1054)],
                                        thaiAds: [x(1154), v(x(395)), v(x(675)), x(1041), x(635)],
                                        webAnnoyancesUltralist: [x(745), x(1079), v(x(636)), x(1090), x(570)]
                                    },
                                    h = Object[x(510)](n),
                                    [4, Xa((w = [])[x(710)][x(929)](w, h[x(732)](function(S) {
                                        return n[S]
                                    })))]) : [2, void 0];
                                case 1:
                                    return l = k[x(1039)](),
                                    a && function(S, V) {
                                        for (var z = x, tt = z(1067), et = 0, ft = Object.keys(S); et < ft.length; et++) {
                                            var mt = ft[et];
                                            tt += `
`.concat(mt, ":");
                                            for (var wt = 0, yt = S[mt]; wt < yt[z(619)]; wt++) {
                                                var kt = yt[wt];
                                                tt += z(473)[z(710)](V[kt] ? "\u{1F6AB}" : "\u27A1\uFE0F", " ")[z(710)](kt)
                                            }
                                        }
                                        console[z(394)](""[z(710)](tt, z(1046)))
                                    }(n, l),
                                    (m = h[x(553)](function(S) {
                                        var V = x
                                          , z = n[S];
                                        return vt(z[V(732)](function(tt) {
                                            return l[tt]
                                        })) > .6 * z[V(619)]
                                    }))[x(588)](),
                                    [2, m]
                                }
                                var v
                            })
                        })
                    },
                    fontPreferences: function() {
                        var r = s;
                        return p === void 0 && (p = 4e3),
                        Ai(function(a, n) {
                            var h = q
                              , l = n[h(487)]
                              , m = l[h(433)]
                              , w = m[h(697)];
                            w[h(1040)] = "".concat(p, "px"),
                            w[h(640)] = w[h(806)] = h(1140),
                            ve() ? m[h(697)][h(385)] = "".concat(1 / n[h(489)]) : Qt() && (m[h(697)][h(385)] = "reset");
                            var k = l.createElement(h(500));
                            return k[h(419)] = Wt([], Array(p / 20 << 0), !0)[h(732)](function() {
                                var x = h;
                                return x(594)
                            })[h(765)](" "),
                            m[h(910)](k),
                            function(x, v) {
                                for (var S = h, V = {}, z = {}, tt = 0, et = Object[S(510)](De); tt < et[S(619)]; tt++) {
                                    var ft = et[tt]
                                      , mt = De[ft]
                                      , wt = mt[0]
                                      , yt = wt === void 0 ? {} : wt
                                      , kt = mt[1]
                                      , St = kt === void 0 ? "mmMwWLliI0fiflO&1" : kt
                                      , Dt = x.createElement("span");
                                    Dt[S(419)] = St,
                                    Dt.style[S(703)] = S(620);
                                    for (var Ot = 0, qt = Object[S(510)](yt); Ot < qt[S(619)]; Ot++) {
                                        var se = qt[Ot]
                                          , qi = yt[se];
                                        qi !== void 0 && (Dt[S(697)][se] = qi)
                                    }
                                    V[ft] = Dt,
                                    v[S(910)](x[S(1117)]("br")),
                                    v[S(910)](Dt)
                                }
                                for (var Se = 0, zi = Object[S(510)](De); Se < zi[S(619)]; Se++)
                                    z[ft = zi[Se]] = V[ft][S(390)]()[S(1040)];
                                return z
                            }(l, m)
                        }, r(1105));
                        var p
                    },
                    audio: function() {
                        var r = s
                          , p = window
                          , a = p[r(571)] || p.webkitOfflineAudioContext;
                        if (!a)
                            return -2;
                        if (Qt() && !ye() && !function() {
                            var v = r
                              , S = window;
                            return vt(["DOMRectList"in S, v(812)in S, v(388)in S, v(529)in S]) >= 3
                        }())
                            return -1;
                        var n = new a(1,5e3,44100)
                          , h = n[r(991)]();
                        h[r(497)] = r(493),
                        h[r(669)][r(1071)] = 1e4;
                        var l = n[r(1081)]();
                        l[r(347)][r(1071)] = -50,
                        l.knee.value = 40,
                        l.ratio[r(1071)] = 12,
                        l[r(983)][r(1071)] = 0,
                        l.release[r(1071)] = .25,
                        h.connect(l),
                        l[r(381)](n[r(369)]),
                        h[r(1149)](0);
                        var m = function(v) {
                            var S = function() {};
                            return [new Promise(function(V, z) {
                                var tt = q
                                  , et = !1
                                  , ft = 0
                                  , mt = 0;
                                v[tt(481)] = function(kt) {
                                    var St = tt;
                                    return V(kt[St(1143)])
                                }
                                ;
                                var wt = function() {
                                    var kt = tt;
                                    setTimeout(function() {
                                        var St = q;
                                        return z(Li(St(894)))
                                    }, Math[kt(360)](500, mt + 5e3 - Date[kt(660)]()))
                                }
                                  , yt = function() {
                                    var kt = tt;
                                    try {
                                        var St = v.startRendering();
                                        switch (ot(St) && xt(St),
                                        v.state) {
                                        case "running":
                                            mt = Date[kt(660)](),
                                            et && wt();
                                            break;
                                        case kt(1110):
                                            document[kt(946)] || ft++,
                                            et && ft >= 3 ? z(Li(kt(1110))) : setTimeout(yt, 500)
                                        }
                                    } catch (Dt) {
                                        z(Dt)
                                    }
                                };
                                yt(),
                                S = function() {
                                    et || (et = !0,
                                    mt > 0 && wt())
                                }
                            }
                            ), S]
                        }(n)
                          , w = m[0]
                          , k = m[1]
                          , x = w.then(function(v) {
                            var S = r;
                            return function(V) {
                                for (var z = q, tt = 0, et = 0; et < V.length; ++et)
                                    tt += Math[z(615)](V[et]);
                                return tt
                            }(v.getChannelData(0)[S(350)](4500))
                        }, function(v) {
                            var S = r;
                            if (v[S(618)] === "timeout" || S(1110) === v[S(618)])
                                return -3;
                            throw v
                        });
                        return xt(x),
                        function() {
                            return k(),
                            x
                        }
                    },
                    screenFrame: function() {
                        var r = this
                          , p = function() {
                            var a = this;
                            return function() {
                                if (we === void 0) {
                                    var n = function() {
                                        var h = ke();
                                        Ie(h) ? we = setTimeout(n, 2500) : (ie = h,
                                        we = void 0)
                                    };
                                    n()
                                }
                            }(),
                            function() {
                                return lt(a, void 0, void 0, function() {
                                    var n;
                                    return It(this, function(h) {
                                        var l = q;
                                        switch (h.label) {
                                        case 0:
                                            return Ie(n = ke()) ? ie ? [2, Wt([], ie, !0)] : (m = document)[l(772)] || m[l(531)] || m[l(354)] || m[l(1001)] ? [4, Za()] : [3, 2] : [3, 2];
                                        case 1:
                                            h[l(1039)](),
                                            n = ke(),
                                            h[l(398)] = 2;
                                        case 2:
                                            return Ie(n) || (ie = n),
                                            [2, n]
                                        }
                                        var m
                                    })
                                })
                            }
                        }();
                        return function() {
                            return lt(r, void 0, void 0, function() {
                                var a, n;
                                return It(this, function(h) {
                                    var l = q;
                                    switch (h[l(398)]) {
                                    case 0:
                                        return [4, p()];
                                    case 1:
                                        return a = h[l(1039)](),
                                        [2, [(n = function(m) {
                                            return m === null ? null : Rt(m, 10)
                                        }
                                        )(a[0]), n(a[1]), n(a[2]), n(a[3])]]
                                    }
                                })
                            })
                        }
                    },
                    osCpu: function() {
                        var r = s;
                        return navigator[r(509)]
                    },
                    languages: function() {
                        var r = s, p, a = navigator, n = [], h = a[r(740)] || a[r(944)] || a[r(880)] || a[r(1060)];
                        if (h !== void 0 && n[r(524)]([h]),
                        Array[r(651)](a[r(665)]))
                            ve() && vt([!("MediaSettingsRange"in (p = window)), r(949)in p, "" + p[r(1153)] == "[object Intl]", "" + p.Reflect == r(1080)]) >= 3 || n[r(524)](a[r(665)]);
                        else if (r(963) == typeof a[r(665)]) {
                            var l = a[r(665)];
                            l && n[r(524)](l[r(1085)](","))
                        }
                        return n
                    },
                    colorDepth: function() {
                        return window.screen.colorDepth
                    },
                    deviceMemory: function() {
                        var r = s;
                        return _t(Ct(navigator[r(421)]), void 0)
                    },
                    screenResolution: function() {
                        var r = s
                          , p = screen
                          , a = function(h) {
                            return _t(Ft(h), null)
                        }
                          , n = [a(p.width), a(p[r(750)])];
                        return n.sort()[r(376)](),
                        n
                    },
                    hardwareConcurrency: function() {
                        var r = s;
                        return _t(Ft(navigator[r(356)]), void 0)
                    },
                    timezone: function() {
                        var r = s, p, a = (p = window[r(1153)]) === null || p === void 0 ? void 0 : p.DateTimeFormat;
                        if (a) {
                            var n = new a()[r(355)]().timeZone;
                            if (n)
                                return n
                        }
                        var h, l = (h = new Date().getFullYear(),
                        -Math[r(498)](Ct(new Date(h,0,1).getTimezoneOffset()), Ct(new Date(h,6,1).getTimezoneOffset())));
                        return r(829)[r(710)](l >= 0 ? "+" : "")[r(710)](Math.abs(l))
                    },
                    sessionStorage: function() {
                        var r = s;
                        try {
                            return !!window[r(429)]
                        } catch {
                            return !0
                        }
                    },
                    localStorage: function() {
                        var r = s;
                        try {
                            return !!window[r(452)]
                        } catch {
                            return !0
                        }
                    },
                    indexedDB: function() {
                        var r = s, p, a;
                        if (!(Pi() || (p = window,
                        a = navigator,
                        vt([r(377)in p, r(554)in p, r(520)in a, r(731)in a]) >= 3 && !Pi())))
                            try {
                                return !!window[r(584)]
                            } catch {
                                return !0
                            }
                    },
                    openDatabase: function() {
                        var r = s;
                        return !!window[r(593)]
                    },
                    cpuClass: function() {
                        return navigator.cpuClass
                    },
                    platform: function() {
                        var r = s
                          , p = navigator[r(448)];
                        return r(549) === p && Qt() && !ye() ? function() {
                            var a = r;
                            if (a(974) === navigator[a(448)])
                                return !0;
                            var n = screen
                              , h = n[a(1040)] / n[a(750)];
                            return vt([a(764)in window, !!Element[a(808)][a(820)], h > .65 && h < 1.53]) >= 2
                        }() ? r(974) : "iPhone" : p
                    },
                    plugins: function() {
                        var r = s
                          , p = navigator[r(483)];
                        if (p) {
                            for (var a = [], n = 0; n < p.length; ++n) {
                                var h = p[n];
                                if (h) {
                                    for (var l = [], m = 0; m < h.length; ++m) {
                                        var w = h[m];
                                        l[r(524)]({
                                            type: w.type,
                                            suffixes: w[r(754)]
                                        })
                                    }
                                    a[r(524)]({
                                        name: h.name,
                                        description: h[r(491)],
                                        mimeTypes: l
                                    })
                                }
                            }
                            return a
                        }
                    },
                    canvas: function() {
                        var r, p, a = !1, n = function() {
                            var w = q
                              , k = document.createElement(w(362));
                            return k.width = 1,
                            k[w(750)] = 1,
                            [k, k[w(931)]("2d")]
                        }(), h = n[0], l = n[1];
                        if (function(w, k) {
                            var x = q;
                            return !(!k || !w[x(722)])
                        }(h, l)) {
                            a = function(w) {
                                var k = q;
                                return w[k(743)](0, 0, 10, 10),
                                w[k(743)](2, 2, 6, 6),
                                !w[k(879)](5, 5, k(598))
                            }(l),
                            function(w, k) {
                                var x = q;
                                w[x(1040)] = 240,
                                w[x(750)] = 60,
                                k[x(569)] = x(753),
                                k[x(597)] = x(696),
                                k[x(370)](100, 1, 62, 20),
                                k[x(597)] = x(876),
                                k[x(501)] = '11pt "Times New Roman"';
                                var v = "Cwm fjordbank gly "[x(710)](String[x(693)](55357, 56835));
                                k[x(847)](v, 2, 15),
                                k[x(597)] = x(348),
                                k.font = x(386),
                                k[x(847)](v, 4, 45)
                            }(h, l);
                            var m = be(h);
                            m !== be(h) ? r = p = "unstable" : (p = m,
                            function(w, k) {
                                var x = q;
                                w[x(1040)] = 122,
                                w[x(750)] = 110,
                                k[x(960)] = x(674);
                                for (var v = 0, S = [[x(714), 40, 40], [x(1048), 80, 40], [x(545), 60, 80]]; v < S[x(619)]; v++) {
                                    var V = S[v]
                                      , z = V[0]
                                      , tt = V[1]
                                      , et = V[2];
                                    k[x(597)] = z,
                                    k[x(932)](),
                                    k[x(834)](tt, et, 40, 0, 2 * Math.PI, !0),
                                    k.closePath(),
                                    k[x(901)]()
                                }
                                k.fillStyle = "#f9c",
                                k[x(834)](60, 60, 60, 0, 2 * Math.PI, !0),
                                k[x(834)](60, 60, 20, 0, 2 * Math.PI, !0),
                                k[x(901)](x(598))
                            }(h, l),
                            r = be(h))
                        } else
                            r = p = "";
                        return {
                            winding: a,
                            geometry: r,
                            text: p
                        }
                    },
                    touchSupport: function() {
                        var r = s, p, a = navigator, n = 0;
                        a[r(572)] !== void 0 ? n = Ft(a.maxTouchPoints) : a.msMaxTouchPoints !== void 0 && (n = a[r(455)]);
                        try {
                            document[r(374)](r(1108)),
                            p = !0
                        } catch {
                            p = !1
                        }
                        return {
                            maxTouchPoints: n,
                            touchEvent: p,
                            touchStart: "ontouchstart"in window
                        }
                    },
                    vendor: function() {
                        var r = s;
                        return navigator[r(592)] || ""
                    },
                    vendorFlavors: function() {
                        for (var r = s, p = [], a = 0, n = ["chrome", "safari", r(1020), r(739), r(695), r(688), "__ybro", r(551), "__edgeTrackingPreventionStatistics", "webkit", r(992), r(1116), r(1107), r(839), r(506)]; a < n[r(619)]; a++) {
                            var h = n[a]
                              , l = window[h];
                            l && r(1021) == typeof l && p.push(h)
                        }
                        return p[r(588)]()
                    },
                    cookiesEnabled: function() {
                        var r = s
                          , p = document;
                        try {
                            p.cookie = r(870);
                            var a = p[r(634)][r(466)](r(364)) !== -1;
                            return p.cookie = r(711),
                            a
                        } catch {
                            return !1
                        }
                    },
                    colorGamut: function() {
                        for (var r = s, p = 0, a = [r(900), "p3", r(895)]; p < a[r(619)]; p++) {
                            var n = a[p];
                            if (matchMedia(r(885).concat(n, ")"))[r(1014)])
                                return n
                        }
                    },
                    invertedColors: function() {
                        var r = s;
                        return !!Ri(r(1059)) || !Ri(r(1140)) && void 0
                    },
                    forcedColors: function() {
                        var r = s;
                        return !!Mi(r(470)) || !Mi(r(1140)) && void 0
                    },
                    monochrome: function() {
                        var r = s;
                        if (matchMedia("(min-monochrome: 0)")[r(1014)]) {
                            for (var p = 0; p <= 100; ++p)
                                if (matchMedia(r(802)[r(710)](p, ")")).matches)
                                    return p;
                            throw new Error("Too high value")
                        }
                    },
                    contrast: function() {
                        var r = s;
                        return jt(r(410)) ? 0 : jt(r(552)) || jt("more") ? 1 : jt(r(716)) || jt(r(882)) ? -1 : jt(r(631)) ? 10 : void 0
                    },
                    reducedMotion: function() {
                        var r = s;
                        return !!Oi(r(954)) || !Oi(r(410)) && void 0
                    },
                    hdr: function() {
                        var r = s;
                        return !!Hi(r(552)) || !Hi(r(906)) && void 0
                    },
                    math: function() {
                        var r = s, p, a = ut.acos || Pt, n = ut[r(850)] || Pt, h = ut[r(1096)] || Pt, l = ut[r(872)] || Pt, m = ut[r(875)] || Pt, w = ut.atan || Pt, k = ut[r(1062)] || Pt, x = ut.sinh || Pt, v = ut.cos || Pt, S = ut[r(496)] || Pt, V = ut.tan || Pt, z = ut.tanh || Pt, tt = ut[r(559)] || Pt, et = ut[r(477)] || Pt, ft = ut[r(365)] || Pt;
                        return {
                            acos: a(.12312423423423424),
                            acosh: n(1e308),
                            acoshPf: (p = 1e154,
                            ut[r(394)](p + ut.sqrt(p * p - 1))),
                            asin: h(.12312423423423424),
                            asinh: l(1),
                            asinhPf: ut[r(394)](1 + ut[r(430)](2)),
                            atanh: m(.5),
                            atanhPf: ut[r(394)](3) / 2,
                            atan: w(.5),
                            sin: k(-1e300),
                            sinh: x(1),
                            sinhPf: ut[r(559)](1) - 1 / ut[r(559)](1) / 2,
                            cos: v(10.000000000123),
                            cosh: S(1),
                            coshPf: (ut[r(559)](1) + 1 / ut[r(559)](1)) / 2,
                            tan: V(-1e300),
                            tanh: z(1),
                            tanhPf: (ut[r(559)](2) - 1) / (ut[r(559)](2) + 1),
                            exp: tt(1),
                            expm1: et(1),
                            expm1Pf: ut.exp(1) - 1,
                            log1p: ft(10),
                            log1pPf: ut[r(394)](11),
                            powPI: ut.pow(ut.PI, -100)
                        }
                    },
                    videoCard: function() {
                        var r = s, p, a = document.createElement(r(362)), n = (p = a[r(931)](r(864))) !== null && p !== void 0 ? p : a[r(931)](r(720));
                        if (n && r(556)in n) {
                            var h = n[r(556)](r(832));
                            if (h)
                                return {
                                    vendor: (n.getParameter(h.UNMASKED_VENDOR_WEBGL) || "")[r(514)](),
                                    renderer: (n[r(1015)](h.UNMASKED_RENDERER_WEBGL) || "")[r(514)]()
                                }
                        }
                    },
                    pdfViewerEnabled: function() {
                        var r = s;
                        return navigator[r(585)]
                    },
                    architecture: function() {
                        var r = s
                          , p = new Float32Array(1)
                          , a = new Uint8Array(p[r(842)]);
                        return p[0] = 1 / 0,
                        p[0] = p[0] - p[0],
                        a[3]
                    }
                }
                  , Ya = "";
                function tn(r) {
                    var p = s
                      , a = function(h) {
                        var l = q;
                        if (Bi())
                            return .4;
                        if (Qt())
                            return ye() ? .5 : .3;
                        var m = h[l(448)][l(1071)] || "";
                        return /^Win/[l(933)](m) ? .6 : /^Mac/[l(933)](m) ? .5 : .7
                    }(r)
                      , n = function(h) {
                        return Rt(.99 + .01 * h, 1e-4)
                    }(a);
                    return {
                        score: a,
                        comment: Ya.replace(/\$/g, ""[p(710)](n))
                    }
                }
                function Wi(r) {
                    var p = s;
                    return JSON[p(1042)](r, function(a, n) {
                        var h = p;
                        return n instanceof Error ? ct({
                            name: (l = n)[h(618)],
                            message: l[h(380)],
                            stack: (m = l[h(1150)]) === null || m === void 0 ? void 0 : m[h(1085)](`
`)
                        }, l) : n;
                        var l, m
                    }, 2)
                }
                function Ni(r) {
                    return function(p, a) {
                        var n = q;
                        a = a || 0;
                        var h, l = (p = p || "").length % 16, m = p[n(619)] - l, w = [0, a], k = [0, a], x = [0, 0], v = [0, 0], S = [2277735313, 289559509], V = [1291169091, 658871167];
                        for (h = 0; h < m; h += 16)
                            x = [255 & p[n(1005)](h + 4) | (255 & p[n(1005)](h + 5)) << 8 | (255 & p[n(1005)](h + 6)) << 16 | (255 & p[n(1005)](h + 7)) << 24, 255 & p[n(1005)](h) | (255 & p.charCodeAt(h + 1)) << 8 | (255 & p.charCodeAt(h + 2)) << 16 | (255 & p[n(1005)](h + 3)) << 24],
                            v = [255 & p[n(1005)](h + 12) | (255 & p[n(1005)](h + 13)) << 8 | (255 & p.charCodeAt(h + 14)) << 16 | (255 & p[n(1005)](h + 15)) << 24, 255 & p[n(1005)](h + 8) | (255 & p[n(1005)](h + 9)) << 8 | (255 & p[n(1005)](h + 10)) << 16 | (255 & p[n(1005)](h + 11)) << 24],
                            x = H(x = bt(x, S), 31),
                            w = rt(w = H(w = O(w, x = bt(x, V)), 27), k),
                            w = rt(bt(w, [0, 5]), [0, 1390208809]),
                            v = H(v = bt(v, V), 33),
                            k = rt(k = H(k = O(k, v = bt(v, S)), 31), w),
                            k = rt(bt(k, [0, 5]), [0, 944331445]);
                        switch (x = [0, 0],
                        v = [0, 0],
                        l) {
                        case 15:
                            v = O(v, N([0, p[n(1005)](h + 14)], 48));
                        case 14:
                            v = O(v, N([0, p[n(1005)](h + 13)], 40));
                        case 13:
                            v = O(v, N([0, p[n(1005)](h + 12)], 32));
                        case 12:
                            v = O(v, N([0, p[n(1005)](h + 11)], 24));
                        case 11:
                            v = O(v, N([0, p[n(1005)](h + 10)], 16));
                        case 10:
                            v = O(v, N([0, p[n(1005)](h + 9)], 8));
                        case 9:
                            v = bt(v = O(v, [0, p.charCodeAt(h + 8)]), V),
                            k = O(k, v = bt(v = H(v, 33), S));
                        case 8:
                            x = O(x, N([0, p[n(1005)](h + 7)], 56));
                        case 7:
                            x = O(x, N([0, p.charCodeAt(h + 6)], 48));
                        case 6:
                            x = O(x, N([0, p[n(1005)](h + 5)], 40));
                        case 5:
                            x = O(x, N([0, p[n(1005)](h + 4)], 32));
                        case 4:
                            x = O(x, N([0, p[n(1005)](h + 3)], 24));
                        case 3:
                            x = O(x, N([0, p[n(1005)](h + 2)], 16));
                        case 2:
                            x = O(x, N([0, p.charCodeAt(h + 1)], 8));
                        case 1:
                            x = bt(x = O(x, [0, p[n(1005)](h)]), S),
                            w = O(w, x = bt(x = H(x, 31), V))
                        }
                        return w = rt(w = O(w, [0, p[n(619)]]), k = O(k, [0, p[n(619)]])),
                        k = rt(k, w),
                        w = rt(w = F(w), k = F(k)),
                        k = rt(k, w),
                        (n(1065) + (w[0] >>> 0)[n(514)](16))[n(788)](-8) + (n(1065) + (w[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (k[0] >>> 0)[n(514)](16))[n(788)](-8) + (n(1065) + (k[1] >>> 0)[n(514)](16))[n(788)](-8)
                    }(function(p) {
                        for (var a = q, n = "", h = 0, l = Object.keys(p)[a(588)](); h < l[a(619)]; h++) {
                            var m = l[h]
                              , w = p[m]
                              , k = w[a(799)] ? a(799) : JSON[a(1042)](w[a(1071)]);
                            n += ""[a(710)](n ? "|" : "").concat(m[a(861)](/([:|\\])/g, a(920)), ":")[a(710)](k)
                        }
                        return n
                    }(r))
                }
                function en(r) {
                    return r === void 0 && (r = 50),
                    function(p, a) {
                        var n = q;
                        a === void 0 && (a = 1 / 0);
                        var h = window[n(533)];
                        return h ? new Promise(function(l) {
                            return h.call(window, function() {
                                return l()
                            }, {
                                timeout: a
                            })
                        }
                        ) : ht(Math[n(360)](p, a))
                    }(r, 2 * r)
                }
                function sn(r, p) {
                    var a = s
                      , n = Date[a(660)]();
                    return {
                        get: function(h) {
                            return lt(this, void 0, void 0, function() {
                                var l, m, w;
                                return It(this, function(k) {
                                    var x = q;
                                    switch (k[x(398)]) {
                                    case 0:
                                        return l = Date[x(660)](),
                                        [4, r()];
                                    case 1:
                                        return m = k[x(1039)](),
                                        w = function(v) {
                                            var S = x, V;
                                            return {
                                                get visitorId() {
                                                    var z = q;
                                                    return V === void 0 && (V = Ni(this[z(676)])),
                                                    V
                                                },
                                                set visitorId(z) {
                                                    V = z
                                                },
                                                confidence: tn(v),
                                                components: v,
                                                version: S(420)
                                            }
                                        }(m),
                                        (p || h?.[x(633)]) && console[x(394)]("Copy the text below to get the debug data:\n\n```\nversion: ".concat(w[x(1136)], x(999))[x(710)](navigator[x(671)], `
timeBetweenLoadAndGet: `)[x(710)](l - n, x(928))[x(710)](w[x(855)], x(653))[x(710)](Wi(m), x(1046))),
                                        [2, w]
                                    }
                                })
                            })
                        }
                    }
                }
                var Te, an = {
                    load: function(r) {
                        var p = s
                          , a = r === void 0 ? {} : r
                          , n = a[p(937)]
                          , h = a.debug
                          , l = a[p(785)]
                          , m = l === void 0 || l;
                        return lt(this, void 0, void 0, function() {
                            return It(this, function(w) {
                                var k = q;
                                switch (w[k(398)]) {
                                case 0:
                                    return m && (void 0)(),
                                    [4, en(n)];
                                case 1:
                                    return w[k(1039)](),
                                    [2, sn(Nt(Qa, {
                                        debug: h
                                    }, []), h)]
                                }
                            })
                        })
                    },
                    hashComponents: Ni,
                    componentsToDebugString: Wi
                }, nn = function() {
                    var r = s;
                    function p() {}
                    return p[r(659)] = function() {
                        return lt(this, void 0, void 0, function() {
                            return It(this, function(a) {
                                var n = q;
                                switch (a[n(398)]) {
                                case 0:
                                    return [4, an[n(1055)]({
                                        monitoring: !1
                                    })];
                                case 1:
                                    return [2, a.sent()[n(630)]()]
                                }
                            })
                        })
                    }
                    ,
                    p
                }();
                (function(r) {
                    var p = s;
                    r[p(1044)] = p(478),
                    r[p(673)] = p(538),
                    r.Warn = p(925)
                }
                )(Te || (Te = {}));
                var Vi = function() {
                    var r = s;
                    function p(a) {
                        var n = q;
                        this[n(504)] = a,
                        this[n(823)] = null,
                        this[n(652)] = null,
                        this.config.context = this[n(504)][n(474)] || window,
                        this[n(504)][n(415)] = this.config[n(415)] || 890857896
                    }
                    return p[r(808)][r(409)] = function(a, n, h) {
                        return n === void 0 && (n = ""),
                        h === void 0 && (h = !0),
                        lt(this, void 0, void 0, function() {
                            var l = this;
                            return It(this, function(m) {
                                var w = q;
                                return [2, new Promise(function(k, x) {
                                    var v = q;
                                    if (l[v(652)] && h)
                                        return k(l[v(652)]);
                                    var S = {
                                        instance: l.config.instance,
                                        source: a
                                    }
                                      , V = l[v(504)][v(715)] + v(766);
                                    S[v(1126)] = V,
                                    l.config.context[V] = function(tt) {
                                        var et = v;
                                        return tt.getError() || !tt[et(606)]() && !tt.getExId() ? x(new Error(et(843) + tt[et(915)]())) : k(tt)
                                    }
                                    ,
                                    n !== "" && (S.campaign = n);
                                    var z = f[v(404)](S) + "&" + new Date()[v(985)]();
                                    l.loadScript(z)[v(851)](x)
                                }
                                )[w(622)](function(k) {
                                    var x = w;
                                    return l[x(652)] = k,
                                    k
                                })]
                            })
                        })
                    }
                    ,
                    p.prototype[r(684)] = function(a) {
                        return lt(this, void 0, void 0, function() {
                            var n, h, l, m = this;
                            return It(this, function(w) {
                                var k = q;
                                return this.status ? [2, this.status] : (n = {
                                    instance: this[k(504)][k(415)]
                                },
                                (h = a[k(606)]()) && (n.id = encodeURIComponent(h)),
                                (l = a[k(1023)]()) && (n.exid = encodeURIComponent(l)),
                                [2, new Promise(function(x, v) {
                                    var S = k
                                      , V = new XMLHttpRequest;
                                    V[S(453)](S(535), p[S(708)], !0),
                                    V[S(566)]("Content-type", S(707)),
                                    V[S(813)] = function() {
                                        var z = S, tt;
                                        try {
                                            tt = JSON[z(767)](this[z(1013)])
                                        } catch {
                                            return void v(new Error(z(1101) + this[z(1013)]))
                                        }
                                        tt[z(652)] ? x(tt[z(652)]) : v(new Error("Anura response wrong schema: " + this.response))
                                    }
                                    ,
                                    V.send(f.buildQueryParams(n))
                                }
                                ).then(function(x) {
                                    var v = k;
                                    return m[v(823)] = x,
                                    x
                                })])
                            })
                        })
                    }
                    ,
                    p[r(808)][r(837)] = function(a) {
                        var n = this;
                        return new Promise(function(h, l) {
                            var m = q
                              , w = n[m(504)][m(474)][m(487)].createElement(m(724));
                            w[m(497)] = m(698),
                            w[m(1130)] = !0,
                            w.src = p.REQUEST_URL + "?" + a,
                            w[m(813)] = function() {
                                return h()
                            }
                            ,
                            w.onerror = function() {
                                var k = m;
                                return l(new Error(k(602)))
                            }
                            ,
                            n[m(504)].context[m(487)][m(433)][m(910)](w)
                        }
                        )
                    }
                    ,
                    p[r(973)] = r(1029),
                    p.RESULT_URL = "https://script.anura.io/result.json",
                    p
                }()
                  , Fi = function() {
                    var r = s;
                    function p(a) {
                        var n = q;
                        this[n(504)] = a,
                        this[n(504)].context = this[n(504)].context || window
                    }
                    return p[r(808)][r(409)] = function(a) {
                        var n = r
                          , h = this[n(504)][n(474)].document[n(1117)](n(1113))
                          , l = {
                            clid: p[n(1036)],
                            paid: p[n(1036)],
                            avid: p[n(845)],
                            caid: p[n(845)],
                            plid: a[n(742)],
                            publisherId: a[n(1125)],
                            siteId: a[n(1008)],
                            kv1: a[n(863)],
                            kv2: window.location[n(391)],
                            kv3: a[n(709)],
                            kv4: p[n(845)],
                            kv5: a[n(511)],
                            kv6: a.kv6 || p.AFRD_CLICK,
                            kv7: a[n(488)],
                            kv11: a.kv11,
                            kv12: a[n(704)],
                            kv24: this[n(383)]() ? p[n(536)] : p[n(445)],
                            kv27: encodeURIComponent(navigator.userAgent)
                        }
                          , m = f[n(404)](l);
                        h[n(366)] = p[n(403)] + "?" + m,
                        this[n(504)][n(474)][n(487)][n(433)][n(910)](h)
                    }
                    ,
                    p[r(808)].isMobile = function() {
                        var a = r
                          , n = navigator[a(671)];
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[a(933)](n)
                    }
                    ,
                    p[r(403)] = r(1053),
                    p.MGID = r(628),
                    p[r(845)] = "-",
                    p.PLATFORM_MOBILE = "Mobile_Web",
                    p.PLATFORM_DESKTOP = r(1123),
                    p.AFRD_CLICK = r(952),
                    p
                }()
                  , on = function() {
                    var r = s;
                    function p(a) {
                        this.context = a
                    }
                    return p[r(808)][r(574)] = function(a, n) {
                        var h = r;
                        h(795) == typeof navigator[h(692)] ? this[h(692)](a, n) : this[h(589)](a, n)
                    }
                    ,
                    p[r(808)][r(589)] = function(a, n) {
                        var h = r;
                        this[h(474)][h(1117)](h(580))[h(366)] = a + "?" + f[h(404)](n)
                    }
                    ,
                    p[r(808)].sendBeacon = function(a, n) {
                        var h = r;
                        try {
                            navigator[h(692)](a + "?" + f[h(404)](n))
                        } catch {
                            this[h(589)](a, n)
                        }
                    }
                    ,
                    p
                }()
                  , rn = function() {
                    var r = s;
                    function p(a) {
                        var n = q;
                        this.cookieStorage = {},
                        this.sharedCookieStorage = {},
                        this.context = a.context || window,
                        this.id = a.id;
                        var h = a.storagePrefix || n(601)
                          , l = a[n(387)] || n(1087)
                          , m = this[n(474)][l + "PageOffset"] ? this.context[l + "PageOffset"] : "";
                        this.storageName = h + n(1058) + m
                    }
                    return p[r(808)][r(1102)] = function() {
                        var a = r
                          , n = this[a(595)]();
                        n[this.id] !== void 0 ? this[a(874)] = n[this.id] : this[a(874)] = {},
                        n[0] !== void 0 ? this[a(600)] = n[0] : this[a(600)] = {}
                    }
                    ,
                    p[r(808)].setCookie = function() {
                        var a = r
                          , n = this.getCookieValue();
                        n[this.id] = this[a(874)],
                        n[0] = this[a(600)];
                        var h = encodeURIComponent(JSON[a(1042)](n));
                        this[a(474)][a(487)][a(634)] = this[a(1120)] + "=" + h + ";path=/"
                    }
                    ,
                    p[r(808)].getCookieValue = function() {
                        var a = r
                          , n = this[a(474)].document[a(634)].match(new RegExp("(?:^|; )" + this[a(1120)] + a(627)))
                          , h = {};
                        if (n)
                            try {
                                h = JSON[a(767)](decodeURIComponent(n[1]))
                            } catch {}
                        return h
                    }
                    ,
                    p
                }()
                  , pn = function() {
                    var r = s;
                    function p(a) {
                        var n = q;
                        this[n(349)] = a,
                        this[n(746)] = "",
                        this[n(564)] = [],
                        this[n(1024)] = new M(new Y({
                            id: p.id,
                            modulePrefix: p.modulePrefix,
                            cookieStorage: new rn({
                                id: p.id,
                                context: window
                            }),
                            browserProperties: a[n(735)]
                        })),
                        this[n(977)] = new Vi({
                            widgetPrefix: p[n(873)],
                            context: window
                        }),
                        this.request = new on(window.document),
                        this[n(579)] = new Fi({
                            context: window
                        })
                    }
                    return p[r(808)][r(902)] = function() {
                        var a = r;
                        this[a(349)][a(1131)] && this[a(349)].sendAnuraAtLoad && this[a(921)](this[a(349)][a(1025)]),
                        this[a(349)][a(777)] && Object[a(510)](this[a(349)][a(777)])[a(619)] > 0 && this[a(579)][a(409)](this[a(349)][a(777)]),
                        this.app[a(450)](),
                        this[a(1004)]()
                    }
                    ,
                    p.prototype[r(449)] = function(a, n) {
                        var h = r
                          , l = n[h(391)][h(466)](h(718))
                          , m = n[h(391)].indexOf(h(1122))
                          , w = n[h(391)][h(466)]("?");
                        l !== -1 ? n[h(391)] = n.href.substr(0, l) : m !== -1 && (n[h(391)] = n[h(391)][h(700)](0, m)),
                        this[h(746)] = n.href,
                        this.afActiveEl = n,
                        n[h(391)] += l === -1 && w !== -1 ? "&" : "?";
                        var k = this.app.generateHash(a, n, this[h(349)][h(1025)]);
                        n[h(391)] += "k=" + this.options.composite + "f" + k,
                        this[h(518)](n, h(701))
                    }
                    ,
                    p[r(808)][r(1004)] = function() {
                        var a = r
                          , n = this;
                        this[a(1144)](document[a(770)]("a")),
                        setTimeout(function() {
                            var h = a;
                            return n[h(1004)]()
                        }, 750)
                    }
                    ,
                    p[r(808)].bindEvents = function(a) {
                        for (var n = r, h = /(ghits|[prt]+news|nr)/i, l = 0; l < a[n(619)]; l++) {
                            var m = a[l];
                            this.links[n(466)](m) === -1 && h.test(m[n(391)]) && (this[n(564)].push(m),
                            this.bindEvent(m, n(779), b[n(865)]),
                            this.bindEvent(m, n(690), b[n(528)]),
                            this.bindEvent(m, n(996), b.MouseOver),
                            this.bindEvent(m, n(682), b[n(752)]),
                            this.bindEvent(m, n(706), b[n(830)]),
                            this[n(1076)](m, n(1132), b[n(789)]),
                            this[n(1076)](m, n(1129), b.Focus))
                        }
                        this[n(1024)][n(568)]()
                    }
                    ,
                    p[r(808)].bindEvent = function(a, n, h) {
                        var l = r
                          , m = this;
                        T[l(908)](a, n, function(w) {
                            var k = l;
                            return m[k(1073)](w, a, h)
                        })
                    }
                    ,
                    p[r(808)][r(1073)] = function(a, n, h) {
                        var l = r
                          , m = this;
                        if (this[l(449)](a, n),
                        this[l(1024)][l(1104)](h),
                        h === b.MouseUp) {
                            if (this[l(349)][l(1131)]) {
                                var w = n[l(898)](l(958)) || this.options[l(1025)];
                                this[l(921)](w)
                            }
                            setTimeout(function() {
                                var k = l;
                                return m[k(810)]()
                            }, 100)
                        }
                    }
                    ,
                    p.prototype[r(518)] = function(a, n) {
                        var h = r
                          , l = document[h(374)](h(841));
                        l[h(982)](n, !0, !1),
                        l[h(940)] = Date.now(),
                        a[h(340)](l)
                    }
                    ,
                    p.prototype.reWriteHref = function() {
                        var a = r;
                        this[a(746)] && this[a(546)] && (this[a(546)][a(391)] = this.afRealHref)
                    }
                    ,
                    p[r(808)][r(921)] = function(a) {
                        return lt(this, void 0, void 0, function() {
                            var n, h;
                            return It(this, function(l) {
                                var m = q;
                                switch (l[m(398)]) {
                                case 0:
                                    return [4, this.anura[m(409)](this[m(349)][m(353)], this[m(349)][m(924)])];
                                case 1:
                                    return n = l[m(1039)](),
                                    [4, this.anura[m(684)](n)];
                                case 2:
                                    return h = l[m(1039)](),
                                    this[m(484)][m(574)](this[m(349)][m(904)] + m(909), {
                                        composite: this[m(349)][m(1016)],
                                        result: h,
                                        showHash: a
                                    }),
                                    [2]
                                }
                            })
                        })
                    }
                    ,
                    p[r(873)] = r(805),
                    p.id = r(955),
                    p
                }()
            }
            )(),
            ya.exports = i
        }
        )();
        function de() {
            var g = ["afCoordsClickAndLinkOfPage", "isDebugBrowserPropertyTriggered", "#f2f", "widgetPrefix", "low", "YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0=", "?k=", "svs", "experimental-webgl", "wct", "toDataURL", "offsetParent", "script", 'div[id^="smi2adblock"]', "opr", "Clarendon", "processReferrers", "pageX", "YVtocmVmKj0iLy91dGltZy5ydS8iXQ==", "msSaveBlob", "map", "MouseOver", "unknown|unknown|0", "browserProperties", "constructor", "throw", ".sygnal24-gdpr-modal-wrap", "__gCrWeb", "language", "round", "plid", "rect", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', "#mod-social-share-2", "afRealHref", "msExitFullscreen", ".optimonk-iframe-container", "symbol", "height", ".adstekst", "MouseMove", "alphabetic", "suffixes", "getCoordsClickOfPage", "screen", "webkitPersistentStorage", "svspr", "YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ==", "onorientationchange", "sans-serif-thin", "parent", "#kauli_yad_1", "MediaSource", "join", "AnuraCallback", "parse", 'div[id^="crt-"][data-criteo-id]', "getNetwrokInformation", "getElementsByTagName", "getPlugins", "fullscreenElement", "setInterval", "afDeviceOrientation", "webkitResolveLocalFileSystemURL", "GREATER_THAN", "pixalateData", "(forced-colors: ", "mousedown", "availWidth", "LmFkc19iYW4=", "1px", "YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd", "iframe", "monitoring", "#Publicidade", "scrollLeft", "slice", "TouchEnd", "afImgLoaded", "event", "random", "getBattery", "LndpZGdldF9wb19hZHNfd2lkZ2V0", "function", "48px", "appVersion", ".kadr", "error", "add", "IS_NUMBER", "(max-monochrome: ", 'amp-embed[type="24smi"]', "W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd", "Transit", "textSizeAdjust", "afBrowserFlag", "prototype", "YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd", "reWriteHref", "isSupportBlurEvent", "RTCPeerConnectionIceEvent", "onload", "isValid", "getItem", "W2NsYXNzKj0iR29vZ2xlQWRzIl0=", "unknown", "NOT_EQUALS", "iframePlacementType", "webkitRequestFullscreen", "#adblock-honeypot", "Staccato222 BT", "status", "create", "setNetworkInformation", "I2FkX2Jsb2NrZXI=", ".cc-CookieWarning", "next", "UTC", "TouchStart", "YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ==", "WEBGL_debug_renderer_info", "nodeType", "arc", "is_debug", "root", "loadScript", ".mobile_adhesion", "UCShellJava", "offsetWidth", "Events", "buffer", "Anura response error: ", "I2FkX2ludmlld19hcmVh", "DEFAULT", "3879414kOyZCs", "fillText", "setAttribute", "MS Reference Specialty", "acosh", "catch", "Letter Gothic", "YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0=", "undefined", "visitorId", "IS_ARRAY", "afTimePerformance", "LlppX2FkX2FfSA==", "mozCancelFullScreen", "ops", "replace", 'div[class^="app_gdpr"]', "kv1", "webgl", "MouseDown", "getRootNode", "9623140BHynvi", "msIndexedDB", "getCoordsElementOfPage", "cookietest=1; SameSite=Strict;", "Leelawadee", "asinh", "modulePrefix", "cookieStorage", "atanh", "#069", "getSnapShot", "display", "isPointInPath", "browserLanguage", "(prefers-reduced-motion: ", "less", ".site-pub-interstitiel", "1608QEuMPR", "(color-gamut: ", "LmZyb250cGFnZUFkdk0=", ".mainostila", "callToActionClicked", "Module", "parentNode", "getPropertyValue", "YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==", "ABCDEFGHIJKLMNOPQR$TUVWXYZabcde*ghijklmnopqrstuvwxyz0123456789+/=", "timeout", "srgb", "MozAppearance", "Lucida Bright", "getAttribute", "LnJla2xhbW9zX3RhcnBhcw==", "rec2020", "fill", "run", ".newsletter_holder", "sensorDomain", "str", "standard", "afCoords", "addEvent", "/anura", "appendChild", "Univers CE 55 Medium", "IS_FALSE", "trimString", "rule_value", "getError", "DeviceOrientationEvent", "getRectOfElement", "isFlashEnabled", "347267AmnvJU", "\\$1", "sendAnura", "setCoordsClickAndLinkOfPage", '[data-cypress="soft-push-notification-modal"]', "publisherSource", "warn", "webkitExitFullscreen", "YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0=", `
visitorId: `, "apply", "YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ==", "getContext", "beginPath", "test", "YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0=", "x64String", "#pmadv", "delayFallback", "aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd", "WebKitMediaKeys", "timeG", "LESS_THAN", "useTimePerformance", "REGEX_MATCH", "userLanguage", "[data-cookie-number]", "hidden", "referrer", "self", "RTCEncodedAudioFrame", "position", "clearImmediate", "afrd_click", "getComputedStyle", "reduce", "206", "18vRaKLl", "YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0=", "data-hash", "EUROSTILE", "globalCompositeOperation", "eventMask", "getDeviceOrientation", "string", "bstr", "Ll9faXNib29zdFJldHVybkFk", "pop", "Google", "pageY", "863900ZagEMp", "IS_NOT_NULL", "Ll9wb3BJbl9pbmZpbml0ZV9hZA==", "LmdlbWluaUxCMUFk", "REQUEST_URL", "iPad", "isSupportHtml5", "firstChild", "anura", "Marlett", "#stickyCookieBar", "LmFkLWRlc2t0b3AtcmVjdGFuZ2xl", "PMingLiU", "initEvent", "attack", "clientTop", "getTime", "Minion Pro", "#barraPublicidade", "afPrimaryReferrer", "IS_TRUE", "DeviceMotionEvent", "createOscillator", "oprt", "search", "Unexpected syntax '", "getStorageUpdates", "mouseover", "clearInterval", "IS_OBJECT", `
userAgent: `, "monospace", "webkitFullscreenElement", "compressNumber", "Generator is already executing.", "initAntiFraud", "charCodeAt", "generateHash", "referrers", "siteId", "rule", "dGQjZnJlZW5ldF90YWJsZV9hZHM=", "getBrowserFlag", "YVtocmVmKj0iLmFmbGFtLmluZm8iXQ==", "response", "matches", "getParameter", "composite", "system-ui", "getParameterFromLink", "#mobileCatfish", "__crWeb", "object", "clientX", "getExId", "app", "showHash", "opera", "I2FkY29udGFpbmVyX3JlY2hlcmNoZQ==", "LmFkZ29vZ2xl", "https://script.anura.io/request.js", "pack", "networkInformation", "LmFkX19tYWlu", "138IavNlr", "#navbar_notice_50", "I3Jla2xhbWk=", "MGID", "YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0=", "YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ==", "sent", "width", ".bumq", "stringify", "fontSize", "Good", "Arial Unicode MS", "\n```", "Haettenschweiler", "#2ff", "QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==", "host", "27177OXPhYt", "block", "https://adrta.com/i", ".yandex-rtb-block", "load", ".sklik", "setCoords", "Storage", "inverted", "systemLanguage", "#aafoot.top_box", "sin", ".yb-floorad", "#publiEspecial", "00000000", "clientLeft", "DOM blockers debug:\n```", "exitFullscreen", "I0JveC1CYW5uZXItYWRz", "#backkapat", "value", ".as-oil", "handleLinkEvent", "browserValidator", "QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd", "bindEvent", "YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd", "LnNwb25zb3JsaW5rZ3J1ZW4=", "#social-tools", "[object Reflect]", "createDynamicsCompressor", "offsetHeight", "readyState", "level", "split", "onmozfullscreenchange", "MarketGid", "IS_NULL", "YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=", ".zergnet-recommend", "isDebugPropertyTriggered", "Monotype Corsiva", "done", ".hs-sosyal", "Apple", "asin", "exports", "onAnyImageLoaded", "SCRIPTINA", ".open.pushModal", "Anura response cannot parse: ", "getCookie", "SvsdsFlag", "addEventBit", '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">', "ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd", "ucweb", "TouchEvent", ".quangcao", "suspended", "LmJveF9hZHZfYW5udW5jaQ==", "ontouchstart", "img", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcde.ghijklmnopqrstuv0123456789wxyz-_", "removeEvent", "samsungAr", "createElement", "#xenium_hot_offers", "scrollTop", "storageName", "YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd", "&k=", "Desktop", "YW1wLWF1dG8tYWRz", "publisherId", "callback", "getCoordinatesClickOfPage", "return", "focus", "async", "anuraEnabled", "touchend", ".navigate-to-top", "#taotaole", "getHardwareConcurrency", "version", "setReferrers", "MUST_NOT_EXIST", "Segoe UI Light", "none", "isJavaEnabled", "hasOwnProperty", "renderedBuffer", "bindEvents", "timerFromScroll", "#subscribe_popup", "applyReplacements", "mmMwWLliI0O&1", "start", "stack", "#psyduckpockeball", "addEventListener", "Intl", "a[href*=macau-uta-popup]", "BankGothic Md BT", "isLocalStorageEnabled", "DIALOG", "mgSnapShot", "#cookieconsentdiv", "removeChild", ".textad_headline", "dispatchEvent", 'aside[data-portal-id="leaderboard"]', "getCoordinatesClickOfWindow", "ul.adsmodern", "effectiveType", ".cfa_popup", "Batang", "threshold", "rgba(102, 204, 0, 0.2)", "options", "subarray", "availLeft", "#qoo-counter", "source", "mozFullScreenElement", "resolvedOptions", "hardwareConcurrency", "afBrowserHookMask", "afHref", "afCharging", "min", "W2lkXj0ic2tsaWtSZWtsYW1hIl0=", "canvas", "buf", "cookietest=", "log1p", "src", "isTriggeredBeforeunloadEvent", "webkitTemporaryStorage", "destination", "fillRect", "Unknown rule: ", "Microsoft Uighur", "right", "createEvent", "visibility", "reverse", "msWriteProfilerMark", "Menlo", "MT Extra", "message", "connect", "24CaVLWJ", "isMobile", "getPixelDepth", "zoom", "18pt Arial", "informerPrefix", "SVGGeometryElement", "Humanst521 BT", "getBoundingClientRect", "href", "afDeepSession", "pixelDepth", "log", "I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA==", "#queTooltip", "span", "label", "logger", "Agency FB", "57456ZzMgYc", "Levenim MT", "URL", "buildQueryParams", "bind", "YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0=", "ApplePayError", "#Kolom-Iklan-728", "send", "no-preference", "YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd", "networkInformationType", "Serifa", "afPlugins", "instance", "Meiryo UI", "TABLE.advright", "1.3.1", "textContent", "3.4.2", "deviceMemory", "MS Outlook", "Calibri", "generateBatteryInfo", "documentElement", "I3dlcmJ1bmdza3k=", "QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==", "YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==", "sessionStorage", "sqrt", "ZWAdobeF", "webkitConnection", "body", "contentWindow", "msPointerEnabled", "toStringTag", "every", "IS_STRING", "LmhlYWRlci1ibG9ja2VkLWFk", "about:blank", ".widgetadv", "#social_follow", "defineProperty", "iterator", "PLATFORM_DESKTOP", "aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd", "CanvasCaptureMediaStream", "platform", "bindAntiFraudParams", "initialize", "#sovrn_container", "localStorage", "open", "ongestureend", "msMaxTouchPoints", "oct2chr", "YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd", "connection", "#cookies-policy-sticky", ".article-sharer", "isSessionStorageEnabled", "#Iklan-Melayang", "setProperty", "initializeBufferAndDomains", ".adblocker-root", "indexOf", "getNumberValueFromLocalStorage", "offsetLeft", "referer", "active", "groupBitParams", "domExtractor", `
  `, "context", "#issuem-leaky-paywall-articles-zero-remaining-nag", "I2FkXzMwMFgyNTA=", "expm1", "good", "LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ==", "MS UI Gothic", "oncomplete", "getTimePerformance", "plugins", "request", "availHeight", "networkInformationEffectiveType", "document", "kv7", "devicePixelRatio", "removeEventListener", "description", "msSetImmediate", "triangle", "screenY", "all", "cosh", "type", "max", "I2xpdmVyZUFkV3JhcHBlcg==", "div", "font", "#top100counter", "LnJlY2xhbWE=", "config", "afReferrer", "puffinDevice", "GOTHAM", "MUST_EXIST", "oscpu", "keys", "kv5", "YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0=", "topIFrame", "toString", "YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd", "number", "LmNsb3NlLWFkcw==", "dispatchAntifraudHashEvent", "charging", "msLaunchUri", "LmF3LWNvb2tpZS1iYW5uZXI=", "scroll", "I2FkdmVydGVudGll", "push", "getScreenY", "ShockwaveFlash.ShockwaveFlash", "496AmFBtT", "MouseUp", "ontransitioncancel", "#divAgahi", "msFullscreenElement", "BatteryManager", "requestIdleCallback", "LnRyYWZmaWNqdW5reS1hZA==", "POST", "PLATFORM_MOBILE", "YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd", "bad", "EQUALS", "miliSecondsFromScroll", ".BlockNag__Card", "#ceneo-placeholder-ceneo-12", "#pgeldiz", ".ModuleTemplateCookieIndicator", "#ff2", "afActiveEl", "buildNumber", "183740PMPbvo", "MacIntel", "opacity", "__firefox__", "high", "filter", "MSStream", "setEvents", "getExtension", "bottom", "isCookieEnabled", "exp", "Century Gothic", "standalone", "#cemp_doboz", "encodeParameters", "links", "afMgLoaded", "setRequestHeader", "saveData", "setWidgetEvents", "textBaseline", ".yt.btn-link.btn-md.btn", "OfflineAudioContext", "maxTouchPoints", "YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ==", "beacon", "HELV", "YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ==", "QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ==", "ZGl2I3NrYXBpZWNfYWQ=", "pixalate", "IMG", "YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0=", "EXCLUDES", "important", "indexedDB", "pdfViewerEnabled", "INCLUDES", "mozInnerScreenX", "sort", "sendImage", "chrome", "LnJla2xhbW9zX251b3JvZG9z", "vendor", "openDatabase", "word", "getCookieValue", "isOnLine", "fillStyle", "evenodd", "Futura Bk BT", "sharedCookieStorage", "Mgid", "Failed to load script", "setItem", "setCookie", "frameElement", "getId", "webkitSpeechGrammar", "onerror", "aW5zLmZhc3R2aWV3LWFk", "left", "I3Jla2xhbWUtcmVjaHRzLW1pdHRl", ".lapni-pop-over", "ARNO PRO", "buildID", "abs", "getScreenX", "YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0=", "name", "length", "nowrap", "sendData", "then", "LnNwb25zb3JpdA==", "navigator", "#ac-lre-player", "#onlajny-stickers", "=([^;]*)", "mgid", "screenX", "get", "forced", "attachEvent", "debug", "cookie", ".img-kosana", "LmN0cGwtZnVsbGJhbm5lcg==", "absolute", "setDeepSession", "-apple-system-body", "webkitTextSizeAdjust", "trys", "isBrowserValid", "YVtocmVmKj0iYm9vcmFxLm9yZyJd", "charAt", "external", "tagName", "adler32", "getCoordsClickOfWindow", "afShortEnabled", "onLine", "isArray", "result", `
components: `, "LnNwb25zb3JlZC10ZXh0LWxpbmtz", '[title="ALIENBOLA" i]', "clientY", "removeItem", "exec", "generate", "now", "LnJla2xhbWEtbWVnYWJvYXJk", "srcdoc", "detachEvent", "touches", "languages", "dec2chr", "orientation", "networkInformationSaveData", "frequency", "transitionType", "userAgent", "includes", "Bad", "multiply", "LmFkczMwMHM=", "components", "MYRIAD PRO", "top", "sizes", "Franklin Gothic", "webkitMediaStream", "mousemove", "call", "fetchStatus", "Lucida Sans", '.alert-info[data-block-track*="CookieNotice"]', "afLevel", "__yb", ".etsy-tweet", "mouseup", "svsds", "sendBeacon", "fromCharCode", "#semilo-lrectangle", "yandex", "#f60", "style", "text/javascript", "__esModule", "substr", "generated", "YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd", "whiteSpace", "kv12", "isTransparent", "touchstart", "application/x-www-form-urlencoded", "RESULT_URL", "kv3", "concat", "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT"];
            return de = function() {
                return g
            }
            ,
            de()
        }
    }
    );
    var wa = {};
    at(wa, {
        AntifraudBlock: ()=>vi
    });
    var Et, vi, ka = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Et = ne(ba());
        Bt();
        vi = class extends W {
            constructor(t) {
                super(t),
                this.anuraRequestHasBeenSent = !1,
                this.pixalateRequestHasBeenSent = !1,
                this.name = "AntifraudBlock",
                this.addHook("beforeInitHooks", this.beforeInitHook.bind(this)),
                this.addHook("afterLoadNewsHooks", this.afterLoadNewsHook.bind(this)),
                this.addHook("afterInitHooks", this.afterInitHook.bind(this))
            }
            getAntifraudParams(t, e) {
                if (this.app.allowReturnParams === !1)
                    return "";
                e = e || this.app.context.document.createElement("A"),
                t = t || this.app.context.document.createEvent("MouseEvent");
                let i = e["data-hash"] || e.getAttribute("data-hash") || "";
                return this.antifraud.generateHash(t, e, i)
            }
            async sendAnuraRequest(t, e) {
                this.anuraRequestHasBeenSent = !0;
                let i = await this.anura.send(String(this.getSourceId(t)), e)
                  , s = await this.anura.fetchStatus(i)
                  , o = {
                    composite: this.app.getWidgetValue("id", this.app.getWidgetValue("id", 1419550)),
                    result: s,
                    showHash: t
                };
                return this.app.request.beacon(`anura#${t}#${e}`, "https://" + this.app.getWidgetValue("countersDomain", "c.adskeeper.co.uk") + "/anura", [`composite=${o.composite}`, `result=${o.result}`, `showHash=${o.showHash}`], {
                    unique: !0
                }),
                s
            }
            beforeInitHook() {
                this.initSnapShot();
                let t = this.app.getWidgetValue("id", 1419550)
                  , e = this.app.getWidgetValue("informerPrefix", "Adskeeper")
                  , i = this.app.getWidgetValue("loggerEnabled", !1) ? this.app.context[e + "InfC" + t + "Logger"] : null
                  , s = new Et.BaseConfiguration({
                    logger: i,
                    afShortEnabled: !!this.app.getWidgetValue("afShortEnabled", !0),
                    modulePrefix: this.app.getWidgetValue("modulePrefix", "AdskeeperC"),
                    id: this.app.id.toString(),
                    context: this.app.context,
                    root: this.app.root,
                    iframePlacementType: this.app.iframePlacementType,
                    cookieStorage: this.app.cookieBlock,
                    useTimePerformance: this.app.getWidgetValue("useTimePerformance", !0),
                    browserProperties: this.app.servicerData.brp || []
                });
                this.antifraud = new Et.AntiFraud(s),
                this.anura = new Et.Anura({
                    widgetPrefix: e + "InfC" + t,
                    context: this.app.context
                }),
                this.pixalate = new Et.Pixalate({
                    context: this.app.context
                }),
                this.app.allowReturnParams = !1,
                this.app.addEvent(this.app.context, "beforeunload", this.linkBeforeunloadHandler.bind(this)),
                this.setIsBlurEventSupported(this.app.root),
                this.setTransitionType()
            }
            afterLoadNewsHook() {
                let t = this.app.root;
                this.app.addEvent(t, "mousedown", this.linkMouseDownHandler.bind(this)),
                this.app.addEvent(t, "mouseup", this.linkClickHandler.bind(this)),
                this.app.addEvent(t, "mouseover", this.linkMouseOverHandler.bind(this)),
                this.app.addEvent(t, "mousemove", this.linkMouseMoveHandler.bind(this)),
                this.app.addEvent(t, "touchstart", this.linkTouchStartHandler.bind(this)),
                this.app.addEvent(t, "touchend", this.linkTouchEndHandler.bind(this));
                let e = t.querySelector("a[data-hash]");
                e && this.app.addEvent(e, "focus", this.linkFocusHandler.bind(this)),
                this.antifraud.setWidgetEvents()
            }
            afterInitHook() {
                this.antifraud.initialize()
            }
            async initSnapShot() {
                if (this.app.context.localStorage) {
                    let t = Math.round(new Date().getTime() / 1e3)
                      , e = Number(this.app.context.localStorage.getItem("mgSnapShotExpired"));
                    if ((e === null || t > e) && (this.app.context.localStorage.removeItem("mgSnapShot"),
                    this.app.context.localStorage.removeItem("mgSnapShotExpired")),
                    this.app.context.localStorage.getItem("mgSnapShot") === null) {
                        let i = (await Et.Snapshot.generate()).visitorId
                          , s = Math.round(new Date().getTime() / 1e3 + 3 * 24 * 60 * 60);
                        this.app.context.localStorage.setItem("mgSnapShot", i),
                        this.app.context.localStorage.setItem("mgSnapShotExpired", s.toString())
                    }
                }
            }
            linkClickHandler(t) {
                let e = this.handleEvent(t, 0);
                if (e) {
                    let i = e.getAttribute("data-hash");
                    this.app.teaserData[i] && [pt.Wages, pt.Exchange].indexOf(this.app.teaserData[i].coopType) > -1 && this.addIntegrations(i, e),
                    this.app.antifraudStatisticsBlock.setIsWidgetOverlapped(this.isWidgetOverlapped(e));
                    let o = e.parentElement;
                    o && o.className === "mglbtn" && this.app.context.localStorage.setItem("callToActionClicked", "1"),
                    this.handleUpdatedTeaserClick(e),
                    setTimeout(()=>{
                        this.app.allowReturnParams = !1,
                        this.reWriteHref(t, e)
                    }
                    , 100)
                }
            }
            linkMouseOverHandler(t) {
                this.handleEvent(t, Et.EventMask.MouseOver)
            }
            linkMouseMoveHandler(t) {
                this.handleEvent(t, Et.EventMask.MouseMove)
            }
            linkTouchStartHandler(t) {
                this.handleEvent(t, Et.EventMask.TouchStart)
            }
            linkTouchEndHandler(t) {
                this.handleEvent(t, Et.EventMask.TouchEnd)
            }
            linkMouseDownHandler(t) {
                this.handleEvent(t, Et.EventMask.MouseDown)
            }
            linkFocusHandler(t) {
                this.handleEvent(t, Et.EventMask.Focus)
            }
            handleEvent(t, e) {
                t || (t = this.app.context.event),
                t.target || (t.target = t.srcElement),
                this.app.allowReturnParams = !0;
                let i = t.target;
                return i.tagName !== "A" && (i = this.app.getParentLink(i),
                !i) || !i.hasAttribute("data-hash") ? null : (this.antifraud.addEventBit(e),
                this.reWriteHref(t, i),
                i)
            }
            reWriteHref(t, e) {
                t || (t = this.app.context.event);
                let i = e["data-hash"] || e.getAttribute("data-hash");
                i && (e[this.app.hrefAttr] = this.app.prepareNiceHref(i, t, e))
            }
            addIntegrations(t, e) {
                if ((this.app.servicerData.anura || 0) > this.app.random(1, 100) && !this.anuraRequestHasBeenSent && this.sendAnuraRequest(t, this.getQueryParam(e, "pubsrcid")).catch(i=>{
                    this.app.log("Anura request failed", "warn", i)
                }
                ),
                this.app.getWidgetValue("usePixelate", !0) && !this.pixalateRequestHasBeenSent) {
                    let i = !1
                      , s = this.app.findClosest(e, "div[data-i]");
                    s && (i = s.querySelector("a").href.indexOf("/ghits/") !== -1),
                    i && this.sentShowHash !== t && this.sendPixalateRequest(s, this.getQueryParam(e, "pubsrcid"), t)
                }
            }
            sendPixalateRequest(t, e, i) {
                let s = this.app.getMuid()
                  , o = 0
                  , c = 0
                  , d = 0;
                if (t) {
                    let u = t.getAttribute("data-i")
                      , f = t.querySelector(".image-with-text");
                    if (f && (o = Math.floor(f.offsetWidth),
                    c = Math.floor(f.offsetHeight)),
                    u === i) {
                        let I = t.querySelectorAll("[data-i]");
                        for (let T = 0; T < I.length; T++) {
                            let E = I[T];
                            if (i !== E.getAttribute("data-i")) {
                                d = parseInt(E.getAttribute("data-i"));
                                break
                            }
                        }
                    } else
                        d = parseInt(u)
                }
                this.pixalate.send({
                    plid: d,
                    publisherId: this.app.getWidgetValue("publisherId", 57751587),
                    siteId: this.app.getWidgetValue("siteId", 862931),
                    kv1: o + "x" + c,
                    kv3: s,
                    kv5: e,
                    kv7: this.app.getWidgetValue("clientId", 265802),
                    kv11: i,
                    kv12: this.app.servicerData.rid
                }),
                this.pixalateRequestHasBeenSent = !0,
                this.sentShowHash = i,
                this.app.antifraudStatisticsBlock.setPixalateTriggered()
            }
            getSourceId(t) {
                let e = this.app.getWidgetValue("hasNewsPart", !1) ? "ni" + this.app.getWidgetValue("newsPartUid", 0) : "ni"
                  , i = this.app.getWidgetValue("hasGoodsPart", !0) ? this.app.getWidgetValue("goodsPartUid", 57751587) : "";
                return this.app.teaserData[t].coopType === pt.Exchange ? e : i
            }
            getQueryParam(t, e) {
                let i = t.search.substring(1).split("&")
                  , s = "";
                for (let o = 0; o < i.length; o++) {
                    let c = i[o].split("=");
                    if (c[0] === e) {
                        s = decodeURIComponent(c[1]);
                        break
                    }
                }
                return s
            }
            linkBeforeunloadHandler(t) {
                this.app.context.localStorage.setItem("isTriggeredBeforeunloadEvent", "1")
            }
            setIsBlurEventSupported(t) {
                if (t) {
                    let e = "onblur"
                      , i = e in t;
                    i || (t.setAttribute(e, "return;"),
                    i = typeof t[e] == "function"),
                    e in document.documentElement || t.removeAttribute(e),
                    this.app.context.localStorage.setItem("isSupportBlurEvent", i ? "1" : "0")
                }
            }
            setTransitionType() {
                if (performance.getEntriesByType("navigation")) {
                    let t = performance.getEntriesByType("navigation")[0];
                    t && this.app.context.localStorage.setItem("transitionType", t.entryType)
                }
            }
            isWidgetOverlapped(t) {
                let e = t.getBoundingClientRect()
                  , i = [{
                    x: e.left,
                    y: e.top
                }, {
                    x: e.right,
                    y: e.top
                }, {
                    x: e.left,
                    y: e.bottom
                }, {
                    x: e.right,
                    y: e.bottom
                }, {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                }];
                for (let s of i) {
                    let o = document.elementFromPoint(s.x, s.y);
                    if (o && o !== t && !t.contains(o) && o !== document.body && o !== document.documentElement)
                        return !0
                }
                return !1
            }
            handleUpdatedTeaserClick(t) {
                let e = t.getAttribute("data-refreshed");
                this.app.antifraudStatisticsBlock.setIsRefreshedTeaserClicked(!!e)
            }
        }
    }
    );
    var Ia = {};
    at(Ia, {
        FillCardLikesBlock: ()=>yi
    });
    var yi, Da = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        yi = class extends W {
            constructor(t) {
                super(t),
                this.name = "FillCardLikesBlock",
                this.addHook("afterLoadNewsHooks", this.fillCardLikes)
            }
            fillCardLikes() {
                let t = this.app.root.querySelectorAll(".mgbottom_media");
                this.app.root.querySelectorAll(".card-media").length && (this.setTitleMaxHeight(),
                this.setMoreBtnText(),
                this.app.context.addEventListener("resize", ()=>{
                    this.setTitleMaxHeight()
                }
                ));
                for (let i = 0; i < t.length; i++) {
                    let s = this.app.random(50, 900)
                      , o = t[i]
                      , c = o.querySelectorAll(".mgmedia__metrics-value")
                      , d = o.querySelector(".mgbtn_media")
                      , u = c[0]
                      , f = c[1]
                      , I = c[2]
                      , T = ()=>{
                        u.textContent = String(s + 1);
                        let E = d.querySelectorAll("svg path");
                        for (let y = 0; y < E.length; y++)
                            E[y].style.fill = "#000";
                        d.style.cursor = "default",
                        d.style.pointerEvents = "none",
                        d.classList.add("mgbtn_media-active"),
                        d.removeEventListener("click", T, !1)
                    }
                    ;
                    u && (u.textContent = String(s)),
                    f && (f.textContent = String(Math.round(s / 4))),
                    I && (I.textContent = String(Math.round(s / 3))),
                    d.style.cursor = "pointer",
                    d.style.pointerEvents = "initial",
                    d.addEventListener("click", T, !1)
                }
            }
            setTitleMaxHeight() {
                let t = this.app.root.querySelectorAll(".mctitle");
                if (t.length) {
                    let e = this.findMaxHeight(t);
                    for (let i = 0; i <= t.length - 1; i++)
                        t[i].style.minHeight = e
                }
            }
            findMaxHeight(t) {
                let e = [];
                for (let s = 0; s <= t.length - 1; s++) {
                    let o = t[s].querySelector(".mctitle-link").offsetHeight;
                    e.push(o)
                }
                return Math.max.apply(null, e) + "px"
            }
            setMoreBtnText() {
                let t = this.app.root.querySelectorAll(".mcmore a");
                if (t.length)
                    for (let e = 0; e <= t.length - 1; e++)
                        t[e].innerHTML = this.app.getTranslation("[INFORMER_BUTTON_MORE]") + "..."
            }
        }
    }
    );
    var Ta = {};
    at(Ta, {
        AccidentalClicksBlock: ()=>bi
    });
    var bi, Sa = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        bi = class extends W {
            constructor(t) {
                super(t),
                this.name = "AccidentalClicksBlock",
                this.app.accidentalClicksHandler = this.onClick.bind(this),
                this.app.addClickHandler(this.app.clickHandlerList.accidentalClicks.handler, this.app.clickHandlerList.accidentalClicks.priority),
                this.accidentalClicksDelay = (parseInt(this.app.globalSettings.accidental_clicks_delay) || 5) * 1e3,
                this.accidentalClicksDisableTypes = "wages".split(","),
                this.teasersClickTimes = {}
            }
            onClick(t, e) {
                if (e.button === 2)
                    return !0;
                let i = t.getAttribute("data-hash")
                  , s = new Date().getTime();
                if (this.app.isEnabledDoubleClick() || typeof this.app.servicerData.dc < "u" && i in this.app.hashTimer && s - this.app.hashTimer[i] < this.app.servicerData.dc)
                    return !0;
                switch (this.app.teaserData[i].coopType) {
                case pt.Wages:
                    if (this.accidentalClicksDisableTypes.indexOf("wages") == -1)
                        return !0;
                    break;
                case pt.Exchange:
                    if (this.accidentalClicksDisableTypes.indexOf("exchange") == -1)
                        return !0;
                    break;
                case pt.InternalExchange:
                    if (this.accidentalClicksDisableTypes.indexOf("int_exchange") == -1)
                        return !0;
                    break;
                default:
                    return !0
                }
                return this.teasersClickTimes.hasOwnProperty(i) ? new Date().getTime() - this.teasersClickTimes[i] <= this.accidentalClicksDelay ? (e.preventDefault(),
                this.app.doubleClickType = "accidental",
                this.app.doubleClickHandler(t),
                !1) : (this.teasersClickTimes[i] = new Date().getTime(),
                !0) : (this.teasersClickTimes[i] = new Date().getTime(),
                !0)
            }
        }
    }
    );
    var Ea = {};
    at(Ea, {
        ActivateDelayBlock: ()=>wi
    });
    var wi, Ca = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        wi = class extends W {
            constructor(t) {
                super(t),
                this.name = "ActivateDelayBlock",
                this.app.clickableDelay = !1,
                this.eventDisabled = !1,
                this.addHook("afterLoadNewsHooks", this.init),
                this.app.activateDelayLinkHandler = this.onClick.bind(this)
            }
            isCloseLink(t) {
                return t.classList.contains("mg-close-button-div-inner")
            }
            isWagesLink(t) {
                if (!t)
                    return !1;
                let e = t.getAttribute("data-hash");
                return this.app.teaserData[e] && this.app.teaserData[e].coopType === pt.Wages
            }
            init() {
                if (this.isInited)
                    return;
                this.isInited = !0;
                let t = 2e3;
                this.app.addClickHandler(this.app.clickHandlerList.activateDelayLink.handler, this.app.clickHandlerList.activateDelayLink.priority),
                this.app.context.setTimeout(()=>{
                    this.eventDisabled = !0,
                    this.app.linksBlocked = !1,
                    this.app.clickableDelay = !1
                }
                , t)
            }
            onClick(t, e) {
                return this.eventDisabled || this.app.clickableDelay && this.isWagesLink(t) || this.isCloseLink(t) || typeof this.app.servicerData.dc < "u" ? !0 : (this.app.doubleClickType = "delay",
                this.app.doubleClickHandler(t),
                this.app.linksBlocked = !0,
                e.preventDefault(),
                !1)
            }
        }
    }
    );
    var Pa = {};
    at(Pa, {
        InSiteNotificationBlock: ()=>ki
    });
    var ki, Ba = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        ki = class extends W {
            constructor(t) {
                super(t),
                this.name = "InSiteNotificationBlock",
                this.storage = this.app.context.localStorage,
                this.app.onSiteNotificationHandler = this.onSiteNotificationHandler.bind(this),
                this.app.isClosedInSiteWidget = !1,
                this.inSiteWidgetPromise = new Promise(e=>{
                    this.inSiteWidgetResolver = e
                }
                ),
                this.app.addClickHandler(this.app.clickHandlerList.onSiteNotificationClick.handler, this.app.clickHandlerList.onSiteNotificationClick.priority),
                this.app.injectScriptDelayed = ()=>{
                    setTimeout(()=>{
                        this.app.injectScriptDelayed(),
                        this.app.injectScript = this.app.injectScriptDelayed()
                    }
                    , 2e3)
                }
                ,
                this.addHook("afterInitHooks", this.initInSiteWidgetBlock),
                this.addHook("afterLoadNewsHooks", this.reformatDom)
            }
            waitForInSiteWidget() {
                return this.inSiteWidgetPromise
            }
            initInSiteWidgetBlock() {
                this.frequencyOfDisplay = Number(this.app.widgetConstructorData?.frequencyOfDisplay) * 6e4 || 5e3;
                let t = 0;
                if (this.storage) {
                    let i = this.storage.getItem("_mgInSiteLastTime1419550");
                    t = i ? parseInt(i) : 0
                }
                let e = this.frequencyOfDisplay - (new Date().getTime() - t);
                e < 0 ? this.inSiteWidgetResolver() : setTimeout(()=>{
                    this.inSiteWidgetResolver()
                }
                , e)
            }
            reformatDom() {
                if (this.app.templateContent?.length && this.app.templateContent.parentNode) {
                    for (; this.app.templateContent.childNodes.length > 0; )
                        this.app.root.appendChild(this.app.templateContent.childNodes[0]);
                    this.app.templateContent.parentNode.removeChild(this.app.templateContent)
                }
                let t = this.app.root.querySelectorAll(".mgbox");
                if (t.length > 1)
                    for (let e = 0; e < t.length - 1; e++)
                        t[e].parentElement !== t[e + 1].parentElement && t[0].parentElement.appendChild(t[e + 1])
            }
            onSiteNotificationHandler(t, e) {
                let i = e.target;
                if (!i.classList.contains("mg-close-action"))
                    return !0;
                let s = this.app.root.querySelector(".mgbox-main")
                  , o = i.parentElement;
                for (; o.parentElement != null && o.className.indexOf("mgbox") == -1; )
                    o = o.parentElement;
                return o.parentElement.removeChild(o),
                this.storage && !this.app.root.getElementsByClassName("mgbox").length && (this.storage.setItem("_mgInSiteLastTime1419550", String(new Date().getTime())),
                this.app.isClosedInSiteWidget = !0),
                setTimeout(()=>{
                    this.app.isClosedInSiteWidget = !1,
                    this.app.page++,
                    s ? this.app.countLoadBlocks = 0 : this.app.requestParams.limitads = 1,
                    this.app.injectScript(!1, 2)
                }
                , this.frequencyOfDisplay),
                !1
            }
            closeWidget() {
                setTimeout(()=>{
                    this.app.root.style.display = "none"
                }
                , 500)
            }
        }
    }
    );
    var La = {};
    at(La, {
        HideDescriptionBlock: ()=>Ii
    });
    var Ii, Aa = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Ii = class extends W {
            constructor(t) {
                super(t),
                this.name = "HideDescriptionBlock",
                typeof this.app.afterAutoplacementHooks < "u" && this.app.widgetConstructorData.autoplacement !== "off" ? this.addHook("afterAutoplacementHooks", this.hideDescription) : this.addHook("afterLoadNewsHooks", this.hideDescription)
            }
            hideDescription() {
                let t = this.app.root.querySelector(".mcdesc");
                if (!t)
                    return;
                let e = this.app.root.querySelector(".mcdesc > a")
                  , i = this.app.root.querySelector(".mglbtn")
                  , s = this.app.root.querySelector(".mglbtn > a")
                  , o = this.app.root.querySelector("div.mcimg")
                  , c = this.app.root.querySelector(".image-with-text")
                  , d = e.scrollHeight - e.clientHeight
                  , u = i.clientWidth
                  , f = o.clientWidth
                  , I = c.clientWidth
                  , T = I - f - 15 - u - 15;
                s && T < 0 && (I !== f ? s.innerHTML = this.app.getTranslation("[INFORMER_CTA_LEARN_MORE]") + "<span></span>" : i.clientHeight > 75 && (s.innerHTML = this.app.getTranslation("[INFORMER_CTA_LEARN_MORE]") + "<span></span>"),
                u < 135 && (s.innerHTML = "<span></span>")),
                d > 1 && (t.style.display = "none")
            }
        }
    }
    );
    var _a = {};
    at(_a, {
        CollectViewDataBlock: ()=>Di
    });
    var Gt, Di, Ga = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        (function(g) {
            g.widgetOutOfSight = "widget_out_of_sight",
            g.leavePage = "user_change_tab_or_close_site",
            g.widgetOverLimitTime = "widget_over_limit_time",
            g.siteOverLimitTime = "site_over_limit_time",
            g.newWidgetPage = "new_widget_page",
            g.newSitePage = "new_site_page"
        }
        )(Gt || (Gt = {}));
        Di = class extends W {
            constructor(t) {
                super(t),
                this.keyHash = "_mgUniqueHash",
                this.keyUserPages = "_mgUserPages",
                this.timeOutLimit = 30,
                this.viewMinTime = 1,
                this.widget = {
                    isVisible: !1,
                    isStartView: !1,
                    startingViewTime: 0,
                    requestsList: []
                },
                this.teasersList = [],
                this.teasersVisibleList = [],
                this.acceptableTeaserTypes = ["type-w", "type-i", "mgline-banner"],
                this.acceptableSiteEvents = [Gt.leavePage, Gt.newSitePage, Gt.siteOverLimitTime],
                this.name = "CollectViewDataBlock",
                !this.app.isAmp() && !this.app.isIframe() && typeof this.app.context.IntersectionObserver == "function" && this.init()
            }
            init() {
                if (this.currentPath = this.app.context.document.location.pathname,
                typeof this.app.context[this.keyUserPages] > "u") {
                    this.app.context[this.keyUserPages] = [];
                    let t = Math.round(this.app.context.performance?.timeOrigin) || this.app.context.performance.timing.navigationStart
                      , e = {
                        pathname: this.currentPath,
                        href: this.app.context.document.location.href,
                        startingViewTime: t,
                        isOverLimitTime: !1
                    };
                    this.app.context[this.keyUserPages].push(e)
                }
                setInterval(()=>{
                    this.detectUrlChanged(),
                    this.detectTimeOverLimit()
                }
                , 1e3),
                this.setupLeavePageEvents(),
                this.addHook("afterLoadNewsHooks", this.startObserving)
            }
            detectUrlChanged() {
                if (this.currentPath !== this.app.context.document.location.pathname) {
                    this.sendAnalyticsData(Gt.newSitePage),
                    this.currentPath = this.app.context.document.location.pathname;
                    let t = this.getCurrentPage();
                    if (!t) {
                        let e = {
                            pathname: this.currentPath,
                            href: this.app.context.document.location.href,
                            startingViewTime: new Date().getTime(),
                            isOverLimitTime: !1
                        };
                        this.app.context[this.keyUserPages].push(e)
                    }
                    t && t.startingViewTime === 0 && this.updateCurrentUserPage({
                        startingViewTime: new Date().getTime(),
                        href: this.app.context.document.location.href
                    })
                }
            }
            detectTimeOverLimit() {
                let t = this.getCurrentPage();
                t && !t.isOverLimitTime && t.startingViewTime > 0 && this.isTimeOverLimit(new Date().getTime() - t.startingViewTime) && (this.updateCurrentUserPage({
                    isOverLimitTime: !0
                }),
                this.sendAnalyticsData(Gt.siteOverLimitTime)),
                this.widget.isStartView && this.isTimeOverLimit(new Date().getTime() - this.widget.startingViewTime) && this.sendAnalyticsData(Gt.widgetOverLimitTime)
            }
            setupLeavePageEvents() {
                let e = ["hidden", "mozHidden", "msHidden", "webkitHidden"].filter(s=>typeof this.app.context.document[s] < "u")[0]
                  , i = e === "hidden" ? "visibilitychange" : e.replace("Hidden", "") + "visibilitychange";
                this.app.context.document.addEventListener(i, ()=>{
                    if (this.app.context.document[e] && this.sendAnalyticsData(Gt.leavePage),
                    this.widget.isVisible && !this.app.context.document[e] && this.restartTeasersViewTime(),
                    !this.app.context.document[e]) {
                        let s = this.getCurrentPage();
                        s && s.startingViewTime === 0 && this.updateCurrentUserPage({
                            startingViewTime: new Date().getTime()
                        })
                    }
                }
                ),
                this.app.context.addEventListener("beforeunload", ()=>{
                    this.sendAnalyticsData(Gt.leavePage)
                }
                )
            }
            startObserving() {
                let t = {
                    page: this.app.pagesServicerData.length,
                    requestId: this.app.servicerData.rid
                };
                this.widget.requestsList.push(t);
                let e = typeof this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId] < "u";
                e && this.widget.isStartView,
                e || (this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId] = this.app.utils.generateHash(),
                this.addHook("observerTeasersHooks", this.teasersObserving),
                ["mobile-widget", "in-site-notification", "passage", "interstitial"].indexOf("in-site-notification") === -1 && this.addHook("observerWidgetHooks", this.widgetObserving))
            }
            teasersObserving(t, e, i, s, o) {
                let c, d;
                if (s && o && (c = o + "-" + s,
                d = this.teasersList.filter(u=>u.order === c)[0]),
                i === 0 && c && d && d.isVisible && (this.teasersList = this.teasersList.map(u=>{
                    if (u.order === c) {
                        let f = new Date().getTime() - u.startingViewTime
                          , I = u.viewTime ? u.viewTime + f : f;
                        return {
                            ...u,
                            viewTime: I,
                            isVisible: !1,
                            startingViewTime: 0
                        }
                    } else
                        return u
                }
                )),
                i > .5) {
                    if (this.widget.isVisible = !0,
                    this.widget.isStartView || (this.widget.isStartView = !0,
                    this.widget.startingViewTime = new Date().getTime()),
                    !d && c && t && s && o) {
                        let u = {
                            order: c,
                            iteration: s,
                            page: o,
                            isVisible: !0,
                            startingViewTime: new Date().getTime(),
                            viewTime: 0,
                            requestId: this.widget.requestsList.filter(f=>f.page === o)[0]?.requestId,
                            showHash: t.dataset.i || "",
                            className: t.className
                        };
                        this.teasersList.push(u)
                    }
                    d && !d.isVisible && c && (this.teasersList = this.teasersList.map(u=>u.order === c ? {
                        ...u,
                        isVisible: !0,
                        startingViewTime: new Date().getTime()
                    } : u))
                }
                this.teasersList.length && this.teasersList.every(u=>!u.isVisible) && (["mobile-widget", "passage", "interstitial"].indexOf("in-site-notification") !== -1 || this.app.isClosedInSiteWidget) && (this.sendAnalyticsData(Gt.widgetOutOfSight),
                this.widget.isVisible = !1)
            }
            widgetObserving(t, e) {
                typeof t < "u" && !t && (this.sendAnalyticsData(Gt.widgetOutOfSight),
                this.widget.isVisible = !1)
            }
            sendAnalyticsData(t) {
                let e;
                if (this.widget.isStartView) {
                    let o = new Date().getTime() - this.widget.startingViewTime;
                    this.isTimeMoreMinLimit(o) && (e = e || {},
                    e.widgetData = this.preparedWidgetData(t)),
                    this.widget.isStartView = !1,
                    this.widget.startingViewTime = 0
                }
                if (this.teasersList.some(o=>o.viewTime > 0 || o.isVisible)) {
                    this.teasersVisibleList = this.teasersList.filter(c=>c.isVisible);
                    let o = this.preparedTeasersData();
                    o.length && (e = e || {},
                    e.teasersData = o),
                    this.resetTeasersViewTime()
                }
                let i = this.getCurrentPage()
                  , s = this.acceptableSiteEvents.some(o=>o === t);
                if (i && s && i.startingViewTime > 0) {
                    let o = new Date().getTime() - i.startingViewTime;
                    this.isTimeMoreMinLimit(o) && (e = e || {},
                    e.userData = this.preparedUserData(i)),
                    this.updateCurrentUserPage({
                        startingViewTime: 0
                    })
                }
                if (e && Object.keys(e).length && this.isMuidn()) {
                    let {tt: o, dt: c, brid: d} = this.app.servicerData
                      , {implVersion: u} = this.app.pageViewPixelBlock?.getPageDataParams() || {};
                    e.eventName = t,
                    e.muidn = this.app.getMuid(),
                    u && (e.implVersion = u),
                    o && (e.trafficType = o),
                    c && (e.device = c),
                    d && (e.browserId = d);
                    let f = new Blob([JSON.stringify(e)],{
                        type: "text/plain"
                    });
                    this.app.request.beaconBlob("visibility", this.app.webProtocol + "//c.adskeeper.co.uk/vz", f, {})
                }
            }
            preparedWidgetData(t) {
                let e = this.app.calculateSessionsBlock.getSessionId()
                  , i = {
                    compositeId: this.app.id,
                    uniqueHash: this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId],
                    visibleTime: new Date().getTime() - this.widget.startingViewTime
                };
                e && (i.sessionId = e);
                let s = this.teasersList.filter(o=>o.viewTime > 0 || o.isVisible).map(o=>o.requestId).filter((o,c,d)=>d.indexOf(o) === c);
                return t === Gt.newWidgetPage ? (i.uuid = this.widget.requestsList[this.widget.requestsList.length - 2]?.requestId,
                s.length >= 2 && (i.firstUuid = this.widget.requestsList[0]?.requestId),
                i) : (s.length === 1 ? i.uuid = s[0] : s.length >= 2 ? (i.uuid = this.widget.requestsList[this.widget.requestsList.length - 1]?.requestId,
                i.firstUuid = this.widget.requestsList[0]?.requestId) : i.uuid = this.app.servicerData.rid,
                i)
            }
            preparedTeasersData() {
                return this.teasersList.map(t=>{
                    if (t.isVisible) {
                        let e = new Date().getTime() - t.startingViewTime
                          , i = t.viewTime ? t.viewTime + e : e;
                        return {
                            ...t,
                            viewTime: i
                        }
                    } else
                        return t
                }
                ).filter(t=>this.isTimeMoreMinLimit(t.viewTime) && this.acceptableTeaserTypes.some(e=>t.className.indexOf(e) !== -1) && t.showHash.length && t.showHash !== "undefined").map(t=>({
                    compositeId: this.app.id,
                    showHash: t.showHash,
                    uuid: t.requestId,
                    visibleTime: t.viewTime
                }))
            }
            preparedUserData(t) {
                let e = new Date().getTime() - t.startingViewTime;
                return {
                    pageViewId: this.getPvid(),
                    pageUrl: t.href,
                    visibleTime: e
                }
            }
            resetTeasersViewTime() {
                this.teasersList = this.teasersList.map(t=>({
                    ...t,
                    viewTime: 0,
                    isVisible: !1,
                    startingViewTime: 0
                }))
            }
            restartTeasersViewTime() {
                this.teasersVisibleList.forEach(t=>{
                    this.teasersObserving(null, !0, 1, t.iteration, t.page)
                }
                ),
                this.teasersVisibleList = []
            }
            updateCurrentUserPage(t) {
                this.app.context[this.keyUserPages] = this.app.context[this.keyUserPages].map(e=>e.pathname === this.currentPath ? {
                    ...e,
                    ...t
                } : e)
            }
            isMuidn() {
                return !!this.app.getMuid().length
            }
            isTimeOverLimit(t) {
                return t > this.timeOutLimit * 6e4
            }
            isTimeMoreMinLimit(t) {
                return t > this.viewMinTime * 1e3
            }
            getCurrentPage() {
                return this.app.context[this.keyUserPages].filter(t=>t.pathname === this.currentPath)[0]
            }
            getPvid() {
                let t = "";
                try {
                    t = this.app.pvid || this.app.context._mgPvid || this.app.context.localStorage.getItem("_mgPvid") || ""
                } catch {}
                return t
            }
        }
    }
    );
    var Ra = {};
    at(Ra, {
        RtbBlock: ()=>Ti
    });
    var Ti, Ma = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Ti = class extends W {
            constructor(t) {
                super(t),
                this.name = "RtbBlock",
                this.addHook("afterLoadNewsHooks", this.cmPixelLoad)
            }
            cmPixelLoad() {
                if (!this.app.context["i.js.loaded"] && this.app.cookieMatchingDomain.length) {
                    this.app.context["i.js.loaded"] = !0;
                    let t = this.app.webProtocol + "//" + this.app.cookieMatchingDomain + "/i.js?"
                      , e = typeof this.app.realRoot < "u" ? this.app.realRoot : this.app.root
                      , i = {}
                      , s = this.app.getMuid();
                    s.length && (i.muid = s),
                    i.cbuster = this.app.getCbusterParameter(),
                    t += Object.keys(i).map(c=>c + "=" + encodeURIComponent(i[c])).join("&");
                    let o = {
                        charset: "utf-8",
                        onerror: ()=>{
                            this.app.context["i.js.loaded"] = !1;
                            let c = `${this.name} failed to load i.js`;
                            this.app.log(c),
                            this.app.debugBlock.sendData(c)
                        }
                        ,
                        dest: e.parentNode
                    };
                    this.app.request.script("i.js", t, {}, o)
                }
            }
        }
    }
    );
    var Oa = {};
    at(Oa, {
        ObserverBlock: ()=>Si
    });
    var Si, Ha = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Si = class extends W {
            constructor(t) {
                super(t),
                this.name = "ObserverBlock",
                this.addHook("afterLoadNewsHooks", this.initWidgetObserver)
            }
            initWidgetObserver() {
                if (this.app.context.IntersectionObserver) {
                    this.app.widgetObserver = new IntersectionObserver(e=>{
                        e.forEach(i=>{
                            let s = i.isIntersecting ? "shown" : "hidden";
                            if (i.target == this.app.root)
                                this.app.log(`Observer. Widget ${s}. Ratio: ${i.intersectionRatio}`),
                                this.app.lifeCycleBlock.processHooks("observerWidgetHooks", [i.isIntersecting, i.intersectionRatio]);
                            else
                                for (let o = 0; o < this.app.observerTeasersHooks.length; o++) {
                                    let c = 1
                                      , d = 1;
                                    try {
                                        (i.target instanceof HTMLElement || i.target instanceof HTMLDivElement) && (c = this.app.teaserData[i.target.dataset.i].iteration,
                                        d = this.app.teaserData[i.target.dataset.i].page)
                                    } catch {}
                                    this.app.log(`Observer. Teaser[${d}, ${c}] ${s}. 
                Ratio: ${i.intersectionRatio}`),
                                    this.app.lifeCycleBlock.processHooks("observerTeasersHooks", [i.target, i.isIntersecting, i.intersectionRatio, c, d])
                                }
                        }
                        )
                    }
                    ,{
                        threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                    }),
                    this.app.widgetObserver.observe(this.app.root);
                    let t = [].slice.call(this.app.root.getElementsByClassName("mgline"));
                    for (let e of t)
                        e.dataset.observingStart || (e.dataset.observingStart = "0",
                        e.dataset.observingTime = "0",
                        this.app.widgetObserver.observe(e))
                }
            }
        }
    }
    );
    var Wa = {};
    at(Wa, {
        RefactoredMonitorBlock: ()=>Ei
    });
    var Ei, Na = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        Bt();
        Ei = class extends W {
            constructor(t) {
                super(t),
                this.regAllowedHash = /([A-Za-z0-9\-_\*]{64})/,
                this.teasersDataList = [],
                this.firstByType = {},
                this.monitorDispatcher = null,
                this.baseUrl = `${this.app.webProtocol}//c.adskeeper.co.uk/`,
                this.name = "RefactoredMonitorBlock",
                this.addHook("afterLoadNewsHooks", this.init)
            }
            init() {
                this.monitorDispatcher || (this.versionCapping = typeof this.app.context.IntersectionObserver == "function" ? 3 : 2,
                this.thresholdRatio = Number(this.app.globalSettings.capping_observer_threshold) || .5,
                this.thresholdTime = Number(this.app.globalSettings.capping_observer_time) || 1e3,
                this.versionCapping === 3 ? this.initMonitorByObserver() : this.initMonitorByTimeout())
            }
            initMonitorByObserver() {
                this.monitorDispatcher = this.debounce(()=>this.prepareCappingData()),
                this.addHook("observerTeasersHooks", this.teaserObserver)
            }
            initMonitorByTimeout() {
                let t = ()=>{
                    let e = this.app.root.getElementsByClassName("mgline");
                    for (let i = 0; i < e.length; i++) {
                        let s = e[i];
                        if (s.dataset.observingStart || (s.dataset.observingStart = "0",
                        s.dataset.observingTime = "0"),
                        this.isAllowedMonitorTeaser(s)) {
                            let o = this.app.utils.elementViewportIntersection(s)
                              , c = this.getTeaserObservingTime(s, o);
                            c >= this.thresholdTime && this.setTeaserShowed(s, c)
                        }
                    }
                    this.prepareCappingData(),
                    this.monitorDispatcher()
                }
                ;
                this.monitorDispatcher = ()=>setTimeout(t, this.thresholdTime),
                this.monitorDispatcher()
            }
            teaserObserver(t, e, i, s, o) {
                if (this.isAllowedMonitorTeaser(t)) {
                    let c = this.getTeaserObservingTime(t, i);
                    c >= this.thresholdTime ? (this.setTeaserShowed(t, c),
                    this.monitorDispatcher()) : Number(t.dataset.observingStart) > 0 && setTimeout(()=>{
                        this.checkTeaserShowed(t)
                    }
                    , this.thresholdTime)
                }
            }
            isAllowedMonitorTeaser(t) {
                return !t.dataset.showed
            }
            getTeaserObservingTime(t, e) {
                let i = Number(t.dataset.observingStart)
                  , s = Number(t.dataset.observingTime);
                return e >= this.thresholdRatio ? i === 0 ? t.dataset.observingStart = String(new Date().getTime()) : t.dataset.observingTime = String(new Date().getTime() - i + s) : (t.dataset.observingTime = "0",
                t.dataset.observingStart = "0"),
                Number(t.dataset.observingTime)
            }
            checkTeaserShowed(t) {
                let e = Number(t.dataset.observingStart);
                if (!t.dataset.showed && e > 0) {
                    let i = new Date().getTime() - e + Number(t.dataset.observingTime);
                    i >= this.thresholdTime && (this.setTeaserShowed(t, i),
                    this.monitorDispatcher())
                }
            }
            setTeaserShowed(t, e) {
                t.dataset.showed = "1",
                t.dataset.observingTime = String(e),
                this.teasersDataList.push(this.getTeaserCappingData(t))
            }
            getTeaserCappingData(t) {
                let e = this.app.utils.getRect(t, !0)
                  , i = t.dataset.i;
                return {
                    width: Math.round(e.width),
                    height: Math.round(e.height),
                    atf: e.top < this.app.utils.getViewportSize().height,
                    align: this.getTeaserAlign(e),
                    desc: this.isTeaserElementVisible(t, "mcdesc"),
                    price: this.isTeaserElementVisible(t, "mcprice"),
                    domain: this.isTeaserElementVisible(t, "mcdomain"),
                    hash: i,
                    coopType: this.app.teaserData[i].coopType,
                    isSend: !1
                }
            }
            prepareCappingData() {
                if (this.teasersDataList.some(t=>!t.isSend)) {
                    this.app.lifeCycleBlock.processHooks("beforePrepareCappingDataHooks");
                    let t = []
                      , e = {}
                      , i = ""
                      , s = null;
                    this.teasersDataList.forEach(o=>{
                        let c = o.hash;
                        if (!o.isSend && (o.isSend = !0,
                        this.app.teaserData[c].isViewed = !0,
                        i.length || (i = c),
                        this.regAllowedHash.exec(c))) {
                            let d = o.coopType
                              , u = this.getTeaserPrefix(o);
                            t.push("v=" + u + c),
                            this.firstByType[d] || (this.firstByType[d] = 1,
                            e["f" + d] = 1);
                            {
                                let f = this.app.teaserData[c].imp;
                                for (let I of f)
                                    this.app.countersBlock.sendCustomCounter(I)
                            }
                            d === pt.Wages && this.app.sspDoubleClickHash.push(c),
                            this.app.lifeCycleBlock.processHooks("afterPrepareCappingDataHooks", [c])
                        }
                    }
                    ),
                    this.app.pagesServicerData.length && i.length && this.app.teaserData[i] && (s = this.app.pagesServicerData.filter(o=>o.page === this.app.teaserData[i].page)[0]?.servicerData),
                    (typeof this.app.context._mgwcapping > "u" || this.app.context._mgwcapping.indexOf(this.app.id) === -1) && (e.f = 1),
                    this.app.context._mgwcapping = this.app.context._mgwcapping || [],
                    this.app.context._mgwcapping.push(this.app.id),
                    t.length && this.sendTeaserCappingData(t, e, s)
                }
            }
            getTeaserPrefix(t) {
                return t.width + "|" + t.height + "|" + ((t.desc ? 1 : 0) + (t.price ? 2 : 0) + (t.domain ? 4 : 0) + (t.atf ? 8 : 0) + (t.align === "right" ? 16 : 0) + (t.align === "left" ? 32 : 0)) + "|"
            }
            sendWidgetCappingData(t) {
                let {cbuster: e, cxurl: i, lu: s, pr: o} = this.app.pageViewPixelBlock.getPageDataParams()
                  , {h2: c, tt: d, ts: u, psid: f, iv: I, adv_src_id: T} = t || {}
                  , E = {
                    cid: this.app.id,
                    pageImp: this.getPageImpParam(),
                    cbuster: e,
                    cxurl: i,
                    lu: s,
                    pr: o,
                    h2: c,
                    tt: d,
                    ts: u,
                    psid: f,
                    iv: I,
                    adv_src_id: T
                };
                this.app.request.pixel("widgetCapping", `${this.baseUrl}w?${this.getParamsByString(E)}`, {}, {})
            }
            sendTeaserCappingData(t, e, i) {
                let s = this.app.getMuid()
                  , {h2: o, rid: c, tt: d, ts: u, psid: f, iv: I} = i || {}
                  , {views: T, renders: E} = this.app.getViewrateParams();
                e = {
                    ...e,
                    cid: this.app.id,
                    cbuster: this.app.getCbusterParameter(),
                    pageImp: this.getPageImpParam(),
                    pvid: this.app.pvid,
                    pv: this.versionCapping,
                    h2: o,
                    rid: c,
                    tt: d,
                    ts: u,
                    psid: f,
                    iv: I,
                    completion: `${T},${E}`
                },
                s.length && (e.muidn = s),
                this.app.request.pixel("capping", `${this.baseUrl}c?${t.join("&")}&${this.getParamsByString(e)}`, {}, {}),
                this.app.lifeCycleBlock.processHooks("afterSendCappingHooks")
            }
            getTeaserAlign(t) {
                let e = this.app.context.document.body.scrollWidth;
                return t.right < .3 * e ? "left" : t.left >= .7 * e ? "right" : "center"
            }
            isTeaserElementVisible(t, e) {
                let i = t.getElementsByClassName(e);
                if (i.length) {
                    let s = i[0].getBoundingClientRect();
                    return !(s.right - s.left === 0 || s.bottom - s.top === 0)
                } else
                    return !1
            }
            getPageImpParam() {
                let t = 0;
                if (this.app.context.isFBIA1419550 && this.app.context.localStorage) {
                    let e = this.app.context.localStorage.getItem("_mgPageImp862931")
                      , i = Number(this.app.globalSettings.ia_page_imp_timeout) || 180;
                    (!e || new Date().getTime() - Number(e) > i * 1e3) && (this.app.context.localStorage.setItem("_mgPageImp862931", String(new Date().getTime())),
                    t = 1)
                } else {
                    let e = this.app.getMostTopWindow()
                      , i = e.location.pathname;
                    e._mgPageImp862931 = e._mgPageImp862931 || [];
                    let s = e._mgPageImp862931;
                    Array.isArray(s) && s.indexOf(i) === -1 && (s.push(i),
                    t = 1)
                }
                return t
            }
            debounce(t, e=200) {
                let i;
                return (...s)=>{
                    clearTimeout(i),
                    i = setTimeout(()=>{
                        t.apply(this, s)
                    }
                    , e)
                }
            }
            getParamsByString(t) {
                return Object.keys(t).filter(e=>typeof t[e] < "u" && (typeof t[e] == "string" ? !!t[e].length : !0)).map(e=>`${e}=${t[e]}`).join("&")
            }
        }
    }
    );
    var xe, Va = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        it();
        xe = class extends W {
            constructor(t) {
                super(t),
                this.addHook("afterInitHooks", this.init)
            }
            init() {
                if (!this.initCheck())
                    return;
                this.check() || this.addHook("afterLoadNewsHooks", this.load);
                let t = this.getData();
                t !== "" && (this.app.requestParams[this.paramName] = encodeURIComponent(t))
            }
            initCheck() {
                return !0
            }
        }
    }
    );
    var Fa = {};
    at(Fa, {
        ID5Block: ()=>Ci
    });
    var Ci, qa = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        Va();
        Bt();
        Ci = class extends xe {
            constructor(t) {
                super(t),
                this.storageKey = "_mgID5",
                this.name = "ID5Block",
                this.paramName = "id5",
                this.refreshTime = 36e5
            }
            id5Init() {
                let t = "https://cdn.id5-sync.com/api/1.0/id5-api.js"
                  , e = this.app.context.document.createElement("script");
                e.async = !0,
                e.type = "text/javascript",
                e.src = t,
                this.app.root.parentNode.insertBefore(e, this.app.root);
                let i = 0
                  , s = setInterval(()=>{
                    i++,
                    i > 20 && clearInterval(s),
                    typeof this.app.context.ID5 < "u" && this.app.context.ID5.loaded === !0 && (clearInterval(s),
                    this.app.context.ID5.init(this.id5Params())?.onAvailable(this.id5Callback.bind(this)))
                }
                , 100)
            }
            id5Params() {
                return {
                    partnerId: 231,
                    refreshInSeconds: 15
                }
            }
            id5Callback(t) {
                let e = t.getUserId();
                if (typeof e < "u" && e != 0)
                    if (this.app.context._mgID5Exists = !0,
                    this.app.isAmp()) {
                        let i = this.storageKey + "=" + e + ";domain=.ampproject.net;Max-Age=" + this.refreshTime / 1e3 + ";SameSite=None;Secure";
                        this.app.context.document.cookie = i
                    } else
                        this.app.context.localStorage.setItem(this.storageKey, JSON.stringify({
                            time: new Date().getTime(),
                            data: e
                        }))
            }
            check() {
                let t = !0;
                if (this.app.isAmp())
                    this.app.getCookieValue(this.storageKey).length || (t = !1);
                else {
                    let e = this.app.context.localStorage.getItem(this.storageKey);
                    if (e) {
                        let i = JSON.parse(e);
                        new Date().getTime() - i.time > this.refreshTime && (t = !1)
                    } else
                        t = !1
                }
                return t
            }
            getData() {
                let t = "";
                if (this.app.isAmp())
                    t = this.app.getCookieValue(this.storageKey);
                else {
                    let e = this.app.context.localStorage.getItem(this.storageKey);
                    e && (t = JSON.parse(e).data)
                }
                return t
            }
            load() {
                typeof this.app.context._mgID5Exists > "u" && this.id5Init()
            }
            initCheck() {
                return this.app.currentSubnet === Lt.MG
            }
        }
    }
    );
    var za = ae(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R()
    }
    );
    var Ua = ae(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R()
    }
    );
    var ue, fe, Ke = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        Pe();
        (function(g) {
            g.Init = "init",
            g.Render = "render"
        }
        )(ue || (ue = {}));
        fe = class {
            constructor(t) {
                this.app = t,
                this.app.debugBlock.initDebugger(),
                this.app.lifeCycleBlock = this,
                this.stage = null,
                this.workInProgress = !1,
                this.isUserAgentDataAvailable = typeof this.app.context?.navigator?.userAgentData?.getHighEntropyValues == "function",
                this.isAdBlockDetect = !1,
                this.workersAvailable = typeof Worker < "u";
                try {
                    let e = new Worker(window.URL.createObjectURL(new Blob([],{
                        type: "text/javascript"
                    })))
                } catch {
                    this.workersAvailable = !1
                }
                if (this.workersAvailable) {
                    let e = new Blob([`self.onmessage = function(e) { 
              if (e.data.timeout === 0) { self.postMessage({ eventId: e.data.eventId }); }
              else { setTimeout(function() { self.postMessage({ eventId: e.data.eventId }); }, e.data.timeout); }
            }`],{
                        type: "text/javascript"
                    });
                    this.worker = new Worker(window.URL.createObjectURL(e)),
                    this.workerCallbacks = {},
                    this.worker.addEventListener("message", i=>{
                        this.workerCallbacks[i.data.eventId](),
                        delete this.workerCallbacks[i.data.eventId]
                    }
                    )
                }
            }
            async run() {
                this.stage = ue.Init,
                this.workInProgress = !0,
                this.app.time("run()");
                try {
                    if (typeof this.app.context._mgPauseBackfill_1419550 < "u" && (this.app.time("waitForLoadBackfill()"),
                    await this.waitForLoadBackfill(),
                    this.app.timeEnd("waitForLoadBackfill()")),
                    this.app.getVideoMetricsParams() === null && (this.app.time("initVideoMetricsBlock"),
                    await this.execute("", async()=>{
                        this.app.videoMetricsBlock = new (await Promise.resolve().then(()=>(Zi(),
                        ji))).VideoMetricsBlock(this.app)
                    }
                    ),
                    this.app.timeEnd("initVideoMetricsBlock")),
                    this.isUserAgentDataAvailable && this.app.getUserAgentDataParams() === null && (this.app.time("initNavigatorAgentDataBlock"),
                    await this.execute("", async()=>{
                        this.app.navigatorAgentDataBlock = new (await Promise.resolve().then(()=>(Ji(),
                        Ki))).NavigatorAgentDataBlock(this.app)
                    }
                    ),
                    this.app.timeEnd("initNavigatorAgentDataBlock")),
                    this.app.isAmp() && (this.app.time("initAmpRenderBlock"),
                    await this.execute("", async()=>{
                        this.app.ampRenderBlock = new (await Promise.resolve().then(()=>(Qi(),
                        Xi))).AmpRenderBlock(this.app)
                    }
                    ),
                    this.app.timeEnd("initAmpRenderBlock")),
                    this.isUserAgentDataAvailable && this.app.getUserAgentDataParams() === null && (this.app.time("app.navigatorAgentDataBlock.waitForUserAgentData()"),
                    await this.app.navigatorAgentDataBlock.waitForUserAgentData(),
                    this.app.timeEnd("app.navigatorAgentDataBlock.waitForUserAgentData()")),
                    this.app.time("initBlocks()"),
                    await this.initBlocks(),
                    this.app.timeEnd("initBlocks()"),
                    this.app.rootId === "TempRootId" && (this.app.time("waitWidgetLoad()"),
                    await this.waitWidgetLoad(),
                    this.app.timeEnd("waitWidgetLoad()")),
                    this.app.time("processHooks(beforeInitHooks)"),
                    await this.processHooks("beforeInitHooks", null),
                    this.app.timeEnd("processHooks(beforeInitHooks)"),
                    await this.execute("app.init()", ()=>{
                        this.app.init()
                    }
                    ),
                    this.app.time("processHooks(afterInitHooks)"),
                    await this.processHooks("afterInitHooks", null),
                    this.app.timeEnd("processHooks(afterInitHooks)"),
                    this.app.time("app.inSiteNotificationBlock.waitForInSiteWidget()"),
                    await this.app.inSiteNotificationBlock.waitForInSiteWidget(),
                    this.app.timeEnd("app.inSiteNotificationBlock.waitForInSiteWidget()"),
                    this.app.precalcRect === null) {
                        let t = await this.execute("app.preparePrerenderData()", ()=>this.app.sendDimensions.preparePrerenderData())
                          , e = await this.execute("app.templateFunc()", ()=>{
                            let i = this.app.getRenderer(this.app.templateText);
                            return i.setRawTemplate(this.app.templateText),
                            i.getHtml(t)
                        }
                        );
                        await this.execute("app.prerenderNews()", ()=>{
                            this.app.sendDimensions.prerenderNews(e)
                        }
                        ),
                        await this.execute("app.calcPreRenderingBlock()", ()=>{
                            this.app.sendDimensions.calcPreRenderingBlock()
                        }
                        , 50)
                    }
                    this.app.time("processHooks(afterPreRenderNewsHooks)"),
                    await this.processHooks("afterPreRenderNewsHooks", null),
                    this.app.timeEnd("processHooks(afterPreRenderNewsHooks)"),
                    this.app.getVideoMetricsParams() === null && (this.app.time("app.videoMetricsBlock.waitForCollectMetrics()"),
                    await this.app.videoMetricsBlock.waitForCollectMetrics(),
                    this.app.timeEnd("app.videoMetricsBlock.waitForCollectMetrics()")),
                    await this.execute("app.injectScript()", ()=>{
                        this.app.injectScript(!1)
                    }
                    ),
                    this.app.initServicerRequest || (this.app.time("processHooks(afterInjectScriptHooks)"),
                    await this.processHooks("afterInjectScriptHooks", null),
                    this.app.timeEnd("processHooks(afterInjectScriptHooks)"))
                } catch (t) {
                    this.app.log("", "error", t)
                }
                this.workInProgress = !1,
                this.app.timeEnd("run()")
            }
            async render(t, e) {
                await this.waitForFree(),
                this.stage = ue.Render,
                this.workInProgress = !0,
                this.app.time("render()");
                try {
                    await this.execute("loadNewsPrestart()", ()=>{
                        this.app.loadNewsPrestart(e, t?.length)
                    }
                    );
                    let i = this.app.responseParser.getAdUnitsFromJson(t);
                    this.app.responseParser.fillAdUnitsData(i),
                    this.app.time("processHooks(beforeLoadNewsHooks)"),
                    await this.processHooks("beforeLoadNewsHooks", [t, e]),
                    this.app.timeEnd("processHooks(beforeLoadNewsHooks)"),
                    await this.execute("app.loadNews()", ()=>{
                        this.app.getRenderer(this.app.templateText).setRawTemplate(this.app.templateText),
                        this.app.loadNews(i)
                    }
                    ),
                    this.app.time("processHooks(afterLoadNewsHooks)"),
                    await this.processHooks("afterLoadNewsHooks", null),
                    this.app.timeEnd("processHooks(afterLoadNewsHooks)")
                } catch (i) {
                    this.app.log("", "error", i)
                }
                window.performance?.mark("render_finish", {
                    detail: {
                        _mgwidget: 1419550
                    }
                }),
                this.workInProgress = !1,
                this.app.timeEnd("render()")
            }
            async initBlocks() {
                if (await this.execute("", async()=>{
                    this.app.mgqBlock = new (await Promise.resolve().then(()=>(ts(),
                    Yi))).MgqBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.utils = new (await Promise.resolve().then(()=>(is(),
                    es))).UtilsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.consentsBlock = new (await Promise.resolve().then(()=>(os(),
                    ns))).ConsentsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.request = new (await Promise.resolve().then(()=>(ps(),
                    rs))).RequestBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.contextBlock = new (await Promise.resolve().then(()=>(ls(),
                    cs))).ContextBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.pageViewPixelBlock = new (await Promise.resolve().then(()=>(ds(),
                    hs))).PageViewPixelBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.backButtonBlock = new (await Promise.resolve().then(()=>(fs(),
                    us))).BackButtonBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.main = new (await Promise.resolve().then(()=>(gs(),
                    ms))).MainBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.responseParser = new (await Promise.resolve().then(()=>(ys(),
                    vs))).ResponseParserBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.cookieBlock = new (await Promise.resolve().then(()=>(ws(),
                    bs))).CookieBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.stylesheetsBlock = new (await Promise.resolve().then(()=>(Is(),
                    ks))).StylesheetsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.advertLinkBlock = new (await Promise.resolve().then(()=>(Ts(),
                    Ds))).AdvertLinkBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.sendDimensions = new (await Promise.resolve().then(()=>(Es(),
                    Ss))).SendDimensionsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.InternalExchangeLogger = new (await Promise.resolve().then(()=>(Ps(),
                    Cs))).InternalExchangeLoggerBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.iframeSizeChangerBlock = new (await Promise.resolve().then(()=>(Ls(),
                    Bs))).IframeSizeChangerBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.rejectBlock = new (await Promise.resolve().then(()=>(_s(),
                    As))).RejectBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.dsaIconBlock = new (await Promise.resolve().then(()=>(Rs(),
                    Gs))).DSAIconBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.teaserHoverBlock = new (await Promise.resolve().then(()=>(Os(),
                    Ms))).TeaserHoverBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.inAppParamsBlock = new (await Promise.resolve().then(()=>(Ns(),
                    Ws))).InAppParamsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.countersBlock = new (await Promise.resolve().then(()=>(Fs(),
                    Vs))).CountersBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.subnetsBlock = new (await Promise.resolve().then(()=>(zs(),
                    qs))).SubnetsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.scrollTimeDoubleClickBlock = new (await Promise.resolve().then(()=>($s(),
                    Us))).ScrollTimeDoubleClickBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.smartDoubleClickBlock = new (await Promise.resolve().then(()=>(Ks(),
                    Zs))).SmartDoubleClickBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.mobileDoubleClickBlock = new (await Promise.resolve().then(()=>(Xs(),
                    Js))).MobileDoubleClickBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.desktopDoubleClickBlock = new (await Promise.resolve().then(()=>(Ys(),
                    Qs))).DesktopDoubleClickBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.sspDoubleClickBlock = new (await Promise.resolve().then(()=>(ea(),
                    ta))).SspDoubleClickBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.externalCountersBlock = new (await Promise.resolve().then(()=>(sa(),
                    ia))).ExternalCountersBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.videoTeasersBlock = new (await Promise.resolve().then(()=>(na(),
                    aa))).VideoTeasersBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.originTrialsBlock = new (await Promise.resolve().then(()=>(ra(),
                    oa))).OriginTrialsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.calculateSessionsBlock = new (await Promise.resolve().then(()=>(ca(),
                    pa))).CalculateSessionsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.calculateViewrateBlock = new (await Promise.resolve().then(()=>(ha(),
                    la))).CalculateViewrateBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.renderClassicBlock = new (await Promise.resolve().then(()=>(xa(),
                    da))).RenderClassicBlock(this.app)
                }
                ),
                this.app.ResponsiveBlock = new (await Promise.resolve().then(()=>(fa(),
                ua))).ResponsiveBlock(this.app),
                await this.execute("", async()=>{
                    this.app.antifraudStatisticsBlock = new (await Promise.resolve().then(()=>(va(),
                    ga))).AntifraudStatisticsBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.antifraudBlock = new (await Promise.resolve().then(()=>(ka(),
                    wa))).AntifraudBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.fillCardLikesBlock = new (await Promise.resolve().then(()=>(Da(),
                    Ia))).FillCardLikesBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.accidentalClicksBlock = new (await Promise.resolve().then(()=>(Sa(),
                    Ta))).AccidentalClicksBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.activateDelayBlock = new (await Promise.resolve().then(()=>(Ca(),
                    Ea))).ActivateDelayBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.inSiteNotificationBlock = new (await Promise.resolve().then(()=>(Ba(),
                    Pa))).InSiteNotificationBlock(this.app)
                }
                ),
                this.isAdBlockDetect) {
                    for (let t in this.app.childWidgetsData)
                        if (this.app.childWidgetsData.hasOwnProperty(t)) {
                            let e = this.app.childWidgetsData[t].isAdblockChild
                              , i = this.app.childWidgetsData[t].childSubtype;
                            if (e && i === "in-article-adblock") {
                                await this.execute("", async()=>{
                                    this.app.hideDescriptionBlock = new (await Promise.resolve().then(()=>(Aa(),
                                    La))).HideDescriptionBlock(this.app)
                                }
                                );
                                break
                            }
                        }
                }
                await this.execute("", async()=>{
                    this.app.collectViewDataBlock = new (await Promise.resolve().then(()=>(Ga(),
                    _a))).CollectViewDataBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.rtbBlock = new (await Promise.resolve().then(()=>(Ma(),
                    Ra))).RtbBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.observerBlock = new (await Promise.resolve().then(()=>(Ha(),
                    Oa))).ObserverBlock(this.app)
                }
                ),
                await this.execute("", async()=>{
                    this.app.refactoredMonitorBlock = new (await Promise.resolve().then(()=>(Na(),
                    Wa))).RefactoredMonitorBlock(this.app)
                }
                );
                try {
                    this.app.context.localStorage && await this.execute("ID5Block", async()=>{
                        this.app.id5Block = new (await Promise.resolve().then(()=>(qa(),
                        Fa))).ID5Block(this.app)
                    }
                    )
                } catch {}
                try {
                    await Promise.resolve().then(()=>ne(za())),
                    await Promise.resolve().then(()=>ne(Ua())),
                    await this.initializeCustomFuncBlocks()
                } catch (t) {
                    this.app.log("LifeCycleBlock - Initialize Custom Func Blocks error:", "error", t)
                }
            }
            async initializeCustomFuncBlocks() {
                let t = window.AdskeeperInfC1419550.parentCustomFuncBlocks || {};
                for (let e in t)
                    if (t.hasOwnProperty(e)) {
                        let i = e.replace(/[-_]/g, "").replace(/./, o=>o.toUpperCase()) + "Block"
                          , s = `Custom func block - ${e}`;
                        await this.execute(s, o=>{
                            try {
                                this.app[i] = new t[e](this.app),
                                o()
                            } catch (c) {
                                this.app.log(`LifeCycleBlock - ${s} error:`, "error", c),
                                this.app.debugBlock.sendData(c.message),
                                o()
                            }
                        }
                        , 0, !1, !0)
                    }
            }
            async processHooks(t, e) {
                let i = this.app[t];
                for (let s = 0; s < i.length; s++) {
                    let o = i[s];
                    try {
                        await o(e)
                    } catch (c) {
                        this.app.log(`LifeCycleBlock - ${t} hook ${o} failed`, "error", c)
                    }
                }
            }
            async execute(t, e, i=0, s=!1, o=!1) {
                t && typeof this.app.time == "function" && this.app.time(t);
                let c = navigator.userAgent.toLowerCase()
                  , d = this.app.isAmp() || !(c.indexOf("chrome") > -1 && navigator.vendor.toLowerCase().indexOf("google") > -1) || c.indexOf("fbav") > -1 || c.indexOf("fban") > -1;
                return new Promise(u=>{
                    if (d && !s)
                        o ? e(u) : u(e());
                    else if (this.app.context.scheduler)
                        this.app.context.scheduler.postTask(()=>{
                            o ? e(u) : u(e())
                        }
                        , {
                            delay: i
                        });
                    else if (this.workersAvailable) {
                        let f = ("0000000000" + Math.round(Math.random() * 1e10).toString(16)).slice(-10);
                        this.workerCallbacks[f] = ()=>{
                            o ? e(u) : u(e())
                        }
                        ,
                        this.worker.postMessage({
                            eventId: f,
                            timeout: i
                        })
                    } else
                        setTimeout(()=>{
                            o ? e(u) : u(e())
                        }
                        , i)
                }
                ).finally(()=>{
                    t && typeof this.app.timeEnd == "function" && this.app.timeEnd(t)
                }
                )
            }
            async waitForFree() {
                return new Promise(t=>{
                    (function e() {
                        this.workInProgress ? this.execute("", ()=>{
                            e.bind(this)()
                        }
                        , 50, !0) : t()
                    }
                    ).bind(this)()
                }
                )
            }
            async waitWidgetLoad() {
                return new Promise(t=>{
                    this.app.lifeCycleLoadResolver = t
                }
                )
            }
            async waitForLoadBackfill() {
                return new Promise(t=>{
                    let e = i=>{
                        let s = "_mgLoadBackfill_1419550";
                        i.data === s && typeof this.app.context[s] > "u" && (this.app.context[s] = !0,
                        this.app.context.removeEventListener("message", e, !1),
                        this.app.context.parent.postMessage(s, "*"),
                        t())
                    }
                    ;
                    this.app.context.addEventListener("message", e, !1)
                }
                )
            }
        }
    }
    );
    var me, $a = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        $i();
        Ke();
        me = class {
            canLoad() {
                let t = this._getVersion();
                return t != null ? (this._loadVersion(t),
                !0) : !1
            }
            _getVersion() {
                let t = this._getMgID()
                  , e = this._getCodes();
                if (t != null) {
                    if (parent.window.document.getElementById(e[9]))
                        return 9;
                    if (parent.window.document.getElementById(e[10]))
                        return 10
                } else if ([this._getCodes(1419550)[9], this._getCodes(1419550)[9], this._getCodes(1419550)[10], this._getCodes(1419550)[10]].filter(s=>document.getElementById(s))[0])
                    return 11;
                if (document.getElementById(e[4]))
                    return 4
            }
            _loadVersion(t) {
                +t == 4 ? this._loadVersion4(t) : +t <= 10 ? this._loadVersion9To10(t) : +t == 11 && this._loadVersion11WithWidgetID()
            }
            _loadVersion11WithWidgetID() {
                let t = this._getUniqID()
                  , e = t !== "" ? "_" + t : ""
                  , i = null;
                [[this._getCode(10, 1419550), 1419550], [this._getCode(10, 1419550), 1419550], [this._getCode(9, 1419550), 1419550], [this._getCode(9, 1419550), 1419550]].some(([c,d])=>{
                    if (document.getElementById(c))
                        return i = d,
                        !0
                }
                );
                let s = [this._getCode(9, i), this._getCode(10, i)].filter(c=>window.document.getElementById(c))[0]
                  , o = "AdskeeperComposite1419550" + e;
                this._setDivs({
                    id: o,
                    rootID: s,
                    newRootID: s + e
                }),
                this._setPreloadBlockId(i, e),
                this._loadApp({
                    id: o,
                    containerID: i + e,
                    version: 11
                })
            }
            _loadVersion4(t) {
                let i = this._getCode(t);
                document.getElementById(i).innerHTML = "",
                this._loadApp({
                    id: i,
                    version: t,
                    fallback: !1,
                    containerID: 0
                })
            }
            _loadVersion9To10(t) {
                let e = "_" + this._getUniqID()
                  , i = this._getCode(t)
                  , s = "AdskeeperComposite1419550" + e
                  , o = parent.window;
                this._setPreloadBlockId(this._getMgID(), e),
                this._setDivs({
                    id: s,
                    rootID: i,
                    context: o,
                    newRootID: i + e
                }),
                this._loadApp({
                    id: s,
                    version: t,
                    context: o,
                    containerID: this._getMgID() + e
                })
            }
            _loadApp({id: t, context: e=window, fallback: i=!1, containerID: s=this._getMgID(), uniqID: o=this._getUniqID(), version: c}) {
                this.widgetLoadV16Count && (c = 16),
                this.widget = new re(t,e,i,s,o,c),
                this.lifeCycle = new fe(this.widget),
                window.AdskeeperInfC1419550 = this.widget
            }
            _setDivs({rootID: t, id: e, context: i=window, newRootID: s=null}) {
                let o = i.document.getElementById(t)
                  , c = i.document.createElement("div");
                c.id = e,
                o.appendChild(c),
                s && (o.id = s)
            }
            _setPreloadBlockId(t, e) {
                let i = "AdskeeperPreloadC" + t
                  , s = "M862931PreloadC" + t
                  , o = [i, s].filter(c=>{
                    try {
                        return parent.window.document.getElementById(c)
                    } catch {
                        return window.document.getElementById(c)
                    }
                }
                )[0];
                if (o)
                    try {
                        parent.window.document.getElementById(o).id = o + e
                    } catch {
                        window.document.getElementById(o).id = o + e
                    }
            }
            _getUniqID() {
                return this.uniqID || (this.uniqID = window.uniqId || ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)),
                this.uniqID
            }
            _getCodes(t=null) {
                let e = t !== null ? t : this._getMgID();
                return {
                    4: "M862931Composite1419550",
                    9: "AdskeeperScriptRootC" + e,
                    10: "M862931ScriptRootC" + e
                }
            }
            _getCode(t, e=null) {
                return this._getCodes(e)[t]
            }
            _getMgID() {
                return typeof this.mgID > "u" && (document.getElementById("MG_ID") ? this.mgID = document.getElementById("MG_ID").innerHTML : this.mgID = null),
                this.mgID
            }
            loadCurrentWidget() {
                let t = !0
                  , e = "mg_loaded_862931_1419550";
                typeof window[e] < "u",
                t && (window[e] = !0,
                window[e] = !0,
                this.lifeCycle.run())
            }
            waitAndLoadWidget(t) {
                let i = !1;
                this.widgetLoadV16Count = 0;
                let s, o;
                t && (s = this._getUniqID(),
                o = s !== "" ? "_" + s : "",
                this._loadApp({
                    id: "TempRootId",
                    containerID: 1419550 + o,
                    version: 16
                }),
                this.loadCurrentWidget()),
                window._mgWidgetLoad1419550 = ()=>{
                    if (this.widgetLoadV16Count++,
                    this.widget && this.widget.versionWidget !== 16 && (this.widget.versionWidget = 16),
                    t && !i) {
                        i = !0;
                        let c = [this._getCode(9, 1419550), this._getCode(10, 1419550)].filter(u=>window.document.getElementById(u))[0]
                          , d = "AdskeeperComposite1419550" + o;
                        this._setDivs({
                            id: d,
                            rootID: c,
                            newRootID: c + o
                        }),
                        this._setPreloadBlockId(1419550, o),
                        this.widget.root = document.getElementById(d),
                        this.widget.lifeCycleLoadResolver && this.widget.lifeCycleLoadResolver()
                    } else
                        this.uniqID = null,
                        this.canLoad() && this.loadCurrentWidget()
                }
            }
        }
    }
    );
    var Tn = {};
    var ge, ja = $(()=>{
        P();
        B();
        L();
        A();
        _();
        G();
        R();
        $a();
        window.performance?.mark("main_script_start_work", {
            detail: {
                _mgwidget: 1419550
            }
        });
        ge = new me;
        ge.canLoad() ? (ge.loadCurrentWidget(),
        ge.waitAndLoadWidget(!1)) : ge.waitAndLoadWidget(!0)
    }
    );
    P();
    B();
    L();
    A();
    _();
    G();
    R();
    Promise.resolve().then(()=>ja());
}
)();
