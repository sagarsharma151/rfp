(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[13,33],{512:function(t,e,n){"use strict";n.r(e);n(1);var c=n(0);e.default=function(t){var e=t.name,n=t.desc;return Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("span",{className:"font-weight-bold text-dark",children:[e,":"]}),Object(c.jsxs)("span",{className:"text-gray-light",children:[" ",n]})]})}},515:function(t,e,n){"use strict";e.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}},534:function(t,e,n){"use strict";var c=n(4),o=n(14),a=n(3),r=n(1),s=n(41),l=n(7),i=n.n(l),d=n(52),b=n(28),u=n(6);function j(t){var e,n=t.prefixCls,c=t.value,o=t.current,a=t.offset,s=void 0===a?0:a;return s&&(e={position:"absolute",top:"".concat(s,"00%"),left:0}),r.createElement("p",{style:e,className:i()("".concat(n,"-only-unit"),{current:o})},c)}function m(t,e,n){for(var c=t,o=0;(c+10)%10!==e;)c+=n,o+=n;return o}function h(t){var e,n,c=t.prefixCls,o=t.count,s=t.value,l=Number(s),i=Math.abs(o),d=r.useState(l),b=Object(u.a)(d,2),h=b[0],p=b[1],O=r.useState(i),f=Object(u.a)(O,2),x=f[0],g=f[1],v=function(){p(l),g(i)};if(r.useEffect((function(){var t=setTimeout((function(){v()}),1e3);return function(){clearTimeout(t)}}),[l]),h===l||Number.isNaN(l)||Number.isNaN(h))e=[r.createElement(j,Object(a.a)({},t,{key:l,current:!0}))],n={transition:"none"};else{e=[];for(var y=l+10,C=[],N=l;N<=y;N+=1)C.push(N);var w=C.findIndex((function(t){return t%10===h}));e=C.map((function(e,n){var c=e%10;return r.createElement(j,Object(a.a)({},t,{key:e,value:c,offset:n-w,current:n===w}))})),n={transform:"translateY(".concat(-m(h,l,x<i?1:-1),"00%)")}}return r.createElement("span",{className:"".concat(c,"-only"),style:n,onTransitionEnd:v},e)}var p=function(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(t);o<c.length;o++)e.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(t,c[o])&&(n[c[o]]=t[c[o]])}return n},O=function(t){var e=t.prefixCls,n=t.count,c=t.className,o=t.motionClassName,s=t.style,l=t.title,u=t.show,j=t.component,m=void 0===j?"sup":j,O=t.children,f=p(t,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),x=(0,r.useContext(d.b).getPrefixCls)("scroll-number",e),g=Object(a.a)(Object(a.a)({},f),{"data-show":u,style:s,className:i()(x,c,o),title:l}),v=n;if(n&&Number(n)%1===0){var y=String(n).split("");v=y.map((function(t,e){return r.createElement(h,{prefixCls:x,count:Number(n),value:t,key:y.length-e})}))}return s&&s.borderColor&&(g.style=Object(a.a)(Object(a.a)({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),O?Object(b.a)(O,(function(t){return{className:i()("".concat(x,"-custom-component"),null===t||void 0===t?void 0:t.className,o)}})):r.createElement(m,g,v)},f=n(151);function x(t){return-1!==f.a.indexOf(t)}var g=function(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(c=Object.getOwnPropertySymbols(t);o<c.length;o++)e.indexOf(c[o])<0&&Object.prototype.propertyIsEnumerable.call(t,c[o])&&(n[c[o]]=t[c[o]])}return n},v=function(t){var e,n,l=t.prefixCls,u=t.scrollNumberPrefixCls,j=t.children,m=t.status,h=t.text,p=t.color,f=t.count,v=void 0===f?null:f,y=t.overflowCount,C=void 0===y?99:y,N=t.dot,w=void 0!==N&&N,F=t.size,E=void 0===F?"default":F,D=t.title,S=t.offset,k=t.style,P=t.className,z=t.showZero,A=void 0!==z&&z,T=g(t,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),M=r.useContext(d.b),W=M.getPrefixCls,B=M.direction,R=W("badge",l),I=v>C?"".concat(C,"+"):v,H=null!==m&&void 0!==m||null!==p&&void 0!==p,L="0"===I||0===I,J=w&&!L||H,Z=J?"":I,Y=Object(r.useMemo)((function(){return(null===Z||void 0===Z||""===Z||L&&!A)&&!J}),[Z,L,A,J]),q=Object(r.useRef)(v);Y||(q.current=v);var G=q.current,K=Object(r.useRef)(Z);Y||(K.current=Z);var Q=K.current,U=Object(r.useRef)(J);Y||(U.current=J);var V=Object(r.useMemo)((function(){if(!S)return Object(a.a)({},k);var t={marginTop:S[1]};return"rtl"===B?t.left=parseInt(S[0],10):t.right=-parseInt(S[0],10),Object(a.a)(Object(a.a)({},t),k)}),[B,S,k]),X=null!==D&&void 0!==D?D:"string"===typeof G||"number"===typeof G?G:void 0,$=Y||!h?null:r.createElement("span",{className:"".concat(R,"-status-text")},h),_=G&&"object"===Object(o.a)(G)?Object(b.a)(G,(function(t){return{style:Object(a.a)(Object(a.a)({},V),t.style)}})):void 0,tt=i()((e={},Object(c.a)(e,"".concat(R,"-status-dot"),H),Object(c.a)(e,"".concat(R,"-status-").concat(m),!!m),Object(c.a)(e,"".concat(R,"-status-").concat(p),x(p)),e)),et={};p&&!x(p)&&(et.background=p);var nt=i()(R,(n={},Object(c.a)(n,"".concat(R,"-status"),H),Object(c.a)(n,"".concat(R,"-not-a-wrapper"),!j),Object(c.a)(n,"".concat(R,"-rtl"),"rtl"===B),n),P);if(!j&&H){var ct=V.color;return r.createElement("span",Object(a.a)({},T,{className:nt,style:V}),r.createElement("span",{className:tt,style:et}),r.createElement("span",{style:{color:ct},className:"".concat(R,"-status-text")},h))}return r.createElement("span",Object(a.a)({},T,{className:nt}),j,r.createElement(s.b,{visible:!Y,motionName:"".concat(R,"-zoom"),motionAppear:!1},(function(t){var e,n=t.className,o=W("scroll-number",u),s=U.current,l=i()((e={},Object(c.a)(e,"".concat(R,"-dot"),s),Object(c.a)(e,"".concat(R,"-count"),!s),Object(c.a)(e,"".concat(R,"-count-sm"),"small"===E),Object(c.a)(e,"".concat(R,"-multiple-words"),!s&&Q&&Q.toString().length>1),Object(c.a)(e,"".concat(R,"-status-").concat(m),!!m),Object(c.a)(e,"".concat(R,"-status-").concat(p),x(p)),e)),d=Object(a.a)({},V);return p&&!x(p)&&((d=d||{}).background=p),r.createElement(O,{prefixCls:o,show:!Y,motionClassName:n,className:l,count:Q,title:X,style:d,key:"scrollNumber"},_)})),$)};v.Ribbon=function(t){var e,n=t.className,o=t.prefixCls,s=t.style,l=t.color,b=t.children,u=t.text,j=t.placement,m=void 0===j?"end":j,h=r.useContext(d.b),p=h.getPrefixCls,O=h.direction,f=p("ribbon",o),g=x(l),v=i()(f,"".concat(f,"-placement-").concat(m),(e={},Object(c.a)(e,"".concat(f,"-rtl"),"rtl"===O),Object(c.a)(e,"".concat(f,"-color-").concat(l),g),e),n),y={},C={};return l&&!g&&(y.background=l,C.color=l),r.createElement("div",{className:"".concat(f,"-wrapper")},b,r.createElement("div",{className:v,style:Object(a.a)(Object(a.a)({},y),s)},r.createElement("span",{className:"".concat(f,"-text")},u),r.createElement("div",{className:"".concat(f,"-corner"),style:C})))};e.a=v},677:function(t,e,n){"use strict";var c=n(2),o=(n(1),n(498)),a=n(111),r=n.n(a),s=n(207),l=n(0),i=s.m,d=function(t){return Object(l.jsx)(r.a,Object(c.a)({},t))},b=function(t){var e=t.series,n=t.customOptions,a=t.labels,r=t.width,s=t.height,b=t.title,u=t.extra,j=t.bodyClass,m=i;return m.labels=a,m.plotOptions.pie.donut.labels.total.label=b,b||(m.plotOptions.pie.donut.labels.show=!1),n&&(m=Object(c.a)(Object(c.a)({},m),n)),Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"text-center ".concat(j),children:[Object(l.jsx)(d,{type:"donut",options:m,series:e,width:r,height:s}),u]})})};b.defaultProps={series:[],labels:[],title:"",height:250,width:"100%"},e.a=b},873:function(t,e,n){"use strict";n.r(e);var c=n(11),o=(n(1),n(677)),a=n(209),r=n(512),s=n(3311),l=n(515),i=n(150),d=n(94),b=n(534),u=n(498),j=n(0),m=function(){var t=["#ffc107","#3e82f7","#04d182"],e=[3561,1443,2462],n=["Dasktops","Tablets","Mobiles"];return Object(j.jsx)(o.a,{series:e,labels:n,title:"Sessions Device",customOptions:{colors:t},extra:Object(j.jsx)(i.a,{justify:"center",children:Object(j.jsx)(d.a,{xs:20,sm:20,md:20,lg:24,children:Object(j.jsx)("div",{className:"mt-4 mx-auto",style:{maxWidth:200},children:function(){for(var o=[],a=0;a<e.length;a++){var r=e[a],s=n[a],l=t[a];o=[].concat(Object(c.a)(o),[{data:r,label:s,color:l}])}return o}().map((function(t){return Object(j.jsxs)(a.a,{alignItems:"center",justifyContent:"between",className:"mb-3",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(b.a,{color:t.color}),Object(j.jsx)("span",{className:"text-gray-light",children:t.label})]}),Object(j.jsx)("span",{className:"font-weight-bold text-dark",children:t.data})]},t.label)}))})})})})};e.default=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"DonutChartWidget"}),Object(j.jsxs)("div",{className:"mt-4",children:[Object(j.jsx)(r.default,{name:"Location",desc:"src/components/shared-components/DonutChartWidget.js"}),Object(j.jsx)(r.default,{name:"Description",desc:"Display dounut chart in a widget"}),Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsxs)(u.a,{title:"Example",children:[Object(j.jsx)(m,{}),Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)(s.a,{className:"hl-code",language:"jsx",style:l.a,children:'import React from \'react\'\nimport DonutChartWidget from \'components/shared-components/DonutChartWidget\'\nimport Flex from \'components/shared-components/Flex\'\nimport { Card, Row, Col, Badge } from \'antd\'\n\nexport default const Demo = () =>  {\n\tconst sessionColor = [\'#ffc107\', \'#3e82f7\', \'#04d182\']\n\tconst sessionData = [3561, 1443, 2462]\n\tconst sessionLabels = ["Dasktops", "Tablets", "Mobiles"]\n\tconst jointSessionData = () => {\n\t\tlet arr = []\n\t\tfor (let i = 0; i < sessionData.length; i++) {\n\t\t\tconst data = sessionData[i];\n\t\t\tconst label = sessionLabels[i];\n\t\t\tconst color = sessionColor[i]\n\t\t\tarr = [...arr, {\n\t\t\t\tdata: data,\n\t\t\t\tlabel: label,\n\t\t\t\tcolor: color\n\t\t\t}]\n\t\t}\n\t\treturn arr\n\t}\n\treturn (\n\t\t<DonutChartWidget \n\t\t\tseries={sessionData} \n\t\t\tlabels={sessionLabels} \n\t\t\ttitle="Sessions Device"\n\t\t\tcustomOptions={{colors: sessionColor}}\n\t\t\textra={\n\t\t\t\t<Row  justify="center">\n\t\t\t\t\t<Col xs={20} sm={20} md={20} lg={24}>\n\t\t\t\t\t\t<div className="mt-4 mx-auto" style={{maxWidth: 200}}>\n\t\t\t\t\t\t\t{jointSessionData().map(elm => (\n\t\t\t\t\t\t\t\t<Flex alignItems="center" justifyContent="between" className="mb-3" key={elm.label}>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<Badge color={elm.color} />\n\t\t\t\t\t\t\t\t\t\t<span className="text-gray-light">{elm.label}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span className="font-weight-bold text-dark">{elm.data}</span>\n\t\t\t\t\t\t\t\t</Flex>\n\t\t\t\t\t\t\t))}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</Col>\n\t\t\t\t</Row>\n\t\t\t}\n\t\t/>\n\t)\n}'})})]})}),Object(j.jsx)("h4",{className:"mt-4",children:"Props"}),Object(j.jsx)("div",{className:"api-container border-0 p-0",children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Property"}),Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Type"}),Object(j.jsx)("th",{children:"Default"})]})}),Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"series"}),Object(j.jsx)("td",{children:"Chart series"}),Object(j.jsxs)("td",{children:["array","<","{","name: string, data: number[]",">","}"]}),Object(j.jsx)("td",{})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"labels"}),Object(j.jsx)("td",{children:"Chart label"}),Object(j.jsx)("td",{children:"string[]"}),Object(j.jsx)("td",{})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"title"}),Object(j.jsx)("td",{children:"Title inside chart"}),Object(j.jsx)("td",{children:"string"}),Object(j.jsx)("td",{})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"width"}),Object(j.jsx)("td",{children:"Chart width"}),Object(j.jsx)("td",{children:"number | string"}),Object(j.jsx)("td",{children:"'100%'"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"height"}),Object(j.jsx)("td",{children:"Chart height"}),Object(j.jsx)("td",{children:"number | string"}),Object(j.jsx)("td",{children:"250"})]})]})]})})]})]})}}}]);
//# sourceMappingURL=13.5d33331c.chunk.js.map