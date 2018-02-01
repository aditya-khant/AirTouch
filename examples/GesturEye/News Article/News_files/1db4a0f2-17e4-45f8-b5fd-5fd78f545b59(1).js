// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// Generated on: 3/28/2016 6:18:01 AM (UTC 3/28/2016 11:18:01 AM)

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

			
	(function(){
		if(!ClickTaleGlobal.scripts.filter.isRecordingApproved(100)){ return;}
		// Copyright 2006-2016 ClickTale Ltd., US Patent Pending
// PID: 86
// Generated on: 3/28/2016 6:18:01 AM (UTC 3/28/2016 11:18:01 AM)

var ctRules_PrePCC={"rules":"name|Action+%7C+Clicked+on+Business|action|type|CTEventAction|eventName|Action+%7C+Clicked+on+Business|triggers|OrCondition|childConditions|ClickCondition|ctSelector|elementAddressing|tagCode|index|elementID|main-nav--business|business-link|alias|A|states|LocationCondition|url|http://money.cnn.com/|mode|AllPages|ignoreQueryString|Action+%7C+Clicked+on+Header|Action+%7C+Clicked+on+Header|DIV|Onload+%7C+Homepage|Onload+%7C+Homepage|PageLoadCondition|Equals|Action+%7C+Clicked+on+CNN|Action+%7C+Clicked+on+CNN|IMG|Action+%7C+Clicked+on+Search+Bar|Action+%7C+Clicked+on+Search+Bar|quoteForm|symb|symbols|INPUT|Action+%7C+Clicked+on+login|Action+%7C+Clicked+on+login|Onload+%7C+Markets|Onload+%7C+Markets|http://money.cnn.com/data/markets/|Action+%7C+Clicked+Close+Privacy+Policy|Action+%7C+Clicked+Close+Privacy+Policy|js-TosPrivacy|js-tosClose|I^14|0|284|0|26M|0|39|0|24|0|1|0|14|0|284|0|14|0|284|0|1|0|O9|0|14|0|284|0|284|0|284|0|1|0|14|0|284|0|284|0|1UU|0|1NT|0|14|0|284|0|284|0|284|0|43|1|43|1|1|0|284|1|8J|0|1|0|9|0^^@$0|1|2|$3|4|5|6]|7|$3|8|9|@$3|A|B|$C|@$D|1H|E|1I]|$D|1J|E|1K]|$D|1L|E|1M]|$D|1N|E|1O]|$D|1P|F|G|E|1Q]|$D|1R|F|H|E|1S]]]|I|J]]]|K|$3|L|M|N|O|P|Q|-1]]|$0|R|2|$3|4|5|S]|7|$3|8|9|@$3|A|B|$C|@$D|1T|E|1U]|$D|1V|E|1W]]]|I|T]]]|K|$3|L|M|N|O|P]]|$0|U|2|$3|4|5|V]|7|$3|W]|K|$3|L|M|N|O|X]]|$0|Y|2|$3|4|5|Z]|7|$3|8|9|@$3|A|B|$C|@$D|1X|E|1Y]|$D|1Z|E|20]|$D|21|E|22]|$D|23|E|24]]]|I|10]|$3|A|B|$C|@$D|25|E|26]|$D|27|E|28]|$D|29|E|2A]|$D|2B|E|2C]|$D|2D|E|2E]]]|I|J]]]|K|$3|L|M|N|O|P]]|$0|11|2|$3|4|5|12]|7|$3|8|9|@$3|A|B|$C|@$D|2F|E|2G]|$D|2H|E|2I]|$D|2J|E|2K]|$D|2L|0|13|E|2M]|$D|2N|F|14|0|15|E|2O]]]|I|16]]]|K|$3|L|M|N|O|P]]|$0|17|2|$3|4|5|18]|7|$3|8|9|@$3|A|B|$C|@$D|2P|E|2Q]|$D|2R|E|2S]|$D|2T|E|2U]|$D|2V|E|2W]|$D|2X|E|2Y]|$D|2Z|E|30]|$D|31|E|32]]]|I|J]]]|K|$3|L|M|N|O|P]]|$0|19|2|$3|4|5|1A]|7|$3|W]|K|$3|L|M|1B|O|X]]|$0|1C|2|$3|4|5|1D]|7|$3|8|9|@$3|A|B|$C|@$D|33|F|1E|E|34]|$D|35|E|36]|$D|37|F|1F|E|38]|$D|39|E|3A]]]|I|1G]]]|K|$3|L|M|N|O|P]]]","isTransformed":true}; (function(){function Rule(e){logger.log("Rule name: ",e.name),this.name=e.name;var t=actionsFactory.construct(e.action,e),n=observablesFactory.construct(e.triggers),r=statesFactory.construct(e.states);n&&n.subscribe(function(){r.evaluate()&&t.execute()}),logger.log("\n")}function Observable(){this.subscribers=[]}function State(e){}function Action(e){}function ClickObservable(e){Observable.call(this);var t=this;bindToClick(e,function(){logger.log("Click event associated with selector: ",e),t.notify(e)})}function onMouseDown(e){currentMouseDownElement=e.target||e.srcElement}function onMouseUp(e){var t,n=e.target||e.srcElement;if(n===currentMouseDownElement){logger.log("Click detected on element: ",n);for(t in clickHandlers)clickHandlers.hasOwnProperty(t)&&isAncestor(t,n)&&clickHandlers[t].forEach(function(t){t.call(null,e)})}currentMouseDownElement=null}function bindToClick(e,t){var n=getSelector(e);clickHandlers[n]=clickHandlers[n]||[],clickHandlers[n].push(t)}function getSelector(e){switch(Object.keys(e)[0]){case"elementAddressing":return JSON.stringify(e.elementAddressing);case"css":return e.selector}}function getElementsFromSelector(e){var t=[],n=ct.ElementAddressing.elementFromPath(JSON.parse(e),document.body,!0);return n&&t.push(n),t}function isAncestor(e,t){for(var n=!1,r=t,o=getElementsFromSelector(e);!n&&"HTML"!==r.tagName&&r.parentElement;)n=isInNodeList(o,r),r=r.parentElement;return n}function isInNodeList(e,t){var n,r=e.length;for(n=0;r>n;n+=1)if(e[n]===t)return!0;return!1}function OrObservable(e){Observable.call(this);var t=this;e.forEach(function(e){e.subscribe(function(){t.notify()})})}function PageLoadObservable(){Observable.call(this);var e=this;onRulesBoundHandlers.push(function(){logger.log("PageLoad event"),e.notify()})}function CTEventAction(e){this.eventName=e,logger.log("Event name: ",this.eventName)}function LocationState(e){this.url=e.url.toLowerCase(),this.mode=e.mode,this.ignoreQueryString=e.ignoreQueryString,logger.log("Location mode: ",this.mode),logger.log("Location URL: ",this.url),logger.log("Location Ignore Query String: ",this.ignoreQueryString)}function init(){var e=whenRecoding.bind(void 0,startRulesEngine);onDomReady(e)}function whenRecoding(e){if("undefined"!=typeof window.ClickTaleIsRecording&&window.ClickTaleIsRecording()===!0)e();else{var t=window.ClickTaleOnRecording;window.ClickTaleOnRecording=function(){e(),"undefined"!=typeof t&&"function"==typeof t&&t.apply(this,arguments)}}}function startRulesEngine(){try{if(!isSupportedBrowser())return;ct.ElementAddressing.bootstrap(window,!0),buildRules()}catch(e){logger.error("startRulesEngine: ",e)}}function onDomReady(e){function t(){r||(r=!0,e())}function n(){if(!r)try{document.documentElement.doScroll("left"),t()}catch(e){setTimeout(n,10)}}var r=!1;if("complete"===document.readyState||"interactive"===document.readyState)return void t();if(document.addEventListener)document.addEventListener("DOMContentLoaded",t,!1);else if(document.attachEvent){try{var o=null!=window.frameElement}catch(i){}document.documentElement.doScroll&&!o&&n(),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&t()})}if(window.addEventListener)window.addEventListener("load",t,!1);else if(window.attachEvent)window.attachEvent("onload",t);else{var a=window.onload;window.onload=function(){a&&a(),t()}}}function isSupportedBrowser(){try{if("function"!=typeof ClickTaleDetectAgent)return!1;var e=ClickTaleDetectAgent();if(!e)return!1;if(e.t==e.IE&&e.v<9)return!1}catch(t){return logger.error("isSupportedBrowser: ",t),!1}return!0}function buildRules(){if(ctRules_PrePCC){var e=null;e=ctRules_PrePCC.isTransformed?rulesEngine.jsonUnpacker.unpack(ctRules_PrePCC.rules):ctRules_PrePCC.rules,rules=e.map(function(e){return new Rule(e)})}onRulesBoundHandlers.forEach(function(e){e()})}Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},o=function(){return n.apply(this instanceof r?this:e,t.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(r.prototype=this.prototype),o.prototype=new r,o}),"function"!=typeof Object.create&&(Object.create=function(){function e(){}var t=Object.prototype.hasOwnProperty;return function(n){if("object"!=typeof n)throw TypeError("Object prototype may only be an Object or null");e.prototype=n;var r=new e;if(e.prototype=null,arguments.length>1){var o=Object(arguments[1]);for(var i in o)t.call(o,i)&&(r[i]=o[i])}return r}}());var logger=function(){function e(){var e=Array.prototype.slice.call(arguments);n&&(window.console&&window.console.log?window.console.log.apply(window.console,e):window.alert&&window.alert(e.join(" ")))}for(var t={},n=!(!window.localStorage||"true"!==localStorage.getItem("ctRuleEngineDebug")),r=window.location.search.split("&"),o=[],i=0;i<r.length;i++)/^\??ctRuleEngine=/.test(r[i])&&o.push(r[i]);return o.length&&(n="true"===o[0].split("=").splice(1)[0],window.localStorage&&localStorage.setItem("ctRuleEngineDebug",n)),t.log=function(){e.apply(this,arguments)},t.error=function(t){e.apply(this,arguments)},t}();!function(){function e(e,t){var n=e.split("."),r=k;!(n[0]in r)&&r.execScript&&r.execScript("var "+n[0]);for(var o;n.length&&(o=n.shift());)n.length||t===C?r=r[o]?r[o]:r[o]={}:r[o]=t}function t(e,t){var n;if(e.map)n=e.map(t,C);else{n=[];for(var r=e.length,o=window,i=0;r>i;i++)n.push(t.call(o,e[i],i))}return n}function n(e,t){var n;if(e.filter)n=e.filter(t,C);else{n=[];for(var r=e.length,o=window,i=0;r>i;i++){var a=e[i];t.call(o,a,i)&&n.push(a)}}return n}function r(e,t){R||(e.ClickTaleSetCustomElementID=c(e.ClickTaleSetCustomElementID),R=E),t&&i(I,e.document.documentElement),D=E}function o(e){}function i(e,t){var n=t.firstChild,r=u(t).CustomID;r&&(r in e?(P[r]=E,o("duplicate registration of custom id "+r+"were found on multiple elements")):e[r]=t);for(;n;n=n.nextSibling)1===n.nodeType&&i(e,n)}function a(e,t){u(e).CustomID=t}function c(e){return function(t,n){n in I?(P[n]=E,o("duplicate registration of custom id "+n+" were found on multiple elements")):(e(t,n),D&&(I[n]=t))}}function u(e){var t=e.ClickTale;return t||(t={},e.ClickTale=t),t}function l(e){return w.getComputedStyle?w.getComputedStyle(e,O):e.currentStyle}function s(e){return N[e]||(N[e]=(e.charCodeAt(0)-64&31)+((e.charCodeAt(1)-64&28)<<3)+((e.charCodeAt(2)-64&30)<<7)),N[e]}function d(e){return(e.charCodeAt(0)-64&7)+((e.charCodeAt(0)-64&16)>>1)+((e.charCodeAt(1)-64&4)<<2)+((e.charCodeAt(3)-64&4)<<3)}function f(e,t,n){var r,o,i,a,c,f,g=0,v=O;r=S;for(var h,y=O,b=O,w=t.length,C=0;e&&w>C;C++)for(r=S,b=t[C],v=e.firstChild,g=0;!r&&v;v=v.nextSibling)if(1===v.nodeType&&s(v.tagName)===b.tagCode){if(g===b.index){if(y=v,e=b.name,r=b.typeCode,o=b.customID,f=b.elementID,i=p(y,"id"),a=p(y,"type"),c=p(y,"name"),h=u(y).CustomID,!m([o,h])&&o!=h||!m([f,i])&&f!=i||!m([e,c])&&e!=c||!m([r,a])&&a&&r!=d(a))return O;r=E,e=y}g++}return n?e:(r=r&&"none"!==l(e).display.toLowerCase())?e:O}function p(e,t){var n=e.getAttributeNode(t);return n?n.value:O}function m(e){return T(e,function(e){return!e})}function g(e,t){var n,r=t.customID;if(r){var i;r in P&&P[r]?o("duplicate custom id "+r+" were found on multiple elements"):i=I[r],n=i}else e:{if(r=t.elementID){try{n=e.querySelectorAll("#"+r),n.length||(n=e.querySelectorAll("[id='"+r.replace(/'/g,"\\'")+"']"))}catch(a){n=e.querySelectorAll("[id='"+r.replace(/'/g,"\\'")+"']")}if(n&&0!==n.length){if(1===n.length){n=n[0];break e}o("duplicate id "+r+" were found on multiple elements.")}else o("no element with id "+r+" was found.")}n=C}return n}function v(e,t){for(var n,r,i=t.length,a=i,c={},u=e.ownerDocument;a>0;a--){if(n=t[a-1],r=g(u,n),!r&&(n=n.name)&&a===i){r=u;var l,s=t,d=C,f=O,p=s.slice(0,a-1);e:{l=r;for(var m=p.length,v=C,v=C;m>0;m--)if(v=p[m-1],(v=g(l,v))&&1===v.nodeType&&"form"===v.tagName.toLowerCase()){l=v;break e}l=O}(d=l)?f=h(r,n,d,s):o("could not resolve form. form doesn't have an anchor."),r=f}if(r)return i=t.slice(a,i),c.b=i,c.a=r,c}return c.b=t,c.a=e,c}function h(e,t,r,i){var a,e=e.getElementsByName(t);if(1<e.length){if(e=n(e,function(e){return A(r,e)}),b(e))return t=i[i.length-1].index,y(e,t);o("duplicate name "+t+" found on multiple non radio elements.")}else 1===e.length&&(i=e[0],A(r,i)?a=i:o("could not resolve nested element with name "+t+" in form."));return a}function y(e,t){for(var n,r,o,i=[],a=S,c=0;c<e.length;c++)if(o=e[c],r=o.parentNode,-1===L(i,r)&&(i.push(r),r=r.getElementsByTagName(o.tagName),r.length-1>=t)){if(a)return O;n=r[t],a=E}return n}function b(e){for(var t=0;t<e.length;t++){var n=p(e[t],"type");if(!n||"radio"!==n.toLowerCase())return S}return E}var w,C=void 0,E=!0,O=null,S=!1,k=this,A=function(){var e=document.documentElement;return e.compareDocumentPosition||e.contains?function(e,t){var n=9===e.nodeType?e.documentElement:e;return e===t||n.contains&&n.contains(t)||e.compareDocumentPosition&&16&e.compareDocumentPosition(t)}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return E;return S}}(),L=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=e.length,r=0;n>r;r++)if(e[r]===t)return r;return-1},T=Array.prototype.every?function(e,t){return e.every(t)}:function(e,t){for(var n=e.length,r=0;n>r;r++)if(!t(e[r]))return S;return E},D=S,R=S,P={},I={},F=c(a),N={};e("ct.ElementAddressing.bootstrap",function(e,t){t=!!t,w=e,e.ClickTaleSetCustomElementID=a,/complete|interactive/.test(document.readyState)?r(e,t):e.document.addEventListener?e.document.addEventListener("DOMContentLoaded",function(){r(e,t)},S):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&r(e,t)})}),e("ct.ElementAddressing.elementFromPath",function(e,n,r){var o=!(e[0]instanceof Array);return o&&(e=[e]),e=t(e,function(e){return e=v(n,e),e.a&&0<e.b.length&&(e.a=f(e.a,e.b,r)),!r&&e.a&&"hidden"===l(e.a).visibility.toLowerCase()?O:e.a}),o?e[0]:e}),e("ct.ElementAddressing.pathFromElement",function(e,t){var n,r=0,o=0,i=O,a=[],c=e;if(!t)return a;for(;c&&c!==t;)if(1!==c.nodeType)c=c.parentNode;else{for(o=0,i={},e=c,r=s(c.nodeName),i.tagCode=r,(n=u(e).CustomID)&&(i.customID=n),(n=p(e,"id"))&&(i.elementID=n),(n=p(e,"name"))&&(i.name=n),(n=p(e,"type"))&&(i.typeCode=d(n)),n=c;n=n.previousSibling;)s(n.nodeName)===r&&o++;i.index=o,c=c.parentNode,a.push(i)}return a.reverse(),a}),e("ct.ElementAddressing.elementAndVisibilityFromPath",function(e,n){var r=!(e[0]instanceof Array);r&&(e=[e]);var o=t(e,function(e){if(e=v(n,e),e.a&&0<e.b.length&&(e.a=f(e.a,e.b,E)),e.a){var t={};t.dom=e.a,t.isHidden="hidden"===l(e.a).visibility.toLowerCase(),e=t}else e=O;return e});return r?o[0]:o}),e("ct.ElementAddressing.setCustomElementID",F),e("ct.ElementAddressing.calcTagCode",s),e("ct.ElementAddressing.calcTypeCode",d)}();var exports={},rulesEngine=exports;Observable.prototype.subscribe=function(e){this.subscribers.push(e)},Observable.prototype.notify=function(){var e=this;e.subscribers.forEach(function(t){t.apply(e,arguments)})};var observablesFactory={construct:function(e){return null==e?null:this["construct"+e.type.replace("Condition","")](e)}};State.prototype.evaluate=function(e){};var statesFactory={construct:function(e){return this["construct"+e.type.replace("Condition","")](e)}},actionsFactory={construct:function(e,t){return this["construct"+e.type.replace("Action","")](e,t)}};Action.prototype.execute=function(e){},ClickObservable.prototype=Object.create(Observable.prototype),ClickObservable.prototype.constructor=ClickObservable,observablesFactory.constructClick=function(e){return new ClickObservable(e.ctSelector)},document.addEventListener&&(document.addEventListener("mousedown",onMouseDown,!1),document.addEventListener("mouseup",onMouseUp,!1));var clickHandlers={},currentMouseDownElement=null;OrObservable.prototype=Object.create(Observable.prototype),OrObservable.prototype.constructor=OrObservable,observablesFactory.constructOr=function(e){var t=e.childConditions.map(function(e){return observablesFactory.construct(e)});return new OrObservable(t)},PageLoadObservable.prototype=Object.create(Observable.prototype),PageLoadObservable.prototype.constructor=PageLoadObservable,observablesFactory.constructPageLoad=function(){return new PageLoadObservable},CTEventAction.prototype=Object.create(Action.prototype),CTEventAction.prototype.constructor=Action,CTEventAction.prototype.execute=function(){"function"==typeof window.ClickTaleEvent&&window.ClickTaleEvent(this.eventName),logger.log("ClickTaleEvent: "+this.eventName)},actionsFactory.constructCTEvent=function(e){return new CTEventAction(e.eventName)},LocationState.prototype=Object.create(State.prototype),LocationState.prototype.constructor=State,LocationState.prototype.evaluate=function(e){var t=e||window.location.href;switch(t=t.toLowerCase(),this.ignoreQueryString===!0&&(t=t.split(/[?#]/)[0],this.url=this.url.split(/[?#]/)[0]),this.mode){case"AllPages":return!0;case"StartsWith":return 0==t.indexOf(this.url);case"Equals":return t===this.url;case"Contains":return t.indexOf(this.url)>-1}},statesFactory.constructLocation=function(e){return new LocationState(e)},function(e){var t=-1,n=-2,r=-3,o=-4,i=-5,a=function(e){var a=e.split("^"),l=[],s=a[0];if(""!==s){s=s.split("|");for(var d=0,f=s.length;f>d;d++)l.push(c(s[d]))}if(s=a[1],""!==s){s=s.split("|");for(var d=0,f=s.length;f>d;d++)l.push(u(s[d]))}if(s=a[2],""!==s){s=s.split("|");for(var d=0,f=s.length;f>d;d++)l.push(parseFloat(s[d]))}delete s;for(var p="",m=[],g=a[3].length,d=0;g>d;d++){var v=a[3].charAt(d);"|"===v||"$"===v||"@"===v||"]"===v?(p&&(m.push(u(p)),p=""),"|"!==v&&m.push(v)):p+=v}var h=m.length,y=0;return function b(){var e=m[y++];if("@"===e){for(var a=[];h>y;y++){var c=m[y];if("]"===c)return a;if("@"===c||"$"===c)a.push(b());else switch(c){case t:a.push(!0);break;case n:a.push(!1);break;case r:a.push(null);break;case i:a.push(void 0);break;case o:a.push("");break;default:a.push(l[c])}}return a}if("$"===e){for(var a={};h>y;y++){var u=m[y];if("]"===u)return a;u=u===o?"":l[u];var c=m[++y];if("@"===c||"$"===c)a[u]=b();else switch(c){case t:a[u]=!0;break;case n:a[u]=!1;break;case r:a[u]=null;break;case i:a[u]=void 0;break;case o:a[u]="";break;default:a[u]=l[c]}}return a}throw new TypeError("Bad token "+e+" isn't a type")}()},c=function(e){return"string"!=typeof e?e:e.replace(/\+|%2B|%7C|%5E|%25/g,function(e){return{"+":" ","%2B":"+","%7C":"|","%5E":"^","%25":"%"}[e]})},u=function(e){return parseInt(e,36)};e.jsonUnpacker={unpack:function(e){return a(e)}}}(exports);var rules,onRulesBoundHandlers=[];init();}());


	})();

