(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603,978],{2978:function(e,t,a){"use strict";a.r(t);a(7294);var r=a(1664),i=a(5152),n=a(5893),o=(0,i.default)((function(){return Promise.all([a.e(675),a.e(893)]).then(a.bind(a,9893))}),{ssr:!1,loadableGenerated:{webpack:function(){return[9893]},modules:["../components/list.tsx -> ./imageCard"]}}),s=(0,i.default)((function(){return a.e(54).then(a.bind(a,5054))}),{ssr:!1,loadableGenerated:{webpack:function(){return[5054]},modules:["../components/list.tsx -> ./textCard"]}});t.default=function(e){var t=e.list;return(0,n.jsx)("div",{className:"flex-wrap justify-center sm:px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex",children:t.map((function(e){return(0,n.jsx)(r.default,{href:"/".concat(e.blogPath),children:(0,n.jsx)("a",{children:e.imgUrl?(0,n.jsx)(o,{id:e.id,title:e.title,description:e.description,regDate:e.regDate,author:e.author,imgUrl:e.imgUrl,tag:e.tag}):(0,n.jsx)(s,{id:e.id,title:e.title,description:e.description,regDate:e.regDate,author:e.author,tag:e.tag})})},e.id)}))})}},7359:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7294),i=a(9120),n=a(2978),o=JSON.parse('{"W":[{"id":"2022-07-02-1656753805932","title":"63 Square (63\uc2a4\ud018\uc5b4)","description":"With 63 floors measuring a total x_height of 249 meters, 63 Square is one of Korea\u2019s tallest and most recognized skyscrapers. 63 Square boasts spectacular views of the Hangang River and the surrounding Bugaksan, Namsan and Gwanaksan Mountains. The building also offers an outstanding vantage point when viewing the sunset over the city.","regDate":"2022-07-02","author":"korea-tour","tag":["Seoul","A02","A0205","A02050600"],"imgUrl":"/2022-07-02-1656753805932/2526386_image2_1.webp","blogPath":"Seoul/2022-07-02-1656753805932"},{"id":"2022-07-02-1656768994796","title":"A Moment in Time - Live Caricature & Gallery (\uc2dc\uac04\uc744 \ub2f4\ub2e4)","description":"A Moment in Time adds in aspects of Korean traditions, customs, and landmarks like hanbok, Gwanghwamun Gate, and Korean mystical animals into caricature artworks, serving as an excellent souvenir for both locals and travelers. The gallery also offers hands-on programs like coloring caricature and traditional folk art. In addition, original design products from A Moment in Time are also available, making great gifts.","regDate":"2022-07-02","author":"korea-tour","tag":["Seoul","Culture/Art/History","Experience Programs","Unique Experience"],"imgUrl":"/2022-07-02-1656768994796/2589890_image2_1.webp","blogPath":"Seoul/2022-07-02-1656768994796"},{"id":"2022-07-09-1657337379889","title":"Achasan Ecological Park (\uc544\ucc28\uc0b0\uc0dd\ud0dc\uacf5\uc6d0)","description":"Achasan Ecological Park was established under the Seoul Metropolitan Government\'s Five Year Plan for Urban Green Expansion. Through various events and activities, the park provides opportunities to experience and learn about nature and its ecology. Major facilities include Eco Park, Rendezvous Square, Red Clay Road, Barefoot Path, Pine Forest, Mineral Spring, Eco Trail and pergolas.","regDate":"2022-07-09","author":"korea-tour","tag":["Seoul","Nature","Natural Sites","Eco-Tourism Sites"],"imgUrl":"/2022-07-09-1657337379889/741860_image2_1.webp","blogPath":"Seoul/2022-07-09-1657337379889"},{"id":999,"title":"63 Square (63\uc2a4\ud018\uc5b4)","description":"With 63 floors measuring a total x_height of 249 meters, 63 Square is one of Korea\u2019s tallest and most recognized skyscrapers. 63 Square boasts spectacular views of the Hangang River and the surrounding Bugaksan, Namsan and Gwanaksan Mountains. The building also offers an outstanding vantage point when viewing the sunset over the city.","regDate":"2022-06-20","author":"dryadsoft","tag":["seoul","seoul","seoul","seoul","seoul","seoul","seoul","seoul","seoul","seoul"],"imgUrl":"/2526386_image2_1.webp","blogPath":"post/korea-tour"},{"id":8888,"title":"\ud0c0\uc774\ud2c0\uc785\ub2c8\ub2e4.","description":"description\uc785\ub2c8\ub2e4. description \uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4.description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4.description\uc785\ub2c8\ub2e4.","regDate":"2021-10-24","author":"dryadsoft","tag":["test"],"imgUrl":"/01.webp","blogPath":"post/test8"},{"id":9999,"title":"\ud0c0\uc774\ud2c0\uc785\ub2c8\ub2e4.","description":"description\uc785\ub2c8\ub2e4. description \uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4.description\uc785\ub2c8\ub2e4. description\uc785\ub2c8\ub2e4.description\uc785\ub2c8\ub2e4.","regDate":"2021-10-24","author":"dryadsoft","tag":["test"],"imgUrl":"","blogPath":"post/test9"}]}'),s=a(5893),l=function(){var e=(0,r.useState)(""),t=e[0],a=e[1],l=(0,r.useState)(),u=l[0],c=l[1],d=(0,r.useState)([]),g=d[0],p=d[1],f=(0,r.useRef)(null),h=function(e){var t=o.W.filter((function(t){return t.title.includes(e)}));t.sort((function(e,t){return isNaN(Number(e.id))?t.id.localeCompare(e.id):t.id-e.id})),p(t)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("form",{className:"flex flex-col justify-center items-center",onSubmit:function(e){e.preventDefault(),document.activeElement.blur()},children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{className:"py-1 pl-2 pr-8 rounded-md text-gray-800 w-60",type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc2ed\uc2dc\uc624",value:t,onChange:function(e){var t=e.currentTarget.value;if(a(t),u&&clearTimeout(u),""!==t){var r=setTimeout((function(){h(t)}),300);c(r)}else p([])},autoFocus:!0,ref:f}),(0,s.jsx)(i.b0D,{className:"h-8 p-1 text-gray-300 absolute top-0 right-0 cursor-pointer",onClick:function(){var e;""!==t&&(a(""),p([])),null===(e=f.current)||void 0===e||e.focus()}})]})}),g.length>0?(0,s.jsx)(n.default,{list:g}):(0,s.jsx)("div",{className:"px-5 my-10 flex justify-center items-center",children:(0,s.jsx)("span",{children:"\uac80\uc0c9\uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})})]})}},881:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return a(7359)}])}},function(e){e.O(0,[774,888,179],(function(){return t=881,e(e.s=t);var t}));var t=e.O();_N_E=t}]);