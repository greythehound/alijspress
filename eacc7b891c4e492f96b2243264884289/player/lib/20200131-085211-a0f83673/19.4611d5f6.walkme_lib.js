window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[19],{1340:function(e,r,i){"use strict";i.r(r),function(t,e){i.d(r,"init",function(){return n});var v=i(887),k=i(890);function n(e){return t.get("IntegrationCenterEndUserIDPInitializer").start(e).catch(function(e){t.get("Logger").error(e)})}t.register("IntegrationCenterEndUserIDPInitializer").asCtor(function(w,C,f,S,I,P,h,b){this.start=function(){return new e(function(t,n){try{var e=(d=f.getSettingsFile(),p=h&&h.getItem("wm-integration-center-enduser-idp-public-path"),u=p&&p+"main.js",m=d&&d.Components&&d.Components.integrationCenterIDP,u||m),r=(c=f.getSettingsFile(),g=h&&h.getItem("wm-integration-center-enduser-idp-public-path"),l=(c&&c.Components&&c.Components.integrationCenterIDP||"").replace(/main\.js$/,""),g||l),i=(s=f.getSettingsFile(),h&&h.getItem("wm-integration-center-enduser-idp-api-base-url")||s.PlayerApiServer);if(!(e&&r&&i)){var a=f.getSettingsFile(),o=f.getCdnServerName();if(S.isSelfHosted&&(o=a.PlayerApiServer&&a.PlayerApiServer.replace("papi","cdn")),!((e=(r=o+"/ic/idp/0/")+"main.js")&&r&&i))return t()}w.addScriptWithCallback(e,"onIntegrationCenterEndUserIDPReadyCb",function(){return{resolve:function(e){v.a.set(k.d,{data:e}),t(e)},reject:n,wmDependencies:{publicPath:r,apiBaseUrl:i,wmInternals:S,wmAjax:I,wmLogger:C,clientStorageManager:P,userGuidContainer:b}}},function(){n(new Error("Failed to addScriptWithCallback for: "+snippetUrl))})}catch(e){n(e)}var s,c,g,l,d,p,u,m})},this.getData=function(){return v.a.get(k.d).data}}).dependencies("CommonUtils, Logger, SettingsFile, WmInternals, WmAjax, ClientStorageManager,LocalStorageService, UserGuidContainer")}.call(this,i(3),i(2))}}]);