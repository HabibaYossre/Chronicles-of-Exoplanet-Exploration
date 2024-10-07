"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[958],{9958:(e,t,n)=>{n.d(t,{A:()=>F});var r=n(5043),i=n(8387),o=n(8610);function u(e){try{return e.matches(":focus-visible")}catch(t){0}return!1}var s=n(4535),l=n(8249);const a=n(7786).A,c="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;const p=function(e){const t=r.useRef(e);return c((()=>{t.current=e})),r.useRef((function(){return(0,t.current)(...arguments)})).current},d={};function h(e,t){const n=r.useRef(d);return n.current===d&&(n.current=e(t)),n}class f{static create(){return new f}static use(){const e=h(f.create).current,[t,n]=r.useState(!1);return e.shouldMount=t,e.setShouldMount=n,r.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r}));return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then((()=>this.ref.current?.start(...t)))}stop(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then((()=>this.ref.current?.stop(...t)))}pulsate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then((()=>this.ref.current?.pulsate(...t)))}}var m=n(8168);function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}const v=r.createContext(null);function g(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function M(e,t,n){var i=g(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var u in e)u in t?o.length&&(i[u]=o,o=[]):o.push(u);var s={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var a=i[l][r];s[i[l][r]]=n(a)}s[l]=n(l)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,i);return Object.keys(o).forEach((function(u){var s=o[u];if((0,r.isValidElement)(s)){var l=u in t,a=u in i,c=t[u],p=(0,r.isValidElement)(c)&&!c.props.in;!a||l&&!p?a||!l||p?a&&l&&(0,r.isValidElement)(c)&&(o[u]=(0,r.cloneElement)(s,{onExited:n.bind(null,s),in:c.props.in,exit:y(s,"exit",e),enter:y(s,"enter",e)})):o[u]=(0,r.cloneElement)(s,{in:!1}):o[u]=(0,r.cloneElement)(s,{onExited:n.bind(null,s),in:!0,exit:y(s,"exit",e),enter:y(s,"enter",e)})}})),o}var x=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},E=function(e){var t,n;function i(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,b(t,n);var o=i.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(e,t){var n,i,o=t.children,u=t.handleExited;return{children:t.firstRender?(n=e,i=u,g(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):M(e,o,u),firstRender:!1}},o.handleExited=function(e,t){var n=g(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,m.A)({},t.children);return delete n[e.key],{children:n}})))},o.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}(e,["component","childFactory"]),o=this.state.contextValue,u=x(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(v.Provider,{value:o},u):r.createElement(v.Provider,{value:o},r.createElement(t,i,u))},i}(r.Component);E.propTypes={},E.defaultProps={component:"div",childFactory:function(e){return e}};const R=E,A=[];class w{static create(){return new w}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function k(){const e=h(w.create).current;var t;return t=e.disposeEffect,r.useEffect(t,A),e}var P=n(3290),T=n(579);const C=function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:u,rippleY:s,rippleSize:l,in:a,onExited:c,timeout:p}=e,[d,h]=r.useState(!1),f=(0,i.A)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),m={width:l,height:l,top:-l/2+s,left:-l/2+u},b=(0,i.A)(n.child,d&&n.childLeaving,o&&n.childPulsate);return a||d||h(!0),r.useEffect((()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,a,p]),(0,T.jsx)("span",{className:f,style:m,children:(0,T.jsx)("span",{className:b})})};var S=n(2532);const V=(0,S.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),j=P.i7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,I=P.i7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,$=P.i7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,O=(0,s.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),D=(0,s.Ay)(C,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${V.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${j};
    animation-duration: ${550}ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
  }

  &.${V.ripplePulsate} {
    animation-duration: ${e=>{let{theme:t}=e;return t.transitions.duration.shorter}}ms;
  }

  & .${V.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${V.childLeaving} {
    opacity: 0;
    animation-name: ${I};
    animation-duration: ${550}ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
  }

  & .${V.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${$};
    animation-duration: 2500ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,L=r.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:u={},className:s,...a}=n,[c,p]=r.useState([]),d=r.useRef(0),h=r.useRef(null);r.useEffect((()=>{h.current&&(h.current(),h.current=null)}),[c]);const f=r.useRef(!1),m=k(),b=r.useRef(null),v=r.useRef(null),g=r.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:s}=e;p((e=>[...e,(0,T.jsx)(D,{classes:{ripple:(0,i.A)(u.ripple,V.ripple),rippleVisible:(0,i.A)(u.rippleVisible,V.rippleVisible),ripplePulsate:(0,i.A)(u.ripplePulsate,V.ripplePulsate),child:(0,i.A)(u.child,V.child),childLeaving:(0,i.A)(u.childLeaving,V.childLeaving),childPulsate:(0,i.A)(u.childPulsate,V.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},d.current)])),d.current+=1,h.current=s}),[u]),y=r.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:i=o||t.pulsate,fakeElement:u=!1}=t;if("mousedown"===e?.type&&f.current)return void(f.current=!1);"touchstart"===e?.type&&(f.current=!0);const s=u?null:v.current,l=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(l.width/2),c=Math.round(l.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-l.left),c=Math.round(n-l.top)}if(i)p=Math.sqrt((2*l.width**2+l.height**2)/3),p%2===0&&(p+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}e?.touches?null===b.current&&(b.current=()=>{g({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},m.start(80,(()=>{b.current&&(b.current(),b.current=null)}))):g({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})}),[o,g,m]),M=r.useCallback((()=>{y({},{pulsate:!0})}),[y]),x=r.useCallback(((e,t)=>{if(m.clear(),"touchend"===e?.type&&b.current)return b.current(),b.current=null,void m.start(0,(()=>{x(e,t)}));b.current=null,p((e=>e.length>0?e.slice(1):e)),h.current=t}),[m]);return r.useImperativeHandle(t,(()=>({pulsate:M,start:y,stop:x})),[M,y,x]),(0,T.jsx)(O,{className:(0,i.A)(V.root,u.root,s),ref:v,...a,children:(0,T.jsx)(R,{component:null,exit:!0,children:c})})}));var B=n(2372);function N(e){return(0,B.Ay)("MuiButtonBase",e)}const z=(0,S.A)("MuiButtonBase",["root","disabled","focusVisible"]),X=(0,s.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${z.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),F=r.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiButtonBase"}),{action:s,centerRipple:c=!1,children:d,className:h,component:m="button",disabled:b=!1,disableRipple:v=!1,disableTouchRipple:g=!1,focusRipple:y=!1,focusVisibleClassName:M,LinkComponent:x="a",onBlur:E,onClick:R,onContextMenu:A,onDragLeave:w,onFocus:k,onFocusVisible:P,onKeyDown:C,onKeyUp:S,onMouseDown:V,onMouseLeave:j,onMouseUp:I,onTouchEnd:$,onTouchMove:O,onTouchStart:D,tabIndex:B=0,TouchRippleProps:z,touchRippleRef:F,type:Y,...U}=n,H=r.useRef(null),K=f.use(),W=a(K.ref,F),[_,q]=r.useState(!1);b&&_&&q(!1),r.useImperativeHandle(s,(()=>({focusVisible:()=>{q(!0),H.current.focus()}})),[]);const G=K.shouldMount&&!v&&!b;function J(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;return p((r=>{t&&t(r);return n||K[e](r),!0}))}r.useEffect((()=>{_&&y&&!v&&K.pulsate()}),[v,y,_,K]);const Q=J("start",V),Z=J("stop",A),ee=J("stop",w),te=J("stop",I),ne=J("stop",(e=>{_&&e.preventDefault(),j&&j(e)})),re=J("start",D),ie=J("stop",$),oe=J("stop",O),ue=J("stop",(e=>{u(e.target)||q(!1),E&&E(e)}),!1),se=p((e=>{H.current||(H.current=e.currentTarget),u(e.target)&&(q(!0),P&&P(e)),k&&k(e)})),le=()=>{const e=H.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ae=p((e=>{y&&!e.repeat&&_&&" "===e.key&&K.stop(e,(()=>{K.start(e)})),e.target===e.currentTarget&&le()&&" "===e.key&&e.preventDefault(),C&&C(e),e.target===e.currentTarget&&le()&&"Enter"===e.key&&!b&&(e.preventDefault(),R&&R(e))})),ce=p((e=>{y&&" "===e.key&&_&&!e.defaultPrevented&&K.stop(e,(()=>{K.pulsate(e)})),S&&S(e),R&&e.target===e.currentTarget&&le()&&" "===e.key&&!e.defaultPrevented&&R(e)}));let pe=m;"button"===pe&&(U.href||U.to)&&(pe=x);const de={};"button"===pe?(de.type=void 0===Y?"button":Y,de.disabled=b):(U.href||U.to||(de.role="button"),b&&(de["aria-disabled"]=b));const he=a(t,H),fe={...n,centerRipple:c,component:m,disabled:b,disableRipple:v,disableTouchRipple:g,focusRipple:y,tabIndex:B,focusVisible:_},me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,u={root:["root",t&&"disabled",n&&"focusVisible"]},s=(0,o.A)(u,N,i);return n&&r&&(s.root+=` ${r}`),s})(fe);return(0,T.jsxs)(X,{as:pe,className:(0,i.A)(me.root,h),ownerState:fe,onBlur:ue,onClick:R,onContextMenu:Z,onFocus:se,onKeyDown:ae,onKeyUp:ce,onMouseDown:Q,onMouseLeave:ne,onMouseUp:te,onDragLeave:ee,onTouchEnd:ie,onTouchMove:oe,onTouchStart:re,ref:he,tabIndex:b?-1:B,type:Y,...de,...U,children:[d,G?(0,T.jsx)(L,{ref:W,center:c,...z}):null]})}))},7786:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(5043);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{!function(e,t){"function"===typeof e?e(t):e&&(e.current=t)}(t,e)}))}),t)}}}]);
//# sourceMappingURL=958.63d3794c.chunk.js.map