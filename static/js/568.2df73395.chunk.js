"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[568],{6084:(e,s,t)=>{t.d(s,{m:()=>a});const a={NotFound:t.p+"static/media/Not-found.8a9f655b8e6c56e88a24.png",video:t(898),footer:t.p+"static/media/footer.1ee49fd1df295ff00dfe.png",thankyou:t.p+"static/media/thank_you.4632b32d2b2d9f98bcb3.png",thankyou_footer:t.p+"static/media/grass.d7fbfbb57960b7d1447f.png",home1:t.p+"static/media/home_photo1.7fe3e84e1cc0d2410f43.png",home2:t.p+"static/media/home_photo2.ae9c1c12c66ca5487255.png",gif:t.p+"static/media/home3.7385633d9edfe1476d03.gif",audio1:t(8856),chatIcon:t.p+"static/media/chatIcon.50e42054506cc1190733.png"}},1419:(e,s,t)=>{t.d(s,{A:()=>i});var a=t(5043),n=(t(6084),t(3216)),c=t(579);const i=()=>{const e=(0,a.useRef)(null),s=(0,n.Zp)();return(0,a.useEffect)((()=>{const s=s=>{const t=e.current.parentElement.getBoundingClientRect(),a=s.clientX-t.left,n=s.clientY-t.top;e.current.style.left=`${a}px`,e.current.style.top=`${n}px`};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)}),[]),(0,c.jsxs)("div",{className:"footer",children:[(0,c.jsx)("div",{className:"absolute z-10",children:(0,c.jsxs)("div",{onClick:()=>s("/thank_you"),className:"footer-btn",children:[(0,c.jsx)("span",{className:"first",children:"E"}),(0,c.jsx)("span",{className:"second",children:"n"}),(0,c.jsx)("span",{className:"third",children:"d"}),(0,c.jsx)("span",{className:"middle fourth",children:"t"}),(0,c.jsx)("span",{className:"fifth",children:"h"}),(0,c.jsx)("span",{className:"sixth",children:"e"}),(0,c.jsx)("span",{className:"middle seventh",children:"j"}),(0,c.jsx)("span",{className:"eighth",children:"o"}),(0,c.jsx)("span",{className:"ninth",children:"u"}),(0,c.jsx)("span",{className:"tenth",children:"r"}),(0,c.jsx)("span",{className:"eleventh",children:"n"}),(0,c.jsx)("span",{className:"twelfth",children:"e"}),(0,c.jsx)("span",{className:"last",children:"y"})]})}),(0,c.jsx)("p",{children:"Ready to return to Earth?"}),(0,c.jsx)("div",{className:"cursor",ref:e})]})}},8128:(e,s,t)=>{t.d(s,{A:()=>i});t(5043);var a=t(3216),n=t(5475),c=t(579);const i=()=>{const e=(0,a.Zp)(),s=e=>{let{isActive:s}=e;return{color:s?"#7a46a8":"#808080",fontWeight:s?"bold":"400",borderBottom:s?"2px solid #7a46a8":""}};return(0,c.jsx)("nav",{className:"navbar w-full",children:(0,c.jsxs)("div",{className:"list",children:[(0,c.jsx)(n.k2,{to:"/home",style:s,children:"Home"}),(0,c.jsx)(n.k2,{to:"/Personality_test",style:s,children:"Personality Test"}),(0,c.jsx)(n.k2,{to:"/chatbot",style:s,children:"ChatBot"}),(0,c.jsx)("button",{onClick:()=>e("/cards"),children:"Discover Exoplanets"})]})})}},77:(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var a=t(5043),n=t(3216),c=t(6213),i=t(8128),l=t(1637),d=t(1419),o=t(579);const r=()=>{const{planetName:e}=(0,n.g)(),[s,r]=(0,a.useState)({name:"",URL:"",planet_mass:"",planet_radius:"",planet_discovery_method:"",discovery_date:null,planet_type:null});return(0,a.useEffect)((()=>{(async()=>{try{const t=await c.A.get(`https://nasa-space-apps-2024.onrender.com/api/v1/planets/name/${e}`);r(t.data.body),console.log(s,e),console.log(t.data.body)}catch(t){console.error("Error fetching planet data:",t)}})()}),[e]),(0,o.jsx)("div",{children:s?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{}),(0,o.jsxs)("div",{className:"planet-info",children:[(0,o.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,style:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",objectFit:"cover",zIndex:-1},children:[(0,o.jsx)("source",{src:t(898),type:"video/mp4"}),"Your browser does not support the video tag."]}),(0,o.jsx)("h2",{children:e}),(0,o.jsx)("div",{className:"simulation",children:(0,o.jsx)("iframe",{src:`https://eyes.nasa.gov/apps/exo/#/planet/${e}`,style:{width:"100%",height:"100%",border:"none"}})}),(0,o.jsxs)("div",{className:"planet-info-main",children:[(0,o.jsx)("h3",{children:"Discoverd: "}),(0,o.jsx)("p",{children:s.discovery_date}),(0,o.jsx)("br",{}),(0,o.jsx)("h3",{children:"Planet Type: "}),(0,o.jsx)("p",{children:s.planet_type})]}),(0,o.jsxs)("div",{className:"planet-info-content",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"planet mass"}),(0,o.jsx)("p",{children:s.planet_mass})]}),(0,o.jsx)("div",{className:"info-line"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{className:"planet-title",children:"planet radius"}),(0,o.jsx)("p",{children:s.planet_radius})]}),(0,o.jsx)("div",{className:"info-line"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"planet discovery method"}),(0,o.jsx)("p",{children:s.planet_discovery_method})]})]})]}),(0,o.jsx)(d.A,{})]}):(0,o.jsx)("div",{className:"bg-black h-screen flex justify-center items-center",children:(0,o.jsx)(l.A,{})})})}},8856:(e,s,t)=>{e.exports=t.p+"static/media/audio1.f51a911ec3bdd2160068.mp3"},898:(e,s,t)=>{e.exports=t.p+"static/media/bgvideo.e8abf55e7aa066bd1e9c.mp4"}}]);
//# sourceMappingURL=568.2df73395.chunk.js.map