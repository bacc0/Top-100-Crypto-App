(this["webpackJsonpdemo-react"]=this["webpackJsonpdemo-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(6),s=a.n(i),o=a(7),u=a(1),m=a(2),p=a(4),h=a(3),d=a(5),b=function(){return r.a.createElement("thead",{className:"title_table gradVertical textShadowBlue"},r.a.createElement("tr",null,r.a.createElement("th",{id:"logo_title",className:"headTopBorder headLeftBorder"}),r.a.createElement("th",{id:"name_title",className:"centerText headTopBorder"},"Name"),r.a.createElement("th",{id:"symbol_title",className:"centerText headTopBorder"},"Symbol"),r.a.createElement("th",{id:"invisible_title",className:"headTopBorder"},"Symbol",r.a.createElement("br",null),"Name"),r.a.createElement("th",{className:"headTopBorder centerText"},"Price USD"),r.a.createElement("th",{className:"headTopBorder"},"Change 24h"),r.a.createElement("th",{id:"chart_title",className:"headTopBorder centerText"},"24h Chart"),r.a.createElement("th",{id:"invisible_two_title",className:"headTopBorder"},"Volume 24h",r.a.createElement("br",null),"Market Cap"),r.a.createElement("th",{id:"volume_24h_title",className:"headTopBorder"},"Volume 24h"),r.a.createElement("th",{id:"market_cap_title",className:"headTopBorder"},"Market Cap"),r.a.createElement("th",{className:"headTopBorder headRightBorder"},"Supply")))},v=function(e){var t=e.name;return n.createElement("td",{className:"name dark_grey_text white_BG borderBottom centerText",id:"name"},t)},g=function(e){var t=e.symbol;return n.createElement("td",{id:"symbol",className:"text_bold symbol gradBG centerText textShadowGrey white_text text_bold headRightBorderGrey"},t)};function f(e){var t=e.toString(),a=t.slice(0,10),n=t.slice(11,19);return"".concat(a," ( ").concat(n," )")}function _(e){return(Math.floor(100*e)/100).toFixed(2)}function E(e){var t=(""+e).split(".")[0].split(""),a=t.length%3,n=0,r=0,c="";0===a&&(n=0),1===a&&(n=2),2===a&&(n=1);for(var l=0;l<t.length;l++)if(n++,r++,c+=t[l],3===n){if(r===t.length)break;c+=",",n=0}return c}function y(e){var t=(""+e).split("."),a="";return t[0].length>9?a=" Bn.":t[0].length>6&&(a=" mil"),a}var N=function(e){var t,a=e.logoPic;return n.createElement("td",{id:"logo",className:"logo LeftBorder greyLightBG white_text"},n.createElement("img",{id:"innerLogo",src:(t=a," https://s2.coinmarketcap.com/static/img/coins/128x128/".concat(t,".png")),alt:"coin"}))},O=function(e){var t=e.symbol,a=e.name;return n.createElement("td",{id:"invisible",className:"borderBottom white_BG"},n.createElement("span",null," "),n.createElement("span",{className:"greyBlue_text text_bold"},t),n.createElement("br",null),n.createElement("span",{className:"grey_text name"},a))},j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={price_time:[{}]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.price_time;return n.createElement("td",{className:"centerText purple_text bold_text borderBottom white_BG"},n.createElement("span",{className:"superSmall grey_text"},"$"),_(e[e.length-1].price),n.createElement("span",{className:"superSmallPrice"},function(e){if(0===e)return 0;var t=(""+e).split(".");return" "+t[1].slice(2,t[1].length)}(e[e.length-1].price)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{price_time:e.input}:null}}]),t}(n.Component),x=a(10);function k(e){var t,a,n=[],r=6;return e.length<13&&(r=1),(t=e,a=r,t.filter((function(e,t){return t%a===a-1}))).map((function(e){return n.push([f(e.time),e.price])})),[["","Price USD"]].concat(n)}var B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={chartData:[]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.chartData;return n.createElement("td",{id:"chart",className:"chart borderBottom white_BG"},n.createElement(x.a,{data:k(e),width:"120px",height:"40px",loader:n.createElement("div",{className:"ultraSmall"},"Loading..."),chartType:"LineChart",options:{backgroundColor:"none",colors:["rgb(124, 67, 255)"],lineWidth:1,axes:{x:{0:{side:"top"}}},chartArea:{width:"150%",height:"175%"},hAxis:{textPosition:"none",baselineColor:"none",ticks:[]},vAxis:{textPosition:"none",baselineColor:"none",ticks:[],scaleType:"Linear"}}}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{chartData:e.input}:null}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={circulating_supply:0,symbol:e.symbolCurrency},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.circulating_supply,a=e.symbol;return n.createElement("td",{className:"borderBottom white_BG"},n.createElement("span",{className:"greyBlue_text"},E(t)),n.createElement("span",null," "),n.createElement("span",{className:"superSmall grey_text white_BG"},a))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{circulating_supply:e.input}:null}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={market_cap:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.market_cap;return n.createElement("td",{className:"borderBottom white_BG",id:"market_cap"},n.createElement("span",{className:"superSmall grey_text"},"$"),n.createElement("span",{className:"greyBlue_text"},E(e)," "),n.createElement("span",{className:"superSmall grey_text"},y(e)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{market_cap:e.input}:null}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={volume_24h:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.volume_24h;return r.a.createElement("td",{id:"volume_24h",className:"borderBottom white_BG"},r.a.createElement("span",{className:"superSmall grey_text"},"$"),r.a.createElement("span",{className:"greyBlue_text"},E(e)),r.a.createElement("span",{className:"superSmall grey_text"},y(e)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{volume_24h:e.input}:null}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={percent_change_24h:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this.state.percent_change_24h;return n.createElement("td",{className:"centerText bold_text borderBottom white_BG"},n.createElement("span",{className:(e=t,+e>=0?"green-text":"tomato-text")},_(t)),n.createElement("span",{className:"superSmall grey_text"},"%"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{percent_change_24h:e.input}:null}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={volume_24h:0,market_cap:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.volume_24h,a=e.market_cap;return n.createElement("td",{id:"invisible_two",className:"borderBottom white_BG"},n.createElement("span",{className:"small"}),n.createElement("span",{className:"superSmall grey_text"},"$"),E(t),n.createElement("span",{className:"superSmall grey_text"},y(t)),n.createElement("span",{className:"small"}),n.createElement("br",null),n.createElement("span",{className:"superSmall grey_text"},"$"),E(a),n.createElement("span",{className:"superSmall grey_text"},y(a)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.inputVol!==t.inputVol?{volume_24h:e.inputVol,market_cap:e.inputCap}:null}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={currentCoins:e.input},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.currentCoins.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement(N,{logoPic:e.id}),r.a.createElement(O,{symbol:e.symbol,name:e.name}),r.a.createElement(g,{symbol:e.symbol}),r.a.createElement(v,{name:e.name}),r.a.createElement(j,{input:e.price_time}),r.a.createElement(w,{input:e.percent_change_24h}),r.a.createElement(B,{input:e.price_time}),r.a.createElement(S,{input:e.volume_24h}),r.a.createElement(T,{inputVol:e.volume_24h,inputCap:e.market_cap}),r.a.createElement(P,{input:e.market_cap}),r.a.createElement(C,{input:e.circulating_supply,symbolCurrency:e.symbol}))}));return r.a.createElement("tbody",null,e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{currentCoins:e.input}:null}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={currentCoins:e.input},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.currentCoins;return r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(D,{input:e}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.input!==t.input?{currentCoins:e.input}:null}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={paginate:e.paginate,pageNumbers:e.pageNumbers,activeClass:e.currentPage},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.paginate,a=e.pageNumbers,r=e.activeClass;return n.createElement("div",{className:"pagination"},a.map((function(e){return n.createElement("span",{key:"number"},n.createElement("a",{onClick:function(){return t(e)},href:"#",className:r===e?"active":a[0]===e?"firstPage":r-2===e?"lightTransparent":r-1===e?"prevPage":r===e?"active":a.length===e?"lastPage":r+1===e?"nextPage":r+2===e?"lightTransparent":"transparent"},e))})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.currentPage!==t.currentPage?{activeClass:e.currentPage}:null}}]),t}(n.Component);var L=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={coins:[],loading:!0,currentPage:1,coinsPerPage:12},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;if(this.state.loading||!this.state.coins)return r.a.createElement("div",{className:"loading"});var t=function(e,t,a){for(var n=[],r=Math.ceil(e.length/a),c=t*a,l=c-a,i=e.slice(l,c),s=1;s<=r;s++)n.push(s);return{currentCoins:i,pageNumbers:n}}(this.state.coins,this.state.currentPage,this.state.coinsPerPage),a=t.currentCoins,n=t.pageNumbers;return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:""}," TOP ",r.a.createElement("strong",null,"99")," CRYPTO-CURRENCIES "),r.a.createElement("div",{className:"table"},r.a.createElement(G,{input:a})),r.a.createElement("span",{className:"paginationWrap"},r.a.createElement(F,{pageNumbers:n,paginate:function(t){return e.setState({currentPage:t})},currentPage:this.state.currentPage})))}},{key:"componentDidMount",value:function(){var e=this;this.update(),setInterval(Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.update();case 1:case"end":return t.stop()}}),t)}))),6e4)}},{key:"update",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/instruments",e.prev=1,e.next=4,fetch("/instruments",{cache:"no-store"});case 4:return t=e.sent,console.log(t.status),e.next=8,t.json();case 8:a=e.sent,this.setState({coins:a,loading:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21);l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.a358db2d.chunk.js.map