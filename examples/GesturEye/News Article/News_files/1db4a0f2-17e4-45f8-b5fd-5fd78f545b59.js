// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// Generated on: 4/18/2016 1:41:40 AM (UTC 4/18/2016 6:41:40 AM)

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
    var recordingThreshold = Math.random() * 100;

    return {
        isRecordingApproved: function(percentage) {
            return recordingThreshold <= percentage;
        }
    }
})();

			
// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// PID: 86
// WR destination: www04
// WR version: 15.4
// Recording ratio: 0.18
// Generated on: 4/18/2016 1:41:40 AM (UTC 4/18/2016 6:41:40 AM)
(function (){
	var dependencyCallback;
        var scriptSyncTokens = ["wr"];
        var dependencies = scriptSyncTokens.slice(0);
    function isValidToken(token) {
        if (scriptSyncTokens.indexOf(token) > -1){
			var index = dependencies.indexOf(token);

			if (index > -1) {
				dependencies.splice(index, 1);
				return true;
			}
        }

        return false;
    }
    window.ClickTaleGlobal = window.ClickTaleGlobal || {};
    ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};
    ClickTaleGlobal.scripts.dependencies = {
        setDependencies: function (deps) {
            scriptSyncTokens = deps;
        },
        onDependencyResolved: function (callback) {
            dependencyCallback = callback;
        },
        notifyScriptLoaded: function (token) {
            if (isValidToken(token)) {
                if (dependencies.length === 0 && typeof dependencyCallback === "function") {
                    dependencyCallback();
                }
            }
        }
    };
})();



function ClickTaleCDNHTTPSRewrite(u)
{
	try
	{
		var scripts = document.getElementsByTagName('script');
		if(scripts.length)
		{
			var script = scripts[ scripts.length - 1 ], s='https://clicktalecdn.sslcs.cdngc.net/';
			if(script.src && script.src.substr(0,s.length)==s )
				return u.replace('https://cdnssl.clicktale.net/',s);
		}
	}
	catch(e)
	{
	}
	return u;
} 

var ClickTaleIsXHTMLCompliant = true;
if (typeof (ClickTaleCreateDOMElement) != "function")
{
	ClickTaleCreateDOMElement = function(tagName)
	{
		if (document.createElementNS)
		{
			return document.createElementNS('http://www.w3.org/1999/xhtml', tagName);
		}
		return document.createElement(tagName);
	}
}

if (typeof (ClickTaleAppendInHead) != "function")
{
	ClickTaleAppendInHead = function(element)
	{
		var parent = document.getElementsByTagName('head').item(0) || document.documentElement;
		parent.appendChild(element);
	}
}

if (typeof (ClickTaleXHTMLCompliantScriptTagCreate) != "function")
{
	ClickTaleXHTMLCompliantScriptTagCreate = function(code)
	{
		var script = ClickTaleCreateDOMElement('script');
		script.setAttribute("type", "text/javascript");
		script.text = code;
		return script;
	}
}	

var pccScriptElement = ClickTaleCreateDOMElement('script');
pccScriptElement.type = "text/javascript";
pccScriptElement.src = (document.location.protocol=='https:'?
ClickTaleCDNHTTPSRewrite('https://cdnssl.clicktale.net/www04/pcc/1db4a0f2-17e4-45f8-b5fd-5fd78f545b59.js?DeploymentConfigName=Release_CNNF-74&Version=8'):
'http://cdn.clicktale.net/www04/pcc/1db4a0f2-17e4-45f8-b5fd-5fd78f545b59.js?DeploymentConfigName=Release_CNNF-74&Version=8');
document.body.appendChild(pccScriptElement);
	
var ClickTalePrevOnReady;
if(typeof ClickTaleOnReady == 'function')
{
	ClickTalePrevOnReady=ClickTaleOnReady;
	ClickTaleOnReady=undefined;
}

if (typeof window.ClickTaleScriptSource == 'undefined')
{
	window.ClickTaleScriptSource=(document.location.protocol=='https:'
		?ClickTaleCDNHTTPSRewrite('https://cdnssl.clicktale.net/www/')
		:'http://cdn.clicktale.net/www/');
}


// Start of user-defined pre WR code (PreLoad)b
window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleIncludedOnDOMReady = true;
window.ClickTaleSettings.PTC.EnableChangeMonitor = false;
window.ClickTaleSettings.PTC.UseTransport = true;

window.ClickTaleSettings.CheckAgentSupport = function (f, v) {
    if (v.t == v.IE && v.v <= 8) {
        return false;
    }
    else {
        if (!(v.t == v.IE && v.v <= 10)) {
            window.ClickTaleSettings.PTC.EnableChangeMonitor = true;
			window.ClickTaleSettings.PTC.EnableTransport();
        }
        return f(v);
    }
}

