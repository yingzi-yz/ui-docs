(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fff4668"],{"126c":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"upload-wrap"},[a("yz-tip",[t._v("upload上传")]),a("yz-tip",{staticClass:"mb-0"},[t._v("upload上传使用方法")]),a("yz-card",{attrs:{"show-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"container-code"},[a("yz-upload",{attrs:{"upload-limit":"2","upload-size":"1"},on:{successUpload:t.successUpload}})],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[a("div",{staticClass:"show-code"},[a("pre",{staticClass:"line-numbers"},[t._v("        "),a("code",{staticClass:"language-xml line-numbers",domProps:{textContent:t._s(t.uploadCodeHtml)}}),t._v("\n      ")]),a("pre",{staticClass:"line-numbers"},[t._v("        "),a("code",{staticClass:"language-javascript line-numbers",domProps:{textContent:t._s(t.uploadCodeJs)}}),t._v("\n      ")])])]),a("yz-tip",{staticClass:"mb-0"},[t._v("upload属性")]),a("yz-collapse",{model:{value:t.uploadAttribute,callback:function(s){t.uploadAttribute=s},expression:"uploadAttribute"}},[a("yz-collapse-item",{attrs:{title:"uploadType",name:"1"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("指定上传类型")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("img / video")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("img")])]),a("yz-collapse-item",{attrs:{title:"uploadLimit",name:"2"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("指定上传数量")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("number")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("9")])]),a("yz-collapse-item",{attrs:{title:"uploadSize",name:"3"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("指定上传大小，单位为m")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("number")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("-")])])],1),a("yz-tip",{staticClass:"mb-0"},[t._v("upload事件")]),a("yz-collapse",{model:{value:t.uploadEvent,callback:function(s){t.uploadEvent=s},expression:"uploadEvent"}},[a("yz-collapse-item",{attrs:{title:"successUpload",name:"1"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("成功上传的回调函数，返回formdata对象")])]),a("yz-collapse-item",{attrs:{title:"successDelete",name:"2"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("成功删除的回调函数，返回索引")])])],1)],1)},i=[],l=a("1b62"),n={name:"uploadWrap",mixins:[l["a"]],data:function(){return{uploadAttribute:["1","2","3"],uploadEvent:["1","2"],uploadCodeHtml:'\n<template>\n  <yz-upload upload-limit="2" upload-size="1" @successUpload="successUpload"></yz-upload>\n</template>\n\n',uploadCodeJs:"\nexport default {\n  data() {\n    return {\n      \n    }\n  },  \n  methods: {\n    successUpload(form) {\n      this.$message({\n        type: 'success',\n        message: '上传成功了'+form\n      })\n    },\n  }\n}\n"}},methods:{successUpload:function(t){this.$message({type:"success",message:"上传成功了"+t})}}},o=n,u=a("2877"),p=Object(u["a"])(o,e,i,!1,null,null,null);s["default"]=p.exports},"1b62":function(t,s,a){"use strict";a.d(s,"a",(function(){return e}));var e={mounted:function(){Prism.highlightAll()}}}}]);
//# sourceMappingURL=chunk-1fff4668.5134feb2.js.map