(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2080da"],{a2c6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit-wrap"},[a("yz-tip",[t._v("edit编辑框")]),a("yz-tip",{staticClass:"mb-0"},[t._v("edit编辑框使用方法")]),a("yz-card",{attrs:{"show-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"container-code"},[a("yz-edit",{attrs:{content:""},model:{value:t.editData,callback:function(e){t.editData=e},expression:"editData"}})],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[a("div",{staticClass:"show-code"},[a("pre",[t._v("        "),a("code",[t._v("\n          "),a("div",{domProps:{textContent:t._s(t.editCode)}}),t._v("\n        ")]),t._v("\n      ")])])]),a("yz-tip",{staticClass:"mb-0"},[t._v("edit-group编辑框使用方法")]),a("yz-card",{attrs:{"show-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"container-code"},[a("yz-edit-group",{attrs:{only:""}},[a("yz-edit",{attrs:{content:""},model:{value:t.editDataGroupDataFirst,callback:function(e){t.editDataGroupDataFirst=e},expression:"editDataGroupDataFirst"}}),a("yz-edit",{model:{value:t.editDataGroupDataSecond,callback:function(e){t.editDataGroupDataSecond=e},expression:"editDataGroupDataSecond"}})],1)],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[a("div",{staticClass:"show-code"},[a("pre",[t._v("        "),a("code",[t._v("\n          "),a("div",{domProps:{textContent:t._s(t.editGroupCode)}}),t._v("\n        ")]),t._v("\n      ")])])]),a("yz-tip",{staticClass:"mb-0"},[t._v("edit属性")]),a("yz-collapse",{model:{value:t.editAttribute,callback:function(e){t.editAttribute=e},expression:"editAttribute"}},[a("yz-collapse-item",{attrs:{title:"v-model",name:"1"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于双向绑定edit值")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("- ")])]),a("yz-collapse-item",{attrs:{title:"content",name:"2"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于当文本删除完dom是否占空间")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("boolean")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("- ")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("false ")])])],1),a("yz-tip",{staticClass:"mb-0"},[t._v("edit-group属性")]),a("yz-collapse",{model:{value:t.editGroupAttribute,callback:function(e){t.editGroupAttribute=e},expression:"editGroupAttribute"}},[a("yz-collapse-item",{attrs:{title:"only",name:"1"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于控制是否只能显示一个编辑框")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("boolean")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("false ")])])],1)],1)},n=[],s={name:"editWrap",data:function(){return{editData:"双击更改内容",editDataGroupDataFirst:"双击更改内容",editDataGroupDataSecond:"双击更改内容",editAttribute:[],editGroupAttribute:[],editCode:"\n<template>\n  <yz-edit v-model=\"editData\" content></yz-edit>\n</template>\n\nexport default {\n  data() {\n    return {\n      editData: '双击更改内容',\n    }\n  }\n}\n",editGroupCode:"\n<template>\n  <yz-edit-group only>\n    <yz-edit v-model=\"editDataGroupDataFirst\" content></yz-edit>\n    <yz-edit v-model=\"editDataGroupDataSecond\"></yz-edit>\n  </yz-edit-group>\n</template>\n\nexport default {\n  data() {\n    return {\n      editDataGroupDataFirst: '双击更改内容',\n      editDataGroupDataSecond: '双击更改内容',\n    }\n  }\n}\n"}}},o=s,d=a("2877"),r=Object(d["a"])(o,i,n,!1,null,"ec3b53ce",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d2080da.98b8b688.js.map