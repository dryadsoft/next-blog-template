(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8551:function(e,t,n){"use strict";var r=n(5893),a=n(9008),i=n.n(a),o=(n(7294),n(1864)),c=n.n(o);t.Z=function(e){var t=e.title,n=e.description,a=e.imageUrl,o=e.pageUrl;return a=a&&""!==a?c().join("/assets/",a):"",(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"".concat(t," | ").concat("Nextjs Blog Template")}),(0,r.jsx)("meta",{name:"title",content:"".concat(t," | ").concat("Nextjs Blog Template")}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, height=device-height, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"}),(0,r.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge, chrome=1"}),(0,r.jsx)("meta",{httpEquiv:"imagetoolbar",content:"no"}),(0,r.jsx)("link",{rel:"sitemap",type:"application/xml",href:"/sitemap.xml"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"image_src",href:a}),(0,r.jsx)("meta",{itemProp:"image",content:a}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"referrer",content:"always"}),(0,r.jsx)("link",{rel:"canonical",href:o}),(0,r.jsx)("meta",{name:"robots",content:"all"}),(0,r.jsx)("meta",{name:"by",content:"dryadsoft"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:o})," /",(0,r.jsx)("meta",{property:"og:article:author",content:"dryadsoft"}),(0,r.jsx)("meta",{property:"og:site_name",content:"Nextjs Blog Template"}),(0,r.jsx)("meta",{property:"og:image",content:a}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(t," | ").concat("Nextjs Blog Template")}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:"".concat(t," | ").concat("Nextjs Blog Template")}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:a}),(0,r.jsx)("meta",{name:"twitter:creator",content:"dryadsoft"}),(0,r.jsx)("meta",{name:"twitter:site",content:o}),(0,r.jsx)("meta",{property:"fb:pages",content:"Nextjs Blog Template"})]})}},5075:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s}});var r=n(5893),a=n(5152),i=n.n(a),o=n(8551),c=i()((function(){return n.e(456).then(n.bind(n,7456))}),{loadableGenerated:{webpack:function(){return[7456]}},ssr:!1}),l=i()((function(){return Promise.all([n.e(675),n.e(52)]).then(n.bind(n,2052))}),{loadableGenerated:{webpack:function(){return[2052]}},ssr:!1}),s=!0;t.default=function(e){var t=e.list,n=e.metaData,a=e.navList;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{title:"Home",description:"Next.js\ub97c \uc774\uc6a9\ud55c \uc815\uc801\ube14\ub85c\uadf8\ub97c \ub9cc\ub4dc\ub294 \ud15c\ud50c\ub9bf \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.",pageUrl:n.pageUrl}),1===a.length?(0,r.jsx)(c,{list:t}):t.map((function(e,t){return(0,r.jsx)(l,{datas:e},t)}))]})}},1864:function(e){!function(){"use strict";var t={113:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",a=0,i=-1,o=0,c=0;c<=e.length;++c){if(c<e.length)n=e.charCodeAt(c);else{if(47===n)break;n=47}if(47===n){if(i===c-1||1===o);else if(i!==c-1&&2===o){if(r.length<2||2!==a||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",a=0):a=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),i=c,o=0;continue}}else if(2===r.length||1===r.length){r="",a=0,i=c,o=0;continue}t&&(r.length>0?r+="/..":r="..",a=2)}else r.length>0?r+="/"+e.slice(i+1,c):r=e.slice(i+1,c),a=c-i-1;i=c,o=0}else 46===n&&-1!==o?++o:o=-1}return r}var r={resolve:function(){for(var e,r="",a=!1,i=arguments.length-1;i>=-1&&!a;i--){var o;i>=0?o=arguments[i]:(void 0===e&&(e=""),o=e),t(o),0!==o.length&&(r=o+"/"+r,a=47===o.charCodeAt(0))}return r=n(r,!a),a?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&a&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var a=arguments[n];t(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var i=e.length,o=i-a,c=1;c<n.length&&47===n.charCodeAt(c);++c);for(var l=n.length-c,s=o<l?o:l,f=-1,h=0;h<=s;++h){if(h===s){if(l>s){if(47===n.charCodeAt(c+h))return n.slice(c+h+1);if(0===h)return n.slice(c+h)}else o>s&&(47===e.charCodeAt(a+h)?f=h:0===h&&(f=0));break}var u=e.charCodeAt(a+h);if(u!==n.charCodeAt(c+h))break;47===u&&(f=h)}var m="";for(h=a+f+1;h<=i;++h)h!==i&&47!==e.charCodeAt(h)||(0===m.length?m+="..":m+="/..");return m.length>0?m+n.slice(c+f):(c+=f,47===n.charCodeAt(c)&&++c,n.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,a=-1,i=!0,o=e.length-1;o>=1;--o)if(47===(n=e.charCodeAt(o))){if(!i){a=o;break}}else i=!1;return-1===a?r?"/":".":r&&1===a?"//":e.slice(0,a)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,a=0,i=-1,o=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var c=n.length-1,l=-1;for(r=e.length-1;r>=0;--r){var s=e.charCodeAt(r);if(47===s){if(!o){a=r+1;break}}else-1===l&&(o=!1,l=r+1),c>=0&&(s===n.charCodeAt(c)?-1===--c&&(i=r):(c=-1,i=l))}return a===i?i=l:-1===i&&(i=e.length),e.slice(a,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!o){a=r+1;break}}else-1===i&&(o=!1,i=r+1);return-1===i?"":e.slice(a,i)},extname:function(e){t(e);for(var n=-1,r=0,a=-1,i=!0,o=0,c=e.length-1;c>=0;--c){var l=e.charCodeAt(c);if(47!==l)-1===a&&(i=!1,a=c+1),46===l?-1===n?n=c:1!==o&&(o=1):-1!==n&&(o=-1);else if(!i){r=c+1;break}}return-1===n||-1===a||0===o||1===o&&n===a-1&&n===r+1?"":e.slice(n,a)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,a=e.charCodeAt(0),i=47===a;i?(n.root="/",r=1):r=0;for(var o=-1,c=0,l=-1,s=!0,f=e.length-1,h=0;f>=r;--f)if(47!==(a=e.charCodeAt(f)))-1===l&&(s=!1,l=f+1),46===a?-1===o?o=f:1!==h&&(h=1):-1!==o&&(h=-1);else if(!s){c=f+1;break}return-1===o||-1===l||0===h||1===h&&o===l-1&&o===c+1?-1!==l&&(n.base=n.name=0===c&&i?e.slice(1,l):e.slice(c,l)):(0===c&&i?(n.name=e.slice(1,o),n.base=e.slice(1,l)):(n.name=e.slice(c,o),n.base=e.slice(c,l)),n.ext=e.slice(o,l)),c>0?n.dir=e.slice(0,c-1):i&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}},o=!0;try{t[e](i,i.exports,r),o=!1}finally{o&&delete n[e]}return i.exports}r.ab="//";var a=r(113);e.exports=a}()},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);