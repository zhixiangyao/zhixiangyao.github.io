import{u as d,A as k,v as m,b as _,y as C,N as E,p as D,a4 as B,q as L,a5 as J,a6 as $,F as u,X as v,e as T,f as O,_ as V,c as b,r as z,s as H,d as X,a7 as G,K as y,a8 as I,H as N,a9 as S,aa as q,ab as U,ac as K,ad as W,ae as Z,af as M,ag as Q,ah as Y,ai as ee,aj as te,ak as ne,al as oe,W as ae}from"./chunks/framework.c224a9d2.js";import{t as R}from"./chunks/theme.1b5f1523.js";function A(t,e){return new Promise((o,s)=>{let n;e==="css"?(n=document.createElement("link"),n.rel="stylesheet",n.href=t):e==="js"&&(n=document.createElement("script"),n.src=t),n&&(n.onload=()=>o(t),n.onerror=()=>s(t),document.head.appendChild(n))})}const se=d({name:"GoogleTag",__name:"GoogleTag",setup(t){const e=(...s)=>{window.dataLayer.push(s)},o=()=>{window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-1E9XR885EH")};return k(()=>{A("https://www.googletagmanager.com/gtag/js?id=G-1E9XR885EH","js"),o()}),()=>{}}}),ie=d({__name:"Layout",setup(t){const{Layout:e}=R;return(o,s)=>(m(),_(D,null,[C(se),C(E(e))],64))}}),re=t=>(T("data-v-813e07a2"),t=t(),O(),t),ce={class:"filter-jd-cookie"},le=re(()=>u("div",null,"Original Cookie:",-1)),ue=d({name:"FilterJDCookie",__name:"FilterJDCookie",setup(t){const e=B({cookie:"",filteredJDCookie:"",msg:""}),o=n=>{var f,h;const a=n,r=((f=a.match(/pt_pin=.+?;/))==null?void 0:f[0])??"",c=((h=a.match(/pt_key=.+?;/))==null?void 0:h[0])??"";return r+c},s=()=>{const n=o(e.cookie);n?(e.filteredJDCookie=encodeURI(n),window.copy&&window.copy(e.filteredJDCookie),e.msg="过滤成功"):(e.filteredJDCookie="",e.msg="过滤失败")};return L(()=>e.cookie,n=>{n&&s()}),(n,a)=>(m(),_("div",ce,[le,J(u("textarea",{"onUpdate:modelValue":a[0]||(a[0]=r=>e.cookie=r),placeholder:"请把 cookie 黏贴到这里",cols:"30",rows:"10"},null,512),[[$,e.cookie]]),u("div",null,"Filtered JD Cookie: "+v(e.msg?` (${e.msg})`:"")+":",1),u("code",null,v(e.filteredJDCookie),1)]))}});const pe=V(ue,[["__scopeId","data-v-813e07a2"]]),de=["href"],fe=d({__name:"BlogList",setup(t){const{theme:e}=b(),o=z(()=>{const s=[],n=Object.values(e.value.sidebar);for(const a of n)for(const{items:r}of a)for(const c of r)s.push(c);return s});return(s,n)=>(m(!0),_(D,null,H(o.value,a=>(m(),_("ul",{key:a.link},[u("li",null,[u("a",{href:a.link},v(a.text),9,de)])]))),128))}}),ge=d({name:"Rain",__name:"Rain",setup(t){const e=()=>{const n=X();let a;const r="https://raw.githubusercontent.com/zhixiangyao/CDN/master/images",c={desktopDark:r+"/anime/fate/999332.png",desktopLight:r+"/anime/fate/688669.png",mobileDark:r+"/anime/twitter/3.jpeg",mobileLight:r+"/anime/twitter/2.jpeg"},w="https://yaozhixiang.top/assets/js/RaindropFX.js",f=()=>{if(!n.value||!a)return;const i=n.value.getBoundingClientRect();a.resize(i.width,i.height)},h=()=>{if(!a)return;const i=document.body.getBoundingClientRect();o.value?i.height>i.width?a.setBackground(c.mobileDark):a.setBackground(c.desktopDark):i.height>i.width?a.setBackground(c.mobileLight):a.setBackground(c.desktopLight)},F=i=>{Object.defineProperty(window,"RaindropFX",{value:null,writable:!0,configurable:!0});const l=document.querySelector(`[src="${i}"]`);l==null||l.remove()},x=async()=>{try{const i=document.body.getBoundingClientRect(),l=n.value.getBoundingClientRect();n.value.width=l.width,n.value.height=l.height;let g;o.value?i.height>i.width?g=c.mobileDark:g=c.desktopDark:i.height>i.width?g=c.mobileLight:g=c.desktopLight;const P={canvas:n.value,background:g};a=new window.RaindropFX(P),a.start()}catch(i){console.error(i)}};return k(()=>{F(w),A(w,"js").then(()=>{x()})}),L(o,()=>{h()}),k(()=>{window.addEventListener("resize",f)}),G(()=>{window.removeEventListener("resize",f)}),{canvasRef:n}},{isDark:o}=b(),{canvasRef:s}=e();return(n,a)=>(m(),_("canvas",{ref:r=>s.value=r,id:"rain"},null,512))}});const me={...R,enhanceApp(t){R.enhanceApp(t),t.app.component("FilterJDCookie",pe),t.app.component("BlogList",fe),t.app.component("Rain",ge)},Layout:ie};function j(t){if(t.extends){const e=j(t.extends);return{...e,...t,async enhanceApp(o){e.enhanceApp&&await e.enhanceApp(o),t.enhanceApp&&await t.enhanceApp(o)}}}return t}const p=j(me),_e=d({name:"VitePressApp",setup(){const{site:t}=b();return k(()=>{N(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),S(),q(),U(),p.setup&&p.setup(),()=>K(p.Layout)}});async function he(){const t=we(),e=ke();e.provide(W,t);const o=Z(t.route);return e.provide(M,o),e.component("Content",Q),e.component("ClientOnly",Y),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:e,router:t,siteData:ee}),{app:e,router:t,data:o}}function ke(){return te(_e)}function we(){let t=y,e;return ne(o=>{let s=oe(o);return s?(t&&(e=s),(t||e===s)&&(s=s.replace(/\.js$/,".lean.js")),y&&(t=!1),ae(()=>import(s),[])):null},p.NotFound)}y&&he().then(({app:t,router:e,data:o})=>{e.go().then(()=>{I(e.route,o.site),t.mount("#app")})});export{he as createApp};