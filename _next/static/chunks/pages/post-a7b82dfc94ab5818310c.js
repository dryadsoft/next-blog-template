(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{6674:function(e,t,n){"use strict";var r=n(9008),o=(n(7294),n(5893));t.Z=function(e){var t=e.title;return(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1063),i=n(4651),u=n(7426);var l={};function s(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,_=e.shallow,b=e.scroll,g=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var y=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,w=u.useIntersection({rootMargin:"200px"}),m=r(w,2),E=m[0],x=m[1],L=a.default.useCallback((function(e){E(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,E]);a.default.useEffect((function(){var e=x&&n&&c.isLocalURL(d),t="undefined"!==typeof g?g:o&&o.locale,r=l[d+"%"+v+(t?"%"+t:"")];e&&!r&&s(o,d,v,{locale:t})}),[v,d,x,g,n,o]);var j={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(e,o,d,v,h,_,b,g)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,v,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof g?g:o&&o.locale,k=o&&o.isLocaleDomain&&c.getDomainLocale(v,M,o&&o.locales,o&&o.domainLocales);j.href=k||c.addBasePath(c.addLocale(v,M,o&&o.defaultLocale))}return a.default.cloneElement(t,j)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=o.useRef(),l=o.useState(!1),s=r(l,2),f=s[0],d=s[1],v=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[v,f]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},3828:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c}});var r=n(1664),o=n(6674),a=n(5893),c=!0;t.default=function(e){var t=e.rates;return console.log("getStaticProps",t.length),(0,a.jsxs)("div",{className:"text-white bg-gray-900 h-screen w-screen overflow-hidden",children:[(0,a.jsx)(o.Z,{title:"Post"}),(0,a.jsx)(r.default,{href:"/",children:(0,a.jsx)("a",{children:"Home"})})," ","|"," ",(0,a.jsx)(r.default,{href:"/about",children:(0,a.jsx)("a",{children:"About"})})]})}},6542:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){return n(3828)}])},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=6542,e(e.s=t);var t}));var t=e.O();_N_E=t}]);