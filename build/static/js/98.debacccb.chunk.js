(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[98],{946:function(e,s,t){"use strict";t.r(s);var a=t(6),c=t(1),r=t.n(c),i=t(38),n=t(206),o=t(738),l=t(150),d=t(94),m=t(451),j=t(56),h=t(163),u=t(119),b=t(33),x=t(43),g=t(577),O=t(0),p={otp:[{required:!0,message:"Please input your otp"}],password:[{required:!0,message:"Please input your password"},{min:8,message:"minimum 8 characters with a numerical digit. "}],confirm_password:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,t){return t&&s("password")!==t?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},f={backgroundImage:"linear-gradient(to bottom, rgba(55, 81, 255, 0.7), rgba(55, 81, 255, 0.7)), url(".concat("/img/others/Frame.png",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",opacity:"0.9",position:"relative"},w={forgetPassword:b.e,showAuthMessage:b.n,hideAuthMessage:b.l,showLoading:b.o};s.default=Object(i.b)((function(e){var s=e.auth;return{loading:s.loading,message:s.message,showMessage:s.showMessage,token:s.token,redirect:s.redirect}}),w)((function(e){console.log("props....",e);var s=Object(x.g)(),t=Object(i.d)((function(e){return e.theme.currentTheme})),b=n.a.useForm(),w=Object(a.a)(b,1)[0],v=e.showLoading,y=e.loading,N=e.message,P=e.showMessage,k=Object(c.useState)(""),q=Object(a.a)(k,2),F=q[0],I=q[1],M=Object(c.useState)({}),V=Object(a.a)(M,2),T=V[0],_=V[1],A=function(e){T[e.target.id]=e.target.value,_(T)};return Object(c.useEffect)((function(){if(e&&e.location&&e.location.pathname){var s=e.location.pathname.split("/");I(s[3])}}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(g.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:P?1:0,marginBottom:P?20:0},children:Object(O.jsx)(o.a,{type:"error",showIcon:!0,message:N})}),Object(O.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(O.jsxs)(l.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(O.jsx)(d.a,{xs:0,sm:0,md:0,lg:12,children:Object(O.jsx)("div",{className:"d-flex flex-column  h-100",style:f,children:Object(O.jsx)(l.a,{justify:"center",style:{position:"absolute"},children:Object(O.jsx)(d.a,{xs:0,sm:0,md:0,lg:20,children:Object(O.jsxs)("div",{style:{marginTop:"50%"},children:[Object(O.jsx)("h1",{className:"text-white",children:"\u201c"}),Object(O.jsx)("p",{className:"text-white",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}),Object(O.jsxs)(l.a,{className:"justify-content-between",children:[Object(O.jsxs)("p",{className:"text-white",children:["Vincent Obi ",Object(O.jsx)(h.a,{className:"bg-success"})]}),Object(O.jsx)("p",{className:"text-white",children:Object(O.jsx)("img",{className:"img-fluid h-100",src:"/img/others/Vector 1.png",alt:""})})]})]})})})})}),Object(O.jsx)(d.a,{xs:20,sm:20,md:24,lg:12,children:Object(O.jsxs)("div",{className:"container d-flex flex-column  h-100",children:[Object(O.jsx)(l.a,{className:"mt-2",children:Object(O.jsx)(d.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:"/auth/login-1",children:[Object(O.jsx)(u.a,{className:"mr-1"}),"Back"]})})})}),Object(O.jsx)(l.a,{justify:"center",className:"mt-5 text-center",children:Object(O.jsxs)(d.a,{xs:24,sm:24,md:20,lg:16,xl:8,children:[Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsx)("h3",{className:"mt-3 font-weight-bold",children:"Enter verification code"}),Object(O.jsx)("p",{className:"mb-4",children:"We have just sent a verification code to"}),Object(O.jsx)("h5",{className:"text-center",children:e.location?e.location.state:""})]}),Object(O.jsx)(l.a,{justify:"left",children:Object(O.jsx)(d.a,{xs:24,sm:24,md:20,lg:20,children:Object(O.jsxs)(n.a,{form:w,layout:"vertical",name:"register-form",onFinish:function(t){console.log("values...",t),v();var a={request:{token:F,otp:t.otp,newPassword:t.password,confirmPassword:t.confirm_password},route:s};e.forgetPassword(a)},children:[Object(O.jsx)(n.a.Item,{name:"otp",label:"OTP Varification",rules:p.otp,hasFeedback:!0,onChange:function(e){return A(e)},value:T.password,children:Object(O.jsx)(m.a.Password,{required:!0})}),Object(O.jsx)(n.a.Item,{name:"password",label:"Password",rules:p.password,hasFeedback:!0,onChange:function(e){return A(e)},value:T.password,children:Object(O.jsx)(m.a.Password,{required:!0})}),Object(O.jsx)(n.a.Item,{name:"confirm_password",label:"Re-enter password*",rules:p.confirm_password,hasFeedback:!0,children:Object(O.jsx)(m.a.Password,{required:!0})}),Object(O.jsx)(n.a.Item,{children:Object(O.jsx)(j.a,{type:"primary",htmlType:"submit",block:!0,loading:y,children:"Continue"})})]})})})]})})]})})]})})]})})}))}}]);
//# sourceMappingURL=98.debacccb.chunk.js.map