(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[77],{3260:function(e,t,a){"use strict";a.r(t);var o=a(1),r=a.n(o),n=a(43),c=a(15),s=a(16),i=a(17),l=a(18),d=a(505),b=a(506),p=a(150),h=a(94),u=a.p+"static/media/index.1691644d.md",j=a.p+"static/media/BasicLine.4b4e8193.md",g=a.p+"static/media/DashedLine.38aedf32.md",f=a.p+"static/media/BasicArea.9dd566c7.md",O=a.p+"static/media/SplineArea.148386bf.md",m=a.p+"static/media/BasicColumn.aeb1b0c9.md",x=a.p+"static/media/StackedColumn.fd2b837a.md",v=a.p+"static/media/BasicBar.0ab4e71a.md",y=a.p+"static/media/GroupedBar.28876d86.md",C=a.p+"static/media/Pie.9c37935c.md",k=a.p+"static/media/Donut.ab3fcf1b.md",D=a(111),S=a.n(D),A=a(207),B=a(0),w=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}],options:{chart:{type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},colors:[A.e],xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,height:300})}}]),a}(o.Component),z=w,T=a(11),L=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[{name:"Session Duration",data:[45,52,38,24,33,26,21,20,6,8,15,10]},{name:"Page Views",data:[35,41,62,42,13,18,29,37,36,51,32,35]},{name:"Total Visits",data:[87,57,74,99,75,38,62,47,82,56,45,47]}],options:{chart:{height:350,type:"line",zoom:{enabled:!1}},colors:Object(T.a)(A.a),dataLabels:{enabled:!1},stroke:{width:[3,5,3],curve:"straight",dashArray:[0,8,5]},legend:{tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},markers:{size:0,hover:{sizeOffset:6}},xaxis:{categories:["01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan","07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"]},tooltip:{y:[{title:{formatter:function(e){return e+" (mins)"}}},{title:{formatter:function(e){return e+" per session"}}},{title:{formatter:function(e){return e}}}]},grid:{borderColor:"#f1f1f1"}}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,height:300})}}]),a}(o.Component),N=L,M={monthDataSeries1:{prices:[8107.85,8128,8122.9,8165.5,8340.7,8423.7,8423.5,8514.3,8481.85,8487.7,8506.9,8626.2,8668.95,8602.3,8607.55,8512.9,8496.25,8600.65,8881.1,9340.85],dates:["13 Nov 2017","14 Nov 2017","15 Nov 2017","16 Nov 2017","17 Nov 2017","20 Nov 2017","21 Nov 2017","22 Nov 2017","23 Nov 2017","24 Nov 2017","27 Nov 2017","28 Nov 2017","29 Nov 2017","30 Nov 2017","01 Dec 2017","04 Dec 2017","05 Dec 2017","06 Dec 2017","07 Dec 2017","08 Dec 2017"]}},J=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[{name:"STOCK ABC",data:M.monthDataSeries1.prices}],options:{chart:{zoom:{enabled:!1}},colors:[A.c],fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,80,100]}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:3},labels:M.monthDataSeries1.dates,xaxis:{type:"datetime"},yaxis:{opposite:!0},legend:{horizontalAlign:"left"}}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,type:"area",height:300})}}]),a}(o.Component),E=J,F=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],options:{dataLabels:{enabled:!1},colors:A.a,stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,type:"area",height:300})}}]),a}(o.Component),H=F,P=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],options:{plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},colors:[A.c,A.e,A.g],dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$".concat(e," thousands")}}}}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,height:300,type:"bar"})}}]),a}(o.Component),V=P,W=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]}],options:{chart:{stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},colors:[A.c,A.e,A.g],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"]},legend:{position:"right",offsetY:40},fill:{opacity:1}}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,type:"bar",height:300})}}]),a}(o.Component),Z=W,G=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[{data:[400,430,448,470,540,580,690,1100,1200,1380]}],options:{plotOptions:{bar:{horizontal:!0}},colors:A.a,dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,type:"bar",height:300})}}]),a}(o.Component),R=G,I=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[{data:[44,55,41,64]},{data:[53,32,33,52]}],options:{plotOptions:{bar:{horizontal:!0,dataLabels:{position:"top"}}},colors:A.a,dataLabels:{enabled:!0,offsetX:-6,style:{fontSize:"12px",colors:["#fff"]}},stroke:{show:!0,width:1,colors:["#fff"]},xaxis:{categories:[2001,2002,2003,2004]}}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,height:300,type:"bar"})}}]),a}(o.Component),U=I,K=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[44,55,13,43,22],options:{colors:A.a,labels:["Team A","Team B","Team C","Team D","Team E"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,height:300,type:"pie"})}}]),a}(o.Component),X=K,Y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={series:[44,55,41,17,15],options:{colors:A.a,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsx)(S.a,{options:this.state.options,series:this.state.series,height:300,type:"donut"})}}]),a}(o.Component),q=Y,$=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsxs)(r.a.Fragment,{children:[Object(B.jsxs)(p.a,{gutter:16,type:"flex",children:[Object(B.jsxs)(h.a,{sm:24,md:24,lg:12,children:[Object(B.jsx)(d.a,{code:j,children:Object(B.jsx)(z,{})}),Object(B.jsx)(d.a,{code:f,children:Object(B.jsx)(E,{})}),Object(B.jsx)(d.a,{code:m,children:Object(B.jsx)(V,{})}),Object(B.jsx)(d.a,{code:v,children:Object(B.jsx)(R,{})}),Object(B.jsx)(d.a,{code:C,children:Object(B.jsx)(X,{})})]}),Object(B.jsxs)(h.a,{sm:24,md:24,lg:12,children:[Object(B.jsx)(d.a,{code:g,children:Object(B.jsx)(N,{})}),Object(B.jsx)(d.a,{code:O,children:Object(B.jsx)(H,{})}),Object(B.jsx)(d.a,{code:x,children:Object(B.jsx)(Z,{})}),Object(B.jsx)(d.a,{code:y,children:Object(B.jsx)(U,{})}),Object(B.jsx)(d.a,{code:k,children:Object(B.jsx)(q,{})})]})]}),Object(B.jsx)(b.a,{code:u})]})}}]),a}(o.Component),_=$,Q=a.p+"static/media/index.fb1446bb.md",ee=a.p+"static/media/LineChart.a54bdba1.md",te=a.p+"static/media/AreaChart.ebeda3d1.md",ae=a.p+"static/media/BarChart.f17091d1.md",oe=a.p+"static/media/RadarChart.a2b4539a.md",re=a.p+"static/media/DoughnutChart.b9108258.md",ne=a.p+"static/media/PolarChart.dda32d4b.md",ce=a(526),se=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Series A",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"transparent",borderColor:A.c,pointBackgroundColor:A.c,pointHoverBackgroundColor:A.c,pointHoverBorderColor:A.c},{label:"Series B",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"transparent",borderColor:A.e,pointBackgroundColor:A.e,pointHoverBackgroundColor:A.e,pointHoverBorderColor:A.e}]},t={responsive:!0,hover:{mode:"nearest",intersect:!0},tooltips:{mode:"index"},scales:{xAxes:[{gridLines:[{display:!1}],ticks:{display:!0,fontColor:A.i,fontSize:13,padding:10}}],yAxes:[{gridLines:{drawBorder:!1,drawTicks:!1,borderDash:[3,4],zeroLineWidth:1,zeroLineBorderDash:[3,4]},ticks:{display:!0,max:100,stepSize:20,fontColor:A.i,fontSize:13,padding:10}}]}};return Object(B.jsx)("div",{children:Object(B.jsx)(ce.Line,{data:e,options:t})})}}]),a}(o.Component),ie=se,le=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={labels:["16th","17th","18th","19th","20th","21th","22th"],datasets:[{label:"Series A",data:[28,48,40,55,86,55,90],backgroundColor:A.d,borderColor:A.c,pointBackgroundColor:A.c,pointHoverBackgroundColor:A.c,pointHoverBorderColor:A.c}]},t={responsive:!0,hover:{mode:"nearest",intersect:!0},elements:{line:{tension:.5},point:{radius:0}},scales:{xAxes:[{gridLines:[{display:!1}],ticks:{fontColor:A.i,display:!0,beginAtZero:!0,fontSize:13,padding:10}}],yAxes:[{gridLines:{drawBorder:!1,drawTicks:!1,borderDash:[3,4],zeroLineWidth:1,zeroLineBorderDash:[3,4],scaleLabel:{display:!1,labelString:"Value"}},ticks:{max:100,stepSize:20,display:!0,beginAtZero:!0,fontColor:A.i,fontSize:13,padding:10}}]}};return Object(B.jsx)("div",{children:Object(B.jsx)(ce.Line,{data:e,options:t})})}}]),a}(o.Component),de=le,be=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={labels:["2006","2007","2008","2009","2010","2011"],datasets:[{label:"Series A",data:[65,59,80,81,56,55],backgroundColor:A.c,borderWidth:0},{label:"Series B",data:[28,48,40,19,86,27],backgroundColor:A.d,borderWidth:0}]};return Object(B.jsx)("div",{children:Object(B.jsx)(ce.Bar,{data:e,options:{caleShowVerticalLines:!1,responsive:!0,scales:{xAxes:[{categoryPercentage:.45,barPercentage:.7,display:!0,scaleLabel:{display:!1,labelString:"Month"},gridLines:!1,ticks:{display:!0,beginAtZero:!0,fontSize:13,padding:10}}],yAxes:[{categoryPercentage:.35,barPercentage:.7,display:!0,scaleLabel:{display:!1,labelString:"Value"},gridLines:{drawBorder:!1,offsetGridLines:!1,drawTicks:!1,borderDash:[3,4],zeroLineWidth:1,zeroLineBorderDash:[3,4]},ticks:{max:100,stepSize:20,display:!0,beginAtZero:!0,fontSize:13,padding:10}}]}}})})}}]),a}(o.Component),pe=be,he=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"Series A",backgroundColor:A.d,borderWidth:2,borderColor:A.c,data:[65,59,90,81,56,55,40]},{label:"Series B",backgroundColor:A.f,borderWidth:2,borderColor:A.e,data:[28,48,40,19,96,27,100]}]},t={responsive:!0,scale:{ticks:{max:100,stepSize:25},gridLines:{color:A.h},angleLines:{color:A.h}}};return Object(B.jsx)("div",{children:Object(B.jsx)(ce.Radar,{data:e,options:t})})}}]),a}(o.Component),ue=he,je=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={labels:["Download Sales","In-Store Sales","Mail Sales"],datasets:[{data:[350,450,100],backgroundColor:[A.c,A.g,A.e],pointBackgroundColor:[A.c,A.g,A.e]}]};return Object(B.jsx)("div",{children:Object(B.jsx)(ce.Doughnut,{data:e})})}}]),a}(o.Component),ge=je,fe=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e={datasets:[{data:[300,500,100,40,120],backgroundColor:A.b,borderColor:A.a,label:"My dataset"}],labels:["Download Sales","In-Store Sales","Mail Sales","Telesales","Corporate Sales"]},t={responsive:!0,scale:{ticks:{max:500,stepSize:100},gridLines:{color:A.h},angleLines:{color:A.h}}};return Object(B.jsx)("div",{children:Object(B.jsx)(ce.Polar,{data:e,options:t})})}}]),a}(o.Component),Oe=fe,me=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(B.jsxs)(r.a.Fragment,{children:[Object(B.jsxs)(p.a,{gutter:16,type:"flex",children:[Object(B.jsxs)(h.a,{sm:24,md:24,lg:12,children:[Object(B.jsx)(d.a,{code:ee,children:Object(B.jsx)(ie,{})}),Object(B.jsx)(d.a,{code:ae,children:Object(B.jsx)(pe,{})}),Object(B.jsx)(d.a,{code:re,children:Object(B.jsx)(ge,{})})]}),Object(B.jsxs)(h.a,{sm:24,md:24,lg:12,children:[Object(B.jsx)(d.a,{code:te,children:Object(B.jsx)(de,{})}),Object(B.jsx)(d.a,{code:oe,children:Object(B.jsx)(ue,{})}),Object(B.jsx)(d.a,{code:ne,children:Object(B.jsx)(Oe,{})})]})]}),Object(B.jsx)(b.a,{code:Q})]})}}]),a}(o.Component),xe=me;t.default=function(e){var t=e.match;return Object(B.jsx)("div",{children:Object(B.jsxs)(n.d,{children:[Object(B.jsx)(n.a,{exact:!0,from:"".concat(t.url),to:"".concat(t.url,"/apex-charts")}),Object(B.jsx)(n.b,{path:"".concat(t.url,"/apex-charts"),component:_}),Object(B.jsx)(n.b,{path:"".concat(t.url,"/chartjs"),component:xe})]})})}},505:function(e,t,a){"use strict";var o=a(6),r=a(1),n=a.n(r),c=a(511),s=a.n(c),i=a(15),l=a(16),d=a(17),b=a(18),p=a(3311),h={'code[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#a9b7c6",fontFamily:"Consolas, Monaco, 'Andale Mono', monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#2b2b2b"},'pre[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::-moz-selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'pre[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"]::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},'code[class*="language-"] ::selection':{color:"inherit",background:"rgba(33,66,131,.85)"},':not(pre) > code[class*="language-"]':{background:"#2b2b2b",padding:".1em",borderRadius:".3em"},comment:{color:"#808080"},prolog:{color:"#808080"},cdata:{color:"#808080"},delimiter:{color:"#cc7832"},boolean:{color:"#cc7832"},keyword:{color:"#cc7832"},selector:{color:"#cc7832"},important:{color:"#cc7832"},atrule:{color:"#cc7832"},operator:{color:"#a9b7c6"},punctuation:{color:"#a9b7c6"},"attr-name":{color:"#a9b7c6"},tag:{color:"#e8bf6a"},"tag .punctuation":{color:"#e8bf6a"},doctype:{color:"#e8bf6a"},builtin:{color:"#e8bf6a"},entity:{color:"#6897bb"},number:{color:"#6897bb"},symbol:{color:"#6897bb"},property:{color:"#9876aa"},constant:{color:"#9876aa"},variable:{color:"#9876aa"},string:{color:"#6a8759"},char:{color:"#6a8759"},"attr-value":{color:"#a5c261"},"attr-value .punctuation":{color:"#a5c261"},"attr-value .punctuation:first-child":{color:"#a9b7c6"},url:{color:"#287bde",textDecoration:"underline"},function:{color:"#ffc66d"},regex:{background:"#364135"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},inserted:{background:"#294436"},deleted:{background:"#484a4a"},"code.language-css .token.property":{color:"#a9b7c6"},"code.language-css .token.property + .token.punctuation":{color:"#a9b7c6"},"code.language-css .token.id":{color:"#ffc66d"},"code.language-css .token.selector > .token.class":{color:"#ffc66d"},"code.language-css .token.selector > .token.attribute":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-class":{color:"#ffc66d"},"code.language-css .token.selector > .token.pseudo-element":{color:"#ffc66d"}},u=a(520),j=a(168),g=a(470),f=a(897),O=a(898),m=a(95),x=a(0),v=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={copied:!1,copyTooltipVisible:!1},e.handleCodeCopied=function(){e.setState({copied:!0})},e.onCopyTooltipVisibleChange=function(t){t?e.setState({copyTooltipVisible:t,copied:!1}):e.setState({copyTooltipVisible:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.code,o=t.expand,r=t.isExpand,n=this.state,c=n.copied,s=n.copyTooltipVisible;return Object(x.jsxs)("div",{className:"code-box-actions",children:[Object(x.jsx)("span",{className:"code-box-icon mr-3 ".concat(c&&s?"text-success":""),children:Object(x.jsx)(m.a,{title:c?"Copied":"Copy code",visible:s,onVisibleChange:this.onCopyTooltipVisibleChange,children:Object(x.jsx)(u.CopyToClipboard,{text:a,onCopy:function(){return e.handleCodeCopied()},children:c?Object(x.jsx)(j.a,{}):Object(x.jsx)(g.a,{})})})}),Object(x.jsx)("span",{className:"code-box-icon",onClick:o,children:Object(x.jsx)(m.a,{title:r?"Hide code":"Show code",children:r?Object(x.jsx)(f.a,{}):Object(x.jsx)(O.a,{})})})]})}}]),a}(r.Component),y=v,C=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={codeExpand:!1},e.exapandCallBack=function(){e.setState({codeExpand:!e.state.codeExpand})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return Object(x.jsxs)(n.a.Fragment,{children:[Object(x.jsx)(y,{code:a,expand:this.exapandCallBack,isExpand:this.state.codeExpand}),Object(x.jsx)("div",{className:"code-box-highlight ".concat(this.state.codeExpand?"d-block":"d-none"),children:Object(x.jsx)(p.a,{language:t,style:h,children:a})})]})}}]),a}(r.PureComponent);C.defaultProps={language:null};var k=C;t.a=function(e){var t=e.code,a=e.children,n="en-US: ",c=Object(r.useState)(""),i=Object(o.a)(c,2),l=i[0],d=i[1];return Object(r.useEffect)((function(){var e=!0;return fetch(t).then((function(e){return e.text()})).then((function(t){e&&d(t)})),function(){e=!1}}),[t]),Object(x.jsxs)("div",{className:"code-box",children:[Object(x.jsx)("section",{className:"code-box-demo",children:a}),Object(x.jsx)("section",{className:"code-box-description",children:Object(x.jsx)(s.a,{source:l,renderers:{heading:function(e){return Object(x.jsx)("h4",{children:e.children[0].props.value.includes(n)?e.children[0].props.value.replace(n,""):""})},thematicBreak:function(){return Object(x.jsx)(x.Fragment,{})},paragraph:function(e){return Object(x.jsx)(x.Fragment,{children:e.children[0].props.value.match(/[\u4e00-\u9faf]/)?"":Object(x.jsx)("p",{className:"mb-0",children:e.children})})},code:k}})})]})}},506:function(e,t,a){"use strict";var o=a(6),r=a(1),n=a.n(r),c=a(511),s=a.n(c),i=a(3312),l={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#1E1E1E",color:"#DCDCDC"},"hljs-keyword":{color:"#569CD6"},"hljs-literal":{color:"#569CD6"},"hljs-symbol":{color:"#569CD6"},"hljs-name":{color:"#569CD6"},"hljs-link":{color:"#569CD6",textDecoration:"underline"},"hljs-built_in":{color:"#4EC9B0"},"hljs-type":{color:"#4EC9B0"},"hljs-number":{color:"#B8D7A3"},"hljs-class":{color:"#B8D7A3"},"hljs-string":{color:"#D69D85"},"hljs-meta-string":{color:"#D69D85"},"hljs-regexp":{color:"#9A5334"},"hljs-template-tag":{color:"#9A5334"},"hljs-subst":{color:"#DCDCDC"},"hljs-function":{color:"#DCDCDC"},"hljs-title":{color:"#DCDCDC"},"hljs-params":{color:"#DCDCDC"},"hljs-formula":{color:"#DCDCDC"},"hljs-comment":{color:"#57A64A",fontStyle:"italic"},"hljs-quote":{color:"#57A64A",fontStyle:"italic"},"hljs-doctag":{color:"#608B4E"},"hljs-meta":{color:"#9B9B9B"},"hljs-meta-keyword":{color:"#9B9B9B"},"hljs-tag":{color:"#9B9B9B"},"hljs-variable":{color:"#BD63C5"},"hljs-template-variable":{color:"#BD63C5"},"hljs-attr":{color:"#9CDCFE"},"hljs-attribute":{color:"#9CDCFE"},"hljs-builtin-name":{color:"#9CDCFE"},"hljs-section":{color:"gold"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"},"hljs-bullet":{color:"#D7BA7D"},"hljs-selector-tag":{color:"#D7BA7D"},"hljs-selector-id":{color:"#D7BA7D"},"hljs-selector-class":{color:"#D7BA7D"},"hljs-selector-attr":{color:"#D7BA7D"},"hljs-selector-pseudo":{color:"#D7BA7D"},"hljs-addition":{backgroundColor:"#144212",display:"inline-block",width:"100%"},"hljs-deletion":{backgroundColor:"#600",display:"inline-block",width:"100%"}},d=a(0);t.a=function(e){var t=e.code,a=Object(r.useState)(""),c=Object(o.a)(a,2),b=c[0],p=c[1];return Object(r.useEffect)((function(){var e=!0;return fetch(t).then((function(e){return e.text()})).then((function(t){e&&p(t)})),function(){e=!1}}),[t]),Object(d.jsx)("div",{className:"api-container",children:Object(d.jsx)(s.a,{source:b,renderers:{heading:function(e){return Object(d.jsx)("div",{className:"api-title h".concat(e.level," ").concat(e.children[0].props.value.includes("title: ")?"":e.children[0].props.value.split("").join("").replace(/\s/g,"-").toLowerCase()),children:e.children[0].props.value.includes("title: ")?e.children[0].props.value.replace("title: ",""):e.children})},paragraph:function(e){return Object(d.jsx)(n.a.Fragment,{children:"text-2-1-0"===e.children[0].props.nodeKey?"":Object(d.jsx)("p",{children:e.children})})},code:function(e){return Object(d.jsx)("div",{className:"api-code-highligher",children:Object(d.jsx)(i.a,{style:l,children:e.value})})}}})})}}}]);
//# sourceMappingURL=77.e0c7b12b.chunk.js.map