window.ClickTaleSettings.PTC.EnableTransport = function() {

	if (window.ClickTaleSettings.PTC.EnableChangeMonitor){
		window.ClickTaleSettings.XHRWrapper = {
			Enable: false
		};
	
        var script = document.createElement("SCRIPT");
        script.src = (document.location.protocol === "https:" ? "https://cdnssl." : "http://cdn.")+"clicktale.net/www/ChangeMonitor-latest.js";
        document.body.appendChild(script);

        window.ClickTaleSettings.ChangeMonitor = {
            Enable: true,
			LiveExclude : true,
			AddressingMode: "id",
            OnReadyHandler: function (changeMonitor) {
                changeMonitor.observe();
            },
            OnBeforeReadyHandler: function (settings) {
                settings.Enable = window.ClickTaleGetUID ? !!ClickTaleGetUID() : false;
                return settings;
            },
			Filters: {
					MaxBufferSize: 300000,
					MaxElementCount: 3000
			}
		}
	}
}

window.ClickTaleSettings.Compression = {
	Method: function () {
		return "deflate";
	}
};

window.ClickTaleSettings.Transport = {
	Legacy: false,
	MaxConcurrentRequests: 5
};

window.ClickTaleSettings.RewriteRules = {
	OnBeforeRewrite: function (rewriteApi) {
		rewriteApi.add({
			pattern: new RegExp('(<input[^>]*value=")([^"]+)("[^>]*type="text">)', 'gim'),
			replace: "$1-----$3"
		});
		rewriteApi.add({
			pattern: new RegExp('(<input[^>]*type="text"[^>]*value=")([^"]+)("[^>]*>)', 'gim'),
			replace: "$1-----$3"
		});
		rewriteApi.add({
			pattern: /(<head[^>]*>)/i,
			replace: '$1<script type=\"text\/javascript\" class=\"cm-ignore\" src=\"http:\/\/dummytest.clicktale-samples.com\/GlobalResources\/jquery.js\"><\/script>'
		});
	}
}
// End of user-defined pre WR code


var ClickTaleOnReady = function()
{
	var PID=86, 
		Ratio=0.18, 
		PartitionPrefix="www04";
	
	if (window.navigator && window.navigator.loadPurpose === "preview") {
       return; //in preview
	};
		
	
	// Start of user-defined header code (PreInitialize)
	window.ClickTaleUIDCookieName = "WRUIDB";

if (typeof ClickTaleSetAllSensitive === "function") {
    ClickTaleSetAllSensitive();
}

if (typeof ClickTaleUploadPage === 'function' && window.ClickTaleSettings.PTC.UseTransport) {
    if(window.ClickTaleSettings.PTC.EnableChangeMonitor){
		if (typeof ClickTaleEvent === "function") {
					ClickTaleEvent("CM");
		}
	}	
	ClickTaleUploadPage();
}
	// End of user-defined header code (PreInitialize)
    
	
	window.ClickTaleIncludedOnDOMReady=true;
	
	ClickTale(PID, Ratio, PartitionPrefix);
	
	if((typeof ClickTalePrevOnReady == 'function') && (ClickTaleOnReady.toString() != ClickTalePrevOnReady.toString()))
	{
    	ClickTalePrevOnReady();
	}
	
	
	// Start of user-defined footer code
	
	// End of user-defined footer code
	
};

 
(function() {
	var div = ClickTaleCreateDOMElement("div");
	div.id = "ClickTaleDiv";
	div.style.display = "none";
	document.body.appendChild(div);

	
	
	var externalWrScript = ClickTaleCreateDOMElement("script");
	var wrSrc = (document.location.protocol=='https:'?'https://cdnssl.clicktale.net/www/' : 'http://cdn.clicktale.net/www/') + 'tc/WRf4.js';
	externalWrScript.src = (window.ClickTaleCDNHTTPSRewrite?ClickTaleCDNHTTPSRewrite(wrSrc):wrSrc);
	externalWrScript.type = 'text/javascript';
		document.body.appendChild(externalWrScript);
})();





!function(){function t(){window.addEventListener&&addEventListener("message",e,!1)}function e(t){var e,n=new RegExp("(clicktale.com|ct.test)($|:)"),i=new RegExp("ct.test"),c=!1,l=t.origin;try{e=JSON.parse(t.data)}catch(d){return}n.test(t.origin)!==!1&&(i.test(t.origin)===!0&&(c=!0),"CTload_ve"===e["function"]&&"function"==typeof ClickTaleGetPID&&null!==ClickTaleGetPID()&&o(l,c))}function n(t){return document.createElementNS?document.createElementNS("http://www.w3.org/1999/xhtml",t):document.createElement(t)}function o(t,e){var o=n("script");o.setAttribute("type","text/javascript"),o.setAttribute("id","ctVisualEditorClientModule");var i;i=e?document.location.protocol+"//ct.test/VisualEditor/Client/dist/veClientModule.js":document.location.protocol+"//"+t.match(/subs\d*/)[0]+".app.clicktale.com/VisualEditor/Client/dist/veClientModule.js",o.src=i,document.getElementById("ctVisualEditorClientModule")||document.body.appendChild(o)}try{var i=window.chrome,c=window.navigator&&window.navigator.vendor;null!==i&&void 0!==i&&"Google Inc."===c&&window.self!==window.top&&t()}catch(l){}}();
