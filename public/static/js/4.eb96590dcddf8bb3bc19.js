webpackJsonp([4],{G5f8:function(t,e){},iDfZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),r=s.n(a),i=s("7XV+"),o=s("Mvkv"),c=s("NYxO"),n={components:{"app-product":i.a,"app-drawer-cart":o.a},created:function(){this.getFavoriteItems()},methods:{getFavoriteItems:function(){this.$store.dispatch("product/getFavoriteItems")}},computed:r()({},Object(c.b)({favoriteItems:"product/favoriteItems",favorites:"product/favorites"})),watch:{favorites:"getFavoriteItems"}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{staticClass:"favorite",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"mt-3 justify-center",attrs:{xs12:""}},[e("h2",{staticClass:"related text-xs-center"},[this._v("FAVORITES PRODUCTS")]),this._v(" "),e("v-layout",{attrs:{row:"",wrap:""}},this._l(this.favoriteItems,function(t){return e("v-flex",{key:t._id,staticClass:"pa-1",attrs:{xs12:"",sm3:""}},[e("app-product",{attrs:{product:t}})],1)}))],1),this._v(" "),e("v-flex",{staticClass:"align-center",attrs:{xs12:""}},[e("v-card-actions",{staticClass:"justify-center"},[e("v-btn",{staticStyle:{"margin-bottom":"-110px"},attrs:{router:"",to:"/",dark:"",large:"",color:"teal"}},[this._v("\n                Continue shopping\n            ")])],1)],1),this._v(" "),e("app-drawer-cart")],1)},staticRenderFns:[]};var p=s("VU/8")(n,v,!1,function(t){s("G5f8")},"data-v-6db0ddb0",null);e.default=p.exports}});
//# sourceMappingURL=4.eb96590dcddf8bb3bc19.js.map