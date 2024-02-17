"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[355],{424:(n,e,t)=>{t.d(e,{c:()=>m});var a,i=t(972),s=t(188),r=t(312);const l=t(360).cp.li(a||(a=(0,r.c)(["\n  width: 274px;\n  position: relative;\n\n  .img {\n    border-radius: 20px;\n    margin-bottom: 14px;\n  }\n  .title-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-right: 10px;\n    margin-bottom: 8px;\n  }\n  .list-car-title {\n    display: flex;\n    align-items: center;\n    font-family: Manrope;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0%;\n    text-align: left;\n    color: rgb(18, 20, 23);\n  }\n\n  .list-desc-car {\n    color: rgba(18, 20, 23, 0.5);\n    font-family: Manrope;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 18px;\n    letter-spacing: 0%;\n    text-align: left;\n    margin-bottom: 28px;\n  }\n\n  .container-desc {\n    display: flex;\n  }\n\n  .item-desc-car:not(:first-child) {\n    margin-left: 6px;\n  }\n\n  .item-desc-car:not(:last-child) {\n    margin-right: 6px;\n  }\n\n  .vector {\n    margin: 0px 0px;\n    border: 1px solid rgba(18, 20, 23, 0.1);\n  }\n\n  .button {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 44px;\n    border-radius: 12px;\n    color: white;\n    background: rgb(52, 112, 255);\n  }\n\n  .favorite-button {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n\n    border: none;\n    border-radius: 50%;\n    outline: none;\n    background: none;\n    color: #fff;\n    text-decoration: none;\n\n    overflow: hidden;\n    letter-spacing: 1;\n  }\n"])));var c=t(148),o=t(496);const d=n=>n.catalog,p=n=>n.favorite,m=n=>{let{id:e,make:t,model:a,year:r,img:m,rentalPrice:x,address:g,rentalCompany:h,mileage:u,type:f,accessories:j,buttonOnClick:b}=n;const{catalogList:w}=(0,s.Cq)(d),{favoriteList:y}=(0,s.Cq)(p),v=(0,s.Ab)(),N=g.split(",").slice(1);let k=j.reduce(((n,e)=>e.length<n.length?e:n),j[0]).split(" ").slice(0,1).join(" ");return(0,o.jsxs)(l,{children:[(C=e,y.some((n=>{let{id:e}=n;return e===C}))?(0,o.jsx)("button",{className:"favorite-button",onClick:()=>{(n=>{v((0,i.iK)(n))})(e)},type:"button",children:(0,o.jsx)(c.qq9,{size:24,color:"red"})}):(0,o.jsx)("button",{className:"favorite-button",onClick:()=>{(n=>{const[e]=w.filter((e=>{let{id:t}=e;return t===n}));v((0,i.CS)(e))})(e)},type:"button",children:(0,o.jsx)(c.qq9,{size:24,color:"rgb(52, 112, 255)"})})),(0,o.jsx)("img",{src:m||"https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png",alt:a,width:274,height:268,className:"img"}),(0,o.jsxs)("div",{className:"title-wrapper",children:[(0,o.jsxs)("ul",{className:"list-car-title",children:[(0,o.jsx)("li",{children:(0,o.jsxs)("p",{children:[t,"\xa0"]})}),(0,o.jsx)("li",{children:(0,o.jsx)("p",{children:r})})]}),(0,o.jsx)("p",{children:x})]}),(0,o.jsxs)("ul",{className:"list-desc-car",children:[(0,o.jsxs)("div",{className:"container-desc",children:[(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:N[0]})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:N[1]})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:h})})]}),(0,o.jsxs)("div",{className:"container-desc",children:[(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:f})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:a})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:u})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:k})})]})]}),(0,o.jsx)("button",{className:"button",onClick:()=>b(e),children:"Learn more"})]});var C}},355:(n,e,t)=>{t.r(e),t.d(e,{default:()=>b});var a,i=t(188),s=t(60),r=t(404),l=t(424),c=t(312),o=t(360);const d=o.cp.section(a||(a=(0,c.c)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  .list-card-auto {\n    width: 1183px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 100px;\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 50px;\n    column-gap: 29px;\n\n    @media (max-width: 1184px) {\n    width: 880px;\n  }\n\n  @media (max-width: 879px) {\n    width: 577px;\n  }\n\n  @media (max-width: 576px) {\n    width: 274px;\n  }\n  }\n  \n\n  .button-load-more {\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 150px;\n    color: rgb(52, 112, 255);\n    background-color: transparent;\n  }\n"])));var p,m=t(292);const x=o.cp.div(p||(p=(0,c.c)(["\n  background-color: rgba(255, 255, 255, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n\n"])));var g=t(496);const h=document.querySelector("#root-modal"),u=n=>{let{toggleModal:e}=n;(0,s.useEffect)((()=>{const n=n=>{"Escape"===n.code&&e(!1)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[e]);return(0,m.createPortal)((0,g.jsx)(x,{onClick:n=>{n.currentTarget===n.target&&e(!1)}}),h)};var f=t(32);const j=n=>n.catalog,b=()=>{const{catalogList:n,total:e,isLoading:t}=(0,i.Cq)(j),a=(0,i.Ab)(),[c,o]=(0,s.useState)(1),[p,m]=(0,s.useState)(""),[x,h]=(0,s.useState)(!1);(0,s.useEffect)((()=>{""!==p||c>1||a((0,r._)({page:"".concat(c)}))}),[a,c,p]),(0,s.useEffect)((()=>{""!==p&&a((0,r.E)({page:"".concat(c),query:p}))}),[a,c,p]),(0,s.useEffect)((()=>{""===p&&1!==c&&a((0,r.E)({page:"".concat(c),query:p}))}),[a,c,p]);const b=n=>{console.log(n),console.log(m)};return(0,g.jsxs)(d,{children:[(0,g.jsx)("ul",{className:"list-card-auto",children:n.length>0&&n.map((n=>{let{id:e,make:t,model:a,year:i,img:s,rentalPrice:r,address:c,rentalCompany:o,mileage:d,type:p,accessories:m}=n;return(0,g.jsx)(l.c,{id:e,make:t,model:a,year:i,img:s,rentalPrice:r,address:c,rentalCompany:o,mileage:d,type:p,accessories:m,buttonOnClick:b},e)}))}),n.length!==e&&n.length>0&&(0,g.jsx)("button",{onClick:()=>{o((n=>n+1))},className:"button-load-more",children:"Load more"}),t&&(0,g.jsx)(f.c,{}),x&&(0,g.jsx)(u,{toggleModal:h})]})}}}]);
//# sourceMappingURL=355.ac6a47ed.chunk.js.map