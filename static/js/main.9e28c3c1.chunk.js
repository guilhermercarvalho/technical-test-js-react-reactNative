(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{127:function(e,t,c){},230:function(e,t,c){},231:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(26),s=c.n(n),i=c(13),l=(c(127),c(19)),o=c(12),d=c(239),j=c(234),b=c(240),u=c(11),h=c(238),m=c(111),x=c(233),O=c(1);function p(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1],n=Object(o.f)();return Object(O.jsxs)(h.a,{className:"d-flex",onSubmit:function(e){e.preventDefault(),n.push("/search?name=".concat(c,"&score=false&alphabetically=false&price=false"))},children:[Object(O.jsx)(m.a,{type:"text",name:"q",id:"q",placeholder:"Pesquisar",className:"mr-2",onChange:function(e){return r(e.target.value)}}),Object(O.jsx)(x.a,{type:"submit",variant:"outline-success",children:Object(O.jsx)("i",{className:"fa fa-search"})})]})}var f=function(){var e=Object(i.c)((function(e){return e.cart})).cartItems;return Object(O.jsx)(d.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(l.b,{to:"/",children:Object(O.jsxs)(d.a.Brand,{children:[Object(O.jsx)("i",{className:"fas fa-gamepad"})," Gamez Store"]})}),Object(O.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:[Object(O.jsx)(j.a,{className:"justify-content-center",children:Object(O.jsx)(o.a,{render:function(e){var t=e.history;return Object(O.jsx)(p,{history:t})}})}),Object(O.jsxs)(b.a,{className:"me-auto",children:[Object(O.jsx)(l.b,{to:"/cart",children:Object(O.jsx)(b.a.Item,{children:Object(O.jsx)("img",{src:"".concat(window.location.origin,"/cart-icon.svg"),width:"28px",height:"28px",alt:"Carrinho"})})}),Object(O.jsx)(b.a.Item,{children:e.length>0&&Object(O.jsx)("span",{className:"badge rounded-pill bg-danger text-white",children:e.length})})]})]})]})})},g=c(235),v=c(112),y=c(7),N=c.n(y),I=c(8),S=c(18),C="PRODUCT_LIST_REQUEST",w="PRODUCT_LIST_SUCCESS",E="PRODUCT_LIST_FAIL",T="PRODUCT_DETAILS_REQUEST",P="PRODUCT_DETAILS_SUCCESS",R="PRODUCT_DETAILS_FAIL",F={data:[{id:312,name:"Super Mario Odyssey",price:197.88,score:100,image:"super-mario-odyssey.png",plataform:"nintendo"},{id:201,name:"Call Of Duty Infinite Warfare",price:49.99,score:80,image:"call-of-duty-infinite-warfare.png",plataform:"playstation"},{id:102,name:"The Witcher III Wild Hunt",price:119.5,score:250,image:"the-witcher-iii-wild-hunt.png",plataform:"playstation"},{id:99,name:"Call Of Duty WWII",price:249.99,score:205,image:"call-of-duty-wwii.png",plataform:"playstation"},{id:12,name:"Mortal Kombat XL",price:69.99,score:150,image:"mortal-kombat-xl.png",plataform:"playstation"},{id:74,name:"Shards of Darkness",price:71.94,score:400,image:"shards-of-darkness.png",plataform:"playstation"},{id:31,name:"Terra M\xe9dia: Sombras de Mordor",price:79.99,score:50,image:"terra-media-sombras-de-mordor.png",plataform:"playstation"},{id:420,name:"FIFA 18",price:195.39,score:325,image:"fifa-18.png",plataform:"playstation"},{id:501,name:"Horizon Zero Dawn",price:115.8,score:290,image:"horizon-zero-dawn.png",plataform:"playstation"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,c=void 0===t?"":t,a=e.alphabetically,r=void 0===a?"false":a,n=e.score,s=void 0===n?"false":n,i=e.price,l=void 0===i?"false":i,o=e.orderBy;return function(){var e=Object(S.a)(N.a.mark((function e(t){var a,n,i;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:C});try{a=F.data,n={data:Object(I.a)(a),changed:!1},""!==c&&(i=new RegExp(c,"i"),n.data=a.filter((function(e){return i.test(e.name)})),n.changed=!0),"true"===r&&(n.data.sort((function(e,t){var c=e.name.toLowerCase(),a=t.name.toLowerCase();return c<a?"desc"===o?1:-1:c>a?"desc"===o?-1:1:0})),n.changed=!0),"true"===s&&(n.data.sort((function(e,t){return"desc"===o?e.score-t.score:t.score-e.score})),n.changed=!0),"true"===l&&(n.data.sort((function(e,t){return"desc"===o?e.price-t.price:t.price-e.price})),n.changed=!0),t({type:w,payload:n.changed?n.data:a})}catch(d){t({type:E,payload:d.message})}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function k(e){var t=e.children,c=e.variant;return Object(O.jsx)("div",{className:"d-flex justify-content-center text-lowercase alert alert-".concat(c),role:"alert",children:Object(O.jsx)("div",{children:t})})}function A(){return Object(O.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(O.jsxs)("div",{className:"mb-3 justify-content-center text-center",children:[Object(O.jsx)("i",{className:"fa fa-spinner fa-spin"})," Carregando.."]})})}function D(e){var t=e.className,c=e.error;return Object(O.jsx)("div",{className:t||"invalid-feedback text-lowercase",children:c})}function q(e,t){return t?(window.scrollTo(0,0),Object(O.jsx)(k,{variant:"danger",children:t})):e?Object(O.jsx)(A,{}):Object(O.jsx)(O.Fragment,{})}function B(e){return new URLSearchParams(e.search)}var $=function(e){var t;return(null===(t=e.replace(/-{1,}/g,"").match(/.{1,5}/g))||void 0===t?void 0:t.join("-").substr(0,9))||""},L=c(241);function z(e){var t,c=e.product;switch(c.plataform){case"playstation":t="primary";break;case"nintendo":t="danger";break;default:t="light"}return Object(O.jsx)("div",{className:"cards_landscape_wrap-2",children:Object(O.jsx)("div",{className:c.plataform,children:Object(O.jsxs)(L.a,{border:t,style:{width:"18rem"},children:[Object(O.jsx)(L.a.Img,{variant:"top",src:"".concat(window.location.origin,"/images/").concat(c.image)}),Object(O.jsxs)("div",{className:"text-center",children:["Score: ",c.score]}),Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Subtitle,{className:"text-center",children:c.name}),Object(O.jsx)(L.a.Text,{className:"text-center",children:Object(O.jsx)("div",{children:Object(O.jsxs)("strong",{children:["R$",c.price]})})})]}),Object(O.jsx)(l.b,{to:"/product/".concat(c.id),className:"stretched-link"})]})})})}function U(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.productList})),c=t.loading,r=t.products,n=t.error;return Object(a.useEffect)((function(){e(_())}),[e]),Object(O.jsx)(j.a,{children:Object(O.jsx)(g.a,{children:c||n?q(c,n):r.map((function(e){return Object(O.jsx)(v.a,{children:Object(O.jsx)(z,{product:e})},e.id)}))})})}var J=c(242);function M(){var e=Object(o.h)().id,t=Object(o.f)(),c=Object(i.c)((function(e){return e.productDetails})),r=c.loading,n=c.error,s=c.product,l=Object(i.b)();Object(a.useEffect)((function(){l(function(e){return function(){var t=Object(S.a)(N.a.mark((function t(c){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c({type:T,payload:e}),t.prev=1,a=F.data.find((function(t){return t.id===Number(e)}))){t.next=6;break}throw new Error("produto n\xe3o encontrado");case 6:c({type:P,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c({type:R,payload:t.t0.response&&t.t0.response.data.error.message?t.t0.response.data.error.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[l,e]);var d;switch(null===s||void 0===s?void 0:s.plataform){case"playstation":d="primary";break;case"nintendo":d="danger";break;default:d="light"}return Object(O.jsx)(j.a,{children:Object(O.jsxs)(g.a,{className:"justify-content-center",children:[Object(O.jsx)(v.a,{}),r||n?q(r,n):Object(O.jsxs)(v.a,{className:"text-center align-middle col-6",children:[Object(O.jsx)("div",{className:"cards_landscape_wrap-2",children:Object(O.jsx)("div",{className:s.plataform,children:Object(O.jsx)(L.a,{border:d,children:Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Img,{className:"rounded",variant:"top",src:"".concat(window.location.origin,"/images/").concat(s.image)}),Object(O.jsx)(L.a.Title,{children:s.name}),Object(O.jsx)(L.a.Text,{children:Object(O.jsxs)(J.a,{variant:"flush",children:[Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{children:"Score:"}),Object(O.jsx)(v.a,{children:s.score})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{children:"Pre\xe7o:"}),Object(O.jsxs)(v.a,{children:["R$",s.price.toFixed(2)]})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsx)(g.a,{children:Object(O.jsx)(v.a,{children:Object(O.jsx)(x.a,{type:"submit",variant:"outline-success",onClick:function(){t.push("/cart/".concat(e,"?qty=",1))},children:"Adicionar ao carrinho"})})})})]})})]})})})}),Object(O.jsx)(g.a,{children:Object(O.jsx)(v.a,{children:Object(O.jsx)("p",{children:"*Frete gr\xe1tis em compras acima de R$250.00"})})})]}),Object(O.jsx)(v.a,{})]})})}var H="CART_ADD_ITEM",V="CART_REMOVE_ITEM",W="CART_SAVE_SHIPPING_ADDRESS",X="CART_EMPTY";function Z(){var e=Object(o.h)().id,t=Object(o.f)(),c=Object(i.c)((function(e){return e.cart})).cartItems,r=B(Object(o.g)()),n=r.get("qty")?Number(r.get("qty")):1,s=Object(i.b)();Object(a.useEffect)((function(){e&&s(function(e,t){return function(){var c=Object(S.a)(N.a.mark((function c(a,r){var n;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:(n=F.data.find((function(t){return t.id===Number(e)})))?(a({type:H,payload:{product:n.id,name:n.name,price:n.price,score:n.score,image:n.image,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems))):a({type:X});case 3:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()}(e,n))}),[s,e,n]);var d=function(e){s(function(e){return function(t,c){t({type:V,payload:e}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems))}}(e))};return Object(O.jsxs)(j.a,{fluid:!0,children:[Object(O.jsx)(g.a,{children:Object(O.jsx)(v.a,{className:"col-12 text-center",children:Object(O.jsx)("h1",{children:"Carrinho"})})}),0===c.length?Object(O.jsx)(g.a,{className:"justify-content-center",children:Object(O.jsx)(v.a,{children:Object(O.jsxs)("h4",{className:"text-center",children:["Seu carrinho est\xe1 vazio :(",Object(O.jsx)("br",{}),Object(O.jsx)(l.b,{to:"/",children:"voltar \xe0s compras"})]})})}):Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{className:"text-center",children:Object(O.jsx)(L.a,{className:"justify-content-center align-middle",children:Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Title,{className:"text-center",children:"Itens"}),Object(O.jsx)(L.a.Text,{children:Object(O.jsx)(J.a,{variant:"flush",children:c.map((function(e){return Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{className:"mx-md-n5",children:[Object(O.jsx)(v.a,{className:"px-md-5",children:Object(O.jsx)("img",{src:"".concat(window.location.origin,"/images/").concat(e.image),alt:e.name,style:{maxHeight:"auto",maxWidth:"50px"}})}),Object(O.jsx)(v.a,{className:"px-md-5",children:Object(O.jsx)(l.b,{to:"/product/".concat(e.product),children:e.name})}),Object(O.jsxs)(v.a,{className:"px-md-5",children:["R$",e.price.toFixed(2)]}),Object(O.jsx)(v.a,{className:"px-md-5",children:Object(O.jsx)("button",{className:"btn btn-danger btn-sm",type:"button",onClick:function(){return d(e.product)},children:Object(O.jsx)("i",{className:"fas fa-trash"})})})]})},e.product)}))})})]})})}),Object(O.jsx)(v.a,{lg:3,xl:3,xxl:1,children:Object(O.jsx)(L.a,{children:Object(O.jsxs)(L.a.Body,{className:"text-center",children:[Object(O.jsx)(L.a.Title,{children:"Resumo dos Pedidos"}),Object(O.jsx)(L.a.Subtitle,{children:"Subtotal"}),Object(O.jsxs)(L.a.Text,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(v.a,{children:Object(O.jsxs)("h5",{children:[c.reduce((function(e,t){return e+t.qty}),0)," Item(s):"]})}),Object(O.jsx)(v.a,{children:Object(O.jsxs)("h5",{children:["R$",c.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)]})})]}),Object(O.jsx)("div",{children:Object(O.jsx)(x.a,{onClick:function(){t.push("/shipping")},variant:"success",disabled:0===c.length,children:"Realizar Checkout"})})]})]})})})]})]})}var G=c(14),Q=c(87),K=c(113),Y=c.n(K),ee=c(119),te=c(38),ce=c(45);c(230);function ae(e){var t=e.step1,c=e.step2;return Object(O.jsxs)("div",{className:"row checkout-steps text-center",children:[Object(O.jsx)("div",{className:t?"active":"",children:"Envio"}),Object(O.jsx)("div",{className:c?"active":"",children:"Pedido"})]})}var re=ce.b().shape({fullName:ce.c().required("nome completo \xe9 requerido").matches(/^[a-zA-Z\u00C0-\u00FF_]+( [a-zA-Z\u00C0-\u00FF_]+)*$/i,"deve conter apenas letras"),cep:ce.c().required("CEP \xe9 requerido").matches(/[0-9]{5}-[0-9]{3}/,"CEP inv\xe1lido").test("isCep","CEP inv\xe1lido",(function(e){return Object(Q.a)(e)})),number:ce.a().typeError("deve ser um n\xfamero").required("numero \xe9 requerido"),complement:ce.c().notRequired()});function ne(){var e,t,c,r,n,s,l,d=Object(i.c)((function(e){return e.cart})).shippingAddress,j=Object(te.d)({mode:"all",resolver:Object(ee.a)(re),defaultValues:{fullName:d.fullName,cep:null===d||void 0===d||null===(e=d.address)||void 0===e?void 0:e.cep,number:null===d||void 0===d||null===(t=d.address)||void 0===t?void 0:t.number,complement:null===d||void 0===d||null===(c=d.address)||void 0===c?void 0:c.complement}}),b=j.register,h=j.handleSubmit,m=j.getValues,x=j.formState,p=x.errors,f=x.isValid,g=Object(o.f)(),v=Object(a.useState)(""),y=Object(u.a)(v,2),N=y[0],I=y[1],S=Object(a.useState)(""),C=Object(u.a)(S,2),w=C[0],E=C[1],T=Object(a.useState)(""),P=Object(u.a)(T,2),R=P[0],F=P[1],_=Object(a.useState)(""),k=Object(u.a)(_,2),A=k[0],q=k[1],B=Object(a.useState)(m("cep")),L=Object(u.a)(B,2),z=L[0],U=L[1];Object(a.useEffect)((function(){Object(Q.a)(z)?Y()(z).then((function(e){I(e.street),E(e.neighborhood),F(e.city),q(e.state)})).catch():(I(""),E(""),F(""),q(""))}),[void 0,z]);var J=Object(i.b)();return Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)(ae,{step1:!0}),Object(O.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(O.jsxs)("div",{className:"col col-sm-6 col-md-6 col-lg-4 col-xl-3",children:[Object(O.jsx)("div",{className:"mb-3 justify-content-center text-center",children:Object(O.jsx)("h3",{children:"Endere\xe7o de Envio"})}),Object(O.jsxs)("form",{onSubmit:h((function(e){J(function(e){return function(t){t({type:W,payload:e}),localStorage.setItem("shippingAddress",JSON.stringify(e))}}({fullName:e.fullName,address:{cep:e.cep,street:N,district:w,city:R,state:A,number:e.number,complement:e.complement}})),g.push("/placeorder")})),noValidate:!0,children:[Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"inputFullName",children:"Nome Completo"}),Object(O.jsx)("input",Object(G.a)({id:"inputFullName",className:"form-control ".concat(p.fullName?"is-invalid":""),name:"fullName"},b("fullName"))),Object(O.jsx)(D,{error:null===(r=p.fullName)||void 0===r?void 0:r.message})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"inputCEP",className:"form-label",children:"CEP"}),Object(O.jsx)("input",Object(G.a)(Object(G.a)({id:"inputCEP",className:"form-control ".concat(p.cep?"is-invalid":""),placeholder:"00000-000",name:"cep",maxLength:"9",type:"tel"},b("cep")),{},{onChange:function(e){e.target.value=$(e.target.value),U(e.target.value)}})),Object(O.jsx)(D,{error:null===(n=p.cep)||void 0===n?void 0:n.message})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"inputNumber",className:"form-label",children:"N\xfamero"}),Object(O.jsx)("input",Object(G.a)({name:"number",className:"form-control ".concat(p.number?"is-invalid":""),id:"inputNumber",placeholder:"0000",type:"tel"},b("number"))),Object(O.jsx)(D,{error:null===(s=p.number)||void 0===s?void 0:s.message})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"inputComplement",className:"form-label",children:"Complemento"}),Object(O.jsx)("input",Object(G.a)({id:"inputComplement",className:"form-control ".concat(p.complement?"is-invalid":""),name:"complement"},b("complement"))),Object(O.jsx)(D,{error:null===(l=p.complement)||void 0===l?void 0:l.message})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"inputStreet",className:"form-label",children:"Rua"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"inputStreet",placeholder:"Av. Paulo VI",disabled:!0,value:N,onChange:function(e){return I(e.target.value)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"inputDistrict",className:"form-label",children:"Bairro"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"inputDistrict",placeholder:"Jardim Alvorada",disabled:!0,value:w,onChange:function(e){return E(e.target.value)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"inputCity",className:"form-label",children:"Cidade"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"inputCity",placeholder:"Franca",disabled:!0,value:R,onChange:function(e){return F(e.target.value)}})]}),Object(O.jsxs)("div",{className:"mb-3",children:[Object(O.jsx)("label",{htmlFor:"inputState",className:"form-label",children:"Estado"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"inputState",placeholder:"SP",disabled:!0,value:A,onChange:function(e){return q(e.target.value)}})]}),Object(O.jsx)("div",{className:"mb-3 d-grid gap-2 d-md-flex justify-content-center",children:Object(O.jsx)("button",{type:"submit",className:"btn btn-success",disabled:!f,children:"Continuar"})})]})]})})]})}var se="ORDER_CREATE",ie="ORDER_CREATE_RESET",le=function(e){return function(){var t=Object(S.a)(N.a.mark((function t(c,a){var r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete(r=e).cartItems,r.id=Date.now(),c({type:se,payload:e}),c({type:X}),localStorage.setItem("orders",JSON.stringify(a().order.orders)),localStorage.removeItem("cartItems");case 7:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()};function oe(e){var t=e.address,c=t.complement.length>0?", ".concat(t.complement," - "):" - ";return Object(O.jsxs)(O.Fragment,{children:[" ",t.street,", ",t.number,c," ",t.district,". ",t.city,"/",t.state,". CEP:"," ",t.cep,"."]})}function de(){var e=Object(i.c)((function(e){return e.cart})),t=Object(o.f)(),c=Object(i.c)((function(e){return e.order})),r=c.orders,n=c.success,s=function(e){return Number(e.toFixed(2))};e.itemsPrice=s(e.cartItems.reduce((function(e,t){return e+t.qty*t.price}),0)),e.shippingPrice=e.itemsPrice>250?s(0):s(10)*e.cartItems.length,e.totalPrice=e.itemsPrice+e.shippingPrice;var d=Object(i.b)();return Object(a.useEffect)((function(){n&&(t.push("/order/".concat(r[r.length-1].id)),d({type:ie}))}),[d,r,t,n]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ae,{step1:!0,step2:!0}),Object(O.jsx)(j.a,{fluid:!0,children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{lg:8,xl:9,xxl:8,children:Object(O.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(O.jsx)("li",{children:Object(O.jsx)(L.a,{children:Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Title,{children:"Entrega"}),Object(O.jsxs)(L.a.Text,{children:[Object(O.jsx)("strong",{children:"Nome Completo:"})," ",e.shippingAddress.fullName," ",Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Endere\xe7o de Envio: "}),oe(e.shippingAddress)]})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(L.a,{children:Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Title,{children:"Itens"}),Object(O.jsx)(L.a.Text,{children:Object(O.jsx)(J.a,{variant:"flush",children:e.cartItems.map((function(t){return Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{children:Object(O.jsx)("img",{src:"".concat(window.location.origin,"/images/").concat(t.image),alt:t.name,style:{maxHeight:"auto",maxWidth:"50px"}})}),Object(O.jsx)(v.a,{children:Object(O.jsx)(l.b,{to:"/product/".concat(t.product),children:t.name})}),Object(O.jsxs)(v.a,{children:["R$",(t.qty*t.price).toFixed(2)," + R$",e.shippingPrice>0?Number(10).toFixed(2):Number(0).toFixed(2)]})]})},t.product)}))})})]})})})]})}),Object(O.jsx)(v.a,{children:Object(O.jsx)(L.a,{children:Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Title,{children:"Resumo do Pedido"}),Object(O.jsx)(L.a.Text,{children:Object(O.jsxs)(J.a,{variant:"flush",children:[Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{className:"text-start",children:"Subtotal"}),Object(O.jsxs)(v.a,{className:"text-end",children:["R$",e.itemsPrice.toFixed(2)]})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{className:"text-start",children:"Frete"}),Object(O.jsx)(v.a,{className:"text-end",children:e.shippingPrice<=0?Object(O.jsxs)("p",{className:"text-danger",style:{textDecoration:"line-through"},children:["R$",(s(10)*e.cartItems.length).toFixed(2)]}):Object(O.jsxs)("p",{children:["R$",e.shippingPrice.toFixed(2)]})})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{className:"text-start",children:Object(O.jsx)("strong",{children:"Total"})}),Object(O.jsxs)(v.a,{className:"text-end",children:["R$",e.totalPrice.toFixed(2)]})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsx)("div",{className:"text-center",children:Object(O.jsx)(x.a,{variant:"success",onClick:function(){d(le(Object(G.a)(Object(G.a)({},e),{},{orderItems:e.cartItems})))},disabled:0===e.cartItems.length,children:"Finalizar Pedido"})})})]})})]})})})]})})]})}var je=c(237);function be(e){var t=e.address,c=t.complement.length>0?", ".concat(t.complement," - "):" - ";return Object(O.jsxs)(O.Fragment,{children:[" ",t.street,", ",t.number,c," ",t.district,". ",t.city,"/",t.state,". CEP:"," ",$(t.cep),"."]})}function ue(){var e,t,c=Object(o.h)().id,r=Object(i.c)((function(e){return e.order})).orders,n=Object(a.useState)(!1),s=Object(u.a)(n,2),d=s[0],b=s[1],h=function(){return b(!1)};return r.length>0&&(t=r.find((function(e){return e.id===Number(c)}))),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(j.a,{children:[Object(O.jsx)(g.a,{children:Object(O.jsx)(v.a,{className:"col-12 text-center",children:Object(O.jsxs)("h4",{children:["Pedido ",null===(e=t)||void 0===e?void 0:e.id]})})}),t?Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{lg:9,xl:8,xxl:8,children:Object(O.jsxs)("ul",{style:{listStyleType:"none"},children:[Object(O.jsx)("li",{children:Object(O.jsx)(L.a,{children:Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Title,{children:"Entrega"}),Object(O.jsxs)(L.a.Text,{children:[Object(O.jsx)("strong",{children:"Nome Completo:"})," ",t.shippingAddress.fullName," ",Object(O.jsx)("br",{}),Object(O.jsx)("strong",{children:"Endere\xe7o de Entrega:"}),be(t.shippingAddress)]})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(L.a,{children:Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Title,{children:"Itens do Pedido"}),Object(O.jsx)(L.a.Text,{children:Object(O.jsx)(J.a,{variant:"flush",children:t.orderItems.map((function(e){return Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{children:Object(O.jsx)("img",{src:"".concat(window.location.origin,"/images/").concat(e.image),alt:e.name,style:{maxHeight:"auto",maxWidth:"50px"}})}),Object(O.jsx)(v.a,{children:Object(O.jsx)(l.b,{to:"/product/".concat(e.product.id),children:e.name})}),Object(O.jsxs)(v.a,{children:["R$",(e.qty*e.price).toFixed(2)," + R$",t.shippingPrice>0?Number(10).toFixed(2):Number(0).toFixed(2)]})]})},e.product)}))})})]})})})]})}),Object(O.jsx)(v.a,{children:Object(O.jsx)(L.a,{children:Object(O.jsx)(L.a.Body,{className:"text-center",children:Object(O.jsxs)(L.a.Title,{children:["Resumo do Pedido",Object(O.jsxs)(L.a.Text,{children:[Object(O.jsxs)(J.a,{variant:"flush",children:[Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{className:"text-start",children:Object(O.jsx)("p",{children:"Subtotal"})}),Object(O.jsxs)(v.a,{className:"text-end",children:["R$",t.itemsPrice.toFixed(2)]})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{className:"text-start",children:"Frete"}),Object(O.jsx)(v.a,{className:"text-end",children:t.shippingPrice<=0?Object(O.jsxs)("p",{className:"text-danger",style:{textDecoration:"line-through"},children:["R$",(10*t.orderItems.length).toFixed(2)]}):Object(O.jsxs)("p",{children:["R$",t.shippingPrice.toFixed(2)]})})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(v.a,{className:"text-start",children:Object(O.jsx)("p",{children:Object(O.jsx)("strong",{children:"Total"})})}),Object(O.jsxs)(v.a,{className:"text-end",children:["R$",t.totalPrice.toFixed(2)]})]})})]}),Object(O.jsx)("div",{children:Object(O.jsx)(x.a,{variant:"success",onClick:function(){return b(!0)},children:"Realizar Pagamento"})})]})]})})})})]}):Object(O.jsx)(v.a,{children:Object(O.jsx)(k,{variant:"danger",children:"Pedido n\xe3o encontrado"})})]}),Object(O.jsxs)(je.a,{show:d,onHide:h,children:[Object(O.jsx)(je.a.Header,{closeButton:!0,children:Object(O.jsx)(je.a.Title,{children:"Desafio React Finalizado!"})}),Object(O.jsx)(je.a.Footer,{children:Object(O.jsx)(x.a,{variant:"secondary",onClick:h,children:"Close"})})]})]})}var he=c(236);function me(){var e=B(Object(o.g)()),t=e.get("name"),c=e.get("alphabetically"),r=e.get("score"),n=e.get("price"),s=e.get("orderBy"),l=Object(a.useState)("true"===c),d=Object(u.a)(l,2),b=d[0],h=d[1],m=Object(a.useState)("true"===r),p=Object(u.a)(m,2),f=p[0],y=p[1],N=Object(a.useState)("true"===n),I=Object(u.a)(N,2),S=I[0],C=I[1],w=Object(a.useState)("asc"),E=Object(u.a)(w,2),T=E[0],P=E[1],R=Object(i.b)(),F=Object(i.c)((function(e){return e.productList})).products;Object(a.useEffect)((function(){R(_({name:t,alphabetically:c,score:r,price:n,orderBy:s}))}),[R,t,c,r,n,s]);var A=Object(o.f)();Object(a.useEffect)((function(){f?(e.set("alphabetically",b?"true":"false"),e.set("score",f?"true":"false"),e.set("price",S?"true":"false"),e.set("orderBy",T),A.push({pathname:window.location.pathname,search:e.toString()})):(b||S)&&(e.set("score",f?"true":"false"),e.set("alphabetically",b?"true":"false"),e.set("price",S?"true":"false"),e.set("orderBy",T),A.push({pathname:window.location.pathname,search:e.toString()}))}),[b,f,S,T]);return Object(O.jsxs)(j.a,{fluid:!0,children:[Object(O.jsx)(g.a,{className:"justify-content-center",children:Object(O.jsxs)("h4",{children:[F.length," Resultado(s)"]})}),Object(O.jsxs)(g.a,{className:"justify-content-start",children:[Object(O.jsxs)(v.a,{xs:!0,sm:!0,md:!0,lg:2,children:[Object(O.jsx)("h4",{children:"Ordernar"}),Object(O.jsxs)(J.a,{variant:"flush",children:[Object(O.jsx)(J.a.Item,{children:Object(O.jsx)(x.a,{variant:"outline-secondary",onClick:function(){h(!1),y(!1),C(!1),e.set("name",""),A.push({pathname:window.location.pathname,search:"?name="})},children:"reset"})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(he.a,{children:[Object(O.jsx)(x.a,{variant:"outline-secondary",onClick:function(){C(!0),h(!1),y(!1),P("asc")},children:"+valor"}),Object(O.jsx)(x.a,{variant:"outline-secondary",onClick:function(){C(!0),h(!1),y(!1),P("desc")},children:"-valor"})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(he.a,{children:[Object(O.jsx)(x.a,{variant:"outline-secondary",onClick:function(){h(!0),y(!1),C(!1),P("asc")},children:"a-z"}),Object(O.jsx)(x.a,{variant:"outline-secondary",onClick:function(){h(!0),y(!1),C(!1),P("desc")},children:"z-a"})]})}),Object(O.jsx)(J.a.Item,{children:Object(O.jsxs)(he.a,{children:[Object(O.jsx)(x.a,{variant:"outline-secondary",onClick:function(){y(!0),h(!1),C(!1),P("asc")},children:"+score"}),Object(O.jsx)(x.a,{variant:"outline-secondary",onClick:function(){y(!0),h(!1),C(!1),P("desc")},children:"-score"})]})})]})]}),Object(O.jsxs)(v.a,{className:"col-10",children:[0===F.length&&Object(O.jsx)(k,{children:"No Product Found"}),Object(O.jsx)(g.a,{className:"justify-content-center",children:F.map((function(e){return Object(O.jsx)(z,{product:e},e.id)}))})]})]})]})}function xe(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsx)("h1",{children:"404"})}),Object(O.jsx)("div",{className:"d-flex justify-content-center",children:Object(O.jsx)("h2",{children:"P\xe1gina n\xe3o encontrada"})})]})}var Oe=function(){return Object(O.jsx)(l.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{children:Object(O.jsx)(f,{})}),Object(O.jsx)("main",{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{sensitive:!0,path:"/search",component:me}),Object(O.jsx)(o.a,{sensitive:!0,path:"/order/:id",component:ue}),Object(O.jsx)(o.a,{exact:!0,sensitive:!0,path:"/placeorder",component:de}),Object(O.jsx)(o.a,{exact:!0,sensitive:!0,path:"/shipping",component:ne}),Object(O.jsx)(o.a,{exact:!0,sensitive:!0,path:"/cart/:id?",component:Z}),Object(O.jsx)(o.a,{sensitive:!0,exact:!0,path:"/product/:id",component:M}),Object(O.jsx)(o.a,{exact:!0,path:"/",component:U}),Object(O.jsx)(o.a,{path:"*",component:xe})]})})]})})},pe=c(54),fe=c(118),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:var c=t.payload,a=e.cartItems.find((function(e){return e.product===c.product}));return a?Object(G.a)(Object(G.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===a.product?c:e}))}):Object(G.a)(Object(G.a)({},e),{},{cartItems:[].concat(Object(I.a)(e.cartItems),[c])});case V:return Object(G.a)(Object(G.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case W:return Object(G.a)(Object(G.a)({},e),{},{shippingAddress:t.payload});case X:return Object(G.a)(Object(G.a)({},e),{},{cartItems:[]});default:return e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return{orders:[].concat(Object(I.a)(e.orders),[t.payload]),success:!0};case ie:return Object(G.a)(Object(G.a)({},e),{},{success:!1});default:return e}},ye={cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{}},order:{orders:localStorage.getItem("orders")?JSON.parse(localStorage.getItem("orders")):[]}},Ne=Object(pe.b)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case w:return{loading:!1,products:t.payload};case E:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0};case P:return{loading:!1,product:t.payload};case R:return{loading:!1,error:t.payload};default:return e}},cart:ge,order:ve}),Ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.c,Se=Object(pe.d)(Ne,ye,Ie(Object(pe.a)(fe.a)));s.a.render(Object(O.jsx)(i.a,{store:Se,children:Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(Oe,{})})}),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.9e28c3c1.chunk.js.map