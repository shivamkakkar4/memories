(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),c=n.n(r),i=n(18),s=n(42),o=n(89),l=n(90),d=n(105),u="FETCH_ALL",j="FETCH_POST",p="CREATE",b="UPDATE",m="DELETE",h="LIKE",x="COMMENT",f="CLEAR_POST",O="SET_CURRENT_ID",g="CLEAR_CURRENT_ID",v="AUTH",y="LOGOUT",w="FETCH_USERS",k=n(11),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return localStorage.setItem("profile",JSON.stringify(Object(k.a)({},null===t||void 0===t?void 0:t.data))),Object(k.a)(Object(k.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case y:return localStorage.clear(),Object(k.a)(Object(k.a)({},e),{},{authData:null});default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentId:0,currentPost:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return e.currentId=t.payload,e;case g:return e.currentId=0,e;case j:return e.currentPost=t.payload,e;case f:return e.currentPost=null,e;default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;default:return e}},I=Object(s.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;case p:return[].concat(Object(d.a)(e),[t.payload]);case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case m:return e.filter((function(e){return e._id!==t.payload}));case h:case x:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},auth:C,currentSelected:N,users:S}),T=n(193),z=n(27),E=n(14),L=n(185),D=n(190),_=n(9),F=n.n(_),B=n(15),A=n(91),P=n.n(A).a.create({baseURL:"https://add-memories.herokuapp.com"});P.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var W=function(e){return P.get("/posts/".concat(e))},R=function(e,t){return P.patch("/posts/".concat(e),t)},H=function(e){return P.delete("/posts/".concat(e))},M=function(e){return P.patch("/posts/".concat(e,"/likePost"))},U=function(e,t){return P.patch("/posts/".concat(e,"/commentPost"),t)},J=function(e){return{type:O,payload:e}},q=function(){return{type:g}},G=function(e){return function(){var t=Object(B.a)(F.a.mark((function t(n){var a,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W(e);case 3:a=t.sent,r=a.data,n({type:j,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},V=function(e){return function(){var t=Object(B.a)(F.a.mark((function t(n){var a,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,P.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:p,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},K=function(e,t){return function(){var n=Object(B.a)(F.a.mark((function n(a){var r,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,R(e,t);case 3:r=n.sent,c=r.data,a({type:b,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(B.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H(e);case 3:n({type:m,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},Z=function(e){return function(){var t=Object(B.a)(F.a.mark((function t(n){var a,r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M(e);case 3:a=t.sent,r=a.data,n({type:h,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(e,t){return function(){var n=Object(B.a)(F.a.mark((function n(a){var r,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,U(e,t);case 3:r=n.sent,c=r.data,a({type:x,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},X=n(189),$=n(182),ee=n(183),te=n(150),ne=n(203),ae=n(186),re=n(187),ce=n(188),ie=n(66),se=n.n(ie),oe=n(68),le=n.n(oe),de=n(97),ue=n.n(de),je=n(56),pe=n.n(je),be=n(67),me=n.n(be),he=n(63),xe=n.n(he),fe=n(179),Oe=Object(fe.a)({media:{height:300,backgroundSize:"100% 100%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken",cursor:"pointer"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"0 20px"},title:{padding:"5px 16px 0 16px",fontWeight:"bold",textTransform:"uppercase"},message:{wordBreak:"break-word"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}),ge=n(2),ve=function(e){var t,n,a=e.post,r=Object(i.b)(),c=Oe(),s=JSON.parse(localStorage.getItem("profile")),o=function(){return a.likes.length>0?a.likes.find((function(e){var t;return e===(null===s||void 0===s||null===(t=s.result)||void 0===t?void 0:t.email)}))?Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(se.a,{fontSize:"small"}),"\xa0",a.likes.length," ",1===a.likes.length?"Like":"Likes"]}):Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(pe.a,{fontSize:"small"}),"\xa0",a.likes.length," ",1===a.likes.length?"Like":"Likes"]}):Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(pe.a,{fontSize:"small"}),"\xa0Like"]})};return Object(ge.jsxs)($.a,{className:c.card,children:[Object(ge.jsx)(z.b,{to:"post/".concat(a._id),children:Object(ge.jsx)(ee.a,{className:c.media,image:a.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:"View Post"})}),Object(ge.jsxs)("div",{className:c.overlay,children:[Object(ge.jsx)(te.a,{variant:"h6",children:a.name}),Object(ge.jsx)(te.a,{variant:"body2",children:xe()(a.createdAt).fromNow()})]}),(null===s||void 0===s||null===(t=s.result)||void 0===t?void 0:t.email)===(null===a||void 0===a?void 0:a.creator)&&Object(ge.jsx)("div",{className:c.overlay2,children:Object(ge.jsx)(ne.a,{title:"Edit Post",children:Object(ge.jsx)(ae.a,{style:{color:"white"},size:"small",onClick:function(){r(J(a._id)),window.scrollTo(0,0)},children:Object(ge.jsx)(ue.a,{fontSize:"default"})})})}),Object(ge.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(ge.jsx)(te.a,{noWrap:!0,className:c.title,gutterBottom:!0,variant:"h5",component:"h2",children:a.title}),Object(ge.jsx)(re.a,{children:Object(ge.jsxs)(te.a,{className:c.message,variant:"body2",component:"p",children:[a.message.substring(0,84)," ",a.message.length>84&&Object(ge.jsx)(z.b,{to:"post/".concat(a._id),style:{textDecoration:"none"},children:Object(ge.jsx)("span",{style:{color:"grey",cursor:"pointer"},children:"...more"})})]})}),Object(ge.jsx)("div",{className:c.details,children:Object(ge.jsx)(te.a,{variant:"body2",color:"textSecondary",component:"h2",children:a.tags.map((function(e){return"#".concat(e," ")}))})}),Object(ge.jsxs)(ce.a,{className:c.cardActions,children:[Object(ge.jsx)(ae.a,{size:"small",color:"primary",disabled:!(null===s||void 0===s?void 0:s.result),onClick:function(){return r(Z(a._id))},children:Object(ge.jsx)(o,{})}),Object(ge.jsx)(z.b,{to:"post/".concat(a._id),children:Object(ge.jsx)(ae.a,{color:"primary",children:Object(ge.jsx)(me.a,{fontSize:"small"})})}),(null===s||void 0===s||null===(n=s.result)||void 0===n?void 0:n.email)===(null===a||void 0===a?void 0:a.creator)?Object(ge.jsxs)(ae.a,{size:"small",color:"primary",onClick:function(){return r(Y(a._id))},children:[Object(ge.jsx)(le.a,{fontSize:"small"})," Delete"]}):Object(ge.jsx)(ae.a,{disabled:!0,style:{cursor:"default"}})]})]})]})},ye=Object(fe.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),we=function(){var e=Object(i.c)((function(e){return e.posts})),t=ye();return e.length?Object(ge.jsx)(D.a,{className:t.container,container:!0,alignItems:"stretch",spacing:3,children:e.map((function(e){return Object(ge.jsx)(D.a,{item:!0,xs:12,sm:6,md:6,children:Object(ge.jsx)(ve,{post:e})},e._id)}))}):Object(ge.jsx)(X.a,{})},ke=n(29),Ce=n(107),Ne=n(201),Se=n(192),Ie=n(191),Te=n(98),ze=n.n(Te),Ee=n(21),Le=Object(fe.a)((function(e){return Object(Ee.a)({root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2),maxWidth:"500px"},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}},e.breakpoints.down("xs"),{paper:{margin:"10px"}})})),De=n(202),_e=n(99),Fe=n.n(_e),Be=function(){var e,t=Object(a.useState)({title:"",message:"",tags:[],selectedFile:""}),n=Object(ke.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),o=Object(ke.a)(s,2),l=o[0],d=o[1],u=Object(i.c)((function(e){return e.currentSelected.currentId})),j=Object(i.c)((function(e){return u?e.posts.find((function(e){return e._id===u})):null})),p=Object(i.b)(),b=Le(),m=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){j&&c(j),j||c({title:"",message:"",tags:[],selectedFile:""})}),[j]);var h=function(){var e=Object(B.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===r.selectedFile){e.next=16;break}if(!u){e.next=8;break}return e.next=5,p(K(u,Object(k.a)(Object(k.a)({},r),{},{name:null===m||void 0===m||null===(n=m.result)||void 0===n?void 0:n.name})));case 5:x(),e.next=12;break;case 8:return e.next=10,p(V(Object(k.a)(Object(k.a)({},r),{},{name:null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a.name})));case 10:window.scrollTo(0,document.body.scrollHeight),x();case 12:document.getElementById("form").reset(),d(!1),e.next=17;break;case 16:d(!0);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!(null===m||void 0===m||null===(e=m.result)||void 0===e?void 0:e.name))return Object(ge.jsx)(Ce.a,{className:b.paper,children:Object(ge.jsx)(te.a,{variant:"h6",align:"center",children:"Please Sign In to create your own memories and like other's memories"})});var x=function(){p(q()),c({title:"",message:"",tags:[],selectedFile:""})};function f(e){return Object(ge.jsx)(De.a,Object(k.a)({elevation:6,variant:"filled"},e))}return Object(ge.jsx)(Ce.a,{className:b.paper,children:Object(ge.jsxs)("form",{autoComplete:"off",className:"".concat(b.root," ").concat(b.form),onSubmit:h,id:"form",children:[Object(ge.jsx)(te.a,{variant:"h6",children:u?"Edit memory":"Create a Memory"}),Object(ge.jsx)(Ne.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:r.title,onChange:function(e){return c(Object(k.a)(Object(k.a)({},r),{},{title:e.target.value}))},required:!0}),Object(ge.jsx)(Ne.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:r.message,onChange:function(e){return c(Object(k.a)(Object(k.a)({},r),{},{message:e.target.value}))},required:!0}),Object(ge.jsx)(Ne.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:r.tags,onChange:function(e){return c(Object(k.a)(Object(k.a)({},r),{},{tags:e.target.value.split(",")}))}}),Object(ge.jsxs)("div",{className:b.fileInput,children:[Object(ge.jsx)(ze.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return c(Object(k.a)(Object(k.a)({},r),{},{selectedFile:t}))}})," ",Object(ge.jsx)(Se.a,{in:l,children:Object(ge.jsx)(f,{action:Object(ge.jsx)(Ie.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){d(!1)},children:Object(ge.jsx)(Fe.a,{fontSize:"inherit"})}),severity:"error",children:"Please Upload Image"})})]}),Object(ge.jsx)(ae.a,{className:b.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(ge.jsx)(ae.a,{variant:"contained",color:"secondary",size:"small",onClick:x,fullWidth:!0,children:"Clear"})]})})},Ae=Object(fe.a)((function(e){return Object(Ee.a)({},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),Pe=function(){var e=Object(i.b)(),t=Ae();return Object(a.useEffect)((function(){e(function(){var e=Object(B.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.get("/posts");case 3:n=e.sent,a=n.data,t({type:u,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(B.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.get("/user/users");case 3:n=e.sent,a=n.data,t({type:w,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){e(q()),e({type:f})}),[]),Object(ge.jsx)(L.a,{in:!0,children:Object(ge.jsx)(T.a,{children:Object(ge.jsxs)(D.a,{className:t.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(ge.jsx)(D.a,{item:!0,xs:12,md:7,children:Object(ge.jsx)(we,{})}),Object(ge.jsx)(D.a,{item:!0,xs:12,md:4,children:Object(ge.jsx)(Be,{})})]})})})},We=n(195),Re=n(196),He=n(197),Me=n(198),Ue=n(199),Je=n(204),qe=n(100),Ge=n.p+"static/media/memories.9cfa8a46.png",Ve=n(194),Ke=Object(fe.a)((function(e){var t;return t={appBar:{display:"flex",flexDirection:"row",justifyContent:"space-around"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px",width:"60px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center",marginLeft:"10px"},titleBar:{display:"flex"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(Ve.a[500]),backgroundColor:Ve.a[500]}},Object(Ee.a)(t,e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}}),Object(Ee.a)(t,e.breakpoints.down("xs"),{appBar:{alignItems:"center"},heading:{marginLeft:"5px"},toolbar:{width:"100%"},profile:{width:"auto"},titleBar:{display:"none"},image:{marginLeft:"15px",width:"30px"}}),t})),Ye=n(25);function Ze(e){var t=e.children,n=e.window,a=Object(We.a)({target:n?n():void 0});return Object(ge.jsx)(Re.a,{appear:!1,direction:"down",in:!a,children:t})}var Qe=function(e){var t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(ke.a)(t,2),r=n[0],c=n[1],s=Object(i.b)(),o=Object(E.f)(),l=Object(E.g)(),d=Ke(),u=Object(Ye.a)(),j=Object(He.a)(u.breakpoints.down("xs")),p={variant:j?"h5":"h2"},b={size:j?"small":"medium"},m=function(){s({type:y}),o.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(qe.a)(e).exp<(new Date).getTime()&&m());c(JSON.parse(localStorage.getItem("profile")))}),[null===r||void 0===r?void 0:r.token,l]),Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(Ze,Object(k.a)(Object(k.a)({},e),{},{children:Object(ge.jsxs)(Me.a,{className:d.appBar,color:"inherit",children:[Object(ge.jsxs)("div",{className:d.brandContainer,children:[Object(ge.jsx)(te.a,Object(k.a)(Object(k.a)({component:z.b,to:"/",className:d.heading},p),{},{align:"center",children:"Memories"})),Object(ge.jsx)("img",{className:d.image,src:Ge,alt:"icon"})]}),Object(ge.jsx)(Ue.a,{className:d.toolbar,children:r?Object(ge.jsxs)("div",{className:d.profile,children:[Object(ge.jsxs)("div",{className:d.titleBar,children:[Object(ge.jsx)(Je.a,{className:d.purple,alt:r.result.name,src:r.result.imageUrl,children:r.result.name.charAt(0)}),Object(ge.jsx)(te.a,{className:d.userName,variant:"h6",children:r.result.name})]}),Object(ge.jsx)(ae.a,Object(k.a)(Object(k.a)({variant:"contained",className:d.logout},b),{},{color:"secondary",onClick:m,children:"Logout"}))]}):Object(ge.jsx)(ae.a,{component:z.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})})),Object(ge.jsx)(Ue.a,{})]})},Xe=n(101),$e=n(104),et=n.n($e),tt=function(){return Object(ge.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(ge.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},nt=Object(fe.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),at=n(200),rt=n(102),ct=n.n(rt),it=n(103),st=n.n(it),ot=function(e){var t=e.name,n=e.handleChange,a=e.label,r=e.half,c=e.autoFocus,i=e.type,s=e.handleShowPassword;return Object(ge.jsx)(D.a,{item:!0,xs:12,sm:r?6:12,children:Object(ge.jsx)(Ne.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:i,InputProps:"password"===t?{endAdornment:Object(ge.jsx)(at.a,{position:"end",children:Object(ge.jsx)(Ie.a,{onClick:s,children:"password"===i?Object(ge.jsx)(ct.a,{}):Object(ge.jsx)(st.a,{})})})}:null})})},lt={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},dt=function(){var e=Object(a.useState)(lt),t=Object(ke.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(ke.a)(c,2),o=s[0],l=s[1],d=Object(i.b)(),u=Object(E.f)(),j=nt(),p=Object(a.useState)(!1),b=Object(ke.a)(p,2),m=b[0],h=b[1],x=function(){var e=Object(B.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{d({type:v,data:{result:n,token:a}}),u.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){r(Object(k.a)(Object(k.a)({},n),{},Object(Ee.a)({},e.target.name,e.target.value)))};return Object(ge.jsx)(T.a,{component:"main",maxWidth:"xs",children:Object(ge.jsxs)(Ce.a,{className:j.paper,elevation:3,children:[Object(ge.jsx)(Je.a,{className:j.avatar,children:Object(ge.jsx)(et.a,{})}),Object(ge.jsx)(te.a,{component:"h1",variant:"h5",children:o?"Sign up":"Sign in"}),Object(ge.jsxs)("form",{className:j.form,onSubmit:function(e){e.preventDefault(),d(o?function(e,t){return function(){var n=Object(B.a)(F.a.mark((function n(a){var r,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i=e,P.post("/user/signup",i);case 3:r=n.sent,c=r.data,a({type:v,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}var i}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,u):function(e,t){return function(){var n=Object(B.a)(F.a.mark((function n(a){var r,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i=e,P.post("/user/signin",i);case 3:r=n.sent,c=r.data,a({type:v,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}var i}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,u))},children:[Object(ge.jsxs)(D.a,{container:!0,spacing:2,children:[o&&Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(ot,{name:"firstName",label:"First Name",handleChange:f,autoFocus:!0,half:!0}),Object(ge.jsx)(ot,{name:"lastName",label:"Last Name",handleChange:f,half:!0})]}),Object(ge.jsx)(ot,{name:"email",label:"Email Address",handleChange:f,type:"email"}),Object(ge.jsx)(ot,{name:"password",label:"Password",handleChange:f,type:m?"text":"password",handleShowPassword:function(){return h(!m)}}),o&&Object(ge.jsx)(ot,{name:"confirmPassword",label:"Repeat Password",handleChange:f,type:"password"})]}),Object(ge.jsx)(ae.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:j.submit,children:o?"Sign Up":"Sign In"}),Object(ge.jsx)(Xe.GoogleLogin,{clientId:"105990397069-29lljmqd17mf4rkbsnvd30knldmqlit2.apps.googleusercontent.com",render:function(e){return Object(ge.jsx)(ae.a,{className:j.googleButton,color:"primary",fullWidth:!0,onClick:e.onClick,disabled:e.disabled,startIcon:Object(ge.jsx)(tt,{}),variant:"contained",children:"Google Sign In"})},onSuccess:x,onFailure:function(){return alert("Google Sign In was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),Object(ge.jsx)(D.a,{container:!0,justify:"flex-end",children:Object(ge.jsx)(D.a,{item:!0,children:Object(ge.jsx)(ae.a,{onClick:function(){l((function(e){return!e})),h(!1)},children:o?"Already have an account? Sign in":"Don't have an account? Sign Up"})})})]})]})})},ut=Object(fe.a)((function(e){return Object(Ee.a)({media:{height:560,backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundSize:"100% 100%"},contentContainer:{background:"white",justifyContent:"space-between"},profile:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"5px",padding:"0 10px"},avatar:{backgroundColor:"black",height:"35px",width:"35px"},avatarComment:{backgroundColor:"black",height:"25px",width:"25px",marginRight:"5px"},userName:{display:"flex",alignItems:"center",marginLeft:"10px"},horizontal:{height:"1px",backgroundColor:"#ccc",border:"none"},middleContainer:{maxHeight:"354px",overflowY:"auto"},title:{padding:"5px 16px 0 16px",fontWeight:"bold",textTransform:"uppercase",wordBreak:"break-word"},message:{wordBreak:"break-word"},details:{display:"flex",justifyContent:"space-between",margin:"0 20px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"},commentDiv:{display:"flex",alignItems:"center"}},e.breakpoints.down("xs"),{middleContainer:{maxHeight:"100%"},media:{height:400}})})),jt=function(e){var t,n=e.history,r=e.match,c=Object(a.useState)(""),s=Object(ke.a)(c,2),o=s[0],l=s[1],d=Object(i.b)(),u=ut(),j=Object(i.c)((function(e){return e.currentSelected.currentPost})),p=r.params.id;Object(a.useEffect)((function(){d(J(p)),d(G(p))}),[d,p]);var b=JSON.parse(localStorage.getItem("profile")),m=function(){return j.likes.length>0?j.likes.find((function(e){var t;return e===(null===b||void 0===b||null===(t=b.result)||void 0===t?void 0:t.email)}))?Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(se.a,{fontSize:"small"}),"\xa0",j.likes.length," ",1===j.likes.length?"Like":"Likes"]}):Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(pe.a,{fontSize:"small"}),"\xa0",j.likes.length," ",1===j.likes.length?"Like":"Likes"]}):Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(pe.a,{fontSize:"small"}),"\xa0Like"]})},h=function(){var e=Object(B.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(Q(j._id,{body:o,name:b.result.name}));case 2:return l(""),e.next=5,d(G(p));case 5:(t=document.getElementById("middle")).scrollTop=t.scrollHeight;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(B.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(Z(j._id));case 2:return e.next=4,d(G(p));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return j?Object(ge.jsx)(L.a,{in:!0,children:Object(ge.jsx)(T.a,{maxWidth:"md",style:{padding:0},children:Object(ge.jsxs)(D.a,{container:!0,children:[Object(ge.jsx)(D.a,{item:!0,xs:12,sm:7,children:Object(ge.jsx)(ee.a,{className:u.media,image:j.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:j.title})}),Object(ge.jsxs)(D.a,{container:!0,item:!0,direction:"column",xs:12,sm:5,className:u.contentContainer,children:[Object(ge.jsxs)("div",{children:[Object(ge.jsxs)("div",{className:u.profile,children:[Object(ge.jsxs)("div",{style:{display:"flex"},children:[Object(ge.jsx)(Je.a,{className:u.avatar,children:j.name.charAt(0)}),Object(ge.jsx)(te.a,{className:u.userName,variant:"h6",children:j.name})]}),Object(ge.jsx)(te.a,{variant:"body2",children:xe()(j.createdAt).fromNow()})]}),Object(ge.jsx)("hr",{className:u.horizontal}),Object(ge.jsxs)("div",{id:"middle",className:u.middleContainer,children:[Object(ge.jsx)(te.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2",children:j.title}),Object(ge.jsx)(re.a,{children:Object(ge.jsx)(te.a,{className:u.message,variant:"body2",component:"p",children:j.message})}),Object(ge.jsx)("div",{className:u.details,children:Object(ge.jsx)(te.a,{variant:"body2",color:"textSecondary",component:"h2",children:j.tags.map((function(e){return"#".concat(e," ")}))})}),Object(ge.jsxs)("div",{children:[Object(ge.jsx)("hr",{className:u.horizontal}),Object(ge.jsxs)(te.a,{style:{padding:"0 5px"},variant:"h5",children:["comments(",j.comments.length,")"]})]}),Object(ge.jsx)("div",{style:{padding:"5px"},children:j.comments.map((function(e){return Object(ge.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",padding:"2px 0"},children:[Object(ge.jsx)(Je.a,{className:u.avatarComment,alt:e.name,children:e.name.charAt(0)}),Object(ge.jsxs)("p",{style:{margin:0,padding:"3px 0 0 0"},children:[Object(ge.jsx)("span",{style:{color:"#484848",fontWeight:"bold"},children:e.name})," ",Object(ge.jsx)("span",{style:{wordBreak:"break-word"},children:e.body})]})]},e._id)}))})]})]}),Object(ge.jsxs)("div",{children:[Object(ge.jsx)("hr",{className:u.horizontal}),Object(ge.jsxs)(ce.a,{className:u.cardActions,children:[Object(ge.jsx)(ae.a,{size:"small",color:"primary",disabled:!(null===b||void 0===b?void 0:b.result),onClick:x,children:Object(ge.jsx)(m,{})}),Object(ge.jsx)(ae.a,{color:"primary",onClick:function(){(null===b||void 0===b?void 0:b.result)?document.getElementById("comment").focus():n.push("/auth")},children:Object(ge.jsx)(me.a,{fontSize:"small"})}),(null===b||void 0===b||null===(t=b.result)||void 0===t?void 0:t.email)===(null===j||void 0===j?void 0:j.creator)?Object(ge.jsxs)(ae.a,{size:"small",color:"primary",onClick:function(){d(Y(j._id)),n.push("/")},children:[Object(ge.jsx)(le.a,{fontSize:"small"})," Delete"]}):Object(ge.jsx)(ae.a,{disabled:!0,style:{cursor:"default"}})]}),(null===b||void 0===b?void 0:b.result)?Object(ge.jsxs)("div",{className:u.commentDiv,children:[Object(ge.jsx)(Ne.a,{id:"comment",variant:"outlined",size:"small",style:{padding:"2px 0",width:"77%"},placeholder:"Add a comment",value:o,onChange:function(e){return l(e.target.value)}}),Object(ge.jsx)(ae.a,{onClick:h,children:"Post"})]}):Object(ge.jsxs)("div",{children:[Object(ge.jsx)("hr",{className:u.horizontal}),Object(ge.jsxs)("div",{style:{textAlign:"center",paddingBottom:"5px"},children:[Object(ge.jsx)(z.b,{to:"/auth",style:{textDecoration:"none"},children:"Login"})," ","to like or comment"," "]})]})]})]})]})})}):Object(ge.jsx)(X.a,{})},pt=Object(fe.a)((function(e){return Object(Ee.a)({container:{marginTop:"20px"}},e.breakpoints.down("sm"),{container:{marginTop:0,padding:0}})})),bt=function(){var e=pt();return Object(ge.jsxs)(z.a,{children:[Object(ge.jsx)(Qe,{}),Object(ge.jsx)(T.a,{maxWidth:"lg",className:e.container,children:Object(ge.jsxs)(E.c,{children:[Object(ge.jsx)(E.a,{path:"/",exact:!0,component:Pe}),Object(ge.jsx)(E.a,{path:"/auth",exact:!0,component:dt}),Object(ge.jsx)(E.a,{path:"/post/:id",exact:!0,component:jt})]})})]})},mt=(n(147),Object(s.createStore)(I,Object(o.composeWithDevTools)(Object(s.applyMiddleware)(l.a))));c.a.render(Object(ge.jsx)(i.a,{store:mt,children:Object(ge.jsx)(bt,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.398dbb20.chunk.js.map