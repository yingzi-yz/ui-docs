(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d214069"],{aed3:function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkbox-wrap"},[a("yz-tip",[t._v("checkbox多选框")]),a("yz-tip",{staticClass:"mb-0"},[t._v("checkbox多选框使用方法")]),a("yz-card",{attrs:{"show-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"container-code"},[a("yz-checkbox",{attrs:{label:"选中"},model:{value:t.checkboxData,callback:function(e){t.checkboxData=e},expression:"checkboxData"}})],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[a("div",{staticClass:"show-code"},[a("pre",[t._v("        "),a("code",[t._v("\n          "),a("div",{domProps:{textContent:t._s(t.checkboxCode)}}),t._v("\n        ")]),t._v("\n      ")])])]),a("yz-tip",{staticClass:"mb-0"},[t._v("checkbox多选框组使用方法")]),a("yz-card",{attrs:{"show-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"container-code"},[a("yz-checkbox-group",{model:{value:t.checkboxGroupData,callback:function(e){t.checkboxGroupData=e},expression:"checkboxGroupData"}},[a("yz-checkbox",{attrs:{label:"吃饭"}}),a("yz-checkbox",{attrs:{label:"睡觉"}}),a("yz-checkbox",{attrs:{label:"打豆豆"}})],1)],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[a("div",{staticClass:"show-code"},[a("pre",[t._v("        "),a("code",[t._v("\n          "),a("div",{domProps:{textContent:t._s(t.checkboxGroupCode)}}),t._v("\n        ")]),t._v("\n      ")])])]),a("yz-tip",{staticClass:"mb-0"},[t._v("checkbox属性")]),a("yz-collapse",{model:{value:t.checkboxAttribute,callback:function(e){t.checkboxAttribute=e},expression:"checkboxAttribute"}},[a("yz-collapse-item",{attrs:{title:"v-model",name:"1"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于双向绑定checkbox值")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("boolean")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("false ")])]),a("yz-collapse-item",{attrs:{title:"label",name:"2"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于设置checkbox的值，若checkbox无包裹内容，label会成为文本内容")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("- ")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("- ")])]),a("yz-collapse-item",{attrs:{title:"name",name:"3"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于原生name属性")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("- ")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("- ")])])],1),a("yz-tip",{staticClass:"mb-0"},[t._v("checkbox-group属性")]),a("yz-collapse",{model:{value:t.checkboxGroupAttribute,callback:function(e){t.checkboxGroupAttribute=e},expression:"checkboxGroupAttribute"}},[a("yz-collapse-item",{attrs:{title:"v-model",name:"1"}},[a("div",[a("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于双向绑定checkbox-box值")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("array")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),a("div",[a("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("- ")])])],1)],1)},o=[],s={name:"checkboxWrap",data:function(){return{checkboxData:!0,checkboxGroupData:["吃饭","睡觉","打豆豆"],checkboxAttribute:[],checkboxGroupAttribute:[],checkboxCode:'\n<template v-slot:header>\n  <yz-checkbox v-model="checkboxData" label="选中"></yz-checkbox>\n</template>\n\nexport default {\n  data() {\n    return {\n      checkboxData: true,\n    }\n  }\n}  \n',checkboxGroupCode:'\n<template>\n  <yz-checkbox-group v-model="checkboxGroupData">\n    <yz-checkbox label="吃饭"></yz-checkbox>\n    <yz-checkbox label="睡觉"></yz-checkbox>\n    <yz-checkbox label="打豆豆"></yz-checkbox>\n  </yz-checkbox-group>\n</template>\n\nexport default {\n  data() {\n    return {\n      checkboxGroupData: [\'吃饭\', \'睡觉\', \'打豆豆\'],\n    }\n  }\n} \n'}}},i=s,l=a("2877"),n=Object(l["a"])(i,c,o,!1,null,"2911f153",null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d214069.400e5d44.js.map