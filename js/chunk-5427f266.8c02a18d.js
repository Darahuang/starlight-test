(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5427f266"],{"0824":function(t,a,s){},"159b":function(t,a,s){var e=s("da84"),i=s("fdbc"),r=s("17c2"),n=s("9112");for(var c in i){var o=e[c],l=o&&o.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(d){l.forEach=r}}},"17c2":function(t,a,s){"use strict";var e=s("b727").forEach,i=s("a640"),r=s("ae40"),n=i("forEach"),c=r("forEach");t.exports=n&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},2355:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Menu"),s("AlertMessage"),s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"container"},[s("div",{staticClass:"my-5 row justify-content-center"},[0!==t.cart.total?s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover"},[t._m(0),s("tbody",t._l(t.cart.carts,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[s("img",{attrs:{src:a.product.imageUrl,width:"60px",height:"60px",alt:"",srcset:""}})]),s("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?s("div",{staticClass:"text-success"},[t._v("已套用折扣碼")]):t._e()]),s("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+t._s(a.product.unit))]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currencyFilter")(a.final_total)))]),s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteCartItem(a.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])])])})),0),0!==t.cart.total?s("tfoot",{staticClass:"bg-light"},[s("tr",[s("td",{staticClass:"text-right border-top-0",attrs:{colspan:"4"}},[t._v("總計")]),s("td",{staticClass:"h5 text-danger border-top-0"},[t._v(t._s(t.cart.final_total))])])]):t._e()])]),t._m(1),s("div",{staticClass:"input-group mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入折扣碼","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"button-addon2"},on:{click:t.addCouponCode}},[t._v("使用折扣碼")])])]),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.toCheckout}},[t._v("前往結帳")])])]):s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"goShopping text-center"},[s("h5",{staticClass:"text-primary"},[t._v("您的購物車目前是空的")]),s("p",[t._v("您可以前往產品介紹 ，以選購您想要的商品。")]),0===t.cart.total?s("button",{staticClass:"btn btn-heavy",attrs:{type:"button"},on:{click:t.toCustomerOrders}},[t._v("繼續逛逛")]):t._e()])])])]),s("footer",[s("Footer",{staticClass:"fixed-bottom"})],1)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th"),s("th",[t._v("商品名稱")]),s("th",[t._v("數量")]),s("th",[t._v("單價")]),s("th")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-info my-3"},[s("i",{staticClass:"fa fa-star mr-2",attrs:{"aria-hidden":"true"}}),s("span",[t._v(" 輸入折扣碼「 "),s("span",{staticClass:"text-danger"},[t._v("anniversary")]),t._v("」， 一起慶祝周年慶吧！ ")])])}],r=(s("99af"),s("fb62")),n=s("56a6"),c=s("fd2d"),o={components:{Menu:r["a"],AlertMessage:n["a"],Footer:c["a"]},data:function(){return{cart:{},isLoading:!1,coupon_code:"",cartNumber:""}},methods:{getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart");t.isLoading=!0,t.axios.get(a).then((function(a){t.cart=a.data.data,t.cartNumber=a.data.data.carts.length,t.isLoading=!1,t.$bus.$emit("cart",t.cartNumber)}))},deleteCartItem:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart/").concat(t);a.axios.delete(s).then((function(t){a.getCart(),a.$bus.$emit("message:push",t.data.message,"warning")}))},addCouponCode:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/coupon"),s={code:t.coupon_code};t.axios.post(a,{data:s}).then((function(a){t.coupon_code="",t.getCart(),t.$bus.$emit("message:push",a.data.message,"warning")}))},toCheckout:function(){var t=this;t.$router.push("/checkout")},toCustomerOrders:function(){var t=this;t.$router.push("/customer_orders")}},created:function(){var t=this;t.$bus.$on("getCart",(function(){t.getCart()})),t.getCart()}},l=o,d=s("2877"),u=Object(d["a"])(l,e,i,!1,null,null,null);a["default"]=u.exports},4160:function(t,a,s){"use strict";var e=s("23e7"),i=s("17c2");e({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"47ae":function(t,a,s){},"56a6":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,(function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v(" "+t._s(a.message)+" "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0)},i=[],r=(s("4160"),s("a434"),s("159b"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s}),this.removeMessageWithTiming(s)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout((function(){a.messages.forEach((function(s,e){s.timestamp===t&&a.messages.splice(e,1)}))}),3e3)}},created:function(){var t=this;t.$bus.$on("message:push",(function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,s)}))}}),n=r,c=(s("dac4"),s("2877")),o=Object(c["a"])(n,e,i,!1,null,"2bfd03c6",null);a["a"]=o.exports},"7fbc":function(t,a,s){},8418:function(t,a,s){"use strict";var e=s("c04e"),i=s("9bf2"),r=s("5c6c");t.exports=function(t,a,s){var n=e(a);n in t?i.f(t,n,r(0,s)):t[n]=s}},8650:function(t,a,s){"use strict";var e=s("47ae"),i=s.n(e);i.a},"99af":function(t,a,s){"use strict";var e=s("23e7"),i=s("d039"),r=s("e8b5"),n=s("861d"),c=s("7b0b"),o=s("50c4"),l=s("8418"),d=s("65f0"),u=s("1dde"),f=s("b622"),v=s("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",b=v>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),C=u("concat"),m=function(t){if(!n(t))return!1;var a=t[h];return void 0!==a?!!a:r(t)},_=!b||!C;e({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,e,i,r,n=c(this),u=d(n,0),f=0;for(a=-1,e=arguments.length;a<e;a++)if(r=-1===a?n:arguments[a],m(r)){if(i=o(r.length),f+i>p)throw TypeError(g);for(s=0;s<i;s++,f++)s in r&&l(u,f,r[s])}else{if(f>=p)throw TypeError(g);l(u,f++,r)}return u.length=f,u}})},a434:function(t,a,s){"use strict";var e=s("23e7"),i=s("23cb"),r=s("a691"),n=s("50c4"),c=s("7b0b"),o=s("65f0"),l=s("8418"),d=s("1dde"),u=s("ae40"),f=d("splice"),v=u("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,p=Math.min,g=9007199254740991,b="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,a){var s,e,d,u,f,v,C=c(this),m=n(C.length),_=i(t,m),x=arguments.length;if(0===x?s=e=0:1===x?(s=0,e=m-_):(s=x-2,e=p(h(r(a),0),m-_)),m+s-e>g)throw TypeError(b);for(d=o(C,e),u=0;u<e;u++)f=_+u,f in C&&l(d,u,C[f]);if(d.length=e,s<e){for(u=_;u<m-e;u++)f=u+e,v=u+s,f in C?C[v]=C[f]:delete C[v];for(u=m;u>m-e+s;u--)delete C[u-1]}else if(s>e)for(u=m-e;u>_;u--)f=u+e-1,v=u+s-1,f in C?C[v]=C[f]:delete C[v];for(u=0;u<s;u++)C[u+_]=arguments[u+2];return C.length=m-e+s,d}})},a640:function(t,a,s){"use strict";var e=s("d039");t.exports=function(t,a){var s=[][t];return!!s&&e((function(){s.call(null,a||function(){throw 1},1)}))}},dac4:function(t,a,s){"use strict";var e=s("7fbc"),i=s.n(e);i.a},db6f:function(t,a,s){"use strict";var e=s("0824"),i=s.n(e);i.a},fb62:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sticky-top"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"navbar-brand box-shadow bg-transparent",attrs:{to:"/"}},[t._v("Starlight")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[s("ul",{staticClass:"navbar-nav align-items-center w-100"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/news"}},[t._v("最新消息")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/customer_orders"}},[t._v("餐點介紹")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/customize"}},[t._v("訂製蛋糕")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/check_orders"}},[t._v("查看訂單")])],1),s("li",{staticClass:"nav-item ml-lg-auto"},[s("router-link",{staticClass:"nav-link text-secondary h5",attrs:{to:"/login"}},[s("i",{staticClass:"fas fa-cog"})])],1),s("li",{staticClass:"nav-item"},[s("div",{staticClass:"dropdown"},[s("a",{staticClass:"nav-link text-secondary h5",attrs:{href:"#",role:"button",id:"fav","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-heart"}),t.favList?s("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.favList.length))]):s("span",{staticClass:"badge badge-danger"},[t._v("0")])]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"fav"}},[t.favList.length?s("div",{staticClass:"table-responsive p-3 font-size"},[s("h6",[t._v("收藏清單")]),s("table",{staticClass:"table table-hover width "},[s("tbody",t._l(t.favList,(function(a,e){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle",attrs:{width:"20%"}},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteFavItem(a,e)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),s("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.title)+" ")]),s("td"),s("td",[s("a",{staticClass:"d-block",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.addFavtoCart(a.id,t.qty=1)}}},[s("i",{staticClass:"fas fa-shopping-cart fa-2x"})])])])})),0)])]):s("div",{staticClass:"width p-3"},[s("div",{staticClass:"text-center"},[s("h6",{staticClass:"text-primary"},[t._v("您的收藏清單目前是空的")]),s("router-link",{staticClass:"btn btn-heavy btn-sm",attrs:{to:"customer_orders"}},[t._v("繼續逛逛")])],1)])])])]),s("li",{staticClass:"nav-item"},[s("div",{staticClass:"dropdown"},[s("a",{staticClass:"nav-link text-secondary h5",attrs:{href:"#",role:"button",id:"cart","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t.number?s("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.number))]):s("span",{staticClass:"badge badge-danger"},[t._v("0")])]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"cart"}},[0!==t.cart.total?s("div",{staticClass:"table-responsive p-3 font-size"},[s("h6",[t._v("選購商品")]),s("table",{staticClass:"table table-hover width "},[s("tbody",t._l(t.cart.carts,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?s("div",{staticClass:"text-success"},[t._v("已套用折扣碼")]):t._e()]),s("td",{staticClass:"align-middle",attrs:{width:"20%"}},[t._v(t._s(a.qty)+t._s(a.product.unit))]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currencyFilter")(a.final_total)))]),s("td"),s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteCartItem(a.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])])])})),0),0!==t.cart.total?s("tfoot",{staticClass:"bg-light"},[s("tr",[s("td",{staticClass:"text-right border-top-0",attrs:{colspan:"4"}},[t._v("總計")]),s("td",{staticClass:"h6 text-danger border-top-0"},[t._v(t._s(t._f("currencyFilter")(t.cart.final_total)))])])]):t._e()]),s("router-link",{staticClass:"btn btn-block btn-primary",attrs:{to:"checkout"}},[t._v("結帳去")])],1):s("div",{staticClass:"width p-3"},[s("div",{staticClass:"text-center"},[s("h6",{staticClass:"text-primary"},[t._v("您的購物車目前是空的")]),s("router-link",{staticClass:"btn btn-heavy btn-sm",attrs:{to:"customer_orders"}},[t._v("繼續逛逛")])],1)])])])])])])],1)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],r=(s("99af"),s("a434"),{props:["data"],data:function(){return{number:"",cart:{},favnumber:"",favList:this.data}},methods:{updateCart:function(t){this.number=t},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart");t.axios.get(a).then((function(a){t.cart=a.data.data,t.number=a.data.data.carts.length}))},deleteCartItem:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart/").concat(t);a.axios.delete(s).then((function(t){a.getCart(),a.$bus.$emit("message:push",t.data.message,"warning")}))},deleteFavItem:function(t,a){var s=this;t.favItem=!1,s.favList.splice(a,1),console.log(this.favList.length),this.$emit("deleteFav",this.favList)},addFavtoCart:function(t,a){console.log(t,a),this.$emit("addFavtoCart",t,a)}},created:function(){var t=this;t.$bus.$on("cart",(function(a){t.updateCart(a),t.getCart()})),t.getCart()}}),n=r,c=(s("8650"),s("2877")),o=Object(c["a"])(n,e,i,!1,null,"17a401d4",null);a["a"]=o.exports},fd2d:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"bg-white mt-5 footer-height"},[e("div",{staticClass:"text-center text-secondary "},[e("img",{staticClass:"img-fluid",staticStyle:{width:"150px",height:"150px"},attrs:{src:s("fef8"),alt:"",srcset:""}}),e("p",[t._v("© 2020 Starlight* All Rights Reserved")]),e("div",[e("ul",{staticClass:"list-unstyled d-flex justify-content-center"},[e("li",{staticClass:"mr-2"},[e("a",{staticClass:"text-accent",attrs:{href:"# "}},[e("i",{staticClass:"fab fa-facebook-square fa-2x"})])]),e("li",{staticClass:"mr-2"},[e("a",{staticClass:"text-accent",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram instagram fa-2x"})])]),e("li",{staticClass:"mr-2"},[e("a",{staticClass:"text-success",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-line fa-2x"})])])])])]),e("div",{staticClass:"bg-slight mt-3 py-4"},[e("div",{staticClass:"text-center"},[e("span",[t._v("資料、圖片來源皆來自網路，僅用來做為學習用途。")])])])])])}],r=(s("db6f"),s("2877")),n={},c=Object(r["a"])(n,e,i,!1,null,"3925e17b",null);a["a"]=c.exports},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fef8:function(t,a,s){t.exports=s.p+"img/logo.f20dc4a5.svg"}}]);
//# sourceMappingURL=chunk-5427f266.8c02a18d.js.map