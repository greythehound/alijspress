﻿/*!
 * WalkMe
 * http://www.walkme.com/
 *
 * Copyright 2012, WalkMe ltd
 */
function WalkmeSnippet(){window._walkmeInternals=window._walkmeInternals||{},D("snippetStartInit");var o,i,a,s,l,u,t,w=this,e=!1,n="40",d={publish:0,preview:1},c=d.publish,g="3",m="eacc7b891c4e492f96b2243264884289";try{t=window.localStorage}catch(e){}function _(e){u.snippetLog.push(e)}function f(){window["walkme_custom_settings_data"]?(_("lso"),r(walkme_custom_settings_data)):(_("lsp"),D("settingsFileStartLoad"),O(s,null,u.isSelfHosted,"fixedCallback",r))}function r(e){if(D("settingsFileEndLoad"),!y()&&window.document.dontLoadTriangle)return window["walkme_snippet_blocked"]=!0,u.blocked=!0,void(u.continueLoad=function(){p(e)});_("cls"),p(e)}function p(e){i=T(e);var n=window.walkme_settings_callback||window.walkme&&window.walkme.walkme_settings_callback||window._walkmeConfig&&window._walkmeConfig.walkme_settings_callback;n&&n(i);var t=A("walkme_is_enabled_override");if(void 0!==t){if("0"===t)return}else if(!e.IsEnabled)return;!function(e){if(window.walkme_custom_jquery)window.mtjQuery=walkme_custom_jquery,v();else{var n=I("walkmeCustomjQueryUrl");if(0!=n&&(e=n),u.localjQueryUrlPath){var t=e.lastIndexOf("/"),i=e.substring(t+1);e=u.localjQueryUrlPath+i}O(e,v)}}(e.jQueryFile)}function v(){if(D("jQueryScriptLoaded"),null==window["mtjQuery"])return;if(e)return;e=!0,window.walkme_custom_jquery||mtjQuery.noConflict(),i.WaitDocumentReady?(_("wdr"),mtjQuery(document).ready(function(){h(i)})):(_("ndr"),h(i))}function h(e){D("jQueryDocumentReady");try{!function(e){var n=I("wm-prelibjs");n&&(e.PreLibJsFile=n);e.PreLibJsFile&&""!=e.PreLibJsFile?(window["walkme_pre_lib_loaded"]=function(){window["walkme_pre_lib_loaded"]=function(){try{console.log("walkme_pre_lib_loaded was called twice.")}catch(e){}},k(e)},D("preLibStartLoad"),O(e.PreLibJsFile)):k(e)}(e)}catch(e){}}function b(e){try{var n=A("wm_load_test_"+m+"_"+g),t=parseInt(n);if(t)return D("startLoadingTest"),_walkmeInternals.loadingTestDone=function(){D("endLoadingTest"),_walkmeInternals.loadingTestDone=void 0,e&&e()},void setTimeout(_walkmeInternals.loadingTestDone,1e3*t)}catch(e){}e&&e()}function k(e){O(function(){var e;u.localLibUrl&&(e=u.localLibUrl);var n=I("walkmeCustomeLibUrl");if(0!=n)return n;return e}()||e.LibFile)}function S(){return y()?"wmPreviewSnippet":"wmSnippet"}function y(){return c==d.preview}function E(){this.recorderServer="###RECORDER_SERVER_NAME###",this.cdnServerName="###AUTO_DETECT###",this.storage="cookie",this.userGuids=["eacc7b891c4e492f96b2243264884289"],window.walkme_custom_cdn_server&&(this.cdnServerName=walkme_custom_cdn_server),window.walkme_custom_app_server&&(this.recorderServer=walkme_custom_app_server),window.walkme_custom_data_url?this.triangleUrl=walkme_custom_data_url:this.triangleUrl=this.cdnServerName+"###SPECIAL_TRIANGLE_FILE###",window.walkme_custom_datafile_url?this.datafilesArray=walkme_custom_datafile_url:this.datafilesArray="###SPECIAL_DATA_FILE###",window.walkme_custom_widget_url?this.widgetUrl=walkme_custom_widget_url:this.widgetUrl="###SPECIAL_WIDGET_FILE###"}function T(e){if(null==l)return e;return function e(n,t){{if("string"==typeof n)return t(n);if("[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<n.length;i++)n[i]=e(n[i],t);return n}if("object"==typeof n){for(var i in n)Object.hasOwnProperty.call(n,i)&&(n[i]=e(n[i],t));return n}}return n}(e,function(e){return e.replace("###AUTO_DETECT###",l)})}function I(e){try{if(t){var n=t.getItem(e);if(null!=n)return n}}catch(e){}return!1}function L(e){return new RegExp(e,"i").test(navigator.userAgent||navigator.vendor||window.opera)}function O(e,n,t,i,r){var a=document.createElement("script");a.async=!0,window._walkmeConfig=window._walkmeConfig||{},t&&!0!==window._walkmeConfig.disableWMTS&&(e+=(-1==e.indexOf("?")?"?":"&")+"_wmts="+(new Date).getTime()),a.src=e,a.id="mt_script",n&&(a.onload=n,a.onreadystatechange=n),function(n,t){if(n&&t){var i=window[n];window[n]=function(e){window[n]=i,t(e)}}}(i,r),function(){o=o||document.getElementsByTagName("head")[0];return o}().appendChild(a)}function C(e){return e.replace(/^\s+|\s+$/g,"")}function A(e,n){var t=n?I(e):function(e){var n,t,i,r=document.cookie.split(";");for(n=0;n<r.length;n++)if(t=r[n].substr(0,r[n].indexOf("=")),i=r[n].substr(r[n].indexOf("=")+1),(t=t.replace(/^\s+|\s+$/g,""))==e)return i;return!1}(e);if(!1!==t)return t;var i=window[e]||window.walkme&&window.walkme[e]||window._walkmeConfig&&window._walkmeConfig[e];if(null!=i)return i;return}function D(e){try{var n,t,i=(new Date).getTime();t=_walkmeInternals.timing?i-(n=_walkmeInternals.timing).list[n.list.length-1].time:((n=_walkmeInternals.timing={}).map={},n.list=[],n.delta=[],0),n.map[e]=i,n.list.push({name:e,time:i}),n.delta.push({name:e,delta:t})}catch(e){}}function x(e,n){try{_(e),console.log(n)}catch(e){}}if(this.getSnippetVersion=function(){return n},this.getSettingsFile=function(){return i},this.getServerSettings=function(){return a},this.fixAutoDetectPaths=T,!_walkmeInternals.__tti&&"PerformanceObserver"in window){var P=[];if("PerformanceResourceTiming"in window&&P.push("resource"),"PerformancePaintTiming"in window&&P.push("paint"),"PerformanceLongTaskTiming"in window&&P.push("longtask"),"LargestContentfulPaint"in window&&P.push("largest-contentful-paint"),0<P.length){var U=_walkmeInternals.__tti={e:[]};U.o=new PerformanceObserver(function(e){U.e=U.e.concat(e.getEntries())}),U.o.observe({entryTypes:P})}}setTimeout(function(){if(window._walkmeConfig=window._walkmeConfig||{},(u=_walkmeInternals).snippetLog=[],u.addTimeStamp=D,_walkmeInternals.loadingTestDone)return void x("ltt","WalkMe Loading Test is already running - aborting snippet");var e;_("ish"),u.isSelfHosted="true"=="true",_("ssm"),"###IS_PREVIEW_MODE###"=="true"&&(c=d.preview),a=new E,_("lsu");var n=false==1||false&&L("android|blackberry|iemobile|ip(ad|hone|od)|phone|symbian|windows (ce|phone)");if(n?(_("lsm"),e="###GET_MOBILE_SETTINGS_URL###",_walkmeConfig.platform=3):(_("lsw"),e="###AUTO_DETECT###/settings.txt"),-1<a.cdnServerName.indexOf("###AUTO_DETECT###")&&(_("lad"),l=function(e,n){for(var t=document.getElementsByTagName("script"),i="###MOBILE_WEB_USER_GUID###",r=0;r<t.length;r++){var a=t[r].src;if(a&&0<a.indexOf("walkme_")){if(e){r=a.indexOf(e);var o=C(a.substr(0,r));_("dst")}else{r=a.indexOf("walkme_"),o=C(a.substr(0,r-1));_("dso")}return n&&u.isSelfHosted&&(o=o.split(m).join(i),_("dsm")),o}}return""}(a.cdnServerName.replace("###AUTO_DETECT###",""),n),a=T(a)),e=function(e){var n=A("walkme_segmented_settings_"+m+"_"+g,!0);if(n)return _("seg"),n;return e}(e),s=function(e){var n="walkme_custom_user_settings_",t=A(n+"url",!0),i=A(n+"guid",!0),r=A(n+"env",!0),a=function(){var e=I("walkMe_wm-settings-cache-bust");if(e){var n=/{"val":"(true|false)","exp":(\d+)}/.exec(e);if(n&&"true"==n[1]&&(new Date).getTime()<parseInt(n[2]))return!0}return window.walkme&&window.walkme.walkme_settings_cache_bust||window._walkmeConfig.walkme_settings_cache_bust||!1}();t&&(e=t);i&&(e=e.replace(/(users\/)([^\/]*)(\/)/,"$1"+i+"$3"));!r&&""!==r||(r&&(r+="/"),e=e.replace(/(users\/[^\/]*\/)(.*)(sett)/,"$1"+r+"$3"));e=T(e),u.settingsUrl=e,_(a?"cb":"ncb"),a&&(e+="?forceUpdate="+(new Date).getTime());return e}(e),a=a,_("cli"),_walkmeConfig.smartLoad){if(top!=window&&!function(){try{if(parent.location.href)return!1}catch(e){}return!0}()&&function(){try{var e=window;do{if((e=e.parent.window)._walkmeConfig)return!0}while(e!=top)}catch(e){}return!1}())return}else if(1!=window["walkme_load_in_iframe"]&&top!=window)return;if(_("cuc"),!n&&!function(){if("1"===A("walkme_dont_check_browser")||y())return!0;var e=function(){var e={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var n=0;n<e.length;n++){var t=e[n].string,i=e[n].prop;if(this.versionSearchString=e[n].versionSearch||e[n].identity,t){if(-1!=t.indexOf(e[n].subString))return e[n].identity}else if(i)return e[n].identity}},searchVersion:function(e){var n=e.indexOf(this.versionSearchString);if(-1==n)return;return parseFloat(e.substring(n+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer",versionSearch:" rv"},{string:navigator.userAgent,subString:"Edge",identity:"Edge"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};if(e.init(),"Chrome"==e.browser||"Firefox"==e.browser||"Safari"==e.browser&&"Windows"!=e.OS)return!0;if("Explorer"==e.browser&&7<=e.version)return!0;return x("icb","WalkMe: Incompatible browser."),!1}(),n=!L("android.+mobile|blackberry|iemobile|ip(hone|od)|phone|symbian|windows (ce|phone)")&&!function(){var e=Math.max(screen.width,screen.height),n=Math.min(screen.width,screen.height);return e<800||n<600}();return e&&n}()){try{_("bns"),walkme_browser_not_supported()}catch(e){}return}_("exl");var t,i=window[S()],r=u.blocked;if(_("lsl"),t=S(),window[t]=w,_("ipm"),!y()&&(_("clt"),window.document.dontLoadTriangle))return _("bsl"),window["walkme_snippet_blocked"]=!0,u.blocked=!0,void(u.continueLoad=function(){b(f)});_("slb"),i&&!r&&x("slt","WalkMe Snippet was loaded twice"),_("lss"),b(f),_("eok")},0)}new WalkmeSnippet;