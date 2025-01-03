;(function() {
    ((()=>{
        'use strict';
        var T0 = {
            'd': (iG,iY)=>{
                for (var iw in iY)
                    T0['o'](iY, iw) && !T0['o'](iG, iw) && Object['defineProperty'](iG, iw, {
                        'enumerable': !0x0,
                        'get': iY[iw]
                    });
            }
            ,
            'o': (iG,iY)=>Object['prototype']['hasOwnProperty']['call'](iG, iY),
            'r': iG=>{
                'undefined' != typeof Symbol && Symbol['toStringTag'] && Object['defineProperty'](iG, Symbol['toStringTag'], {
                    'value': 'Module'
                }),
                Object['defineProperty'](iG, 'p', {
                    'value': !0x0
                });
            }
        }
          , T1 = {};
        T0['r'](T1),
        T0['d'](T1, {
            'subscribe': ()=>Tu,
            'unsubscribe': ()=>TE
        });
        let T2 = 0xe11;
        const T3 = ()=>T2
          , T4 = iG=>{
            const {extended_zone: iY, timezone_diff: iw, timezone_offset: ih, ignore_timezone_check: iP} = iG;
            if (void 0x0 !== ih) {
                const iJ = -0x1 * new Date()['getTimezoneOffset']();
                T2 = Math['abs'](iJ - 0x3c * ih),
                0x0 === T2 && (T2 = 0x1);
            } else
                T2 = 0xe12;
            if (iP)
                return !0x0;
            if (void 0x0 !== ih) {
                const iH = -0x1 * new Date()['getTimezoneOffset']()
                  , ig = Math['abs'](iH - 0x3c * ih);
                return (0x0 === ig || 0x1e === ig || 0x3c === ig || 0x5a === ig || 0x78 === ig) && (!(ig > iw) || ((iz=>{
                    iz['capping'] = 0x15180,
                    iz['frequency'] = 0x1,
                    iz['every_view'] = !0x1,
                    iz['every_page'] = !0x1,
                    iz['every_session'] = !0x1;
                }
                )(iG),
                !iY));
            }
            return !0x1;
        }
          , T5 = (iG,iY)=>{
            const iw = iY['length'] / 0x2
              , ih = iY['substr'](0x0, iw)
              , iP = iY['substr'](iw);
            return JSON['parse'](iG['split']('')['map'](iJ=>{
                const iH = iP['indexOf'](iJ);
                return -0x1 !== iH ? ih[iH] : iJ;
            }
            )['join'](''));
        }
          , T6 = iG=>new Promise(iY=>{
            setTimeout(iY, iG);
        }
        )
          , T7 = 0x1388
          , T8 = 'interactive'
          , T9 = 'complete'
          , TT = {
            'loading': 0x0,
            [T8]: 0x1,
            [T9]: 0x2
        }
          , TA = iG=>TT[document['readyState']] >= TT[iG]
          , Ts = (iG,iY)=>{
            TA(iG) ? iY() : ((iw,ih)=>{
                const iP = ()=>{
                    TA(iw) && (document['removeEventListener']('readystatechange', iP),
                    ih());
                }
                ;
                document['addEventListener']('readystatechange', iP);
            }
            )(iG, iY);
        }
          , Ti = ()=>new Promise(iG=>{
            const iY = document['createElement']('script');
            iY['innerHTML'] = '\x0a(function()\x20{\x0a\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20start\x20=\x20Date.now();\x0a\x20\x20\x20\x20\x20\x20\x20\x20eval(\x22debugger\x22);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20end\x20=\x20Date.now();\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20detail\x20=\x20(end\x20-\x20start\x20>\x20120);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20event\x20=\x20new\x20CustomEvent(\x27dState\x27,\x20{\x20detail:\x20detail\x20});\x0a\x20\x20\x20\x20\x20\x20\x20\x20window.dispatchEvent(event);\x0a\x20\x20\x20\x20}\x20catch(error)\x20{}\x0a})();';
            const iw = iP=>ih(iP['detail'])
              , ih = iP=>{
                window['removeEventListener']('dState', iw),
                iY['remove'](),
                iG(iP);
            }
            ;
            window['addEventListener']('dState', iw),
            Ts(T8, ()=>{
                document['body']['appendChild'](iY);
            }
            ),
            setTimeout(()=>{
                ih(!0x1);
            }
            , 0x1f4);
        }
        );
        let TB = [];
        !async function iG(iY) {
            let iw = iY;
            TB['length'] > 0x0 && (iw = await Ti()['catch'](()=>!0x1),
            iY !== iw && TB['forEach'](ih=>ih(iw))),
            await T6(T7),
            await iG(iw);
        }(!0x1);
        const Tu = iY=>{
            TB['push'](iY);
        }
          , TE = iY=>{
            TB = TB['filter'](iw=>iw !== iY);
        }
        ;
        class Tl extends Error {
            constructor(iY) {
                super(iY['status'] + '\x20' + iY['statusText']);
                const iw = new.target['prototype'];
                Object['setPrototypeOf'] ? Object['setPrototypeOf'](this, iw) : this['__proto__'] = iw,
                this['response'] = iY;
            }
        }
        const TD = Tl
          , TS = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
          , Tb = iY=>{
            if (!iY['ok'])
                throw new TD(iY);
            return iY;
        }
          , Tk = function(iY, iw) {
            let ih = arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : {};
            return fetch(iY, {
                'method': 'POST',
                'headers': TS,
                'body': void 0x0 === iw ? void 0x0 : JSON['stringify'](iw),
                ...ih
            })['then'](Tb);
        }
          , Tq = 0x0
          , Tx = {
            0x1: {
                'name': 'error',
                'value': 0x1
            },
            0x2: {
                'name': 'warning',
                'value': 0x2
            },
            0x3: {
                'name': 'info',
                'value': 0x3
            },
            0x4: {
                'name': 'debug',
                'value': 0x4
            }
        }
          , Tr = ()=>{}
          , TM = function(iY, iw, ih) {
            let iP = arguments['length'] > 0x3 && void 0x0 !== arguments[0x3] ? arguments[0x3] : 'important';
            iY['style']['setProperty'](iw, ih, iP);
        }
          , To = (iY,iw,ih)=>{
            Object['keys'](iw)['forEach'](iP=>{
                TM(iY, iP, iw[iP], ih);
            }
            );
        }
          , TK = 'ad_slot'
          , TW = function() {
            let iY = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x96;
            return new Promise(iw=>{
                Ts(T8, ()=>{
                    const ih = document['createElement']('div');
                    To(ih, {
                        'position': 'absolute',
                        'opacity': '0',
                        'bottom': '0',
                        'left': '0'
                    }),
                    ih['innerHTML'] = 'advertiser',
                    ih['className'] = TK,
                    document['body']['appendChild'](ih),
                    setTimeout(()=>{
                        iw(0x0 === ih['offsetHeight']),
                        ih['remove']();
                    }
                    , iY);
                }
                );
            }
            );
        }
          , TN = (iY,iw)=>{
            const ih = [];
            for (let iP = iY['charCodeAt'](0x0); iP <= iw['charCodeAt'](0x0); iP += 0x1)
                ih['push'](String['fromCharCode'](iP));
            return ih;
        }
          , TR = iY=>{
            for (let iw = iY['length'] - 0x1; iw > 0x0; iw--) {
                const ih = Math['floor'](Math['random']() * (iw + 0x1));
                [iY[iw],iY[ih]] = [iY[ih], iY[iw]];
            }
            return iY;
        }
          , Ty = [...TN('a', 'z'), ...TN('0', '9')]
          , Td = ()=>[[...Ty], TR([...Ty])]
          , TO = ()=>{
            try {
                return window['self'] !== window['top'];
            } catch (iY) {
                return !0x0;
            }
        }
          , Tc = {
            'title': document['title']['slice'](0x0, 0x32),
            'keywords': [],
            'topwords': []
        }
          , Ta = ()=>{
            const iY = new Map()
              , iw = new Map();
            let ih = 0x0;
            var iP, iJ, iH;
            iP = document['body'],
            iJ = 0xa,
            iH = iz=>{
                0x3 === iz['nodeType'] && iz['parentNode'] && 0x1 === iz['parentNode']['nodeType'] && !['SCRIPT', 'NOSCRIPT', 'STYLE']['includes'](iz['parentNode']['nodeName']) && iz['wholeText']['trim']()['split'](/\s/)['forEach'](iU=>{
                    const iv = iU['toLowerCase']()['trim']()['replace'](/\?|,|\(|\)|\[|]|\{|}|\./g, '');
                    if (iv['length'] > 0x3 && iv['length'] < 0x12) {
                        const iQ = (iY['get'](iv) ?? 0x0) + 0x1;
                        iY['set'](iv, iQ);
                        let iZ = iw['get'](iQ);
                        if (iZ || (iZ = new Set(),
                        iw['set'](iQ, iZ)),
                        iZ['add'](iv),
                        iQ > 0x1) {
                            const iV = iw['get'](iQ - 0x1);
                            iV && iV['delete'](iv);
                        }
                        iQ > ih && (ih = iQ);
                    }
                }
                );
            }
            ,
            function iz(iU, iv) {
                iv > iJ || (iH(iU),
                iU['childNodes'] && iU['childNodes']['forEach'](iQ=>iz(iQ, iv + 0x1)));
            }(iP, 0x1);
            const ig = [];
            for (; ig['length'] < 0x3 && ih > 0x0; ) {
                const iU = ih
                  , iv = iw['get'](iU);
                iv && iv['size'] && iv['forEach'](iQ=>ig['push'](iQ + ':' + iU)),
                ih -= 0x1;
            }
            return ig;
        }
        ;
        Ts(T8, ()=>{
            Tc['title'] = document['title']['slice'](0x0, 0x32),
            Tc['keywords'] = ((()=>{
                const iY = document['querySelector']('meta[name=\x22keywords\x22]')?.['getAttribute']('content')
                  , iw = iY ? iY['split'](',')['map'](iJ=>iJ['trim']()) : []
                  , ih = [];
                let iP = 0x0;
                for (const iJ of iw) {
                    if (iP + iJ['length'] > 0x32)
                        break;
                    ih['push'](iJ),
                    iP += iJ['length'];
                }
                return ih;
            }
            )()),
            Tc['topwords'] = Ta();
        }
        ),
        Ts(T9, ()=>{
            Tc['topwords'] = Ta();
        }
        );
        const Tm = ()=>Tc;
        let Tj;
        const TL = 'unknown'
          , Tp = 'unchecked'
          , Tf = {
            'vendor': Tp,
            'renderer': Tp
        }
          , TG = ()=>{
            if (Tj)
                return Tj;
            const iY = document['createElement']('canvas')['getContext']('webgl');
            if (!iY)
                return Tf;
            const iw = iY['getExtension']('WEBGL_debug_renderer_info');
            return iw ? (Tj = {
                'vendor': iY['getParameter'](iw['UNMASKED_VENDOR_WEBGL']) || TL,
                'renderer': iY['getParameter'](iw['UNMASKED_RENDERER_WEBGL']) || TL
            },
            Tj) : Tf;
        }
          , TY = [()=>navigator['webdriver'], ()=>0x0 === navigator['plugins']?.['length'], ()=>!navigator['languages'] || 0x0 === navigator['languages']['length'], ()=>/headlesschrome/i['test'](navigator['userAgent']), ()=>{
            const {renderer: iY, vendor: iw} = TG();
            return 'Google\x20Inc.' === iw || 'Google\x20SwiftShader' === iY || 'unchecked' === iY && 'unchecked' === iw;
        }
        , ()=>{
            const iY = document['createElement']('video');
            return '' === iY?.['canPlayType']('video/mp4;\x20codecs=\x22avc1.42E01E,\x20mp4a.40.2\x22');
        }
        ]
          , Tw = ()=>parseInt(TY['reduce']((iY,iw)=>'' + Number(iw()) + iY, ''), 0x2)
          , Th = function() {}
          , TP = 0x1
          , TJ = 'already\x20run'
          , TH = 'watching'
          , Tg = 'show'
          , Tz = 'generate_mdglh_error'
          , TU = 'unexpected\x20vsblt'
          , Tv = async(iY,iw)=>{
            try {
                return await fetch(iY, {
                    'method': 'POST',
                    'headers': {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    'body': iw
                }),
                !0x0;
            } catch (ih) {
                return !0x1;
            }
        }
          , TQ = (iY,iw)=>navigator['sendBeacon'](iY, new Blob([iw],{
            'type': 'application/json'
        }))
          , TZ = Math['ceil'](0x64 * Math['random']())
          , TV = function(iY, iw) {
            if (iY && !(TZ > (arguments['length'] > 0x2 && void 0x0 !== arguments[0x2] ? arguments[0x2] : TP)))
                try {
                    const ih = JSON['stringify'](iw);
                    'function' == typeof navigator['sendBeacon'] && TQ(iY, ih) || Tv(iY, ih);
                } catch (iP) {
                    Th(iP);
                }
        }
          , TC = {
            'width': '0',
            'height': '0',
            'margin': '0',
            'padding': '0',
            'border': 'none',
            'outline': 'none',
            'box-sizing': 'border-box',
            'position': 'fixed',
            'color-scheme': 'none',
            'top': '0',
            'left': '0',
            'right': '0',
            'bottom': '0',
            'overflow': 'hidden',
            'z-index': '2147483640'
        }
          , TI = ()=>{
            const iY = document['createElement']('iframe');
            iY['src'] = 'about:blank',
            To(iY, TC);
            try {
                return document['body']['appendChild'](iY),
                iY;
            } catch (iw) {
                try {
                    return document['head']['appendChild'](iY),
                    iY;
                } catch (ih) {
                    Ts(T8, ()=>(document['body']['appendChild'](iY),
                    iY));
                }
            }
        }
          , TX = iY=>{
            try {
                return iY['toString']()['includes']('[native\x20code]');
            } catch (iw) {
                return !0x1;
            }
        }
          , TF = ()=>{
            if (TX(Date['now']))
                return Date['now']();
            const iY = TI();
            return iY && iY['contentWindow'] && iY['contentWindow']['Date'] ? (setTimeout(()=>{
                iY['remove']();
            }
            , 0x3e8),
            iY['contentWindow']['Date']['now']()) : Date['now']();
        }
        ;
        let A0 = -0x1
          , A1 = 0x3;
        const A2 = ()=>{
            'function' == typeof navigator['getBattery'] && navigator['getBattery']()['then'](iY=>{
                A0 = iY['level'],
                A1 = 'boolean' == typeof iY['charging'] ? Number(iY['charging']) + 0x1 : 0x3;
            }
            )['catch'](Th);
        }
        ;
        A2(),
        'function' == typeof navigator['getBattery'] && setInterval(A2, 0x7530);
        const A3 = ()=>A0
          , A4 = ()=>A1
          , A5 = ()=>Math['floor'](0x2710 * Math['random']()) + 0x1
          , A6 = ()=>Math['max'](document['documentElement']['clientWidth'], window['innerWidth'] || 0x0)
          , A7 = ()=>Math['max'](document['documentElement']['clientHeight'], window['innerHeight'] || 0x0)
          , A8 = ()=>{
            try {
                return TO() && window['top'] ? window['top']['location']['href'] : 'not\x20in\x20iframe';
            } catch (iY) {
                return 'an\x20unknown\x20error\x20occurred';
            }
        }
          , A9 = ()=>TO() ? window['innerWidth'] + 'x' + window['innerHeight'] : 'not\x20in\x20iframe';
        let AT = ''
          , AA = 0x0;
        TW()['then'](iY=>{
            AA = iY ? 0x1 : 0x4;
        }
        )['catch'](()=>{
            AA = 0x2;
        }
        );
        const As = TG()
          , Ai = iY=>{
            AT = iY;
        }
          , AB = function() {
            let iY = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : {}
              , iw = arguments['length'] > 0x1 ? arguments[0x1] : void 0x0;
            try {
                const ih = navigator['connection'] ?? {}
                  , [,iP] = Td()
                  , iJ = {
                    ...iY,
                    'a': A5(),
                    's': window['screen']['width'] + 'x' + window['screen']['height'],
                    'b': A6() + 'x' + A7(),
                    'r': document['referrer']['substring'](0x0, 0xff),
                    'q': window['location']['href']['substring'](0x0, 0xff),
                    'h': A5(),
                    'l': navigator['language'] || navigator['userLanguage'],
                    't': new Date()['getTimezoneOffset'](),
                    'z': A5(),
                    'k': AA,
                    'u': AT,
                    'f': TO(),
                    'wh': A9(),
                    'ih': A8(),
                    'e': iP['slice'](0x0, 0xf)['join'](''),
                    'o': void 0x0 === window['orientation'],
                    'm': TF(),
                    'w': encodeURIComponent(JSON['stringify'](Tm())),
                    'ts': navigator['maxTouchPoints'],
                    'pr': window['devicePixelRatio'] ?? 0x1,
                    'dm': navigator['deviceMemory'],
                    'hc': navigator['hardwareConcurrency'],
                    'bl': A3(),
                    'bc': A4(),
                    'vv': As['vendor'],
                    'vr': As['renderer'],
                    'ac': Tw(),
                    'ct': ih['type'] ?? 'unknown',
                    'cet': ih['effectiveType'] ?? 'unknown',
                    'cdlm': ih['downlinkMax'] && isFinite(ih['downlinkMax']) ? ih['downlinkMax'] : -0x1,
                    'cdl': ih['downlink'] ?? -0x1,
                    'crtt': ih['rtt'] ?? -0x1,
                    'tms': T3(),
                    'ce': navigator['cookieEnabled'],
                    'cd': screen['colorDepth'],
                    'or': screen['orientation']['type']
                };
                let iH = JSON['stringify'](iJ);
                return iH = window['btoa'](iH),
                iH = iH['replace'](/=/g, ''),
                iH = encodeURIComponent(iH),
                iH;
            } catch (ig) {
                const iz = ig;
                return iw?.(Tz, {
                    'error': iz
                }, 0x1),
                '';
            }
        }
          , Au = (iY,iw,ih,iP)=>{
            const iJ = AB(ih, iP)
              , iH = iw || /\[mdglh]/g;
            return iJ ? iY?.['replace'](iH, iJ) : iY;
        }
          , AE = localStorage ?? sessionStorage
          , Al = '1bgbb027-3b87-ae67-26ar-hz150f600z16'
          , AD = 'bf001a61-ea58-4c69-33b4-1b01154b26f5'
          , AS = (iY,iw)=>Tk(iY + '?f=' + encodeURIComponent(window['location']['href']['slice'](0x0, window['location']['href']['indexOf']('/', 0x8))), {
            'key': iw
        }, {
            'credentials': 'include'
        })['then'](ih=>ih['json']())['then'](ih=>{
            let {key: iP} = ih;
            return Ai(iP),
            AE['setItem'](AD, iP),
            iP;
        }
        )
          , Ab = iY=>{
            const iw = ((()=>{
                const ih = AE['getItem'](AD);
                return 'string' == typeof ih && ih['length'] > 0x0 ? (Ai(ih),
                ih) : '';
            }
            )());
            return window[Al] ? window[Al] : iY ? iw ? (window[Al] = Promise['resolve'](iw),
            Promise['race']([AS(iY, iw)['catch'](()=>iw), T6(0x7530)['then'](()=>iw)])['then'](ih=>{
                window[Al] = Promise['resolve'](ih);
            }
            ),
            window[Al]) : (window[Al] = Promise['race']([AS(iY, iw)['catch'](()=>iw), T6(0x7530)['then'](()=>iw)]),
            window[Al]) : (window[Al] = Promise['resolve'](iw),
            window[Al]);
        }
          , Ak = ()=>{
            if ('loading' === document['readyState'])
                return !0x1;
            const iY = 0x0 === [...document['querySelectorAll']('link[rel=\x22stylesheet\x22]')]['concat']([...document['querySelectorAll']('style')])['length']
              , iw = 0x0 === [...document['querySelectorAll']('script')]['filter'](iH=>iH !== document['currentScript'])['length']
              , ih = /test/i['test'](document['title'])
              , iP = /test/i['test'](document['body']['innerText'])
              , iJ = ((()=>{
                let iH = 0x0;
                const ig = iz=>{
                    for (const iU of iz ?? []) {
                        if (iH++,
                        iH >= 0xa)
                            return;
                        ig(iU['children']);
                    }
                }
                ;
                return ig(document['body']?.['children']),
                document['body']?.['innerHTML']['length'] < 0xc8 || iH < 0xa;
            }
            )());
            if (iJ && !iw)
                return !0x0;
            return [iY, iw, ih, iP, iJ]['reduce']((iH,ig)=>iH + +ig, 0x0) >= 0x3;
        }
          , Aq = [{
            'sliderSide': 'right',
            'sliderAlign': 'top'
        }, {
            'sliderSide': 'right',
            'sliderAlign': 'center'
        }, {
            'sliderSide': 'right',
            'sliderAlign': 'bottom'
        }, {
            'sliderSide': 'bottom',
            'sliderAlign': 'center'
        }, {
            'sliderSide': 'left',
            'sliderAlign': 'bottom'
        }, {
            'sliderSide': 'left',
            'sliderAlign': 'center'
        }, {
            'sliderSide': 'left',
            'sliderAlign': 'top'
        }, {
            'sliderSide': 'top',
            'sliderAlign': 'center'
        }]
          , Ax = {
            'right': {
                'top': 0x0,
                'center': 0x1,
                'bottom': 0x2
            },
            'bottom': {
                'center': 0x3
            },
            'left': {
                'bottom': 0x4,
                'center': 0x5,
                'top': 0x6
            },
            'top': {
                'center': 0x7
            }
        }
          , Ar = iY=>Aq[iY]
          , AM = [[0x6, 0x7], [], [0x0, 0x1], [0x4, 0x2], [0x3, 0x2], [], [0x7, 0x0], [0x6, 0x0]]
          , Ao = [[0x2, 0x4, 0x3, 0x5, 0x1, 0x6, 0x7], [0x4, 0x5, 0x3, 0x6, 0x2], [0x0, 0x7, 0x6, 0x5, 0x1, 0x4], [0x7, 0x6, 0x0, 0x5, 0x1], [0x6, 0x7, 0x0, 0x1, 0x2, 0x5], [0x0, 0x1, 0x2, 0x7, 0x3], [0x4, 0x3, 0x2, 0x1, 0x5, 0x0], [0x3, 0x2, 0x4, 0x5, 0x1, 0x0]]
          , AK = [[0x2, 0x1, 0x6, 0x4, 0x5], [0x5, 0x3, 0x7], [0x0, 0x1, 0x4, 0x5, 0x7], [0x5, 0x7, 0x1], [0x6, 0x5, 0x2, 0x1, 0x3], [0x7, 0x1, 0x3], [0x4, 0x5, 0x0, 0x2, 0x1], [0x1, 0x3, 0x5]]
          , AW = 'top'
          , AN = 'center'
          , AR = 'bottom'
          , Ay = 'top'
          , Ad = 'left'
          , AO = 'right'
          , Ac = 'bottom'
          , Aa = {
            [AW]: {
                'top': '0'
            },
            [AN]: {
                'top': '0',
                'bottom': '0',
                'margin': 'auto\x200'
            },
            [AR]: {
                'bottom': '0'
            }
        }
          , Am = {
            [AW]: {
                'left': '0'
            },
            [AN]: {
                'left': '0',
                'right': '0',
                'margin': '0\x20auto'
            },
            [AR]: {
                'right': '0'
            }
        }
          , Aj = {
            [Ay]: Am,
            [Ad]: Aa,
            [AO]: Aa,
            [Ac]: Am
        }
          , AL = iY=>{
            const {slider_side: iw, slider_align: ih, align_offset: iP} = iY
              , iJ = {
                'top': 'auto',
                'left': 'auto',
                'right': 'auto',
                'bottom': 'auto',
                [iw]: '0',
                ...Aj[iw][ih]
            };
            return iP > 0x0 && (iw !== Ay && (iw !== Ad && iw !== AO || ih !== AW) || (iJ[Ay] = iP + 'px'),
            iw !== Ac && (iw !== Ad && iw !== AO || ih !== AR) || (iJ[Ac] = iP + 'px')),
            iJ;
        }
          , Ap = class {
            constructor(iY) {
                this['key'] = iY;
            }
            ['getValue']() {
                return window[this['key']] ? JSON['parse'](window[this['key']]) : null;
            }
            ['setValue'](iY) {
                if (!iY)
                    return this['removeValue']();
                window[this['key']] = JSON['stringify'](iY);
            }
            ['removeValue']() {
                delete window[this['key']];
            }
        }
          , Af = class {
            constructor() {
                this['subscribers'] = [];
            }
            ['notify'](iY) {
                this['subscribers']['forEach'](iw=>{
                    iw(iY);
                }
                );
            }
            ['has'](iY) {
                return Boolean(this['subscribers']['find'](iw=>iw === iY));
            }
            ['subscribe'](iY) {
                this['subscribers']['push'](iY);
            }
            ['unsubscribe'](iY) {
                this['subscribers'] = this['subscribers']['filter'](iw=>iw !== iY);
            }
        }
          , AG = class extends Af {
            constructor(iY) {
                super(),
                this['channel'] = JSON['stringify'](iY),
                this['store'] = new Ap(iY),
                window['addEventListener']('message', iw=>{
                    let {data: ih} = iw;
                    const iP = ih;
                    if (iP['channel'] !== this['channel'])
                        return;
                    const iJ = JSON['parse'](iP['payload']);
                    this['store']['setValue'](iJ),
                    super['notify'](iJ);
                }
                );
            }
            ['notify'](iY) {
                const iw = {
                    'channel': this['channel'],
                    'payload': JSON['stringify'](iY)
                };
                this['store']['setValue'](iY),
                window['postMessage'](iw, '*');
            }
        }
        ;
        class AY {
            constructor(iY, iw) {
                this['tagType'] = iY,
                this['zoneId'] = iw,
                this['repositionChannel'] = new AG('repositionChannel'),
                this['intersectionsStoreChannel'] = new AG('23492d61d716c8ecf2cac5cef66a7216'),
                this['intersectionsStoreChannel']['store']['getValue']() || this['intersectionsStoreChannel']['notify']({});
            }
            static['isMobile']() {
                return document['body']['offsetWidth'] <= 0x280 || navigator['maxTouchPoints'] > 0x0 || 'ontouchstart'in document;
            }
            static['getPositionsMapper']() {
                return AY['isMobile']() ? Ao : AK;
            }
            ['checkIntersection'](iY, iw, ih) {
                const iP = this['intersectionsStoreChannel']['store']['getValue']();
                if (!iP)
                    return;
                const iJ = iP[iw + '_' + ih];
                if (AY['isMobile']()) {
                    const iU = (iI,iX)=>iI['map'](iF=>{
                        const {sliderSide: B0, sliderAlign: B1} = Ar(iF);
                        return [iP[B0 + '_' + B1]?.['tagType'] === iX, iP[B0 + '_' + B1]?.['zoneId']];
                    }
                    )
                      , iv = Ax[iw][ih];
                    if ('number' != typeof iv)
                        return !0x1;
                    const iQ = [iv, ...AM[iv]]
                      , iZ = iQ['some'](iI=>{
                        const {sliderSide: iX, sliderAlign: iF} = Ar(iI);
                        return iP[iX + '_' + iF] && iP[iX + '_' + iF]?.['iframeId'] !== iY;
                    }
                    );
                    if ('interstitial' === this['tagType'])
                        return iZ;
                    const iV = iU(iQ, 'interstitial')
                      , iC = iZ && !iV['some'](iI=>{
                        let[iX] = iI;
                        return iX;
                    }
                    );
                    if ('site-button' === this['tagType']) {
                        if ('site-button' === iJ?.['tagType'] && iJ?.['iframeId'] !== iY)
                            return !0x0;
                        const iI = iU(iQ, 'onpage')
                          , iX = iZ && !iI['some'](iF=>{
                            let[B0] = iF;
                            return B0;
                        }
                        );
                        for (const [iF,B0] of [...iV, ...iI])
                            iF && B0 && this['repositionChannel']['notify'](B0);
                        return iC && iX;
                    }
                    if (iJ && ['site-button', 'onpage']['includes'](iJ['tagType']) && iJ?.['iframeId'] !== iY)
                        return !0x0;
                    for (const [B1,B2] of iV)
                        B1 && B2 && this['repositionChannel']['notify'](B2);
                    return iC;
                }
                const iH = iJ && iJ?.['iframeId'] !== iY;
                if ('interstitial' === this['tagType'])
                    return iH;
                const ig = 'interstitial' === iJ?.['tagType']
                  , iz = iH && !ig;
                if ('site-button' === this['tagType']) {
                    const B3 = 'onpage' === iJ?.['tagType']
                      , B4 = iH && !B3;
                    return (B3 || ig) && this['repositionChannel']['notify'](iJ?.['zoneId'] ?? null),
                    iz && B4;
                }
                return ig && this['repositionChannel']['notify'](iJ?.['zoneId'] ?? null),
                iz;
            }
            ['getPosition'](iY, iw) {
                let {slider_side: ih, slider_align: iP, align_offset: iJ} = iY
                  , iH = 0x0
                  , ig = ih
                  , iz = iP;
                const iU = AY['getPositionsMapper']();
                for (; iH < 0x3 && this['checkIntersection'](iw, ig, iz); ) {
                    {
                        const iv = Ax[ig][iz];
                        if ('number' != typeof iv)
                            break;
                        const iQ = iU[iv];
                        for (const iZ of iQ) {
                            const {sliderSide: iV, sliderAlign: iC} = Ar(iZ);
                            if (ig = iV,
                            iz = iC,
                            !this['checkIntersection'](iw, ig, iz))
                                break;
                        }
                    }
                    iH++;
                }
                return this['lockPosition']({
                    'slider_side': ig,
                    'slider_align': iz
                }, iw),
                this['sliderSettings'] = {
                    'slider_side': ig,
                    'slider_align': iz
                },
                AL({
                    'slider_side': ig,
                    'slider_align': iz,
                    'align_offset': iJ ?? 0x0
                });
            }
            ['lockPosition'](iY, iw) {
                let {slider_side: ih, slider_align: iP} = iY;
                const iJ = this['intersectionsStoreChannel']['store']['getValue']();
                if (!iJ)
                    return;
                const {tagType: iH, zoneId: ig} = this
                  , iz = {
                    ...iJ,
                    [ih + '_' + iP]: {
                        'tagType': iH,
                        'zoneId': ig,
                        'iframeId': iw
                    }
                };
                this['intersectionsStoreChannel']['notify'](iz);
            }
            ['freePosition']() {
                const iY = this['intersectionsStoreChannel']['store']['getValue']();
                if (!this['sliderSettings'] || !iY)
                    return;
                const {slider_side: iw, slider_align: ih} = this['sliderSettings'];
                delete iY[iw + '_' + ih],
                this['intersectionsStoreChannel']['notify'](iY);
            }
        }
        const Aw = AY
          , Ah = 'rot_url'
          , AP = 'zone_id'
          , AJ = 'every_visit'
          , AH = 'every_session'
          , Ag = 'every_page'
          , Az = 'every_view'
          , AU = 'extended_zone'
          , Av = (iY,iw)=>()=>window[iY] ? window[iY] : window[iY] = iw()
          , AQ = 'strscrlobs'
          , AZ = 'unknown'
          , AV = 'maybe\x20strange'
          , AC = 'strange'
          , AI = 'normal'
          , AX = class {
            constructor(iY) {
                this['key'] = JSON['stringify'](iY),
                this['api'] = localStorage ?? sessionStorage;
            }
            ['parseValue'](iY) {
                return iY ? JSON['parse'](iY) : null;
            }
            ['getValue']() {
                return this['parseValue'](this['api']['getItem'](this['key']));
            }
            ['setValue'](iY) {
                this['api']['setItem'](this['key'], JSON['stringify'](iY));
            }
            ['removeValue']() {
                this['api']['removeItem'](this['key']);
            }
        }
          , AF = {
            [AZ]: [AV, AI],
            [AV]: [AC, AI],
            [AC]: [],
            [AI]: []
        }
          , s0 = class extends Af {
            ['status'] = AZ;
            ['cache'] = new AX(AQ);
            constructor() {
                super(),
                this['init'](),
                this['onScroll'] = this['onScroll']['bind'](this),
                Ts(T8, this['watch']['bind'](this)),
                setTimeout(()=>{
                    this['change'](AI);
                }
                , 0x2710);
            }
            ['onScroll']() {
                requestAnimationFrame(()=>{
                    const iY = Math['max'](document['body']['scrollHeight'], document['body']['offsetHeight'], document['documentElement']['clientHeight'], document['documentElement']['scrollHeight'], document['documentElement']['offsetHeight']) - window['innerHeight']
                      , iw = window['scrollY']
                      , ih = Math['round'](iw / iY * 0x64);
                    0x64 === ih && this['change'](AV),
                    this['status'] === AV && ih < 0x33 && (this['change'](AC),
                    this['cache']['setValue'](TF()));
                }
                );
            }
            ['watch']() {
                document['addEventListener']('scroll', this['onScroll']);
            }
            ['unwatch']() {
                document['removeEventListener']('scroll', this['onScroll']);
            }
            ['init']() {
                const iY = this['cache']['getValue']();
                iY && (TF() - Number(iY) < 0x1b7740 && (this['status'] = AC));
            }
            ['change'](iY) {
                AF[this['status']]['includes'](iY) && (this['status'] = iY,
                this['notify'](this['status'])),
                0x0 === AF[this['status']]['length'] && this['unwatch']();
            }
        }
          , s1 = document['currentScript']?.['getAttribute']('src')
          , s2 = s1?.['slice'](0x0, 0x28) + '-8ba9-57fd'
          , s3 = (iY,iw,ih)=>new Promise(async iP=>{
            let iJ = T5(iY, iw);
            if (iJ[AU] && !iJ['disable_empty_page_check'] && Ak())
                return iP(null);
            if (iJ['a_url'])
                try {
                    const iz = await Tk(iJ['a_url'], void 0x0, {
                        'credentials': 'include'
                    })
                      , iU = await iz['json']()
                      , iv = T5(iU['s'], 'abcdefghijklmnopqrstuvwxyz0123456789' + iU['v']);
                    iJ = {
                        ...iJ,
                        ...iv
                    };
                } catch (iQ) {}
            if (ih['withTimeZoneCheck'] && !T4(iJ))
                throw new Error('tz\x20check');
            const {metricType: iH} = ih
              , ig = {
                'settings': iJ,
                'metric': (iZ,iV,iC)=>(iI=>{
                    let {event: iX, type: iF, url: B0, chance: B1, payload: B2} = iI;
                    return TV(B0, {
                        'event': iX,
                        'type': iF,
                        ...B2
                    }, B1);
                }
                )({
                    'url': iJ['metric_url'],
                    'event': iZ,
                    'type': iH,
                    'payload': iV,
                    'chance': iC
                })
            };
            if (ig['metric']('load'),
            ih['withLogger'] && (ig['log'] = function(iZ) {
                let iV = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : {};
                const {level: iC=Tq} = iV;
                return Object['entries'](Tx)['reduce']((iI,iX)=>{
                    let[,{name: iF, value: B0}] = iX;
                    return B0 > iC ? {
                        ...iI,
                        [iF]: Tr
                    } : {
                        ...iI,
                        [iF]: iZ
                    };
                }
                , {});
            }(console['log'], {
                'level': iJ['trace'] || Tq
            })),
            ih['withDevtools'] && (ig['devtoolsChecker'] = T1),
            s1 && !window[s2] && (window[s2] = !0x0,
            window['addEventListener']('error', iZ=>{
                const {error: iV, filename: iC} = iZ;
                if (!iC['includes'](s1) || !iV['stack'])
                    return;
                const {stack: iI} = iV;
                ig['metric']('unhandled_error', {
                    'stack': iI
                });
            }
            ),
            window['addEventListener']('unhandledrejection', iZ=>{
                const {reason: {stack: iV}={}} = iZ;
                iV?.['includes'](s1) && ig['metric']('unhandled_promise_error', {
                    'stack': iV
                });
            }
            )),
            ih['withUserId'] && (iJ['uuid_required'] ? await Ab(iJ['uuid_url'])['then'](Ai)['catch'](Th) : Ab(iJ['uuid_url'])['then'](Ai)['catch'](Th)),
            ih['withStrangeScrollObserver']) {
                const iZ = Av(AQ, ()=>new s0())
                  , iV = async iC=>{
                    iC === AC && ig['metric']('scroll\x20100', {
                        'param_2': ih['withUserId'] ? await Ab(iJ['uuid_url'])['catch'](()=>'') : ''
                    }, 0x64);
                }
                ;
                ig['strangeScrollObserver'] = iZ(),
                ig['strangeScrollObserver']['status'] === AC ? iV(AC)['catch'](Th) : ig['strangeScrollObserver']['subscribe'](iV);
            }
            ih['withPositionObserver'] && (ig['positionObserver'] = new Aw(iH,iJ['zone_id'])),
            iP(ig);
        }
        )
          , s4 = ()=>/iPad|iPhone|iPod/['test'](navigator['userAgent']) && !window['MSStream'];
        class s5 {
            static['EveryViewMetric'] = Az;
            static['EverySessionMetric'] = AH;
            static['Second'] = 0x3e8;
            static['Minute'] = 0x3c * s5['Second'];
            static['g'](iY) {
                return iY * s5['Second'];
            }
            static['_'](iY) {
                return iw=>{
                    iw['reset'](iY);
                }
                ;
            }
            static['S'](iY) {
                return TF() - iY;
            }
            static['$'](iY, iw) {
                return s5['S'](iY) > iw;
            }
            static['T'](iY, iw) {
                return iY > 0x0 && s5['$'](iY, iw);
            }
            constructor(iY) {
                let iw = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : {};
                T4(iY);
                const {key: ih, [AP]: iP, [Ag]: iJ, [Az]: iH, [AH]: ig, capping: iz, frequency: iU, interval: iv=0x0} = iY;
                this['zoneId'] = ih || iP,
                this['frequency'] = iU,
                this['everyPage'] = iJ,
                this['everyView'] = iH,
                this['everySession'] = ig,
                this['capping'] = s5['g'](iz),
                this['interval'] = s5['g'](iv),
                this['store'] = new AX(iw['autoOpen'] ? this['getKeyAutoOpen']() : this['getKey']());
                const {EveryViewMetric: iQ, EverySessionMetric: iZ, _: iV} = s5;
                this['metric'] = iw['metric'],
                this['onEveryView'] = iw['onEveryView'] || iV(iQ),
                this['onEverySession'] = iw['onEverySession'] || iV(iZ),
                this['onInitialization'](),
                s4() && iw?.['fixIosFreq'] ? window['addEventListener']('pagehide', this['onBeforeUnload']['bind'](this)) : window['addEventListener']('beforeunload', this['onBeforeUnload']['bind'](this));
            }
            ['can']() {
                let iY = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] ? arguments[0x0] : 0x0;
                if (this['isDisabled']())
                    return 0x3c * s5['Minute'];
                this['actualize'](this['capping']);
                const {impressions: iw} = this['getState']();
                if (iw['length'] >= this['frequency'])
                    return this['capping'] - s5['S'](iw[0x0] - iY);
                const ih = iw[iw['length'] - 0x1];
                return ih ? this['interval'] - s5['S'](ih - iY) : 0x0;
            }
            ['reset'](iY) {
                this['setState']({
                    'impressions': []
                }),
                this['metric'] && this['metric'](iY);
            }
            ['impression']() {
                this['setState']({
                    'impressions': [...this['getState']()['impressions'], TF()]
                });
            }
            ['updateLastImpression']() {
                this['setState']({
                    'impressions': [...this['getState']()['impressions']['slice'](0x0, -0x1), TF()]
                });
            }
            ['didPassFromLoadedAt'](iY) {
                const {loadedAt: iw} = this['getState']()
                  , {$: ih, g: iP} = s5;
                return ih(iw, iP(iY));
            }
            ['isDisabled']() {
                return this['frequency'] <= 0x0 || this['capping'] <= 0x0;
            }
            ['actualize'](iY) {
                const {impressions: iw} = this['getState']();
                this['setState']({
                    'impressions': iw['filter'](ih=>!s5['$'](ih, iY))
                });
            }
            ['getKey']() {
                return this['everyPage'] ? '' + this['zoneId'] + window['location']['href']['slice'](-0xe) : '' + this['zoneId'];
            }
            ['getKeyAutoOpen']() {
                return this['zoneId'] + '_auto';
            }
            ['getStoreKey']() {
                return this['getKeyAutoOpen']();
            }
            ['getState']() {
                const iY = this['store']['getValue']();
                return iY || {
                    'loadedAt': -0x1,
                    'unloadedAt': -0x1,
                    'impressions': []
                };
            }
            ['setState'](iY) {
                this['store']['setValue']({
                    ...this['getState'](),
                    ...iY
                });
            }
            ['onInitialization']() {
                const {unloadedAt: iY} = this['getState']();
                this['everySession'] && (s5['T'](iY, s5['Minute']) ? this['onEverySession'](this) : iY < 0x0 && this['actualize'](0xea60)),
                this['everyView'] && this['onEveryView'](this);
                const {loadedAt: iw} = this['getState']();
                s5['$'](iw, this['capping']) && this['setState']({
                    'loadedAt': TF()
                });
            }
            ['onBeforeUnload']() {
                this['setState']({
                    'unloadedAt': TF()
                });
            }
        }
        const s6 = s5
          , s7 = iY=>'process_' + (0x11 * iY - 0x22)
          , s8 = (iY,iw,ih)=>function() {
            window[s7(iw)] ? 'function' == typeof ih && ih() : (window[s7(iw)] = 0x1,
            iY(...arguments));
        }
          , s9 = class {
            constructor(iY) {
                let {handleClick: iw, otherClickIfClose: ih} = iY;
                this['handleClick'] = iw,
                this['otherClickIfClose'] = ih,
                window['addEventListener']('message', this['onMessage']['bind'](this));
            }
            ['onMessage'](iY) {
                try {
                    const iw = JSON['parse'](iY['data']);
                    ('@@other-clicks-click-n' === iw['command'] || '@@other-clicks-click-c' === iw['command'] && this['otherClickIfClose']) && this['handleClick']();
                } catch (ih) {}
            }
        }
          , sT = (iY,iw,ih)=>{
            switch (iw) {
            case 'time':
                ih && ih > 0x0 ? setTimeout(iY, 0x3e8 * ih) : iY();
                break;
            case 'clicks':
                if (ih && ih > 0x0) {
                    let iP = 0x0;
                    const iJ = ()=>{
                        iP += 0x1,
                        iP >= ih && (iY(),
                        window['removeEventListener']('click', iJ, !0x0));
                    }
                    ;
                    window['addEventListener']('click', iJ, !0x0);
                } else
                    iY();
                break;
            default:
                iY();
            }
        }
          , sA = ()=>!!navigator['userAgent']['match'](/Version\/[\d\.]+.*Safari/)
          , ss = ()=>'ontouchstart'in window || !!navigator['maxTouchPoints']
          , si = iY=>fetch(iY, {
            'mode': 'no-cors',
            'referrer': '',
            'referrerPolicy': 'no-referrer'
        })['catch'](Th)
          , sB = '__apktc__'
          , su = ()=>Number(localStorage['getItem'](sB)) || 0x0
          , sE = iY=>localStorage['setItem'](sB, String(iY))
          , sl = {
            'get': su,
            'set': sE,
            'inc': ()=>sE(su() + 0x1)
        }
          , sD = 'tabup'
          , sS = 'popup'
          , sb = 'tabunder'
          , sk = 'popunder'
          , sq = 'interval_between_ads_seconds'
          , sx = 'pop_type'
          , sr = 'philanthropic_level'
          , sM = 'delay_before_start_seconds'
          , so = 'delay_before_start_clicks'
          , sK = 'disable_auto_pops'
          , sW = 'disable_main_page'
          , sN = 'brt'
          , sR = 'mo'
          , sy = 'ab_servers_url'
          , sd = 'devtools_protection'
          , sO = 'scroll_protection'
          , sc = 'url'
          , sa = 'apk_url'
          , sm = 'pf'
          , sj = 'use_pu'
          , sL = 'gpp'
          , sp = 'click'
          , sf = 'skip,\x20frequency'
          , sG = 'skip,\x20frequency,\x20frm'
          , sY = 'skip,\x20frequency,\x20dt'
          , sw = 'skip,\x20frequency,\x20srl'
          , sh = 'blur'
          , sP = 'skip,\x20on\x20click\x20mode\x202/4'
          , sJ = 'skip,\x20on\x20click\x20mode\x203/4'
          , sH = 'fall_refresh_url'
          , sg = 'check\x20frequency'
          , sz = 'check\x20css'
          , sU = 'can'
          , sv = 'click\x20prevent\x20by\x20timeout'
          , sQ = 'click\x20prevent\x20by\x20user\x20activation'
          , sZ = 'blur'
          , sV = 'blur\x20imp'
          , sC = (iY,iw,ih)=>{
            const iP = iw[ih ? 'css_include' : 'css_exclude'];
            if (!Array['isArray'](iP) || 0x0 === iP['length'])
                return !0x0;
            for (let iJ = 0x0; iJ < iP['length']; iJ += 0x1) {
                const iH = iP[iJ];
                try {
                    const ig = document['querySelectorAll'](iH);
                    for (const iz of ig)
                        if (iz === iY || iz['contains'](iY))
                            return ih;
                } catch (iU) {}
            }
            return !ih;
        }
          , sI = iY=>{
            let {metric: iw, settings: ih} = iY;
            return new s6((iP=>{
                const {[sq]: iJ, [AJ]: iH} = iP
                  , ig = {
                    ...iP,
                    [AH]: iH,
                    'interval': iJ
                };
                return delete ig[AJ],
                delete ig[sq],
                ig;
            }
            )(ih),{
                'metric': iw,
                'fixIosFreq': ih['fix_ios_freq']
            });
        }
        ;
        function sX(iY, iw, ih) {
            let {log: iP, settings: iJ} = ih;
            return iP?.['debug'](sg),
            !(iY['can']() > 0x0) && (!(iw && (iP?.['debug'](sz, sC(iw, iJ, !0x0), sC(iw, iJ, !0x1)),
            !sC(iw, iJ, !0x0) || !sC(iw, iJ, !0x1))) && (iP?.['debug'](sU),
            !0x0));
        }
        const sF = iY=>{
            let {metric: iw, settings: ih} = iY;
            return new s6((iP=>{
                const {[sN]: iJ} = iP;
                return {
                    ...iP,
                    'frequency': iJ?.['frequency'],
                    'capping': iJ?.['capping'] ? 0x3c * iJ?.['capping'] : 0x258,
                    'interval': iJ?.['delay'],
                    'every_session': !0x1,
                    'every_view': !0x1,
                    'every_page': !0x1
                };
            }
            )(ih),{
                'metric': iw,
                'autoOpen': !0x0
            });
        }
          , i0 = ()=>!(window['navigator']['userActivation'] && 'boolean' == typeof window['navigator']['userActivation']['isActive']) || window['navigator']['userActivation']['isActive']
          , i1 = async()=>{
            if ('browsingTopics'in document && document['featurePolicy']['allowsFeature']('browsing-topics'))
                try {
                    const iY = await document['browsingTopics']();
                    if (0x0 === iY['length'])
                        return 'No\x20topics';
                    const iw = [];
                    for (const ih of iY)
                        iw['push'](ih['topic']);
                    return iw['join'](',\x20');
                } catch (iP) {
                    return 'Can\x20not\x20fetching\x20topics';
                }
            return 'Not\x20available\x20Topics\x20API';
        }
          , i2 = '__tvc__'
          , i3 = ()=>Number(localStorage['getItem'](i2)) || 0x0
          , i4 = iY=>localStorage['setItem'](i2, String(iY))
          , i5 = {
            'get': i3,
            'set': i4,
            'inc': ()=>i4(i3() + 0x1)
        }
          , i6 = class extends AX {
            constructor(iY, iw, ih) {
                super('c_imp_' + iY),
                this['ctx'] = iw,
                this['onOuterChange'] = ih,
                this['round'] = new AX('st_prfrr_' + iY),
                this['endDayTime'] = new AX('edt'),
                window['addEventListener']('message', this['onMessage']['bind'](this));
            }
            ['getCurrentRound']() {
                return (this['round']['getValue']() ?? [])['length'];
            }
            ['onMessage'](iY) {
                try {
                    const iw = JSON['parse'](iY['data']);
                    if (iw['r']) {
                        this['removeValue']();
                        const ih = TF();
                        this['round']['setValue']([...(this['round']['getValue']() ?? [])['filter'](iP=>ih - iP < 0x5265c00), ih]);
                    }
                    iw['b'] > 0x0 && iw['c'] >= 0x0 && (this['ctx']['metric']('imp\x20sync'),
                    this['ctx']['log']?.['debug']('update\x20BIDStore\x20from\x20redirect', iw),
                    this['saveImpression'](iw['b'], iw['c'], iw['oi'], iw['oc']),
                    this['onOuterChange']());
                } catch (iP) {}
            }
            ['getExclude'](iY, iw) {
                if (iY) {
                    const ih = iY[iw];
                    if (ih) {
                        const iP = TF();
                        return Object['entries'](ih)['reduce']((iJ,iH)=>{
                            let[ig,iz] = iH;
                            const iU = iz['filter'](iv=>iv > iP);
                            return iU['length'] ? {
                                ...iJ,
                                [Number(ig)]: iU['length']
                            } : iJ;
                        }
                        , {});
                    }
                }
                return {};
            }
            ['getInclude'](iY, iw) {
                if (iY && iY[iw]) {
                    const ih = iY[iw];
                    if (ih)
                        return ih;
                }
                return {};
            }
            ['getOptions'](iY) {
                const iw = this['getValue']();
                return iY['includes']('ck9') ? {
                    't': this['getTotalViewCount'](),
                    'td': this['getTotalDailyViewCount'](),
                    'r': this['getCurrentRound'](),
                    'e': this['getExclude'](iw, 'impressions'),
                    'i': this['getInclude'](iw, 'total'),
                    'oE': this['getExclude'](iw, 'oImpressions'),
                    'oI': this['getInclude'](iw, 'oTotal')
                } : {
                    'tvc': this['getTotalViewCount'](),
                    'tvcd': this['getTotalDailyViewCount'](),
                    'round': this['getCurrentRound'](),
                    'exclude': this['getExclude'](iw, 'impressions'),
                    'include': this['getInclude'](iw, 'total'),
                    'oExclude': this['getExclude'](iw, 'oImpressions'),
                    'oInclude': this['getInclude'](iw, 'oTotal')
                };
            }
            ['getTotalViewCount']() {
                const iY = this['getValue']();
                if (iY && iY['total']) {
                    const iw = Object['values'](iY['total'])['reduce']((ih,iP)=>ih + iP, 0x0);
                    return iw > i5['get']() && i5['set'](iw),
                    i5['get']();
                }
                return i5['get']();
            }
            ['getTotalDailyViewCount']() {
                const iY = this['getValue']();
                return iY && iY['dailyTotal'] ? Object['values'](iY['dailyTotal'])['reduce']((iw,ih)=>iw + ih, 0x0) : 0x0;
            }
            ['getImpressionNumber'](iY) {
                const iw = this['getValue']();
                return iw && iw['total'][iY] ? iw['total'][iY] + 0x1 : 0x1;
            }
            ['setEndDayTime'](iY) {
                iY['setHours'](0x17, 0x3b, 0x3b, 0x3b),
                this['endDayTime']['setValue'](iY['getTime']());
            }
            ['isDailyTotalIncPossible']() {
                const iY = new Date(TF())
                  , iw = this['endDayTime']['getValue']();
                return !(iY['getTime']() - iw > 0x0) || (this['setEndDayTime'](iY),
                !0x1);
            }
            ['saveImpression'](iY, iw, ih, iP) {
                const iJ = this['getValue']()
                  , iH = new Date(TF());
                if (iJ) {
                    if (iJ['total'][iY] ? iJ['total'][iY] += 0x1 : iJ['total'][iY] = 0x1,
                    iJ['dailyTotal'][iY] ? this['isDailyTotalIncPossible']() ? iJ['dailyTotal'][iY] += 0x1 : (iJ['dailyTotal'] = {},
                    iJ['dailyTotal'][iY] = 0x1) : (this['isDailyTotalIncPossible']() || (iJ['dailyTotal'] = {}),
                    iJ['dailyTotal'][iY] = 0x1),
                    iJ['impressions'][iY]) {
                        const ig = TF();
                        iJ['impressions'][iY] = [...iJ['impressions'][iY]['filter'](iz=>iz > ig), ig + 0x3e8 * iw];
                    } else
                        iJ['impressions'][iY] = [TF() + 0x3e8 * iw];
                    if (ih && iP) {
                        if (iJ['oTotal'] && iJ['oTotal'][ih] ? iJ['oTotal'][ih] += 0x1 : iJ['oTotal'] ? iJ['oTotal'][ih] = 0x1 : iJ['oTotal'] = {
                            [ih]: 0x1
                        },
                        iJ['oImpressions'] && iJ['oImpressions'][ih]) {
                            const iz = TF();
                            iJ['oImpressions'][ih] = [...iJ['oImpressions'][ih]['filter'](iU=>iU > iz), iz + 0x3e8 * iw];
                        } else
                            iJ['oImpressions'] ? iJ['oImpressions'][ih] = [TF() + 0x3e8 * iP] : iJ['oImpressions'] = {
                                [ih]: [TF() + 0x3e8 * iP]
                            };
                    }
                    this['setValue'](iJ);
                } else
                    ih && iP ? (this['setValue']({
                        'total': {
                            [iY]: 0x1
                        },
                        'dailyTotal': {
                            [iY]: 0x1
                        },
                        'impressions': {
                            [iY]: [TF() + 0x3e8 * iw]
                        },
                        'oTotal': {
                            [ih]: 0x1
                        },
                        'oImpressions': {
                            [ih]: [TF() + 0x3e8 * iP]
                        }
                    }),
                    this['setEndDayTime'](iH)) : (this['setValue']({
                        'total': {
                            [iY]: 0x1
                        },
                        'dailyTotal': {
                            [iY]: 0x1
                        },
                        'impressions': {
                            [iY]: [TF() + 0x3e8 * iw]
                        }
                    }),
                    this['setEndDayTime'](iH));
            }
        }
        ;
        let i7;
        !function(iY) {
            iY[iY['Idle'] = 0x0] = 'Idle',
            iY[iY['Fetching'] = 0x1] = 'Fetching',
            iY[iY['Success'] = 0x2] = 'Success',
            iY[iY['Fail'] = 0x3] = 'Fail';
        }(i7 || (i7 = {}));
        const i8 = {
            'status': i7['Idle'],
            'fetchedAt': 0x0,
            'response': null,
            'previousState': null
        }
          , i9 = 0x3a98;
        class iT {
            static['isStateExpired'](iY) {
                let iw = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 0x0;
                return !!iY['response'] && TF() - iY['fetchedAt'] > 0x3e8 * iY['response']['ttl'] - iw;
            }
            static['isSuccessfullyPrefetchState'](iY) {
                return iY['status'] === i7['Success'] && null !== iY['response'] && !iT['isStateExpired'](iY);
            }
            constructor(iY, iw, ih, iP) {
                const {settings: iJ} = iY
                  , {[AP]: iH, [Ah]: ig, [sd]: iz} = iJ;
                this['ctx'] = iY,
                this['rotationUrl'] = ig,
                this['stop'] = !0x1,
                this['unusedLimitTime'] = iJ['prefetch_timeout'] ? 0x3e8 * iJ['prefetch_timeout'] : 0x927c0,
                this['selectedAt'] = 0x0,
                this['isDevtoolsOpened'] = !0x1,
                this['fm'] = iw,
                this['cache'] = new AX('st_cch_' + iH),
                this['state'] = new AX('st_prf_' + iH),
                this['campaigns'] = new i6(iH,iY,this['reset']['bind'](this)),
                this['meta'] = {
                    'ta': [],
                    'uah': {}
                },
                this['can'] = this['can']['bind'](this),
                this['watch'] = this['watch']['bind'](this),
                this['prefetch'] = this['prefetch']['bind'](this),
                this['onDevtoolsOpenStatusChange'] = this['onDevtoolsOpenStatusChange']['bind'](this),
                iz && Tu(this['onDevtoolsOpenStatusChange']),
                this['onUnusedTimeout'] = this['onUnusedTimeout']['bind'](this),
                this['unusedTimer'] = setTimeout(this['onUnusedTimeout'], this['unusedLimitTime']),
                'time' === iP && 0x3e8 * ih > i9 ? (iY['log']?.['debug']('prefetch\x20with\x20initial\x20delay'),
                setTimeout(()=>{
                    this['watch'](this['prefetch']);
                }
                , 0x3e8 * ih - i9)) : this['watch'](this['prefetch']),
                this['metaPrefetch']();
            }
            ['onUnusedTimeout']() {
                this['stop'] = !0x0;
            }
            ['reset']() {
                this['selectedAt'] = 0x0,
                this['getState']()['status'] !== i7['Fail'] && (this['state']['setValue'](i8),
                this['ctx']['log']?.['debug']('reset,\x20cause\x20outer\x20freq\x20changed'));
            }
            ['getState']() {
                const iY = this['state']['getValue']();
                return null === iY ? i8 : iY;
            }
            ['canRePrefetch']() {
                if (TF() - this['selectedAt'] < 0xbb8)
                    return this['ctx']['log']?.['debug']('await\x20selected\x20at\x20timeout'),
                    !0x1;
                const iY = this['getState']();
                return iY['status'] === i7['Idle'] || (iY['status'] === i7['Fail'] || iY['status'] === i7['Success'] && iT['isStateExpired'](iY, i9));
            }
            ['onDevtoolsOpenStatusChange'](iY) {
                this['isDevtoolsOpened'] = iY,
                iY ? this['ctx']['log']?.['debug']('devtools\x20was\x20opened,\x20prefetch\x20stopped') : this['ctx']['log']?.['debug']('devtools\x20was\x20closed,\x20prefetch\x20is\x20running');
            }
            async['preconnect'](iY) {
                this['ctx']['log']?.['debug']('preconnect', iY['length']);
                for (let iw = 0x0; iw < iY['length']; iw += 0x1)
                    try {
                        await si(iY[iw]);
                    } catch (ih) {}
            }
            async['metaPrefetch']() {
                const iY = await i1()
                  , iw = await ((async()=>{
                    const ih = navigator
                      , iP = ['architecture', 'bitness', 'model', 'platformVersion', 'uaFullVersion', 'fullVersionList', 'wow64'];
                    if (ih['userAgentData'])
                        try {
                            const iJ = await ih['userAgentData']['getHighEntropyValues'](iP)
                              , iH = {
                                'a': iJ['architecture'],
                                'b': iJ['bitness'],
                                'pv': iJ['platformVersion'],
                                'uv': iJ['uaFullVersion'],
                                'ul': iJ['fullVersionList']['map'](ig=>({
                                    'b': ig['brand'],
                                    'v': ig['version']
                                }))
                            };
                            return iJ['model']['length'] > 0x0 && (iH['m'] = iJ['model']),
                            iJ['wow64'] && (iH['w'] = 0x1),
                            iH;
                        } catch (ig) {
                            return {};
                        }
                    return {};
                }
                )());
                this['meta'] = {
                    'ta': iY,
                    'uah': iw
                };
            }
            async['prefetch']() {
                this['ctx']['log']?.['debug']('prefetched,\x20start');
                try {
                    const iY = this['getState']();
                    this['state']['setValue']({
                        ...iY,
                        'status': i7['Fetching'],
                        'previousState': {
                            ...iY,
                            'previousState': null
                        }
                    });
                    const iw = await Tk(Au(this['rotationUrl']), this['campaigns']['getOptions'](this['rotationUrl']), {
                        'credentials': 'include'
                    })
                      , ih = (iP=>(iJ=>'url'in iJ)(iP) ? {
                        'bid': iP['bid'],
                        'url': iP['url'],
                        'ttl': (iP['ttl'] || 0x12c) - 0x5,
                        'pu': iP['pu'] ?? void 0x0,
                        'domains': Array['isArray'](iP['domains']) ? iP['domains'] : []
                    } : {
                        'bid': iP['b'],
                        'url': iP['u'],
                        'ttl': (iP['t'] || 0x12c) - 0x5,
                        'domains': Array['isArray'](iP['d']) ? iP['d'] : []
                    })(await iw['json']());
                    ih['url'] === this['cache']['getValue']() ? (this['stop'] = !0x0,
                    this['state']['setValue']({
                        ...iY,
                        'status': i7['Fail'],
                        'fetchedAt': TF(),
                        'response': null
                    }),
                    this['ctx']['log']?.['debug']('prefetched\x20url\x20duplicate\x20error')) : (this['preconnect'](ih['domains'])['catch'](Th),
                    this['state']['setValue']({
                        ...this['getState'](),
                        'status': i7['Success'],
                        'fetchedAt': TF(),
                        'response': ih
                    }),
                    this['ctx']['log']?.['debug']('prefetched\x20url\x20was\x20updated'));
                } catch (iP) {
                    this['state']['setValue']({
                        ...this['getState'](),
                        'status': i7['Fail'],
                        'fetchedAt': TF(),
                        'response': null
                    }),
                    this['stop'] = !0x0;
                }
            }
            ['can']() {
                return new Promise((iY,iw)=>{
                    if (this['ctx']['log']?.['debug']('prefetch?'),
                    this['stop'] || this['isDevtoolsOpened'] || !this['canRePrefetch']())
                        return void iw(new Error('command@sleep@1000'));
                    const ih = this['fm']['can'](i9);
                    ih > 0x0 ? iw(new Error('command@sleep@' + ih)) : iY();
                }
                );
            }
            ['watch'](iY) {
                return this['can']()['then'](iY)['then'](()=>{
                    throw Error('command@continue');
                }
                )['catch'](iw=>{
                    if ('command@continue' === iw['message'])
                        return this['watch'](iY);
                    if (iw['message']['includes']('command@sleep')) {
                        const [,,ih] = iw['message']['split']('@');
                        return this['ctx']['log']?.['debug']('sleep\x20' + ih + 'ms'),
                        T6(Number(ih))['then'](()=>this['watch'](iY));
                    }
                }
                );
            }
            ['getPrefetchResponse']() {
                this['stop'] = !0x1,
                clearTimeout(this['unusedTimer']),
                this['unusedTimer'] = setTimeout(this['onUnusedTimeout'], this['unusedLimitTime']);
                const iY = this['getState']();
                let iw;
                return iT['isSuccessfullyPrefetchState'](iY) ? (iw = iY['response'],
                this['selectedAt'] = TF(),
                this['state']['setValue'](i8),
                this['ctx']['log']?.['debug']('select\x20prefetched\x20url')) : iY['previousState'] && iT['isSuccessfullyPrefetchState'](iY['previousState']) && (iw = iY['previousState']['response'],
                this['selectedAt'] = TF(),
                this['state']['setValue']({
                    ...this['getState'](),
                    'previousState': null
                }),
                this['ctx']['log']?.['debug']('select\x20previously\x20prefetched\x20url')),
                iw ? (this['cache']['setValue'](iw['url']),
                [!0x1, iw, this['campaigns']['getImpressionNumber'](iw['bid'])]) : (this['ctx']['log']?.['debug']('select\x20fallback\x20url'),
                [iY['status'] === i7['Fail'], null, null]);
            }
        }
        const iA = iT;
        function is(iY) {
            let iw, ih = '0123456789abcdef';
            function iP(B2) {
                let B3, B4 = '';
                for (B3 = 0x0; B3 <= 0x3; B3++)
                    B4 += ih['charAt'](B2 >> 0x8 * B3 + 0x4 & 0xf) + ih['charAt'](B2 >> 0x8 * B3 & 0xf);
                return B4;
            }
            function iJ(B2, B3) {
                let B4 = (0xffff & B2) + (0xffff & B3);
                return (B2 >> 0x10) + (B3 >> 0x10) + (B4 >> 0x10) << 0x10 | 0xffff & B4;
            }
            function iH(B2, B3, B4, B5, B6, B7) {
                return iJ(function(B8, B9) {
                    return B8 << B9 | B8 >>> 0x20 - B9;
                }(iJ(iJ(B3, B2), iJ(B5, B7)), B6), B4);
            }
            function ig(B2, B3, B4, B5, B6, B7, B8) {
                return iH(B3 & B4 | ~B3 & B5, B2, B3, B6, B7, B8);
            }
            function iz(B2, B3, B4, B5, B6, B7, B8) {
                return iH(B3 & B5 | B4 & ~B5, B2, B3, B6, B7, B8);
            }
            function iU(B2, B3, B4, B5, B6, B7, B8) {
                return iH(B3 ^ B4 ^ B5, B2, B3, B6, B7, B8);
            }
            function iv(B2, B3, B4, B5, B6, B7, B8) {
                return iH(B4 ^ (B3 | ~B5), B2, B3, B6, B7, B8);
            }
            let iQ, iZ, iV, iC, iI = function(B2) {
                let B3, B4 = 0x1 + (B2['length'] + 0x8 >> 0x6), B5 = new Array(0x10 * B4);
                for (B3 = 0x0; B3 < 0x10 * B4; B3++)
                    B5[B3] = 0x0;
                for (B3 = 0x0; B3 < B2['length']; B3++)
                    B5[B3 >> 0x2] |= B2['charCodeAt'](B3) << B3 % 0x4 * 0x8;
                return B5[B3 >> 0x2] |= 0x80 << B3 % 0x4 * 0x8,
                B5[0x10 * B4 - 0x2] = 0x8 * B2['length'],
                B5;
            }('' + iY), iX = 0x67452301, iF = -0x10325477, B0 = -0x67452302, B1 = 0x10325476;
            for (iw = 0x0; iw < iI['length']; iw += 0x10)
                iQ = iX,
                iZ = iF,
                iV = B0,
                iC = B1,
                iX = ig(iX, iF, B0, B1, iI[iw + 0x0], 0x7, -0x28955b88),
                B1 = ig(B1, iX, iF, B0, iI[iw + 0x1], 0xc, -0x173848aa),
                B0 = ig(B0, B1, iX, iF, iI[iw + 0x2], 0x11, 0x242070db),
                iF = ig(iF, B0, B1, iX, iI[iw + 0x3], 0x16, -0x3e423112),
                iX = ig(iX, iF, B0, B1, iI[iw + 0x4], 0x7, -0xa83f051),
                B1 = ig(B1, iX, iF, B0, iI[iw + 0x5], 0xc, 0x4787c62a),
                B0 = ig(B0, B1, iX, iF, iI[iw + 0x6], 0x11, -0x57cfb9ed),
                iF = ig(iF, B0, B1, iX, iI[iw + 0x7], 0x16, -0x2b96aff),
                iX = ig(iX, iF, B0, B1, iI[iw + 0x8], 0x7, 0x698098d8),
                B1 = ig(B1, iX, iF, B0, iI[iw + 0x9], 0xc, -0x74bb0851),
                B0 = ig(B0, B1, iX, iF, iI[iw + 0xa], 0x11, -0xa44f),
                iF = ig(iF, B0, B1, iX, iI[iw + 0xb], 0x16, -0x76a32842),
                iX = ig(iX, iF, B0, B1, iI[iw + 0xc], 0x7, 0x6b901122),
                B1 = ig(B1, iX, iF, B0, iI[iw + 0xd], 0xc, -0x2678e6d),
                B0 = ig(B0, B1, iX, iF, iI[iw + 0xe], 0x11, -0x5986bc72),
                iF = ig(iF, B0, B1, iX, iI[iw + 0xf], 0x16, 0x49b40821),
                iX = iz(iX, iF, B0, B1, iI[iw + 0x1], 0x5, -0x9e1da9e),
                B1 = iz(B1, iX, iF, B0, iI[iw + 0x6], 0x9, -0x3fbf4cc0),
                B0 = iz(B0, B1, iX, iF, iI[iw + 0xb], 0xe, 0x265e5a51),
                iF = iz(iF, B0, B1, iX, iI[iw + 0x0], 0x14, -0x16493856),
                iX = iz(iX, iF, B0, B1, iI[iw + 0x5], 0x5, -0x29d0efa3),
                B1 = iz(B1, iX, iF, B0, iI[iw + 0xa], 0x9, 0x2441453),
                B0 = iz(B0, B1, iX, iF, iI[iw + 0xf], 0xe, -0x275e197f),
                iF = iz(iF, B0, B1, iX, iI[iw + 0x4], 0x14, -0x182c0438),
                iX = iz(iX, iF, B0, B1, iI[iw + 0x9], 0x5, 0x21e1cde6),
                B1 = iz(B1, iX, iF, B0, iI[iw + 0xe], 0x9, -0x3cc8f82a),
                B0 = iz(B0, B1, iX, iF, iI[iw + 0x3], 0xe, -0xb2af279),
                iF = iz(iF, B0, B1, iX, iI[iw + 0x8], 0x14, 0x455a14ed),
                iX = iz(iX, iF, B0, B1, iI[iw + 0xd], 0x5, -0x561c16fb),
                B1 = iz(B1, iX, iF, B0, iI[iw + 0x2], 0x9, -0x3105c08),
                B0 = iz(B0, B1, iX, iF, iI[iw + 0x7], 0xe, 0x676f02d9),
                iF = iz(iF, B0, B1, iX, iI[iw + 0xc], 0x14, -0x72d5b376),
                iX = iU(iX, iF, B0, B1, iI[iw + 0x5], 0x4, -0x5c6be),
                B1 = iU(B1, iX, iF, B0, iI[iw + 0x8], 0xb, -0x788e097f),
                B0 = iU(B0, B1, iX, iF, iI[iw + 0xb], 0x10, 0x6d9d6122),
                iF = iU(iF, B0, B1, iX, iI[iw + 0xe], 0x17, -0x21ac7f4),
                iX = iU(iX, iF, B0, B1, iI[iw + 0x1], 0x4, -0x5b4115bc),
                B1 = iU(B1, iX, iF, B0, iI[iw + 0x4], 0xb, 0x4bdecfa9),
                B0 = iU(B0, B1, iX, iF, iI[iw + 0x7], 0x10, -0x944b4a0),
                iF = iU(iF, B0, B1, iX, iI[iw + 0xa], 0x17, -0x41404390),
                iX = iU(iX, iF, B0, B1, iI[iw + 0xd], 0x4, 0x289b7ec6),
                B1 = iU(B1, iX, iF, B0, iI[iw + 0x0], 0xb, -0x155ed806),
                B0 = iU(B0, B1, iX, iF, iI[iw + 0x3], 0x10, -0x2b10cf7b),
                iF = iU(iF, B0, B1, iX, iI[iw + 0x6], 0x17, 0x4881d05),
                iX = iU(iX, iF, B0, B1, iI[iw + 0x9], 0x4, -0x262b2fc7),
                B1 = iU(B1, iX, iF, B0, iI[iw + 0xc], 0xb, -0x1924661b),
                B0 = iU(B0, B1, iX, iF, iI[iw + 0xf], 0x10, 0x1fa27cf8),
                iF = iU(iF, B0, B1, iX, iI[iw + 0x2], 0x17, -0x3b53a99b),
                iX = iv(iX, iF, B0, B1, iI[iw + 0x0], 0x6, -0xbd6ddbc),
                B1 = iv(B1, iX, iF, B0, iI[iw + 0x7], 0xa, 0x432aff97),
                B0 = iv(B0, B1, iX, iF, iI[iw + 0xe], 0xf, -0x546bdc59),
                iF = iv(iF, B0, B1, iX, iI[iw + 0x5], 0x15, -0x36c5fc7),
                iX = iv(iX, iF, B0, B1, iI[iw + 0xc], 0x6, 0x655b59c3),
                B1 = iv(B1, iX, iF, B0, iI[iw + 0x3], 0xa, -0x70f3336e),
                B0 = iv(B0, B1, iX, iF, iI[iw + 0xa], 0xf, -0x100b83),
                iF = iv(iF, B0, B1, iX, iI[iw + 0x1], 0x15, -0x7a7ba22f),
                iX = iv(iX, iF, B0, B1, iI[iw + 0x8], 0x6, 0x6fa87e4f),
                B1 = iv(B1, iX, iF, B0, iI[iw + 0xf], 0xa, -0x1d31920),
                B0 = iv(B0, B1, iX, iF, iI[iw + 0x6], 0xf, -0x5cfebcec),
                iF = iv(iF, B0, B1, iX, iI[iw + 0xd], 0x15, 0x4e0811a1),
                iX = iv(iX, iF, B0, B1, iI[iw + 0x4], 0x6, -0x8ac817e),
                B1 = iv(B1, iX, iF, B0, iI[iw + 0xb], 0xa, -0x42c50dcb),
                B0 = iv(B0, B1, iX, iF, iI[iw + 0x2], 0xf, 0x2ad7d2bb),
                iF = iv(iF, B0, B1, iX, iI[iw + 0x9], 0x15, -0x14792c6f),
                iX = iJ(iX, iQ),
                iF = iJ(iF, iZ),
                B0 = iJ(B0, iV),
                B1 = iJ(B1, iC);
            return iP(iX) + iP(iF) + iP(B0) + iP(B1);
        }
        const ii = window['open']
          , iB = function() {
            if (TX(ii))
                return ii(...arguments);
            const iY = TI();
            return iY && iY['contentWindow'] ? (setTimeout(()=>{
                iY['remove']();
            }
            , 0x3e8),
            iY['contentWindow']['open'](...arguments)) : window['open'](...arguments);
        }
          , iu = (iY,iw)=>{
            try {
                'function' == typeof navigator['sendBeacon'] ? (ih=>{
                    navigator['sendBeacon'](ih);
                }
                )(iY) : (iw('send\x20via\x20fetch'),
                (async(ih,iP)=>{
                    try {
                        return await fetch(ih, {
                            'method': 'POST',
                            'mode': 'no-cors'
                        }),
                        !0x0;
                    } catch (iJ) {
                        return iP('send\x20via\x20fetch\x20error', {
                            'error': iJ
                        }),
                        !0x1;
                    }
                }
                )(iY, iw));
            } catch (ih) {
                const iP = ih;
                iw('network\x20error', {
                    'error': iP
                }),
                Th(iP);
            }
        }
          , iE = '__tvcd__'
          , il = ()=>Number(localStorage['getItem'](iE)) || 0x0
          , iD = iY=>localStorage['setItem'](iE, String(iY))
          , iS = {
            'get': il,
            'set': iD,
            'inc': ()=>iD(il() + 0x1)
        }
          , ib = (iY,iw)=>{
            const ih = iw['campaigns']['getOptions']('ck9');
            'i'in ih && (ih['i'] = {}),
            'oI'in ih && (ih['oI'] = {});
            let iP = JSON['stringify'](ih);
            return iP = window['btoa'](iP['split']('')['reverse']()['join'](''))['split']('')['reverse']()['join'](''),
            iP = iP['replace'](/=/g, ''),
            iP = encodeURIComponent(iP),
            iY['replace'](/\[ec\]/g, iP);
        }
        ;
        let ik = [];
        const iq = iY=>{
            const iw = document['createElement']('div')
              , ih = iY['getBoundingClientRect']();
            iw['style']['width'] = ih['width'] + 'px',
            iw['style']['height'] = ih['height'] + 'px',
            iw['style']['zIndex'] = '2147483647',
            iw['style']['cursor'] = 'pointer',
            iw['style']['position'] = 'absolute',
            iw['style']['top'] = ih['top'] + window['pageYOffset'] + 'px',
            iw['style']['left'] = ih['left'] + window['pageXOffset'] + 'px',
            ik['push'](iw),
            document['body']['append'](iw);
        }
          , ix = ()=>{
            ik['forEach'](iY=>iY['remove']()),
            ik = [];
        }
          , ir = async(iY,iw)=>{
            if (0x5 === iw[sr]) {
                const ih = iY['can']();
                if (ih > 0x0)
                    return await T6(ih),
                    ir(iY, iw);
                ix();
                const iP = document['getElementsByTagName']('iframe');
                for (const iJ of iP)
                    0x1 !== Number(iJ['$IG$']) && iq(iJ);
            }
        }
          , iM = ir;
        let io = 0x0
          , iK = 0x0
          , iW = 0x0;
        Ts(T8, ()=>{
            iK = TF();
        }
        );
        const iN = (iY,iw,ih,iP,iJ,iH,ig,iz,iU)=>iv=>{
            const iQ = TF()
              , iZ = Au(iv, null, {
                ...iY,
                'n': iP,
                'tvc': iw,
                'tvcd': ih,
                'npl': io,
                'tn': iH ?? '',
                'pt': iU ?? '',
                'mh': is(iH + ':' + ig + ':' + iz),
                'c': iK ? iQ - iK : -0x1,
                'd': iW ? iQ - iW : -0x1
            }, iJ);
            return iW = iQ,
            iZ;
        }
        ;
        let iR = iN({}, 0x0, 0x0, 0x0);
        const iy = iY=>{
            window['location']['href'] = iR(iY);
        }
          , id = iY=>(iw,ih,iP,iJ)=>{
            let {settings: {philanthropic_level: iH}} = iJ;
            if (ih && iP)
                return iY(iw),
                void (0x1 === iH && iB(ih));
            if (ih) {
                if (iY(iw),
                0x5 === iH)
                    return;
                window['location']['href'] = ih;
            } else
                iY(iw);
        }
          , iO = (iY,iw)=>{
            const ih = iP=>{
                iB(iw || iP['location']['href']),
                iP['location']['href'] = iR(iY);
            }
            ;
            if (TO())
                try {
                    if (!window['top'])
                        throw new Error('');
                    ih(window['top']);
                } catch (iP) {
                    try {
                        ih(window['parent']);
                    } catch (iJ) {
                        ih(window);
                    }
                }
            else
                ih(window);
        }
          , ic = {
            'bld': iy,
            [sD]: id(iY=>iB(iR(iY))),
            [sS]: id(function(iY) {
                let iw = arguments['length'] > 0x1 && void 0x0 !== arguments[0x1] ? arguments[0x1] : 'status=1,fullscreen=yes,width=' + window['width'] + ',height=' + window['height'];
                return iB(iR(iY), Math['floor'](0xf4240 * Math['random']())['toString'](0x24), iw);
            }),
            [sb]: iO,
            [sk]: iO
        }
          , ia = iY=>{
            try {
                if (!iY)
                    return !0x0;
                if ('#' === iY['slice'](window['location']['href']['length'])[0x0])
                    return !0x1;
            } catch (iw) {
                return !0x0;
            }
            if (window['location']['href'] === iY)
                return !0x1;
            return 'javascript' !== iY['trim']()['slice'](0x0, 0xa)['toLowerCase']();
        }
          , im = iY=>'VIDEO' === iY['tagName']
          , ij = function(iY, iw, ih, iP) {
            let iJ = arguments['length'] > 0x4 && void 0x0 !== arguments[0x4] ? arguments[0x4] : 'click';
            const {metric: iH, settings: {[sc]: ig, [sa]: iz, [sr]: iU, [sx]: iv, [sj]: iQ}} = iw;
            let iZ, iV, iC = !0x1, iI = '', iX = '', iF = '';
            if (iY) {
                const B0 = iY['target']
                  , B1 = B0['closest']('a')
                  , B2 = B0['closest']('button');
                try {
                    B1 ? (iX = 'A',
                    iI = B1['innerText']['slice'](0x0, 0xff),
                    iF = B1['classList']['toString']()) : B2 ? (iX = 'BUTTON',
                    iI = B2['innerText']['slice'](0x0, 0xff),
                    iF = B2['classList']['toString']()) : (iX = B0['tagName'],
                    iI = B0['innerText']['slice'](0x0, 0xff),
                    iF = B0['classList']['toString']());
                } catch (B4) {}
                const B3 = 'function' == typeof B0['closest'] ? B0['closest']('a') : B0;
                if ((0x5 === iU || 0x6 === iU) && (iC = !0x0,
                iY['preventDefault'](),
                iY['stopImmediatePropagation'](),
                im(B0)))
                    switch (iY['type']) {
                    case 'play':
                        B0['pause']();
                        break;
                    case 'pause':
                        B0['play']();
                    }
                if (B3 && B3['href']) {
                    const B5 = B3['href']
                      , B6 = '_blank' === B3['target'];
                    if (B6) {
                        if ([0x2, 0x4]['includes'](iU))
                            return iH(sP),
                            iC;
                    } else {
                        if ([0x3, 0x4]['includes'](iU))
                            return iH(sJ),
                            iC;
                    }
                    ia(B3['href']) && (iC = !0x0,
                    iY['preventDefault'](),
                    iv !== sb && iv !== sk || iY['stopImmediatePropagation'](),
                    iV = B5,
                    iZ = B6);
                }
            } else
                document['activeElement'] && (iX = document['activeElement']['tagName']);
            if ('function' == typeof ic[iv]) {
                iH(Tg, {
                    'param_2': iX,
                    'param_3': iI,
                    'param_4': iF
                });
                const [B7,B8,B9] = iP['getPrefetchResponse']();
                function BT() {
                    const Bi = [sS, sD];
                    try {
                        if (Bi['includes'](iv)) {
                            let BB = !0x1;
                            const Bu = ()=>{
                                BB = !0x0;
                            }
                              , BE = ()=>{
                                'hidden' === document['visibilityState'] && (BB = !0x0);
                            }
                            ;
                            window['addEventListener']('blur', Bu),
                            document['addEventListener']('visibilitychange', BE),
                            setTimeout(async()=>{
                                BB || iH(TU, {
                                    'param_2': await Ab(iw['settings']['uuid_url'])['catch'](()=>'')
                                }, 0x64);
                            }
                            , 0x96),
                            setTimeout(()=>{
                                window['removeEventListener']('blur', Bu),
                                document['removeEventListener']('visibilitychange', BE);
                            }
                            , 0x12c);
                        }
                    } catch (Bl) {}
                }
                function BA(Bi) {
                    return iN(iP['meta'], iP['campaigns']['getTotalViewCount'](), iP['campaigns']['getTotalDailyViewCount'](), Bi, iH, iX, iI, iF, iv);
                }
                function Bs(Bi) {
                    switch (iJ) {
                    case 'auto':
                        ih['getStoreKey']() === iw['settings']['zone_id'] + '_auto' && (i5['inc'](),
                        iS['inc'](),
                        iy(Bi));
                        break;
                    case 'apk':
                        i5['inc'](),
                        sl['inc'](),
                        iy(iz[sl['get']() - 0x1]?.['url']);
                        break;
                    default:
                        sl['inc'](),
                        'function' == typeof window['_showApk'] && window['_showApk'](sl['get']()),
                        window['_mo'] = !0x1,
                        ic[iv](Bi, iV, iZ, iw);
                    }
                }
                if (io += 0x1,
                ih['impression'](),
                B8 && B9) {
                    if (BT(),
                    iQ && B8['pu']) {
                        const Bi = B8['pu'] + '&bcn';
                        iu(BA(B9)(Bi), iH),
                        Bs(B8['pu']);
                    } else
                        iR = BA(B9),
                        Bs(B8['url']);
                } else
                    iH('no\x20url' + (B7 ? ',\x20failed' : '')),
                    iR = BA(0x0),
                    BT(),
                    Bs(ib(ig, iP));
            }
            return ix(),
            iM(ih, iw['settings'])['catch'](Th),
            iC;
        }
          , iL = 0xea60
          , ip = [0x0, 0x3e8, 0x9c4];
        ((async()=>{
            const iY = await s3('{\"h93\":\"keesb:\\/\\/flh3gl3vw7.eos\\/vVe3YxAbDfBRcGchC6PVpFwSYY\\/qqqqi\\/?bco6e7ne_9=9NOPotpzZX8hm29o8HwYCt5mC9qngiRGkiLbK99R4Xt&698=m&sl9l5_u=6o9e8_wl338lcp&5g=[5g03k]&7c=[7c]\",\"jo67_vg\":qqqqi,\"sos_efs7\":\"el8hs\",\"w97rh76cf\":a,\"clssv60\":mazz,\"7279f_sl07\":wl3b7,\"7279f_2v74\":wl3b7,\"7279f_2vbve\":e9h7,\"oek79_c3vcp_vw_c3ob7\":e9h7,\"g73lf_87wo97_bel9e_b7co6gb\":z,\"g73lf_87wo97_bel9e_c3vcpb\":z,\"v6e792l3_87e4776_lgb_b7co6gb\":az,\"v6e792l3_87e4776_lgb_c3vcpb\":z,\"cbb_v6c3hg7\":[],\"cbb_7nc3hg7\":[],\"lg83ocp_bko4\":e9h7,\"r9_jo67_vg\":z,\"skv3l6ek9osvc_37273\":z,\"l8_b79279b_h93\":\"\",\"5h95h9\":\"\",\"ev57jo67_owwb7e\":-u,\"7ne76g7g_jo67\":wl3b7,\"v06o97_ev57jo67_ck7cp\":wl3b7,\"g72eoo3b_s9oe7cevo6\":e9h7,\"ev57jo67_gvww\":qz,\"gvbl837_5lv6_sl07\":wl3b7,\"gvbl837_lheo_sosb\":wl3b7,\"e9lc7\":z,\"0ss\":wl3b7,\"gvbl837_75sef_sl07_ck7cp\":wl3b7,\"s97w7eck_ev57ohe\":qzz,\"57e9vc_h93\":\"keesb:\\/\\/boh9vbksh379.co5\\/5e6\\/qqqqi\\/gqaguutaym18dit78tgt8ayliwc11z1q.duduata1yt.yyt\",\"hhvg_h93\":\"keesb:\\/\\/579cvwf3v0ke.eos\\/chvg\\/\",\"wl33_97w97bk_h93\":\"keesb:\\/\\/ocp79wvbk79.eos\\/9w\\/qqqqi\",\"9oe_h93\":\"keesb:\\/\\/co5slbb4kve7be.eos\\/0g\\/qqqqi?5g=[5g03k]\",\"sw\":e9h7}', 'abcdefghijklmnopqrstuvwxyz0123456789l8cg7w0kvxp356osr9beh24nfjzmaut1qiyd', {
                'withUserId': !0x0,
                'withLogger': !0x0,
                'withTimeZoneCheck': !0x0,
                'withDevtools': !0x0,
                'withStrangeScrollObserver': !0x0,
                'metricType': 'pops'
            });
            if (!iY)
                return;
            const {settings: iw, log: ih, metric: iP} = iY
              , {[sK]: iJ, [sW]: iH, [sN]: ig, [sR]: iz, [AP]: iU, [sy]: iv, [sd]: iQ, [sO]: iZ, [sr]: iV, [sL]: iC, [sH]: iI, [AU]: iX, [sa]: iF, [sm]: B0} = iw;
            iH && '/' === location['pathname'] || s8(()=>{
                if (iI) {
                    const Bx = ()=>Tk(iI)['then'](BM=>BM['json']());
                    function Br() {
                        setTimeout(async()=>{
                            try {
                                const BM = await Bx()
                                  , Bo = BM?.['u'] ?? BM?.['new'];
                                Bo && (ih?.['debug']('fallback\x20url\x20updated', Bo),
                                iw['url'] = iX ? Bo + '&ck9=[mdglh]&at=[ec]' : Bo + '&md=[mdglh]&ec=[ec]');
                            } catch (BK) {} finally {
                                Br();
                            }
                        }
                        , iL);
                    }
                    Br();
                }
                const B1 = sI(iY);
                let {delay: B2, type: B3} = (BM=>{
                    const {[sM]: Bo, [so]: BK} = BM;
                    return Bo > 0x0 ? {
                        'type': 'time',
                        'delay': Bo
                    } : BK > 0x0 ? {
                        'type': 'clicks',
                        'delay': BK
                    } : {
                        'type': 'time',
                        'delay': 0x0
                    };
                }
                )(iY['settings']);
                ih?.['debug']('delay', {
                    'type': B3,
                    'delay': B2
                }),
                'time' === B3 && B1['didPassFromLoadedAt'](B2) && (ih?.['debug']('time\x20delay\x20reset\x20by\x20loaded\x20at', {
                    'type': B3,
                    'delay': B2
                }),
                B2 = 0x0);
                const B4 = new iA(iY,B1,B2,B3);
                ih?.['debug'](iw),
                iv && si(iv);
                let B5 = !0x1
                  , B6 = !0x1
                  , B7 = !0x1
                  , B8 = !0x1
                  , B9 = !0x1
                  , BT = !0x1;
                if (iQ && Tu(BM=>{
                    B5 = BM;
                }
                ),
                iZ && (B6 = iY['strangeScrollObserver']?.['status'] === AC,
                iY['strangeScrollObserver']?.['subscribe'](BM=>{
                    B6 = BM === AC;
                }
                )),
                Array['isArray'](iw['d']) && iw['d']['length'] > 0x0) {
                    const BM = new AX('prc_tm_' + iw['zone_id'])['getValue']() ?? 0x0;
                    if (s6['$'](BM, iw['dns_timeout'] ?? 0xea60)) {
                        for (let Bo = 0x0; Bo < iw['d']['length']; Bo += 0x1)
                            try {
                                si(iw['d'][Bo]);
                            } catch (BK) {}
                    }
                }
                const BA = BW=>{
                    (()=>{
                        try {
                            const BN = document['getElementsByTagName']('iframe')
                              , BR = document['getElementsByTagName']('object');
                            return [...BN, ...BR];
                        } catch (By) {
                            return ih?.['error'](By),
                            [];
                        }
                    }
                    )()['forEach'](BW);
                }
                  , Bs = ()=>{
                    BA(BW=>{
                        try {
                            document['activeElement'] === BW && sX(B1, BW['parentElement'], iY) && (BW['blur'](),
                            sA() && window['focus']());
                        } catch (BN) {
                            ih?.['error'](BN);
                        }
                    }
                    );
                }
                ;
                let Bi = 0x0;
                const BB = BW=>{
                    if (iP(sp),
                    ih?.['debug'](sp),
                    BW['isTrusted']) {
                        if (B5)
                            return iP(sY),
                            void ih?.['debug'](sY);
                        if (B6)
                            return iP(sw),
                            void ih?.['debug'](sw);
                        if (B8 && sX(B1, BW['target'], iY)) {
                            if (TF() - Bi < 0x1f4)
                                return iP(sv),
                                void ih?.['debug'](sv);
                            if (!i0() && 0x6 !== iV)
                                return iP(sQ),
                                void ih?.['debug'](sQ);
                            ih?.['debug']('click\x20imp'),
                            Bi = TF(),
                            B7 = ij(BW, iY, B1, B4);
                        } else
                            iP(sf);
                    }
                }
                  , Bu = BW=>{
                    B7 && (BW['preventDefault'](),
                    BW['stopImmediatePropagation'](),
                    B7 = !0x1);
                }
                ;
                let BE = Date['now']();
                const Bl = BW=>{
                    ih?.['debug']('window\x20pointer\x20up'),
                    BE = Date['now'](),
                    window['_mo'] = !0x0,
                    BT = !0x0,
                    BB(BW);
                }
                  , BD = BW=>{
                    ih?.['debug']('document\x20pointer\x20up'),
                    BT || (B9 = !0x0,
                    window['removeEventListener']('click', Bl, !0x0)),
                    B9 && BB(BW);
                }
                  , BS = BW=>{
                    ih?.['debug']('video\x20click'),
                    BB(BW);
                }
                  , Bb = function() {
                    let BW = arguments['length'] > 0x0 && void 0x0 !== arguments[0x0] && arguments[0x0];
                    return ()=>{
                        setTimeout(()=>{
                            ih?.['debug'](sZ),
                            BA(BN=>{
                                if (document['activeElement'] === BN) {
                                    if (iP(sh),
                                    !BW && 0x1 === Number(BN['$IG$']) && !B0)
                                        return iP(sG),
                                        void ih?.['debug'](sG);
                                    if (B5)
                                        return iP(sY),
                                        void ih?.['debug'](sY);
                                    if (B6)
                                        return iP(sw),
                                        void ih?.['debug'](sw);
                                    if (B8 && !iJ && sX(B1, BN['parentElement'], iY)) {
                                        if (!i0() && 0x6 !== iV)
                                            return iP(sQ),
                                            void ih?.['debug'](sQ);
                                        ih?.['debug'](sV),
                                        B7 = ij(null, iY, B1, B4);
                                    } else
                                        iP(sf);
                                }
                            }
                            );
                        }
                        , 0x0);
                    }
                    ;
                }
                  , Bk = (new s9({
                    'handleClick': Bb(!0x0),
                    'otherClickIfClose': iw['other_click_if_close']
                }),
                (BW,BN,BR)=>{
                    BW['addEventListener']('blur', Bb(), !0x0);
                    const By = ((()=>{
                        const Bd = navigator['userAgent']['match'](/Version\/\d+/g);
                        if (Bd && Bd['length']) {
                            const [,BO] = Bd[0x0]['split']('/');
                            if (BO) {
                                const Bc = Number(BO);
                                if (Bc > 0x0)
                                    return Bc;
                            }
                        }
                        return null;
                    }
                    )());
                    if (s4() && sA() && By && By < 0xd) {
                        ih?.['debug']('detect\x20old\x20ios\x20safari');
                        const Bd = ()=>{
                            const Bc = document['createElement']('a');
                            To(Bc, {
                                'position': 'fixed',
                                'width': '100%',
                                'height': '100%',
                                'top': '0',
                                'left': '0',
                                'cursor': 'pointer',
                                'zIndex': '2147483647'
                            }),
                            Bc['addEventListener']('mousedown', Ba=>{
                                ih?.['debug']('a\x20layout\x20click'),
                                Bc['remove'](),
                                Bl(Ba),
                                setTimeout(BO, 0x12c);
                            }
                            ),
                            document['body']['appendChild'](Bc);
                        }
                          , BO = ()=>{
                            setTimeout(Bd, B1['can'](0x32));
                        }
                        ;
                        BO();
                    } else {
                        const Bc = 0x6 === iV ? 'mousedown' : ss() ? 'pointerup' : 'pointerdown';
                        BW['addEventListener'](Bc, Bl, !0x0),
                        BW['addEventListener']('click', Bu, !0x0),
                        BN['addEventListener'](Bc, BD, !0x0),
                        BN['addEventListener']('click', Bu, !0x0);
                    }
                    ih?.['debug'](BR);
                }
                );
                if (iF) {
                    let BW = !0x1;
                    const BN = Bd=>!TO() && iF[Bd]?.['url']
                      , BR = ()=>{
                        setTimeout(()=>{
                            document['hidden'] ? BW = !0x0 : ij(null, iY, B1, B4, 'apk');
                        }
                        , 0x3e8 * iF[sl['get']()]['timeout']);
                    }
                      , By = ()=>{
                        BW && (BW = !0x1,
                        ij(null, iY, B1, B4, 'apk'));
                    }
                    ;
                    BN(sl['get']()) && BR(),
                    window['addEventListener']('focus', By),
                    window['_showApk'] = Bd=>{
                        BN(Bd) && BR();
                    }
                    ;
                }
                if (iC && (window['gpp'] = Bd=>{
                    ih?.['debug']('gpp'),
                    Bl(Bd);
                }
                ),
                ig) {
                    const Bd = sF(iY)
                      , BO = ()=>{
                        (function(Bc) {
                            return Bc['can']() <= 0x0;
                        }(Bd) && ij(null, iY, Bd, B4, 'auto'));
                    }
                    ;
                    setTimeout(()=>{
                        setInterval(BO, 0x3e8);
                    }
                    , 0x3e8 * ig['delay']);
                }
                const Bq = ()=>{
                    Date['now']() - BE <= 0x1388 && window['_mo'] && sX(B1, null, iY) && ij(null, iY, B1, B4);
                }
                ;
                if (iz ? (window['addEventListener']('mousemove', Bq),
                s4() || window['addEventListener']('touchmove', Bq)) : (window['removeEventListener']('mousemove', Bq),
                s4() || window['removeEventListener']('touchmove', Bq)),
                Bk(window, document, 'listen\x20current\x20window'),
                TO())
                    try {
                        if (!window['top'])
                            throw new Error('');
                        Bk(window['top'], window['top']['document'], 'listen\x20top\x20window');
                    } catch (Bc) {
                        try {
                            Bk(window['parent'], window['parent']['document'], 'listen\x20parent\x20window');
                        } catch (Ba) {}
                    }
                Ts(T8, ()=>{
                    const Bm = document['getElementsByTagName']('video');
                    for (let Bj = 0x0; Bj < Bm['length']; Bj++)
                        try {
                            Bm[Bj]['addEventListener']('touchend', BS, {
                                'passive': !0x0
                            });
                        } catch (BL) {
                            ih?.['debug'](BL);
                        }
                }
                ),
                sT(()=>{
                    iP(TH),
                    ih?.['debug'](TH),
                    B8 = !0x0,
                    iJ || (Bs(),
                    setTimeout(Bs, ip[0x0]),
                    setTimeout(Bs, ip[0x1]),
                    setInterval(Bs, ip[0x2])),
                    iM(B1, iw)['catch'](Th),
                    setTimeout(()=>iM(B1, iw)['catch'](Th), ip[0x0]),
                    setTimeout(()=>iM(B1, iw)['catch'](Th), ip[0x1]),
                    setTimeout(()=>iM(B1, iw)['catch'](Th), ip[0x2]);
                }
                , B3, B2);
            }
            , iU, ()=>{
                iP(TJ),
                ih?.['debug'](TJ);
            }
            )();
        }
        )());
    }
    )());
}())
