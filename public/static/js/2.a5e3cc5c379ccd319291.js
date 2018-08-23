webpackJsonp([2],{"2dLe":function(t,e){},"3PbG":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),r=s.n(n),i=s("Xxa5"),a=s.n(i),o=s("exGp"),c=s.n(o),l=(s("mtWM"),s("NYxO")),u=s("Zc39"),v=s("bOdI"),d=s.n(v),f={created:function(){var t=this;return c()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("checkout/getProvinces");case 2:case"end":return e.stop()}},e,t)}))()},data:function(){return{valid:!1,name:"customer 1",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length>10||"Name must be more than 10 characters"}],phone:"01681234123",phoneRules:[function(t){return!!t||"Phone is required"},function(t){return t&&t.length>8||"Phone must be more than 8 characters"}],province:null,district:null,ward:null,address:"123, Hung Vuong"}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){var e,s=(e={name:this.name,phone:this.phone,address:this.address},d()(e,"phone",this.phone),d()(e,"ward",this.wards.find(function(e){return e.value==t.ward})),d()(e,"district",this.districts.find(function(e){return e.value==t.district})),d()(e,"province",this.provinces.find(function(e){return e.value==t.province})),e);this.$store.commit("checkout/SET_CUSTOMER_INFO",s),this.$store.commit("checkout/SET_STEP",++this.step)}},prevStep:function(){this.$store.commit("checkout/SET_STEP",--this.step)}},computed:r()({},Object(l.b)({provinces:"checkout/provinces",districts:"checkout/districts",wards:"checkout/wards"}),{validBilling:{get:function(){return this.$store.getters["checkout/validBilling"]},set:function(t){this.$store.commit("checkout/SET_VALID_BILLING",t)}},step:{get:function(){return this.$store.getters["checkout/step"]},set:function(t){this.$store.commit("checkout/SET_STEP",t)}}}),watch:{province:function(){this.$store.dispatch("checkout/getDistricts",this.province)},district:function(){this.$store.dispatch("checkout/getWards",this.district)}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-flex",{attrs:{sm8:"","offset-sm2":"",md6:"","offset-md3":""}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.validBilling,callback:function(e){t.validBilling=e},expression:"validBilling"}},[s("h4",[t._v("Contact")]),t._v(" "),s("v-text-field",{staticClass:"pr-2",attrs:{label:"Full name","prepend-icon":"person",required:"",rules:[function(t){return!!t||"Full name is required"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),s("v-text-field",{staticClass:"pr-2",attrs:{label:"Phone",mask:"###########","prepend-icon":"smartphone",required:"",rules:[function(t){return!!t||"Phone is required"}]},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),s("v-divider"),t._v(" "),s("h4",{staticClass:"mt-2"},[t._v("Address")]),t._v(" "),s("v-autocomplete",{attrs:{items:t.provinces,label:"City / Province",rules:[function(t){return!!t||"City is required"}],"prepend-icon":"location_city",required:""},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},[s("v-slide-x-reverse-transition",{attrs:{slot:"append-outer",mode:"out-in"},slot:"append-outer"})],1),t._v(" "),s("v-autocomplete",{attrs:{required:"",items:t.districts,label:"District","prepend-icon":"domain",readonly:!t.province,rules:[function(t){return!!t||"District is required"}],hint:t.province?"":"Please select City field"},model:{value:t.district,callback:function(e){t.district=e},expression:"district"}},[s("v-slide-x-reverse-transition",{attrs:{slot:"append-outer",mode:"out-in"},slot:"append-outer"})],1),t._v(" "),s("v-autocomplete",{attrs:{items:t.wards,label:"Ward","prepend-icon":"domain",readonly:!t.district,rules:[function(t){return!!t||"Ward is required"}],hint:t.district?"":"Please select District field"},model:{value:t.ward,callback:function(e){t.ward=e},expression:"ward"}},[s("v-slide-x-reverse-transition",{attrs:{slot:"append-outer",mode:"out-in"},slot:"append-outer"})],1),t._v(" "),s("v-text-field",{staticClass:"pr-2",attrs:{rules:[function(t){return!!t||"Address is required"}],label:"Address (House number, street name)",clearable:"","prepend-icon":"local_convenience_store"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),t._v(" "),s("v-flex",{staticClass:"text-xs-center mt-2",attrs:{xs12:""}},[s("v-btn",{attrs:{flat:""},on:{click:t.prevStep}},[t._v("Previous")]),t._v(" "),s("v-btn",{staticClass:"white--text",attrs:{disabled:!t.validBilling,color:"black"},on:{click:t.submit}},[t._v("\n                Continue\n            ")])],1)],1)],1)},staticRenderFns:[]};var p=s("VU/8")(f,m,!1,function(t){s("qaPX")},null,null).exports,h={methods:{priceItem:function(t){return t.salePrice?t.salePrice*t.quantity:t.price*t.quantity},sumPrice:function(t,e){return t+e},getTotalPrice:function(){return this.items.length>0?this.items.map(this.priceItem).reduce(this.sumPrice):0}},computed:r()({},Object(l.b)({items:"cart/items",customerInfo:"checkout/customerInfo"}))},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{wrap:"",row:""}},[s("v-flex",{staticClass:"mb-3 mt-3",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-layout",[s("h3",{staticClass:"title"},[t._v("CUSTOMER: ")])]),t._v(" "),t.customerInfo?s("v-layout",{staticClass:"mb-2",attrs:{wrap:""}},[s("v-flex",{staticClass:"text-xs-left subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                Name:\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-right subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                "+t._s(t.customerInfo.name?t.customerInfo.name:"")+"\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-left subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                Phone:\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-right subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                "+t._s(t.customerInfo.phone?t.customerInfo.phone:"")+"\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-left subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                Province:\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-right subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                "+t._s(t.customerInfo.province?t.customerInfo.province.text:"")+"\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-left subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                District:\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-right subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                "+t._s(t.customerInfo.district?t.customerInfo.district.text:"")+"\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-left subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                Ward:\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-right subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                "+t._s(t.customerInfo.ward?t.customerInfo.ward.text:"")+"\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-left subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                Address:\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-right subheading mt-2 font-weight-bold",attrs:{xs6:""}},[t._v("\n                "+t._s(t.customerInfo.address?t.customerInfo.address:"")+"\n            ")])],1):t._e()],1),t._v(" "),s("v-flex",{staticClass:"mb-3",attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-layout",[s("h3",{staticClass:"title mb-3"},[t._v("PRODUCTS: ")])]),t._v(" "),s("v-layout",{staticClass:"mb-3",attrs:{wrap:""}},[s("v-flex",{staticClass:"text-xs-center font-weight-bold subheading",attrs:{xs6:""}},[t._v("Name")]),t._v(" "),s("v-flex",{staticClass:"text-xs-center font-weight-bold subheading",attrs:{xs6:""}},[t._v("Price")])],1),t._v(" "),t._l(t.items,function(e){return s("v-layout",{key:e.id,staticClass:"mb-2",attrs:{wrap:""}},[s("v-flex",{staticClass:"text-xs-left",attrs:{xs6:""}},[t._v("\n                "+t._s(e.name)+" x "+t._s(e.quantity)+"\n            ")]),t._v(" "),s("v-flex",{staticClass:"text-xs-right",attrs:{xs6:""}},[t._v("\n                "+t._s(t._f("currencyVND")(e.salePrice?e.salePrice*e.quantity:e.price*e.quantity))+"\n            ")])],1)}),t._v(" "),s("v-layout",{staticClass:"mb-2",attrs:{wrap:""}},[s("v-flex",{staticClass:"text-xs-left font-weight-bold title",attrs:{xs6:""}},[t._v("Total")]),t._v(" "),s("v-flex",{staticClass:"text-xs-right font-weight-bold title teal--text",attrs:{xs6:""}},[t._v(t._s(t._f("currencyVND")(t.getTotalPrice())))])],1)],2)],1)},staticRenderFns:[]};var _=s("VU/8")(h,x,!1,function(t){s("iHwU")},null,null).exports,b={components:{"app-cart":u.default,"app-billing":p,"app-order-info":_},data:function(){return{snackbar:!1,messageConfirm:"Confirm submit",confirm:!1}},methods:{nextStep:function(){this.$store.commit("checkout/SET_STEP",++this.step)},prevStep:function(){this.$store.commit("checkout/SET_STEP",--this.step)},placeOrder:function(){var t=this;return c()(a.a.mark(function e(){var s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s={name:t.customerInfo.name,phone:t.customerInfo.phone,province:t.customerInfo.province.value,district:t.customerInfo.district.value,ward:t.customerInfo.ward.value,address:t.customerInfo.address,items:t.items.map(function(t){return{_id:t._id,quantity:t.quantity}})},e.next=3,t.$store.dispatch("checkout/placeOrder",s);case 3:t.confirm=!1;case 4:case"end":return e.stop()}},e,t)}))()}},computed:r()({},Object(l.b)({validBilling:"checkout/validBilling",items:"cart/items",customerInfo:"checkout/customerInfo"}),{step:{get:function(){return this.$store.getters["checkout/step"]},set:function(t){this.$store.commit("checkout/SET_STEP",t)}}}),watch:{confirm:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){confirm&&this.placeOrder()})}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-flex",{staticClass:"mt-2 mb-3",attrs:{sm10:"","offset-sm1":""}},[s("v-stepper",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{color:"teal",complete:t.step>1,step:"1"}},[s("span",{staticClass:"teal--text"},[t._v("CHECK CART")])]),t._v(" "),s("v-divider"),t._v(" "),s("v-stepper-step",{attrs:{color:"teal",complete:t.step>2,step:"2"}},[t._v("BILLING")]),t._v(" "),s("v-divider"),t._v(" "),s("v-stepper-step",{attrs:{color:"teal",step:"3"}},[t._v("ORDER INFO")]),t._v(" "),s("v-divider")],1),t._v(" "),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h3",[t._v("CHECK CART")])]),t._v(" "),s("v-flex",{attrs:{sm8:"","offset-sm2":"",md6:"","offset-md3":""}},[s("app-cart")],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center mt-2",attrs:{xs12:""}},[s("v-btn",{attrs:{flat:""}},[t._v("Cancel")]),t._v(" "),s("v-btn",{attrs:{color:"black",dark:""},on:{click:t.nextStep}},[t._v("\n                    Continue\n                    ")])],1)],1)],1),t._v(" "),s("v-stepper-content",{attrs:{step:"2"}},[s("v-flex",{attrs:{xs12:""}},[s("h3",[t._v("BILLING DETAILS")])]),t._v(" "),s("app-billing")],1),t._v(" "),s("v-stepper-content",{attrs:{step:"3"}},[s("v-flex",{attrs:{xs12:""}},[s("h3",[t._v("ORDER INFO")])]),t._v(" "),s("app-order-info"),t._v(" "),s("v-flex",{staticClass:"text-xs-center mt-2",attrs:{xs12:""}},[s("v-btn",{attrs:{flat:""},on:{click:t.prevStep}},[t._v("Previous")]),t._v(" "),s("v-btn",{attrs:{color:"black",dark:"",large:""},on:{click:function(e){t.snackbar=!0}}},[t._v("\n                Place Order\n                ")])],1)],1)],1)],1),t._v(" "),s("v-snackbar",{attrs:{color:"black",top:"","multi-line":"",timeout:1e4},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.messageConfirm)+"\n    "),s("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n        Close\n    ")]),t._v(" "),s("v-btn",{attrs:{dark:"",flat:"",large:"",color:"teal"},on:{click:function(e){t.confirm=!0,t.snackbar=!1}}},[t._v("\n        Confirm\n    ")])],1)],1)},staticRenderFns:[]};var k=s("VU/8")(b,g,!1,function(t){s("2dLe")},null,null);e.default=k.exports},iHwU:function(t,e){},qaPX:function(t,e){}});
//# sourceMappingURL=2.a5e3cc5c379ccd319291.js.map