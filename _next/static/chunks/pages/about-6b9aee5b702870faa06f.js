(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),u=t(4651),l=t(7426);var i={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),s=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,_=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,E=l.useIntersection({rootMargin:"200px"}),m=r(E,2),L=m[0],w=m[1],M=a.default.useCallback((function(e){L(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,L]);a.default.useEffect((function(){var e=w&&t&&c.isLocalURL(d),n="undefined"!==typeof _?_:o&&o.locale,r=i[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,w,_,t,o]);var k={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:l,scroll:u}))}(e,o,d,p,h,b,y,_)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof _?_:o&&o.locale,j=o&&o.isLocaleDomain&&c.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);k.href=j||c.addBasePath(c.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,l=o.useRef(),i=o.useState(!1),f=r(i,2),s=f[0],d=f[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),t||s||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},650:function(e,n,t){"use strict";t.r(n);var r=t(1664),o=(t(7294),t(5893));n.default=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"About"}),(0,o.jsx)(r.default,{href:"/",children:(0,o.jsx)("a",{children:"Home"})})," ","|"," ",(0,o.jsx)(r.default,{href:"/post",children:(0,o.jsx)("a",{children:"Post"})})]})}},5706:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(650)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5706,e(e.s=n);var n}));var n=e.O();_N_E=n}]);