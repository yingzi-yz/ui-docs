<template>
  <div class="tag-wrap">
    <yz-tip>tag标签</yz-tip> 

    <yz-tip class="mb-0">tag标签使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tag radius="15px" closable label-text="文字" @close="closeTag" ></yz-tag>
        </div>
      </template>
      <div class="show-code">    
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="tagCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="tagCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">tagGroup标签使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tag-group :tagsData.sync="tagData" draggable @close="closeTagGroup"></yz-tag-group>
        </div>
      </template>
      <div class="show-code">    
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="tagGroupCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="tagGroupCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">tag属性</yz-tip> 
    <yz-collapse v-model="tagAttribute">
      <yz-collapse-item title="colors" name="1">
        <div><span class="attribute-title">用处：</span>用于控制tag标签颜色</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>blue / green / red / orange / gray</div>
        <div><span class="attribute-title">默认值：</span>gray</div>
      </yz-collapse-item>
      <yz-collapse-item title="radius" name="2">
        <div><span class="attribute-title">用处：</span>用于设置tag标签椭圆</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>3px</div>
      </yz-collapse-item>
      <yz-collapse-item title="closable" name="3">
        <div><span class="attribute-title">用处：</span>用于控制tag标签是否显示×</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>false</div>
      </yz-collapse-item>
      <yz-collapse-item title="labelText" name="4">
        <div><span class="attribute-title">用处：</span>用于设置tag标签文本内容</div>
        <div><span class="attribute-title">类型：</span>string</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>标签</div>
      </yz-collapse-item>
      <yz-collapse-item title="draggable" name="5">
        <div><span class="attribute-title">用处：</span>用于设置tag标签是否可拖拽</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>false</div>
      </yz-collapse-item>
    </yz-collapse>  

    <yz-tip class="mb-0">tag事件</yz-tip> 
    <yz-collapse v-model="tagEvent">
      <yz-collapse-item title="close" name="1">
        <div><span class="attribute-title">用处：</span>点击×时候触发的回调，返回文本内容</div>
      </yz-collapse-item>
    </yz-collapse>    

    <yz-tip class="mb-0">tagGroup属性</yz-tip> 
    <yz-collapse v-model="tagGroupAttribute">
      <yz-collapse-item title="tagsData" name="1">
        <div><span class="attribute-title">用处：</span>用于显示tagGroup数据</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>[]</div>
      </yz-collapse-item>
      <yz-collapse-item title="draggable" name="2">
        <div><span class="attribute-title">用处：</span>用于设置tag标签是否可拖拽</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>false</div>
      </yz-collapse-item>
    </yz-collapse> 

    <yz-tip class="mb-0">tag事件</yz-tip> 
    <yz-collapse v-model="tagGroupEvent">
      <yz-collapse-item title="close" name="1">
        <div><span class="attribute-title">用处：</span>点击×时候触发的回调，返回文本内容</div>
      </yz-collapse-item>
    </yz-collapse>            
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'tagWrap',
  mixins: [commonMixins],
  data() {
    return {
      tagData: [{
        id: 1,
        colors: 'red',
        labelText: '标签1',
        closable: true,
        radius: '15px'
      },{
        id: 2,
        colors: 'gray',
        labelText: '标签2',
      },{
        id: 3,
        colors: 'green',
        labelText: '标签3',
      },{
        id: 4,
        colors: 'blue',
        labelText: '标签4',
      },{
        id: 5,
        colors: 'orange',
        labelText: '标签5',
      }],
      tagAttribute: ['1', '2', '3', '4', '5'],
      tagEvent: ['1'],
      tagGroupAttribute: ['1', '2'],
      tagGroupEvent: ['1'],
      tagCodeHtml:
`
<template>
  <yz-tag radius="15px" closable label-text="文字" @close="closeTag" ></yz-tag>
</template>
` ,  
      tagCodeJs:
`
export default {
  data() {
    return {

    }
  }
  methods: {
    closeTag(e) {
     this.$message({
        type: 'info',
        message: e
      })      
    }
  }
}
` ,  
      tagGroupCodeHtml:
`
<template>
  <yz-tag-group :tagsData.sync="tagData" draggable @close="closeTagGroup"></yz-tag-group>
</template>
` ,  
      tagGroupCodeJs:
`
export default {
  data() {
    return {
      tagData: [{
        id: 1,
        colors: 'red',
        labelText: '标签1',
        closable: true,
        radius: '15px'
      },{
        id: 2,
        colors: 'gray',
        labelText: '标签2',
      },{
        id: 3,
        colors: 'green',
        labelText: '标签3',
      },{
        id: 4,
        colors: 'blue',
        labelText: '标签4',
      },{
        id: 5,
        colors: 'orange',
        labelText: '标签5',
      }]      
    }
  }
  methods: {
    closeTagGroup(e) {
      this.$message({
        type: 'info',
        message: e
      })       
    }
  }
}
` ,  
    }
  },
  methods: {
    closeTag(e) {
     this.$message({
        type: 'info',
        message: e
      })      
    },
    closeTagGroup(e) {
      this.$message({
        type: 'info',
        message: e
      })       
    }
  }
}
</script>

<style lang="scss" scoped>

</style>