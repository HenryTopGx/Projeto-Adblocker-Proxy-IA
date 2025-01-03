/*! For license information please see fluidplayer.min.js.LICENSE.txt */
!function() {
    var e, t, n, o, r = {
        410: function(e, t, n) {
            "use strict";
            var o = n(81)
              , r = n.n(o)
              , i = n(645)
              , a = n.n(i)
              , l = n(667)
              , d = n.n(l)
              , s = new URL(n(858),n.b)
              , u = new URL(n(924),n.b)
              , c = new URL(n(373),n.b)
              , p = new URL(n(212),n.b)
              , f = new URL(n(928),n.b)
              , _ = new URL(n(46),n.b)
              , y = new URL(n(276),n.b)
              , m = a()(r())
              , g = d()(s)
              , v = d()(u)
              , h = d()(c)
              , b = d()(p)
              , w = d()(f)
              , A = d()(_)
              , C = d()(y);
            m.push([e.id, ".fluid_video_wrapper {\n    animation: none;\n    animation-delay: 0;\n    animation-direction: normal;\n    animation-duration: 0;\n    animation-fill-mode: none;\n    animation-iteration-count: 1;\n    animation-name: none;\n    animation-play-state: running;\n    animation-timing-function: ease;\n    backface-visibility: visible;\n    background: 0;\n    background-attachment: scroll;\n    background-clip: border-box;\n    background-color: transparent;\n    background-image: none;\n    background-origin: padding-box;\n    background-position: 0 0;\n    background-position-x: 0;\n    background-position-y: 0;\n    background-repeat: repeat;\n    background-size: auto auto;\n    border: 0;\n    border-style: none;\n    border-width: medium;\n    border-color: inherit;\n    border-bottom: 0;\n    border-bottom-color: inherit;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-style: none;\n    border-bottom-width: medium;\n    border-collapse: separate;\n    border-image: none;\n    border-left: 0;\n    border-left-color: inherit;\n    border-left-style: none;\n    border-left-width: medium;\n    border-radius: 0;\n    border-right: 0;\n    border-right-color: inherit;\n    border-right-style: none;\n    border-right-width: medium;\n    border-spacing: 0;\n    border-top: 0;\n    border-top-color: inherit;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-top-style: none;\n    border-top-width: medium;\n    bottom: auto;\n    box-shadow: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    caption-side: top;\n    clear: none;\n    clip: auto;\n    color: inherit;\n    columns: auto;\n    column-count: auto;\n    column-fill: balance;\n    column-gap: normal;\n    column-rule: medium none currentColor;\n    column-rule-color: currentColor;\n    column-rule-style: none;\n    column-rule-width: none;\n    column-span: 1;\n    column-width: auto;\n    content: normal;\n    counter-increment: none;\n    counter-reset: none;\n    cursor: auto;\n    direction: ltr;\n    display: inline;\n    empty-cells: show;\n    float: none;\n    font: normal;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-size: medium;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: normal;\n    height: auto;\n    hyphens: none;\n    left: auto;\n    letter-spacing: normal;\n    line-height: normal;\n    list-style: none;\n    list-style-image: none;\n    list-style-position: outside;\n    list-style-type: disc;\n    margin: 0;\n    margin-bottom: 0;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    max-height: none;\n    max-width: none;\n    min-height: 0;\n    min-width: 0;\n    opacity: 1;\n    orphans: 0;\n    outline: 0;\n    outline-color: invert;\n    outline-style: none;\n    outline-width: medium;\n    overflow: visible;\n    overflow-x: visible;\n    overflow-y: visible;\n    padding: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    page-break-after: auto;\n    page-break-before: auto;\n    page-break-inside: auto;\n    perspective: none;\n    perspective-origin: 50% 50%;\n    position: static;\n    /* May need to alter quotes for different locales (e.g fr) */\n    quotes: '\\201C' '\\201D' '\\2018' '\\2019';\n    right: auto;\n    tab-size: 8;\n    table-layout: auto;\n    text-align: inherit;\n    text-align-last: auto;\n    text-decoration: none;\n    text-decoration-color: inherit;\n    text-decoration-line: none;\n    text-decoration-style: solid;\n    text-indent: 0;\n    text-shadow: none;\n    text-transform: none;\n    top: auto;\n    transform: none;\n    transform-style: flat;\n    transition: none;\n    transition-delay: 0s;\n    transition-duration: 0s;\n    transition-property: none;\n    transition-timing-function: ease;\n    unicode-bidi: normal;\n    vertical-align: baseline;\n    visibility: visible;\n    white-space: normal;\n    widows: 0;\n    width: auto;\n    word-spacing: normal;\n    z-index: auto;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.fluid_video_wrapper canvas {\n    pointer-events: none;\n}\n\n.fluid_video_wrapper,\n.fluid_video_wrapper * {\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\n.fluid_video_wrapper:after, .fluid_video_wrapper:before {\n    content: none;\n}\n\n.fluid_video_wrapper {\n    position: relative;\n    display: inline-block;\n}\n\n.fluid_video_wrapper video {\n    position: relative;\n    background-color: #000000;\n    display: block;\n}\n\n.fluid_video_wrapper .vast_video_loading {\n    display: table;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: auto;\n    z-index: 1;\n}\n\n.fluid_video_wrapper .vast_video_loading:before {\n    background-image: url(" + g + ");\n    background-position: center, center;\n    background-repeat: no-repeat, repeat;\n    background-color: rgba(0, 0, 0, 0.2);\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n\n.skip_button {\n    position: absolute;\n    bottom: 50px;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 13px 21px 13px 21px;\n}\n\n.skip_button, .skip_button a {\n    color: #ffffff;\n    text-decoration: none;\n    cursor: pointer;\n    z-index: 10;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: start;\n}\n\n.skip_button a span.skip_button_icon {\n    display: inline-block;\n    text-align: left;\n    width: 21px;\n    position: relative;\n    bottom: 20px;\n}\n\n.skip_button a span.skip_button_icon:before {\n    background: url(" + v + ') no-repeat;\n    position: absolute;\n    height: 18px;\n    width: 18px;\n    top: 6px;\n    content: "";\n    opacity: 0.8;\n    -webkit-transition: opacity 0.3s ease-in-out;\n    -moz-transition: opacity 0.3s ease-in-out;\n    -ms-transition: opacity 0.3s ease-in-out;\n    -o-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n    background-position: -122px -57px;\n}\n\n.skip_button a span.skip_button_icon:before:hover {\n    opacity: 1;\n}\n\n.skip_button_disabled {\n    cursor: default !important;\n    padding: 13px 21px 13px 21px;\n}\n\n.close_button {\n    position: absolute;\n    background: #000000 url(' + h + ") no-repeat scroll center center;\n    height: 16px;\n    width: 16px;\n    top: 0;\n    right: 0;\n    background-size: 18px 18px;\n    cursor: pointer;\n    padding: 1px;\n    z-index: 31;\n}\n\n.close_button:hover {\n    background-color: #000000;\n    border: 1px solid #ffffff;\n}\n\n.vast_clickthrough_layer {\n    /*IE Fix*/\n    background-color: white;\n    opacity: 0;\n}\n\n.fluid_ad_playing {\n    position: absolute;\n    background-color: black;\n    opacity: 0.8;\n    border-radius: 1px;\n    color: #ffffff;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: start;\n    line-height: 18px;\n    z-index: 10;\n    padding: 13px 21px 13px 21px;\n}\n\n.fluid_ad_cta {\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #ffffff;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    text-align: right;\n    cursor: pointer;\n    z-index: 10;\n    padding: 13px 21px 13px 13px;\n    max-width: 50%;\n}\n\n.fluid_ad_cta.left {\n    text-align: left;\n}\n\n.fluid_ad_cta a {\n    text-decoration: none;\n    color: #ffffff;\n    line-height: 18px;\n}\n\n.fluid_ad_cta:hover,\n.skip_button:not(.skip_button_disabled):hover {\n    background-color: rgba(0, 0, 0, 1);\n}\n\n.fluid_html_on_pause,\n.fluid_html_on_pause_container,\n.fluid_pseudo_poster {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    z-index: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    pointer-events: none;\n}\n\n.fluid_html_on_pause_container *,\n.fluid_html_on_pause * {\n    pointer-events: auto;\n}\n\n/*Mobile Layout*/\n.fluid_video_wrapper.mobile .skip_button {\n    bottom: 50px;\n}\n\n/*\n.fluid_video_wrapper.mobile .fluid_ad_cta {\n        bottom: 125px;\n}\n*/\n.fluid_initial_play {\n    width: 60px;\n    height: 60px;\n    border-radius: 50px;\n    cursor: pointer;\n}\n\n.fluid_initial_play_button {\n    margin-top: 15px;\n    margin-left: 23px;\n    border-style: solid;\n    border-width: 15px 0 15px 21px;\n    border-color: transparent transparent transparent #ffffff;\n}\n\n.fluid_initial_pause_button {\n    margin-top: 15px;\n    margin-left: 17px;\n    width: 8px;\n    height: 31px;\n    border: 9px solid white;\n    border-top: 0;\n    border-bottom: 0;\n}\n\n.fluid_timeline_preview {\n    bottom: 11px;\n    color: #ffffff;\n    font-size: 13px;\n    line-height: 18px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    text-align: start;\n    padding: 13px 21px 13px 21px;\n    background-color: rgba(0, 0, 0, 0.85);\n    border-radius: 1px;\n}\n\n/* Duration */\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_fluid_control_duration {\n    display: inline-block;\n    position: absolute;\n    left: 32px;\n    height: 24px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    text-align: left;\n    text-decoration: none;\n    line-height: 21px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_fluid_control_duration.cardboard_time {\n    left: 13px;\n    top: -15px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_fluid_control_duration.cardboard_time .ad_timer_prefix {\n    color: #F2C94C;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .ad_countdown .ad_timer_prefix {\n    color: #F2C94C;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .ad_countdown {\n    /*display: none;*/\n    position: absolute;\n    right: 0;\n    width: 75px;\n    bottom: 5px;\n    height: 24px;\n    color: red;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    text-align: left;\n    text-decoration: none;\n    line-height: 21px;\n}\n\n.initial_controls_show {\n    visibility: visible !important;\n    opacity: 1 !important;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container {\n    color: white;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#ad000000', GradientType=0); /* IE6-9 */\n    height: 100%;\n    width: 100%;\n    z-index: 0;\n    pointer-events: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel {\n    height: 96px;\n    width: 72px;\n    left: 10px;\n    top: 10px;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.7);\n    text-align: center;\n    border-radius: 6px;\n    overflow: hidden;\n    pointer-events: auto;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_button {\n    cursor: pointer;\n    display: inline-block;\n    text-align: left;\n    height: 24px;\n    width: 24px;\n    position: relative;\n    background: url(" + v + ") no-repeat;\n    opacity: 0.8;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_button:hover {\n    opacity: 1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_up {\n    background-position: -336px -55px;\n    -webkit-transform: rotate(270deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(270deg); /* IE 9 */\n    transform: rotate(270deg); /* Firefox 16+, IE 10+, Opera  */\n    display: block;\n    left: calc(50% - 12px);\n    top: 0;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_left {\n    background-position: -336px -55px;\n    -webkit-transform: rotate(180deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(1890deg); /* IE 9 */\n    transform: rotate(180deg); /* Firefox 16+, IE 10+, Opera  */\n    display: block;\n    left: 0;\n    top: 24px;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_right {\n    background-position: -336px -55px;\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg); /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera  */\n    display: block;\n    right: 0;\n    top: 24px;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_down {\n    background-position: -336px -55px;\n    -webkit-transform: rotate(90deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(90deg); /* IE 9 */\n    transform: rotate(90deg); /* Firefox 16+, IE 10+, Opera  */\n    display: block;\n    left: calc(50% - 12px);\n    top: 48px;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_zoomdefault {\n    background-position: -336px -17px;\n    top: 72px;\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg); /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera  */\n    position: absolute;\n    left: calc(50% - 12px);\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_zoomin {\n    background-position: -305px -55px;\n    top: 72px;\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg); /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera  */\n    position: absolute;\n    right: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_zoomout {\n    background-position: -305px -17px;\n    top: 72px;\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg); /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera  */\n    position: absolute;\n    left: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.fluid_vr_controls_container {\n    width: 50% !important;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.fluid_vr2_controls_container {\n    width: 50% !important;\n    left: 50%;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container {\n    color: white;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#ad000000', GradientType=0); /* IE6-9 */\n    height: 53px;\n    z-index: 1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vpaid_iframe {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    z-index: -10;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vpaid_nonlinear_slot_iframe {\n    z-index: 30;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vpaid_slot {\n    position: absolute !important;\n    top: 0 !important;\n    width: 100% !important;\n    height: 100% !important;\n    left: 0 !important;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_subtitles_container {\n    color: white;\n    position: absolute;\n    bottom: 46px;\n    left: 0;\n    right: 0;\n    height: auto;\n    z-index: 1;\n    text-align: center;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_subtitles_container div {\n    display: inline;\n    background: black;\n    color: white;\n    font-size: 1em;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    padding: 0.25em;\n    border-radius: 4px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fade_out {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.5s, opacity 0.5s; /* Safari */\n    transition: visibility 0.5s, opacity 0.5s;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fade_in {\n    visibility: visible;\n    opacity: 1;\n    -webkit-transition: visibility 0.5s, opacity 0.5s; /* Safari */\n    transition: visibility 0.5s, opacity 0.5s;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default.pseudo_fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    left: 0;\n    position: fixed;\n    z-index: 99999;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default:-webkit-full-screen {\n    width: 100% !important;\n    height: 100% !important;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default:-ms-fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu {\n    background-color: #000000;\n    color: #ffffff;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: start;\n    z-index: 11;\n    opacity: 0.8;\n    border-radius: 1px;\n}\n\n/* IE 10+ */\n_:-ms-lang(x),\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu {\n    text-align: left;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu ul li {\n    padding: 13px 71px 13px 21px;\n    cursor: pointer;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu ul li + li {\n    border-top: 1px solid #000000;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu ul li:hover {\n    background-color: #1e1e1e;\n    color: #fbfaff;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_left {\n    width: 24px;\n    left: 20px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.skip_controls .fluid_controls_left {\n    width: 80px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button {\n    width: 24px;\n    height: 24px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right {\n    left: 60px;\n    right: 20px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.skip_controls .fluid_controls_right {\n    left: 110px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_left,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right {\n    position: absolute;\n    height: 24px;\n    top: 23px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container {\n    height: 14px;\n    position: absolute;\n    left: 13px;\n    right: 13px;\n    z-index: 1;\n    top: 8px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress {\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    height: 4px;\n    background-color: rgba(255, 255, 255, 0.25);\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_buffered {\n    position: absolute;\n    top: 5px;\n    width: 0;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n    z-index: -1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress .fluid_controls_currentprogress {\n    position: absolute;\n    height: 3px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container:hover .fluid_controls_progress,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container:hover .fluid_controls_buffered,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container:hover .fluid_controls_ad_markers_holder {\n    margin-top: -1px;\n    height: 5px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container:hover .fluid_controls_progress .fluid_controls_currentprogress {\n    height: 5px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_timeline_preview_container {\n    border: 1px solid #262626;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_timeline_preview_container, .fluid_timeline_preview_container_shadow {\n    bottom: 14px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_slider .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos {\n    background-color: white;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_slider .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_ad_slider .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos {\n    opacity: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_slider:hover .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos {\n    opacity: 1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_slider .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos {\n    -webkit-transition: opacity 0.3s; /* Safari */\n    transition: opacity 0.3s;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_ad_markers_holder {\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    height: 3px;\n    z-index: 2;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_ad_marker {\n    position: absolute;\n    background-color: #FFCC00;\n    height: 100%;\n    width: 6px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container {\n    height: 24px;\n    width: 56px;\n    left: 25px;\n    top: -1px;\n    z-index: 2;\n    opacity: 0.8;\n    -webkit-transition: opacity 0.3s ease-in-out;\n    -moz-transition: opacity 0.3s ease-in-out;\n    -ms-transition: opacity 0.3s ease-in-out;\n    -o-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n    display: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container:hover {\n    opacity: 1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container .fluid_control_volume {\n    position: relative;\n    height: 3px;\n    width: 100%;\n    margin-top: 10px;\n    background-color: rgba(171, 172, 172, 0.68);\n    z-index: 3;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container .fluid_control_volume .fluid_control_currentvolume {\n    float: left;\n    background-color: white;\n    height: 3px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container .fluid_control_volume .fluid_control_currentvolume .fluid_control_volume_currentpos {\n    background-color: white;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress .fluid_controls_currentpos {\n    right: -4px;\n    z-index: 3;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container .fluid_control_volume .fluid_control_currentvolume .fluid_control_volume_currentpos,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress .fluid_controls_currentpos {\n    width: 11px;\n    height: 11px;\n    position: absolute;\n    top: -4px;\n    border-radius: 6px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress .fluid_controls_currentpos {\n    width: 13px;\n    height: 13px;\n    position: absolute;\n    top: -4px;\n    border-radius: 6px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.no_volume_bar .fluid_controls_right .fluid_control_volume_container {\n    display: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_slider {\n    cursor: pointer;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container div div {\n    display: block;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_fullscreen,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_fullscreen_exit,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_mini_player {\n    float: right;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_cardboard {\n    font-size: 13px;\n    height: 24px;\n    line-height: 24px;\n    float: right;\n    cursor: pointer;\n    position: relative;\n    text-align: right;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_title,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_title {\n    width: 80px;\n    overflow: hidden;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_list,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_list,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_video_playback_rates {\n    position: absolute;\n    bottom: 25px;\n    right: 3px;\n    z-index: 888888;\n    opacity: 99%;\n    background-color: rgba(0, 0, 0, 1);\n    border-radius: 2px;\n    color: #ffffff;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: start;\n    width: max-content;\n    padding: 0.5em;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_list .fluid_subtitle_list_item,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_list .fluid_video_source_list_item {\n    padding: 12px 34px 12px 24px;\n    line-height: 15px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_list .fluid_video_source_list_item:hover,\n.fluid_video_playback_rates_item:hover,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_list .fluid_subtitle_list_item:hover {\n    background-color: #3a3a3a;\n}\n\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_volume,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_mute {\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_volume,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_mute {\n    left: -10px;\n}\n\n/* Button Icons */\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_play,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_pause,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_forward,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_volume,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mute,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen_exit,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mini_player {\n    display: inline-block;\n    text-align: left;\n    height: 24px;\n    width: 24px;\n    position: relative;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_play:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_pause:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_forward:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_volume:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mute:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen_exit:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mini_player:before{\n    background: url(" + v + ') no-repeat;\n    position: absolute;\n    height: 24px;\n    width: 24px;\n    top: 1px;\n    left: 5px;\n    content: "";\n    opacity: 0.8;\n    -webkit-transition: opacity 0.3s ease-in-out;\n    -moz-transition: opacity 0.3s ease-in-out;\n    -ms-transition: opacity 0.3s ease-in-out;\n    -o-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_play:before {\n    background-position: -15px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_pause:before {\n    background-position: -15px -57px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_volume:before {\n    background-position: -52px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mute:before {\n    background-position: -52px -57px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen:before {\n    background-position: -88px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen_exit:before {\n    background-position: -88px -57px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source:before {\n    background-position: -122px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate:before {\n    background-position: -232px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download:before {\n    background-position: -194px -18px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre:before {\n    background-position: -195px -56px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles:before {\n    background-position: -269px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard:before {\n    background-position: -269px -56px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back:before {\n    background: url(' + b + ") no-repeat;\n    background-position: -2px -2px;\n}\n\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_forward:before {\n    background: url(" + w + ") no-repeat;\n    background-position: -2px -2px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mini_player:before {\n    background: url(" + A + ") no-repeat 0 0;\n    background-size: 20px;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode .fluid_controls_container .fluid_button.fluid_button_mini_player:before {\n    background: url(" + C + ") no-repeat 0 0;\n    background-size: 20px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back {\n    margin-left: 5px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen_exit:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mute:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_volume:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_pause:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_play:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_forward:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mini_player:hover:before {\n    opacity: 1;\n}\n\n.fp_title {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    color: #ffffff;\n    font-size: 15px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n}\n\n/* Pulse class and keyframe animation */\n.transform-active {\n    animation: flash 1s infinite;\n    display: inline-block !important;\n    opacity: 0;\n}\n\n@-webkit-keyframes flash {\n    0% {\n        opacity: 0.6;\n        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n    }\n    70% {\n        -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n    }\n    100% {\n        opacity: 0;\n        display: none;\n        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n    }\n}\n\n@keyframes flash {\n    0% {\n        opacity: 0.6;\n        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);\n    }\n    70% {\n        -moz-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n    }\n    100% {\n        opacity: 0;\n        display: none;\n        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n    }\n}\n\n.fluid_nonLinear_top, .fluid_nonLinear_middle, .fluid_nonLinear_bottom {\n    flex-direction: column;\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    vertical-align: middle;\n    align-content: center;\n    border: 1px solid #777777;\n    position: absolute;\n    left: 50%;\n    margin-right: -50%;\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.fluid_nonLinear_top {\n    top: 20px;\n    transform: translate(-50%);\n}\n\n.fluid_nonLinear_middle {\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.fluid_nonLinear_bottom {\n    bottom: 50px;\n    transform: translate(-50%);\n}\n\n.fluid_vpaidNonLinear_top, .fluid_vpaidNonLinear_middle, .fluid_vpaidNonLinear_bottom {\n    flex-direction: column;\n    align-items: center;\n    cursor: pointer;\n    vertical-align: middle;\n    align-content: center;\n    position: absolute;\n    display: flex;\n}\n\n.fluid_vpaidNonLinear_frame {\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.fluid_vpaidNonLinear_top {\n    top: 20px;\n}\n\n.fluid_vpaidNonLinear_middle {\n    top: 50%;\n}\n\n.fluid_vpaidNonLinear_bottom {\n    bottom: 50px;\n}\n\n.add_icon_clickthrough {\n    color: #F2C94C;\n    line-height: 18px;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    display: inline-block;\n}\n\n.add_icon_clickthrough:before {\n    background: url(" + v + ') no-repeat;\n    height: 18px;\n    width: 18px;\n    top: 30px;\n    padding: 3px 22px 0 0;\n    content: "";\n    background-position: -162px -57px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard {\n    float: right;\n    padding-right: 5px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard {\n    display: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_list,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_list,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_video_playback_rates {\n    z-index: 888888 !important;\n    opacity: 0.9 !important;\n}\n\n.fluid_video_playback_rates_item {\n    padding: 9px 25px 9px 25px;\n    line-height: 15px;\n    text-align: center;\n}\n\n.fluid_theatre_mode {\n    position: fixed;\n    float: left;\n    top: 0;\n    z-index: 10;\n    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.8);\n}\n\n.fluid_mini_player_mode {\n    position: fixed;\n    bottom: 10px;\n    right: 10px;\n    z-index: 10;\n}\n\n.source_button_icon {\n    background: url(' + v + ") no-repeat;\n    float: left;\n    cursor: pointer;\n    height: 18px;\n    width: 18px;\n    background-position: -164px -21px;\n    opacity: 0;\n}\n\n.subtitle_button_icon {\n    background: url(" + v + ") no-repeat;\n    float: left;\n    cursor: pointer;\n    height: 18px;\n    width: 18px;\n    background-position: -164px -21px;\n    opacity: 0;\n}\n\n.source_selected {\n    opacity: 1 !important;\n}\n\n.subtitle_selected {\n    opacity: 1 !important;\n}\n\n@media only screen and (min-device-width: 375px) {\n    .fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_fluid_control_duration {\n        left: 105px;\n    }\n\n    .fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.no_volume_bar .fluid_fluid_control_duration {\n        left: 32px;\n    }\n\n    .fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container {\n        display: block;\n    }\n}\n\n.fp_logo {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n    -moz-transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n    -ms-transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n    -o-transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n    transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n}\n\n.fp_hd_source::before {\n    font-weight: bolder;\n    font-size: 6pt;\n    content: 'HD';\n    padding-left: 3px;\n}\n\n/** MiniPlayer */\n\n.fluid_video_wrapper.fluid_player_layout_default .mini-player-close-button-wrapper {\n    display: none;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode .mini-player-close-button-wrapper {\n    position: absolute;\n    background: rgb(0,0,0);\n    background: linear-gradient(45deg, rgba(0,0,0,0) 90%, rgba(0,0,0,0.6) 110%);\n    height: 100%;\n    width: 100%;\n    top: 0;\n    right: 0;\n    z-index: 31;\n    display: block;\n    opacity: 0;\n    -webkit-transition: opacity 0.3s ease-in-out;\n    -moz-transition: opacity 0.3s ease-in-out;\n    -ms-transition: opacity 0.3s ease-in-out;\n    -o-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n    pointer-events: none;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode .mini-player-close-button {\n    position: absolute;\n    background: transparent url(" + h + ") no-repeat scroll center center;\n    height: 22px;\n    width: 22px;\n    top: 6px;\n    right: 6px;\n    background-size: 22px;\n    cursor: pointer;\n    z-index: 32;\n    display: block;\n    pointer-events: all;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode:hover .mini-player-close-button-wrapper {\n    opacity: 1;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode .disable-mini-player-mobile {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n}\n\n.fluidplayer-miniplayer-player-placeholder {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    font-size: 1.5rem;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    background: #000 url(" + A + ") no-repeat 50% calc(50% - 48px);\n    background-size: 48px;\n    cursor: pointer;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode.fluid_video_wrapper.fluid_mini_player_mode--top-left {\n    top: 10px;\n    left: 10px;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode.fluid_video_wrapper.fluid_mini_player_mode--top-right {\n    top: 10px;\n    right: 10px;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode.fluid_video_wrapper.fluid_mini_player_mode--bottom-left {\n    bottom: 10px;\n    left: 10px;\n}\n\n.fluid_video_wrapper.fluid_mini_player_mode.fluid_video_wrapper.fluid_mini_player_mode--bottom-right {\n    bottom: 10px;\n    right: 10px;\n}\n\n@media screen and (max-width: 768px) {\n    .fluid_video_wrapper.fluid_mini_player_mode > *:not(video, .ad_countdown, .fluid_nonLinear_ad, .disable-mini-player-mobile) {\n        display: none;\n    }\n\n    .fluid_video_wrapper.fluid_mini_player_mode .fluid_nonLinear_ad {\n        z-index: 100;\n    }\n\n    .fluid_video_wrapper.fluid_mini_player_mode .fluid_nonLinear_bottom {\n        bottom: 16px;\n    }\n\n    .fluid_video_wrapper.fluid_mini_player_mode .fluid_nonLinear_top {\n        top: 16px;\n    }\n\n    .fluid_video_wrapper.fluid_mini_player_mode .ad_countdown {\n        display: inline-block !important;\n    }\n\n    .fluid_video_wrapper.fluid_mini_player_mode .disable-mini-player-mobile {\n        display: block;\n        touch-action: none;\n    }\n\n    .fluidplayer-miniplayer-player-placeholder {\n        font-size: 1.25rem !important;\n        background-size: 32px !important;\n        background-position-y: calc(50% - 32px) !important;\n    }\n}\n\n.fluid_video_wrapper .fluid_player_skip_offset {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    pointer-events: none;\n}\n\n.fluid_video_wrapper .fluid_player_skip_offset__backward {\n    display: flex;\n    align-items: center;\n    margin: 10% 10% 10% 0;\n}\n\n.fluid_video_wrapper .fluid_player_skip_offset__backward-icon {\n    background: rgba(0, 0, 0, .5) url(" + b + ") no-repeat -2px 3px;\n    width: 150px;\n    height: 150px;\n    background-size: contain;\n    opacity: 0;\n    transition: opacity 400ms ease-in;\n    border-radius: 150px;\n    margin-left: 20%;\n    pointer-events: none;\n    background-origin: content-box;\n    padding: 10px;\n}\n\n.fluid_video_wrapper .fluid_player_skip_offset__forward {\n    display: flex;\n    align-items: center;\n    flex-direction: row-reverse;\n    margin: 10% 0 10% 10%;\n}\n\n.fluid_video_wrapper .fluid_player_skip_offset__forward-icon {\n    background: rgba(0, 0, 0, .5) url(" + w + ") no-repeat -2px 3px;\n    width: 150px;\n    height: 150px;\n    background-size: cover;\n    opacity: 0;\n    transition: opacity 400ms ease-in;\n    border-radius: 150px;\n    margin-right: 20%;\n    pointer-events: none;\n    background-origin: content-box;\n    padding: 10px;\n}\n\n.fluid_video_wrapper .fluid_player_skip_offset__backward-icon.animate,\n.fluid_video_wrapper .fluid_player_skip_offset__forward-icon.animate {\n    opacity: 1;\n    transition: opacity 150ms ease-out;\n}\n\n@media screen and (max-width: 768px) {\n    .fluid_video_wrapper .fluid_player_skip_offset__backward-icon,\n    .fluid_video_wrapper .fluid_player_skip_offset__forward-icon {\n        width: 50px;\n        height: 50px;\n        border-radius: 50px;\n        background-position-x: 0;\n        background-position-y: 0;\n        padding: 5px;\n    }\n}\n", ""]),
            t.Z = m
        },
        645: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = ""
                          , o = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")),
                        t[2] && (n += "@media ".concat(t[2], " {")),
                        o && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                        n += e(t),
                        o && (n += "}"),
                        t[2] && (n += "}"),
                        t[4] && (n += "}"),
                        n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, o, r, i) {
                    "string" == typeof e && (e = [[null, e, void 0]]);
                    var a = {};
                    if (o)
                        for (var l = 0; l < this.length; l++) {
                            var d = this[l][0];
                            null != d && (a[d] = !0)
                        }
                    for (var s = 0; s < e.length; s++) {
                        var u = [].concat(e[s]);
                        o && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                        u[5] = i),
                        n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"),
                        u[2] = n) : u[2] = n),
                        r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"),
                        u[4] = r) : u[4] = "".concat(r)),
                        t.push(u))
                    }
                }
                ,
                t
            }
        },
        667: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}),
                e ? (e = String(e.__esModule ? e.default : e),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
            }
        },
        81: function(e) {
            "use strict";
            e.exports = function(e) {
                return e[1]
            }
        },
        702: function(e, t, n) {
            e.exports = function() {
                "use strict";
                function e(e) {
                    return "function" == typeof e
                }
                var t = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }
                  , o = 0
                  , r = void 0
                  , i = void 0
                  , a = function(e, t) {
                    f[o] = e,
                    f[o + 1] = t,
                    2 === (o += 2) && (i ? i(_) : h())
                };
                var l = "undefined" != typeof window ? window : void 0
                  , d = l || {}
                  , s = d.MutationObserver || d.WebKitMutationObserver
                  , u = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process)
                  , c = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
                function p() {
                    var e = setTimeout;
                    return function() {
                        return e(_, 1)
                    }
                }
                var f = new Array(1e3);
                function _() {
                    for (var e = 0; e < o; e += 2)
                        (0,
                        f[e])(f[e + 1]),
                        f[e] = void 0,
                        f[e + 1] = void 0;
                    o = 0
                }
                var y, m, g, v, h = void 0;
                function b(e, t) {
                    var n = this
                      , o = new this.constructor(C);
                    void 0 === o[A] && V(o);
                    var r = n._state;
                    if (r) {
                        var i = arguments[r - 1];
                        a((function() {
                            return N(r, o, i, n._result)
                        }
                        ))
                    } else
                        E(n, o, e, t);
                    return o
                }
                function w(e) {
                    if (e && "object" == typeof e && e.constructor === this)
                        return e;
                    var t = new this(C);
                    return S(t, e),
                    t
                }
                h = u ? function() {
                    return process.nextTick(_)
                }
                : s ? (m = 0,
                g = new s(_),
                v = document.createTextNode(""),
                g.observe(v, {
                    characterData: !0
                }),
                function() {
                    v.data = m = ++m % 2
                }
                ) : c ? ((y = new MessageChannel).port1.onmessage = _,
                function() {
                    return y.port2.postMessage(0)
                }
                ) : void 0 === l ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (r = e.runOnLoop || e.runOnContext) ? function() {
                            r(_)
                        }
                        : p()
                    } catch (e) {
                        return p()
                    }
                }() : p();
                var A = Math.random().toString(36).substring(2);
                function C() {}
                var k = void 0
                  , x = 1
                  , L = 2;
                function T(t, n, o) {
                    n.constructor === t.constructor && o === b && n.constructor.resolve === w ? function(e, t) {
                        t._state === x ? M(e, t._result) : t._state === L ? O(e, t._result) : E(t, void 0, (function(t) {
                            return S(e, t)
                        }
                        ), (function(t) {
                            return O(e, t)
                        }
                        ))
                    }(t, n) : void 0 === o ? M(t, n) : e(o) ? function(e, t, n) {
                        a((function(e) {
                            var o = !1
                              , r = function(e, t, n, o) {
                                try {
                                    e.call(t, n, o)
                                } catch (e) {
                                    return e
                                }
                            }(n, t, (function(n) {
                                o || (o = !0,
                                t !== n ? S(e, n) : M(e, n))
                            }
                            ), (function(t) {
                                o || (o = !0,
                                O(e, t))
                            }
                            ), e._label);
                            !o && r && (o = !0,
                            O(e, r))
                        }
                        ), e)
                    }(t, n, o) : M(t, n)
                }
                function S(e, t) {
                    if (e === t)
                        O(e, new TypeError("You cannot resolve a promise with itself"));
                    else if (r = typeof (o = t),
                    null === o || "object" !== r && "function" !== r)
                        M(e, t);
                    else {
                        var n = void 0;
                        try {
                            n = t.then
                        } catch (t) {
                            return void O(e, t)
                        }
                        T(e, t, n)
                    }
                    var o, r
                }
                function R(e) {
                    e._onerror && e._onerror(e._result),
                    I(e)
                }
                function M(e, t) {
                    e._state === k && (e._result = t,
                    e._state = x,
                    0 !== e._subscribers.length && a(I, e))
                }
                function O(e, t) {
                    e._state === k && (e._state = L,
                    e._result = t,
                    a(R, e))
                }
                function E(e, t, n, o) {
                    var r = e._subscribers
                      , i = r.length;
                    e._onerror = null,
                    r[i] = t,
                    r[i + x] = n,
                    r[i + L] = o,
                    0 === i && e._state && a(I, e)
                }
                function I(e) {
                    var t = e._subscribers
                      , n = e._state;
                    if (0 !== t.length) {
                        for (var o = void 0, r = void 0, i = e._result, a = 0; a < t.length; a += 3)
                            o = t[a],
                            r = t[a + n],
                            o ? N(n, o, r, i) : r(i);
                        e._subscribers.length = 0
                    }
                }
                function N(t, n, o, r) {
                    var i = e(o)
                      , a = void 0
                      , l = void 0
                      , d = !0;
                    if (i) {
                        try {
                            a = o(r)
                        } catch (e) {
                            d = !1,
                            l = e
                        }
                        if (n === a)
                            return void O(n, new TypeError("A promises callback cannot return that same promise."))
                    } else
                        a = r;
                    n._state !== k || (i && d ? S(n, a) : !1 === d ? O(n, l) : t === x ? M(n, a) : t === L && O(n, a))
                }
                var P = 0;
                function V(e) {
                    e[A] = P++,
                    e._state = void 0,
                    e._result = void 0,
                    e._subscribers = []
                }
                var j = function() {
                    function e(e, n) {
                        this._instanceConstructor = e,
                        this.promise = new e(C),
                        this.promise[A] || V(this.promise),
                        t(n) ? (this.length = n.length,
                        this._remaining = n.length,
                        this._result = new Array(this.length),
                        0 === this.length ? M(this.promise, this._result) : (this.length = this.length || 0,
                        this._enumerate(n),
                        0 === this._remaining && M(this.promise, this._result))) : O(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === k && t < e.length; t++)
                            this._eachEntry(e[t], t)
                    }
                    ,
                    e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor
                          , o = n.resolve;
                        if (o === w) {
                            var r = void 0
                              , i = void 0
                              , a = !1;
                            try {
                                r = e.then
                            } catch (e) {
                                a = !0,
                                i = e
                            }
                            if (r === b && e._state !== k)
                                this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof r)
                                this._remaining--,
                                this._result[t] = e;
                            else if (n === D) {
                                var l = new n(C);
                                a ? O(l, i) : T(l, e, r),
                                this._willSettleAt(l, t)
                            } else
                                this._willSettleAt(new n((function(t) {
                                    return t(e)
                                }
                                )), t)
                        } else
                            this._willSettleAt(o(e), t)
                    }
                    ,
                    e.prototype._settledAt = function(e, t, n) {
                        var o = this.promise;
                        o._state === k && (this._remaining--,
                        e === L ? O(o, n) : this._result[t] = n),
                        0 === this._remaining && M(o, this._result)
                    }
                    ,
                    e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        E(e, void 0, (function(e) {
                            return n._settledAt(x, t, e)
                        }
                        ), (function(e) {
                            return n._settledAt(L, t, e)
                        }
                        ))
                    }
                    ,
                    e
                }();
                var D = function() {
                    function t(e) {
                        this[A] = P++,
                        this._result = this._state = void 0,
                        this._subscribers = [],
                        C !== e && ("function" != typeof e && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(),
                        this instanceof t ? function(e, t) {
                            try {
                                t((function(t) {
                                    S(e, t)
                                }
                                ), (function(t) {
                                    O(e, t)
                                }
                                ))
                            } catch (t) {
                                O(e, t)
                            }
                        }(this, e) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return t.prototype.catch = function(e) {
                        return this.then(null, e)
                    }
                    ,
                    t.prototype.finally = function(t) {
                        var n = this
                          , o = n.constructor;
                        return e(t) ? n.then((function(e) {
                            return o.resolve(t()).then((function() {
                                return e
                            }
                            ))
                        }
                        ), (function(e) {
                            return o.resolve(t()).then((function() {
                                throw e
                            }
                            ))
                        }
                        )) : n.then(t, t)
                    }
                    ,
                    t
                }();
                return D.prototype.then = b,
                D.all = function(e) {
                    return new j(this,e).promise
                }
                ,
                D.race = function(e) {
                    var n = this;
                    return t(e) ? new n((function(t, o) {
                        for (var r = e.length, i = 0; i < r; i++)
                            n.resolve(e[i]).then(t, o)
                    }
                    )) : new n((function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    }
                    ))
                }
                ,
                D.resolve = w,
                D.reject = function(e) {
                    var t = new this(C);
                    return O(t, e),
                    t
                }
                ,
                D._setScheduler = function(e) {
                    i = e
                }
                ,
                D._setAsap = function(e) {
                    a = e
                }
                ,
                D._asap = a,
                D.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== n.g)
                        e = n.g;
                    else if ("undefined" != typeof self)
                        e = self;
                    else
                        try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    var t = e.Promise;
                    if (t) {
                        var o = null;
                        try {
                            o = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === o && !t.cast)
                            return
                    }
                    e.Promise = D
                }
                ,
                D.Promise = D,
                D
            }()
        },
        379: function(e) {
            "use strict";
            var t = [];
            function n(e) {
                for (var n = -1, o = 0; o < t.length; o++)
                    if (t[o].identifier === e) {
                        n = o;
                        break
                    }
                return n
            }
            function o(e, o) {
                for (var i = {}, a = [], l = 0; l < e.length; l++) {
                    var d = e[l]
                      , s = o.base ? d[0] + o.base : d[0]
                      , u = i[s] || 0
                      , c = "".concat(s, " ").concat(u);
                    i[s] = u + 1;
                    var p = n(c)
                      , f = {
                        css: d[1],
                        media: d[2],
                        sourceMap: d[3],
                        supports: d[4],
                        layer: d[5]
                    };
                    if (-1 !== p)
                        t[p].references++,
                        t[p].updater(f);
                    else {
                        var _ = r(f, o);
                        o.byIndex = l,
                        t.splice(l, 0, {
                            identifier: c,
                            updater: _,
                            references: 1
                        })
                    }
                    a.push(c)
                }
                return a
            }
            function r(e, t) {
                var n = t.domAPI(t);
                return n.update(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer)
                            return;
                        n.update(e = t)
                    } else
                        n.remove()
                }
            }
            e.exports = function(e, r) {
                var i = o(e = e || [], r = r || {});
                return function(e) {
                    e = e || [];
                    for (var a = 0; a < i.length; a++) {
                        var l = n(i[a]);
                        t[l].references--
                    }
                    for (var d = o(e, r), s = 0; s < i.length; s++) {
                        var u = n(i[s]);
                        0 === t[u].references && (t[u].updater(),
                        t.splice(u, 1))
                    }
                    i = d
                }
            }
        },
        569: function(e) {
            "use strict";
            var t = {};
            e.exports = function(e, n) {
                var o = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!o)
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(n)
            }
        },
        216: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes),
                e.insert(t, e.options),
                t
            }
        },
        565: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        },
        795: function(e) {
            "use strict";
            e.exports = function(e) {
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        !function(e, t, n) {
                            var o = "";
                            n.supports && (o += "@supports (".concat(n.supports, ") {")),
                            n.media && (o += "@media ".concat(n.media, " {"));
                            var r = void 0 !== n.layer;
                            r && (o += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")),
                            o += n.css,
                            r && (o += "}"),
                            n.media && (o += "}"),
                            n.supports && (o += "}");
                            var i = n.sourceMap;
                            i && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                            t.styleTagTransform(o, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        },
        589: function(e) {
            "use strict";
            e.exports = function(e, t) {
                if (t.styleSheet)
                    t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        },
        373: function(e) {
            "use strict";
            e.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnoiLz4NCiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+DQo8L3N2Zz4NCg=="
        },
        924: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6aef4fee473c54e96ff8.svg"
        },
        858: function(e) {
            "use strict";
            e.exports = "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLWVjbGlwc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBzdHlsZT0iYmFja2dyb3VuZDowIDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIg0KICAgICB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNNjguMDk1IDU5LjU3OEEyMCAyMCAwIDAwMzEuMTQgNDQuMjdhMjIgMjAtNjcuNSAwMTM2Ljk1NSAxNS4zMDgiIGZpbGw9IiNmZmYiPg0KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIGJlZ2luPSIwcyIgY2FsY01vZGU9ImxpbmVhciIgZHVyPSIwLjhzIiBrZXlUaW1lcz0iMDsxIg0KICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNTAgNTE7MzYwIDUwIDUxIi8+DQogICAgPC9wYXRoPg0KPC9zdmc+DQo="
        },
        276: function(e) {
            "use strict";
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNSAyMEMzLjEgMjAgMi43NSAxOS44NSAyLjQ1IDE5LjU1QzIuMTUgMTkuMjUgMiAxOC45IDIgMTguNVYxMUgzLjVWMTguNUgyMC41VjUuNUgxMVY0SDIwLjVDMjAuOSA0IDIxLjI1IDQuMTUgMjEuNTUgNC40NUMyMS44NSA0Ljc1IDIyIDUuMSAyMiA1LjVWMTguNUMyMiAxOC45IDIxLjg1IDE5LjI1IDIxLjU1IDE5LjU1QzIxLjI1IDE5Ljg1IDIwLjkgMjAgMjAuNSAyMEgzLjVaTTE3LjQyNSAxNi41TDE4LjUgMTUuNDI1TDE0LjcyNSAxMS42NzVIMTcuNjc1VjEwLjE3NUgxMi4xNzVWMTUuNjc1SDEzLjY3NVYxMi43NUwxNy40MjUgMTYuNVpNMiA5LjVWNEg5LjVWOS41SDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
        },
        46: function(e) {
            "use strict";
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yLjAwMDA1IDExVjlINS42MDAwNUwxLjMwMDA1IDQuN0wyLjcwMDA1IDMuM0w3LjAwMDA1IDcuNlY0SDkuMDAwMDVWMTFIMi4wMDAwNVpNNC4wMDAwNSAyMEMzLjQ1MDA1IDIwIDIuOTc5MjIgMTkuODA0MiAyLjU4NzU1IDE5LjQxMjVDMi4xOTU4OCAxOS4wMjA4IDIuMDAwMDUgMTguNTUgMi4wMDAwNSAxOFYxM0g0LjAwMDA1VjE4SDEyVjIwSDQuMDAwMDVaTTIwIDEzVjZIMTFWNEgyMEMyMC41NSA0IDIxLjAyMDkgNC4xOTU4MyAyMS40MTI1IDQuNTg3NUMyMS44MDQyIDQuOTc5MTcgMjIgNS40NSAyMiA2VjEzSDIwWk0xNCAyMFYxNUgyMlYyMEgxNFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
        },
        212: function(e) {
            "use strict";
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPg0KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPg0KICAgIDxwYXRoDQogICAgICAgIGQ9Ik0xMS45OSA1VjFsLTUgNSA1IDVWN2MzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02aC0yYzAgNC40MiAzLjU4IDggOCA4czgtMy41OCA4LTgtMy41OC04LTgtOHptLTEuMSAxMWgtLjg1di0zLjI2bC0xLjAxLjMxdi0uNjlsMS43Ny0uNjNoLjA5VjE2em00LjI4LTEuNzZjMCAuMzItLjAzLjYtLjEuODJzLS4xNy40Mi0uMjkuNTctLjI4LjI2LS40NS4zMy0uMzcuMS0uNTkuMS0uNDEtLjAzLS41OS0uMS0uMzMtLjE4LS40Ni0uMzMtLjIzLS4zNC0uMy0uNTctLjExLS41LS4xMS0uODJ2LS43NGMwLS4zMi4wMy0uNi4xLS44MnMuMTctLjQyLjI5LS41Ny4yOC0uMjYuNDUtLjMzLjM3LS4xLjU5LS4xLjQxLjAzLjU5LjEuMzMuMTguNDYuMzMuMjMuMzQuMy41Ny4xMS41LjExLjgydi43NHptLS44NS0uODZjMC0uMTktLjAxLS4zNS0uMDQtLjQ4cy0uMDctLjIzLS4xMi0uMzEtLjExLS4xNC0uMTktLjE3LS4xNi0uMDUtLjI1LS4wNS0uMTguMDItLjI1LjA1LS4xNC4wOS0uMTkuMTctLjA5LjE4LS4xMi4zMS0uMDQuMjktLjA0LjQ4di45N2MwIC4xOS4wMS4zNS4wNC40OHMuMDcuMjQuMTIuMzIuMTEuMTQuMTkuMTcuMTYuMDUuMjUuMDUuMTgtLjAyLjI1LS4wNS4xNC0uMDkuMTktLjE3LjA5LS4xOS4xMS0uMzIuMDQtLjI5LjA0LS40OHYtLjk3eiIvPg0KPC9zdmc+DQo="
        },
        928: function(e) {
            "use strict";
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IndoaXRlIiB3aWR0aD0iMjRweCINCiAgICAgaGVpZ2h0PSIyNHB4Ij4NCiAgICA8Zz4NCiAgICAgICAgPHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+DQogICAgICAgIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPg0KICAgICAgICA8cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiLz4NCiAgICA8L2c+DQogICAgPGc+DQogICAgICAgIDxnLz4NCiAgICAgICAgPGc+DQogICAgICAgICAgICA8cGF0aA0KICAgICAgICAgICAgICAgIGQ9Ik0xOCwxM2MwLDMuMzEtMi42OSw2LTYsNnMtNi0yLjY5LTYtNnMyLjY5LTYsNi02djRsNS01bC01LTV2NGMtNC40MiwwLTgsMy41OC04LDhjMCw0LjQyLDMuNTgsOCw4LDhzOC0zLjU4LDgtOEgxOHoiLz4NCiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz0iMTAuOSwxNiAxMC45LDExLjczIDEwLjgxLDExLjczIDkuMDQsMTIuMzYgOS4wNCwxMy4wNSAxMC4wNSwxMi43NCAxMC4wNSwxNiIvPg0KICAgICAgICAgICAgPHBhdGgNCiAgICAgICAgICAgICAgICBkPSJNMTQuMzIsMTEuNzhjLTAuMTgtMC4wNy0wLjM3LTAuMS0wLjU5LTAuMXMtMC40MSwwLjAzLTAuNTksMC4xcy0wLjMzLDAuMTgtMC40NSwwLjMzcy0wLjIzLDAuMzQtMC4yOSwwLjU3IHMtMC4xLDAuNS0wLjEsMC44MnYwLjc0YzAsMC4zMiwwLjA0LDAuNiwwLjExLDAuODJzMC4xNywwLjQyLDAuMywwLjU3czAuMjgsMC4yNiwwLjQ2LDAuMzNzMC4zNywwLjEsMC41OSwwLjFzMC40MS0wLjAzLDAuNTktMC4xIHMwLjMzLTAuMTgsMC40NS0wLjMzczAuMjItMC4zNCwwLjI5LTAuNTdzMC4xLTAuNSwwLjEtMC44MlYxMy41YzAtMC4zMi0wLjA0LTAuNi0wLjExLTAuODJzLTAuMTctMC40Mi0wLjMtMC41NyBTMTQuNDksMTEuODUsMTQuMzIsMTEuNzh6IE0xNC4zMywxNC4zNWMwLDAuMTktMC4wMSwwLjM1LTAuMDQsMC40OHMtMC4wNiwwLjI0LTAuMTEsMC4zMnMtMC4xMSwwLjE0LTAuMTksMC4xNyBzLTAuMTYsMC4wNS0wLjI1LDAuMDVzLTAuMTgtMC4wMi0wLjI1LTAuMDVzLTAuMTQtMC4wOS0wLjE5LTAuMTdzLTAuMDktMC4xOS0wLjEyLTAuMzJzLTAuMDQtMC4yOS0wLjA0LTAuNDh2LTAuOTcgYzAtMC4xOSwwLjAxLTAuMzUsMC4wNC0wLjQ4czAuMDYtMC4yMywwLjEyLTAuMzFzMC4xMS0wLjE0LDAuMTktMC4xN3MwLjE2LTAuMDUsMC4yNS0wLjA1czAuMTgsMC4wMiwwLjI1LDAuMDUgczAuMTQsMC4wOSwwLjE5LDAuMTdzMC4wOSwwLjE4LDAuMTIsMC4zMXMwLjA0LDAuMjksMC4wNCwwLjQ4VjE0LjM1eiIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+DQo="
        }
    }, i = {};
    function a(e) {
        var t = i[e];
        if (void 0 !== t)
            return t.exports;
        var n = i[e] = {
            id: e,
            exports: {}
        };
        return r[e].call(n.exports, n, n.exports, a),
        n.exports
    }
    a.m = r,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    t = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    a.t = function(n, o) {
        if (1 & o && (n = this(n)),
        8 & o)
            return n;
        if ("object" == typeof n && n) {
            if (4 & o && n.__esModule)
                return n;
            if (16 & o && "function" == typeof n.then)
                return n
        }
        var r = Object.create(null);
        a.r(r);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & o && n; "object" == typeof l && !~e.indexOf(l); l = t(l))
            Object.getOwnPropertyNames(l).forEach((function(e) {
                i[e] = function() {
                    return n[e]
                }
            }
            ));
        return i.default = function() {
            return n
        }
        ,
        a.d(r, i),
        r
    }
    ,
    a.d = function(e, t) {
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    a.f = {},
    a.e = function(e) {
        return Promise.all(Object.keys(a.f).reduce((function(t, n) {
            return a.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    a.u = function(e) {
        return ({
            112: "dashjs",
            366: "panolens",
            490: "webvtt",
            602: "hlsjs",
            721: "vttjs"
        }[e] || e) + "." + {
            112: "ac8d0635fe405cfae240",
            366: "0e7b24b7f7ead0f8af07",
            407: "6f735c824f5e83f5bd0f",
            490: "b41ca0d81616f1dc56af",
            602: "4b0a23d10da9eba746aa",
            721: "f3947aacfbfc044aea48"
        }[e] + ".min.js"
    }
    ,
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n = {},
    o = "fluid-player:",
    a.l = function(e, t, r, i) {
        if (n[e])
            n[e].push(t);
        else {
            var l, d;
            if (void 0 !== r)
                for (var s = document.getElementsByTagName("script"), u = 0; u < s.length; u++) {
                    var c = s[u];
                    if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == o + r) {
                        l = c;
                        break
                    }
                }
            l || (d = !0,
            (l = document.createElement("script")).charset = "utf-8",
            l.timeout = 120,
            a.nc && l.setAttribute("nonce", a.nc),
            l.setAttribute("data-webpack", o + r),
            l.src = e),
            n[e] = [t];
            var p = function(t, o) {
                l.onerror = l.onload = null,
                clearTimeout(f);
                var r = n[e];
                if (delete n[e],
                l.parentNode && l.parentNode.removeChild(l),
                r && r.forEach((function(e) {
                    return e(o)
                }
                )),
                t)
                    return t(o)
            }
              , f = setTimeout(p.bind(null, void 0, {
                type: "timeout",
                target: l
            }), 12e4);
            l.onerror = p.bind(null, l.onerror),
            l.onload = p.bind(null, l.onload),
            d && document.head.appendChild(l)
        }
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.p = "https://cdn.fluidplayer.com/v3/current/",
    function() {
        a.b = document.baseURI || self.location.href;
        var e = {
            772: 0
        };
        a.f.j = function(t, n) {
            var o = a.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o)
                    n.push(o[2]);
                else {
                    var r = new Promise((function(n, r) {
                        o = e[t] = [n, r]
                    }
                    ));
                    n.push(o[2] = r);
                    var i = a.p + a.u(t)
                      , l = new Error;
                    a.l(i, (function(n) {
                        if (a.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0),
                        o)) {
                            var r = n && ("load" === n.type ? "missing" : n.type)
                              , i = n && n.target && n.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")",
                            l.name = "ChunkLoadError",
                            l.type = r,
                            l.request = i,
                            o[1](l)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = function(t, n) {
            var o, r, i = n[0], l = n[1], d = n[2], s = 0;
            if (i.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (o in l)
                    a.o(l, o) && (a.m[o] = l[o]);
                d && d(a)
            }
            for (t && t(n); s < i.length; s++)
                r = i[s],
                a.o(e, r) && e[r] && e[r][0](),
                e[r] = 0
        }
          , n = self.webpackChunkfluid_player = self.webpackChunkfluid_player || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }(),
    a.nc = void 0,
    function() {
        "use strict";
        var e = a(702)
          , t = a.n(e);
        function n(e) {
            return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            n(e)
        }
        function o() {
            o = function() {
                return e
            }
            ;
            var e = {}
              , t = Object.prototype
              , r = t.hasOwnProperty
              , i = Object.defineProperty || function(e, t, n) {
                e[t] = n.value
            }
              , a = "function" == typeof Symbol ? Symbol : {}
              , l = a.iterator || "@@iterator"
              , d = a.asyncIterator || "@@asyncIterator"
              , s = a.toStringTag || "@@toStringTag";
            function u(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                u({}, "")
            } catch (e) {
                u = function(e, t, n) {
                    return e[t] = n
                }
            }
            function c(e, t, n, o) {
                var r = t && t.prototype instanceof _ ? t : _
                  , a = Object.create(r.prototype)
                  , l = new T(o || []);
                return i(a, "_invoke", {
                    value: C(e, n, l)
                }),
                a
            }
            function p(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = c;
            var f = {};
            function _() {}
            function y() {}
            function m() {}
            var g = {};
            u(g, l, (function() {
                return this
            }
            ));
            var v = Object.getPrototypeOf
              , h = v && v(v(S([])));
            h && h !== t && r.call(h, l) && (g = h);
            var b = m.prototype = _.prototype = Object.create(g);
            function w(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    u(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function A(e, t) {
                function o(i, a, l, d) {
                    var s = p(e[i], e, a);
                    if ("throw" !== s.type) {
                        var u = s.arg
                          , c = u.value;
                        return c && "object" == n(c) && r.call(c, "__await") ? t.resolve(c.__await).then((function(e) {
                            o("next", e, l, d)
                        }
                        ), (function(e) {
                            o("throw", e, l, d)
                        }
                        )) : t.resolve(c).then((function(e) {
                            u.value = e,
                            l(u)
                        }
                        ), (function(e) {
                            return o("throw", e, l, d)
                        }
                        ))
                    }
                    d(s.arg)
                }
                var a;
                i(this, "_invoke", {
                    value: function(e, n) {
                        function r() {
                            return new t((function(t, r) {
                                o(e, n, t, r)
                            }
                            ))
                        }
                        return a = a ? a.then(r, r) : r()
                    }
                })
            }
            function C(e, t, n) {
                var o = "suspendedStart";
                return function(r, i) {
                    if ("executing" === o)
                        throw new Error("Generator is already running");
                    if ("completed" === o) {
                        if ("throw" === r)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (n.method = r,
                    n.arg = i; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var l = k(a, n);
                            if (l) {
                                if (l === f)
                                    continue;
                                return l
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === o)
                                throw o = "completed",
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = "executing";
                        var d = p(e, t, n);
                        if ("normal" === d.type) {
                            if (o = n.done ? "completed" : "suspendedYield",
                            d.arg === f)
                                continue;
                            return {
                                value: d.arg,
                                done: n.done
                            }
                        }
                        "throw" === d.type && (o = "completed",
                        n.method = "throw",
                        n.arg = d.arg)
                    }
                }
            }
            function k(e, t) {
                var n = t.method
                  , o = e.iterator[n];
                if (void 0 === o)
                    return t.delegate = null,
                    "throw" === n && e.iterator.return && (t.method = "return",
                    t.arg = void 0,
                    k(e, t),
                    "throw" === t.method) || "return" !== n && (t.method = "throw",
                    t.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    f;
                var r = p(o, e.iterator, t.arg);
                if ("throw" === r.type)
                    return t.method = "throw",
                    t.arg = r.arg,
                    t.delegate = null,
                    f;
                var i = r.arg;
                return i ? i.done ? (t[e.resultName] = i.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = void 0),
                t.delegate = null,
                f) : i : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                f)
            }
            function x(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function L(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(x, this),
                this.reset(!0)
            }
            function S(e) {
                if (e) {
                    var t = e[l];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var n = -1
                          , o = function t() {
                            for (; ++n < e.length; )
                                if (r.call(e, n))
                                    return t.value = e[n],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        };
                        return o.next = o
                    }
                }
                return {
                    next: R
                }
            }
            function R() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return y.prototype = m,
            i(b, "constructor", {
                value: m,
                configurable: !0
            }),
            i(m, "constructor", {
                value: y,
                configurable: !0
            }),
            y.displayName = u(m, s, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === y || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m,
                u(e, s, "GeneratorFunction")),
                e.prototype = Object.create(b),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            w(A.prototype),
            u(A.prototype, d, (function() {
                return this
            }
            )),
            e.AsyncIterator = A,
            e.async = function(t, n, o, r, i) {
                void 0 === i && (i = Promise);
                var a = new A(c(t, n, o, r),i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            w(b),
            u(b, s, "Generator"),
            u(b, l, (function() {
                return this
            }
            )),
            u(b, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(e) {
                var t = Object(e)
                  , n = [];
                for (var o in t)
                    n.push(o);
                return n.reverse(),
                function e() {
                    for (; n.length; ) {
                        var o = n.pop();
                        if (o in t)
                            return e.value = o,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            e.values = S,
            T.prototype = {
                constructor: T,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(L),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function n(n, o) {
                        return a.type = "throw",
                        a.arg = e,
                        t.next = n,
                        o && (t.method = "next",
                        t.arg = void 0),
                        !!o
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return n("end");
                        if (i.tryLoc <= this.prev) {
                            var l = r.call(i, "catchLoc")
                              , d = r.call(i, "finallyLoc");
                            if (l && d) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            } else if (l) {
                                if (this.prev < i.catchLoc)
                                    return n(i.catchLoc, !0)
                            } else {
                                if (!d)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return n(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    f) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    f
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            L(n),
                            f
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var o = n.completion;
                            if ("throw" === o.type) {
                                var r = o.arg;
                                L(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: S(e),
                        resultName: t,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    f
                }
            },
            e
        }
        function r(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var o, r, i, a, l = [], d = !0, s = !1;
                    try {
                        if (i = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            d = !1
                        } else
                            for (; !(d = (o = i.call(n)).done) && (l.push(o.value),
                            l.length !== t); d = !0)
                                ;
                    } catch (e) {
                        s = !0,
                        r = e
                    } finally {
                        try {
                            if (!d && null != n.return && (a = n.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (s)
                                throw r
                        }
                    }
                    return l
                }
            }(e, t) || c(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function(t) {
                    d(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function d(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" !== n(e) || null === e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var r = o.call(e, "string");
                        if ("object" !== n(r))
                            return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" === n(t) ? t : String(t)
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        function s(e) {
            return function(e) {
                if (Array.isArray(e))
                    return p(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || c(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function u(e, t, n, o, r, i, a) {
            try {
                var l = e[i](a)
                  , d = l.value
            } catch (e) {
                return void n(e)
            }
            l.done ? t(d) : Promise.resolve(d).then(o, r)
        }
        function c(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
            }
        }
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function f(e) {
            return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            f(e)
        }
        function _(e) {
            return function(e) {
                if (Array.isArray(e))
                    return g(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || m(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function y(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = m(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    i = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw i
                    }
                }
            }
        }
        function m(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return g(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
            }
        }
        function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function v() {
            v = function() {
                return e
            }
            ;
            var e = {}
              , t = Object.prototype
              , n = t.hasOwnProperty
              , o = Object.defineProperty || function(e, t, n) {
                e[t] = n.value
            }
              , r = "function" == typeof Symbol ? Symbol : {}
              , i = r.iterator || "@@iterator"
              , a = r.asyncIterator || "@@asyncIterator"
              , l = r.toStringTag || "@@toStringTag";
            function d(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                d({}, "")
            } catch (e) {
                d = function(e, t, n) {
                    return e[t] = n
                }
            }
            function s(e, t, n, r) {
                var i = t && t.prototype instanceof p ? t : p
                  , a = Object.create(i.prototype)
                  , l = new T(r || []);
                return o(a, "_invoke", {
                    value: C(e, n, l)
                }),
                a
            }
            function u(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = s;
            var c = {};
            function p() {}
            function f() {}
            function _() {}
            var y = {};
            d(y, i, (function() {
                return this
            }
            ));
            var m = Object.getPrototypeOf
              , g = m && m(m(S([])));
            g && g !== t && n.call(g, i) && (y = g);
            var h = _.prototype = p.prototype = Object.create(y);
            function b(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    d(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function w(e, t) {
                function r(o, i, a, l) {
                    var d = u(e[o], e, i);
                    if ("throw" !== d.type) {
                        var s = d.arg
                          , c = s.value;
                        return c && "object" == A(c) && n.call(c, "__await") ? t.resolve(c.__await).then((function(e) {
                            r("next", e, a, l)
                        }
                        ), (function(e) {
                            r("throw", e, a, l)
                        }
                        )) : t.resolve(c).then((function(e) {
                            s.value = e,
                            a(s)
                        }
                        ), (function(e) {
                            return r("throw", e, a, l)
                        }
                        ))
                    }
                    l(d.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(e, n) {
                        function o() {
                            return new t((function(t, o) {
                                r(e, n, t, o)
                            }
                            ))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function C(e, t, n) {
                var o = "suspendedStart";
                return function(r, i) {
                    if ("executing" === o)
                        throw new Error("Generator is already running");
                    if ("completed" === o) {
                        if ("throw" === r)
                            throw i;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    for (n.method = r,
                    n.arg = i; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var l = k(a, n);
                            if (l) {
                                if (l === c)
                                    continue;
                                return l
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === o)
                                throw o = "completed",
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        o = "executing";
                        var d = u(e, t, n);
                        if ("normal" === d.type) {
                            if (o = n.done ? "completed" : "suspendedYield",
                            d.arg === c)
                                continue;
                            return {
                                value: d.arg,
                                done: n.done
                            }
                        }
                        "throw" === d.type && (o = "completed",
                        n.method = "throw",
                        n.arg = d.arg)
                    }
                }
            }
            function k(e, t) {
                var n = t.method
                  , o = e.iterator[n];
                if (void 0 === o)
                    return t.delegate = null,
                    "throw" === n && e.iterator.return && (t.method = "return",
                    t.arg = void 0,
                    k(e, t),
                    "throw" === t.method) || "return" !== n && (t.method = "throw",
                    t.arg = new TypeError("The iterator does not provide a '" + n + "' method")),
                    c;
                var r = u(o, e.iterator, t.arg);
                if ("throw" === r.type)
                    return t.method = "throw",
                    t.arg = r.arg,
                    t.delegate = null,
                    c;
                var i = r.arg;
                return i ? i.done ? (t[e.resultName] = i.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = void 0),
                t.delegate = null,
                c) : i : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                c)
            }
            function x(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function L(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function T(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(x, this),
                this.reset(!0)
            }
            function S(e) {
                if (e) {
                    var t = e[i];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , r = function t() {
                            for (; ++o < e.length; )
                                if (n.call(e, o))
                                    return t.value = e[o],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        };
                        return r.next = r
                    }
                }
                return {
                    next: R
                }
            }
            function R() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = _,
            o(h, "constructor", {
                value: _,
                configurable: !0
            }),
            o(_, "constructor", {
                value: f,
                configurable: !0
            }),
            f.displayName = d(_, l, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, _) : (e.__proto__ = _,
                d(e, l, "GeneratorFunction")),
                e.prototype = Object.create(h),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            b(w.prototype),
            d(w.prototype, a, (function() {
                return this
            }
            )),
            e.AsyncIterator = w,
            e.async = function(t, n, o, r, i) {
                void 0 === i && (i = Promise);
                var a = new w(s(t, n, o, r),i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            b(h),
            d(h, l, "Generator"),
            d(h, i, (function() {
                return this
            }
            )),
            d(h, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(e) {
                var t = Object(e)
                  , n = [];
                for (var o in t)
                    n.push(o);
                return n.reverse(),
                function e() {
                    for (; n.length; ) {
                        var o = n.pop();
                        if (o in t)
                            return e.value = o,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            e.values = S,
            T.prototype = {
                constructor: T,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(L),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function o(n, o) {
                        return a.type = "throw",
                        a.arg = e,
                        t.next = n,
                        o && (t.method = "next",
                        t.arg = void 0),
                        !!o
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return o("end");
                        if (i.tryLoc <= this.prev) {
                            var l = n.call(i, "catchLoc")
                              , d = n.call(i, "finallyLoc");
                            if (l && d) {
                                if (this.prev < i.catchLoc)
                                    return o(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return o(i.finallyLoc)
                            } else if (l) {
                                if (this.prev < i.catchLoc)
                                    return o(i.catchLoc, !0)
                            } else {
                                if (!d)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return o(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var r = this.tryEntries[o];
                        if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    c) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    c
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            L(n),
                            c
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var o = n.completion;
                            if ("throw" === o.type) {
                                var r = o.arg;
                                L(n)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: S(e),
                        resultName: t,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    c
                }
            },
            e
        }
        function h(e, t, n, o, r, i, a) {
            try {
                var l = e[i](a)
                  , d = l.value
            } catch (e) {
                return void n(e)
            }
            l.done ? t(d) : Promise.resolve(d).then(o, r)
        }
        function b(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return w(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var o = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return o >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[o++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    i = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw i
                    }
                }
            }
        }
        function w(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++)
                o[n] = e[n];
            return o
        }
        function A(e) {
            return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            A(e)
        }
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var n = Object(e), o = 1; o < arguments.length; o++) {
                    var r = arguments[o];
                    if (null != r)
                        for (var i in r)
                            Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i])
                }
                return n
            },
            writable: !0,
            configurable: !0
        }),
        function() {
            if ("function" == typeof globalThis.CustomEvent)
                return !1;
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                n
            }
            e.prototype = globalThis.Event.prototype,
            globalThis.CustomEvent = e
        }(),
        void 0 !== globalThis.Element && void 0 !== globalThis.CharacterData && void 0 !== globalThis.DocumentType && [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function(e) {
            e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    null !== this.parentNode && this.parentNode.removeChild(this)
                }
            })
        }
        )),
        t().polyfill(),
        "undefined" == typeof window || window.dashjs || (window.dashjs = {
            skipAutoCreate: !0,
            isDefaultSubject: !0
        });
        var C = [function(e, t) {
            var n = {
                AdStarted: function() {
                    return e.onStartVpaidAd
                },
                AdStopped: function() {
                    return e.onStopVpaidAd
                },
                AdSkipped: function() {
                    return e.onSkipVpaidAd
                },
                AdLoaded: function() {
                    return e.onVpaidAdLoaded
                },
                AdLinearChange: function() {
                    return e.onVpaidAdLinearChange
                },
                AdSizeChange: function() {
                    return e.onVpaidAdSizeChange
                },
                AdExpandedChange: function() {
                    return e.onVpaidAdExpandedChange
                },
                AdSkippableStateChange: function() {
                    return e.onVpaidAdSkippableStateChange
                },
                AdDurationChange: function() {
                    return e.onVpaidAdDurationChange
                },
                AdRemainingTimeChange: function() {
                    return e.onVpaidAdRemainingTimeChange
                },
                AdVolumeChange: function() {
                    return e.onVpaidAdVolumeChange
                },
                AdImpression: function() {
                    return e.onVpaidAdImpression
                },
                AdClickThru: function() {
                    return e.onVpaidAdClickThru
                },
                AdInteraction: function() {
                    return e.onVpaidAdInteraction
                },
                AdVideoStart: function() {
                    return e.onVpaidAdVideoStart
                },
                AdVideoFirstQuartile: function() {
                    return e.onVpaidAdVideoFirstQuartile
                },
                AdVideoMidpoint: function() {
                    return e.onVpaidAdVideoMidpoint
                },
                AdVideoThirdQuartile: function() {
                    return e.onVpaidAdVideoThirdQuartile
                },
                AdVideoComplete: function() {
                    return e.onVpaidAdVideoComplete
                },
                AdUserAcceptInvitation: function() {
                    return e.onVpaidAdUserAcceptInvitation
                },
                AdUserMinimize: function() {
                    return e.onVpaidAdUserMinimize
                },
                AdUserClose: function() {
                    return e.onVpaidAdUserClose
                },
                AdPaused: function() {
                    return e.onVpaidAdPaused
                },
                AdPlaying: function() {
                    return e.onVpaidAdPlaying
                },
                AdError: function() {
                    return e.onVpaidAdError
                },
                AdLog: function() {
                    return e.onVpaidAdLog
                }
            };
            e.checkVPAIDInterface = function(e) {
                var t = e;
                return !!(t.handshakeVersion && "function" == typeof t.handshakeVersion && t.initAd && "function" == typeof t.initAd && t.startAd && "function" == typeof t.startAd && t.stopAd && "function" == typeof t.stopAd && t.skipAd && "function" == typeof t.skipAd && t.resizeAd && "function" == typeof t.resizeAd && t.pauseAd && "function" == typeof t.pauseAd && t.resumeAd && "function" == typeof t.resumeAd && t.expandAd && "function" == typeof t.expandAd && t.collapseAd && "function" == typeof t.collapseAd && t.subscribe && "function" == typeof t.subscribe && t.unsubscribe && "function" == typeof t.unsubscribe)
            }
            ,
            e.onVpaidAdPaused = function() {
                e.vpaidTimeoutTimerClear(),
                e.debugMessage("onAdPaused")
            }
            ,
            e.onVpaidAdPlaying = function() {
                e.vpaidTimeoutTimerClear(),
                e.debugMessage("onAdPlaying")
            }
            ,
            e.onVpaidAdError = function(t) {
                e.debugMessage("onAdError: " + t),
                e.vpaidTimeoutTimerClear(),
                e.onVpaidEnded()
            }
            ,
            e.onVpaidAdLog = function(t) {
                e.debugMessage("onAdLog: " + t)
            }
            ,
            e.onVpaidAdUserAcceptInvitation = function() {
                e.debugMessage("onAdUserAcceptInvitation")
            }
            ,
            e.onVpaidAdUserMinimize = function() {
                e.debugMessage("onAdUserMinimize")
            }
            ,
            e.onVpaidAdUserClose = function() {
                e.debugMessage("onAdUserClose")
            }
            ,
            e.onVpaidAdSkippableStateChange = function() {
                e.vpaidAdUnit && e.debugMessage("Ad Skippable State Changed to: " + e.vpaidAdUnit.getAdSkippableState())
            }
            ,
            e.onVpaidAdExpandedChange = function() {
                e.vpaidAdUnit && e.debugMessage("Ad Expanded Changed to: " + e.vpaidAdUnit.getAdExpanded())
            }
            ,
            e.getVpaidAdExpanded = function() {
                if (e.debugMessage("getAdExpanded"),
                e.vpaidAdUnit)
                    return e.vpaidAdUnit.getAdExpanded()
            }
            ,
            e.getVpaidAdSkippableState = function() {
                if (e.debugMessage("getAdSkippableState"),
                e.vpaidAdUnit)
                    return e.vpaidAdUnit.getAdSkippableState()
            }
            ,
            e.onVpaidAdSizeChange = function() {
                e.vpaidAdUnit && e.debugMessage("Ad size changed to: w=" + e.vpaidAdUnit.getAdWidth() + " h=" + e.vpaidAdUnit.getAdHeight())
            }
            ,
            e.onVpaidAdDurationChange = function() {
                e.vpaidAdUnit && e.debugMessage("Ad Duration Changed to: " + e.vpaidAdUnit.getAdDuration())
            }
            ,
            e.onVpaidAdRemainingTimeChange = function() {
                e.vpaidAdUnit && e.debugMessage("Ad Remaining Time Changed to: " + e.vpaidAdUnit.getAdRemainingTime())
            }
            ,
            e.getVpaidAdRemainingTime = function() {
                if (e.debugMessage("getAdRemainingTime"),
                e.vpaidAdUnit)
                    return e.vpaidAdUnit.getAdRemainingTime()
            }
            ,
            e.onVpaidAdImpression = function() {
                e.debugMessage("Ad Impression"),
                e.trackSingleEvent("impression")
            }
            ,
            e.onVpaidAdClickThru = function(t, n, o) {
                e.debugMessage("Clickthrough portion of the ad was clicked"),
                o && window.open(e.vastOptions.clickthroughUrl),
                e.pauseVpaidAd(),
                e.callUris(e.vastOptions.clicktracking)
            }
            ,
            e.onVpaidAdInteraction = function(t) {
                e.debugMessage("A non-clickthrough event has occured")
            }
            ,
            e.onVpaidAdVideoStart = function() {
                e.debugMessage("Video 0% completed"),
                e.trackSingleEvent("start")
            }
            ,
            e.onVpaidAdVideoFirstQuartile = function() {
                e.debugMessage("Video 25% completed"),
                e.trackSingleEvent("firstQuartile")
            }
            ,
            e.onVpaidAdVideoMidpoint = function() {
                e.debugMessage("Video 50% completed"),
                e.trackSingleEvent("midpoint")
            }
            ,
            e.onVpaidAdVideoThirdQuartile = function() {
                e.debugMessage("Video 75% completed"),
                e.trackSingleEvent("thirdQuartile")
            }
            ,
            e.onVpaidAdVideoComplete = function() {
                e.debugMessage("Video 100% completed"),
                e.trackSingleEvent("complete")
            }
            ,
            e.onVpaidAdLinearChange = function() {
                var t = e.domRef.wrapper.getElementsByClassName("fluid_vpaidNonLinear_ad")[0]
                  , n = e.domRef.wrapper.querySelector(".close_button")
                  , o = t.getAttribute("adlistid");
                if (e.debugMessage("Ad linear has changed: " + e.vpaidAdUnit.getAdLinear()),
                e.vpaidAdUnit.getAdLinear()) {
                    e.backupMainVideoContentTime(o.split("_")[0]),
                    e.isCurrentlyPlayingAd = !0,
                    n && n.remove(),
                    t.className = "fluid_vpaid_slot",
                    e.domRef.player.loop = !1,
                    e.domRef.player.removeAttribute("controls");
                    for (var r = e.domRef.player.parentNode.getElementsByClassName("fluid_controls_currentprogress"), i = 0; i < r.length; i++)
                        r[i].style.backgroundColor = e.displayOptions.layoutControls.adProgressColor;
                    e.toggleLoader(!1)
                }
            }
            ,
            e.getVpaidAdLinear = function() {
                return e.debugMessage("getAdLinear"),
                e.vpaidAdUnit.getAdLinear()
            }
            ,
            e.startVpaidAd = function() {
                e.debugMessage("startAd"),
                e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit.startAd()
            }
            ,
            e.onVpaidAdLoaded = function() {
                e.debugMessage("ad has been loaded"),
                e.vpaidTimeoutTimerClear(),
                e.startVpaidAd()
            }
            ,
            e.onStartVpaidAd = function() {
                e.debugMessage("Ad has started"),
                e.vpaidTimeoutTimerClear()
            }
            ,
            e.stopVpaidAd = function() {
                e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit.stopAd()
            }
            ,
            e.hardStopVpaidAd = function(t) {
                e.vpaidAdUnit && (e.vpaidAdUnit.stopAd(),
                e.vpaidAdUnit = null);
                for (var n = e.domRef.wrapper.getElementsByClassName("fluid_vpaid_iframe"), o = e.domRef.wrapper.getElementsByClassName("fluid_vpaid_slot"), r = e.domRef.wrapper.getElementsByClassName("fluid_vpaidNonLinear_ad"), i = 0; i < n.length; i++)
                    n[i].getAttribute("adListId") !== t.id && n[i].remove();
                for (var a = 0; a < o.length; a++)
                    o[a].getAttribute("adListId") !== t.id && o[a].remove();
                for (var l = 0; l < r.length; l++)
                    r[l].getAttribute("adListId") !== t.id && r[l].remove()
            }
            ,
            e.onStopVpaidAd = function() {
                e.debugMessage("Ad has stopped"),
                e.vpaidTimeoutTimerClear(),
                e.onVpaidEnded()
            }
            ,
            e.onSkipVpaidAd = function() {
                e.debugMessage("Ad was skipped"),
                e.vpaidTimeoutTimerClear(),
                e.onVpaidEnded()
            }
            ,
            e.skipVpaidAd = function() {
                e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit && (e.vpaidAdUnit.skipAd(),
                e.vpaidTimeoutTimerClear(),
                e.onVpaidEnded())
            }
            ,
            e.setVpaidAdVolume = function(t) {
                e.vpaidAdUnit && e.vpaidAdUnit.setAdVolume(t)
            }
            ,
            e.getVpaidAdVolume = function() {
                if (e.vpaidAdUnit)
                    return e.vpaidAdUnit.getAdVolume()
            }
            ,
            e.onVpaidAdVolumeChange = function() {
                e.vpaidAdUnit && e.debugMessage("Ad Volume has changed to - " + e.vpaidAdUnit.getAdVolume())
            }
            ,
            e.resizeVpaidAuto = function() {
                if (null !== e.vastOptions && e.vastOptions.vpaid && e.vastOptions.linear) {
                    var t = e.domRef.player.offsetWidth
                      , n = e.domRef.player.offsetHeight
                      , o = e.fullscreenMode ? "fullscreen" : "normal";
                    e.resizeVpaidAd(t, n, o)
                }
            }
            ,
            e.resizeVpaidAd = function(t, n, o) {
                e.vpaidAdUnit && e.vpaidAdUnit.resizeAd(t, n, o)
            }
            ,
            e.pauseVpaidAd = function() {
                e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit && e.vpaidAdUnit.pauseAd()
            }
            ,
            e.resumeVpaidAd = function() {
                e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit && e.vpaidAdUnit.resumeAd()
            }
            ,
            e.expandVpaidAd = function() {
                e.vpaidAdUnit && e.vpaidAdUnit.expandAd()
            }
            ,
            e.collapseVpaidAd = function() {
                e.vpaidAdUnit && e.vpaidAdUnit.collapseAd()
            }
            ,
            e.vpaidTimeoutTimerClear = function() {
                e.vpaidTimer && clearTimeout(e.vpaidTimer)
            }
            ,
            e.vpaidTimeoutTimerStart = function() {
                e.vpaidTimeoutTimerClear(),
                e.vpaidTimer = setTimeout((function() {
                    e.announceLocalError("901"),
                    e.onVpaidEnded()
                }
                ), e.displayOptions.vastOptions.vpaidTimeout)
            }
            ,
            e.vpaidCallbackListenersAttach = function() {
                for (var t in n)
                    e.vpaidAdUnit.subscribe(n[t](), t, e)
            }
            ,
            e.vpaidCallbackListenersDetach = function() {
                if (e.vpaidAdUnit)
                    for (var t in n)
                        e.vpaidAdUnit.unsubscribe(n[t](), t, e)
            }
            ,
            e.loadVpaid = function(t, n) {
                var o = document.createElement("iframe");
                o.id = "fp_" + t.id + "_fluid_vpaid_iframe",
                o.className = "fluid_vpaid_iframe",
                o.setAttribute("adListId", t.id),
                o.setAttribute("frameborder", "0"),
                e.domRef.player.parentNode.insertBefore(o, e.domRef.player.nextSibling);
                var r = document.createElement("script");
                r.src = n,
                o.contentWindow.document.head.append(r),
                e.tempVpaidCounter = 0,
                e.getVPAIDAdInterval = setInterval((function() {
                    if (o && o.contentWindow) {
                        var n = o.contentWindow.getVPAIDAd;
                        if (n && "function" == typeof n)
                            e.vpaidAdUnit && e.hardStopVpaidAd(t),
                            e.vpaidAdUnit = n(),
                            clearInterval(e.getVPAIDAdInterval),
                            e.checkVPAIDInterface(e.vpaidAdUnit) && (e.getVpaidAdLinear() ? (e.isCurrentlyPlayingAd = !0,
                            e.switchPlayerToVpaidMode(t)) : (e.debugMessage("non linear vpaid ad is loaded"),
                            e.loadVpaidNonlinearAssets(t)));
                        else {
                            if (e.tempVpaidCounter++,
                            e.tempVpaidCounter >= 20)
                                return clearInterval(e.getVPAIDAdInterval),
                                e.rollsById[t.rollListId].error = !0,
                                e.playMainVideoWhenVpaidFails(403),
                                !1;
                            e.debugMessage(e.tempVpaidCounter)
                        }
                    }
                }
                ), 100),
                e.destructors.push((function() {
                    return clearInterval(e.getVPAIDAdInterval)
                }
                ))
            }
            ,
            e.onVpaidEnded = function(t) {
                if (t && t.stopImmediatePropagation(),
                e.vpaidAdUnit) {
                    var n = e.domRef.wrapper.querySelector(".fluid_vpaid_slot");
                    e.vpaidCallbackListenersDetach(),
                    e.vpaidAdUnit = null,
                    clearInterval(e.getVPAIDAdInterval),
                    n && n.remove(),
                    e.checkForNextAd()
                }
            }
            ,
            e.playMainVideoWhenVpaidFails = function(t) {
                var n = e.domRef.wrapper.querySelector(".fluid_vpaid_slot");
                n && n.remove(),
                clearInterval(e.getVPAIDAdInterval),
                e.playMainVideoWhenVastFails(t)
            }
        }
        , function(e, t) {
            function n(e) {
                var t, n = function(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = c(e))) {
                            n && (e = n);
                            var o = 0
                              , r = function() {};
                            return {
                                s: r,
                                n: function() {
                                    return o >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[o++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, a = !0, l = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return a = e.done,
                            e
                        },
                        e: function(e) {
                            l = !0,
                            i = e
                        },
                        f: function() {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (l)
                                    throw i
                            }
                        }
                    }
                }(e);
                try {
                    for (n.s(); !(t = n.n()).done; ) {
                        var o = t.value;
                        if (void 0 === o.data.attributes.sequence)
                            return [o]
                    }
                } catch (e) {
                    n.e(e)
                } finally {
                    n.f()
                }
                return []
            }
            function i(e, t) {
                return a.apply(this, arguments)
            }
            function a() {
                var t;
                return t = o().mark((function t(a, d) {
                    var s, u, c, p, f, _, y, m, g, v, h, b, w, A, C, k, x, L, T, S = arguments;
                    return o().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return s = S.length > 3 && void 0 !== S[3] ? S[3] : 0,
                                u = !(S.length > 4 && void 0 !== S[4]) || S[4],
                                c = l(l({}, S.length > 2 && void 0 !== S[2] ? S[2] : {}), {}, {
                                    children: []
                                }),
                                t.next = 6,
                                e.sendRequestAsync(a, !0, e.displayOptions.vastOptions.vastTimeout);
                            case 6:
                                p = t.sent,
                                f = p.responseXML,
                                _ = Array.from(f.getElementsByTagName("Ad")),
                                y = 0,
                                m = _;
                            case 10:
                                if (!(y < m.length)) {
                                    t.next = 39;
                                    break
                                }
                                if (g = m[y],
                                v = e.getVastAdTagUriFromWrapper(g),
                                h = void 0 !== g.attributes.sequence,
                                b = {
                                    data: g
                                },
                                !(v && s <= d && u)) {
                                    t.next = 35;
                                    break
                                }
                                return w = g.getElementsByTagName("Wrapper"),
                                A = r(w, 1),
                                C = A[0],
                                k = C.attributes.followAdditionalWrappers && ["false", "0"].includes(C.attributes.followAdditionalWrappers.value),
                                x = C.attributes.allowMultipleAds && ["true", "1"].includes(C.attributes.allowMultipleAds.value),
                                L = C.attributes.fallbackOnNoAd && ["true", "1"].includes(C.attributes.fallbackOnNoAd.value),
                                t.prev = 20,
                                t.next = 23,
                                i(v, d, l(l({
                                    tagType: "wrapper"
                                }, b), {}, {
                                    fallbackOnNoAd: L
                                }), s + 1, !k);
                            case 23:
                                (T = t.sent).fallbackOnNoAd = L,
                                x && !h || (T.children = n(T.children)),
                                c.children.push(T),
                                t.next = 33;
                                break;
                            case 29:
                                t.prev = 29,
                                t.t0 = t.catch(20),
                                c.children.push({
                                    tagType: "wrapper",
                                    fallbackOnNoAd: L,
                                    httpError: !0
                                }),
                                e.debugMessage("Error when loading Wrapper, will trigger fallback if available", t.t0);
                            case 33:
                                t.next = 36;
                                break;
                            case 35:
                                v || c.children.push(l({
                                    tagType: "inLine"
                                }, b));
                            case 36:
                                y++,
                                t.next = 10;
                                break;
                            case 39:
                                return t.abrupt("return", c);
                            case 40:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[20, 29]])
                }
                )),
                a = function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(o, r) {
                        var i = t.apply(e, n);
                        function a(e) {
                            u(i, o, r, a, l, "next", e)
                        }
                        function l(e) {
                            u(i, o, r, a, l, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                ,
                a.apply(this, arguments)
            }
            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  , n = [].concat(s(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []), [e.data]);
                return Array.isArray(e.children) && e.children.length && e.children.forEach((function(e) {
                    return d(e, t, n)
                }
                )),
                "inLine" === e.tagType && t.push(l(l({}, e), {}, {
                    wrappers: n.filter(Boolean)
                })),
                t
            }
            e.setCTAFromVast = function(t, n) {
                if (e.displayOptions.vastOptions.adCTATextVast && t) {
                    var o = e.extractNodeDataByTagName(t, "MobileText")
                      , r = e.extractNodeDataByTagName(t, "PCText")
                      , i = e.extractNodeDataByTagName(t, "DisplayUrl") || e.extractNodeDataByTagName(t, "Link")
                      , a = e.extractNodeDataByTagName(t, "Tracking")
                      , l = window.matchMedia("(max-width: 768px)").matches;
                    (r || o) && a && (n.titleCTA = {
                        text: l ? o || r : r || o,
                        link: i || null,
                        tracking: a
                    })
                }
            }
            ,
            e.getClickThroughUrlFromLinear = function(t) {
                var n = t.getElementsByTagName("VideoClicks");
                if (n.length) {
                    var o = n[0].getElementsByTagName("ClickThrough");
                    if (o.length)
                        return e.extractNodeData(o[0])
                }
                return !1
            }
            ,
            e.getVastAdTagUriFromWrapper = function(t) {
                var n = t.getElementsByTagName("Wrapper");
                if (void 0 !== n && n.length) {
                    var o = n[0].getElementsByTagName("VASTAdTagURI");
                    if (o.length)
                        return e.extractNodeData(o[0])
                }
                return !1
            }
            ,
            e.hasInLine = function(e) {
                var t = e.getElementsByTagName("InLine");
                return void 0 !== t && t.length
            }
            ,
            e.hasVastAdTagUri = function(e) {
                var t = e.getElementsByTagName("VASTAdTagURI");
                return void 0 !== t && t.length
            }
            ,
            e.getClickThroughUrlFromNonLinear = function(t) {
                var n = "";
                if (t.getElementsByTagName("NonLinear").length) {
                    var o = t.getElementsByTagName("NonLinearClickThrough");
                    o.length && (n = e.extractNodeData(o[0]))
                }
                return n
            }
            ,
            e.getTrackingFromLinear = function(e) {
                var t = e.getElementsByTagName("TrackingEvents");
                return t.length ? t[0].getElementsByTagName("Tracking") : []
            }
            ,
            e.getDurationFromLinear = function(t) {
                var n = t.getElementsByTagName("Duration");
                if (n.length && void 0 !== n[0].childNodes[0]) {
                    var o = e.extractNodeData(n[0]);
                    return e.convertTimeStringToSeconds(o)
                }
                return !1
            }
            ,
            e.getDurationFromNonLinear = function(t) {
                var n = 0
                  , o = t.getElementsByTagName("NonLinear");
                return o.length && void 0 !== o[0].getAttribute("minSuggestedDuration") && (n = e.convertTimeStringToSeconds(o[0].getAttribute("minSuggestedDuration"))),
                n
            }
            ,
            e.getDimensionFromNonLinear = function(e) {
                var t = {
                    width: null,
                    height: null
                }
                  , n = e.getElementsByTagName("NonLinear");
                return n.length && (void 0 !== n[0].getAttribute("width") && (t.width = n[0].getAttribute("width")),
                void 0 !== n[0].getAttribute("height") && (t.height = n[0].getAttribute("height"))),
                t
            }
            ,
            e.getCreativeTypeFromStaticResources = function(e) {
                var t = ""
                  , n = e.getElementsByTagName("NonLinear");
                return n.length && void 0 !== n[0].childNodes[0] && (t = n[0].getElementsByTagName("StaticResource")[0].getAttribute("creativeType")),
                t.toLowerCase()
            }
            ,
            e.getMediaFilesFromLinear = function(e) {
                var t = e.getElementsByTagName("MediaFiles");
                return t.length ? t[0].getElementsByTagName("MediaFile") : []
            }
            ,
            e.getStaticResourcesFromNonLinear = function(e) {
                var t = []
                  , n = e.getElementsByTagName("NonLinear");
                return n.length && (t = n[0].getElementsByTagName("StaticResource")),
                t
            }
            ,
            e.extractNodeDataByTagName = function(t, n) {
                var o = t.getElementsByTagName(n);
                return o && o.length ? e.extractNodeData(o[0]) : null
            }
            ,
            e.extractNodeData = function(e) {
                for (var t = "", n = 0; n < e.childNodes.length; n++) {
                    var o = e.childNodes[n];
                    8 === o.nodeType || 3 === o.nodeType && /^\s*$/.test(o.nodeValue) || (t += o.nodeValue)
                }
                return t.replace(/(^\s+|\s+$)/g, "")
            }
            ,
            e.getAdParametersFromLinear = function(t) {
                var n = t.getElementsByTagName("AdParameters")
                  , o = null;
                return n.length && (o = e.extractNodeData(n[0])),
                o
            }
            ,
            e.getMediaFileListFromLinear = function(t) {
                var n = []
                  , o = e.getMediaFilesFromLinear(t);
                if (!o.length)
                    return n;
                for (var r = 0; r < o.length; r++) {
                    var i = o[r].getAttribute("mediaType");
                    i || (i = "2D"),
                    n.push({
                        src: e.extractNodeData(o[r]),
                        type: o[r].getAttribute("type"),
                        apiFramework: o[r].getAttribute("apiFramework"),
                        codec: o[r].getAttribute("codec"),
                        id: o[r].getAttribute("codec"),
                        fileSize: o[r].getAttribute("fileSize"),
                        delivery: o[r].getAttribute("delivery"),
                        width: o[r].getAttribute("width"),
                        height: o[r].getAttribute("height"),
                        mediaType: i.toLowerCase()
                    })
                }
                return n
            }
            ,
            e.getIconClickThroughFromLinear = function(t) {
                var n = t.getElementsByTagName("IconClickThrough");
                return n.length ? e.extractNodeData(n[0]) : ""
            }
            ,
            e.getStaticResourceFromNonLinear = function(t) {
                for (var n, o = e.getStaticResourcesFromNonLinear(t), r = 0; r < o.length; r++)
                    if (o[r].getAttribute("type") || (n = e.extractNodeData(o[r])),
                    o[r].getAttribute("type") === e.displayOptions.staticResource)
                        return e.extractNodeData(o[r]);
                return n
            }
            ,
            e.registerTrackingEvents = function(t, n) {
                for (var o = e.getTrackingFromLinear(t), r = "", i = 0, a = 0; a < o.length; a++)
                    switch (r = o[a].getAttribute("event")) {
                    case "start":
                    case "firstQuartile":
                    case "midpoint":
                    case "thirdQuartile":
                    case "complete":
                        void 0 === n.tracking[r] && (n.tracking[r] = []),
                        void 0 === n.stopTracking[r] && (n.stopTracking[r] = []),
                        n.tracking[r].push(o[a].textContent.trim()),
                        n.stopTracking[r] = !1;
                        break;
                    case "progress":
                        void 0 === n.tracking[r] && (n.tracking[r] = []),
                        i = e.convertTimeStringToSeconds(o[a].getAttribute("offset")),
                        void 0 === n.tracking[r][i] && (n.tracking[r][i] = {
                            elements: [],
                            stopTracking: !1
                        }),
                        n.tracking[r][i].elements.push(o[a].textContent.trim())
                    }
            }
            ,
            e.registerClickTracking = function(e, t) {
                if (e && e.length)
                    for (var n = 0; n < e.length; n++)
                        "" !== e[n] && t.clicktracking.push(e[n])
            }
            ,
            e.registerImpressionEvents = function(t, n) {
                if (t.length)
                    for (var o = 0; o < t.length; o++) {
                        var r = e.extractNodeData(t[o]);
                        n.impression.push(r)
                    }
            }
            ,
            e.registerErrorEvents = function(e, t) {
                null != e && 1 === e.length && 1 === e[0].childNodes.length && (t.errorUrl = e[0].childNodes[0].nodeValue)
            }
            ,
            e.announceError = function(t) {
                if (void 0 !== e.vastOptions.errorUrl && e.vastOptions.errorUrl) {
                    var n = void 0 !== t ? parseInt(t) : 900
                      , o = e.vastOptions.errorUrl.replace("[ERRORCODE]", n);
                    e.callUris([o])
                }
            }
            ,
            e.getClickTrackingEvents = function(t) {
                var n = []
                  , o = t.getElementsByTagName("VideoClicks");
                if (o.length) {
                    var r = o[0].getElementsByTagName("ClickTracking");
                    if (r.length) {
                        for (var i = 0; i < r.length; i++) {
                            var a = e.extractNodeData(r[i]);
                            n.push(a)
                        }
                        return n
                    }
                }
            }
            ,
            e.getNonLinearClickTrackingEvents = function(t) {
                var n = [];
                if (t.getElementsByTagName("NonLinear").length) {
                    var o = t.getElementsByTagName("NonLinearClickTracking");
                    if (o.length) {
                        for (var r = 0; r < o.length; r++) {
                            var i = e.extractNodeData(o[r]);
                            n.push(i)
                        }
                        return n
                    }
                }
            }
            ,
            e.callUris = function(e) {
                for (var t = 0; t < e.length; t++)
                    (new Image).src = e[t]
            }
            ,
            e.recalculateAdDimensions = function() {
                var t = e.domRef.player
                  , n = e.domRef.wrapper.querySelector(".vast_clickthrough_layer");
                n && (n.style.width = t.offsetWidth + "px",
                n.style.height = t.offsetHeight + "px");
                var o = e.checkFullscreenSupport()
                  , r = e.domRef.wrapper.querySelector(".fluid_control_fullscreen")
                  , i = e.domRef.wrapper.querySelector(".context_option_fullscreen");
                if (o)
                    null === document[o.isFullscreen] ? e.fullscreenOff(r, i) : e.fullscreenOn(r, i);
                else {
                    var a = e.domRef.wrapper;
                    -1 !== a.className.search(/\bpseudo_fullscreen\b/g) ? (a.className += " pseudo_fullscreen",
                    e.fullscreenOn(r, i)) : (a.className = a.className.replace(/\bpseudo_fullscreen\b/g, ""),
                    e.fullscreenOff(r, i))
                }
            }
            ,
            e.prepareVast = function(t) {
                for (var n = e.findRoll(t), o = 0; o < n.length; o++) {
                    var r = n[o];
                    !0 !== e.rollsById[r].vastLoaded && !0 !== e.rollsById[r].error && e.processVastWithRetries(e.rollsById[r])
                }
            }
            ,
            e.playMainVideoWhenVastFails = function(t) {
                e.debugMessage("playMainVideoWhenVastFails called"),
                e.domRef.player.removeEventListener("loadedmetadata", e.switchPlayerToVastMode),
                e.domRef.player.pause(),
                e.toggleLoader(!1),
                e.displayOptions.vastOptions.vastAdvanced.noVastVideoCallback(),
                e.vastOptions && void 0 !== e.vastOptions.errorUrl ? e.announceError(t) : e.announceLocalError(t),
                e.switchToMainVideo()
            }
            ,
            e.switchPlayerToVastMode = function() {}
            ,
            e.processVastWithRetries = function(t) {
                var n = t.vastTag
                  , o = t.id;
                e.domRef.player.addEventListener("adId_" + o, e[t.roll]),
                e.processUrl(n, (function r(i, a) {
                    if (i && Array.isArray(a) && !e.displayOptions.vastOptions.allowVPAID && a.some((function(e) {
                        return e.vpaid
                    }
                    )) && (a = a.filter((function(e) {
                        return !0 !== e.vpaid
                    }
                    )),
                    e.announceLocalError("103", "VPAID not allowed, so skipping this VAST tag.")),
                    i && Array.isArray(a) && a.length) {
                        e.adPool[o] = [],
                        a.forEach((function(t, n) {
                            if (t.id = o + "_AD" + n,
                            t.rollListId = o,
                            "linear" === t.adType) {
                                void 0 !== t.iconClick && null !== t.iconClick && t.iconClick.length && (t.landingPage = t.iconClick);
                                var r = e.getSupportedMediaFileObject(t.mediaFileList);
                                r && (t.mediaType = r.mediaType)
                            }
                            t.adType = t.adType ? t.adType : "unknown",
                            e.adPool[o].push(Object.assign({}, t)),
                            e.hasTitle() && (e.domRef.wrapper.querySelector(".fp_title").style.display = "none"),
                            e.rollsById[o].ads.push(t)
                        }
                        )),
                        e.rollsById[o].vastLoaded = !0;
                        var l = document.createEvent("Event");
                        l.initEvent("adId_" + o, !1, !0),
                        e.domRef.player.dispatchEvent(l),
                        e.displayOptions.vastOptions.vastAdvanced.vastLoadedCallback()
                    } else
                        e.announceLocalError("101"),
                        t.hasOwnProperty("fallbackVastTags") && t.fallbackVastTags.length > 0 ? (n = t.fallbackVastTags.shift(),
                        e.processUrl(n, r, o)) : ("preRoll" === t.roll && e.preRollFail(t),
                        e.rollsById[o].error = !0)
                }
                ), o)
            }
            ,
            e.processUrl = function(t, n, o) {
                e.resolveVastTag(t, 0, {
                    tracking: [],
                    stopTracking: [],
                    impression: [],
                    clicktracking: [],
                    vastLoaded: !1
                }, n, o)
            }
            ,
            e.resolveVastTag = function(t, n, o, a, u) {
                if (!t || "" === t)
                    return a(!1);
                i(t, e.displayOptions.vastOptions.maxAllowedVastTagRedirects).then((function(t) {
                    try {
                        var n = t.children.some((function(e) {
                            return "wrapper" === e.tagType && e.fallbackOnNoAd && (!/"tagType":"ad"/.test(JSON.stringify(e)) || e.httpError)
                        }
                        ));
                        n && e.debugMessage("Error on VAST Wrapper, triggering fallbackOnNoAd. Ad tree:", t),
                        t = d(t).map((function(t) {
                            return function(t) {
                                var n = t.data;
                                if (n) {
                                    var o = Array.from(n.getElementsByTagName("Creative")).splice(0, 1);
                                    return o.length && o.forEach((function(o) {
                                        if ("linear" === t.adType) {
                                            var r = o.getElementsByTagName("Linear")[0];
                                            !e.hasVastAdTagUri(n) && e.hasInLine(n) && (t.adFinished = !1,
                                            t.vpaid = !1,
                                            t.skipoffset = e.convertTimeStringToSeconds(r.getAttribute("skipoffset")),
                                            t.clickthroughUrl = e.getClickThroughUrlFromLinear(r),
                                            t.duration = e.getDurationFromLinear(r),
                                            t.mediaFileList = e.getMediaFileListFromLinear(r),
                                            t.adParameters = e.getAdParametersFromLinear(r),
                                            t.iconClick = t.iconClick || e.getIconClickThroughFromLinear(r),
                                            t.adParameters && (t.vpaid = !0))
                                        }
                                        if ("nonLinear" === t.adType) {
                                            var i = o.getElementsByTagName("NonLinearAds")[0];
                                            !e.hasVastAdTagUri(n) && e.hasInLine(n) && (t.vpaid = !1,
                                            t.clickthroughUrl = e.getClickThroughUrlFromNonLinear(i),
                                            t.duration = e.getDurationFromNonLinear(i),
                                            t.dimension = e.getDimensionFromNonLinear(i),
                                            t.staticResource = e.getStaticResourceFromNonLinear(i),
                                            t.creativeType = e.getCreativeTypeFromStaticResources(i),
                                            t.adParameters = e.getAdParametersFromLinear(i),
                                            t.adParameters && (t.vpaid = !0))
                                        }
                                    }
                                    )),
                                    t
                                }
                            }(function(t, n) {
                                var o = l(l({}, t), JSON.parse(JSON.stringify(n)));
                                return o.adType = (o.data.getElementsByTagName("Linear").length ? "linear" : o.data.getElementsByTagName("NonLinearAds").length && "nonLinear") || "unknown",
                                [].concat(s(o.wrappers || []), [o.data]).filter(Boolean).forEach((function(t) {
                                    var n = t.getElementsByTagName("Impression");
                                    null !== n && e.registerImpressionEvents(n, o);
                                    var i = t.getElementsByTagName("Error");
                                    null !== i && e.registerErrorEvents(i, o);
                                    var a = r(t.getElementsByTagName("TitleCTA"), 1)[0];
                                    a && e.setCTAFromVast(a, o),
                                    e.registerTrackingEvents(t, o);
                                    var l = "linear" === o.adType ? e.getClickTrackingEvents(t) : e.getNonLinearClickTrackingEvents(t);
                                    e.registerClickTracking(l, o)
                                }
                                )),
                                o.sequence = o.data.attributes.sequence ? Number(o.data.attributes.sequence.value) : null,
                                o.played = !1,
                                o
                            }(t, o))
                        }
                        ));
                        var i = (c = t,
                        p = e.rollsById[u].maxTotalDuration || Number.MAX_SAFE_INTEGER,
                        f = e.rollsById[u].maxTotalQuantity || Number.MAX_SAFE_INTEGER,
                        _ = n,
                        y = c.filter((function(e) {
                            return Boolean(e.sequence)
                        }
                        )).sort((function(e, t) {
                            return e.sequence - t.sequence
                        }
                        )).reduce((function(e, t) {
                            return e.adPod.length < f && e.totalDuration + t.duration <= p && e.adPod.push(t),
                            e
                        }
                        ), {
                            adPod: [],
                            totalDuration: 0
                        }).adPod,
                        m = c.filter((function(e) {
                            return !Boolean(e.sequence) && e.duration < p
                        }
                        )),
                        g = y.map((function(e) {
                            return e.adType
                        }
                        )).slice(0, -1).every((function(e) {
                            return "linear" === e
                        }
                        )),
                        y.length > 0 && !_ && g ? (e.debugMessage("Playing valid adPod", y),
                        y) : (e.debugMessage("Trying to play single ad, adBuffet:", m),
                        m.length > 0 ? [m[0]] : []));
                        i && i.length ? a(!0, i) : a(!1)
                    } catch (e) {
                        a(!1)
                    }
                    var c, p, f, _, y, m, g
                }
                )).catch((function() {
                    return a(!1)
                }
                ))
            }
            ,
            e.setVastList = function() {
                var t, n, o = {}, r = {
                    preRoll: [],
                    postRoll: [],
                    midRoll: [],
                    onPauseRoll: []
                }, i = {
                    id: null,
                    roll: null,
                    vastLoaded: !1,
                    error: !1,
                    adText: null,
                    adTextPosition: null
                }, a = 0, l = function(e) {
                    var t = !1;
                    return "midRoll" === e.roll && void 0 === e.timer && (t = !0),
                    t
                };
                if (e.displayOptions.vastOptions.hasOwnProperty("adList"))
                    for (var d in e.displayOptions.vastOptions.adList) {
                        var s = e.displayOptions.vastOptions.adList[d];
                        if (n = void 0,
                        n = !1,
                        (t = s).vastTag || (e.announceLocalError(102, '"vastTag" property is missing from adList.'),
                        n = !0),
                        t.roll || (e.announceLocalError(102, '"roll" is missing from adList.'),
                        n = !0),
                        -1 === e.availableRolls.indexOf(t.roll) && (e.announceLocalError(102, "Only " + e.availableRolls.join(",") + " rolls are supported."),
                        n = !0),
                        t.size && -1 === e.supportedNonLinearAd.indexOf(t.size) && (e.announceLocalError(102, "Only " + e.supportedNonLinearAd.join(",") + " size are supported."),
                        n = !0),
                        n)
                            e.announceLocalError(102, "Wrong adList parameters.");
                        else {
                            var u = "ID" + a;
                            o[u] = Object.assign({}, i),
                            o[u] = Object.assign(o[u], e.displayOptions.vastOptions.adList[d]),
                            "midRoll" === s.roll && (o[u].error = l("midRoll")),
                            o[u].id = u,
                            o[u].ads = [],
                            a++
                        }
                    }
                Object.keys(o).map((function(e) {
                    switch (o[e].roll.toLowerCase()) {
                    case "preRoll".toLowerCase():
                        r.preRoll.push(o[e]);
                        break;
                    case "midRoll".toLowerCase():
                        r.midRoll.push(o[e]);
                        break;
                    case "postRoll".toLowerCase():
                        r.postRoll.push(o[e]);
                        break;
                    case "onPauseRoll".toLowerCase():
                        r.onPauseRoll.push(o[e]);
                        break;
                    default:
                        console.error("".concat(o[e].roll.toLowerCase(), " is not a recognized roll"))
                    }
                }
                )),
                e.adGroupedByRolls = r,
                e.rollsById = o
            }
            ,
            e.onVastAdEnded = function(t) {
                t && t.stopImmediatePropagation(),
                e.vastOptions.adFinished = !0,
                e.deleteVastAdElements(),
                e.checkForNextAd()
            }
            ,
            e.vastLogoBehaviour = function(t) {
                if (!e.displayOptions.layoutControls.logo.showOverAds) {
                    var n = e.domRef.wrapper.querySelector(".logo_holder");
                    if (!n)
                        return;
                    n.style.display = t ? "none" : "inline"
                }
            }
            ,
            e.deleteVastAdElements = function() {
                e.removeClickthrough(),
                e.removeSkipButton(),
                e.removeAdCountdown(),
                e.removeAdPlayingText(),
                e.removeCTAButton(),
                e.vastLogoBehaviour(!1)
            }
        }
        , function(e, t) {
            e.createCardboardJoystickButton = function(t) {
                var n = e.domRef.wrapper.querySelector(".fluid_vr_joystick_panel")
                  , o = document.createElement("div");
                return o.className = "fluid_vr_button fluid_vr_joystick_" + t,
                n.appendChild(o),
                o
            }
            ,
            e.cardboardRotateLeftRight = function(t) {
                var n = e.vrROTATION_POSITION
                  , o = -e.vrROTATION_POSITION
                  , r = {
                    val: t < 1 ? n : o
                };
                new TWEEN.Tween(r).to({
                    val: 0
                }, e.vrROTATION_SPEED).easing(TWEEN.Easing.Quadratic.InOut).onUpdate((function() {
                    e.vrViewer.OrbitControls.rotateLeft(r.val)
                }
                )).start()
            }
            ,
            e.cardboardRotateUpDown = function(t) {
                var n = e.vrROTATION_POSITION
                  , o = -e.vrROTATION_POSITION
                  , r = {
                    val: t < 1 ? n : o
                };
                new TWEEN.Tween(r).to({
                    val: 0
                }, e.vrROTATION_SPEED).easing(TWEEN.Easing.Quadratic.InOut).onUpdate((function() {
                    e.vrViewer.OrbitControls.rotateUp(r.val)
                }
                )).start()
            }
            ,
            e.createCardboardJoystick = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_vr_container")
                  , n = document.createElement("div");
                n.className = "fluid_vr_joystick_panel",
                t.appendChild(n);
                var o = e.createCardboardJoystickButton("up")
                  , r = e.createCardboardJoystickButton("left")
                  , i = e.createCardboardJoystickButton("right")
                  , a = e.createCardboardJoystickButton("down")
                  , l = e.createCardboardJoystickButton("zoomdefault")
                  , d = e.createCardboardJoystickButton("zoomin")
                  , s = e.createCardboardJoystickButton("zoomout");
                o.addEventListener("click", (function() {
                    e.cardboardRotateUpDown(1)
                }
                )),
                a.addEventListener("click", (function() {
                    e.cardboardRotateUpDown(0)
                }
                )),
                i.addEventListener("click", (function() {
                    e.cardboardRotateLeftRight(0)
                }
                )),
                r.addEventListener("click", (function() {
                    e.cardboardRotateLeftRight(1)
                }
                )),
                l.addEventListener("click", (function() {
                    e.vrViewer.camera.fov = 60,
                    e.vrViewer.camera.updateProjectionMatrix()
                }
                )),
                s.addEventListener("click", (function() {
                    e.vrViewer.camera.fov *= 1.1,
                    e.vrViewer.camera.updateProjectionMatrix()
                }
                )),
                d.addEventListener("click", (function() {
                    e.vrViewer.camera.fov *= .9,
                    e.vrViewer.camera.updateProjectionMatrix()
                }
                ))
            }
            ,
            e.cardBoardResize = function() {
                e.domRef.player.addEventListener("theatreModeOn", (function() {
                    e.vrViewer.onWindowResize()
                }
                )),
                e.domRef.player.addEventListener("theatreModeOff", (function() {
                    e.vrViewer.onWindowResize()
                }
                ))
            }
            ,
            e.cardBoardSwitchToNormal = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_vr_joystick_panel")
                  , n = e.domRef.wrapper.querySelector(".fluid_controls_container")
                  , o = e.domRef.player;
                e.vrViewer.enableEffect(PANOLENS.MODES.NORMAL),
                e.vrViewer.onWindowResize(),
                e.vrMode = !1;
                var r = o.parentNode.getElementsByClassName("fluid_vr2_controls_container")[0];
                o.parentNode.removeChild(r),
                e.displayOptions.layoutControls.showCardBoardJoystick && t && (t.style.display = "block"),
                n.classList.remove("fluid_vr_controls_container"),
                e.domRef.wrapper.getElementById(".fluid_control_volume_container").style.display = "block";
                var i = e.domRef.wrapper.querySelector(".ad_countdown")
                  , a = e.domRef.wrapper.querySelector(".fluid_ad_cta")
                  , l = e.domRef.wrapper.querySelector(".fluid_ad_playing")
                  , d = e.domRef.wrapper.querySelector(".skip_button");
                i && (i.style.display = "block"),
                a && (a.style.display = "block"),
                l && (l.style.display = "block"),
                d && (d.style.display = "block")
            }
            ,
            e.cardBoardHideDefaultControls = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_vr_joystick_panel")
                  , n = e.domRef.wrapper.querySelector(".fluid_initial_play")
                  , o = e.domRef.wrapper.querySelector(".fluid_control_volume_container");
                e.displayOptions.layoutControls.showCardBoardJoystick && t && (t.style.display = "none"),
                n && (e.domRef.wrapper.querySelector(".fluid_initial_play").style.display = "none",
                e.domRef.wrapper.querySelector(".fluid_initial_play_button_container").style.opacity = "1"),
                o.style.display = "none"
            }
            ,
            e.cardBoardCreateVRControls = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_controls_container").cloneNode(!0);
                t.removeAttribute("id"),
                t.querySelectorAll("*").forEach((function(e) {
                    e.removeAttribute("id")
                }
                )),
                t.classList.add("fluid_vr2_controls_container"),
                e.domRef.player.parentNode.insertBefore(t, e.domRef.player.nextSibling),
                e.copyEvents(t)
            }
            ,
            e.cardBoardSwitchToVR = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_controls_container");
                e.vrViewer.enableEffect(PANOLENS.MODES.CARDBOARD),
                e.vrViewer.onWindowResize(),
                e.vrViewer.disableReticleControl(),
                e.vrMode = !0,
                t.classList.add("fluid_vr_controls_container"),
                e.cardBoardHideDefaultControls(),
                e.cardBoardCreateVRControls();
                var n = e.domRef.wrapper.querySelector(".ad_countdown")
                  , o = e.domRef.wrapper.querySelector(".fluid_ad_cta")
                  , r = e.domRef.wrapper.querySelector(".fluid_ad_playing")
                  , i = e.domRef.wrapper.querySelector(".skip_button");
                n && (n.style.display = "none"),
                o && (o.style.display = "none"),
                r && (r.style.display = "none"),
                i && (i.style.display = "none")
            }
            ,
            e.cardBoardMoveTimeInfo = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_control_duration")
                  , n = e.domRef.wrapper.querySelector(".fluid_controls_container");
                t.classList.add("cardboard_time"),
                n.appendChild(t),
                e.controlDurationUpdate = function() {
                    var t = e.formatTime(e.domRef.player.currentTime)
                      , n = e.formatTime(e.currentVideoDuration)
                      , o = e.domRef.player.parentNode.getElementsByClassName("fluid_control_duration")
                      , r = "";
                    if (e.isCurrentlyPlayingAd) {
                        r = "<span class='ad_timer_prefix'>AD : </span>" + t + " / " + n;
                        for (var i = 0; i < o.length; i++)
                            o[i].classList.add("ad_timer_prefix")
                    } else {
                        r = t + " / " + n;
                        for (var a = 0; a < o.length; a++)
                            o[a].classList.remove("ad_timer_prefix")
                    }
                    for (var l = 0; l < o.length; l++)
                        o[l].innerHTML = r
                }
            }
            ,
            e.cardBoardAlterDefaultControls = function() {
                e.cardBoardMoveTimeInfo()
            }
            ,
            e.createCardboardView = function() {
                var t = document.createElement("div");
                t.className = "fluid_vr_container",
                e.domRef.player.parentNode.insertBefore(t, e.domRef.player.nextSibling),
                PANOLENS.VideoPanorama.prototype.pauseVideo = function() {}
                ,
                PANOLENS.VideoPanorama.prototype.playVideo = function() {}
                ,
                e.vrPanorama = new PANOLENS.VideoPanorama("",{
                    videoElement: e.domRef.player,
                    autoplay: e.displayOptions.layoutControls.autoPlay,
                    loop: !!e.displayOptions.layoutControls.loop
                }),
                e.vrViewer = new PANOLENS.Viewer({
                    container: t,
                    controlBar: !0,
                    controlButtons: [],
                    enableReticle: !1
                }),
                e.vrViewer.add(e.vrPanorama),
                e.vrViewer.enableEffect(PANOLENS.MODES.NORMAL),
                e.vrViewer.onWindowResize(),
                "Android" !== e.getMobileOs().userOs && "iOS" !== e.getMobileOs().userOs || e.vrViewer.enableControl(1),
                e.cardBoardAlterDefaultControls(),
                e.cardBoardResize(),
                e.vrViewer.initialCameraPosition = JSON.parse(JSON.stringify(e.vrViewer.camera.position)),
                e.displayOptions.layoutControls.showCardBoardJoystick && ("Android" !== e.getMobileOs().userOs && "iOS" !== e.getMobileOs().userOs && e.createCardboardJoystick(),
                e.vrViewer.OrbitControls.noZoom = !0),
                e.trackEvent(e.domRef.player.parentNode, "click", ".fluid_control_cardboard", (function() {
                    e.vrMode ? e.cardBoardSwitchToNormal() : e.cardBoardSwitchToVR()
                }
                ))
            }
            ,
            e.createCardboard = function() {
                e.displayOptions.layoutControls.showCardBoardView && (e.domRef.wrapper.querySelector(".fluid_control_cardboard").style.display = "inline-block",
                window.PANOLENS ? e.createCardboardView() : a.e(366).then(a.bind(a, 372)).then((function(t) {
                    window.PANOLENS = t,
                    e.createCardboardView()
                }
                )))
            }
        }
        , function(e, t) {
            e.subtitleFetchParse = function(t) {
                e.sendRequest(t.url, !0, e.displayOptions.vastOptions.vastTimeout, (function() {
                    var t = this;
                    if ((4 !== t.readyState || 200 === t.status) && 4 === t.readyState && 200 === t.status) {
                        var n = t.responseText
                          , o = new WebVTT.Parser(window,WebVTT.StringDecoder())
                          , r = []
                          , i = [];
                        o.oncue = function(e) {
                            r.push(e)
                        }
                        ,
                        o.onregion = function(e) {
                            i.push(e)
                        }
                        ,
                        o.parse(n),
                        o.flush(),
                        e.subtitlesData = r
                    }
                }
                ))
            }
            ,
            e.createSubtitlesSwitch = function() {
                var t = "OFF";
                if (e.subtitlesData = [],
                e.displayOptions.layoutControls.subtitlesEnabled) {
                    var n = [];
                    n.push({
                        label: t,
                        url: "na",
                        lang: t
                    });
                    var o = e.domRef.player.querySelectorAll("track");
                    [].forEach.call(o, (function(e) {
                        "metadata" === e.kind && e.src && n.push({
                            label: e.label,
                            url: e.src,
                            lang: e.srclang,
                            default: e.default
                        })
                    }
                    )),
                    e.subtitlesTracks = n;
                    var r = e.domRef.wrapper.querySelector(".fluid_control_subtitles");
                    r.style.display = "inline-block";
                    var i = !1
                      , a = document.createElement("div");
                    a.className = "fluid_subtitles_list",
                    a.style.display = "none";
                    var l = !1
                      , d = !!e.subtitlesTracks.find((function(e) {
                        return e.default
                    }
                    ));
                    e.subtitlesTracks.forEach((function(n) {
                        var o = ""
                          , r = e.displayOptions.layoutControls.subtitlesOnByDefault;
                        (!l && (r && n.default || !d && n.label !== t || 1 === e.subtitlesTracks.length) || !r && n.label === t) && (o = "subtitle_selected",
                        e.subtitleFetchParse(n),
                        l = !0);
                        var s = document.createElement("div");
                        s.className = "fluid_subtitle_list_item",
                        s.innerHTML = '<span class="subtitle_button_icon ' + o + '"></span>' + n.label,
                        s.addEventListener("click", (function(n) {
                            n.stopPropagation();
                            for (var o = this, r = e.domRef.wrapper.getElementsByClassName("subtitle_button_icon"), i = 0; i < r.length; i++)
                                r[i].className = r[i].className.replace("subtitle_selected", "");
                            o.firstChild.className += " subtitle_selected",
                            e.subtitlesTracks.forEach((function(n) {
                                n.label === o.innerText.replace(/(\r\n\t|\n|\r\t)/gm, "") && (n.label === t ? e.subtitlesData = [] : e.subtitleFetchParse(n))
                            }
                            )),
                            e.openCloseSubtitlesSwitch()
                        }
                        )),
                        a.appendChild(s),
                        i = !0
                    }
                    )),
                    i ? (r.appendChild(a),
                    r.addEventListener("click", (function() {
                        e.openCloseSubtitlesSwitch()
                    }
                    ))) : e.domRef.wrapper.querySelector(".fluid_control_subtitles").style.display = "none",
                    e.domRef.player.addEventListener("timeupdate", (function() {
                        e.renderSubtitles()
                    }
                    ))
                } else
                    e.domRef.wrapper.querySelector(".fluid_control_subtitles").style.display = "none"
            }
            ,
            e.renderSubtitles = function() {
                var t = e.domRef.player
                  , n = Math.floor(t.currentTime)
                  , o = !1
                  , r = e.domRef.wrapper.querySelector(".fluid_subtitles_container");
                if (e.isCurrentlyPlayingAd)
                    r.innerHTML = "";
                else {
                    for (var i = 0; i < e.subtitlesData.length; i++)
                        n >= e.subtitlesData[i].startTime && n <= e.subtitlesData[i].endTime && (r.innerHTML = "",
                        r.appendChild(WebVTT.convertCueToDOMTree(window, e.subtitlesData[i].text)),
                        o = !0);
                    o || (r.innerHTML = "")
                }
            }
            ,
            e.openCloseSubtitlesSwitch = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_subtitles_list");
                e.isCurrentlyPlayingAd ? t.style.display = "none" : "none" === t.style.display ? (t.style.display = "block",
                t.addEventListener("mouseleave", (function e(n) {
                    t.removeEventListener("mouseleave", e),
                    t.style.display = "none"
                }
                ))) : t.style.display = "none"
            }
            ,
            e.createSubtitles = function() {
                var t = document.createElement("div");
                t.className = "fluid_subtitles_container",
                e.domRef.player.parentNode.insertBefore(t, e.domRef.player.nextSibling),
                e.displayOptions.layoutControls.subtitlesEnabled && Promise.all([a.e(407), a.e(721)]).then(a.t.bind(a, 407, 23)).then((function(t) {
                    window.WebVTT = t.WebVTT,
                    e.createSubtitlesSwitch()
                }
                ))
            }
        }
        , function(e, t) {
            e.setupThumbnailPreviewVtt = function() {
                e.sendRequest(e.displayOptions.layoutControls.timelinePreview.file, !0, e.displayOptions.vastOptions.vastTimeout, (function() {
                    var t = this;
                    if ((4 !== t.readyState || 200 === t.status) && 4 === t.readyState && 200 === t.status) {
                        var n = t.responseText
                          , o = (new window.WebVTTParser).parse(n);
                        e.timelinePreviewData = function(t) {
                            if (void 0 === t.cues || !t.cues.length)
                                return [];
                            for (var n = [], o = null, r = null, i = 0; i < t.cues.length; i++) {
                                var a = 0
                                  , l = 0
                                  , d = 122.5
                                  , s = 69;
                                2 === (o = t.cues[i].text.split("#")).length && 0 === o[1].indexOf("xywh=") && 4 === (r = (r = o[1].substring(5)).split(",")).length && (e.displayOptions.layoutControls.timelinePreview.spriteImage = !0,
                                a = parseInt(r[0]),
                                l = parseInt(r[1]),
                                d = parseInt(r[2]),
                                s = parseInt(r[3]));
                                var u = void 0;
                                !e.displayOptions.layoutControls.timelinePreview.spriteRelativePath || -1 === e.displayOptions.layoutControls.timelinePreview.file.indexOf("/") || void 0 !== e.displayOptions.layoutControls.timelinePreview.sprite && "" !== e.displayOptions.layoutControls.timelinePreview.sprite ? u = e.displayOptions.layoutControls.timelinePreview.sprite ? e.displayOptions.layoutControls.timelinePreview.sprite : o[0] : (u = e.displayOptions.layoutControls.timelinePreview.file.substring(0, e.displayOptions.layoutControls.timelinePreview.file.lastIndexOf("/")),
                                u += "/" + o[0]),
                                n.push({
                                    startTime: t.cues[i].startTime,
                                    endTime: t.cues[i].endTime,
                                    image: u,
                                    x: a,
                                    y: l,
                                    w: d,
                                    h: s
                                })
                            }
                            return n
                        }(o)
                    }
                }
                ))
            }
            ,
            e.generateTimelinePreviewTags = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_controls_progress_container")
                  , n = document.createElement("div");
                n.className = "fluid_timeline_preview_container",
                n.style.display = "none",
                n.style.position = "absolute",
                t.appendChild(n);
                var o = document.createElement("div");
                o.className = "fluid_timeline_preview_container_shadow",
                o.style.position = "absolute",
                o.style.display = "none",
                o.style.opacity = 1,
                t.appendChild(o)
            }
            ,
            e.getThumbnailCoordinates = function(t) {
                if (e.timelinePreviewData.length)
                    for (var n = 0; n < e.timelinePreviewData.length; n++)
                        if (t >= e.timelinePreviewData[n].startTime && t <= e.timelinePreviewData[n].endTime)
                            return e.timelinePreviewData[n];
                return !1
            }
            ,
            e.drawTimelinePreview = function(t) {
                var n = e.domRef.wrapper.querySelector(".fluid_timeline_preview_container")
                  , o = e.domRef.wrapper.querySelector(".fluid_timeline_preview_container_shadow")
                  , r = e.domRef.wrapper.querySelector(".fluid_controls_progress_container")
                  , i = r.clientWidth;
                if (e.isCurrentlyPlayingAd)
                    "none" !== n.style.display && (n.style.display = "none");
                else {
                    var a = e.getEventOffsetX(t, r)
                      , l = null;
                    if (i) {
                        l = e.currentVideoDuration * a / i;
                        var d = e.getThumbnailCoordinates(l);
                        o.style.width = i + "px",
                        o.style.display = "block",
                        !1 !== d ? (n.style.width = d.w + "px",
                        n.style.height = d.h + "px",
                        o.style.height = d.h + "px",
                        n.style.background = "url(" + d.image + ") no-repeat scroll -" + d.x + "px -" + d.y + "px",
                        n.style.left = a - d.w / 2 + "px",
                        n.style.display = "block",
                        e.displayOptions.layoutControls.timelinePreview.spriteImage || (n.style.backgroundSize = "contain")) : n.style.display = "none"
                    }
                }
            }
            ,
            e.setupThumbnailPreview = function() {
                var t = e.displayOptions.layoutControls.timelinePreview;
                if (t && t.type) {
                    var n = "mousemove"
                      , o = "mouseleave";
                    if (e.mobileInfo.userOs && (n = "touchmove",
                    o = "touchend"),
                    e.domRef.wrapper.querySelector(".fluid_controls_progress_container").addEventListener(n, e.drawTimelinePreview.bind(e), !1),
                    e.domRef.wrapper.querySelector(".fluid_controls_progress_container").addEventListener(o, (function(t) {
                        var n = e.domRef.wrapper.querySelector(".fluid_controls_progress_container");
                        void 0 !== t.clientX && n.contains(document.elementFromPoint(t.clientX, t.clientY)) || (e.domRef.wrapper.querySelector(".fluid_timeline_preview_container").style.display = "none",
                        e.domRef.wrapper.querySelector(".fluid_timeline_preview_container_shadow").style.display = "none")
                    }
                    ), !1),
                    e.generateTimelinePreviewTags(),
                    "VTT" === t.type && "string" == typeof t.file)
                        a.e(490).then(a.bind(a, 840)).then((function(t) {
                            window.WebVTTParser = t.default,
                            e.setupThumbnailPreviewVtt()
                        }
                        ));
                    else {
                        if ("static" !== t.type || "object" !== f(t.frames))
                            throw "Invalid thumbnail-preview - type must be VTT or static";
                        t.spriteImage = !0,
                        e.timelinePreviewData = t.frames
                    }
                    e.showTimeOnHover = !1
                }
            }
        }
        , function(e, t) {
            var n = "2.0";
            e.renderLinearAd = function(t, o) {
                e.toggleLoader(!1),
                e.vastOptions = t,
                o && e.backupMainVideoContentTime(t.rollListId),
                function(t) {
                    e.switchPlayerToVpaidMode = function(t) {
                        e.debugMessage("starting function switchPlayerToVpaidMode");
                        var o = "fp_" + t.id + "_fluid_vpaid_iframe"
                          , r = {};
                        r.AdParameters = t.adParameters;
                        var i = document.createElement("div");
                        i.className = "fluid_vpaid_slot",
                        i.setAttribute("adListId", t.id),
                        e.domRef.player.parentNode.insertBefore(i, o.nextSibling);
                        var a = {
                            slot: i,
                            videoSlot: e.domRef.player,
                            videoSlotCanAutoPlay: !0
                        }
                          , l = e.vpaidAdUnit.handshakeVersion(n);
                        if (1 === e.compareVersion(n, l))
                            return t.error = !0,
                            e.playMainVideoWhenVpaidFails(403),
                            !1;
                        !1 !== e.vastOptions.skipoffset && e.addSkipButton(),
                        e.domRef.player.loop = !1,
                        e.domRef.player.removeAttribute("controls"),
                        e.vpaidCallbackListenersAttach();
                        var d = e.fullscreenMode ? "fullscreen" : "normal"
                          , s = e.domRef.player.offsetWidth
                          , u = e.domRef.player.offsetHeight;
                        e.vpaidAdUnit.initAd(s, u, d, 3e3, r, a);
                        for (var c = e.domRef.player.parentNode.getElementsByClassName("fluid_controls_currentprogress"), p = 0; p < c.length; p++)
                            c[p].style.backgroundColor = e.displayOptions.layoutControls.adProgressColor;
                        e.toggleLoader(!1),
                        t.played = !0,
                        e.adFinished = !1
                    }
                    ,
                    e.switchPlayerToVastMode = function() {
                        if (e.vastOptions.duration || (e.vastOptions.duration = "streaming" === o.delivery ? 1 / 0 : e.domRef.player.duration),
                        e.displayOptions.layoutControls.showCardBoardView)
                            t.landingPage ? e.addCTAButton(t.landingPage) : e.addCTAButton(t.clickthroughUrl);
                        else {
                            var n = [void 0, !0].includes(e.displayOptions.vastOptions.adClickable);
                            void 0 !== e.rollsById[t.rollListId].adClickable && (n = e.rollsById[t.rollListId].adClickable),
                            n && e.addClickthroughLayer(),
                            e.addCTAButton(t.landingPage)
                        }
                        !1 !== e.vastOptions.skipoffset && e.addSkipButton(),
                        e.domRef.player.loop = !1,
                        e.addAdCountdown(),
                        e.domRef.player.removeAttribute("controls"),
                        e.vastLogoBehaviour(!0);
                        for (var r = e.domRef.player.parentNode.getElementsByClassName("fluid_controls_currentprogress"), i = 0; i < r.length; i++)
                            r[i].style.backgroundColor = e.displayOptions.layoutControls.adProgressColor;
                        if (e.rollsById[t.rollListId].adText || t.adText) {
                            var a = t.adText ? t.adText : e.rollsById[t.rollListId].adText;
                            e.addAdPlayingText(a)
                        }
                        if (e.positionTextElements(t),
                        e.toggleLoader(!1),
                        t.played = !0,
                        e.adFinished = !1,
                        e.domRef.player.play(),
                        e.trackSingleEvent("impression"),
                        e.domRef.player.removeEventListener("loadedmetadata", e.switchPlayerToVastMode),
                        e.vrMode) {
                            var l = e.domRef.wrapper.querySelector(".ad_countdown")
                              , d = e.domRef.wrapper.querySelector(".fluid_ad_cta")
                              , s = e.domRef.wrapper.querySelector(".fluid_ad_playing")
                              , u = e.domRef.wrapper.querySelector(".skip_button");
                            l && (l.style.display = "none"),
                            d && (d.style.display = "none"),
                            s && (s.style.display = "none"),
                            u && (u.style.display = "none")
                        }
                    }
                    ,
                    e.domRef.player.pause(),
                    e.detachStreamers();
                    var o = e.getSupportedMediaFileObject(e.vastOptions.mediaFileList);
                    if (e.displayOptions.layoutControls.showCardBoardView && "360" !== t.mediaType)
                        return t.error = !0,
                        e.playMainVideoWhenVastFails(403),
                        !1;
                    var r = e.vastOptions.vpaid;
                    if (!r && o.isUnsuportedHls)
                        a.e(602).then(a.t.bind(a, 631, 23)).then((function(t) {
                            window.Hls = t.default;
                            var n = new Hls({
                                debug: !1,
                                p2pConfig: {
                                    logLevel: !1
                                },
                                enableWebVTT: !1,
                                enableCEA708Captions: !1
                            });
                            n.attachMedia(e.domRef.player),
                            n.loadSource(o.src),
                            e.isCurrentlyPlayingAd = !0,
                            e.hlsPlayer = n,
                            e.domRef.player.addEventListener("loadedmetadata", e.switchPlayerToVastMode),
                            e.domRef.player.addEventListener("ended", (function() {
                                n.detachMedia(),
                                n.destroy(),
                                e.hlsPlayer = !1,
                                e.onVastAdEnded()
                            }
                            )),
                            e.domRef.player.play()
                        }
                        ));
                    else if (r)
                        e.loadVpaid(t, o.src),
                        e.displayOptions.vastOptions.showProgressbarMarkers && e.hideAdMarkers();
                    else {
                        if (!1 === o.src)
                            return t.error = !0,
                            e.playMainVideoWhenVastFails(403),
                            !1;
                        e.domRef.player.addEventListener("loadedmetadata", e.switchPlayerToVastMode),
                        e.domRef.player.src = o.src,
                        e.isCurrentlyPlayingAd = !0,
                        e.displayOptions.vastOptions.showProgressbarMarkers && e.hideAdMarkers(),
                        e.domRef.player.load(),
                        e.domRef.player.addEventListener("ended", e.onVastAdEnded)
                    }
                }(t),
                e.domRef.player.addEventListener("timeupdate", (function t() {
                    if (e.adFinished)
                        e.domRef.player.removeEventListener("timeupdate", t);
                    else {
                        var n = Math.floor(e.domRef.player.currentTime);
                        0 !== e.vastOptions.duration && e.scheduleTrackingEvent(n, e.vastOptions.duration),
                        n >= e.vastOptions.duration - 1 && 0 !== e.vastOptions.duration && (e.domRef.player.removeEventListener("timeupdate", t),
                        e.adFinished = !0)
                    }
                }
                ))
            }
            ,
            e.playRoll = function(t) {
                for (var n = 0; n < t.length; n++)
                    e.temporaryAdPods.push(t[n]);
                if (null === e.vastOptions || "linear" !== e.vastOptions.adType.toLowerCase()) {
                    var o = e.getNextAdPod();
                    null !== o && e.renderLinearAd(o, !0)
                }
            }
            ,
            e.backupMainVideoContentTime = function(t) {
                switch (e.rollsById[t].roll) {
                case "midRoll":
                    e.domRef.player.mainVideoCurrentTime = e.domRef.player.currentTime - 1;
                    break;
                case "postRoll":
                    e.domRef.player.mainVideoCurrentTime = e.mainVideoDuration,
                    e.autoplayAfterAd = !1,
                    e.domRef.player.currentTime = e.mainVideoDuration;
                    break;
                case "preRoll":
                    e.domRef.player.currentTime > 0 && (e.domRef.player.mainVideoCurrentTime = e.domRef.player.currentTime - 1)
                }
            }
            ,
            e.getSupportedMediaFileObject = function(t) {
                var n = null
                  , o = !1;
                if (t.length)
                    for (var r = 0; r < t.length; r++) {
                        if ("VPAID" === t[r].apiFramework) {
                            n = t[r],
                            o = !0;
                            break
                        }
                        var i = e.getMediaFileTypeSupportLevel(t[r].type);
                        if ("maybe" !== i && "probably" !== i || (n = t[r],
                        o = !0),
                        "probably" === i)
                            break;
                        "no" !== i || "streaming" !== t[r].delivery || "application/vnd.apple.mpegurl" !== t[r].type && "application/x-mpegURL" !== t[r].type || ((n = t[r]).isUnsuportedHls = !0,
                        o = !0)
                    }
                return !1 !== o && n
            }
            ,
            e.getMediaFileTypeSupportLevel = function(e) {
                return null === e ? null : document.createElement("video").canPlayType(e) || "no"
            }
            ,
            e.scheduleTrackingEvent = function(t, n) {
                0 === t && e.trackSingleEvent("start"),
                void 0 !== e.vastOptions.tracking.progress && e.vastOptions.tracking.progress.length && void 0 !== e.vastOptions.tracking.progress[t] && e.trackSingleEvent("progress", t),
                t === Math.floor(n / 4) && e.trackSingleEvent("firstQuartile"),
                t === Math.floor(n / 2) && e.trackSingleEvent("midpoint"),
                t === Math.floor(3 * n / 4) && e.trackSingleEvent("thirdQuartile"),
                t >= n - 1 && e.trackSingleEvent("complete")
            }
            ,
            e.trackSingleEvent = function(t, n) {
                if (void 0 !== e.vastOptions && null !== e.vastOptions) {
                    var o = [];
                    switch (o.length = 0,
                    t) {
                    case "start":
                    case "firstQuartile":
                    case "midpoint":
                    case "thirdQuartile":
                    case "complete":
                        !1 === e.vastOptions.stopTracking[t] && (null !== e.vastOptions.tracking[t] && (o = e.vastOptions.tracking[t]),
                        e.vastOptions.stopTracking[t] = !0);
                        break;
                    case "progress":
                        e.vastOptions.tracking.progress[n].elements.forEach((function(t, r) {
                            !1 === e.vastOptions.tracking.progress[n].stopTracking && e.vastOptions.tracking.progress[n].elements.length && (o = e.vastOptions.tracking.progress[n].elements),
                            e.vastOptions.tracking.progress[n].stopTracking = !0
                        }
                        ));
                        break;
                    case "impression":
                        void 0 !== e.vastOptions.impression && null !== e.vastOptions.impression && void 0 !== e.vastOptions.impression.length && (o = e.vastOptions.impression)
                    }
                    e.callUris(o)
                }
            }
            ,
            e.completeNonLinearStatic = function(t) {
                e.closeNonLinear(t.id),
                !1 === e.adFinished && (e.adFinished = !0,
                e.trackSingleEvent("complete")),
                clearInterval(e.nonLinearTracking)
            }
            ,
            e.createNonLinearStatic = function(t) {
                if (e.vastOptions = t,
                e.createBoard(t),
                !0 !== e.rollsById[t.rollListId].error && !0 !== t.error) {
                    e.adFinished = !1;
                    var n = !!e.rollsById[t.rollListId].nonLinearDuration && e.rollsById[t.rollListId].nonLinearDuration;
                    e.vastOptions.vpaid || (e.trackSingleEvent("start"),
                    n = n || e.vastOptions.duration,
                    e.nonLinearTracking = setInterval((function() {
                        if (!0 !== e.adFinished) {
                            var t = Math.floor(e.domRef.player.currentTime);
                            e.scheduleTrackingEvent(t, n),
                            t >= n - 1 && (e.adFinished = !0)
                        }
                    }
                    ), 400),
                    e.destructors.push((function() {
                        return clearInterval(e.nonLinearTracking)
                    }
                    )));
                    var o = parseInt(e.getCurrentTime()) + parseInt(n);
                    e.scheduleTask({
                        time: o,
                        closeStaticAd: t,
                        rollListId: t.rollListId
                    })
                } else
                    e.announceLocalError(101)
            }
            ,
            e.createVpaidNonLinearBoard = function(t) {
                e.loadVpaidNonlinearAssets = function(t) {
                    e.vastOptions = t,
                    e.debugMessage("starting function switchPlayerToVpaidMode");
                    var o = t.vAlign ? t.vAlign : e.nonLinearVerticalAlign
                      , r = t.vpaidNonLinearCloseButton ? t.vpaidNonLinearCloseButton : e.vpaidNonLinearCloseButton
                      , i = "fp_" + t.id + "_fluid_vpaid_iframe"
                      , a = {};
                    a.AdParameters = t.adParameters;
                    var l = document.createElement("div");
                    l.id = "fluid_vpaidNonLinear_" + t.id,
                    l.className = "fluid_vpaidNonLinear_" + o,
                    l.className += " fluid_vpaidNonLinear_ad",
                    l.setAttribute("adListId", t.id);
                    var d, s, u = Math.min(468, e.domRef.player.offsetWidth), c = Math.min(60, Math.floor(e.domRef.player.offsetHeight / 4));
                    if (void 0 !== t.size) {
                        var p = t.size.split("x");
                        u = p[0],
                        c = p[1]
                    } else
                        t.dimension.width && t.dimension.height && (u = t.dimension.width,
                        c = t.dimension.height);
                    if (l.style.width = "100%",
                    l.style.height = c + "px",
                    r) {
                        var f = document.createElement("div");
                        f.className = "fluid_vpaidNonLinear_frame",
                        f.style.width = u + "px",
                        f.style.height = c + "px",
                        l.appendChild(f);
                        var _ = document.createElement("div");
                        _.className = "close_button",
                        _.innerHTML = "",
                        _.title = e.displayOptions.layoutControls.closeButtonCaption;
                        var y = (d = t.id.split("_"),
                        s = 1,
                        function(e) {
                            if (Array.isArray(e))
                                return e
                        }(d) || function(e, t) {
                            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != n) {
                                var o, r, i, a, l = [], d = !0, s = !1;
                                try {
                                    if (i = (n = n.call(e)).next,
                                    0 === t) {
                                        if (Object(n) !== n)
                                            return;
                                        d = !1
                                    } else
                                        for (; !(d = (o = i.call(n)).done) && (l.push(o.value),
                                        l.length !== t); d = !0)
                                            ;
                                } catch (e) {
                                    s = !0,
                                    r = e
                                } finally {
                                    try {
                                        if (!d && null != n.return && (a = n.return(),
                                        Object(a) !== a))
                                            return
                                    } finally {
                                        if (s)
                                            throw r
                                    }
                                }
                                return l
                            }
                        }(d, s) || m(d, s) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[0];
                        _.onclick = function(t) {
                            if (e.hardStopVpaidAd(""),
                            void 0 !== t.stopImmediatePropagation && t.stopImmediatePropagation(),
                            e.adFinished = !0,
                            "onPauseRoll" === e.rollsById[y].roll && e.onPauseRollAdPods[0]) {
                                var n = e.onPauseRollAdPods[0];
                                e.createBoard(n),
                                e.currentOnPauseRollAd = e.onPauseRollAdPods[0],
                                delete e.onPauseRollAdPods[0]
                            }
                            return !1
                        }
                        ,
                        f.appendChild(_)
                    }
                    var g = document.createElement("iframe");
                    g.id = e.videoPlayerId + "non_linear_vapid_slot_iframe",
                    g.className = "fluid_vpaid_nonlinear_slot_iframe",
                    g.setAttribute("width", u + "px"),
                    g.setAttribute("height", c + "px"),
                    g.setAttribute("sandbox", "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"),
                    g.setAttribute("frameborder", "0"),
                    g.setAttribute("scrolling", "no"),
                    g.setAttribute("marginwidth", "0"),
                    g.setAttribute("marginheight", "0"),
                    l.appendChild(g),
                    e.domRef.player.parentNode.insertBefore(l, i.nextSibling);
                    var v = g.contentWindow.document.createElement("div");
                    g.contentWindow.document.body.appendChild(v),
                    e.vastOptions.slotIframe = g,
                    e.vastOptions.slotFrame = void 0;
                    var h = {
                        slot: v,
                        videoSlot: e.domRef.player,
                        videoSlotCanAutoPlay: !0
                    };
                    e.debugMessage(t);
                    var b = e.vpaidAdUnit.handshakeVersion(n);
                    if (1 === e.compareVersion(n, b))
                        return t.error = !0,
                        e.playMainVideoWhenVpaidFails(403),
                        !1;
                    e.domRef.player.loop = !1,
                    e.domRef.player.removeAttribute("controls"),
                    e.vpaidCallbackListenersAttach();
                    var w = e.fullscreenMode ? "fullscreen" : "normal";
                    e.vpaidAdUnit.initAd(u, c, w, 3e3, a, h),
                    e.toggleLoader(!1),
                    t.played = !0,
                    e.adFinished = !1
                }
                ,
                e.loadVpaid(t, t.staticResource),
                e.debugMessage("create non linear vpaid")
            }
            ,
            e.createNonLinearBoard = function(t) {
                t.played = !0;
                var n = document.createElement("div")
                  , o = e.rollsById[t.rollListId].vAlign ? e.rollsById[t.rollListId].vAlign : e.nonLinearVerticalAlign
                  , r = new Image;
                r.src = t.staticResource,
                r.id = "fluid_nonLinear_imgCreative_" + t.id + "_" + e.videoPlayerId,
                r.onerror = function() {
                    e.rollsById[t.rollListId].error = !0,
                    e.announceError(500)
                }
                ,
                r.onload = function() {
                    var n, o, i, a, l = e.domRef.player.clientWidth;
                    if (void 0 !== e.rollsById[t.rollListId].size ? (n = e.rollsById[t.rollListId].size.split("x")[0],
                    o = e.rollsById[t.rollListId].size.split("x")[1]) : t.dimension.width && t.dimension.height ? (n = t.dimension.width,
                    o = t.dimension.height) : (n = r.width,
                    o = r.height),
                    n > l ? a = o * (i = l - 5) / n : (i = n,
                    a = o),
                    "onPauseRoll" !== e.rollsById[t.rollListId].roll) {
                        var d = e.domRef.wrapper.querySelector("#fluid_nonLinear_" + t.id);
                        d && (d.style.display = "")
                    }
                    var s = e.domRef.wrapper.querySelector("#" + r.id);
                    s.width = i,
                    s.height = a,
                    e.trackSingleEvent("impression")
                }
                ,
                n.id = "fluid_nonLinear_" + t.id,
                n.className = "fluid_nonLinear_" + o,
                n.className += " fluid_nonLinear_ad",
                n.innerHTML = r.outerHTML,
                n.style.display = "none",
                n.onclick = function() {
                    void 0 !== t.clickthroughUrl && window.open(t.clickthroughUrl),
                    void 0 !== t.clicktracking && e.callUris([t.clicktracking])
                }
                ,
                void 0 !== t.clickthroughUrl && (n.style.cursor = "pointer");
                var i = document.createElement("div");
                i.className = "close_button",
                i.innerHTML = "",
                i.title = e.displayOptions.layoutControls.closeButtonCaption;
                var a = t.rollListId;
                i.onclick = function(t) {
                    if (this.parentElement.remove(),
                    void 0 !== t.stopImmediatePropagation && t.stopImmediatePropagation(),
                    e.adFinished = !0,
                    clearInterval(e.nonLinearTracking),
                    "onPauseRoll" === e.rollsById[a].roll && e.onPauseRollAdPods[0]) {
                        var n = e.onPauseRollAdPods[0];
                        e.createBoard(n),
                        e.currentOnPauseRollAd = e.onPauseRollAdPods[0],
                        delete e.onPauseRollAdPods[0]
                    }
                    return !1
                }
                ,
                n.appendChild(i),
                e.domRef.player.parentNode.insertBefore(n, e.domRef.player.nextSibling)
            }
            ,
            e.createBoard = function(t) {
                if (t.vpaid)
                    e.hardStopVpaidAd(""),
                    e.createVpaidNonLinearBoard(t);
                else {
                    if (void 0 === t.staticResource || -1 === e.supportedStaticTypes.indexOf(t.creativeType))
                        return t.error = !0,
                        void (e.vastOptions && void 0 !== e.vastOptions.errorUrl ? e.announceError(503) : e.announceLocalError(503));
                    e.createNonLinearBoard(t)
                }
            }
            ,
            e.closeNonLinear = function(t) {
                var n = e.domRef.wrapper.querySelector("#fluid_nonLinear_" + t + ", #fluid_vpaidNonLinear_" + t);
                n && n.remove()
            }
            ,
            e.rollGroupContainsLinear = function(t) {
                for (var n = !1, o = 0; o < t.length; o++)
                    if (e.rollsById[t[o].id].adType && "linear" === e.rollsById[t[o].id].adType) {
                        n = !0;
                        break
                    }
                return n
            }
            ,
            e.rollGroupContainsNonlinear = function(t) {
                for (var n = !1, o = 0; o < t.length; o++)
                    if ("nonlinear" === e.rollsById[t[o].id].adType.toLowerCase()) {
                        n = !0;
                        break
                    }
                return n
            }
            ,
            e.preRollFail = function() {
                var t = e.preRollAdPodsLength;
                e.preRollVastResolved++,
                e.preRollVastResolved === t && e.preRollAdsPlay()
            }
            ,
            e.preRollSuccess = function() {
                var t = e.preRollAdPodsLength;
                e.preRollVastResolved++,
                e.preRollVastResolved === t && e.preRollAdsPlay()
            }
            ,
            e.preRollAdsPlay = function() {
                var t = e.preRollAdPods
                  , n = {
                    linear: [],
                    nonLinear: []
                };
                e.firstPlayLaunched = !0;
                for (var o = 0; o < t.length; o++)
                    e.rollsById[t[o]].ads.forEach((function(t) {
                        !0 !== t.played && ("linear" === t.adType && n.linear.push(t),
                        "nonLinear" === t.adType && (n.nonLinear.push(t),
                        e.scheduleTask({
                            time: 0,
                            playRoll: "midRoll",
                            rollListId: t.rollListId
                        })))
                    }
                    ));
                n.linear.length > 0 ? (e.toggleLoader(!1),
                e.playRoll(n.linear)) : e.playMainVideoWhenVastFails(900)
            }
            ,
            e.preRoll = function(t) {
                var n = t.vastObj;
                e.domRef.player.removeEventListener(t.type, e.preRoll);
                var o = [];
                o[0] = t.type.replace("adId_", ""),
                !0 !== e.rollsById[o[0]].played && (e.preRollAdPods.push(o[0]),
                e.preRollSuccess(n))
            }
            ,
            e.createAdMarker = function(t, n) {
                var o = e.domRef.wrapper.querySelector(".fluid_controls_ad_markers_holder")
                  , r = document.createElement("div");
                r.className = "fluid_controls_ad_marker fluid_controls_ad_marker_" + t,
                r.dataset.adListId = t,
                r.style.left = n / e.mainVideoDuration * 100 + "%",
                e.isCurrentlyPlayingAd && (r.style.display = "none"),
                o.appendChild(r)
            }
            ,
            e.hideAdMarker = function(t) {
                var n = e.domRef.wrapper.querySelector("fluid_controls_ad_marker_" + t);
                n && (n.style.display = "none")
            }
            ,
            e.showAdMarkers = function() {
                for (var t = e.domRef.wrapper.querySelector(".fluid_controls_ad_markers_holder").getElementsByClassName("fluid_controls_ad_marker"), n = 0; n < t.length; ++n) {
                    var o = t[n]
                      , r = o.dataset.adListId;
                    !1 === e.rollsById[r].played && (o.style.display = "")
                }
            }
            ,
            e.hideAdMarkers = function() {
                for (var t = e.domRef.wrapper.querySelector(".fluid_controls_ad_markers_holder").getElementsByClassName("fluid_controls_ad_marker"), n = 0; n < t.length; ++n)
                    t[n].style.display = "none"
            }
            ,
            e.midRoll = function(t) {
                e.domRef.player.removeEventListener(t.type, e.midRoll);
                var n = t.type.replace("adId_", "");
                if (!0 !== e.rollsById[n].played) {
                    var o = e.rollsById[n].timer;
                    "string" == typeof o && -1 !== o.indexOf("%") && (o = o.replace("%", ""),
                    o = Math.floor(e.mainVideoDuration / 100 * o)),
                    e.displayOptions.vastOptions.showProgressbarMarkers && "nonLinear" === e.rollsById[n].adType && e.createAdMarker(n, o),
                    e.scheduleTask({
                        time: o,
                        playRoll: "midRoll",
                        rollListId: n
                    })
                }
            }
            ,
            e.postRoll = function(t) {
                e.domRef.player.removeEventListener(t.type, e.postRoll);
                var n = t.type.replace("adId_", "");
                e.scheduleTask({
                    time: Math.floor(e.mainVideoDuration),
                    playRoll: "postRoll",
                    rollListId: n
                })
            }
            ,
            e.onPauseRoll = function(t) {
                e.domRef.player.removeEventListener(t.type, e.onPauseRoll);
                var n = t.type.replace("adId_", "");
                e.rollsById[n].ads.forEach((function(t) {
                    if ("nonLinear" === t.adType) {
                        if (!0 === e.rollsById[t.rollListId].error || !0 === t.error)
                            return void e.announceLocalError(101);
                        if (e.domRef.wrapper.getElementsByClassName("fluid_nonLinear_ad")[0])
                            e.onPauseRollAdPods.push(n);
                        else {
                            e.createBoard(t),
                            e.currentOnPauseRollAd = n;
                            var o, r = "", i = y(e.domRef.wrapper.children);
                            try {
                                for (i.s(); !(o = i.n()).done; ) {
                                    var a = o.value;
                                    a.id === "fluid_nonLinear_" + n && (r = a)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            r && (r.style.display = "none")
                        }
                    }
                }
                ))
            }
            ,
            e.hasValidOnPauseAd = function() {
                var t = e.findRoll("onPauseRoll");
                return 0 !== t.length && e.rollsById[t[0]] && !1 === e.rollsById[t[0]].error && e.rollsById[t[0]].ads.length && !0 !== e.rollsById[t[0]].ads[0].error
            }
            ,
            e.toggleOnPauseAd = function() {
                if (e.toggleLoader(!1),
                e.hasValidOnPauseAd() && !e.isCurrentlyPlayingAd) {
                    var t = e.findRoll("onPauseRoll")
                      , n = e.rollsById[t].ads[0];
                    e.vastOptions = n;
                    var o, r = "", i = y(e.domRef.wrapper.children);
                    try {
                        for (i.s(); !(o = i.n()).done; ) {
                            var a = o.value;
                            a.id === "fluid_nonLinear_" + n.id && (r = a)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    r && e.domRef.player.paused ? setTimeout((function() {
                        r.style.display = "flex",
                        n.played = !1,
                        e.trackingOnPauseNonLinearAd(n, "start")
                    }
                    ), 500) : r && !e.domRef.player.paused && (r.style.display = "none",
                    e.adFinished = !0,
                    e.trackingOnPauseNonLinearAd(n, "complete"))
                }
            }
            ,
            e.trackingOnPauseNonLinearAd = function(t, n) {
                !0 !== e.rollsById[t.rollListId].error && !0 !== t.error ? (e.vastOptions = t,
                e.trackSingleEvent(n)) : e.announceLocalError(101)
            }
            ,
            e.getLinearAdsFromKeyTime = function(t) {
                for (var n = [], o = 0; o < t.length; o++)
                    !1 === e.rollsById[t[o].adListId].played && n.push(t[o].adListId);
                return n
            }
            ,
            e.adKeytimePlay = function(t) {
                if (e.timerPool[t] && !e.isCurrentlyPlayingAd) {
                    var n = e.timerPool[t].closeStaticAd.length
                      , o = e.timerPool[t].linear.length
                      , r = e.timerPool[t].nonLinear.length
                      , i = e.timerPool[t].loadVast.length;
                    if ([n, o, r, i].every((function(e) {
                        return 0 === e
                    }
                    )))
                        delete e.timerPool[t];
                    else {
                        if (n > 0) {
                            for (var a = 0; a < n; a++) {
                                var l = e.timerPool[t].closeStaticAd[a];
                                !0 === l.played && e.completeNonLinearStatic(l)
                            }
                            e.timerPool[t].closeStaticAd = []
                        }
                        if (o > 0 && e.timerPool[t].linear.length > 0)
                            return e.playRoll(e.timerPool[t].linear),
                            void (e.timerPool[t].linear = []);
                        if (r > 0)
                            for (var d = 0; d < r; d++) {
                                var s = e.timerPool[t].nonLinear[d]
                                  , u = s.rollListId;
                                if (e.adPool[u],
                                !1 === s.played && !e.displayOptions.layoutControls.showCardBoardView)
                                    return e.createNonLinearStatic(s),
                                    e.displayOptions.vastOptions.showProgressbarMarkers && e.hideAdMarker(u),
                                    void e.timerPool[t].nonLinear.splice(d, 1)
                            }
                        i > 0 && (e.timerPool[t].loadVast.forEach((function(t) {
                            "postRoll" === t.roll && t.voidPostRollTasks || ("postRoll" === t.roll && (t.voidPostRollTasks = !0),
                            e.debugMessage("Handling on-demand VAST load for roll ".concat(t.id)),
                            e.processVastWithRetries(t))
                        }
                        )),
                        e.timerPool[t].loadVast = [])
                    }
                }
            }
            ,
            e.adTimer = function() {
                e.isTimer || (e.isTimer = !e.isTimer,
                e.timer = setInterval((function() {
                    var t = Math.floor(e.getCurrentTime());
                    e.adKeytimePlay(t)
                }
                ), 800),
                e.destructors.push((function() {
                    return e.timer
                }
                )))
            }
            ,
            e.scheduleTask = function(t) {
                t.time > e.mainVideoDuration || t.time < 0 || Number.isNaN(t.time) ? console.warn("Scheduled task has invalid time", t.time, ". Check your configuration.") : (e.debugMessage("Scheduling task", t),
                e.timerPool.hasOwnProperty(t.time) || (e.timerPool[t.time] = {
                    linear: [],
                    nonLinear: [],
                    closeStaticAd: [],
                    loadVast: []
                }),
                t.rollListId && e.rollsById[t.rollListId].ads.filter((function(e) {
                    var n = e.adType;
                    return 0 !== t.time || "linear" !== n
                }
                )).forEach((function(n) {
                    t.hasOwnProperty("playRoll") && "linear" === n.adType ? e.timerPool[t.time].linear.push(n) : t.hasOwnProperty("playRoll") && "nonLinear" === n.adType ? e.timerPool[t.time].nonLinear.push(n) : t.hasOwnProperty("closeStaticAd") && e.timerPool[t.time].closeStaticAd.push(n)
                }
                )),
                t.loadVast && e.timerPool[t.time].loadVast.push(t.roll))
            }
            ,
            e.scheduleOnDemandRolls = function() {
                var t = e.findRoll("midRoll") || []
                  , n = e.findRoll("postRoll") || [];
                [].concat(_(t), _(n)).map((function(t) {
                    return e.rollsById[t]
                }
                )).filter((function(e) {
                    return !0 !== e.vastLoaded && !0 !== e.error
                }
                )).forEach((function(t) {
                    if ("midRoll" === t.roll) {
                        "string" == typeof t.timer && (t.timer = Math.floor(e.mainVideoDuration / 100 * t.timer.replace("%", "")),
                        e.debugMessage("Replaced midRoll from percentage to timer value ".concat(t.timer, " seconds")));
                        var n = t.timer - e.displayOptions.vastOptions.vastTimeout / 1e3;
                        n <= Number(e.getCurrentTime()) ? (e.debugMessage("Loading Mid Roll VAST immediately as it needs to be played soon"),
                        e.processVastWithRetries(t)) : e.scheduleTask({
                            loadVast: !0,
                            time: n,
                            roll: t
                        })
                    } else {
                        var o = parseInt(e.mainVideoDuration)
                          , r = e.displayOptions.vastOptions.vastTimeout / 1e3;
                        t.voidPostRollTasks = !1;
                        for (var i = 1; i <= r; i++)
                            e.scheduleTask({
                                loadVast: !0,
                                time: o - i,
                                roll: t
                            })
                    }
                }
                ))
            }
            ,
            e.switchToMainVideo = function() {
                e.debugMessage("starting main video"),
                e.domRef.player.src = e.originalSrc,
                e.initialiseStreamers();
                var t = void 0 !== e.domRef.player.mainVideoCurrentTime ? Math.floor(e.domRef.player.mainVideoCurrentTime) : 0;
                if (e.domRef.player.hasOwnProperty("currentTime") && (e.domRef.player.currentTime = t),
                e.displayOptions.layoutControls.loop && (e.domRef.player.loop = !0),
                e.setCurrentTimeAndPlay(t, e.autoplayAfterAd),
                e.isCurrentlyPlayingAd = !1,
                e.deleteVastAdElements(),
                e.adFinished = !0,
                e.displayOptions.vastOptions.vastAdvanced.vastVideoEndedCallback(),
                e.vastOptions = null,
                e.setBuffering(),
                null !== e.domRef.wrapper.querySelector(".fluid_controls_progress_container"))
                    for (var n = e.displayOptions.layoutControls.primaryColor ? e.displayOptions.layoutControls.primaryColor : "white", o = e.domRef.player.parentNode.getElementsByClassName("fluid_controls_currentprogress"), r = 0; r < o.length; r++)
                        o[r].style.backgroundColor = n;
                e.domRef.player.removeEventListener("ended", e.onVastAdEnded),
                e.displayOptions.vastOptions.showProgressbarMarkers && e.showAdMarkers(),
                e.hasTitle() && (e.domRef.wrapper.querySelector(".fp_title").style.display = "inline")
            }
            ,
            e.getNextAdPod = function() {
                return e.temporaryAdPods.length > 0 ? e.temporaryAdPods.shift() : null
            }
            ,
            e.checkForNextAd = function() {
                var t = e.getNextAdPod();
                null === t ? (e.switchToMainVideo(),
                e.vastOptions = null,
                e.adFinished = !0) : (e.domRef.player.removeEventListener("ended", e.onVastAdEnded),
                e.isCurrentlyPlayingAd = !1,
                e.vastOptions = null,
                e.adFinished = !0,
                e.renderLinearAd(t, !1))
            }
            ,
            e.addSkipButton = function() {
                var t = document.createElement("div");
                t.className = "skip_button skip_button_disabled",
                e.vastOptions.skipoffset > 0 && (t.innerHTML = e.displayOptions.vastOptions.skipButtonCaption.replace("[seconds]", e.vastOptions.skipoffset)),
                e.domRef.wrapper.appendChild(t),
                0 === e.vastOptions.skipoffset && e.decreaseSkipOffset(),
                e.domRef.player.addEventListener("timeupdate", e.decreaseSkipOffset, !1)
            }
            ,
            e.addAdCountdown = function() {
                if (!(e.isCurrentlyPlayingAd && e.hlsPlayer || e.currentVideoDuration === 1 / 0)) {
                    var t = e.domRef.wrapper
                      , n = document.createElement("div")
                      , o = e.pad(parseInt(e.currentVideoDuration / 60)) + ":" + e.pad(parseInt(e.currentVideoDuration % 60))
                      , r = parseInt(o);
                    n.className = "ad_countdown",
                    n.innerHTML = "<span class='ad_timer_prefix'>Ad - </span>" + r,
                    t.appendChild(n),
                    e.domRef.player.addEventListener("timeupdate", e.decreaseAdCountdown, !1),
                    t.addEventListener("mouseover", (function() {
                        n.style.display = "none"
                    }
                    ), !1)
                }
            }
            ,
            e.decreaseAdCountdown = function() {
                var t = parseInt(e.currentVideoDuration) - parseInt(e.domRef.player.currentTime)
                  , n = e.domRef.wrapper.querySelector(".ad_countdown");
                n && isNaN(t) ? n.parentNode.removeChild(n) : n ? n.innerHTML = "<span class='ad_timer_prefix'>Ad - </span> " + e.pad(parseInt(t / 60)) + ":" + e.pad(parseInt(t % 60)) : e.domRef.player.removeEventListener("timeupdate", e.decreaseAdCountdown)
            }
            ,
            e.removeAdCountdown = function() {
                var t = e.domRef.wrapper.querySelector(".ad_countdown");
                t && t.parentElement.removeChild(t)
            }
            ,
            e.toggleAdCountdown = function(t) {
                var n = e.domRef.wrapper.querySelector(".ad_countdown");
                n && (n.style.display = t ? "inline-block" : "none")
            }
            ,
            e.addAdPlayingText = function(t) {
                var n = document.createElement("div");
                e.displayOptions.layoutControls.primaryColor && (n.style.backgroundColor = e.displayOptions.layoutControls.primaryColor,
                n.style.opacity = 1),
                n.className = "fluid_ad_playing",
                n.innerText = t,
                e.domRef.wrapper.appendChild(n)
            }
            ,
            e.positionTextElements = function(t) {
                var n, o, r, i = ["top left", "top right", "bottom left", "bottom right"], a = e.domRef.wrapper.querySelector(".skip_button"), l = e.domRef.wrapper.querySelector(".fluid_ad_playing"), d = e.domRef.wrapper.querySelector(".fluid_ad_cta"), s = 0, u = 0, c = !1, p = 0, f = [], _ = {
                    top: {
                        left: {
                            h: 34,
                            v: 34
                        },
                        right: {
                            h: 0,
                            v: 34
                        }
                    },
                    bottom: {
                        left: {
                            h: 34,
                            v: 50
                        },
                        right: {
                            h: 0,
                            v: 50
                        }
                    }
                };
                null !== a && (p = a.offsetHeight + 8,
                e.domRef.wrapper.classList.contains("mobile") && (_.top = {
                    left: {
                        h: 0,
                        v: 8
                    },
                    right: {
                        h: 0,
                        v: 8
                    }
                },
                _.bottom = {
                    left: {
                        h: 0,
                        v: 50
                    },
                    right: {
                        h: 0,
                        v: 50
                    }
                })),
                null !== d && (n = e.rollsById[t.rollListId].adCTATextPosition ? e.rollsById[t.rollListId].adCTATextPosition.toLowerCase() : e.displayOptions.vastOptions.adCTATextPosition,
                -1 === i.indexOf(n) && (console.log('[FP Error] Invalid position for CTAText. Reverting to "bottom right"'),
                n = "bottom right"),
                d.classList.add.apply(d.classList, n.split(" ")),
                c = "bottom" === (f = n.split(" "))[0],
                d.style[f[0]] = _[f[0]][f[1]].v + "px",
                d.style[f[1]] = _[f[0]][f[1]].h + "px",
                c && "right" === f[1] && (d.style[f[0]] = _[f[0]][f[1]].v + p + "px"),
                s = d.offsetHeight + 8 + "px"),
                null !== l && (o = e.rollsById[t.rollListId].adTextPosition ? e.rollsById[t.rollListId].adTextPosition.toLowerCase() : e.displayOptions.vastOptions.adTextPosition,
                -1 === i.indexOf(o) && (console.log('[FP Error] Invalid position for adText. Reverting to "top left"'),
                o = "top left"),
                r = o.split(" "),
                l.style[r[0]] = _[r[0]][r[1]].v + "px",
                l.style[r[1]] = _[r[0]][r[1]].h + "px",
                u = l.offsetHeight + 8 + "px"),
                s > 0 && u > 0 && n === o && (c ? "right" === f[1] ? l.style.bottom = _[r[0]][r[1]].v + p + s + "px" : l.style.bottom = _[r[0]][r[1]].v + s + "px" : d.style.top = _[f[0]][f[1]].v + u + "px")
            }
            ,
            e.removeAdPlayingText = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_ad_playing");
                t && t.parentElement.removeChild(t)
            }
            ,
            e.addCTAButton = function(t) {
                if (e.vastOptions.titleCTA) {
                    var n = e.vastOptions.titleCTA
                      , o = n.text
                      , r = n.link
                      , i = n.tracking;
                    return e.createAndAppendCTAButton(o, r, i)
                }
                if (t && "string" == typeof e.displayOptions.vastOptions.adCTAText)
                    return e.createAndAppendCTAButton(e.displayOptions.vastOptions.adCTAText, t, e.vastOptions.clickthroughUrl)
            }
            ,
            e.createAndAppendCTAButton = function(t, n, o) {
                var r = document.createElement("div");
                r.className = "fluid_ad_cta";
                var i = document.createElement("span")
                  , a = t;
                n && (a += '<br/><span class="add_icon_clickthrough">' + n + "</span>"),
                i.innerHTML = a,
                r.addEventListener("click", (function() {
                    return e.domRef.player.paused || e.domRef.player.pause(),
                    window.open(o, "_blank").focus(),
                    !0
                }
                ), !1),
                r.appendChild(i),
                e.domRef.wrapper.appendChild(r)
            }
            ,
            e.removeCTAButton = function() {
                var t = e.domRef.wrapper.querySelector(".fluid_ad_cta");
                t && t.parentElement.removeChild(t)
            }
            ,
            e.decreaseSkipOffset = function() {
                var t = e.vastOptions.skipoffset - Math.floor(e.domRef.player.currentTime)
                  , n = e.domRef.wrapper.querySelector(".skip_button");
                if (n)
                    if (t >= 1)
                        n.innerHTML = e.displayOptions.vastOptions.skipButtonCaption.replace("[seconds]", t);
                    else {
                        var o = document.createElement("a");
                        o.href = "#",
                        o.className = "js-skipHref",
                        o.innerHTML = e.displayOptions.vastOptions.skipButtonClickCaption,
                        o.onclick = function(t) {
                            t.preventDefault(),
                            t.stopPropagation(),
                            e.pressSkipButton()
                        }
                        ,
                        n.innerHTML = "",
                        n.appendChild(o),
                        n.className = n.className.replace(/\bskip_button_disabled\b/, ""),
                        e.domRef.player.removeEventListener("timeupdate", e.decreaseSkipOffset)
                    }
                else
                    e.domRef.player.removeEventListener("timeupdate", e.decreaseSkipOffset)
            }
            ,
            e.pressSkipButton = function() {
                if (e.removeSkipButton(),
                e.removeAdPlayingText(),
                e.removeCTAButton(),
                e.vastOptions.vpaid)
                    e.skipVpaidAd();
                else {
                    e.displayOptions.vastOptions.vastAdvanced.vastVideoSkippedCallback();
                    var t = document.createEvent("Event");
                    t.initEvent("ended", !1, !0),
                    e.domRef.player.dispatchEvent(t)
                }
            }
            ,
            e.removeSkipButton = function() {
                var t = e.domRef.wrapper.querySelector(".skip_button");
                t && t.parentElement.removeChild(t)
            }
            ,
            e.addClickthroughLayer = function() {
                var t = e.domRef.wrapper
                  , n = document.createElement("div");
                n.className = "vast_clickthrough_layer",
                n.setAttribute("style", "position: absolute; cursor: pointer; top: 0; left: 0; width: " + e.domRef.player.offsetWidth + "px; height: " + e.domRef.player.offsetHeight + "px;"),
                t.appendChild(n);
                var o = function() {
                    window.open(e.vastOptions.clickthroughUrl),
                    void 0 !== e.vastOptions.clicktracking && e.callUris(e.vastOptions.clicktracking)
                }
                  , r = e.domRef.wrapper.querySelector(".vast_clickthrough_layer")
                  , i = "iPhone" === e.mobileInfo.device && !1 !== e.mobileInfo.userOsMajor && e.mobileInfo.userOsMajor <= 9;
                r.onclick = function() {
                    e.domRef.player.paused ? i && !e.suppressClickthrough ? (o(),
                    e.suppressClickthrough = !0) : e.domRef.player.play() : (o(),
                    e.domRef.player.pause())
                }
            }
            ,
            e.removeClickthrough = function() {
                var t = e.domRef.wrapper.querySelector(".vast_clickthrough_layer");
                t && t.parentNode.removeChild(t)
            }
        }
        , function(e, t) {
            e.initialiseStreamers = function() {
                switch (e.detachStreamers(),
                e.displayOptions.layoutControls.mediaType) {
                case "application/dash+xml":
                    e.dashScriptLoaded || window.dashjs && !window.dashjs.isDefaultSubject ? e.initialiseDash() : (e.dashScriptLoaded = !0,
                    a.e(112).then(a.t.bind(a, 452, 23)).then((function(t) {
                        window.dashjs = t.default,
                        e.initialiseDash()
                    }
                    )));
                    break;
                case "application/x-mpegurl":
                    if (e.domRef.player.canPlayType("application/x-mpegurl")) {
                        e.debugMessage("Native HLS support found, skipping hls.js");
                        break
                    }
                    e.hlsScriptLoaded || window.Hls ? e.initialiseHls() : (e.hlsScriptLoaded = !0,
                    a.e(602).then(a.t.bind(a, 631, 23)).then((function(t) {
                        window.Hls = t.default,
                        e.initialiseHls()
                    }
                    )))
                }
            }
            ,
            e.initialiseDash = function() {
                if ("function" == typeof (window.MediaSource || window.WebKitMediaSource)) {
                    var t = e.autoplayAfterAd ? e.displayOptions.layoutControls.autoPlay : e.autoplayAfterAd
                      , n = {
                        debug: {
                            logLevel: dashjs.Debug.LOG_LEVEL_FATAL
                        }
                    }
                      , o = dashjs.MediaPlayer().create()
                      , r = e.displayOptions.modules.configureDash(n);
                    o.updateSettings(r),
                    e.displayOptions.modules.onBeforeInitDash(o),
                    o.initialize(e.domRef.player, e.originalSrc, t),
                    o.on("streamInitializing", (function() {
                        e.toggleLoader(!0)
                    }
                    )),
                    o.on("canPlay", (function() {
                        e.toggleLoader(!1)
                    }
                    )),
                    o.on("playbackPlaying", (function() {
                        e.toggleLoader(!1)
                    }
                    )),
                    e.displayOptions.modules.onAfterInitDash(o),
                    e.dashPlayer = o
                } else
                    e.nextSource(),
                    console.log("[FP_WARNING] Media type not supported by this browser using DASH.js. (application/dash+xml)")
            }
            ,
            e.initialiseHls = function() {
                if (Hls.isSupported()) {
                    e.debugMessage("Initializing hls.js");
                    var t = e.displayOptions.modules.configureHls({
                        debug: !1,
                        p2pConfig: {
                            logLevel: !1
                        },
                        enableWebVTT: !1,
                        enableCEA708Captions: !1
                    })
                      , n = new Hls(t);
                    e.displayOptions.modules.onBeforeInitHls(n),
                    n.attachMedia(e.domRef.player),
                    n.loadSource(e.originalSrc),
                    e.displayOptions.modules.onAfterInitHls(n),
                    e.hlsPlayer = n,
                    !e.firstPlayLaunched && e.displayOptions.layoutControls.autoPlay && e.domRef.player.play()
                } else
                    e.nextSource(),
                    console.log("[FP_WARNING] Media type not supported by this browser using HLS.js. (application/x-mpegURL)")
            }
            ,
            e.detachStreamers = function() {
                e.dashPlayer ? (e.dashPlayer.reset(),
                e.dashPlayer = !1) : e.hlsPlayer && (e.hlsPlayer.detachMedia(),
                e.hlsPlayer = !1)
            }
        }
        , function(e, t) {
            e.isTouchDevice = function() {
                return !(!("ontouchstart"in window) && !navigator.maxTouchPoints)
            }
            ,
            e.getMobileOs = function() {
                var e, t = navigator.userAgent || "", n = {
                    device: !1,
                    userOs: !1,
                    userOsVer: !1,
                    userOsMajor: !1
                };
                if (t.match(/Android/i) ? (n.userOs = "Android",
                e = t.indexOf("Android ")) : t.match(/iPhone/i) ? (n.device = "iPhone",
                n.userOs = "iOS",
                e = t.indexOf("OS ")) : t.match(/iPad/i) ? (n.device = "iPad",
                n.userOs = "iOS",
                e = t.indexOf("OS ")) : n.userOs = !1,
                "iOS" === n.userOs && e > -1) {
                    var o = t.substr(e + 3);
                    -1 !== o.indexOf(" ") && (n.userOsVer = o.substring(0, o.indexOf(" ")).replace(/_/g, "."),
                    n.userOsMajor = parseInt(n.userOsVer))
                } else
                    "Android" === n.userOs && e > -1 ? n.userOsVer = t.substr(e + 8, 3) : n.userOsVer = !1;
                return n
            }
            ,
            e.getBrowserVersion = function() {
                var e, t, n = navigator.userAgent || "", o = {
                    browserName: !1,
                    fullVersion: !1,
                    majorVersion: !1,
                    userOsMajor: !1
                };
                try {
                    o.browserName = navigator.appName,
                    -1 !== (e = n.indexOf("OPR/")) ? (o.browserName = "Opera",
                    o.fullVersion = n.substring(e + 4)) : -1 !== (e = n.indexOf("Opera")) ? (o.browserName = "Opera",
                    o.fullVersion = n.substring(e + 6),
                    -1 !== (e = n.indexOf("Version")) && (o.fullVersion = n.substring(e + 8))) : -1 !== (e = n.indexOf("MSIE")) ? (o.browserName = "Microsoft Internet Explorer",
                    o.fullVersion = n.substring(e + 5)) : -1 !== (e = n.indexOf("Chrome")) ? (o.browserName = "Google Chrome",
                    o.fullVersion = n.substring(e + 7)) : -1 !== (e = n.indexOf("Safari")) ? (o.browserName = "Safari",
                    o.fullVersion = n.substring(e + 7),
                    -1 !== (e = n.indexOf("Version")) && (o.fullVersion = n.substring(e + 8))) : -1 !== (e = n.indexOf("Firefox")) ? (o.browserName = "Mozilla Firefox",
                    o.fullVersion = n.substring(e + 8)) : (t = n.lastIndexOf(" ") + 1) < (e = n.lastIndexOf("/")) && (o.browserName = n.substring(t, e),
                    o.fullVersion = n.substring(e + 1),
                    o.browserName.toLowerCase() === o.browserName.toUpperCase() && (o.browserName = navigator.appName)),
                    -1 !== (t = o.fullVersion.indexOf(";")) && (o.fullVersion = o.fullVersion.substring(0, t)),
                    -1 !== (t = o.fullVersion.indexOf(" ")) && (o.fullVersion = o.fullVersion.substring(0, t)),
                    o.majorVersion = parseInt("" + o.fullVersion, 10),
                    isNaN(o.majorVersion) && (o.fullVersion = "" + parseFloat(navigator.appVersion),
                    o.majorVersion = parseInt(navigator.appVersion, 10))
                } catch (e) {}
                return o
            }
            ,
            e.compareVersion = function(e, t) {
                if ("string" != typeof e)
                    return !1;
                if ("string" != typeof t)
                    return !1;
                e = e.split("."),
                t = t.split(".");
                for (var n = Math.min(e.length, t.length), o = 0; o < n; ++o) {
                    if (e[o] = parseInt(e[o], 10),
                    t[o] = parseInt(t[o], 10),
                    e[o] > t[o])
                        return 1;
                    if (e[o] < t[o])
                        return -1
                }
                return e.length === t.length ? 0 : e.length < t.length ? -1 : 1
            }
            ,
            e.convertTimeStringToSeconds = function(e) {
                if (!e || !e.match(/^(\d){2}(:[0-5][0-9]){2}(.(\d){1,3})?$/))
                    return !1;
                var t = e.split(":");
                return 3600 * parseInt(t[0], 10) + 60 * parseInt(t[1], 10) + parseInt(t[2], 10)
            }
            ,
            e.formatTime = function(t) {
                var n = new Date(1e3 * t)
                  , o = e.pad(n.getUTCHours())
                  , r = e.pad(n.getUTCMinutes())
                  , i = e.pad(n.getSeconds());
                return o >= 1 ? o + ":" + r + ":" + i : r + ":" + i
            }
            ,
            e.pad = function(e) {
                return e < 10 ? "0" + e : e
            }
            ,
            e.isElementVisible = function(e) {
                if (!e)
                    return null;
                var t = e.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }
            ,
            e.throttle = function(e, t) {
                var n = !1;
                return function() {
                    n || (e.apply(this, arguments),
                    n = !0,
                    setTimeout((function() {
                        n = !1
                    }
                    ), t))
                }
            }
        }
        , function(e) {
            var t = 400
              , n = 225
              , o = 40
              , r = 50
              , i = 5
              , a = "(max-width: 768px)"
              , l = "fluid_mini_player_mode"
              , d = "mini-player-close-button-wrapper"
              , s = "mini-player-close-button"
              , u = "fluidplayer-miniplayer-player-placeholder"
              , c = "disable-mini-player-mobile"
              , p = ".vast_clickthrough_layer"
              , f = ".fluid_nonLinear_ad img, .fluid_vpaid_nonlinear_slot_iframe"
              , _ = ".fluid_vpaidNonLinear_frame"
              , y = "miniPlayerToggle"
              , m = null
              , g = null
              , v = null
              , h = null
              , b = !1
              , w = null
              , A = !1
              , C = !1;
            function k(p) {
                var f = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e.debugMessage("[MiniPlayer] Toggling MiniPlayer, forceToggle: ".concat(p));
                var _, y = e.displayOptions.layoutControls.miniPlayer;
                y.enabled ? "on" === p && e.miniPlayerToggledOn || "off" === p && !e.miniPlayerToggledOn ? e.debugMessage("[MiniPlayer] Can't force toggle Mini Player to it's same state") : (f && R(),
                window.matchMedia(a).matches && (A = !0),
                e.resetDisplayMode("miniPlayer"),
                b || function() {
                    if (!Boolean(e.domRef.player.parentNode.querySelector(".".concat(s)))) {
                        var t = document.createElement("div");
                        t.classList.add(d);
                        var n = document.createElement("span");
                        n.classList.add(s),
                        n.addEventListener("click", (function() {
                            k("off", !0),
                            e.domRef.player.paused || e.playPauseToggle()
                        }
                        )),
                        t.appendChild(n),
                        e.domRef.player.parentNode.append(t)
                    }
                    var o, a, l, u;
                    A && (a = document.createElement("div"),
                    l = 0,
                    u = 0,
                    a.classList.add(c),
                    a.ontouchstart = function(e) {
                        o = !1,
                        e.timeStamp,
                        u = e.changedTouches[0].screenX,
                        e.preventDefault()
                    }
                    ,
                    a.ontouchmove = function(t) {
                        l = Math.min(Math.max(u - t.changedTouches[0].screenX, -1 * r), r),
                        Math.abs(l) > i ? (e.domRef.wrapper.style.transform = "translateX(".concat(-1 * l, "px)"),
                        o = !0) : e.domRef.wrapper.style.transform = "translateX(0px)"
                    }
                    ,
                    a.ontouchend = function(t) {
                        Math.abs(l) > i ? (k("off", !0),
                        e.domRef.player.paused || e.playPauseToggle(),
                        t.preventDefault()) : o || (k("off", !0),
                        setTimeout((function() {
                            e.domRef.wrapper.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            })
                        }
                        ))),
                        l = 0,
                        e.domRef.wrapper.style.transform = ""
                    }
                    ,
                    a.onmouseup = function() {
                        return k("off", !0)
                    }
                    ,
                    e.domRef.wrapper.insertBefore(a, e.domRef.player.nextSibling)),
                    b = !0
                }(),
                "off" === p || e.miniPlayerToggledOn ? (_ = e.domRef.wrapper,
                e.domRef.wrapper.parentElement.removeChild(w),
                w = null,
                _.classList.remove(l),
                _.style.width = "".concat(m, "px"),
                _.style.height = "".concat(g, "px"),
                m = null,
                g = null,
                T(),
                S(),
                e.miniPlayerToggledOn = !1,
                x()) : "on" !== p && e.miniPlayerToggledOn || function(r, i, a, d) {
                    var s, c, p = e.domRef.wrapper, f = r > t ? r : t, _ = i > n ? i : n, y = a > o ? a : o;
                    m = L(p, "width", "clientWidth"),
                    g = L(p, "height", "clientHeight"),
                    p.classList.add(l, "".concat(l, "--").concat(d.trim().replace(/\s/, "-"))),
                    A ? (p.style.width = "".concat(y, "vw"),
                    p.style.height = "auto",
                    p.style.aspectRatio = "16 / 9") : (p.style.width = "".concat(f, "px"),
                    p.style.height = "".concat(_, "px")),
                    s = m,
                    c = g,
                    (w = document.createElement("div")).classList.add(u),
                    w.style.height = "".concat(c, "px"),
                    w.style.width = "".concat(s, "px"),
                    w.innerText = e.displayOptions.layoutControls.miniPlayer.placeholderText || "",
                    w.onclick = function() {
                        return k("off", !0)
                    }
                    ,
                    e.domRef.wrapper.parentElement.insertBefore(w, e.domRef.wrapper),
                    T(f, _, y),
                    S(),
                    e.miniPlayerToggledOn = !0,
                    x()
                }(y.width, y.height, y.widthMobile, y.position)) : e.debugMessage("[MiniPlayer] Prevent toggle MiniPlayer, it's currently disabled")
            }
            function x() {
                e.domRef.player.dispatchEvent(new CustomEvent(y,{
                    detail: {
                        isToggledOn: e.miniPlayerToggledOn
                    }
                }))
            }
            function L(e, t, n) {
                return t && e.style[t] && e.style[t].match("px") ? parseInt(e.style[t]) : String(e[n]).match("px") ? parseInt(e[n]) : e[n]
            }
            function T(t, n, o) {
                var r = e.domRef.wrapper.querySelector(f)
                  , i = e.domRef.wrapper.querySelector(_);
                if (r) {
                    A && (t = window.innerWidth * o / 100);
                    var a = L(r, null, "width")
                      , l = L(r, null, "height");
                    if (v && h)
                        r.width = v,
                        r.height = h,
                        i && (i.style.width = "".concat(v, "px"),
                        i.style.height = "".concat(h, "px")),
                        v = h = null;
                    else if (a > t || l > n) {
                        var d = (t - (A ? 4 : 32)) / a;
                        v = a,
                        h = l,
                        r.width = Math.round(a * d),
                        r.height = Math.round(l * d),
                        i && (i.style.width = "".concat(Math.round(a * d), "px"),
                        i.style.height = "".concat(Math.round(l * d), "px"))
                    }
                }
            }
            function S() {
                var t = e.domRef.wrapper.querySelector(p);
                t && (t.style.width = "".concat(e.domRef.player.offsetWidth, "px"),
                t.style.height = "".concat(e.domRef.player.offsetHeight, "px"))
            }
            function R() {
                var t = e.displayOptions.layoutControls.miniPlayer.autoToggle;
                !C && t ? (C = !0,
                document.addEventListener("scroll", M, {
                    passive: !0
                })) : document.removeEventListener("scroll", M)
            }
            var M = e.throttle((function() {
                if (!e.domRef.player.paused) {
                    var t = e.isElementVisible(e.domRef.player)
                      , n = e.isElementVisible(e.domRef.wrapper.querySelector(".".concat(u)));
                    t || e.miniPlayerToggledOn ? n && e.miniPlayerToggledOn && k("off") : k("on")
                }
            }
            ), 1e3 / 60);
            e.toggleMiniPlayer = k,
            e.toggleMiniPlayerScreenDetection = R
        }
        ]
          , k = 0
          , x = function() {
            var e = this
              , t = this;
            t.domRef = {
                player: null
            },
            t.version = "3.32.0",
            t.homepage = "https://fluidplayer.com/?utm_source=player&utm_medium=context_menu&utm_campaign=organic",
            t.destructors = [],
            t.init = function(e, n) {
                for (var o, r = {
                    development: false,
                    debug: false
                }, i = 0, a = C; i < a.length; i++)
                    (0,
                    a[i])(t, r);
                if (e instanceof HTMLVideoElement)
                    o = e,
                    e.id || (e.id = "fluid_player_instance_" + (k++).toString());
                else {
                    if (!("string" == typeof e || e instanceof String))
                        throw "Invalid initializer - player target must be HTMLVideoElement or ID";
                    o = document.getElementById(e)
                }
                if (!o)
                    throw "Could not find a HTML node to attach to for target " + e + '"';
                if (o.classList.contains("js-fluid-player"))
                    throw "Invalid initializer - player target already is initialized";
                o.setAttribute("playsinline", ""),
                o.setAttribute("webkit-playsinline", ""),
                o.classList.add("js-fluid-player"),
                t.domRef.player = o,
                t.vrROTATION_POSITION = .1,
                t.vrROTATION_SPEED = 80,
                t.vrMode = !1,
                t.vrPanorama = null,
                t.vrViewer = null,
                t.vpaidTimer = null,
                t.vpaidAdUnit = null,
                t.vastOptions = null,
                t.videoPlayerId = o.id,
                t.originalSrc = t.getCurrentSrc(),
                t.isCurrentlyPlayingAd = !1,
                t.recentWaiting = !1,
                t.latestVolume = 1,
                t.currentVideoDuration = 0,
                t.firstPlayLaunched = !1,
                t.suppressClickthrough = !1,
                t.timelinePreviewData = [],
                t.mainVideoCurrentTime = 0,
                t.mainVideoDuration = 0,
                t.isTimer = !1,
                t.timer = null,
                t.timerPool = {},
                t.rollsById = {},
                t.adPool = {},
                t.adGroupedByRolls = {},
                t.onPauseRollAdPods = [],
                t.currentOnPauseRollAd = "",
                t.preRollAdsResolved = !1,
                t.preRollAdPods = [],
                t.preRollAdPodsLength = 0,
                t.preRollVastResolved = 0,
                t.temporaryAdPods = [],
                t.availableRolls = ["preRoll", "midRoll", "postRoll", "onPauseRoll"],
                t.supportedNonLinearAd = ["300x250", "468x60", "728x90"],
                t.autoplayAfterAd = !0,
                t.nonLinearDuration = 15,
                t.supportedStaticTypes = ["image/gif", "image/jpeg", "image/png"],
                t.inactivityTimeout = null,
                t.isUserActive = null,
                t.nonLinearVerticalAlign = "bottom",
                t.vpaidNonLinearCloseButton = !0,
                t.showTimeOnHover = !0,
                t.initialAnimationSet = !0,
                t.theatreMode = !1,
                t.theatreModeAdvanced = !1,
                t.fullscreenMode = !1,
                t.originalWidth = o.offsetWidth,
                t.originalHeight = o.offsetHeight,
                t.dashPlayer = !1,
                t.hlsPlayer = !1,
                t.dashScriptLoaded = !1,
                t.hlsScriptLoaded = !1,
                t.isPlayingMedia = !1,
                t.isSwitchingSource = !1,
                t.isLoading = !1,
                t.isInIframe = t.inIframe(),
                t.mainVideoReadyState = !1,
                t.xmlCollection = [],
                t.inLineFound = null,
                t.fluidStorage = {},
                t.fluidPseudoPause = !1,
                t.mobileInfo = t.getMobileOs(),
                t.events = {},
                t.timeSkipOffsetAmount = 10,
                t.displayOptions = {
                    layoutControls: {
                        mediaType: t.getCurrentSrcType(),
                        primaryColor: !1,
                        posterImage: !1,
                        posterImageSize: "contain",
                        adProgressColor: "#f9d300",
                        playButtonShowing: !0,
                        playPauseAnimation: !0,
                        closeButtonCaption: "Close",
                        fillToContainer: !1,
                        autoPlay: !1,
                        preload: "auto",
                        mute: !1,
                        loop: null,
                        keyboardControl: !0,
                        allowDownload: !1,
                        playbackRateEnabled: !1,
                        subtitlesEnabled: !1,
                        subtitlesOnByDefault: !0,
                        showCardBoardView: !1,
                        showCardBoardJoystick: !1,
                        allowTheatre: !0,
                        doubleclickFullscreen: !0,
                        theatreSettings: {
                            width: "100%",
                            height: "60%",
                            marginTop: 0,
                            horizontalAlign: "center",
                            keepPosition: !1
                        },
                        theatreAdvanced: !1,
                        title: null,
                        logo: {
                            imageUrl: null,
                            position: "top left",
                            clickUrl: null,
                            opacity: 1,
                            mouseOverImageUrl: null,
                            imageMargin: "2px",
                            hideWithControls: !1,
                            showOverAds: !1
                        },
                        controlBar: {
                            autoHide: !1,
                            autoHideTimeout: 3,
                            animated: !0,
                            playbackRates: ["x2", "x1.5", "x1", "x0.5"]
                        },
                        timelinePreview: {
                            spriteImage: !1,
                            spriteRelativePath: !1
                        },
                        htmlOnPauseBlock: {
                            html: null,
                            height: null,
                            width: null
                        },
                        layout: "default",
                        playerInitCallback: function() {},
                        persistentSettings: {
                            volume: !0,
                            quality: !0,
                            speed: !0,
                            theatre: !0
                        },
                        controlForwardBackward: {
                            show: !1,
                            doubleTapMobile: !0
                        },
                        contextMenu: {
                            controls: !0,
                            links: []
                        },
                        miniPlayer: {
                            enabled: !0,
                            width: 400,
                            height: 225,
                            widthMobile: 50,
                            placeholderText: "Playing in Miniplayer",
                            position: "bottom right",
                            autoToggle: !1
                        }
                    },
                    vastOptions: {
                        adList: {},
                        skipButtonCaption: "Skip ad in [seconds]",
                        skipButtonClickCaption: 'Skip Ad <span class="skip_button_icon"></span>',
                        adText: null,
                        adTextPosition: "top left",
                        adCTAText: "Visit now!",
                        adCTATextPosition: "bottom right",
                        adCTATextVast: !1,
                        adClickable: !0,
                        vastTimeout: 5e3,
                        showProgressbarMarkers: !1,
                        allowVPAID: !1,
                        showPlayButton: !1,
                        maxAllowedVastTagRedirects: 3,
                        vpaidTimeout: 3e3,
                        vastAdvanced: {
                            vastLoadedCallback: function() {},
                            noVastVideoCallback: function() {},
                            vastVideoSkippedCallback: function() {},
                            vastVideoEndedCallback: function() {}
                        }
                    },
                    captions: {
                        play: "Play",
                        pause: "Pause",
                        mute: "Mute",
                        unmute: "Unmute",
                        fullscreen: "Fullscreen",
                        subtitles: "Subtitles",
                        exitFullscreen: "Exit Fullscreen"
                    },
                    debug: false,
                    modules: {
                        configureHls: function(e) {
                            return e
                        },
                        onBeforeInitHls: function(e) {},
                        onAfterInitHls: function(e) {},
                        configureDash: function(e) {
                            return e
                        },
                        onBeforeInitDash: function(e) {},
                        onAfterInitDash: function(e) {}
                    },
                    onBeforeXMLHttpRequestOpen: function(e) {},
                    onBeforeXMLHttpRequest: function(e) {}
                },
                n.hlsjsConfig && console.error("[FP_ERROR] player option hlsjsConfig is removed and has no effect. Use module callbacks instead!"),
                function e(t, n) {
                    return Object.keys(n).forEach((function(o) {
                        "object" !== A(n[o]) || null === n[o] || Array.isArray(n[o]) ? void 0 !== n[o] && (t[o] = n[o]) : e(t[o], n[o])
                    }
                    )),
                    t
                }(t.displayOptions, n),
                t.domRef.wrapper = t.setupPlayerWrapper(),
                o.addEventListener("webkitfullscreenchange", t.recalculateAdDimensions),
                o.addEventListener("fullscreenchange", t.recalculateAdDimensions),
                o.addEventListener("waiting", t.onRecentWaiting),
                o.addEventListener("pause", t.onFluidPlayerPause),
                o.addEventListener("error", t.onErrorDetection),
                o.addEventListener("ended", t.onMainVideoEnded),
                o.addEventListener("durationchange", (function() {
                    t.currentVideoDuration = t.getCurrentVideoDuration()
                }
                )),
                o.readyState > 0 ? t.mainVideoReady() : o.addEventListener("loadedmetadata", t.mainVideoReady),
                t.displayOptions.layoutControls.showCardBoardView && o.setAttribute("crossOrigin", "anonymous"),
                t.currentVideoDuration = t.getCurrentVideoDuration(),
                !isNaN(t.currentVideoDuration) && isFinite(t.currentVideoDuration) || (t.currentVideoDuration = 0),
                t.setLayout(),
                t.latestVolume = o.volume,
                t.initialAnimationSet = t.displayOptions.layoutControls.playPauseAnimation,
                t.handleFullscreen(),
                t.initLogo(),
                t.initTitle(),
                t.initMute(),
                t.initLoop(),
                t.displayOptions.layoutControls.playerInitCallback(),
                t.createVideoSourceSwitch(),
                t.createSubtitles(),
                t.createCardboard(),
                t.userActivityChecker(),
                t.setVastList(),
                t.setPersistentSettings(),
                t.initialiseStreamers();
                var l = o.play;
                o.play = function() {
                    var e = null;
                    t.displayOptions.layoutControls.showCardBoardView && "undefined" != typeof DeviceOrientationEvent && "function" == typeof DeviceOrientationEvent.requestPermission && DeviceOrientationEvent.requestPermission().then((function(e) {
                        "granted" === e && t.debugMessage("DeviceOrientationEvent permission granted!")
                    }
                    )).catch(console.error);
                    try {
                        return null != (e = l.apply(this, arguments)) && (e.then((function() {
                            t.isPlayingMedia = !0,
                            clearTimeout(t.promiseTimeout)
                        }
                        )).catch((function(e) {
                            console.error("[FP_ERROR] Playback error", e),
                            void 0 !== e.name && "AbortError" === e.name || t.announceLocalError(202, "Failed to play video."),
                            clearTimeout(t.promiseTimeout)
                        }
                        )),
                        t.promiseTimeout = setTimeout((function() {
                            !1 === t.isPlayingMedia && t.announceLocalError(204, "[FP_ERROR] Timeout error. Failed to play video?")
                        }
                        ), 5e3)),
                        e
                    } catch (e) {
                        console.error("[FP_ERROR] Playback error", e),
                        t.announceLocalError(201, "Failed to play video.")
                    }
                }
                ;
                var d = o.pause;
                if (o.pause = function() {
                    if (!0 === t.isPlayingMedia)
                        return t.isPlayingMedia = !1,
                        d.apply(this, arguments);
                    if (t.isCurrentlyPlayingVideo(t.domRef.player))
                        try {
                            return t.isPlayingMedia = !1,
                            d.apply(this, arguments)
                        } catch (e) {
                            t.announceLocalError(203, "Failed to play video.")
                        }
                }
                ,
                t.displayOptions.layoutControls.autoPlay && !t.dashScriptLoaded && !t.hlsScriptLoaded) {
                    if ("Safari" === t.getBrowserVersion().browserName)
                        return;
                    o.play()
                }
                t.mobileInfo.userOs ? (t.hideControlBar(),
                t.domRef.wrapper.addEventListener("touchstart", t.showControlBar, {
                    passive: !0
                })) : (t.displayOptions.layoutControls.controlBar.autoHide || t.domRef.wrapper.addEventListener("mouseleave", t.handleMouseleave, !1),
                t.domRef.wrapper.addEventListener("mouseenter", t.showControlBar, !1),
                t.domRef.wrapper.addEventListener("mouseenter", t.showTitle, !1)),
                t.displayOptions.layoutControls.keyboardControl && t.keyboardControl(),
                t.displayOptions.layoutControls.controlBar.autoHide && t.linkControlBarUserActivity();
                try {
                    if (t.domRef.player.textTracks) {
                        var s, u = b(t.domRef.player.textTracks);
                        try {
                            for (u.s(); !(s = u.n()).done; )
                                s.value.mode = "hidden"
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                    }
                } catch (e) {}
            }
            ,
            t.getCurrentVideoDuration = function() {
                return t.domRef.player ? t.domRef.player.duration : 0
            }
            ,
            t.toggleLoader = function(e) {
                t.isLoading = !!e;
                var n = t.domRef.wrapper.querySelector(".vast_video_loading");
                n && (n.style.display = e ? "table" : "none")
            }
            ,
            t.sendRequest = function(e, n, o, r) {
                var i = new XMLHttpRequest;
                i.onreadystatechange = r,
                t.displayOptions.onBeforeXMLHttpRequestOpen(i),
                i.open("GET", e, !0),
                i.withCredentials = n,
                i.timeout = o,
                t.displayOptions.onBeforeXMLHttpRequest(i),
                i.send()
            }
            ,
            t.sendRequestAsync = function() {
                var e, n = (e = v().mark((function e(n, o, r) {
                    return v().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                new Promise((function(e, i) {
                                    var a = new XMLHttpRequest;
                                    a.onreadystatechange = function(t) {
                                        var n = t.target;
                                        4 === n.readyState && n.status >= 200 && n.status < 300 ? e(n) : 4 === n.readyState && i(n)
                                    }
                                    ,
                                    t.displayOptions.onBeforeXMLHttpRequestOpen(a),
                                    a.open("GET", n, !0),
                                    a.withCredentials = o,
                                    a.timeout = r,
                                    t.displayOptions.onBeforeXMLHttpRequest(a),
                                    a.send()
                                }
                                ));
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(o, r) {
                        var i = e.apply(t, n);
                        function a(e) {
                            h(i, o, r, a, l, "next", e)
                        }
                        function l(e) {
                            h(i, o, r, a, l, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                );
                return function(e, t, o) {
                    return n.apply(this, arguments)
                }
            }(),
            t.announceLocalError = function(e, t) {
                var n = "[Error] (" + (void 0 !== e ? parseInt(e) : 900) + "): ";
                n += t || "Failed to load Vast",
                console.warn(n)
            }
            ,
            t.debugMessage = function() {
                if (t.displayOptions.debug) {
                    for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                        o[r] = arguments[r];
                    (e = console).log.apply(e, ["%cFP DEBUG", "color: #fff; font-weight: bold; background-color: #1a5e87; padding: 3px 6px; border-radius: 3px;"].concat(o))
                }
            }
            ,
            t.onMainVideoEnded = function(e) {
                t.debugMessage("onMainVideoEnded is called"),
                t.isCurrentlyPlayingAd && t.autoplayAfterAd || (Math.floor(t.getCurrentTime()) >= Math.floor(t.mainVideoDuration) && (t.adKeytimePlay(Math.floor(t.mainVideoDuration)),
                clearInterval(t.timer)),
                t.displayOptions.layoutControls.loop && (t.switchToMainVideo(),
                t.playPauseToggle()))
            }
            ,
            t.getCurrentTime = function() {
                return t.isCurrentlyPlayingAd ? t.mainVideoCurrentTime : t.domRef.player.currentTime
            }
            ,
            t.getCurrentSrc = function() {
                var e = t.domRef.player.getElementsByTagName("source");
                return e.length ? e[0].getAttribute("src") : null
            }
            ,
            t.getCurrentSrcType = function() {
                var e = t.domRef.player.getElementsByTagName("source");
                if (!e.length)
                    return null;
                for (var n = 0; n < e.length; n++)
                    if (e[n].getAttribute("src") === t.originalSrc)
                        return e[n].getAttribute("type").toLowerCase();
                return null
            }
            ,
            t.onRecentWaiting = function() {
                t.recentWaiting = !0,
                setTimeout((function() {
                    t.recentWaiting = !1
                }
                ), 1e3)
            }
            ,
            t.onFluidPlayerPause = function() {
                setTimeout((function() {
                    if (!t.recentWaiting) {
                        var e = document.createEvent("CustomEvent");
                        e.initEvent("fluidplayerpause", !1, !0),
                        t.domRef.player.dispatchEvent(e)
                    }
                }
                ), 100)
            }
            ,
            t.checkShouldDisplayVolumeBar = function() {
                return "iOS" !== t.getMobileOs().userOs
            }
            ,
            t.generateCustomControlTags = function(e) {
                var t = {};
                return t.loader = document.createElement("div"),
                t.loader.className = "vast_video_loading",
                t.loader.style.display = "none",
                t.root = document.createElement("div"),
                t.root.className = "fluid_controls_container",
                e.displayVolumeBar || (t.root.className = t.root.className + " no_volume_bar"),
                e.controlForwardBackward && (t.root.className = t.root.className + " skip_controls"),
                t.leftContainer = document.createElement("div"),
                t.leftContainer.className = "fluid_controls_left",
                t.root.appendChild(t.leftContainer),
                t.playPause = document.createElement("div"),
                t.playPause.className = "fluid_button fluid_button_play fluid_control_playpause",
                t.leftContainer.appendChild(t.playPause),
                e.controlForwardBackward && (t.skipBack = document.createElement("div"),
                t.skipBack.className = "fluid_button fluid_button_skip_back",
                t.leftContainer.appendChild(t.skipBack),
                t.skipForward = document.createElement("div"),
                t.skipForward.className = "fluid_button fluid_button_skip_forward",
                t.leftContainer.appendChild(t.skipForward)),
                t.progressContainer = document.createElement("div"),
                t.progressContainer.className = "fluid_controls_progress_container fluid_slider",
                t.root.appendChild(t.progressContainer),
                t.progressWrapper = document.createElement("div"),
                t.progressWrapper.className = "fluid_controls_progress",
                t.progressContainer.appendChild(t.progressWrapper),
                t.progressCurrent = document.createElement("div"),
                t.progressCurrent.className = "fluid_controls_currentprogress",
                t.progressCurrent.style.backgroundColor = e.primaryColor,
                t.progressWrapper.appendChild(t.progressCurrent),
                t.progress_current_marker = document.createElement("div"),
                t.progress_current_marker.className = "fluid_controls_currentpos",
                t.progressCurrent.appendChild(t.progress_current_marker),
                t.bufferedIndicator = document.createElement("div"),
                t.bufferedIndicator.className = "fluid_controls_buffered",
                t.progressContainer.appendChild(t.bufferedIndicator),
                t.adMarkers = document.createElement("div"),
                t.adMarkers.className = "fluid_controls_ad_markers_holder",
                t.progressContainer.appendChild(t.adMarkers),
                t.rightContainer = document.createElement("div"),
                t.rightContainer.className = "fluid_controls_right",
                t.root.appendChild(t.rightContainer),
                t.fullscreen = document.createElement("div"),
                t.fullscreen.className = "fluid_button fluid_control_fullscreen fluid_button_fullscreen",
                t.rightContainer.appendChild(t.fullscreen),
                e.miniPlayer.enabled && (t.miniPlayer = document.createElement("div"),
                t.miniPlayer.className = "fluid_button fluid_control_mini_player fluid_button_mini_player",
                t.rightContainer.appendChild(t.miniPlayer)),
                t.theatre = document.createElement("div"),
                t.theatre.className = "fluid_button fluid_control_theatre fluid_button_theatre",
                t.rightContainer.appendChild(t.theatre),
                t.cardboard = document.createElement("div"),
                t.cardboard.className = "fluid_button fluid_control_cardboard fluid_button_cardboard",
                t.rightContainer.appendChild(t.cardboard),
                t.subtitles = document.createElement("div"),
                t.subtitles.className = "fluid_button fluid_control_subtitles fluid_button_subtitles",
                t.rightContainer.appendChild(t.subtitles),
                t.videoSource = document.createElement("div"),
                t.videoSource.className = "fluid_button fluid_control_video_source fluid_button_video_source",
                t.rightContainer.appendChild(t.videoSource),
                t.playbackRate = document.createElement("div"),
                t.playbackRate.className = "fluid_button fluid_control_playback_rate fluid_button_playback_rate",
                t.rightContainer.appendChild(t.playbackRate),
                t.download = document.createElement("div"),
                t.download.className = "fluid_button fluid_control_download fluid_button_download",
                t.rightContainer.appendChild(t.download),
                t.volumeContainer = document.createElement("div"),
                t.volumeContainer.className = "fluid_control_volume_container fluid_slider",
                t.rightContainer.appendChild(t.volumeContainer),
                t.volume = document.createElement("div"),
                t.volume.className = "fluid_control_volume",
                t.volumeContainer.appendChild(t.volume),
                t.volumeCurrent = document.createElement("div"),
                t.volumeCurrent.className = "fluid_control_currentvolume",
                t.volume.appendChild(t.volumeCurrent),
                t.volumeCurrentPos = document.createElement("div"),
                t.volumeCurrentPos.className = "fluid_control_volume_currentpos",
                t.volumeCurrent.appendChild(t.volumeCurrentPos),
                t.mute = document.createElement("div"),
                t.mute.className = "fluid_button fluid_button_volume fluid_control_mute",
                t.rightContainer.appendChild(t.mute),
                t.duration = document.createElement("div"),
                t.duration.className = "fluid_control_duration fluid_fluid_control_duration",
                t.duration.innerText = "00:00 / 00:00",
                t.rightContainer.appendChild(t.duration),
                t
            }
            ,
            t.controlPlayPauseToggle = function() {
                var e = t.domRef.player.parentNode.getElementsByClassName("fluid_control_playpause")
                  , n = t.domRef.wrapper.querySelector(".context_option_play")
                  , o = t.domRef.player.parentNode.getElementsByClassName("fluid_controls_container")
                  , r = t.domRef.wrapper.querySelector(".logo_holder");
                if (t.domRef.wrapper.querySelector(".fluid_initial_play") && (t.domRef.wrapper.querySelector(".fluid_initial_play").style.display = "none",
                t.domRef.wrapper.querySelector(".fluid_initial_play_button_container").style.opacity = "1"),
                !t.domRef.player.paused) {
                    for (var i = 0; i < e.length; i++)
                        e[i].className = e[i].className.replace(/\bfluid_button_play\b/g, "fluid_button_pause");
                    for (var a = 0; a < o.length; a++)
                        o[a].classList.remove("initial_controls_show");
                    return r && r.classList.remove("initial_controls_show"),
                    void (null !== n && (n.innerHTML = t.displayOptions.captions.pause))
                }
                for (var l = 0; l < e.length; l++)
                    e[l].className = e[l].className.replace(/\bfluid_button_pause\b/g, "fluid_button_play");
                for (var d = 0; d < o.length; d++)
                    o[d].classList.add("initial_controls_show");
                t.isCurrentlyPlayingAd && t.displayOptions.vastOptions.showPlayButton && (t.domRef.wrapper.querySelector(".fluid_initial_play").style.display = "block",
                t.domRef.wrapper.querySelector(".fluid_initial_play_button_container").style.opacity = "1"),
                r && r.classList.add("initial_controls_show"),
                null !== n && (n.innerHTML = t.displayOptions.captions.play)
            }
            ,
            t.playPauseAnimationToggle = function(e) {
                if (!t.isCurrentlyPlayingAd && t.displayOptions.layoutControls.playPauseAnimation && !t.isSwitchingSource) {
                    var n = t.domRef.wrapper.querySelector(".fluid_initial_play_button, .fluid_initial_pause_button");
                    e ? (n.classList.remove("fluid_initial_pause_button"),
                    n.classList.add("fluid_initial_play_button")) : (n.classList.remove("fluid_initial_play_button"),
                    n.classList.add("fluid_initial_pause_button")),
                    t.domRef.wrapper.querySelector(".fluid_initial_play").classList.add("transform-active"),
                    setTimeout((function() {
                        t.domRef.wrapper.querySelector(".fluid_initial_play").classList.remove("transform-active")
                    }
                    ), 800)
                }
            }
            ,
            t.contolProgressbarUpdate = function() {
                for (var e = t.domRef.player.parentNode.getElementsByClassName("fluid_controls_currentprogress"), n = 0; n < e.length; n++)
                    e[n].style.width = t.domRef.player.currentTime / t.currentVideoDuration * 100 + "%"
            }
            ,
            t.controlDurationUpdate = function() {
                var e, n = t.formatTime(t.domRef.player.currentTime), o = !1;
                t.hlsPlayer && (o = t.hlsPlayer.levels && t.hlsPlayer.levels[t.hlsPlayer.currentLevel] && t.hlsPlayer.levels[t.hlsPlayer.currentLevel].details.live),
                e = isNaN(t.currentVideoDuration) || !isFinite(t.currentVideoDuration) || o ? n : n + " / " + t.formatTime(t.currentVideoDuration);
                for (var r = t.domRef.player.parentNode.getElementsByClassName("fluid_control_duration"), i = 0; i < r.length; i++)
                    r[i].innerHTML = e
            }
            ,
            t.contolVolumebarUpdate = function() {
                var e = t.domRef.wrapper.querySelector(".fluid_control_currentvolume")
                  , n = t.domRef.wrapper.querySelector(".fluid_control_volume_currentpos")
                  , o = t.domRef.wrapper.querySelector(".fluid_control_volume").clientWidth
                  , r = n.clientWidth
                  , i = t.domRef.player.parentNode.getElementsByClassName("fluid_control_mute")
                  , a = t.domRef.wrapper.querySelector(".context_option_mute");
                if (0 !== t.domRef.player.volume ? (t.latestVolume = t.domRef.player.volume,
                t.fluidStorage.fluidMute = !1) : t.fluidStorage.fluidMute = !0,
                t.domRef.player.volume && !t.domRef.player.muted) {
                    for (var l = 0; l < i.length; l++)
                        i[l].className = i[l].className.replace(/\bfluid_button_mute\b/g, "fluid_button_volume");
                    null !== a && (a.innerHTML = t.displayOptions.captions.mute)
                } else {
                    for (var d = 0; d < i.length; d++)
                        i[d].className = i[d].className.replace(/\bfluid_button_volume\b/g, "fluid_button_mute");
                    null !== a && (a.innerHTML = t.displayOptions.captions.unmute)
                }
                e.style.width = t.domRef.player.volume * o + "px",
                n.style.left = t.domRef.player.volume * o - r / 2 + "px"
            }
            ,
            t.muteToggle = function() {
                0 === t.domRef.player.volume || t.domRef.player.muted ? (t.domRef.player.volume = t.latestVolume,
                t.domRef.player.muted = !1) : (t.domRef.player.volume = 0,
                t.domRef.player.muted = !0),
                t.fluidStorage.fluidVolume = t.latestVolume,
                t.fluidStorage.fluidMute = t.domRef.player.muted
            }
            ,
            t.checkFullscreenSupport = function() {
                var e = t.domRef.wrapper;
                return e.mozRequestFullScreen ? {
                    goFullscreen: "mozRequestFullScreen",
                    exitFullscreen: "mozCancelFullScreen",
                    isFullscreen: "mozFullScreenElement"
                } : e.webkitRequestFullscreen ? {
                    goFullscreen: "webkitRequestFullscreen",
                    exitFullscreen: "webkitExitFullscreen",
                    isFullscreen: "webkitFullscreenElement"
                } : e.msRequestFullscreen ? {
                    goFullscreen: "msRequestFullscreen",
                    exitFullscreen: "msExitFullscreen",
                    isFullscreen: "msFullscreenElement"
                } : e.requestFullscreen ? {
                    goFullscreen: "requestFullscreen",
                    exitFullscreen: "exitFullscreen",
                    isFullscreen: "fullscreenElement"
                } : !!t.domRef.player.webkitSupportsFullscreen && {
                    goFullscreen: "webkitEnterFullscreen",
                    exitFullscreen: "webkitExitFullscreen",
                    isFullscreen: "webkitDisplayingFullscreen"
                }
            }
            ,
            t.fullscreenOff = function(e, n) {
                for (var o = 0; o < e.length; o++)
                    e[o].className = e[o].className.replace(/\bfluid_button_fullscreen_exit\b/g, "fluid_button_fullscreen");
                null !== n && (n.innerHTML = "Fullscreen"),
                t.fullscreenMode = !1
            }
            ,
            t.fullscreenOn = function(e, n) {
                for (var o = 0; o < e.length; o++)
                    e[o].className = e[o].className.replace(/\bfluid_button_fullscreen\b/g, "fluid_button_fullscreen_exit");
                null !== n && (n.innerHTML = t.displayOptions.captions.exitFullscreen),
                t.fullscreenMode = !0
            }
            ,
            t.fullscreenToggle = function() {
                t.debugMessage("Toggling Full Screen");
                var e, n = t.domRef.player, o = t.domRef.wrapper, r = t.checkFullscreenSupport(), i = n.parentNode.getElementsByClassName("fluid_control_fullscreen"), a = o.querySelector(".context_option_fullscreen");
                t.resetDisplayMode("fullScreen"),
                r ? "webkitEnterFullscreen" === r.goFullscreen ? n[r.isFullscreen] || (e = "videoPlayerTag." + r.goFullscreen + "();",
                t.fullscreenOn(i, a),
                new Function("videoPlayerTag",e)(n)) : (null === document[r.isFullscreen] ? (e = "videoPlayerTag." + r.goFullscreen + "();",
                t.fullscreenOn(i, a)) : (e = "document." + r.exitFullscreen + "();",
                t.fullscreenOff(i, a)),
                new Function("videoPlayerTag",e)(o)) : -1 !== o.className.search(/\bpseudo_fullscreen\b/g) ? (o.className = o.className.replace(/\bpseudo_fullscreen\b/g, ""),
                t.fullscreenOff(i, a)) : (o.className += " pseudo_fullscreen",
                t.fullscreenOn(i, a)),
                t.resizeVpaidAuto(),
                t.domRef.player.addEventListener("webkitendfullscreen", (function() {
                    t.fullscreenOff(i, a)
                }
                ))
            }
            ,
            t.findClosestParent = function(e, t) {
                var n, o = null;
                if (["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some((function(e) {
                    return "function" == typeof document.body[e] && (o = e,
                    !0)
                }
                )),
                e[o](t))
                    return e;
                for (; e; ) {
                    if ((n = e.parentElement) && n[o](t))
                        return n;
                    e = n
                }
                return null
            }
            ,
            t.getTranslateX = function(e) {
                var t = null;
                try {
                    var n = e.style.transform.match(/translate3d\((-?\d+px,\s?){2}-?\d+px\)/);
                    n && n.length && (t = n[0].replace("translate3d(", "").replace(")", "").replace(/\s/g, "").replace(/px/g, "").split(","))
                } catch (e) {
                    t = null
                }
                return t && 3 === t.length ? parseInt(t[0]) : 0
            }
            ,
            t.getEventOffsetX = function(e, n) {
                for (var o = 0, r = 0; n && !isNaN(n.offsetLeft); )
                    r = t.getTranslateX(n),
                    "BODY" === n.tagName ? o += n.offsetLeft + n.clientLeft + r - (n.scrollLeft || document.documentElement.scrollLeft) : o += n.offsetLeft + n.clientLeft + r - n.scrollLeft,
                    n = n.offsetParent;
                return (void 0 !== e.touches && void 0 !== e.touches[0] ? e.touches[0].clientX : e.clientX) - o
            }
            ,
            t.getEventOffsetY = function(e, n) {
                var o = 1
                  , r = t.checkFullscreenSupport();
                r && document[r.isFullscreen] && (o = 0);
                for (var i = 0; n && !isNaN(n.offsetTop); )
                    "BODY" === n.tagName ? i += n.offsetTop - (n.scrollTop || document.documentElement.scrollTop) * o : i += n.offsetTop - n.scrollTop * o,
                    n = n.offsetParent;
                return e.clientY - i
            }
            ,
            t.onProgressbarMouseDown = function(e) {
                var n;
                if (t.displayOptions.layoutControls.playPauseAnimation = !1,
                n = t.displayOptions.layoutControls.showCardBoardView ? t.getEventOffsetX(e, e.target.parentNode) : t.getEventOffsetX(e, t.domRef.wrapper.querySelector(".fluid_controls_progress_container")),
                !t.isCurrentlyPlayingAd) {
                    t.fluidPseudoPause = !0;
                    var o = t.domRef.player.paused;
                    o || t.domRef.player.pause();
                    var r = function(e) {
                        var n = t.domRef.wrapper.querySelector(".fluid_controls_progress_container").clientWidth;
                        n && (t.domRef.player.currentTime = t.currentVideoDuration * e / n)
                    }
                      , i = function(e) {
                        var o = t.getEventOffsetX(e, e.target.parentNode);
                        n = NaN,
                        r(o),
                        t.contolProgressbarUpdate(),
                        t.controlDurationUpdate()
                    }
                      , a = function e(a) {
                        document.removeEventListener("mousemove", i),
                        document.removeEventListener("touchmove", i),
                        document.removeEventListener("mouseup", e),
                        document.removeEventListener("touchend", e);
                        var l = t.getEventOffsetX(a, a.target.parentNode);
                        isNaN(l) && !isNaN(n) && (l = n),
                        isNaN(l) || r(l),
                        o || t.play(),
                        t.initialAnimationSet && setTimeout((function() {
                            t.displayOptions.layoutControls.playPauseAnimation = t.initialAnimationSet
                        }
                        ), 200),
                        t.fluidPseudoPause = !1
                    };
                    document.addEventListener("mouseup", a),
                    document.addEventListener("touchend", a, {
                        passive: !0
                    }),
                    document.addEventListener("mousemove", i),
                    document.addEventListener("touchmove", i, {
                        passive: !0
                    })
                }
            }
            ,
            t.onVolumeBarMouseDown = function() {
                var e = function(e) {
                    var n = t.domRef.controls.volumeContainer.clientWidth;
                    if (n) {
                        var o = e / n;
                        o < .05 ? (o = 0,
                        t.domRef.player.muted = !0) : o > .95 && (o = 1),
                        t.domRef.player.muted && o > 0 && (t.domRef.player.muted = !1),
                        t.setVolume(o)
                    }
                }
                  , n = function(n) {
                    var o = t.getEventOffsetX(n, t.domRef.controls.volumeContainer);
                    e(o)
                }
                  , o = function o(r) {
                    document.removeEventListener("mousemove", n),
                    document.removeEventListener("touchmove", n),
                    document.removeEventListener("mouseup", o),
                    document.removeEventListener("touchend", o);
                    var i = t.getEventOffsetX(r, t.domRef.controls.volumeContainer);
                    isNaN(i) || e(i)
                };
                document.addEventListener("mouseup", o),
                document.addEventListener("touchend", o, {
                    passive: !0
                }),
                document.addEventListener("mousemove", n),
                document.addEventListener("touchmove", n, {
                    passive: !0
                })
            }
            ,
            t.findRoll = function(e) {
                var n = [];
                if (n.length = 0,
                e && t.hasOwnProperty("rollsById")) {
                    for (var o in t.rollsById)
                        t.rollsById.hasOwnProperty(o) && t.rollsById[o].roll === e && n.push(o);
                    return n
                }
            }
            ,
            t.onKeyboardVolumeChange = function(e) {
                var n = t.domRef.player.volume;
                "asc" === e ? n += .05 : "desc" === e && (n -= .05),
                n < .05 ? n = 0 : n > .95 && (n = 1),
                t.setVolume(n)
            }
            ,
            t.onKeyboardSeekPosition = function(e) {
                t.isCurrentlyPlayingAd || (t.domRef.player.currentTime = t.getNewCurrentTimeValueByKeyCode(e, t.domRef.player.currentTime, t.domRef.player.duration))
            }
            ,
            t.getNewCurrentTimeValueByKeyCode = function(e, t, n) {
                var o = t;
                switch (e) {
                case 35:
                    o = n;
                    break;
                case 36:
                    o = 0;
                    break;
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    e < 58 && e > 47 && (o = n * (10 * (e - 48)) / 100)
                }
                return o
            }
            ,
            t.handleMouseleave = function(e) {
                void 0 !== e.clientX && t.domRef.wrapper.contains(document.elementFromPoint(e.clientX, e.clientY)) || (t.hideControlBar(),
                t.hideTitle())
            }
            ,
            t.handleMouseenterForKeyboard = function() {
                t.captureKey || (t.captureKey = function(e) {
                    e.stopPropagation();
                    var n = e.keyCode;
                    switch (n) {
                    case 70:
                        t.fullscreenToggle(),
                        e.preventDefault();
                        break;
                    case 13:
                    case 32:
                        t.playPauseToggle(),
                        e.preventDefault();
                        break;
                    case 77:
                        t.muteToggle(),
                        e.preventDefault();
                        break;
                    case 38:
                        t.onKeyboardVolumeChange("asc"),
                        e.preventDefault();
                        break;
                    case 40:
                        t.onKeyboardVolumeChange("desc"),
                        e.preventDefault();
                        break;
                    case 37:
                        t.skipRelative(-t.timeSkipOffsetAmount);
                        break;
                    case 39:
                        t.skipRelative(t.timeSkipOffsetAmount);
                        break;
                    case 35:
                    case 36:
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        t.onKeyboardSeekPosition(n),
                        e.preventDefault();
                        break;
                    case 73:
                        t.toggleMiniPlayer(void 0, !0)
                    }
                    return !1
                }
                ,
                document.addEventListener("keydown", t.captureKey, !0))
            }
            ,
            t.keyboardControl = function() {
                t.domRef.wrapper.addEventListener("click", t.handleMouseenterForKeyboard, !1);
                var e = t.handleWindowClick.bind(t);
                t.destructors.push((function() {
                    window.removeEventListener("click", e)
                }
                )),
                window.addEventListener("click", e)
            }
            ,
            t.handleWindowClick = function(e) {
                t.domRef.wrapper ? t.domRef.wrapper.contains(e.target) || e.target.classList.contains(".js-skipHref") || (document.removeEventListener("keydown", t.captureKey, !0),
                delete t.captureKey,
                t.theatreMode && !t.theatreModeAdvanced && t.theatreToggle()) : console.warn("Dangling click event listener should be collected for unknown wrapper.Did you forget to call destroy on player instance?")
            }
            ,
            t.initialPlay = function() {
                if (t.domRef.player.addEventListener("playing", (function() {
                    t.toggleLoader(!1)
                }
                )),
                t.domRef.player.addEventListener("timeupdate", (function() {
                    t.toggleLoader(!1)
                }
                )),
                t.domRef.player.addEventListener("waiting", (function() {
                    t.toggleLoader(!0)
                }
                )),
                !t.displayOptions.layoutControls.playButtonShowing) {
                    t.domRef.wrapper.querySelector(".fluid_controls_container").classList.remove("initial_controls_show");
                    var e = t.domRef.wrapper.querySelector(".logo_holder");
                    e && e.classList.remove("initial_controls_show")
                }
                t.firstPlayLaunched || (t.playPauseToggle(),
                t.domRef.player.removeEventListener("play", t.initialPlay))
            }
            ,
            t.playPauseToggle = function() {
                var e = !t.firstPlayLaunched
                  , n = t.findRoll("preRoll");
                if (e && 0 !== n.length) {
                    t.isCurrentlyPlayingAd = !0;
                    var o = t.getBrowserVersion()
                      , r = !1 !== t.mobileInfo.userOs && "Android" === t.mobileInfo.userOs && "Google Chrome" === o.browserName;
                    ("Safari" === o.browserName || r) && (t.domRef.player.src = "https://cdn.fluidplayer.com/static/blank.mp4",
                    t.domRef.player.play(),
                    t.playPauseAnimationToggle(!0)),
                    t.firstPlayLaunched = !0,
                    t.prepareVast("preRoll"),
                    t.preRollAdPodsLength = n.length
                } else
                    e && 0 === n.length && (t.firstPlayLaunched = !0,
                    t.displayOptions.vastOptions.vastAdvanced.noVastVideoCallback()),
                    t.domRef.player.paused ? (t.isCurrentlyPlayingAd && null !== t.vastOptions && t.vastOptions.vpaid ? t.resumeVpaidAd() : (Math.floor(t.currentVideoDuration) === Math.floor(t.domRef.player.currentTime) && (t.initialiseStreamers(),
                    t.domRef.player.currentTime = 0),
                    t.dashPlayer ? t.dashPlayer.play() : t.domRef.player.play()),
                    t.playPauseAnimationToggle(!0)) : e || (t.isCurrentlyPlayingAd && null !== t.vastOptions && t.vastOptions.vpaid ? t.pauseVpaidAd() : t.domRef.player.pause(),
                    t.playPauseAnimationToggle(!1)),
                    t.toggleOnPauseAd();
                var i = function() {
                    t.prepareVast("onPauseRoll"),
                    t.scheduleOnDemandRolls()
                };
                if (e) {
                    var a = t.domRef.wrapper.querySelector(".fluid_pseudo_poster");
                    a && a.parentNode.removeChild(a),
                    t.mainVideoDuration > 0 ? i() : t.domRef.player.addEventListener("mainVideoDurationSet", i)
                }
                t.adTimer();
                var l = t.domRef.wrapper.querySelector(".fluid_html_on_pause_container");
                l && !t.isCurrentlyPlayingAd && (t.domRef.player.paused ? l.style.display = "flex" : l.style.display = "none")
            }
            ,
            t.setCustomControls = function() {
                t.trackEvent(t.domRef.player.parentNode, "click", ".fluid_control_playpause", (function() {
                    t.firstPlayLaunched || t.domRef.player.removeEventListener("play", t.initialPlay),
                    t.playPauseToggle()
                }
                ), !1),
                t.domRef.player.addEventListener("play", (function() {
                    t.controlPlayPauseToggle(),
                    t.contolVolumebarUpdate()
                }
                ), !1),
                t.domRef.player.addEventListener("fluidplayerpause", (function() {
                    t.controlPlayPauseToggle()
                }
                ), !1),
                t.domRef.player.addEventListener("timeupdate", (function() {
                    t.contolProgressbarUpdate(),
                    t.controlDurationUpdate()
                }
                ));
                var e = t.getMobileOs().userOs ? "touchstart" : "mousedown";
                t.displayOptions.layoutControls.showCardBoardView ? t.trackEvent(t.domRef.player.parentNode, e, ".fluid_controls_progress_container", (function(e) {
                    return t.onProgressbarMouseDown(e)
                }
                ), !1) : t.domRef.wrapper.querySelector(".fluid_controls_progress_container").addEventListener(e, (function(e) {
                    return t.onProgressbarMouseDown(e)
                }
                ), {
                    passive: !0
                }),
                t.domRef.wrapper.querySelector(".fluid_control_volume_container").addEventListener(e, (function(e) {
                    return t.onVolumeBarMouseDown()
                }
                ), {
                    passive: !0
                }),
                t.domRef.player.addEventListener("volumechange", (function() {
                    return t.contolVolumebarUpdate()
                }
                )),
                t.trackEvent(t.domRef.player.parentNode, "click", ".fluid_control_mute", (function() {
                    return t.muteToggle()
                }
                )),
                t.setBuffering(),
                t.trackEvent(t.domRef.player.parentNode, "click", ".fluid_control_fullscreen", (function() {
                    return t.fullscreenToggle()
                }
                )),
                t.displayOptions.layoutControls.allowTheatre && !t.isInIframe ? (t.domRef.wrapper.querySelector(".fluid_control_theatre").style.display = "inline-block",
                t.trackEvent(t.domRef.player.parentNode, "click", ".fluid_control_theatre", (function() {
                    return t.theatreToggle()
                }
                ))) : t.domRef.wrapper.querySelector(".fluid_control_theatre").style.display = "none",
                t.displayOptions.layoutControls.miniPlayer.enabled && !t.isInIframe && t.trackEvent(t.domRef.player.parentNode, "click", ".fluid_control_mini_player", (function() {
                    return t.toggleMiniPlayer(void 0, !0)
                }
                )),
                t.domRef.player.addEventListener("ratechange", (function() {
                    t.isCurrentlyPlayingAd && (t.playbackRate = 1)
                }
                ))
            }
            ,
            t.createTimePositionPreview = function() {
                if (t.showTimeOnHover) {
                    var e = t.domRef.wrapper.querySelector(".fluid_controls_progress_container")
                      , n = document.createElement("div");
                    n.className = "fluid_timeline_preview",
                    n.style.display = "none",
                    n.style.position = "absolute",
                    e.appendChild(n),
                    t.domRef.wrapper.querySelector(".fluid_controls_progress_container").addEventListener("mousemove", (function(e) {
                        var n = t.domRef.wrapper.querySelector(".fluid_controls_progress_container")
                          , o = n.clientWidth
                          , r = t.domRef.wrapper.querySelector(".fluid_timeline_preview")
                          , i = t.getEventOffsetX(e, n)
                          , a = t.currentVideoDuration * i / o;
                        r.innerText = t.formatTime(a),
                        r.style.display = "block",
                        r.style.left = a / t.domRef.player.duration * 100 + "%"
                    }
                    ), !1),
                    t.domRef.wrapper.querySelector(".fluid_controls_progress_container").addEventListener("mouseout", (function() {
                        t.domRef.wrapper.querySelector(".fluid_timeline_preview").style.display = "none"
                    }
                    ), !1)
                }
            }
            ,
            t.setCustomContextMenu = function() {
                var e = t.domRef.wrapper
                  , n = t.displayOptions.layoutControls.contextMenu.controls
                  , o = t.displayOptions.layoutControls.contextMenu.links
                  , r = document.createElement("div");
                r.className = "fluid_context_menu",
                r.style.display = "none",
                r.style.position = "absolute";
                var i = document.createElement("ul");
                if (r.appendChild(i),
                Array.isArray(o) && o.forEach((function(e, t) {
                    var n = document.createElement("li");
                    n.innerHTML = e.label,
                    n.addEventListener("click", (function() {
                        return window.open(e.href, "_blank")
                    }
                    ), !1),
                    i.appendChild(n)
                }
                )),
                n) {
                    var a = document.createElement("li");
                    a.className = "context_option_play",
                    a.innerHTML = t.displayOptions.captions.play,
                    a.addEventListener("click", (function() {
                        return t.playPauseToggle()
                    }
                    ), !1),
                    i.appendChild(a);
                    var l = document.createElement("li");
                    l.className = "context_option_mute",
                    l.innerHTML = t.displayOptions.captions.mute,
                    l.addEventListener("click", (function() {
                        return t.muteToggle()
                    }
                    ), !1),
                    i.appendChild(l);
                    var d = document.createElement("li");
                    d.className = "context_option_fullscreen",
                    d.innerHTML = t.displayOptions.captions.fullscreen,
                    d.addEventListener("click", (function() {
                        return t.fullscreenToggle()
                    }
                    ), !1),
                    i.appendChild(d)
                }
                var s = document.createElement("li");
                s.innerHTML = "Fluid Player " + t.version,
                s.addEventListener("click", (function() {
                    return window.open(t.homepage, "_blank")
                }
                ), !1),
                i.appendChild(s),
                t.domRef.player.parentNode.insertBefore(r, t.domRef.player.nextSibling),
                e.addEventListener("contextmenu", (function(e) {
                    e.preventDefault(),
                    r.style.left = t.getEventOffsetX(e, t.domRef.player) + "px",
                    r.style.top = t.getEventOffsetY(e, t.domRef.player) + "px",
                    r.style.display = "block"
                }
                ), !1),
                document.addEventListener("click", (function(e) {
                    e.target === t.domRef.player && 2 === e.button || (r.style.display = "none")
                }
                ), !1)
            }
            ,
            t.setDefaultLayout = function() {
                t.domRef.wrapper.className += " fluid_player_layout_" + t.displayOptions.layoutControls.layout,
                t.setCustomContextMenu();
                var e = t.generateCustomControlTags({
                    displayVolumeBar: t.checkShouldDisplayVolumeBar(),
                    primaryColor: t.displayOptions.layoutControls.primaryColor ? t.displayOptions.layoutControls.primaryColor : "red",
                    controlForwardBackward: !!t.displayOptions.layoutControls.controlForwardBackward.show,
                    miniPlayer: t.displayOptions.layoutControls.miniPlayer
                });
                t.domRef.player.removeAttribute("controls"),
                t.domRef.player.parentNode.insertBefore(e.root, t.domRef.player.nextSibling),
                t.domRef.player.parentNode.insertBefore(e.loader, t.domRef.player.nextSibling),
                t.domRef.controls = e;
                var n = 100
                  , o = setInterval((function() {
                    n ? t.checkIfVolumebarIsRendered() ? (clearInterval(o),
                    t.contolVolumebarUpdate()) : n-- : clearInterval(o)
                }
                ), 100);
                t.destructors.push((function() {
                    return clearInterval(o)
                }
                )),
                !t.displayOptions.layoutControls.doubleclickFullscreen || t.isTouchDevice() || t.displayOptions.layoutControls.controlForwardBackward.doubleTapMobile || t.domRef.player.addEventListener("dblclick", t.fullscreenToggle),
                t.initHtmlOnPauseBlock(),
                t.setCustomControls(),
                t.setupThumbnailPreview(),
                t.createTimePositionPreview(),
                t.posterImage(),
                t.initPlayButton(),
                t.setVideoPreload(),
                t.createPlaybackList(),
                t.createDownload(),
                t.toggleMiniPlayerScreenDetection(),
                t.displayOptions.layoutControls.controlForwardBackward.show && t.initSkipControls(),
                t.displayOptions.layoutControls.controlForwardBackward.doubleTapMobile && t.initDoubleTapSkip(),
                t.initSkipAnimationElements()
            }
            ,
            t.initSkipControls = function() {
                t.domRef.controls.skipBack.addEventListener("click", t.skipRelative.bind(e, -t.timeSkipOffsetAmount)),
                t.domRef.controls.skipForward.addEventListener("click", t.skipRelative.bind(e, t.timeSkipOffsetAmount))
            }
            ,
            t.initSkipAnimationElements = function() {
                var e = document.createElement("div");
                e.classList.add("fluid_player_skip_offset");
                var n = document.createElement("div");
                n.classList.add("fluid_player_skip_offset__backward"),
                e.appendChild(n);
                var o = document.createElement("div");
                o.classList.add("fluid_player_skip_offset__backward-icon"),
                o.ontransitionend = function() {
                    return o.classList.remove("animate")
                }
                ,
                n.appendChild(o);
                var r = document.createElement("div");
                r.classList.add("fluid_player_skip_offset__forward"),
                e.appendChild(r);
                var i = document.createElement("div");
                i.classList.add("fluid_player_skip_offset__forward-icon"),
                i.ontransitionend = function() {
                    return i.classList.remove("animate")
                }
                ,
                r.appendChild(i),
                t.domRef.player.parentNode.insertBefore(e, t.domRef.player.nextSibling)
            }
            ,
            t.initDoubleTapSkip = function() {
                var e = !1
                  , n = [];
                t.domRef.player.addEventListener("click", (function(o) {
                    if (t.isTouchDevice()) {
                        var r = o.offsetX
                          , i = t.domRef.player.clientWidth;
                        if (n.push(setTimeout((function() {
                            e = !1,
                            t.playPauseToggle()
                        }
                        ), 300)),
                        e)
                            return n.forEach((function(e) {
                                return clearTimeout(e)
                            }
                            )),
                            n = [],
                            e = !1,
                            t.skipRelative(r < i / 2 ? -t.timeSkipOffsetAmount : t.timeSkipOffsetAmount);
                        e = !0
                    }
                }
                ))
            }
            ,
            t.skipRelative = function(e) {
                if (t.debugMessage("skipping video time by ", e),
                !t.isCurrentlyPlayingAd) {
                    var n = t.domRef.player.currentTime + e;
                    n < 0 && (n = 0),
                    t.domRef.player.currentTime = n,
                    e >= 0 ? t.domRef.wrapper.querySelector(".fluid_player_skip_offset__forward-icon").classList.add("animate") : t.domRef.wrapper.querySelector(".fluid_player_skip_offset__backward-icon").classList.add("animate")
                }
            }
            ,
            t.checkIfVolumebarIsRendered = function() {
                var e = t.domRef.wrapper.querySelector(".fluid_control_volume_currentpos")
                  , n = t.domRef.wrapper.querySelector(".fluid_control_volume").clientWidth;
                return e.clientWidth !== n
            }
            ,
            t.setLayout = function() {
                t.isTouchDevice() || t.domRef.player.addEventListener("click", (function() {
                    return t.playPauseToggle()
                }
                ), !1),
                t.domRef.player.addEventListener("play", t.initialPlay, !1),
                t.setDefaultLayout()
            }
            ,
            t.handleFullscreen = function() {
                void 0 === document.vastFullsreenChangeEventListenersAdded && (["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange"].forEach((function(e) {
                    "object" === A(document["on" + e]) && document.addEventListener(e, (function(e) {
                        t.recalculateAdDimensions()
                    }
                    ), !1)
                }
                )),
                document.vastFullsreenChangeEventListenersAdded = !0)
            }
            ,
            t.setupPlayerWrapper = function() {
                var e = document.createElement("div");
                return e.id = "fluid_video_wrapper_" + t.videoPlayerId,
                e.className = t.isTouchDevice() ? "fluid_video_wrapper mobile" : "fluid_video_wrapper",
                t.displayOptions.layoutControls.fillToContainer ? (e.style.width = "100%",
                e.style.height = "100%") : (e.style.height = t.domRef.player.clientHeight + "px",
                e.style.width = t.domRef.player.clientWidth + "px"),
                t.domRef.player.style.height = "100%",
                t.domRef.player.style.width = "100%",
                t.domRef.player.parentNode.insertBefore(e, t.domRef.player),
                e.appendChild(t.domRef.player),
                e
            }
            ,
            t.onErrorDetection = function() {
                t.domRef.player.networkState === t.domRef.player.NETWORK_NO_SOURCE && t.isCurrentlyPlayingAd && t.playMainVideoWhenVastFails(401)
            }
            ,
            t.createVideoSourceSwitch = function() {
                var e = []
                  , n = t.domRef.player.querySelectorAll("source");
                if ([].forEach.call(n, (function(t) {
                    t.title && t.src && e.push({
                        title: t.title,
                        url: t.src,
                        isHD: null != t.getAttribute("data-fluid-hd")
                    })
                }
                )),
                t.videoSources = e,
                !(t.videoSources.length <= 1)) {
                    var o = t.domRef.wrapper.querySelector(".fluid_control_video_source");
                    o.style.display = "inline-block";
                    var r = !1
                      , i = document.createElement("div");
                    i.className = "fluid_video_sources_list",
                    i.style.display = "none";
                    var a, l = !0, d = b(t.videoSources);
                    try {
                        for (d.s(); !(a = d.n()).done; ) {
                            var s = a.value
                              , u = s.url.split(".").pop();
                            if ("iOS" !== t.mobileInfo.userOs || "mkv" !== u) {
                                var c = l ? "source_selected" : ""
                                  , p = s.isHD ? '<sup style="color:' + t.displayOptions.layoutControls.primaryColor + '" class="fp_hd_source"></sup>' : "";
                                l = !1;
                                var f = document.createElement("div");
                                f.className = "fluid_video_source_list_item js-source_" + s.title,
                                f.innerHTML = '<span class="source_button_icon ' + c + '"></span>' + s.title + p,
                                f.addEventListener("click", (function(e) {
                                    e.stopPropagation(),
                                    t.domRef.player.style.width = t.domRef.player.clientWidth + "px",
                                    t.domRef.player.style.height = t.domRef.player.clientHeight + "px";
                                    for (var n = this, o = t.domRef.wrapper.getElementsByClassName("source_button_icon"), r = 0; r < o.length; r++)
                                        o[r].className = o[r].className.replace("source_selected", "");
                                    n.firstChild.className += " source_selected",
                                    t.videoSources.forEach((function(e) {
                                        e.title === n.innerText.replace(/(\r\n\t|\n|\r\t)/gm, "") && (t.setBuffering(),
                                        t.setVideoSource(e.url),
                                        t.fluidStorage.fluidQuality = e.title)
                                    }
                                    )),
                                    t.openCloseVideoSourceSwitch()
                                }
                                )),
                                i.appendChild(f),
                                r = !0
                            }
                        }
                    } catch (e) {
                        d.e(e)
                    } finally {
                        d.f()
                    }
                    r ? (o.appendChild(i),
                    o.addEventListener("click", (function() {
                        t.openCloseVideoSourceSwitch()
                    }
                    ))) : t.domRef.wrapper.querySelector(".fluid_control_video_source").style.display = "none"
                }
            }
            ,
            t.openCloseVideoSourceSwitch = function() {
                var e = t.domRef.wrapper.querySelector(".fluid_video_sources_list");
                t.isCurrentlyPlayingAd ? e.style.display = "none" : "none" === e.style.display ? (e.style.display = "block",
                e.addEventListener("mouseleave", (function t() {
                    e.removeEventListener("mouseleave", t),
                    e.style.display = "none"
                }
                ))) : e.style.display = "none"
            }
            ,
            t.setVideoSource = function(e) {
                if ("iOS" === t.mobileInfo.userOs && e.indexOf(".mkv") > 0)
                    return console.log("[FP_ERROR] .mkv files not supported by iOS devices."),
                    !1;
                if (t.isCurrentlyPlayingAd)
                    t.originalSrc = e;
                else {
                    t.isSwitchingSource = !0;
                    var n = !1;
                    t.domRef.player.paused || (t.domRef.player.pause(),
                    n = !0);
                    var o = t.domRef.player.currentTime;
                    t.setCurrentTimeAndPlay(o, n),
                    t.domRef.player.src = e,
                    t.originalSrc = e,
                    t.displayOptions.layoutControls.mediaType = t.getCurrentSrcType(),
                    t.initialiseStreamers()
                }
            }
            ,
            t.setCurrentTimeAndPlay = function(e, n) {
                var o = function n() {
                    t.currentTime = e,
                    t.domRef.player.removeEventListener("playing", n)
                };
                t.domRef.player.addEventListener("loadedmetadata", (function r() {
                    t.domRef.player.currentTime = e,
                    t.domRef.player.removeEventListener("loadedmetadata", r),
                    "iOS" !== t.mobileInfo.userOs && "safari" !== t.getBrowserVersion().browserName.toLowerCase() || t.domRef.player.addEventListener("playing", o),
                    n ? t.domRef.player.play() : (t.domRef.player.pause(),
                    t.controlPlayPauseToggle()),
                    t.isSwitchingSource = !1,
                    t.domRef.player.style.width = "100%",
                    t.domRef.player.style.height = "100%"
                }
                ), !1),
                t.domRef.player.load()
            }
            ,
            t.initTitle = function() {
                if (t.displayOptions.layoutControls.title) {
                    var e = document.createElement("div");
                    t.domRef.player.parentNode.insertBefore(e, null),
                    e.innerHTML += t.displayOptions.layoutControls.title,
                    e.classList.add("fp_title")
                }
            }
            ,
            t.hasTitle = function() {
                var e = t.domRef.wrapper.querySelector(".fp_title")
                  , n = t.displayOptions.layoutControls.title;
                return e && null != n
            }
            ,
            t.hideTitle = function() {
                var e = t.domRef.wrapper.querySelector(".fp_title");
                t.hasTitle() && e.classList.add("fade_out")
            }
            ,
            t.showTitle = function() {
                var e = t.domRef.wrapper.querySelector(".fp_title");
                t.hasTitle() && e.classList.remove("fade_out")
            }
            ,
            t.initLogo = function() {
                if (t.displayOptions.layoutControls.logo.imageUrl) {
                    var e = document.createElement("div");
                    e.className = "logo_holder",
                    t.displayOptions.layoutControls.logo.hideWithControls ? e.classList.add("initial_controls_show", "fp_logo") : e.classList.add("logo_maintain_display");
                    var n = document.createElement("img");
                    t.displayOptions.layoutControls.logo.imageUrl && (n.src = t.displayOptions.layoutControls.logo.imageUrl),
                    n.style.position = "absolute",
                    n.style.margin = t.displayOptions.layoutControls.logo.imageMargin;
                    var o = t.displayOptions.layoutControls.logo.position.toLowerCase();
                    -1 !== o.indexOf("bottom") ? n.style.bottom = 0 : n.style.top = 0,
                    -1 !== o.indexOf("right") ? n.style.right = 0 : n.style.left = 0,
                    t.displayOptions.layoutControls.logo.opacity && (n.style.opacity = t.displayOptions.layoutControls.logo.opacity),
                    null !== t.displayOptions.layoutControls.logo.clickUrl && (n.style.cursor = "pointer",
                    n.addEventListener("click", (function() {
                        window.open(t.displayOptions.layoutControls.logo.clickUrl, "_blank").focus()
                    }
                    ))),
                    t.displayOptions.layoutControls.logo.mouseOverImageUrl && (n.addEventListener("mouseover", (function() {
                        n.src = t.displayOptions.layoutControls.logo.mouseOverImageUrl
                    }
                    ), !1),
                    n.addEventListener("mouseout", (function() {
                        n.src = t.displayOptions.layoutControls.logo.imageUrl
                    }
                    ), !1)),
                    t.domRef.player.parentNode.insertBefore(e, null),
                    e.appendChild(n, null)
                }
            }
            ,
            t.initHtmlOnPauseBlock = function() {
                if (!t.hasValidOnPauseAd() && t.displayOptions.layoutControls.htmlOnPauseBlock.html) {
                    var e = document.createElement("div");
                    e.className = "fluid_html_on_pause_container",
                    e.style.display = "none",
                    e.innerHTML = t.displayOptions.layoutControls.htmlOnPauseBlock.html,
                    e.onclick = function(e) {
                        t.playPauseToggle()
                    }
                    ,
                    t.displayOptions.layoutControls.htmlOnPauseBlock.width && (e.style.width = t.displayOptions.layoutControls.htmlOnPauseBlock.width + "px"),
                    t.displayOptions.layoutControls.htmlOnPauseBlock.height && (e.style.height = t.displayOptions.layoutControls.htmlOnPauseBlock.height + "px"),
                    t.domRef.player.parentNode.insertBefore(e, null)
                }
            }
            ,
            t.initPlayButton = function() {
                var e = document.createElement("div");
                e.className = "fluid_html_on_pause fluid_initial_play_button_container";
                var n = t.displayOptions.layoutControls.primaryColor ? t.displayOptions.layoutControls.primaryColor : "#333333";
                e.innerHTML = '<div class="fluid_initial_play" style="background-color:' + n + '"><div class="fluid_initial_play_button"></div></div>';
                var o = ["click", "touchend"]
                  , r = function n() {
                    t.playPauseToggle(),
                    o.forEach((function(t) {
                        return e.removeEventListener(t, n)
                    }
                    ))
                };
                o.forEach((function(t) {
                    return e.addEventListener(t, r)
                }
                )),
                t.displayOptions.layoutControls.playButtonShowing || (t.domRef.wrapper.querySelector(".fluid_controls_container").classList.add("initial_controls_show"),
                e.style.opacity = "0"),
                t.domRef.player.parentNode.insertBefore(e, null)
            }
            ,
            t.mainVideoReady = function() {
                if (0 === t.mainVideoDuration && !t.isCurrentlyPlayingAd && !1 === t.mainVideoReadyState) {
                    var e = new CustomEvent("mainVideoDurationSet");
                    t.mainVideoDuration = t.domRef.player.duration,
                    t.mainVideoReadyState = !0,
                    t.domRef.player.dispatchEvent(e),
                    t.domRef.player.removeEventListener("loadedmetadata", t.mainVideoReady)
                }
            }
            ,
            t.userActivityChecker = function() {
                var e = t.domRef.wrapper;
                t.newActivity = null;
                var n = !1
                  , o = function(e) {
                    "touchstart" !== e.type && "mousedown" !== e.type || (n = !0),
                    "touchend" !== e.type && "mouseup" !== e.type || (n = !1),
                    t.newActivity = !0
                }
                  , r = setInterval((function() {
                    if (!0 === t.newActivity) {
                        if (n || t.isLoading || (t.newActivity = !1),
                        !1 === t.isUserActive || !t.isControlBarVisible()) {
                            var e = new CustomEvent("userActive");
                            t.domRef.player.dispatchEvent(e),
                            t.isUserActive = !0
                        }
                        clearTimeout(t.inactivityTimeout),
                        t.inactivityTimeout = setTimeout((function() {
                            if (!0 !== t.newActivity) {
                                t.isUserActive = !1;
                                var e = new CustomEvent("userInactive");
                                t.domRef.player.dispatchEvent(e)
                            } else
                                clearTimeout(t.inactivityTimeout)
                        }
                        ), 1e3 * t.displayOptions.layoutControls.controlBar.autoHideTimeout)
                    }
                }
                ), 300);
                t.destructors.push((function() {
                    return clearInterval(r)
                }
                ));
                for (var i = t.isTouchDevice() ? ["touchstart", "touchmove", "touchend"] : ["mousemove", "mousedown", "mouseup"], a = 0; a < i.length; a++)
                    e.addEventListener(i[a], o, {
                        passive: !0
                    })
            }
            ,
            t.hasControlBar = function() {
                return !!t.domRef.wrapper.querySelector(".fluid_controls_container")
            }
            ,
            t.isControlBarVisible = function() {
                if (!1 === t.hasControlBar())
                    return !1;
                var e = t.domRef.wrapper.querySelector(".fluid_controls_container")
                  , n = window.getComputedStyle(e, null);
                return !(0 === n.opacity || "hidden" === n.visibility)
            }
            ,
            t.setVideoPreload = function() {
                t.domRef.player.setAttribute("preload", t.displayOptions.layoutControls.preload)
            }
            ,
            t.hideControlBar = function() {
                if (t.isCurrentlyPlayingAd && !t.domRef.player.paused && t.toggleAdCountdown(!0),
                t.domRef.player.style.cursor = "none",
                t.hasControlBar()) {
                    for (var e = t.domRef.player.parentNode.getElementsByClassName("fluid_controls_container"), n = t.domRef.player.parentNode.getElementsByClassName("fp_logo"), o = 0; o < e.length; o++)
                        t.displayOptions.layoutControls.controlBar.animated ? (e[o].classList.remove("fade_in"),
                        e[o].classList.add("fade_out")) : e[o].style.display = "none";
                    if (t.displayOptions.layoutControls.logo.hideWithControls)
                        for (var r = 0; r < n.length; r++)
                            t.displayOptions.layoutControls.controlBar.animated ? n[r] && (n[r].classList.remove("fade_in"),
                            n[r].classList.add("fade_out")) : n[r] && (n[r].style.display = "none")
                }
            }
            ,
            t.showControlBar = function(e) {
                if (t.isCurrentlyPlayingAd && !t.domRef.player.paused && t.toggleAdCountdown(!1),
                "mouseenter" !== e.type && "userActive" !== e.type || (t.domRef.player.style.cursor = "default"),
                t.hasControlBar()) {
                    for (var n = t.domRef.player.parentNode.getElementsByClassName("fluid_controls_container"), o = t.domRef.player.parentNode.getElementsByClassName("fp_logo"), r = 0; r < n.length; r++)
                        t.displayOptions.layoutControls.controlBar.animated ? (n[r].classList.remove("fade_out"),
                        n[r].classList.add("fade_in")) : n[r].style.display = "block";
                    if (t.displayOptions.layoutControls.logo.hideWithControls)
                        for (var i = 0; i < o.length; i++)
                            t.displayOptions.layoutControls.controlBar.animated ? o[i] && (o[i].classList.remove("fade_out"),
                            o[i].classList.add("fade_in")) : o[i] && (o[i].style.display = "block")
                }
            }
            ,
            t.linkControlBarUserActivity = function() {
                t.domRef.player.addEventListener("userInactive", t.hideControlBar),
                t.domRef.player.addEventListener("userInactive", t.hideTitle),
                t.domRef.player.addEventListener("userActive", t.showControlBar),
                t.domRef.player.addEventListener("userActive", t.showTitle)
            }
            ,
            t.initMute = function() {
                !0 === t.displayOptions.layoutControls.mute && (t.domRef.player.volume = 0)
            }
            ,
            t.initLoop = function() {
                t.domRef.player.loop = !!t.displayOptions.layoutControls.loop
            }
            ,
            t.setBuffering = function() {
                for (var e, n = t.domRef.player.parentNode.getElementsByClassName("fluid_controls_buffered"), o = 0; o < n.length; o++)
                    n[o].style.width = 0;
                e = setInterval((function() {
                    var o = t.domRef.player.duration;
                    if (!(o <= 0))
                        for (var r = 0; r < t.domRef.player.buffered.length; r++)
                            if (!(t.domRef.player.buffered.start(t.domRef.player.buffered.length - 1 - r) >= t.domRef.player.currentTime)) {
                                for (var i = t.domRef.player.buffered.end(t.domRef.player.buffered.length - 1 - r) / o * 100 + "%", a = 0; a < n.length; a++)
                                    n[a].style.width = i;
                                e && 1 == t.domRef.player.buffered.end(t.domRef.player.buffered.length - 1 - r) / o && clearInterval(e);
                                break
                            }
                }
                ), 500),
                t.destructors.push((function() {
                    return clearInterval(e)
                }
                ))
            }
            ,
            t.createPlaybackList = function() {
                if (t.displayOptions.layoutControls.playbackRateEnabled) {
                    var e = t.domRef.wrapper.querySelector(".fluid_control_playback_rate");
                    e.style.display = "inline-block";
                    var n = document.createElement("div");
                    n.className = "fluid_video_playback_rates",
                    n.style.display = "none",
                    Array.isArray(t.displayOptions.layoutControls.controlBar.playbackRates) && !t.displayOptions.layoutControls.controlBar.playbackRates.some((function(e) {
                        return "string" != typeof e || Number.isNaN(Number(e.replace("x", "")))
                    }
                    )) || (t.displayOptions.layoutControls.controlBar.playbackRates = ["x2", "x1.5", "x1", "x0.5"]),
                    t.displayOptions.layoutControls.controlBar.playbackRates.forEach((function(e) {
                        var o = document.createElement("div");
                        o.className = "fluid_video_playback_rates_item",
                        o.innerText = e,
                        o.addEventListener("click", (function(e) {
                            e.stopPropagation();
                            var n = this.innerText.replace("x", "");
                            t.setPlaybackSpeed(n),
                            t.openCloseVideoPlaybackRate()
                        }
                        )),
                        n.appendChild(o)
                    }
                    )),
                    e.appendChild(n),
                    e.addEventListener("click", (function() {
                        t.openCloseVideoPlaybackRate()
                    }
                    ))
                }
            }
            ,
            t.openCloseVideoPlaybackRate = function() {
                var e = t.domRef.wrapper.querySelector(".fluid_video_playback_rates");
                t.isCurrentlyPlayingAd || "none" !== e.style.display ? e.style.display = "none" : (e.style.display = "block",
                e.addEventListener("mouseleave", (function t() {
                    e.removeEventListener("mouseleave", t),
                    e.style.display = "none"
                }
                )))
            }
            ,
            t.createDownload = function() {
                var e = t.domRef.wrapper.querySelector(".fluid_control_download");
                if (t.displayOptions.layoutControls.allowDownload) {
                    e.style.display = "inline-block";
                    var n = document.createElement("a");
                    n.className = "fp_download_click",
                    n.onclick = function(e) {
                        var t = this;
                        void 0 !== e.stopImmediatePropagation && e.stopImmediatePropagation(),
                        setTimeout((function() {
                            t.download = "",
                            t.href = ""
                        }
                        ), 100)
                    }
                    ,
                    e.appendChild(n),
                    e.addEventListener("click", (function() {
                        var e = t.domRef.wrapper.querySelector(".fp_download_click");
                        e.download = t.originalSrc,
                        e.href = t.originalSrc,
                        n.click()
                    }
                    ))
                }
            }
            ,
            t.theatreToggle = function() {
                if (t.debugMessage("Toggling Theater Mode"),
                !t.isInIframe) {
                    if (e.resetDisplayMode("theaterMode"),
                    t.displayOptions.layoutControls.theatreAdvanced) {
                        var n = t.domRef.wrapper.getElementById(t.displayOptions.layoutControls.theatreAdvanced.theatreElement)
                          , o = t.displayOptions.layoutControls.theatreAdvanced.classToApply;
                        null != n && null != o ? (t.theatreMode ? n.classList.remove(o) : n.classList.add(o),
                        t.theatreModeAdvanced = !t.theatreModeAdvanced) : (console.log("[FP_ERROR] Theatre mode elements could not be found, defaulting behaviour."),
                        t.defaultTheatre())
                    } else
                        t.defaultTheatre();
                    t.theatreMode = !t.theatreMode,
                    t.fluidStorage.fluidTheatre = t.theatreMode;
                    var r = t.theatreMode ? "theatreModeOn" : "theatreModeOff"
                      , i = document.createEvent("CustomEvent");
                    i.initEvent(r, !1, !0),
                    t.domRef.player.dispatchEvent(i),
                    t.resizeVpaidAuto()
                }
            }
            ,
            t.defaultTheatre = function() {
                var e = t.domRef.wrapper;
                if (t.theatreMode)
                    return e.classList.remove("fluid_theatre_mode"),
                    e.style.maxHeight = "",
                    e.style.marginTop = "",
                    e.style.left = "",
                    e.style.right = "",
                    e.style.position = "",
                    void (t.displayOptions.layoutControls.fillToContainer ? (e.style.width = "100%",
                    e.style.height = "100%") : (e.style.width = t.originalWidth + "px",
                    e.style.height = t.originalHeight + "px"));
                e.classList.add("fluid_theatre_mode");
                var n = t.displayOptions.layoutControls.theatreSettings.width
                  , o = "10px";
                switch (e.style.width = n,
                e.style.height = t.displayOptions.layoutControls.theatreSettings.height,
                e.style.maxHeight = screen.height + "px",
                e.style.marginTop = t.displayOptions.layoutControls.theatreSettings.marginTop + "px",
                t.displayOptions.layoutControls.theatreSettings.horizontalAlign) {
                case "center":
                    "string" == typeof n && "%" === n.substr(n.length - 1) ? o = (100 - parseInt(n.substring(0, n.length - 1))) / 2 + "%" : "string" == typeof n && "px" === n.substr(n.length - 2) ? o = (screen.width - parseInt(n.substring(0, n.length - 2))) / screen.width * 100 / 2 + "%" : console.log("[FP_ERROR] Theatre width specified invalid."),
                    e.style.left = o;
                    break;
                case "right":
                    e.style.right = o;
                    break;
                default:
                    e.style.left = o
                }
            }
            ,
            t.posterImage = function() {
                if (t.displayOptions.layoutControls.posterImage) {
                    var e = document.createElement("div");
                    e.className = "fluid_pseudo_poster",
                    -1 !== ["auto", "contain", "cover"].indexOf(t.displayOptions.layoutControls.posterImageSize) ? (e.style.background = "url('" + t.displayOptions.layoutControls.posterImage + "') center center / " + t.displayOptions.layoutControls.posterImageSize + " no-repeat black",
                    t.domRef.player.parentNode.insertBefore(e, null)) : console.log("[FP_ERROR] Not allowed value in posterImageSize")
                }
            }
            ,
            t.nextSource = function() {
                var e = t.domRef.player.getElementsByTagName("source");
                if (!e.length)
                    return null;
                for (var n = 0; n < e.length - 1; n++)
                    if (e[n].getAttribute("src") === t.originalSrc && e[n + 1].getAttribute("src"))
                        return void t.setVideoSource(e[n + 1].getAttribute("src"))
            }
            ,
            t.inIframe = function() {
                try {
                    return window.self !== window.top
                } catch (e) {
                    return !0
                }
            }
            ,
            t.setPersistentSettings = function() {
                try {
                    if ("undefined" == typeof Storage || "undefined" == typeof localStorage)
                        return
                } catch (e) {
                    return
                }
                var e = "_fp_storage_enabled"
                  , n = localStorage;
                try {
                    n.setItem(e, "1"),
                    n.removeItem(e)
                } catch (e) {
                    return !1
                }
                if (t.fluidStorage = localStorage,
                void 0 !== t.fluidStorage.fluidVolume && t.displayOptions.layoutControls.persistentSettings.volume && (t.setVolume(t.fluidStorage.fluidVolume),
                void 0 !== t.fluidStorage.fluidMute && "true" === t.fluidStorage.fluidMute && t.muteToggle()),
                void 0 !== t.fluidStorage.fluidQuality && t.displayOptions.layoutControls.persistentSettings.quality) {
                    var o = t.domRef.wrapper.querySelector(".js-source_" + t.fluidStorage.fluidQuality)
                      , r = t.domRef.wrapper.querySelector(".fluid_control_video_source");
                    o && (o.click(),
                    r.click())
                }
                void 0 !== t.fluidStorage.fluidSpeed && t.displayOptions.layoutControls.persistentSettings.speed && t.setPlaybackSpeed(t.fluidStorage.fluidSpeed),
                void 0 !== t.fluidStorage.fluidTheatre && "true" === t.fluidStorage.fluidTheatre && t.displayOptions.layoutControls.persistentSettings.theatre && t.theatreToggle()
            }
            ,
            t.play = function() {
                if (t.domRef.player.paused)
                    return t.playPauseToggle(),
                    !0
            }
            ,
            t.pause = function() {
                return t.domRef.player.paused || t.playPauseToggle(),
                !0
            }
            ,
            t.skipTo = function(e) {
                t.domRef.player.currentTime = e
            }
            ,
            t.setPlaybackSpeed = function(e) {
                t.isCurrentlyPlayingAd || (t.domRef.player.playbackRate = e,
                t.fluidStorage.fluidSpeed = e)
            }
            ,
            t.setVolume = function(e) {
                t.domRef.player.volume = e;
                var n = 0 === e ? 1 : e;
                t.latestVolume = n,
                t.fluidStorage.fluidVolume = n
            }
            ,
            t.isCurrentlyPlayingVideo = function(e) {
                return e && e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2
            }
            ,
            t.setHtmlOnPauseBlock = function(e) {
                if ("object" != A(e) || void 0 === e.html)
                    return !1;
                var n = t.domRef.wrapper.querySelector(".fluid_html_on_pause_container");
                if (!n) {
                    var o = document.createElement("div");
                    return o.className = "fluid_html_on_pause",
                    o.style.display = "none",
                    o.innerHTML = e.html,
                    o.onclick = function() {
                        t.playPauseToggle()
                    }
                    ,
                    e.width && (o.style.width = e.width + "px"),
                    e.height && (o.style.height = e.height + "px"),
                    void t.domRef.player.parentNode.insertBefore(o, null)
                }
                n.innerHTML = e.html,
                e.width && (n.style.width = e.width + "px"),
                e.height && (n.style.height = e.height + "px")
            }
            ,
            t.toggleControlBar = function(e) {
                var n = t.domRef.wrapper.querySelector(".fluid_controls_container");
                e ? n.className += " initial_controls_show" : n.className = n.className.replace(" initial_controls_show", "")
            }
            ,
            t.on = function(e, n) {
                var o = function() {
                    return {
                        mediaSourceType: !1 === t.adFinished ? "ad" : "source"
                    }
                }
                  , r = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    return n.apply(void 0, t.concat([o()]))
                };
                switch (e) {
                case "play":
                    t.domRef.player.onplay = r;
                    break;
                case "seeked":
                    t.domRef.player.onseeked = r;
                    break;
                case "ended":
                    t.domRef.player.onended = r;
                    break;
                case "pause":
                    t.domRef.player.addEventListener("pause", (function() {
                        t.fluidPseudoPause || r()
                    }
                    ));
                    break;
                case "playing":
                    t.domRef.player.addEventListener("playing", r);
                    break;
                case "theatreModeOn":
                    t.domRef.player.addEventListener("theatreModeOn", r);
                    break;
                case "theatreModeOff":
                    t.domRef.player.addEventListener("theatreModeOff", r);
                    break;
                case "timeupdate":
                    t.domRef.player.addEventListener("timeupdate", (function() {
                        r(t.getCurrentTime())
                    }
                    ));
                    break;
                case "miniPlayerToggle":
                    t.domRef.player.addEventListener("miniPlayerToggle", r);
                    break;
                default:
                    console.log("[FP_ERROR] Event not recognised")
                }
            }
            ,
            t.toggleLogo = function(e) {
                if ("object" != A(e) || !e.imageUrl)
                    return !1;
                var n = t.domRef.wrapper.querySelector(".fp_logo");
                t.displayOptions.layoutControls.logo.imageUrl = e.imageUrl ? e.imageUrl : null,
                t.displayOptions.layoutControls.logo.position = e.position ? e.position : "top left",
                t.displayOptions.layoutControls.logo.clickUrl = e.clickUrl ? e.clickUrl : null,
                t.displayOptions.layoutControls.logo.opacity = e.opacity ? e.opacity : 1,
                t.displayOptions.layoutControls.logo.mouseOverImageUrl = e.mouseOverImageUrl ? e.mouseOverImageUrl : null,
                t.displayOptions.layoutControls.logo.imageMargin = e.imageMargin ? e.imageMargin : "2px",
                t.displayOptions.layoutControls.logo.hideWithControls = !!e.hideWithControls && e.hideWithControls,
                t.displayOptions.layoutControls.logo.showOverAds = !!e.showOverAds && e.showOverAds,
                n && n.remove(),
                t.initLogo()
            }
            ,
            t.trackEvent = function(e, n, o, r) {
                void 0 === t.events[o] && (t.events[o] = {}),
                void 0 === t.events[o][n] && (t.events[o][n] = []),
                t.events[o][n].push(r),
                t.registerListener(e, n, o, r)
            }
            ,
            t.registerListener = function(e, t, n, o) {
                for (var r = e.querySelectorAll(n), i = 0; i < r.length; i++)
                    r[i].addEventListener(t, o)
            }
            ,
            t.copyEvents = function(e) {
                for (var n in t.events)
                    if (t.events.hasOwnProperty(n))
                        for (var o in t.events[n])
                            if (t.events[n].hasOwnProperty(o))
                                for (var r = 0; r < t.events[n][o].length; r++)
                                    t.registerListener(e, o, n, t.events[n][o][r])
            }
            ,
            t.resetDisplayMode = function(e) {
                t.fullscreenMode && "fullScreen" !== e && t.fullscreenToggle(),
                t.theatreMode && "theaterMode" !== e && t.theatreToggle(),
                t.miniPlayerToggledOn && "miniPlayer" !== e && t.toggleMiniPlayer("off")
            }
            ,
            t.destroy = function() {
                if (t.domRef.player.classList.remove("js-fluid-player"),
                0 !== t.destructors.length) {
                    t.destructors.forEach((function(e) {
                        return e.call(t)
                    }
                    ));
                    var e = t.domRef.wrapper;
                    e ? "function" != typeof e.remove ? e.parentNode ? e.parentNode.removeChild(e) : console.error("Unable to remove wrapper element for Fluid Player instance - no parent") : e.remove() : console.warn("Unable to remove wrapper element for Fluid Player instance - element not found")
                }
            }
        }
          , L = function(e) {
            this.play = function() {
                return e.play()
            }
            ,
            this.pause = function() {
                return e.pause()
            }
            ,
            this.skipTo = function(t) {
                return e.skipTo(t)
            }
            ,
            this.setPlaybackSpeed = function(t) {
                return e.setPlaybackSpeed(t)
            }
            ,
            this.setVolume = function(t) {
                return e.setVolume(t)
            }
            ,
            this.setHtmlOnPauseBlock = function(t) {
                return e.setHtmlOnPauseBlock(t)
            }
            ,
            this.toggleControlBar = function(t) {
                return e.toggleControlBar(t)
            }
            ,
            this.toggleFullScreen = function(t) {
                return e.fullscreenToggle(t)
            }
            ,
            this.toggleMiniPlayer = function(t) {
                return void 0 === t && (t = !e.miniPlayerToggledOn),
                e.toggleMiniPlayer(t ? "on" : "off", !0)
            }
            ,
            this.destroy = function() {
                return e.destroy()
            }
            ,
            this.dashInstance = function() {
                return e.dashPlayer ? e.dashPlayer : null
            }
            ,
            this.hlsInstance = function() {
                return e.hlsPlayer ? e.hlsPlayer : null
            }
            ,
            this.on = function(t, n) {
                return e.on(t, n)
            }
            ,
            this.setDebug = function(t) {
                e.displayOptions.debug = t
            }
        }
          , T = function(e, t) {
            var n = new x;
            t || (t = {}),
            n.init(e, t);
            var o = new L(n);
            return window,
            o
        }
          , S = a(379)
          , R = a.n(S)
          , M = a(795)
          , O = a.n(M)
          , E = a(569)
          , I = a.n(E)
          , N = a(565)
          , P = a.n(N)
          , V = a(216)
          , j = a.n(V)
          , D = a(589)
          , B = a.n(D)
          , F = a(410)
          , z = {};
        z.styleTagTransform = B(),
        z.setAttributes = P(),
        z.insert = I().bind(null, "head"),
        z.domAPI = O(),
        z.insertStyleElement = j(),
        R()(F.Z, z),
        F.Z && F.Z.locals && F.Z.locals,
        window && (window.fluidPlayer || (window.fluidPlayer = T))
    }()
}();
