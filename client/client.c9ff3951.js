function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,p=!1;function m(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:m(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function w(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function S(){return E(" ")}function x(){return E("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:N(e,r,t[r])}function P(e){return Array.from(e.childNodes)}function R(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,r,s=!1){R(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,r){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function H(e,t,n){return k(e,t,n,$)}function O(e,t,n){return k(e,t,n,y)}function C(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function U(e){return C(e," ")}function j(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function M(e){const t=j(e,"HTML_TAG_START",0),n=j(e,"HTML_TAG_END",t);if(t===n)return new K;R(e);const r=e.splice(t,n+1);_(r[0]),_(r[r.length-1]);const s=r.slice(1,r.length-1);for(const t of s)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new K(s)}function G(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function D(e,t){e.value=null==t?"":t}function B(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=B();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),_(n)}}function z(e,t=document.body){return Array.from(t.querySelectorAll(e))}class K extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=$(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function W(e){h=e}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function V(e){J().$$.on_mount.push(e)}function F(e){J().$$.after_update.push(e)}function Y(e){J().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function re(e){Z.push(e)}const se=new Set;let oe=0;function ie(){const e=h;do{for(;oe<X.length;){const e=X[oe];oe++,W(e),ae(e.$$)}for(W(null),X.length=0,oe=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];se.has(t)||(se.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,se.clear(),W(e)}function ae(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}const ce=new Set;let le;function ue(){le={r:0,c:[],p:le}}function de(){le.r||s(le.c),le=le.p}function fe(e,t){e&&e.i&&(ce.delete(e),e.i(t))}function he(e,t,n,r){if(e&&e.o){if(ce.has(e))return;ce.add(e),le.c.push((()=>{ce.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function pe(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function me(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function be(e,t){e&&e.l(t)}function ve(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||re((()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(re)}function _e(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ie)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function $e(t,n,o,i,a,c,l,u=[-1]){const d=h;W(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),m&&we(t,e)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const e=P(n.target);f.fragment&&f.fragment.l(e),e.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&fe(t.$$.fragment),ve(t,n.target,n.anchor,n.customElement),p=!1,ie()}W(d)}class ye{$destroy(){_e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ee=[];function Se(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!Ee.length;for(const e of s)e[1](),Ee.push(e,t);if(e){for(let e=0;e<Ee.length;e+=2)Ee[e][0](Ee[e+1]);Ee.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const xe={};var Te={owner:"upptime",repo:"upptime",sites:[{name:"Google",url:"https://www.google.com"},{name:"Wikipedia",url:"https://en.wikipedia.org"},{name:"Hacker News",url:"https://news.ycombinator.com"},{name:"Broken Site",url:"https://thissitedoesnotexist.com"},{name:"Test for HEAD",method:"HEAD",url:"https://www.google.com"},{name:"Secret Site BIS",method:"GET",url:"$SECRET_SITE"},{name:"TCP ping",url:"1.1.1.1"},{name:"Secret Site BRA",method:"GET",url:"$SECRET_SITE_BRA"}],"status-website":{cname:"demo.upptime.js.org",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/upptime/upptime). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://demo.upptime.js.org",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ae(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ne(t){let n,r,s,o=Te["status-website"]&&!Te["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=$("img"),this.h()},l(e){n=H(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=Te["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}(),i=Te["status-website"]&&!Te["status-website"].hideNavTitle&&function(t){let n,r,s=Te["status-website"].name+"";return{c(){n=$("div"),r=E(s)},l(e){n=H(e,"DIV",{});var t=P(n);r=C(t,s),t.forEach(_)},m(e,t){v(e,n,t),g(n,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=$("div"),r=$("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(e){n=H(e,"DIV",{});var t=P(n);r=H(t,"A",{href:!0,class:!0});var a=P(r);o&&o.l(a),s=U(a),i&&i.l(a),a.forEach(_),t.forEach(_),this.h()},h(){N(r,"href",Te["status-website"].logoHref||Te.path),N(r,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(e,t){Te["status-website"]&&!Te["status-website"].hideNavLogo&&o.p(e,t),Te["status-website"]&&!Te["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&_(n),o&&o.d(),i&&i.d()}}}function Ie(e){let t,n,r,s,o,i,a=e[1].title+"";return{c(){t=$("li"),n=$("a"),r=E(a),i=S(),this.h()},l(e){t=H(e,"LI",{});var s=P(t);n=H(s,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);r=C(o,a),o.forEach(_),i=U(s),s.forEach(_),this.h()},h(){N(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",o=e[1].href.replace("$OWNER",Te.owner).replace("$REPO",Te.repo)),N(n,"class","svelte-a08hsz")},m(e,s){v(e,t,s),g(t,n),g(n,r),g(t,i)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(e){e&&_(t)}}}function Pe(t){let n,r,s,o,i,a=Te["status-website"]&&Te["status-website"].logoUrl&&Ne(),c=Te["status-website"]&&Te["status-website"].navbar&&function(e){let t,n=Te["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ie(Ae(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=x()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(1&s){let o;for(n=Te["status-website"].navbar,o=0;o<n.length;o+=1){const i=Ae(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ie(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){w(r,e),e&&_(t)}}}(t),l=Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&function(t){let n,r,s,o=Te.i18n.navGitHub+"";return{c(){n=$("li"),r=$("a"),s=E(o),this.h()},l(e){n=H(e,"LI",{});var t=P(n);r=H(t,"A",{href:!0,class:!0});var i=P(r);s=C(i,o),i.forEach(_),t.forEach(_),this.h()},h(){N(r,"href",`https://github.com/${Te.owner}/${Te.repo}`),N(r,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=$("nav"),r=$("div"),a&&a.c(),s=S(),o=$("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(e){n=H(e,"NAV",{class:!0});var t=P(n);r=H(t,"DIV",{class:!0});var u=P(r);a&&a.l(u),s=U(u),o=H(u,"UL",{class:!0});var d=P(o);c&&c.l(d),i=U(d),l&&l.l(d),d.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){Te["status-website"]&&Te["status-website"].logoUrl&&a.p(e,t),Te["status-website"]&&Te["status-website"].navbar&&c.p(e,t),Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Re(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Le extends ye{constructor(e){super(),$e(this,e,Re,Pe,i,{segment:0})}}var ke={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function He(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Oe(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ce(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},d=0;function f(e){var t=ke[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=f(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+He(Oe(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ce(He(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Oe(s[8])+'" alt="'+Oe(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Oe(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ce(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Oe(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ue(e,t,n){const r=e.slice();return r[3]=t[n],r}function je(e,t,n){const r=e.slice();return r[3]=t[n],r}function Me(e,t,n){const r=e.slice();return r[8]=t[n],r}function Ge(t){let n;return{c(){n=$("link"),this.h()},l(e){n=H(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Te.path}/themes/${(Te["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function De(t){let n;return{c(){n=$("link"),this.h()},l(e){n=H(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Te["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Be(t){let n,r;return{c(){n=$("script"),this.h()},l(e){n=H(e,"SCRIPT",{src:!0}),P(n).forEach(_),this.h()},h(){c(n.src,r=t[8].src)||N(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n;return{c(){n=$("link"),this.h()},l(e){n=H(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n;return{c(){n=$("meta"),this.h()},l(e){n=H(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ke(t){let n,r,s,o,i,a,c,u,d,f,h,p,m,b,y,E,T,A,I=Ce(Te.i18n.footer.replace(/\$REPO/,`https://github.com/${Te.owner}/${Te.repo}`))+"",R=(Te["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Te["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,r=x(),this.h()},l(e){n=M(e),r=x(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();let L=((Te["status-website"]||{}).themeUrl?De:Ge)(t),k=(Te["status-website"]||{}).scripts&&function(e){let t,n=(Te["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(Me(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=x()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Me(e,n,o);r[o]?r[o].p(i,s):(r[o]=Be(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){w(r,e),e&&_(t)}}}(t),O=(Te["status-website"]||{}).links&&function(e){let t,n=(Te["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=qe(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=x()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=je(e,n,o);r[o]?r[o].p(i,s):(r[o]=qe(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){w(r,e),e&&_(t)}}}(t),C=(Te["status-website"]||{}).metaTags&&function(e){let t,n=(Te["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=ze(Ue(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=x()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=x()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Te["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ue(e,n,o);r[o]?r[o].p(i,s):(r[o]=ze(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){w(r,e),e&&_(t)}}}(t),j=Te["status-website"].css&&function(t){let n,r,s=`<style>${Te["status-website"].css}</style>`;return{c(){n=new K,r=x(),this.h()},l(e){n=M(e),r=x(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),G=Te["status-website"].js&&function(t){let n,r,s=`<script>${Te["status-website"].js}<\/script>`;return{c(){n=new K,r=x(),this.h()},l(e){n=M(e),r=x(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),D=(Te["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Te["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,r=x(),this.h()},l(e){n=M(e),r=x(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();p=new Le({props:{segment:t[0]}});const B=t[2].default,q=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(B,t,t[1],null);return{c(){R&&R.c(),n=x(),L.c(),r=$("link"),s=$("link"),o=$("link"),k&&k.c(),i=x(),O&&O.c(),a=x(),C&&C.c(),c=x(),j&&j.c(),u=x(),G&&G.c(),d=x(),f=S(),D&&D.c(),h=S(),ge(p.$$.fragment),m=S(),b=$("main"),q&&q.c(),y=S(),E=$("footer"),T=$("p"),this.h()},l(e){const t=z('[data-svelte="svelte-ri9y7q"]',document.head);R&&R.l(t),n=x(),L.l(t),r=H(t,"LINK",{rel:!0,href:!0}),s=H(t,"LINK",{rel:!0,type:!0,href:!0}),o=H(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=x(),O&&O.l(t),a=x(),C&&C.l(t),c=x(),j&&j.l(t),u=x(),G&&G.l(t),d=x(),t.forEach(_),f=U(e),D&&D.l(e),h=U(e),be(p.$$.fragment,e),m=U(e),b=H(e,"MAIN",{class:!0});var l=P(b);q&&q.l(l),l.forEach(_),y=U(e),E=H(e,"FOOTER",{class:!0});var g=P(E);T=H(g,"P",{}),P(T).forEach(_),g.forEach(_),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Te.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(Te["status-website"]||{}).faviconSvg||(Te["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Te["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(e,t){R&&R.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),G&&G.m(document.head,null),g(document.head,d),v(e,f,t),D&&D.m(e,t),v(e,h,t),ve(p,e,t),v(e,m,t),v(e,b,t),q&&q.m(b,null),v(e,y,t),v(e,E,t),g(E,T),T.innerHTML=I,A=!0},p(e,[t]){(Te["status-website"]||{}).customHeadHtml&&R.p(e,t),L.p(e,t),(Te["status-website"]||{}).scripts&&k.p(e,t),(Te["status-website"]||{}).links&&O.p(e,t),(Te["status-website"]||{}).metaTags&&C.p(e,t),Te["status-website"].css&&j.p(e,t),Te["status-website"].js&&G.p(e,t),(Te["status-website"]||{}).customBodyHtml&&D.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),q&&q.p&&(!A||2&t)&&function(e,t,n,r,s,o){if(s){const i=l(t,n,r,o);e.p(i,s)}}(q,B,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(B,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(fe(p.$$.fragment,e),fe(q,e),A=!0)},o(e){he(p.$$.fragment,e),he(q,e),A=!1},d(e){R&&R.d(e),_(n),L.d(e),_(r),_(s),_(o),k&&k.d(e),_(i),O&&O.d(e),_(a),C&&C.d(e),_(c),j&&j.d(e),_(u),G&&G.d(e),_(d),e&&_(f),D&&D.d(e),e&&_(h),_e(p,e),e&&_(m),e&&_(b),q&&q.d(e),e&&_(y),e&&_(E)}}}function We(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Je extends ye{constructor(e){super(),$e(this,e,We,Ke,i,{segment:0})}}function Ve(e){let t,n,r=e[1].stack+"";return{c(){t=$("pre"),n=E(r)},l(e){t=H(e,"PRE",{});var s=P(t);n=C(s,r),s.forEach(_)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&G(n,r)},d(e){e&&_(t)}}}function Fe(t){let n,r,s,o,i,a,c,l,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Ve(t);return{c(){r=S(),s=$("h1"),o=E(t[0]),i=S(),a=$("p"),c=E(d),l=S(),f&&f.c(),u=x(),this.h()},l(e){z('[data-svelte="svelte-1moakz"]',document.head).forEach(_),r=U(e),s=H(e,"H1",{class:!0});var n=P(s);o=C(n,t[0]),n.forEach(_),i=U(e),a=H(e,"P",{class:!0});var h=P(a);c=C(h,d),h.forEach(_),l=U(e),f&&f.l(e),u=x(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(e,t){v(e,r,t),v(e,s,t),g(s,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),f&&f.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&G(o,e[0]),2&t&&d!==(d=e[1].message+"")&&G(c,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Ve(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&_(r),e&&_(s),e&&_(i),e&&_(a),e&&_(l),f&&f.d(e),e&&_(u)}}}function Ye(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Xe extends ye{constructor(e){super(),$e(this,e,Ye,Fe,i,{status:0,error:1})}}function Qe(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ge(n.$$.fragment),r=x()},l(e){n&&be(n.$$.fragment,e),r=x()},m(e,t){n&&ve(n,e,t),v(e,r,t),s=!0},p(e,t){const s=16&t?pe(o,[me(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{_e(e,1)})),de()}i?(n=new i(a()),ge(n.$$.fragment),fe(n.$$.fragment,1),ve(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&fe(n.$$.fragment,e),s=!0)},o(e){n&&he(n.$$.fragment,e),s=!1},d(e){e&&_(r),n&&_e(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){be(t.$$.fragment,e)},m(e,r){ve(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(fe(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function et(e){let t,n,r,s;const o=[Ze,Qe],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=x()},l(e){n.l(e),r=x()},m(e,n){i[t].m(e,n),v(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(ue(),he(i[c],1,1,(()=>{i[c]=null})),de(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),fe(n,1),n.m(r.parentNode,r))},i(e){s||(fe(n),s=!0)},o(e){he(n),s=!1},d(e){i[t].d(e),e&&_(r)}}}function tt(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Je({props:o}),{c(){ge(n.$$.fragment)},l(e){be(n.$$.fragment,e)},m(e,t){ve(n,e,t),r=!0},p(e,[t]){const r=12&t?pe(s,[4&t&&{segment:e[2][0]},8&t&&me(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(fe(n.$$.fragment,e),r=!0)},o(e){he(n.$$.fragment,e),r=!1},d(e){_e(n,e)}}}function nt(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,d;return F(l),u=xe,d=r,J().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class rt extends ye{constructor(e){super(),$e(this,e,nt,tt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const st=[],ot=[{js:()=>Promise.all([import("./index.7d4ec271.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.8cb7b51b.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.f934bb91.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.36dead29.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.0083f4d4.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],it=(at=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:at(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:at(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var at;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ct(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function lt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,dt=1;const ft="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let pt,mt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function bt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!st.some((e=>e.test(t))))for(let n=0;n<it.length;n+=1){const r=it[n],s=r.pattern.exec(t);if(s){const n=gt(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function vt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=lt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=bt(s);if(o){$t(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),ft.pushState({id:ut},"",s.href)}}function _t(){return{x:pageXOffset,y:pageYOffset}}function wt(e){if(ht[ut]=_t(),e.state){const t=bt(new URL(location.href));t?$t(t,e.state.id):location.href=location.href}else!function(e){dt=e}(dt+1),function(e){ut=e}(dt),ft.replaceState({id:ut},"",location.href)}function $t(e,t,n,r){return ct(this,void 0,void 0,(function*(){const s=!!t;if(s)ut=t;else{const e=_t();ht[ut]=e,ut=t=++dt,ht[ut]=n?e:{x:0,y:0}}if(yield mt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function yt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Et,St=null;function xt(e){const t=lt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=bt(new URL(e,yt(document)));if(t)St&&e===St.href||(St={href:e,promise:Bt(t)}),St.promise}(t.href)}function Tt(e){clearTimeout(Et),Et=setTimeout((()=>{xt(e)}),20)}function At(e,t={noscroll:!1,replaceState:!1}){const n=bt(new URL(e,yt(document)));if(n){const r=$t(n,null,t.noscroll);return ft[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),r}return location.href=e,new Promise((()=>{}))}const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let It,Pt,Rt,Lt=!1,kt=[],Ht="{}";const Ot={page:function(e){const t=Se(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Se(null),session:Se(Nt&&Nt.session)};let Ct,Ut,jt;function Mt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Gt(e){return ct(this,void 0,void 0,(function*(){It&&Ot.preloading.set(!0);const t=function(e){return St&&St.href===e.href?St.promise:Bt(e)}(e),n=Pt={},r=yield t,{redirect:s}=r;if(n===Pt)if(s)yield At(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield Dt(n,t,Mt(t,e.page))}}))}function Dt(e,t,n){return ct(this,void 0,void 0,(function*(){Ot.page.set(n),Ot.preloading.set(!1),It?It.$set(t):(t.stores={page:{subscribe:Ot.page.subscribe},preloading:{subscribe:Ot.preloading.subscribe},session:Ot.session},t.level0={props:yield Rt},t.notify=Ot.page.notify,It=new rt({target:jt,props:t,hydrate:!0})),kt=e,Ht=JSON.stringify(n.query),Lt=!0,Ut=!1}))}function Bt(e){return ct(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Rt){const e=()=>({});Rt=Nt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ct)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ct(this,void 0,void 0,(function*(){const d=r[a];if(function(e,t,n,r){if(r!==Ht)return!0;const s=kt[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:d};const f=c++;let h;if(Ut||u||!kt[a]||kt[a].part!==t.i){u=!1;const{default:r,preload:s}=yield ot[t.i].js();let o;o=Lt||!Nt.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ct):{}:Nt.preloaded[a+1],h={component:r,props:o,segment:d,match:l,part:t.i}}else h=kt[a];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var qt,zt,Kt;Ot.session.subscribe((e=>ct(void 0,void 0,void 0,(function*(){if(Ct=e,!Lt)return;Ut=!0;const t=bt(new URL(location.href)),n=Pt={},{redirect:r,props:s,branch:o}=yield Bt(t);n===Pt&&(r?yield At(r.location,{replaceState:!0}):yield Dt(o,s,Mt(s,t.page)))})))),qt={target:document.querySelector("#sapper")},zt=qt.target,jt=zt,Kt=Nt.baseUrl,pt=Kt,mt=Gt,"scrollRestoration"in ft&&(ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ft.scrollRestoration="auto"})),addEventListener("load",(()=>{ft.scrollRestoration="manual"})),addEventListener("click",vt),addEventListener("popstate",wt),addEventListener("touchstart",xt),addEventListener("mousemove",Tt),Nt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Nt;Rt||(Rt=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Rt},level1:{props:{status:o,error:i},component:Xe},segments:s},c=gt(n);Dt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ft.replaceState({id:dt},"",t);const n=bt(new URL(location.href));if(n)return $t(n,dt,!0,e)}));export{_e as A,T as B,s as C,Q as D,M as E,c as F,d as G,K as H,z as I,Ce as J,y as K,O as L,At as M,D as N,A as O,t as P,I as Q,pe as R,ye as S,F as T,Y as U,u as V,me as W,re as X,q as Y,P as a,C as b,H as c,_ as d,$ as e,N as f,v as g,g as h,$e as i,S as j,U as k,ue as l,he as m,e as n,de as o,fe as p,V as q,Te as r,i as s,E as t,G as u,x as v,w,ge as x,be as y,ve as z};

import __inject_styles from './inject_styles.803b7e80.js';