(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[31],{515:function(e,n,o){"use strict";n.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}},886:function(e,n,o){"use strict";o.r(n);o(1);var a=o(3311),t=o(515),r=o(0);n.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Template Setting"}),Object(r.jsx)("p",{children:"Emilus comes with a variety of different theme & layout, you can try them from quick view panel in our demo and copy the config to your project."}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{className:"font-weight-bold",children:"Config Theme"}),Object(r.jsxs)("p",{children:["You can change your theme setup from ",Object(r.jsx)("code",{children:"src/configs/AppConfigs.js"})]}),Object(r.jsx)(a.a,{className:"hl-code",language:"javascript",style:t.a,children:"import { SIDE_NAV_LIGHT, NAV_TYPE_SIDE, DIR_LTR } from 'constants/ThemeConstant';\nimport { env } from './EnvironmentConfig'\n\nexport const APP_NAME = 'Emilus';\nexport const API_BASE_URL = env.API_ENDPOINT_URL\nexport const APP_PREFIX_PATH = '/app';\nexport const AUTH_PREFIX_PATH = '/auth';\n\nexport const THEME_CONFIG = {\n\tnavCollapsed: false,\n\tsideNavTheme: SIDE_NAV_LIGHT,\n\tlocale: 'en',\n\tnavType: NAV_TYPE_SIDE,\n\ttopNavColor: '#3e82f7',\n\theaderNavColor: '',\n\tmobileNav: false,\n\tcurrentTheme: 'light',\n\tdirection: DIR_LTR\n};\n"})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{className:"font-weight-bold",children:"Config Colors"}),Object(r.jsxs)("p",{children:["Theme Colors can be change in ",Object(r.jsx)("code",{children:"src/assets/less/styles/variables/_color.less"})]}),Object(r.jsx)(a.a,{className:"hl-code",language:"less",style:t.a,children:"@blue-base:          #3e79f7;\n@purple-base:        #a461d8;\n@cyan-base:          #04d182;\n@green-base:         #21B573;\n@magenta-base:       #eb2f96;\n@pink-base:          #eb2f96;\n@red-base:           #de4436;\n@orange-base:        #fa8c16;\n@yellow-base:        #fadb14;\n@volcano-base:       #ff6b72;\n@geekblue-base:      #17bcff;\n@lime-base:          #a0d911;\n@gold-base:          #ffc542;\n\n@primary-color:       @blue-base; \n@info-color:          @primary-color;\n@success-color:       @cyan-base;\n@processing-color:    @blue-base;\n@error-color:         @volcano-base;\n@highlight-color:     @volcano-base;\n@warning-color:       @gold-base;\n@normal-color:       #fafafb;\n@white:              #fff;\n@black:              #000;\n\n@gray-dark:                 #1a3353;\n@gray:                      #455560;\n@gray-light:                #72849a;\n@gray-lighter:              #ededed;\n@gray-lightest:             #f7f7f8;\n\n@colors-palette: {\n\tblue:     \t  @blue-base;\n\tpurple:       @purple-base;\n\tcyan:     \t  @cyan-base;\n\tgreen:        @green-base;\n\tmagenta:\t    @magenta-base;\n\tpink:         @pink-base;\n\tred:          @red-base;\n\torange:       @orange-base;\n\tyellow:       @yellow-base;\n\tvolcano:      @volcano-base;\n\tgeekblue:     @geekblue-base;\n\tlime:         @lime-base;\n\tgold:         @gold-base;\n}\n\n@theme-colors: {\n\tprimary:        @primary-color;\n\tsecondary:      @purple-base;\n\tsuccess:        @success-color;\n\tinfo:           @info-color;\n\twarning:        @warning-color;\n\tdanger:         @error-color;\n\tgray:           @gray;\n\tgray-light:     @gray-light;\n\tgray-lighter:   @gray-lighter;\n\tgray-lightest:  @gray-lightest;\n  dark:           @gray-dark;\n};\n"})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{className:"font-weight-bold",children:"Use Dark Theme"}),Object(r.jsxs)("p",{children:["Dark theme can be set via ",Object(r.jsx)("code",{children:"src/configs/AppConfigs.js"}),"."]}),Object(r.jsx)(a.a,{className:"hl-code",language:"javascript",style:t.a,children:"\nexport const THEME_CONFIG = {\n\tnavCollapsed: false,\n\tsideNavTheme: SIDE_NAV_LIGHT,\n\tlocale: 'en',\n\tnavType: NAV_TYPE_SIDE,\n\ttopNavColor: '#3e82f7',\n\theaderNavColor: '',\n\tmobileNav: false,\n\tcurrentTheme: 'dark',\n\tdirection: DIR_LTR\n};\n"})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{className:"font-weight-bold",children:"Direction"}),Object(r.jsxs)("p",{children:["Direction can be set by value ",Object(r.jsx)("code",{children:"ltr"})," or ",Object(r.jsx)("code",{children:"rtl"})," in ",Object(r.jsx)("code",{children:"src/configs/AppConfigs.js"}),"."]}),Object(r.jsx)(a.a,{className:"hl-code",language:"javascript",style:t.a,children:"\nexport const THEME_CONFIG = {\n\tnavCollapsed: false,\n\tsideNavTheme: SIDE_NAV_LIGHT,\n\tlocale: 'en',\n\tnavType: NAV_TYPE_SIDE,\n\ttopNavColor: '#3e82f7',\n\theaderNavColor: '',\n\tmobileNav: false,\n\tcurrentTheme: 'light',\n\tdirection: DIR_RTL\n}\n"})]})]})}}}]);
//# sourceMappingURL=31.e3a921a9.chunk.js.map