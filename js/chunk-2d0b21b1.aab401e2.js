(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b21b1"],{2360:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-wrap"},[e("yz-tip",[t._v("form表单")]),e("yz-tip",{staticClass:"mb-0"},[t._v("form表单使用方法")]),e("yz-card",{attrs:{"show-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"container-code"},[e("yz-form",{attrs:{model:t.formData,"label-width":"130px"}},[e("yz-form-item",{attrs:{label:"用户名"}},[e("yz-input",{model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),e("yz-form-item",{attrs:{label:"密码"}},[e("yz-input",{attrs:{type:"password","show-password":""},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1)],1)],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[e("div",{staticClass:"show-code"},[e("pre",[t._v("        "),e("code",[t._v("\n          "),e("div",{domProps:{textContent:t._s(t.formCode)}}),t._v("\n        ")]),t._v("\n      ")])])]),e("yz-tip",{staticClass:"mb-0"},[t._v("form属性")]),e("yz-collapse",{model:{value:t.formAttribute,callback:function(a){t.formAttribute=a},expression:"formAttribute"}},[e("yz-collapse-item",{attrs:{title:"model",name:"1"}},[e("div",[e("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于绑定form表单的值")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("object")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("- ")])]),e("yz-collapse-item",{attrs:{title:"label-width",name:"2"}},[e("div",[e("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于控制表单label宽度")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("80px ")])])],1),e("yz-tip",{staticClass:"mb-0"},[t._v("form-item属性")]),e("yz-collapse",{model:{value:t.formItemAttribute,callback:function(a){t.formItemAttribute=a},expression:"formItemAttribute"}},[e("yz-collapse-item",{attrs:{title:"label",name:"1"}},[e("div",[e("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于显示表单文本")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),e("div",[e("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("- ")])])],1)],1)},i=[],r={name:"formWrap",data:function(){return{formData:{username:"yingzi",password:""},formAttribute:[],formItemAttribute:[],formCode:'\n<template>\n  <yz-form :model="formData" label-width="130px">\n    <yz-form-item label="用户名">\n      <yz-input v-model="formData.username"></yz-input>\n    </yz-form-item>\n    <yz-form-item label="密码">\n      <yz-input v-model="formData.password" type="password" show-password></yz-input>\n    </yz-form-item>\n  </yz-form>\n</template>\n\nexport default {\n  data() {\n    return {\n      formData: {\n        username: \'yingzi\',\n        password: \'\',\n      },\n    }\n  }\n}\n'}}},o=r,n=e("2877"),l=Object(n["a"])(o,s,i,!1,null,"0d2a9ce6",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0b21b1.aab401e2.js.map