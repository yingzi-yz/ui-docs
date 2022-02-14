<template>
  <div class="select-list-wrap">
    <yz-tip>selectList选择框</yz-tip> 

    <yz-tip class="mb-0">selectList选择框使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-select-list :options="options" v-model="selectValue"></yz-select-list>
        </div>
      </template>
      <div class="show-code">    
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="selectListOneCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="selectListOneCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">selectList选择框多选使用方法</yz-tip> 
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-select-list :options="options" multiple v-model="selectMultipleValue"></yz-select-list>
        </div>
      </template>
      <div class="show-code">    
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="selectListTwoCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="selectListTwoCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card> 

    <yz-tip class="mb-0">selectList属性</yz-tip> 
    <yz-collapse v-model="selectListAttribute">
      <yz-collapse-item title="options" name="1">
        <div><span class="attribute-title">用处：</span>用于显示选择框数据</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>[]</div>
      </yz-collapse-item>
      <yz-collapse-item title="multiple" name="2">
        <div><span class="attribute-title">用处：</span>用于设置是否可以多选</div>
        <div><span class="attribute-title">类型：</span>boolean</div>
        <div><span class="attribute-title">可选值：</span>true / false</div>
        <div><span class="attribute-title">默认值：</span>false</div>
      </yz-collapse-item>
      <yz-collapse-item title="v-model" name="3">
        <div><span class="attribute-title">用处：</span>用于双向绑定值</div>
        <div><span class="attribute-title">类型：</span>string / array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>
    </yz-collapse>              
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'selectListWrap',
  mixins: [commonMixins],
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面',
        disabled: true
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],      
      selectValue: '',
      selectMultipleValue: [],
      selectListAttribute: ['1', '2', '3'],
      selectListOneCodeHtml:
`
<template>
  <yz-select-list :options="options" v-model="selectValue"></yz-select-list>
</template>
` ,  
      selectListOneCodeJs:
`
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面',
        disabled: true
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],      
      selectValue: '',
    }
  }
}
` ,  
      selectListTwoCodeHtml:
`
<template>
  <yz-select-list :options="options" multiple v-model="selectMultipleValue"></yz-select-list>
</template>
` ,  
      selectListTwoCodeJs:
`
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面',
        disabled: true
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],      
      selectMultipleValue: '',   
    }
  }
}
` ,  
    }
  },
}
</script>

<style lang="scss" scoped>

</style>