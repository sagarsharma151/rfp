(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[20],{3277:function(t,e,s){"use strict";var r=s(3),o=s(4),i=s(15),a=s(16),n=s(35),l=s(17),p=s(18),c=s(1),d=s(7),f=s.n(d),m=s(59),g=s(739),h=s(52),u=s(243),b=s(217),x=c.createContext(null);function v(){return window}function y(t,e){if(!t.getClientRects().length)return 0;var s=t.getBoundingClientRect();return s.width||s.height?e===window?(e=t.ownerDocument.documentElement,s.top-e.clientTop):s.top-e.getBoundingClientRect().top:s.top}var w=/#(\S+)$/,k=function(t){Object(l.a)(s,t);var e=Object(p.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.apply(this,arguments)).state={activeLink:null},t.wrapperRef=c.createRef(),t.links=[],t.registerLink=function(e){t.links.includes(e)||t.links.push(e)},t.unregisterLink=function(e){var s=t.links.indexOf(e);-1!==s&&t.links.splice(s,1)},t.getContainer=function(){var e=t.context.getTargetContainer;return(t.props.getContainer||e||v)()},t.handleScrollTo=function(e){var s=t.props,r=s.offsetTop,o=s.targetOffset;t.setCurrentActiveLink(e);var i=t.getContainer(),a=Object(b.a)(i,!0),n=w.exec(e);if(n){var l=document.getElementById(n[1]);if(l){var p=a+y(l,i);p-=void 0!==o?o:r||0,t.animating=!0,Object(u.a)(p,{callback:function(){t.animating=!1},getContainer:t.getContainer})}}},t.saveInkNode=function(e){t.inkNode=e},t.setCurrentActiveLink=function(e){var s=t.state.activeLink,r=t.props.onChange;s!==e&&(t.setState({activeLink:e}),null===r||void 0===r||r(e))},t.handleScroll=function(){if(!t.animating){var e=t.props,s=e.offsetTop,r=e.bounds,o=e.targetOffset,i=t.getCurrentAnchor(void 0!==o?o:s||0,r);t.setCurrentActiveLink(i)}},t.updateInk=function(){var e=Object(n.a)(t),s=e.prefixCls,r=e.wrapperRef.current,o=null===r||void 0===r?void 0:r.getElementsByClassName("".concat(s,"-link-title-active"))[0];o&&(t.inkNode.style.top="".concat(o.offsetTop+o.clientHeight/2-4.5,"px"))},t.render=function(){var e=t.context,s=e.getPrefixCls,i=e.direction,a=t.props,n=a.prefixCls,l=a.className,p=void 0===l?"":l,d=a.style,m=a.offsetTop,h=a.affix,u=a.showInkInFixed,b=a.children,v=t.state.activeLink,y=s("anchor",n);t.prefixCls=y;var w=f()("".concat(y,"-ink-ball"),{visible:v}),k=f()("".concat(y,"-wrapper"),Object(o.a)({},"".concat(y,"-rtl"),"rtl"===i),p),j=f()(y,{fixed:!h&&!u}),O=Object(r.a)({maxHeight:m?"calc(100vh - ".concat(m,"px)"):"100vh"},d),C=c.createElement("div",{ref:t.wrapperRef,className:k,style:O},c.createElement("div",{className:j},c.createElement("div",{className:"".concat(y,"-ink")},c.createElement("span",{className:w,ref:t.saveInkNode})),b));return c.createElement(x.Provider,{value:{registerLink:t.registerLink,unregisterLink:t.unregisterLink,activeLink:t.state.activeLink,scrollTo:t.handleScrollTo,onClick:t.props.onClick}},h?c.createElement(g.a,{offsetTop:m,target:t.getContainer},C):C)},t}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.scrollContainer=this.getContainer(),this.scrollEvent=Object(m.a)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){if(this.scrollEvent){var t=this.getContainer();this.scrollContainer!==t&&(this.scrollContainer=t,this.scrollEvent.remove(),this.scrollEvent=Object(m.a)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,s=this.props.getCurrentAnchor;if("function"===typeof s)return s();var r=[],o=this.getContainer();if(this.links.forEach((function(s){var i=w.exec(s.toString());if(i){var a=document.getElementById(i[1]);if(a){var n=y(a,o);n<t+e&&r.push({link:s,top:n})}}})),r.length){var i=r.reduce((function(t,e){return e.top>t.top?e:t}));return i.link}return""}}]),s}(c.Component);k.defaultProps={affix:!0,showInkInFixed:!1},k.contextType=h.b;var j=function(t){Object(l.a)(s,t);var e=Object(p.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.apply(this,arguments)).handleClick=function(e){var s=t.context,r=s.scrollTo,o=s.onClick,i=t.props,a=i.href,n=i.title;null===o||void 0===o||o(e,{title:n,href:a}),r(a)},t.renderAnchorLink=function(e){var s=e.getPrefixCls,r=t.props,i=r.prefixCls,a=r.href,n=r.title,l=r.children,p=r.className,d=r.target,m=s("anchor",i),g=t.context.activeLink===a,h=f()("".concat(m,"-link"),Object(o.a)({},"".concat(m,"-link-active"),g),p),u=f()("".concat(m,"-link-title"),Object(o.a)({},"".concat(m,"-link-title-active"),g));return c.createElement("div",{className:h},c.createElement("a",{className:u,href:a,title:"string"===typeof n?n:"",target:d,onClick:t.handleClick},n),l)},t}return Object(a.a)(s,[{key:"componentDidMount",value:function(){this.context.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(t){var e=t.href,s=this.props.href;e!==s&&(this.context.unregisterLink(e),this.context.registerLink(s))}},{key:"componentWillUnmount",value:function(){this.context.unregisterLink(this.props.href)}},{key:"render",value:function(){return c.createElement(h.a,null,this.renderAnchorLink)}}]),s}(c.Component);j.defaultProps={href:"#"},j.contextType=x;var O=j;k.Link=O;e.a=k},639:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a}));var r=s(11),o=s(25);function i(t){var e,s=function(s){return function(){e=null,t.apply(void 0,Object(r.a)(s))}},i=function(){if(null==e){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];e=Object(o.a)(s(r))}};return i.cancel=function(){return o.a.cancel(e)},i}function a(){return function(t,e,s){var r=s.value,o=!1;return{configurable:!0,get:function(){if(o||this===t.prototype||this.hasOwnProperty(e))return r;var s=i(r.bind(this));return o=!0,Object.defineProperty(this,e,{value:s,configurable:!0,writable:!0}),o=!1,s}}}}},739:function(t,e,s){"use strict";var r=s(3),o=s(4),i=s(15),a=s(16),n=s(17),l=s(18),p=s(14),c=s(1),d=s(7),f=s.n(d),m=s(32),g=s(63),h=s(52),u=s(639),b=s(59);function x(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function v(t,e,s){if(void 0!==s&&e.top>t.top-s)return s+e.top}function y(t,e,s){if(void 0!==s&&e.bottom<t.bottom+s)return s+(window.innerHeight-e.bottom)}var w=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],k=[];function j(t,e){if(t){var s=k.find((function(e){return e.target===t}));s?s.affixList.push(e):(s={target:t,affixList:[e],eventHandlers:{}},k.push(s),w.forEach((function(e){s.eventHandlers[e]=Object(b.a)(t,e,(function(){s.affixList.forEach((function(t){t.lazyUpdatePosition()}))}))})))}}function O(t){var e=k.find((function(e){var s=e.affixList.some((function(e){return e===t}));return s&&(e.affixList=e.affixList.filter((function(e){return e!==t}))),s}));e&&0===e.affixList.length&&(k=k.filter((function(t){return t!==e})),w.forEach((function(t){var s=e.eventHandlers[t];s&&s.remove&&s.remove()})))}var C,T=function(t,e,s,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(p.a)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,s,r);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(i<3?o(a):i>3?o(e,s,a):o(e,s))||a);return i>3&&a&&Object.defineProperty(e,s,a),a};function N(){return"undefined"!==typeof window?window:null}!function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"}(C||(C={}));var L=function(t){Object(n.a)(s,t);var e=Object(l.a)(s);function s(){var t;return Object(i.a)(this,s),(t=e.apply(this,arguments)).state={status:C.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var e=t.props.offsetBottom,s=t.props.offsetTop;return void 0===e&&void 0===s&&(s=0),s},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(e){t.placeholderNode=e},t.saveFixedNode=function(e){t.fixedNode=e},t.measure=function(){var e=t.state,s=e.status,r=e.lastAffix,o=t.props.onChange,i=t.getTargetFunc();if(s===C.Prepare&&t.fixedNode&&t.placeholderNode&&i){var a=t.getOffsetTop(),n=t.getOffsetBottom(),l=i();if(l){var p={status:C.None},c=x(l),d=x(t.placeholderNode),f=v(d,c,a),m=y(d,c,n);void 0!==f?(p.affixStyle={position:"fixed",top:f,width:d.width,height:d.height},p.placeholderStyle={width:d.width,height:d.height}):void 0!==m&&(p.affixStyle={position:"fixed",bottom:m,width:d.width,height:d.height},p.placeholderStyle={width:d.width,height:d.height}),p.lastAffix=!!p.affixStyle,o&&r!==p.lastAffix&&o(p.lastAffix),t.setState(p)}}},t.prepareMeasure=function(){t.setState({status:C.Prepare,affixStyle:void 0,placeholderStyle:void 0})},t.render=function(){var e=t.context.getPrefixCls,s=t.state,i=s.affixStyle,a=s.placeholderStyle,n=t.props,l=n.prefixCls,p=n.children,d=f()(Object(o.a)({},e("affix",l),!!i)),h=Object(m.a)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return c.createElement(g.a,{onResize:function(){t.updatePosition()}},c.createElement("div",Object(r.a)({},h,{ref:t.savePlaceholderNode}),i&&c.createElement("div",{style:a,"aria-hidden":"true"}),c.createElement("div",{className:d,ref:t.saveFixedNode,style:i},c.createElement(g.a,{onResize:function(){t.updatePosition()}},p))))},t}return Object(a.a)(s,[{key:"getTargetFunc",value:function(){var t=this.context.getTargetContainer,e=this.props.target;return void 0!==e?e:t||N}},{key:"componentDidMount",value:function(){var t=this,e=this.getTargetFunc();e&&(this.timeout=setTimeout((function(){j(e(),t),t.updatePosition()})))}},{key:"componentDidUpdate",value:function(t){var e=this.state.prevTarget,s=this.getTargetFunc(),r=null;s&&(r=s()||null),e!==r&&(O(this),r&&(j(r,this),this.updatePosition()),this.setState({prevTarget:r})),t.offsetTop===this.props.offsetTop&&t.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),O(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var t=this.getTargetFunc(),e=this.state.affixStyle;if(t&&e){var s=this.getOffsetTop(),r=this.getOffsetBottom(),o=t();if(o&&this.placeholderNode){var i=x(o),a=x(this.placeholderNode),n=v(a,i,s),l=y(a,i,r);if(void 0!==n&&e.top===n||void 0!==l&&e.bottom===l)return}}this.prepareMeasure()}}]),s}(c.Component);L.contextType=h.b,T([Object(u.b)()],L.prototype,"updatePosition",null),T([Object(u.b)()],L.prototype,"lazyUpdatePosition",null);e.a=L},888:function(t,e,s){"use strict";s.r(e);s(1);var r=s(209),o=s(3277),i=s(150),a=s(94),n=s(0),l=o.a.Link,p=[{title:"Background",desc:"Utilities for controlling an elements background color.",list:[{class:"bg-primary",props:"background-color: #3e82f7"},{class:"bg-secondary",props:"background-color: #a461d8"},{class:"bg-success",props:"background-color: #04d182"},{class:"bg-info",props:"background-color: #3e82f7"},{class:"bg-warning",props:"background-color: #ffc542"},{class:"bg-danger",props:"background-color: #ff6b72"},{class:"bg-dark",props:"background-color: #1a3353"},{class:"bg-gray",props:"background-color: #455560"},{class:"bg-gray-light",props:"background-color: #72849a"},{class:"bg-gray-lighter",props:"background-color: #ededed"},{class:"bg-gray-lightest",props:"background-color: #f7f7f8"}]},{title:"Border",desc:"Utilities for controlling border of an element.",list:[{class:"border",props:"border: 1px solid #edf2f9"},{class:"border-top",props:"border-top: 1px solid #edf2f9"},{class:"border-right",props:"border-right: 1px solid #edf2f9"},{class:"border-bottom",props:"border-bottom: 1px solid #edf2f9"},{class:"border-left",props:"border-left: 1px solid #edf2f9"},{class:"border-0 ",props:"border: 0"},{class:"border-top-0",props:"border-top: 0"},{class:"border-right-0",props:"border-right: 0"},{class:"border-bottom-0",props:"border-bottom: 0"},{class:"border-left-0",props:"border-left: 0"},{class:"rounded",props:"border-radius: 0.625rem"},{class:"rounded-top",props:"border-top-left-radius: 0.625rem; border-top-right-radius: 0.625rem;"},{class:"rounded-right",props:"border-top-right-radius: 0.625rem; border-bottom-right-radius: 0.625rem;"},{class:"rounded-bottom",props:"border-bottom-right-radius: 0.625rem; border-bottom-left-radius: 0.625rem;"},{class:"rounded-left",props:"border-top-left-radius: 0.625rem; border-bottom-left-radius: 0.625rem"},{class:"rounded-circle",props:"border-radius: 50% "},{class:"rounded-0",props:"border-radius: 0 "}]},{title:"Display",desc:"Utilities for controlling the display box type of an element. Display utility classes able to apply sm, md, lg and xl as responsive breakpoint, e.g d-sm-none",list:[{class:"d-none",props:"display: none"},{class:"d-inline",props:"display: inline"},{class:"d-inline-block",props:"display: inline-block"},{class:"d-block",props:"display: block"},{class:"d-table",props:"display: table"},{class:"d-table-row",props:"display: table-row"},{class:"d-table-cell",props:"display: table-cell"},{class:"d-flex",props:"display: flex"},{class:"d-inline-flex",props:"display: inline-flex"}]},{title:"Flex",desc:"Utilities for controlling flex box. Flex utility classes able to apply sm, md, lg and xl as responsive breakpoint, e.g flex-sm-wrap-reverse",list:[{class:"flex-row",props:"flex-direction: row"},{class:"flex-column",props:"flex-direction: column"},{class:"flex-row-reverse",props:"flex-direction: row-reverse"},{class:"flex-column-reverse",props:"flex-direction: column-reverse"},{class:"flex-wrap",props:"flex-wrap: wrap"},{class:"flex-nowrap",props:"flex-wrap: nowrap"},{class:"flex-wrap-reverse",props:"flex-wrap: wrap-reverse"},{class:"flex-fill",props:"flex: 1 1 auto"},{class:"flex-grow-0",props:"flex-grow: 0"},{class:"flex-grow-1",props:"flex-grow: 1"},{class:"flex-shrink-0",props:"flex-shrink: 0"},{class:"flex-shrink-1",props:"flex-shrink: 1"},{class:"justify-content-start",props:"justify-content: flex-start"},{class:"justify-content-end",props:"justify-content: flex-end"},{class:"justify-content-center",props:"justify-content: center"},{class:"justify-content-between",props:"justify-content: space-between"},{class:"justify-content-around",props:"justify-content: space-around"},{class:"align-items-start",props:"align-items: flex-start"},{class:"align-items-end",props:"align-items: flex-end"},{class:"align-items-center",props:"align-items: center"},{class:"align-items-baseline",props:"align-items: baseline"},{class:"align-items-stretch",props:"align-items: stretch"},{class:"align-content-start",props:"align-content: flex-start"},{class:"align-content-end",props:"align-content: flex-end"},{class:"align-content-center",props:"align-content: center"},{class:"align-content-between",props:"align-content: space-between"},{class:"align-content-around",props:"align-content: space-around"},{class:"align-content-stretch",props:"align-content: stretch"},{class:"align-self-auto",props:"align-self: auto"},{class:"align-self-start",props:"align-self: flex-start"},{class:"align-self-end",props:"align-self: flex-end"},{class:"align-self-center",props:"align-self: center"},{class:"align-self-baseline",props:"align-self: baseline"},{class:"align-self-stretch",props:"align-self: stretch"}]},{title:"Float",desc:"Utilities for controlling the wrapping of content around an element. Float utility classes able to apply sm, md, lg and xl as responsive breakpoint, e.g float-sm-right",list:[{class:"float-left",props:"float: left"},{class:"float-right",props:"float: right"},{class:"float-none",props:"float: none"},{class:"clearfix",props:'&::after { display: block; clear: both; content: ""; }'}]},{title:"Image",desc:"Utilities for controlling image elements.",list:[{class:"img-fluid",props:"max-width: 100%; height: auto"}]},{title:"Opacity",desc:"Utilities for controlling the opacity of an element.",list:[{class:"opacity-1",props:"opacity: 1"},{class:"opacity-0",props:"opacity: 0"},{class:"opacity-0-1",props:"opacity: 0.1"},{class:"opacity-0-2",props:"opacity: 0.2"},{class:"opacity-0-3",props:"opacity: 0.3"},{class:"opacity-0-4",props:"opacity: 0.4"},{class:"opacity-0-5",props:"opacity: 0.5"},{class:"opacity-0-6",props:"opacity: 0.6"},{class:"opacity-0-7",props:"opacity: 0.7"},{class:"opacity-0-8",props:"opacity: 0.8"},{class:"opacity-0-9",props:"opacity: 0.9"}]},{title:"Position",desc:"Utilities for controlling how an element is positioned in the DOM.",list:[{class:"position-static",props:"position: static"},{class:"position-relative",props:"position: relative"},{class:"position-absolute",props:"position: absolute"},{class:"position-fixed",props:"position: fixed"},{class:"position-sticky",props:"position: sticky"},{class:"fixed-top",props:"position: fixed; top: 0; right: 0; left: 0; z-index: 1030;"},{class:"fixed-bottom",props:"position: fixed; bottom: 0; right: 0; left: 0; z-index: 1030;"},{class:"sticky-top",props:"position: sticky; top: 0; z-index: 1030;"}]},{title:"Shadow",desc:"Utilities for controlling the box shadow of an element.",list:[{class:"shadow-sm",props:"box-shadow: 0 0.125rem 0.25rem rgba(#000000, 0.075)"},{class:"shadow",props:"box-shadow: 0 0.5rem 1rem rgba(#000000, 0.15)"},{class:"shadow-lg",props:"box-shadow: 0 1rem 3rem rgba(#000000, 0.175)"},{class:"shadow-none",props:"box-shadow: none"}]},{title:"Sizing",desc:"Utilities for setting the height and weight of an element.",list:[{class:"w-25",props:"width: 25%"},{class:"w-50",props:"width: 50%"},{class:"w-75",props:"width: 75%"},{class:"w-100",props:"width: 100%"},{class:"h-25",props:"height: 25%"},{class:"h-50",props:"height: 50%"},{class:"h-75",props:"height: 75%"},{class:"h-100",props:"height: 100%"},{class:"mw-100",props:"max-width: 100% "},{class:"mh-100",props:"max-height:"},{class:"min-vw-100",props:"min-width: 100vw"},{class:"min-vh-100",props:"min-height: 100vh"},{class:"vw-100",props:"width: 100vw"},{class:"vh-100",props:"height: 100vh"}]},{title:"Spacing",desc:"Utilities for controlling an elements padding & margin. Spacing utility classes able to apply sm, md, lg and xl as responsive breakpoint, e.g p-sm-3, m-lg-4",list:[{class:"p-0",props:"padding: 0"},{class:"p-1",props:"padding: 0.25rem"},{class:"p-2",props:"padding: 0.5rem"},{class:"p-3",props:"padding: 1rem"},{class:"p-4",props:"padding: 1.5rem"},{class:"p-5",props:"padding: 3rem"},{class:"pt-0",props:"padding-top: 0"},{class:"pt-1",props:"padding-top: 0.25rem"},{class:"pt-2",props:"padding-top: 0.5rem"},{class:"pt-3",props:"padding-top: 1rem"},{class:"pt-4",props:"padding-top: 1.5rem"},{class:"pt-5",props:"padding-top: 3rem"},{class:"pr-0",props:"padding-right: 0"},{class:"pr-1",props:"padding-right: 0.25rem"},{class:"pr-2",props:"padding-right: 0.5rem"},{class:"pr-3",props:"padding-right: 1rem"},{class:"pr-4",props:"padding-right: 1.5rem"},{class:"pr-5",props:"padding-right: 3rem"},{class:"pb-0",props:"padding: 0"},{class:"pb-1",props:"padding-bottom: 0.25rem"},{class:"pb-2",props:"padding-bottom: 0.5rem"},{class:"pb-3",props:"padding-bottom: 1rem"},{class:"pb-4",props:"padding-bottom: 1.5rem"},{class:"pb-5",props:"padding-bottom: 3rem"},{class:"pl-0",props:"padding-left: 0"},{class:"pl-1",props:"padding-left: 0.25rem"},{class:"pl-2",props:"padding-left: 0.5rem"},{class:"pl-3",props:"padding-left: 1rem"},{class:"pl-4",props:"padding-left: 1.5rem"},{class:"pl-5",props:"padding-left: 3rem"},{class:"px-0",props:"padding-left: 0; padding-right: 0"},{class:"px-1",props:"padding-left: 0.25rem; padding-right: 0.25rem"},{class:"px-2",props:"padding-left: 0.5rem; padding-right: 0.5rem"},{class:"px-3",props:"padding-left: 1rem; padding-right: 1rem"},{class:"px-4",props:"padding-left: 1.5rem; padding-right: 1.5rem"},{class:"px-5",props:"padding-left: 3rem; padding-right: 3rem"},{class:"py-0",props:"padding-top: 0; padding-bottom: 0"},{class:"py-1",props:"padding-top: 0.25rem; padding-bottom: 0.25rem"},{class:"py-2",props:"padding-top: 0.5rem; padding-bottom: 0.5rem"},{class:"py-3",props:"padding-top: 1rem; padding-bottom: 1rem"},{class:"py-4",props:"padding-top: 1.5rem; padding-bottom: 1.5rem"},{class:"py-5",props:"padding-top: 3rem; padding-bottom: 3rem"},{class:"m-0",props:"margin: 0"},{class:"m-1",props:"margin: 0.25rem"},{class:"m-2",props:"margin: 0.5rem"},{class:"m-3",props:"margin: 1rem"},{class:"m-4",props:"margin: 1.5rem"},{class:"m-5",props:"margin: 3rem"},{class:"mt-0",props:"margin-top: 0"},{class:"mt-1",props:"margin-top: 0.25rem"},{class:"mt-2",props:"margin-top: 0.5rem"},{class:"mt-3",props:"margin-top: 1rem"},{class:"mt-4",props:"margin-top: 1.5rem"},{class:"mt-5",props:"margin-top: 3rem"},{class:"mr-0",props:"margin-right: 0"},{class:"mr-1",props:"margin-right: 0.25rem"},{class:"mr-2",props:"margin-right: 0.5rem"},{class:"mr-3",props:"margin-right: 1rem"},{class:"mr-4",props:"margin-right: 1.5rem"},{class:"mr-5",props:"margin-right: 3rem"},{class:"mb-0",props:"margin: 0"},{class:"mb-1",props:"margin-bottom: 0.25rem"},{class:"mb-2",props:"margin-bottom: 0.5rem"},{class:"mb-3",props:"margin-bottom: 1rem"},{class:"mb-4",props:"margin-bottom: 1.5rem"},{class:"mb-5",props:"margin-bottom: 3rem"},{class:"ml-0",props:"margin-left: 0"},{class:"ml-1",props:"margin-left: 0.25rem"},{class:"ml-2",props:"margin-left: 0.5rem"},{class:"ml-3",props:"margin-left: 1rem"},{class:"ml-4",props:"margin-left: 1.5rem"},{class:"ml-5",props:"margin-left: 3rem"},{class:"mx-0",props:"margin-left: 0; margin-right: 0"},{class:"mx-1",props:"margin-left: 0.25rem; margin-right: 0.25rem"},{class:"mx-2",props:"margin-left: 0.5rem; margin-right: 0.5rem"},{class:"mx-3",props:"margin-left: 1rem; margin-right: 1rem"},{class:"mx-4",props:"margin-left: 1.5rem; margin-right: 1.5rem"},{class:"mx-5",props:"margin-left: 3rem; margin-right: 3rem"},{class:"my-0",props:"margin-top: 0; margin-bottom: 0"},{class:"my-1",props:"margin-top: 0.25rem; margin-bottom: 0.25rem"},{class:"my-2",props:"margin-top: 0.5rem; margin-bottom: 0.5rem"},{class:"my-3",props:"margin-top: 1rem; margin-bottom: 1rem"},{class:"my-4",props:"margin-top: 1.5rem; margin-bottom: 1.5rem"},{class:"my-5",props:"margin-top: 3rem; margin-bottom: 3rem"}]},{title:"Text",desc:"Utilities for controlling the text element.",list:[{class:"text-monospace",props:"font-family: $font-family-monospace"},{class:"text-justify",props:"text-align: justify"},{class:"text-wrap",props:"white-space: normal"},{class:"text-nowrap",props:"white-space: nowrap"},{class:"text-truncate",props:"overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"},{class:"text-left",props:"text-align: left"},{class:"text-center",props:"text-align: center"},{class:"text-right",props:"text-align: right"},{class:"text-lowercase",props:"text-transform: lowercase"},{class:"text-uppercase",props:"text-transform: uppercase"},{class:"text-capitalize",props:"text-transform: capitalize"},{class:"font-weight-light",props:"font-weight: 300"},{class:"font-weight-lighter",props:"font-weight: lighter"},{class:"font-weight-normal",props:"font-weight: 400"},{class:"font-weight-semibold",props:"font-weight: 500"},{class:"font-weight-bold",props:"font-weight: bold"},{class:"font-weight-bolder",props:"font-weight: bolder"},{class:"font-size-xxl",props:"font-size: 1.875rem"},{class:"font-size-xl",props:"font-size: 1.375rem"},{class:"font-size-lg",props:"font-size: 1.25rem"},{class:"font-size-md",props:"font-size: 1.05rem"},{class:"font-size-base",props:"font-size: 0.875rem "},{class:"font-size-sm",props:"font-size: 0.75rem"},{class:"font-size-xs",props:"font-size: 0.625rem"},{class:"text-primary",props:"color: #3e82f7"},{class:"text-secondary",props:"color: #a461d8"},{class:"text-success",props:"color: #04d182"},{class:"text-info",props:"color: #3e82f7"},{class:"text-warning",props:"color: #ffc542"},{class:"text-danger",props:"color: #ff6b72"},{class:"text-dark",props:"color: #1a3353"},{class:"text-gray",props:"color: #455560"},{class:"text-gray-light",props:"color: #72849a"},{class:"text-gray-lighter",props:"color: #ededed"},{class:"text-gray-lightest",props:"color: #f7f7f8"},{class:"text-white",props:"color: #ffffff"},{class:"text-body",props:"color: #455560"},{class:"text-muted",props:"color: rgba(#72849a, 0.7)"},{class:"text-placeholder",props:"color: rgba(#72849a, 0.4)"},{class:"text-black-50",props:"rgba(#000000, 0.5)"},{class:"text-white-50",props:"rgba(#ffffff, 0.5)"},{class:"text-hide",props:"font: 0/0 a; color: transparent; text-shadow: none; background-color: transparent; border: 0;"},{class:"text-decoration-none",props:"text-decoration: none"},{class:"text-break",props:"word-break: break-word: overflow-wrap: break-word"},{class:"text-reset",props:"color: inherit"}]},{title:"Visibility",desc:"Utilities for controlling the visibility of an element.",list:[{class:"visible",props:"visibility: visible"},{class:"invisible",props:"visibility: hidden"}]}];e.default=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(i.a,{children:[Object(n.jsxs)(a.a,{xs:24,sm:24,md:26,lg:18,children:[Object(n.jsx)("h2",{children:"Utility Classes"}),Object(n.jsx)("p",{children:"Emilus comes with utility css class inspired by bootstrap, which help you style your element quickly & handy."}),p.map((function(t){return Object(n.jsxs)("div",{className:"mt-4",id:t.title,children:[Object(n.jsx)("h4",{children:t.title}),Object(n.jsx)("p",{children:t.desc}),Object(n.jsx)("div",{className:"api-container border-0 p-0",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Class"}),Object(n.jsx)("th",{children:"Property"})]})}),Object(n.jsx)("tbody",{children:t.list.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.class}),Object(n.jsx)("td",{children:Object(n.jsxs)(r.a,{alignItems:"center",children:["Background"===t.title&&Object(n.jsx)("span",{className:"mr-2 d-inline-block ".concat(e.class),style:{height:12,width:12}}),Object(n.jsx)("span",{children:e.props})]})})]},e.class)}))})]})})]},t.title)}))]}),Object(n.jsx)(a.a,{xs:24,sm:24,md:26,lg:6,children:Object(n.jsx)(o.a,{className:"ml-md-4",offsetTop:80,children:p.map((function(t){return Object(n.jsx)(l,{href:"#".concat(t.title),title:t.title},"anchor-".concat(t.title))}))})})]})})}}}]);
//# sourceMappingURL=20.42544f7e.chunk.js.map