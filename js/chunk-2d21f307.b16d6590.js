(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f307"],{d984:function(t,n,i){"use strict";i.r(n);var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"confirm-wrap"},[i("yz-tip",[t._v("confirm消息框")]),i("yz-tip",{staticClass:"mb-0"},[t._v("confirm消息框使用方法")]),i("yz-card",{attrs:{"show-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"container-code"},[i("yz-button",{attrs:{type:"primary"},on:{click:t.showConfirm}},[t._v("confirm")])],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[i("div",{staticClass:"show-code"},[i("pre",[t._v("        "),i("code",[t._v("\n          "),i("div",{domProps:{textContent:t._s(t.confirmCode)}}),t._v("\n        ")]),t._v("\n      ")])])]),i("yz-tip",{staticClass:"mb-0"},[t._v("confirm属性")]),i("yz-collapse",{model:{value:t.confirmAttribute,callback:function(n){t.confirmAttribute=n},expression:"confirmAttribute"}},[i("yz-collapse-item",{attrs:{title:"title",name:"1"}},[i("div",[i("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于显示标题内容")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("提示 ")])]),i("yz-collapse-item",{attrs:{title:"message",name:"2"}},[i("div",[i("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于显示内容区域的内容")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("- ")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("- ")])])],1)],1)},e=[],o={name:"confirmWrap",data:function(){return{confirmAttribute:["1","2"],confirmCode:"\n<template>\n  <yz-button type=\"primary\" @click=\"showConfirm\">confirm</yz-button>\n</template>\n\nexport default {\n  methods: {\n    showConfirm() {\n      this.$confirm({\n        title: '这是标题',\n        message: '这是内容',\n      }).then(() => {\n        console.log('success');\n      }).catch(() => {\n        console.log('error');\n      })\n    }\n  }\n}\n"}},methods:{showConfirm:function(){this.$confirm({title:"这是标题",message:"这是内容"}).then((function(){console.log("success")})).catch((function(){console.log("error")}))}}},a=o,r=i("2877"),c=Object(r["a"])(a,s,e,!1,null,"670632f9",null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d21f307.b16d6590.js.map