(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[79],{3271:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(1),r=a.n(n),s=a(228),l=a(451),d=a(150),i=a(94),j=a(498),u=a(38),b=a(492),o=a(0),O=function(e){var t=e.data,a=t.length>0&&t.map((function(e,t){return{keys:e.id,alert:e.title,date:e.date}}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b.a,{columns:[{title:"Alert",dataIndex:"alert"},{title:"Date",dataIndex:"date"}],dataSource:a})})},x=function(e){var t=e.data.results,a=t&&t.map((function(e,t){return{keys:e.id,agencyname:e.name,value:e.amount}}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b.a,{columns:[{title:"Agency Name",dataIndex:"agencyname"},{title:"$ Value",dataIndex:"value"}],dataSource:a})})},m=function(e){var t=e.data.map((function(e,t){return{keys:e.id,alert:e.title,date:e.date}}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b.a,{columns:[{title:"Alert",dataIndex:"alert"},{title:"Date",dataIndex:"date"}],dataSource:t})})},f=function(e){var t=e.data.map((function(e,t){return{keys:e.id,alert:e.agencyList.agency_name,date:e.date}}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b.a,{columns:[{title:"Alert",dataIndex:"alert"},{title:"Date",dataIndex:"date"}],dataSource:t})})},y=function(e){var t=e.data.map((function(e,t){return{keys:e.id,alert:e.title,date:e.date}}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(b.a,{columns:[{title:"Alert",dataIndex:"alert"},{title:"Date",dataIndex:"date"}],dataSource:t})})},h=(a(919),a(74)),g=s.a.TabPane;function p(e){console.log(e)}var A=l.a.Search,v={allAlertsRequest:h.d,MyOpportunityRequest:h.a,myAgencyAlerts:h.g,topAgencySpends:h.m,teamingAlerts:h.j};t.default=Object(u.b)((function(e){var t=e.dashboard;return{loading:t.loading,allAlerts:t.allAlerts,myOpportunity:t.myOpportunity,myAgency:t.myAgency,topAgency:t.topAgency,teamingAlertss:t.teamingAlertss,error:t.error}}),v)((function(e){var t=Object(n.useState)([]),a=Object(c.a)(t,2),l=a[0],b=a[1],v=Object(u.c)();Object(n.useEffect)((function(){v(Object(h.d)())}),[v]);var S=e.allAlerts;Object(n.useEffect)((function(){""!==S&&void 0!==S&&null!==S&&b(S)}),[S]);var E=Object(n.useState)([]),I=Object(c.a)(E,2),N=I[0],k=I[1];Object(n.useEffect)((function(){v(Object(h.a)())}),[v]);var F=e.myOpportunity;Object(n.useEffect)((function(){""!==F&&void 0!==F&&null!==F&&k(F)}),[F]);var R=Object(n.useState)([]),D=Object(c.a)(R,2),M=D[0],w=D[1];Object(n.useEffect)((function(){v(Object(h.g)())}),[v]);var T=e.myAgency;Object(n.useEffect)((function(){""!==T&&void 0!==T&&null!==T&&w(T)}),[T]);var q=Object(n.useState)([]),C=Object(c.a)(q,2),J=C[0],K=C[1],z={type:"agency",filters:{fy:"2021",period:"12"}};Object(n.useEffect)((function(){v(Object(h.m)(z))}),[v]);var B=e.topAgency;Object(n.useEffect)((function(){""!==B&&null!==B&&void 0!==B&&K(B)}),[B]),Object(n.useEffect)((function(){v(Object(h.j)())}),[v]);var L=Object(n.useState)([]),P=Object(c.a)(L,2),V=P[0],$=P[1],_=e.teamingAlertss;Object(n.useEffect)((function(){""!==_&&null!==_&&void 0!==_&&$(_)}),[_]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(r.a.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)(d.a,{children:[Object(o.jsx)(i.a,{xs:24,sm:12,md:12,lg:12,xl:12,children:Object(o.jsx)("h3",{className:"dashboard-size",children:"Dashboard"})}),Object(o.jsx)(i.a,{xs:24,sm:12,md:12,lg:12,xl:12,children:Object(o.jsx)("div",{style:{textAlign:"right",marginBottom:15},children:Object(o.jsx)(A,{placeholder:"Search",onSearch:function(e){return console.log(e)},style:{width:300},className:"search-input-color"})})})]}),Object(o.jsx)("div",{className:"card-container",children:Object(o.jsxs)(d.a,{gutter:[16,16],children:[Object(o.jsx)(i.a,{xs:24,sm:24,md:16,lg:16,xl:16,children:Object(o.jsx)(j.a,{className:"card-font-change",children:Object(o.jsxs)(s.a,{defaultActiveKey:"1",onChange:p,className:"tabs-dashboard",children:[Object(o.jsx)(g,{tab:"All Alerts",style:{borderRadius:"0px 10px 10px 10px"},className:"tabs-pane-dashboard",children:Object(o.jsx)(O,{data:l,className:"tabs-pane-dashboard"})},"1"),Object(o.jsx)(g,{tab:"My Opportunity Alerts",style:{borderRadius:10},children:Object(o.jsx)(m,{data:N})},"2"),Object(o.jsx)(g,{tab:"My Agency Alerts",style:{borderRadius:10},children:Object(o.jsx)(f,{data:M})},"3"),Object(o.jsx)(g,{tab:"My Teaming Alerts",style:{borderRadius:10},children:Object(o.jsx)(y,{data:V})},"4")]})})}),Object(o.jsx)(i.a,{xs:24,sm:24,md:8,lg:8,xl:8,children:Object(o.jsx)(j.a,{children:Object(o.jsx)(s.a,{defaultActiveKey:"1",onChange:p,children:Object(o.jsx)(g,{tab:"Top Agency Spends",style:{borderRadius:10},children:Object(o.jsx)(x,{data:J})},"5")})})})]})})]})})})}))},919:function(e,t,a){}}]);
//# sourceMappingURL=79.9804f30b.chunk.js.map