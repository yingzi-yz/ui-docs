(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-959d0bae"],{"0b4d":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"message-wrap"},[e("yz-tip",[s._v("message消息")]),e("yz-tip",{staticClass:"mb-0"},[s._v("message消息使用方法")]),e("yz-card",{attrs:{"show-footer":""},scopedSlots:s._u([{key:"header",fn:function(){return[e("div",{staticClass:"container-code"},[e("yz-button",{attrs:{type:"info"},on:{click:s.showInfoMessage}},[s._v("info")]),e("yz-button",{attrs:{type:"success"},on:{click:s.showSuccessMessage}},[s._v("success")]),e("yz-button",{attrs:{type:"warning"},on:{click:s.showWarningMessage}},[s._v("warning")]),e("yz-button",{attrs:{type:"danger"},on:{click:s.showErrorMessage}},[s._v("error")])],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[e("div",{staticClass:"show-code"},[e("pre",[s._v("        "),e("code",[s._v("\n          "),e("div",{domProps:{textContent:s._s(s.messageCode)}}),s._v("\n        ")]),s._v("\n      ")])])]),e("yz-tip",{staticClass:"mb-0"},[s._v("message属性")]),e("yz-collapse",{model:{value:s.messageAttribute,callback:function(t){s.messageAttribute=t},expression:"messageAttribute"}},[e("yz-collapse-item",{attrs:{title:"type",name:"1"}},[e("div",[e("span",{staticClass:"attribute-title"},[s._v("用处：")]),s._v("用于控制message类型")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("类型：")]),s._v("string")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("可选值：")]),s._v("-")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("默认值：")]),s._v("- ")])]),e("yz-collapse-item",{attrs:{title:"message",name:"2"}},[e("div",[e("span",{staticClass:"attribute-title"},[s._v("用处：")]),s._v("用于显示message文本")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("类型：")]),s._v("string")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("可选值：")]),s._v("- ")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("默认值：")]),s._v("- ")])]),e("yz-collapse-item",{attrs:{title:"duration",name:"3"}},[e("div",[e("span",{staticClass:"attribute-title"},[s._v("用处：")]),s._v("用于控制message显示时间")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("类型：")]),s._v("number")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("可选值：")]),s._v("- ")]),e("div",[e("span",{staticClass:"attribute-title"},[s._v("默认值：")]),s._v("3000 ")])])],1)],1)},n=[],i={name:"messageWrap",data:function(){return{messageAttribute:[],messageCode:"\n<template>\n  <yz-button type=\"info\" @click=\"showInfoMessage\">info</yz-button>\n  <yz-button type=\"success\" @click=\"showSuccessMessage\">success</yz-button>\n  <yz-button type=\"warning\" @click=\"showWarningMessage\">warning</yz-button>\n  <yz-button type=\"danger\" @click=\"showErrorMessage\">error</yz-button>\n</template>\n\nexport default {\n  methods: {\n    showInfoMessage() {\n      this.$message({\n        type: 'info',\n        message: '这是info提示',\n      })\n    },\n    showSuccessMessage() {\n      this.$message({\n        type: 'success',\n        message: '这是success提示'\n      })\n    },\n    showWarningMessage() {\n      this.$message({\n        type: 'warning',\n        message: '这是warning提示'\n      })\n    },\n    showErrorMessage() {\n      this.$message({\n        type: 'error',\n        message: '这是error提示'\n      })\n    }\n  }\n}\n"}},methods:{showInfoMessage:function(){this.$message({type:"info",message:"这是info提示"})},showSuccessMessage:function(){this.$message({type:"success",message:"这是success提示"})},showWarningMessage:function(){this.$message({type:"warning",message:"这是warning提示"})},showErrorMessage:function(){this.$message({type:"error",message:"这是error提示"})}}},o=i,r=(e("8af8"),e("2877")),c=Object(r["a"])(o,a,n,!1,null,"2e660261",null);t["default"]=c.exports},5684:function(s,t,e){},"8af8":function(s,t,e){"use strict";e("5684")}}]);
//# sourceMappingURL=chunk-959d0bae.71eb6c07.js.map