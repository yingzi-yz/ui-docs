(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df13eca2"],{"1bc2":function(t,a,i){},d20c:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"drawer-wrap"},[i("yz-tip",[t._v("drawer抽屉")]),i("yz-tip",{staticClass:"mb-0"},[t._v("drawer抽屉使用方法")]),i("yz-card",{attrs:{"show-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[i("div",{staticClass:"container-code"},[i("yz-button",{attrs:{type:"primary"},on:{click:t.showTop}},[t._v("顶部显示")]),i("yz-button",{attrs:{type:"primary"},on:{click:t.showBottom}},[t._v("底部显示")]),i("yz-button",{attrs:{type:"primary"},on:{click:t.showLeft}},[t._v("左边显示")]),i("yz-button",{attrs:{type:"primary"},on:{click:t.showRight}},[t._v("右边显示")]),i("yz-drawer",{attrs:{position:t.position},model:{value:t.drawerData,callback:function(a){t.drawerData=a},expression:"drawerData"}})],1)]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[i("div",{staticClass:"show-code"},[i("pre",[t._v("        "),i("code",[t._v("\n          "),i("div",{domProps:{textContent:t._s(t.drawerCode)}}),t._v("\n        ")]),t._v("\n      ")])])]),i("yz-tip",{staticClass:"mb-0"},[t._v("drawer属性")]),i("yz-collapse",{model:{value:t.drawerAttribute,callback:function(a){t.drawerAttribute=a},expression:"drawerAttribute"}},[i("yz-collapse-item",{attrs:{title:"v-model",name:"1"}},[i("div",[i("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于控制drawer显示与隐藏")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("boolean")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("false ")])]),i("yz-collapse-item",{attrs:{title:"width",name:"2"}},[i("div",[i("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于控制drawer宽度")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("30% ")])]),i("yz-collapse-item",{attrs:{title:"height",name:"3"}},[i("div",[i("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于控制drawer高度")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("30% ")])]),i("yz-collapse-item",{attrs:{title:"position",name:"4"}},[i("div",[i("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("用于控制drawer出现位置")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("类型：")]),t._v("string")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("可选值：")]),t._v("-")]),i("div",[i("span",{staticClass:"attribute-title"},[t._v("默认值：")]),t._v("right ")])])],1),i("yz-tip",{staticClass:"mb-0"},[t._v("drawer插槽")]),i("yz-collapse",{model:{value:t.drawerSlots,callback:function(a){t.drawerSlots=a},expression:"drawerSlots"}},[i("yz-collapse-item",{attrs:{title:"header",name:"1"}},[i("div",[i("span",{staticClass:"attribute-title"},[t._v("用处：")]),t._v("标题区域的内容")])])],1)],1)},e=[],r={name:"drawerWrap",data:function(){return{drawerData:!1,position:"",drawerAttribute:["1","2","3","4"],drawerSlots:["1"],drawerCode:'\n<template>\n  <yz-button type="primary" @click="showTop">顶部显示</yz-button>\n  <yz-button type="primary" @click="showBottom">底部显示</yz-button>\n  <yz-button type="primary" @click="showLeft">左边显示</yz-button>\n  <yz-button type="primary" @click="showRight">右边显示</yz-button>\n  <yz-drawer v-model="drawerData" :position="position"></yz-drawer>\n</template>\n\nexport default {\n  data() {\n    return {\n      drawerData: false,\n      position: \'\',\n    }\n  }\n  methods: {\n    showTop() {\n      this.drawerData = true;\n      this.position = \'top\';\n    },\n    showBottom() {\n      this.drawerData = true;\n      this.position = \'bottom\';      \n    },\n    showLeft() {\n      this.drawerData = true;\n      this.position = \'left\';      \n    },\n    showRight() {\n      this.drawerData = true;\n      this.position = \'right\';      \n    }    \n  }\n}\n'}},methods:{showTop:function(){this.drawerData=!0,this.position="top"},showBottom:function(){this.drawerData=!0,this.position="bottom"},showLeft:function(){this.drawerData=!0,this.position="left"},showRight:function(){this.drawerData=!0,this.position="right"}}},n=r,o=(i("e04b"),i("2877")),l=Object(o["a"])(n,s,e,!1,null,"ec07c552",null);a["default"]=l.exports},e04b:function(t,a,i){"use strict";i("1bc2")}}]);
//# sourceMappingURL=chunk-df13eca2.2ad5f286.js.map