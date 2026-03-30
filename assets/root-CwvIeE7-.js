var n=Object.defineProperty;var t=(r,o)=>n(r,"name",{value:o,configurable:!0});import{w as s,n as a,M as i,L as l,S as d,o as c,O as m,p}from"./chunk-LFPYN7LY-BYubbi2t.js";import{j as e,T as u,B as f,r as x}from"./primer-DG2P_aa8.js";function g({children:r}){return e.jsxs("html",{lang:"en",suppressHydrationWarning:!0,children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("meta",{httpEquiv:"Cache-Control",content:"no-cache, no-store, must-revalidate"}),e.jsx("meta",{httpEquiv:"Pragma",content:"no-cache"}),e.jsx("meta",{httpEquiv:"Expires",content:"0"}),e.jsx(i,{}),e.jsx(l,{})]}),e.jsxs("body",{children:[e.jsxs("div",{id:"morsel-initial-loader",style:{position:"fixed",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",zIndex:9999,backgroundColor:"var(--bgColor-default, #0d1117)",color:"var(--fgColor-muted, #8b949e)",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",fontSize:"14px"},children:[e.jsx("div",{style:{width:"32px",height:"32px",border:"3px solid rgba(125, 133, 144, 0.3)",borderTopColor:"#58a6ff",borderRadius:"50%",animation:"morsel-loader-spin 0.8s linear infinite"}}),e.jsx("span",{children:"Loading Morsel…"})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          @keyframes morsel-loader-spin { to { transform: rotate(360deg); } }
          @media (prefers-color-scheme: light) {
            #morsel-initial-loader { background-color: #ffffff !important; color: #57606a !important; }
            #morsel-initial-loader > div:first-child { border-top-color: #0969da !important; }
          }
        `}}),e.jsx("script",{dangerouslySetInnerHTML:{__html:`
          // Remove loader once React renders content
          (function() {
            var loader = document.getElementById('morsel-initial-loader');
            if (!loader) return;
            var observer = new MutationObserver(function() {
              if (document.getElementById('morsel-app-loader')) {
                loader.remove();
                observer.disconnect();
              }
            });
            observer.observe(document.body, { childList: true, subtree: true });
            // Fallback: remove after 15s in case observer never fires
            setTimeout(function() { if (loader.parentNode) loader.remove(); }, 15000);
          })();
        `}}),r,e.jsx(d,{}),e.jsx(c,{})]})]})}t(g,"Layout");const y=s(t(function(){return e.jsx(u,{children:e.jsx(f,{children:e.jsx(m,{})})})},"App")),b=a(t(function(){const o=p();x.useEffect(()=>{o("/")},[])},"ErrorBoundary"));export{b as ErrorBoundary,g as Layout,y as default};
