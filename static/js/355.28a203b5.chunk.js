"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[355],{424:(n,e,i)=>{i.d(e,{c:()=>h,g:()=>x});var t,s=i(972),l=i(188),r=i(312);const c=i(360).cp.li(t||(t=(0,r.c)(["\n  width: 274px;\n  position: relative;\n\n  .img {\n    border-radius: 20px;\n    margin-bottom: 14px;\n  }\n  .title-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-right: 10px;\n    margin-bottom: 8px;\n  }\n  .list-car-title {\n    display: flex;\n    align-items: center;\n    font-family: Manrope;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0%;\n    text-align: left;\n    color: rgb(18, 20, 23);\n  }\n\n  .list-desc-car {\n    color: rgba(18, 20, 23, 0.5);\n    font-family: Manrope;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 18px;\n    letter-spacing: 0%;\n    text-align: left;\n    margin-bottom: 28px;\n  }\n\n  .container-desc {\n    display: flex;\n  }\n\n  .item-desc-car:not(:first-child) {\n    margin-left: 6px;\n  }\n\n  .item-desc-car:not(:last-child) {\n    margin-right: 6px;\n  }\n\n  .vector {\n    margin: 0px 0px;\n    border: 1px solid rgba(18, 20, 23, 0.1);\n  }\n\n  .button {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 44px;\n    border-radius: 12px;\n    color: white;\n    background: rgb(52, 112, 255);\n  }\n\n  .favorite-button {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 32px;\n    height: 32px;\n\n    border: none;\n    border-radius: 50%;\n    outline: none;\n    background: none;\n    color: #fff;\n    text-decoration: none;\n\n    overflow: hidden;\n    letter-spacing: 1;\n  }\n"])));var a=i(148),o=i(496);const d=n=>n.catalog,p=n=>n.favorite,x="https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png",h=n=>{let{id:e,make:i,model:t,year:r,img:h,rentalPrice:m,address:g,rentalCompany:j,mileage:u,type:f,accessories:b,buttonOnClick:y}=n;const{catalogList:w}=(0,l.Cq)(d),{favoriteList:v}=(0,l.Cq)(p),k=(0,l.Ab)(),N=g.split(",").slice(1);let C=b.reduce(((n,e)=>e.length<n.length?e:n),b[0]).split(" ").slice(0,1).join(" ");return(0,o.jsxs)(c,{children:[(q=e,v.some((n=>{let{id:e}=n;return e===q}))?(0,o.jsx)("button",{className:"favorite-button",onClick:()=>{(n=>{k((0,s.iK)(n))})(e)},type:"button",children:(0,o.jsx)(a.qq9,{size:24,color:"red"})}):(0,o.jsx)("button",{className:"favorite-button",onClick:()=>{(n=>{const[e]=w.filter((e=>{let{id:i}=e;return i===n}));k((0,s.CS)(e))})(e)},type:"button",children:(0,o.jsx)(a.qq9,{size:24,color:"rgb(52, 112, 255)"})})),(0,o.jsx)("img",{src:h||x,alt:t,width:274,height:268,className:"img"}),(0,o.jsxs)("div",{className:"title-wrapper",children:[(0,o.jsxs)("ul",{className:"list-car-title",children:[(0,o.jsx)("li",{children:(0,o.jsxs)("p",{children:[i,"\xa0"]})}),(0,o.jsx)("li",{children:(0,o.jsx)("p",{children:r})})]}),(0,o.jsx)("p",{children:m})]}),(0,o.jsxs)("ul",{className:"list-desc-car",children:[(0,o.jsxs)("div",{className:"container-desc",children:[(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:N[0]})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:N[1]})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:j})})]}),(0,o.jsxs)("div",{className:"container-desc",children:[(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:f})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:t})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:u})}),(0,o.jsx)("span",{className:"vector"}),(0,o.jsx)("li",{className:"item-desc-car",children:(0,o.jsx)("p",{children:C})})]})]}),(0,o.jsx)("button",{className:"button",onClick:()=>y(e),children:"Learn more"})]});var q}},355:(n,e,i)=>{i.r(e),i.d(e,{default:()=>b});var t,s=i(188),l=i(60),r=i(404),c=i(424),a=i(312),o=i(360);const d=o.cp.section(t||(t=(0,a.c)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  .list-card-auto {\n    width: 1183px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 100px;\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 50px;\n    column-gap: 29px;\n\n    @media (max-width: 1184px) {\n    width: 880px;\n  }\n\n  @media (max-width: 879px) {\n    width: 577px;\n  }\n\n  @media (max-width: 576px) {\n    width: 274px;\n  }\n  }\n  \n\n  .button-load-more {\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 150px;\n    color: rgb(52, 112, 255);\n    background-color: transparent;\n  }\n"])));var p,x=i(292);const h=o.cp.div(p||(p=(0,a.c)(["\n  background-color: rgba(18, 20, 23, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n\n"])));var m=i(496);const g=document.querySelector("#root-modal"),j=n=>{let{item:e,toggleModal:i}=n;(0,l.useEffect)((()=>{const n=n=>{"Escape"===n.code&&i(!1)};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}}),[i]);const t=e.address.split(",").slice(1);return(0,x.createPortal)((0,m.jsx)(h,{onClick:n=>{n.currentTarget===n.target&&i(!1)},children:(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:e.img?e.img:c.g,alt:e.make}),(0,m.jsxs)("h3",{children:[e.make,"\xa0",e.model,",\xa0",e.year]}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:t[0]})}),(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:t[1]})}),(0,m.jsx)("li",{children:(0,m.jsxs)("p",{children:["id:\xa0",e.id]})}),(0,m.jsx)("li",{children:(0,m.jsxs)("p",{children:["Year:\xa0",e.year]})}),(0,m.jsx)("li",{children:(0,m.jsxs)("p",{children:["Type:\xa0",e.type]})}),(0,m.jsx)("li",{children:(0,m.jsxs)("p",{children:["Fuel Consumption:\xa0",e.fuelConsumption]})}),(0,m.jsx)("li",{children:(0,m.jsxs)("p",{children:["Engine Size:\xa0",e.engineSize]})})]}),(0,m.jsx)("p",{children:e.description}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("p",{children:"Accessories and functionalities:"}),(0,m.jsx)("li",{children:e.accessories.map(((n,e)=>(0,m.jsx)("p",{children:n},e)))}),(0,m.jsx)("li",{children:e.functionalities.map(((n,e)=>(0,m.jsx)("p",{children:n},e+1)))})]}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("p",{children:"Rental Conditions:"}),(0,m.jsx)("li",{children:(0,m.jsxs)("p",{children:["Minimum age:\xa0",(0,m.jsx)("span",{children:"25"})]})}),(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:"Valid driver\u2019s license"})}),(0,m.jsx)("li",{children:(0,m.jsx)("p",{children:"Security deposite required"})}),(0,m.jsx)("li",{children:(0,m.jsxs)("p",{children:["Mileage:\xa0",(0,m.jsx)("span",{children:e.mileage})]})}),(0,m.jsx)("li",{children:(0,m.jsxs)("p",{children:["Price:\xa0",(0,m.jsx)("span",{children:e.rentalPrice})]})})]})]})}),g)};var u=i(32);const f=n=>n.catalog,b=()=>{const{catalogList:n,total:e,isLoading:i}=(0,s.Cq)(f),t=(0,s.Ab)(),[a,o]=(0,l.useState)(1),[p,x]=(0,l.useState)(""),[h,g]=(0,l.useState)(!1),[b,y]=(0,l.useState)(null);(0,l.useEffect)((()=>{""!==p||a>1||t((0,r._)({page:"".concat(a)}))}),[t,a,p]),(0,l.useEffect)((()=>{""!==p&&t((0,r.E)({page:"".concat(a),query:p}))}),[t,a,p]),(0,l.useEffect)((()=>{""===p&&1!==a&&t((0,r.E)({page:"".concat(a),query:p}))}),[t,a,p]);const w=e=>{const[i]=n.filter((n=>n.id===e));y(i),g(!0),console.log(x)};return(0,m.jsxs)(d,{children:[(0,m.jsx)("ul",{className:"list-card-auto",children:n.length>0&&n.map((n=>{let{id:e,make:i,model:t,year:s,img:l,rentalPrice:r,address:a,rentalCompany:o,mileage:d,type:p,accessories:x}=n;return(0,m.jsx)(c.c,{id:e,make:i,model:t,year:s,img:l,rentalPrice:r,address:a,rentalCompany:o,mileage:d,type:p,accessories:x,buttonOnClick:w},e)}))}),n.length!==e&&n.length>0&&(0,m.jsx)("button",{onClick:()=>{o((n=>n+1))},className:"button-load-more",children:"Load more"}),i&&(0,m.jsx)(u.c,{}),h&&b&&(0,m.jsx)(j,{item:b,toggleModal:g})]})}}}]);
//# sourceMappingURL=355.28a203b5.chunk.js.map