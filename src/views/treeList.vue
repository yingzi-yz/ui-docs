<template>
  <div class="tree-list-wrap">
    <yz-tip>treeList树状</yz-tip>

    <yz-tip class="mb-0">treeList树状使用方法</yz-tip>
    <yz-card show-footer>
      <template v-slot:header>
        <div class="container-code">
          <yz-tree-list :tree-data="treeData" :invariant-tree-data="treeData" :default-checked="[5, 12, 10]" @treeClick="treeClick"></yz-tree-list>
        </div>
      </template>
      <div class="show-code">
        <pre class="line-numbers">
          <code class="language-xml line-numbers" v-text="treeListCodeHtml"></code>
        </pre>
        <pre class="line-numbers">
          <code class="language-javascript line-numbers" v-text="treeListCodeJs"></code>
        </pre>
      </div>
      <template v-slot:footer></template>
    </yz-card>

    <yz-tip class="mb-0">treeList属性</yz-tip> 
    <yz-collapse v-model="treeListAttribute">
      <yz-collapse-item title="treeData" name="1">
        <div><span class="attribute-title">用处：</span>用于treeList所显示的数据</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>
      <yz-collapse-item title="treeType" name="2">
        <div><span class="attribute-title">用处：</span>指定treeList所展示类型</div>
        <div><span class="attribute-title">类型：</span>number</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>2</div>
      </yz-collapse-item>       
      <yz-collapse-item title="invariantTreeData" name="3">
        <div><span class="attribute-title">用处：</span>不会改变的数据，和treeData一样即可</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>     
      <yz-collapse-item title="defaultChecked" name="3">
        <div><span class="attribute-title">用处：</span>默认选中</div>
        <div><span class="attribute-title">类型：</span>array</div>
        <div><span class="attribute-title">可选值：</span>-</div>
        <div><span class="attribute-title">默认值：</span>-</div>
      </yz-collapse-item>     
    </yz-collapse>     

    <yz-tip class="mb-0">treeList事件</yz-tip> 
    <yz-collapse v-model="treeListEvent">
      <yz-collapse-item title="treeClick" name="1">
        <div><span class="attribute-title">用处：</span>复选框改变触发事件，返回选中的id</div>
      </yz-collapse-item>
    </yz-collapse>        
  </div>
</template>

<script>
import {commonMixins}  from '@/mixins/index.js'
export default {
  name: 'uploadWrap',
  mixins: [commonMixins],
  data() {
    return {
      treeData: [
      {
        "id": "12",
        "pid": "0",
        "label": "一级",
      },
      {
        "id": "11",
        "pid": "0",
        "label": "二级",
      },
      {
        "id": "8",
        "pid": "0",
        "label": "三级",
        child: [
        {
          "id": "10",
          "pid": "8",
          "label": "三级-1",
          child: [
          {
            "id": "13",
            "pid": "10",
            "label": "三级-1-1",
          },      
          {
            "id": "14",
            "pid": "10",
            "label": "三级-1-2",
          }]
        },
        {
          "id": "9",
          "pid": "8",
          "label": "三级-2",
          child: [ 
          {
              "id": "15",
              "pid": "9",
              "label": "三级-2-1",
          }]
        }]
      },          
      {
        "id": "5",
        "pid": "0",
        "label": "四级",
        child: [
        {
          "id": "7",
          "pid": "5",
          "label": "四级-1",
          "checkboxDisabled": true
        },
        {
          "id": "6",
          "pid": "5",
          "label": "四级-2",
        }]
      }], 
      treeListAttribute: ['1', '2', '3', '4'],
      treeListEvent: ['1'],
      treeListCodeHtml:
`
<template>
  <yz-tree-list :tree-data="treeData" :invariant-tree-data="treeData" :default-checked="[5, 12, 10]" @treeClick="treeClick"></yz-tree-list>
</template>

`,       
      treeListCodeJs:
`
export default {
  data() {
    return {
      treeData: [
      {
        "id": "12",
        "pid": "0",
        "label": "一级",
      },
      {
        "id": "11",
        "pid": "0",
        "label": "二级",
      },
      {
        "id": "8",
        "pid": "0",
        "label": "三级",
        child: [
        {
          "id": "10",
          "pid": "8",
          "label": "三级-1",
          child: [
          {
            "id": "13",
            "pid": "10",
            "label": "三级-1-1",
          },      
          {
            "id": "14",
            "pid": "10",
            "label": "三级-1-2",
          }]
        },
        {
          "id": "9",
          "pid": "8",
          "label": "三级-2",
          child: [ 
          {
              "id": "15",
              "pid": "9",
              "label": "三级-2-1",
          }]
        }]
      },          
      {
        "id": "5",
        "pid": "0",
        "label": "四级",
        child: [
        {
          "id": "7",
          "pid": "5",
          "label": "四级-1",
          "checkboxDisabled": true
        },
        {
          "id": "6",
          "pid": "5",
          "label": "四级-2",
        }]
      }],       
    }
  },  
  methods: {
    treeClick(e) {
      this.$message({
        type: 'success',
        message: '选中了'+e
      })
    },
  }
}
`,              
    }
  },
  methods: {
    treeClick(e) {
      this.$message({
        type: 'success',
        message: '选中了'+e
      })
    },
  }
}
</script>

<style lang="scss" scope>

</style>