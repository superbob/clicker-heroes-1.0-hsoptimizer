/******/!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),o=n(2),i=n(3),u=n(4),l=n(5),c=a(l),s=n(6),d=a(s),f=n(7),v=a(f),p=n(8),m=a(p),h=n(9),g=a(h),y=n(10),b=a(y),w=n(11),M=a(w),k=n(12),S=a(k),A=n(13),C=a(A);angular.module("clickerHeroes10Hsoptimizer",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ngRoute","ui.bootstrap","ngclipboard","rzModule"]).constant("moment",moment).config(r.config).config(o.routerConfig).run(i.runBlock).value("maths",v["default"]).service("formulas",c["default"]).service("mechanics",m["default"]).service("hsoptimizer",d["default"]).service("saveDataAnalyzer",g["default"]).service("saveDecoder",b["default"]).filter("exponential",M["default"]).filter("units",S["default"]).filter("numberToExport",C["default"]).controller("MainController",u.MainController)},function(e,t){"use strict";function n(e){"ngInject";e.debugEnabled(!0)}n.$inject=["$logProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=n},function(e,t){"use strict";function n(e){"ngInject";e.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"})}n.$inject=["$routeProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=n},function(e,t){"use strict";function n(e){"ngInject";e.debug("runBlock end")}n.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{!a&&u["return"]&&u["return"]()}finally{if(r)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.MainController=function(){function e(t,r,o,i,u,l,c){"ngInject";var s=this;n(this,e),this.mechanics=c;var d=function(){t.saveData=null,t.hsInStock=0,t.ascendZone=0,t.ancients=[],t.playStyle="idle",t.hsFromAscend=0,t.includeSoulsFromAscend=!1,t.error=void 0,angular.element("#saveData").parent().removeClass("has-error"),t.useScientificNotation=!1,t.hybridRatio=.5,t.slider.value=.5};return t.slider={value:.5,options:{stepsArray:[{value:.1},{value:.2},{value:.3},{value:.4},{value:.5},{value:.6},{value:.7},{value:.8},{value:.9},{value:1},{value:1.5},{value:2},{value:2.5},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10}],onChange:function(e,n){t.hybridRatio=n}}},d(),t.$watch("encodedSaveData",function(e){if(d(),e)try{var n=o.decryptSave(e);u.hasTranscended(n)?u.detectPlayStyle(n)?t.saveData=n:(t.error="Sorry, you need to have at least Siyalatas or Fragsworth to use this calculator",angular.element("#saveData").parent().addClass("has-error")):(t.error="Sorry, you need to have transcended at least once to use this calculator",angular.element("#saveData").parent().addClass("has-error"))}catch(a){r.debug(a),t.error="Save data is invalid",angular.element("#saveData").parent().addClass("has-error")}}),t.$watch("saveData",function(e){e&&(t.hsInStock=u.getHsInStock(e),t.ascendZone=u.getAscendZone(e),t.playStyle=u.detectPlayStyle(e),t.hsFromAscend=u.getHsUponAscend(e),t.useScientificNotation=u.getNumberDisplayMode(e))}),t.$watchGroup(["saveData","ascendZone","playStyle","includeSoulsFromAscend","hybridRatio"],function(e){var n=a(e,5),r=n[0],o=n[1],i=n[2],d=n[3],f=n[4];if(r){var v=t.hsInStock;d&&(v+=t.hsFromAscend),t.ancients=l.computeOptimumLevels(u.getAncients(r),u.getOutsiders(r),v,o,u.getAncientSoulsTotal(r),i,f);var p=u.getOutsiders(t.saveData).filter(function(e){return"Chor'gorloth"===e.name})[0].level;t.totalCost=s.totalCost(c,t.ancients,p)}}),t.getAncientUpgradeCost=function(e,n,a){var r=u.getOutsiders(t.saveData).filter(function(e){return"Chor'gorloth"===e.name})[0].level;return c.getAncientUpgradeCost(e,n,a,r)},t}return e.$inject=["$scope","$log","saveDecoder","formulas","saveDataAnalyzer","hsoptimizer","mechanics"],r(e,[{key:"totalCost",value:function(e,t,n){return t.reduce(function(t,a){return t+e.getAncientUpgradeCost(a.name,a.level,a.optimumLevel,n)},0)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){"ngInject";n(this,e)}return a(e,[{key:"computeMorgulisLevel",value:function(e){return Math.pow(e,2)}},{key:"computeBubosLevel",value:function(e,t){return 2.8*Math.log(e)-1.4*Math.log(1+Math.exp(-.02*t))-5.94}},{key:"computeChronosLevel",value:function(e,t){return 2.75*Math.log(e)-1.375*Math.log(2-Math.exp(-.034*t))-5.1}},{key:"computeGoldLevel",value:function(e){return.926*e}},{key:"computeDoraLevel",value:function(e,t){return 2.877*Math.log(e)-1.4365*Math.log(100/99-Math.exp(-.002*t))-9.63}},{key:"computeDogcogLevel",value:function(e,t){return 2.844*Math.log(e)-1.422*Math.log(1/99+Math.exp(-.01*t))-7.232}},{key:"computeFortunaLevel",value:function(e,t){return 2.875*Math.log(e)-1.4375*Math.log(10/9-Math.exp(-.0025*t))-9.3}},{key:"computeSolomonLevel",value:function(e,t){return Math.pow(e,.8)/Math.pow(t,.4)}},{key:"computeAtmanLevel",value:function(e,t,n){return 2.832*Math.log(e)-1.416*Math.log(n)-1.416*Math.log(4/3-Math.exp(-.013*t))-6.613}},{key:"computeKumawakamaruLevel",value:function(e,t,n){return 2.88*Math.log(e)-1.44*Math.log(n)-1.44*Math.log(.25+Math.exp(-.001*t))-10.42}},{key:"computeHybridBhaalLevel",value:function(e,t){return t*e}},{key:"computeHybridJuggernautLevel",value:function(e,t){return Math.pow(t*e,.8)}},{key:"computeActiveJuggernautLevel",value:function(e){return Math.pow(e,.8)}},{key:"computeAlpha",value:function(e,t){var n=.005*Math.ceil(t/500)+1.14;return 1.4067*Math.log(1+e)/Math.log(n)}},{key:"computeTranscendencePower",value:function(e,t){var n=50-49*Math.exp(-e/1e4),a=.05*t;return(n+a)/100}}]),e}();t["default"]=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e){return e},o=function(e){return function(t){return"idle"===t||"hybrid"===t?e:void 0}},i=function(e,t){return function(n){return"active"===n?e:"hybrid"===n?t:void 0}},u=function(e){return function(){return e}},l=function(){function e(t,a){"ngInject";n(this,e),this.formulas=t,this.mechanics=a,this.ancientsOptimizedLevel={Solomon:u(function(e,n,a){return t.computeSolomonLevel(e,a)}),Libertas:o(t.computeGoldLevel),Siyalatas:o(r),Mammon:u(t.computeGoldLevel),Mimzee:u(t.computeGoldLevel),Dogcog:u(t.computeDogcogLevel),Fortuna:u(t.computeFortunaLevel),Atman:u(t.computeAtmanLevel),Dora:u(t.computeDoraLevel),Bhaal:i(r,function(e,n,a,r){return t.computeHybridBhaalLevel(e,r)}),Morgulis:u(t.computeMorgulisLevel),Chronos:u(t.computeChronosLevel),Bubos:u(t.computeBubosLevel),Fragsworth:i(r,function(e,n,a,r){return t.computeHybridBhaalLevel(e,r)}),Kumawakamaru:u(t.computeKumawakamaruLevel),Argaiv:u(r),Juggernaut:i(t.computeActiveJuggernautLevel,function(e,n,a,r){return t.computeHybridJuggernautLevel(e,r)})}}return e.$inject=["formulas","mechanics"],a(e,[{key:"computeOptimumLevels",value:function(e,t,n,a,r,o,i){for(var u=this,l=t.filter(function(e){return"Phandoryss"===e.name})[0].level,c=t.filter(function(e){return"Chor'gorloth"===e.name})[0].level,s=1,d=this.formulas.computeTranscendencePower(r,l),f=this.formulas.computeAlpha(d,a),v=n,p=0,m=function(e,t,n,a,r,o){var i=u.ancientsOptimizedLevel[e];if(i){var l=i(t);if(l)return l(n,a,r,o)}},h=function(e,t){return 0===e?0:void 0===t?void 0:Math.max(e,Math.round(t))},g=function(e,t,n,a){return e.map(function(e){return{name:e.name,currentLevel:e.level,optimizedLevel:h(e.level,m(e.name,o,t,e.level,n,a))}}).filter(function(e){return void 0!==e.optimizedLevel})},y=function(e,t){return e.reduce(function(e,n){return e+u.mechanics.getAncientUpgradeCost(n.name,n.currentLevel,n.optimizedLevel,t)},0)},b=0;v>=0||p>0;){for(v=n,p=-1;v>=0;){p++;var w=s+b+Math.pow(2,p),M=g(e,w,f,i);v=n-y(M,c)}p>0&&(b+=Math.pow(2,p-1))}var k=s+b,S=e.map(function(e){var t=h(e.level,m(e.name,o,k,e.level,f,i));return{name:e.name,level:e.level,optimumLevel:t,delta:t-e.level}}).filter(function(e){return void 0!==e.optimumLevel});return S}}]),e}();t["default"]=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={linear:{unit:function(e){return e},sum:function(e){return e*(e+1)/2}},constant:{unit:function(){return 1},sum:function(e){return e+1}},exponential:{unit:function(e){return Math.pow(2,e)},sum:function(e){return Math.pow(2,e+1)-1}},polynomial1_5:{unit:function(e){return Math.ceil(Math.pow(e,1.5))},sumApprox:function(e){return 0===e?0:Math.ceil(2*Math.pow(e,2.5)/5+Math.pow(e,1.5)/2+Math.pow(e,.5)/8+Math.pow(e,-1.5)/1920)}},sum:function(e){return function(t){for(var n=0,a=0;t>=a;a++)n+=e(a);return n}}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(t){"ngInject";n(this,e),this.ancients={Solomon:{id:"3",cost:t.polynomial1_5},Libertas:{id:"4",cost:t.linear},Siyalatas:{id:"5",cost:t.linear},Mammon:{id:"8",cost:t.linear},Mimzee:{id:"9",cost:t.linear},Dogcog:{id:"11",cost:t.exponential},Fortuna:{id:"12",cost:t.exponential},Atman:{id:"13",cost:t.exponential},Dora:{id:"14",cost:t.exponential},Bhaal:{id:"15",cost:t.linear},Morgulis:{id:"16",cost:t.constant},Chronos:{id:"17",cost:t.exponential},Bubos:{id:"18",cost:t.exponential},Fragsworth:{id:"19",cost:t.linear},Vaagur:{id:"20",cost:t.exponential},Kumawakamaru:{id:"21",cost:t.exponential},Chawedo:{id:"22",cost:t.exponential},Hecatoncheir:{id:"23",cost:t.exponential},Berserker:{id:"24",cost:t.exponential},Sniperino:{id:"25",cost:t.exponential},Kleptos:{id:"26",cost:t.exponential},Energon:{id:"27",cost:t.exponential},Argaiv:{id:"28",cost:t.linear},Juggernaut:{id:"29",cost:t.polynomial1_5},Revolc:{id:"31",cost:t.exponential}},this.outsiders={"Chor'gorloth":{id:"2"},Phandoryss:{id:"3"}}}return e.$inject=["maths"],a(e,[{key:"getAncientCostSum",value:function(e){return this.ancients[e].cost.sum||this.ancients[e].cost.sumApprox}},{key:"getAncientNameById",value:function(e){for(var t in this.ancients)if(this.ancients[t].id===e)return t}},{key:"getOutsiderNameById",value:function(e){for(var t in this.outsiders)if(this.outsiders[t].id===e)return t}},{key:"getAncientCost",value:function(e){return this.ancients[e].cost.unit}},{key:"getAncientCostMultiplier",value:function(e){return Math.pow(.95,e)}},{key:"getAncientUpgradeCost",value:function(e,t,n){var a=arguments.length<=3||void 0===arguments[3]?0:arguments[3];return Math.ceil((this.getAncientCostSum(e)(n)-this.getAncientCostSum(e)(t))*this.getAncientCostMultiplier(a))}}]),e}();t["default"]=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(e,t){return e&&t?"hybrid":e||t},o=function(){function e(t){"ngInject";n(this,e),this.mechanics=t}return e.$inject=["mechanics"],a(e,[{key:"getAncients",value:function(e){var t=this;return Object.keys(e.ancients.ancients).map(function(n){return{name:t.mechanics.getAncientNameById(n),level:Math.floor(e.ancients.ancients[n].level)}})}},{key:"getOutsiders",value:function(e){var t=this;return Object.keys(e.outsiders.outsiders).map(function(n){return{name:t.mechanics.getOutsiderNameById(n),level:Math.round(e.outsiders.outsiders[n].level)}})}},{key:"getHsInStock",value:function(e){return Math.round(e.heroSouls)}},{key:"getHsUponAscend",value:function(e){return Math.round(e.primalSouls)}},{key:"getAncientSoulsTotal",value:function(e){return Math.round(e.ancientSoulsTotal)}},{key:"getAscendZone",value:function(e){return Math.round(e.highestFinishedZonePersist)}},{key:"detectPlayStyle",value:function(e){return this.getAncients(e).filter(function(e){return"Siyalatas"===e.name||"Fragsworth"===e.name}).map(function(e){return"Siyalatas"===e.name?"idle":"active"}).reduce(r,void 0)}},{key:"hasTranscended",value:function(e){return!!e.transcendent}},{key:"getNumberDisplayMode",value:function(e){return!!e.numberDisplayMode}}]),e}();t["default"]=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=e.search(l);-1!=t&&(e=r(e));var n=atob(e);return JSON.parse(n)}function r(e){var t=e.split(l),n=o(t[0]),a=t[1],r=i(n);return(r=a)?n:void alert("Hash is bad")}function o(e){for(var t=e.split(""),n=[],a=0;a<t.length;)n[a/2]=t[a],a+=2;return n.join("")}function i(e){var t=e.split();t.sort();var n=t.join();return CryptoJS.MD5(n+c)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l="Fe12NAfA3R6z4k0z",c="af0ik392jrmt0nsfdghy0",s=function(){function e(){"ngInject";n(this,e)}return u(e,[{key:"decryptSave",value:function(e){return a(e)}}]),e}();t["default"]=s},function(e,t){"use strict";function n(){return function(e){var t=arguments.length<=1||void 0===arguments[1]?1e5:arguments[1];return t>=e?e.toLocaleString():e.toExponential(3).replace("+","")}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function a(){var e=["","K","M","B","T","q","Q","s","S","O","N","d","U","D","!","@","#","$","%","^","&","*"],t=function(e){return e.toExponential(3).replace("+","")},n=function(t,n){return Math.round(t/Math.pow(1e3,n)).toLocaleString("en-US")+e[n]},a=function(e){return n(e,0)};return function(n){var o=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];if(o)return 1e5>=n?a(n):t(n);var i=void 0;i="undefined"!==r(Math.log10)?Math.log10:function(e){return Math.log(e)/Math.log(10)};var u=Math.max(Math.floor((i(n)-2)/3),0);if(u>=e.length)return t(n);var l=function(t,n){return Math.round(t/Math.pow(1e3,n)).toLocaleString("en-US")+e[n]};return l(n,u)}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=a},function(e,t){"use strict";function n(){var e=1e20,t=1e10,n=1e40,a=1e30;return function(r){return r>n?Math.floor(r/a)+"e30":r>e?Math.floor(r/t)+"e10":r.toString()}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]),angular.module("clickerHeroes10Hsoptimizer").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class=header> <div class=container> <h1>Clicker Heroes 1.0 HS Optimizer</h1> </div> </div> <div class=container> <div class=row> <p>This calculator is based on <a href=https://www.reddit.com/r/ClickerHeroes/comments/4naohc/math_and_transcendance><strong>Math and Transcendance</strong></a> by <a href=https://www.reddit.com/user/sugima>/u/sugima</a> and <a href=https://www.reddit.com/r/ClickerHeroes/comments/3y57jd/updated_rules_of_thumb/ ><strong>Updated Rules of Thumb!</strong></a> by <a href=https://www.reddit.com/user/TinDragon>/u/TinDragon</a>.</p> <p>It can compute optimized ancients levels using idle, active and hybrid builds.</p> <p>You need at least Siyalatas or Fragsworth at level 1 and to have transcended at least once to make it work.</p> <p>Source code is <a href=https://www.github.com/superbob/clicker-heroes-1.0-hsoptimizer>here</a>, feel free to open to <a href=https://github.com/superbob/clicker-heroes-1.0-hsoptimizer/issues>issues</a> and <a href=https://github.com/superbob/clicker-heroes-1.0-hsoptimizer/pulls>pull requests</a>.</p> <p>Announcement and discussions on <a href=https://www.reddit.com/r/ClickerHeroes/comments/4qhud9/transcendence_hs_optimizer>/r/ClickerHeroes/comments/4qhud9/transcendence_hs_optimizer</a>. </p></div> <div class=row> <div class="panel panel-default"> <div class=panel-heading>Data</div> <div class=panel-body> <div class=col-md-4> <form> <div class=form-group> <label for=saveData>Save data</label> <textarea class=form-control id=saveData rows=3 placeholder="Paste your save data here" ng-model=main.encodedSaveData autofocus></textarea> </div> <p class=text-danger ng-show=main.error>{{main.error}}</p> </form> </div> <form class=form-inline> <div class=col-md-4> <div class=form-group> <label for=ascendZone>Ascend zone</label> <input type=text class=form-control id=ascendZone ng-model=main.ascendZone> </div> <div class=form-group> <div class=checkbox> <label> <input type=checkbox ng-model=main.includeSoulsFromAscend>Include souls from ascension<span ng-if=main.saveData> (+{{main.hsFromAscend | units:useScientificNotation}})</span> </label> </div> </div> <div class=form-group> <div class=checkbox> <label> <input type=checkbox ng-model=main.useScientificNotation>Use scientific notation </label> </div> </div> </div> <div class=col-md-4> <div class=row> <div class=form-group> <label>Playstyle</label> <div class=radio> <label> <input type=radio name=playstyle id=playStyleIdle value=idle ng-model=main.playStyle checked> Idle </label> </div> <div class=radio> <label> <input type=radio name=playstyle id=playStyleHybrid value=hybrid ng-model=main.playStyle> Hybrid </label> </div> <div class=radio> <label> <input type=radio name=playstyle id=playStyleActive value=active ng-model=main.playStyle> Active </label> </div> </div> </div> <div class=row ng-if="main.playStyle == \'hybrid\'"> <div class=form-group> Hybrid Idle/Active ratio <rzslider rz-slider-model=main.slider.value rz-slider-options=main.slider.options></rzslider> </div> </div> </div> </form> </div> </div> </div> <div class=row ng-if=main.saveData> <p>You have {{main.hsInStock | units:useScientificNotation}} HS in stock.</p> </div> <div class=row ng-if=main.saveData> <table class="table table-striped table-condensed"> <thead> <tr> <th>Ancient</th> <th>Current</th> <th>Goal</th> <th>Delta</th> <th>Cost (HS)</th> </tr> </thead> <tbody> <tr ng-repeat="ancient in main.ancients | orderBy : \'name\'"> <td>{{ancient.name}}</td> <td>{{ancient.level | units:useScientificNotation}}</td> <td>{{ancient.optimumLevel | units:useScientificNotation}}</td> <td><strong><a class=selectable ngclipboard data-clipboard-text="{{ancient.optimumLevel - ancient.level | numberToExport}}" uib-tooltip="Click to copy {{ancient.optimumLevel - ancient.level | numberToExport}} to clipboard" tooltip-placement=right>+{{ancient.optimumLevel - ancient.level | units:useScientificNotation}}</a></strong></td> <td>{{main.getAncientUpgradeCost(ancient.name, ancient.level, ancient.optimumLevel) | units:useScientificNotation}}</td> </tr> </tbody> <tfoot> <tr> <th colspan=4><strong>Total cost</strong></th> <th><strong>{{main.totalCost | units:useScientificNotation}}</strong></th> </tr> </tfoot> </table> </div> <div class=row> <div class="panel panel-default"> <div class=panel-heading>More Info</div> <div class=panel-body> <p>This optimizer is primarly based on <a href=https://www.reddit.com/r/ClickerHeroes/comments/4naohc/math_and_transcendance>these formulas</a> by <a href=https://www.reddit.com/user/sugima>/u/sugima</a> for idle builds.</p> <p><a href=https://www.reddit.com/r/ClickerHeroes/comments/3y57jd/updated_rules_of_thumb/ >Older formulas</a> by <a href=https://www.reddit.com/user/TinDragon>/u/TinDragon</a> are used to compute active and hybrid builds.</p> <p>Also, <a href=https://www.reddit.com/user/Shruikan864>/u/Shruikan864</a>\'s <a href=https://www.reddit.com/r/ClickerHeroes/comments/4nox6i/rules_of_thumb_10_spreadsheet/ >Rules of Thumb 1.0 Spreadsheet</a> was used to get and verify some important formulas (Chor multiplier, TP, alpha, ...).</p> <p>Important variations with other calculators can come from rounding, as a "round to the nearest integer" is applied in computed optimized ancient levels instead of a floor that can be seen in other calculators (such as <a href=https://kepow.org/clickerheroes>kepow</a> or <em>Rules of Thumb 1.0 Spreadsheet</em>).</p> </div> </div> </div> </div>')}]);
//# sourceMappingURL=../maps/scripts/app-b1090490b9.js.map
