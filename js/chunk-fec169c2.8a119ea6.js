(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fec169c2"],{"0824":function(t,a,s){},1102:function(t,a,s){"use strict";var e=s("6f4a"),i=s.n(e);i.a},4682:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Menu"),s("AlertMessage"),t._m(0),s("footer",[s("Footer",{staticClass:"fixed-bottom"})],1)],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"container"},[s("h2",{staticClass:"text-center text-primary py-3 font-weight-bolder"},[t._v("訂製蛋糕")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h4",{staticClass:"text-accent mb-4"},[s("i",{staticClass:"far fa-clipboard mr-2"}),t._v("訂製流程 ")]),s("h6",{staticClass:"text-primary font-weight-bold"},[s("i",{staticClass:"fas fa-chevron-right mr-2"}),t._v("Step1 提供想製作的圖片及報價 ")]),s("p",{staticClass:"mb-4"},[t._v(" 選擇您要製作的客製化蛋糕的圖片以及食用的人數，傳給我們之後，我們才能根據您的需求進行說明及報價！ ")]),s("h6",{staticClass:"text-primary font-weight-bold"},[s("i",{staticClass:"fas fa-chevron-right mr-2"}),t._v("Step2 確認製作蛋糕時間並付款 ")]),s("p",{staticClass:"mb-4"},[t._v(" 當您了解價格之後，我們會讓您知道蛋糕的製作時間，經過完整的溝通確認，只要您付款就能預訂蛋糕成功！ ")]),s("h6",{staticClass:"text-primary font-weight-bold"},[s("i",{staticClass:"fas fa-chevron-right mr-2"}),t._v("Step3 領取的您客製化造型蛋糕 ")]),s("p",{staticClass:"mb-4"},[t._v(" 當您完成以上的步驟，我們將會在您指定的時間完成，您可以選擇宅配or自取蛋糕的方式，即可領取您的專屬蛋糕！ ")]),s("h4",{staticClass:"text-danger mb-4"},[s("i",{staticClass:"fas fa-exclamation-circle mr-2"}),t._v("注意事項 ")]),s("p",[t._v("「訂製蛋糕」目前僅供６吋。")]),s("p",[t._v("「訂製蛋糕」工作天數約7天(不含下標當日、週六日以及國定假日)。")])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"bg-cover bg-height",staticStyle:{"background-image":"url(https://images.pexels.com/photos/3983580/pexels-photo-3983580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)"}})])])])}],r=s("fb62"),n=s("fd2d"),l={components:{Menu:r["a"],Footer:n["a"]}},c=l,o=(s("1102"),s("2877")),d=Object(o["a"])(c,e,i,!1,null,"7e4b08d3",null);a["default"]=d.exports},"47ae":function(t,a,s){},"6f4a":function(t,a,s){},8418:function(t,a,s){"use strict";var e=s("c04e"),i=s("9bf2"),r=s("5c6c");t.exports=function(t,a,s){var n=e(a);n in t?i.f(t,n,r(0,s)):t[n]=s}},8650:function(t,a,s){"use strict";var e=s("47ae"),i=s.n(e);i.a},"99af":function(t,a,s){"use strict";var e=s("23e7"),i=s("d039"),r=s("e8b5"),n=s("861d"),l=s("7b0b"),c=s("50c4"),o=s("8418"),d=s("65f0"),v=s("1dde"),f=s("b622"),u=s("2d00"),h=f("isConcatSpreadable"),b=9007199254740991,C="Maximum allowed index exceeded",p=u>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=v("concat"),m=function(t){if(!n(t))return!1;var a=t[h];return void 0!==a?!!a:r(t)},_=!p||!g;e({target:"Array",proto:!0,forced:_},{concat:function(t){var a,s,e,i,r,n=l(this),v=d(n,0),f=0;for(a=-1,e=arguments.length;a<e;a++)if(r=-1===a?n:arguments[a],m(r)){if(i=c(r.length),f+i>b)throw TypeError(C);for(s=0;s<i;s++,f++)s in r&&o(v,f,r[s])}else{if(f>=b)throw TypeError(C);o(v,f++,r)}return v.length=f,v}})},a434:function(t,a,s){"use strict";var e=s("23e7"),i=s("23cb"),r=s("a691"),n=s("50c4"),l=s("7b0b"),c=s("65f0"),o=s("8418"),d=s("1dde"),v=s("ae40"),f=d("splice"),u=v("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,b=Math.min,C=9007199254740991,p="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!f||!u},{splice:function(t,a){var s,e,d,v,f,u,g=l(this),m=n(g.length),_=i(t,m),x=arguments.length;if(0===x?s=e=0:1===x?(s=0,e=m-_):(s=x-2,e=b(h(r(a),0),m-_)),m+s-e>C)throw TypeError(p);for(d=c(g,e),v=0;v<e;v++)f=_+v,f in g&&o(d,v,g[f]);if(d.length=e,s<e){for(v=_;v<m-e;v++)f=v+e,u=v+s,f in g?g[u]=g[f]:delete g[u];for(v=m;v>m-e+s;v--)delete g[v-1]}else if(s>e)for(v=m-e;v>_;v--)f=v+e-1,u=v+s-1,f in g?g[u]=g[f]:delete g[u];for(v=0;v<s;v++)g[v+_]=arguments[v+2];return g.length=m-e+s,d}})},db6f:function(t,a,s){"use strict";var e=s("0824"),i=s.n(e);i.a},fb62:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"sticky-top"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"navbar-brand box-shadow bg-transparent",attrs:{to:"/"}},[t._v("Starlight")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[s("ul",{staticClass:"navbar-nav align-items-center w-100"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v(" 關於我們 "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/news"}},[t._v("最新消息")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/customer_orders"}},[t._v("餐點介紹")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/customize"}},[t._v("訂製蛋糕")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/check_orders"}},[t._v("查看訂單")])],1),s("li",{staticClass:"nav-item ml-lg-auto"},[s("router-link",{staticClass:"nav-link text-secondary h5",attrs:{to:"/login"}},[s("i",{staticClass:"fas fa-cog"})])],1),s("li",{staticClass:"nav-item"},[s("div",{staticClass:"dropdown"},[s("a",{staticClass:"nav-link text-secondary h5",attrs:{href:"#",role:"button",id:"fav","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-heart"}),t.favList?s("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.favList.length))]):s("span",{staticClass:"badge badge-danger"},[t._v("0")])]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"fav"}},[t.favList.length?s("div",{staticClass:"table-responsive p-3 font-size"},[s("h6",[t._v("收藏清單")]),s("table",{staticClass:"table table-hover width "},[s("tbody",t._l(t.favList,(function(a,e){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle",attrs:{width:"20%"}},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteFavItem(a,e)}}},[s("i",{staticClass:"far fa-trash-alt"})])]),s("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.title)+" ")]),s("td"),s("td",[s("a",{staticClass:"d-block",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.addFavtoCart(a.id,t.qty=1)}}},[s("i",{staticClass:"fas fa-shopping-cart fa-2x"})])])])})),0)])]):s("div",{staticClass:"width p-3"},[s("div",{staticClass:"text-center"},[s("h6",{staticClass:"text-primary"},[t._v("您的收藏清單目前是空的")]),s("router-link",{staticClass:"btn btn-heavy btn-sm",attrs:{to:"customer_orders"}},[t._v("繼續逛逛")])],1)])])])]),s("li",{staticClass:"nav-item"},[s("div",{staticClass:"dropdown"},[s("a",{staticClass:"nav-link text-secondary h5",attrs:{href:"#",role:"button",id:"cart","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t.number?s("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.number))]):s("span",{staticClass:"badge badge-danger"},[t._v("0")])]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"cart"}},[0!==t.cart.total?s("div",{staticClass:"table-responsive p-3 font-size"},[s("h6",[t._v("選購商品")]),s("table",{staticClass:"table table-hover width "},[s("tbody",t._l(t.cart.carts,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[t._v(" "+t._s(a.product.title)+" "),a.coupon?s("div",{staticClass:"text-success"},[t._v("已套用折扣碼")]):t._e()]),s("td",{staticClass:"align-middle",attrs:{width:"20%"}},[t._v(t._s(a.qty)+t._s(a.product.unit))]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currencyFilter")(a.final_total)))]),s("td"),s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(s){return t.deleteCartItem(a.id)}}},[s("i",{staticClass:"far fa-trash-alt"})])])])})),0),0!==t.cart.total?s("tfoot",{staticClass:"bg-light"},[s("tr",[s("td",{staticClass:"text-right border-top-0",attrs:{colspan:"4"}},[t._v("總計")]),s("td",{staticClass:"h6 text-danger border-top-0"},[t._v(t._s(t._f("currencyFilter")(t.cart.final_total)))])])]):t._e()]),s("router-link",{staticClass:"btn btn-block btn-primary",attrs:{to:"checkout"}},[t._v("結帳去")])],1):s("div",{staticClass:"width p-3"},[s("div",{staticClass:"text-center"},[s("h6",{staticClass:"text-primary"},[t._v("您的購物車目前是空的")]),s("router-link",{staticClass:"btn btn-heavy btn-sm",attrs:{to:"customer_orders"}},[t._v("繼續逛逛")])],1)])])])])])])],1)])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],r=(s("99af"),s("a434"),{props:["data"],data:function(){return{number:"",cart:{},favnumber:"",favList:this.data}},methods:{updateCart:function(t){this.number=t},getCart:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart");t.axios.get(a).then((function(a){t.cart=a.data.data,t.number=a.data.data.carts.length}))},deleteCartItem:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("starlightselect","/cart/").concat(t);a.axios.delete(s).then((function(t){a.getCart(),a.$bus.$emit("message:push",t.data.message,"warning")}))},deleteFavItem:function(t,a){var s=this;t.favItem=!1,s.favList.splice(a,1),console.log(this.favList.length),this.$emit("deleteFav",this.favList)},addFavtoCart:function(t,a){console.log(t,a),this.$emit("addFavtoCart",t,a)}},created:function(){var t=this;t.$bus.$on("cart",(function(a){t.updateCart(a),t.getCart()})),t.getCart()}}),n=r,l=(s("8650"),s("2877")),c=Object(l["a"])(n,e,i,!1,null,"17a401d4",null);a["a"]=c.exports},fd2d:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"bg-white mt-5 footer-height"},[e("div",{staticClass:"text-center text-secondary "},[e("img",{staticClass:"img-fluid",staticStyle:{width:"150px",height:"150px"},attrs:{src:s("fef8"),alt:"",srcset:""}}),e("p",[t._v("© 2020 Starlight* All Rights Reserved")]),e("div",[e("ul",{staticClass:"list-unstyled d-flex justify-content-center"},[e("li",{staticClass:"mr-2"},[e("a",{staticClass:"text-accent",attrs:{href:"# "}},[e("i",{staticClass:"fab fa-facebook-square fa-2x"})])]),e("li",{staticClass:"mr-2"},[e("a",{staticClass:"text-accent",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram instagram fa-2x"})])]),e("li",{staticClass:"mr-2"},[e("a",{staticClass:"text-success",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-line fa-2x"})])])])])]),e("div",{staticClass:"bg-slight mt-3 py-4"},[e("div",{staticClass:"text-center"},[e("span",[t._v("資料、圖片來源皆來自網路，僅用來做為學習用途。")])])])])])}],r=(s("db6f"),s("2877")),n={},l=Object(r["a"])(n,e,i,!1,null,"3925e17b",null);a["a"]=l.exports},fef8:function(t,a,s){t.exports=s.p+"img/logo.f20dc4a5.svg"}}]);
//# sourceMappingURL=chunk-fec169c2.8a119ea6.js.map