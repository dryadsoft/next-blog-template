(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603,978],{2978:function(t,e,i){"use strict";i.r(e);i(7294);var r=i(1664),n=i(5152),s=i(5893),o=(0,n.default)((function(){return Promise.all([i.e(675),i.e(893)]).then(i.bind(i,9893))}),{ssr:!1,loadableGenerated:{webpack:function(){return[9893]},modules:["../components/list.tsx -> ./imageCard"]}}),a=(0,n.default)((function(){return i.e(54).then(i.bind(i,5054))}),{ssr:!1,loadableGenerated:{webpack:function(){return[5054]},modules:["../components/list.tsx -> ./textCard"]}});e.default=function(t){var e=t.list;return(0,s.jsx)("div",{className:"flex-wrap justify-center sm:px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex",children:e.map((function(t){return(0,s.jsx)(r.default,{href:"/".concat(t.blogPath),children:(0,s.jsx)("a",{children:t.imgUrl?(0,s.jsx)(o,{id:t.id,title:t.title,description:t.description,regDate:t.regDate,author:t.author,imgUrl:t.imgUrl,tag:t.tag}):(0,s.jsx)(a,{id:t.id,title:t.title,description:t.description,regDate:t.regDate,author:t.author,tag:t.tag})})},t.id)}))})}},7359:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return c}});var r=i(7294),n=i(9120),s=i(2978),o=JSON.parse('{"W":[{"id":8888,"title":"\ud0c0\uc774\ud2c0\uc785\ub2c8\ub2e4.","description":"description\uc785\ub2c8\ub2e4. description \uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4.description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4.description\uc785\ub2c8\ub2e4.","regDate":"2021-10-24","author":"dryadsoft","tag":["test"],"imgUrl":"/01.webp","blogPath":"post/test8"},{"id":9999,"title":"\ud0c0\uc774\ud2c0\uc785\ub2c8\ub2e4.","description":"description\uc785\ub2c8\ub2e4. description \uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4.description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4.description\uc785\ub2c8\ub2e4.","regDate":"2021-10-24","author":"dryadsoft","tag":["test"],"imgUrl":"","blogPath":"post/test9"}]}'),a=i(5893),c=function(){var t=(0,r.useState)(""),e=t[0],i=t[1],c=(0,r.useState)(),d=c[0],l=c[1],u=(0,r.useState)([]),p=u[0],f=u[1],m=(0,r.useRef)(null),g=function(t){var e=o.W.filter((function(e){return e.title.includes(t)}));e.sort((function(t,e){return isNaN(Number(t.id))?e.id.localeCompare(t.id):e.id-t.id})),f(e)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("form",{className:"flex flex-col justify-center items-center",onSubmit:function(t){t.preventDefault(),document.activeElement.blur()},children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{className:"py-1 pl-2 pr-8 rounded-md text-gray-800 w-60",type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624",value:e,onChange:function(t){var e=t.currentTarget.value;if(i(e),d&&clearTimeout(d),""!==e){var r=setTimeout((function(){g(e)}),300);l(r)}else f([])},autoFocus:!0,ref:m}),(0,a.jsx)(n.b0D,{className:"h-8 p-1 text-gray-300 absolute top-0 right-0 cursor-pointer",onClick:function(){var t;""!==e&&(i(""),f([])),null===(t=m.current)||void 0===t||t.focus()}})]})}),p.length>0?(0,a.jsx)(s.default,{list:p}):(0,a.jsx)("div",{className:"px-5 my-10 flex justify-center items-center",children:(0,a.jsx)("span",{children:"\uac80\uc0c9\uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})})]})}},881:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return i(7359)}])}},function(t){t.O(0,[774,888,179],(function(){return e=881,t(t.s=e);var e}));var e=t.O();_N_E=e}]);